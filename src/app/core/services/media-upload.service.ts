import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { EventMedia, MediaKind, MediaProvider } from '../models/models';

/** Emitted while a file is on its way to its host. */
export interface UploadEvent {
  /** 0–100. Stays at 0 until the browser reports the first chunk. */
  percent: number;
  /** Present on the final emission only. */
  media?: EventMedia;
}

const IMAGE_TYPES = /^image\/(jpeg|jpg|png|gif|webp|bmp|avif|heic|heif)$/i;
const VIDEO_TYPES = /^video\//i;
const VIDEO_EXTENSIONS = /\.(mp4|webm|ogv|ogg|mov|m4v)(\?.*)?$/i;
const IMAGE_EXTENSIONS = /\.(jpe?g|png|gif|webp|bmp|avif|svg)(\?.*)?$/i;

/**
 * Sends files to the host that can serve them and hands back a gallery record.
 *
 * Stills go to ImgBB and video to Cloudinary, both straight from the browser —
 * our own API never carries the bytes. Requests are made with XMLHttpRequest
 * rather than HttpClient for two reasons: the app's interceptors would attach
 * our bearer token to a third-party host, and the fetch backend the app is
 * configured with reports no upload progress.
 */
@Injectable({ providedIn: 'root' })
export class MediaUploadService {
  private readonly config = environment.media;

  /** True once Cloudinary has been given a cloud name and an unsigned preset. */
  get videoUploadEnabled(): boolean {
    return !!(this.config.cloudinary.cloudName && this.config.cloudinary.uploadPreset);
  }

  get imageMaxBytes(): number { return this.config.imgbb.maxBytes; }
  get videoMaxBytes(): number { return this.config.cloudinary.maxBytes; }

  isImageFile(file: File): boolean {
    return IMAGE_TYPES.test(file.type) || (!file.type && IMAGE_EXTENSIONS.test(file.name));
  }

  isVideoFile(file: File): boolean {
    return VIDEO_TYPES.test(file.type) || (!file.type && VIDEO_EXTENSIONS.test(file.name));
  }

  /**
   * Rejects a file this uploader cannot place, with wording an editor can act on.
   * Returns null when the file is acceptable.
   */
  reject(file: File): string | null {
    if (this.isImageFile(file)) {
      return file.size > this.imageMaxBytes
        ? `${file.name} is ${mb(file.size)} MB. Images must be under ${mb(this.imageMaxBytes)} MB.`
        : null;
    }

    if (this.isVideoFile(file)) {
      if (!this.videoUploadEnabled) {
        return `Video upload is not configured yet. Add the video with its YouTube, Vimeo or direct link instead.`;
      }
      return file.size > this.videoMaxBytes
        ? `${file.name} is ${mb(file.size)} MB. Videos must be under ${mb(this.videoMaxBytes)} MB.`
        : null;
    }

    return `${file.name} is not an image or a video.`;
  }

  /** Uploads one file to whichever host can serve it. */
  upload(file: File): Observable<UploadEvent> {
    return this.isVideoFile(file) ? this.uploadVideo(file) : this.uploadImage(file);
  }

  // ---------------------------------------------------------------- ImgBB

  private uploadImage(file: File): Observable<UploadEvent> {
    const form = new FormData();
    form.append('image', file);
    form.append('name', stripExtension(file.name));

    const url = this.config.proxyUrl
      ? `${this.config.proxyUrl}?kind=image`
      : `${this.config.imgbb.endpoint}?key=${encodeURIComponent(this.config.imgbb.apiKey)}`;

    return this.send(url, form, raw => this.fromImgbb(raw, file));
  }

  private fromImgbb(raw: unknown, file: File): EventMedia {
    const body = raw as {
      success?: boolean;
      error?: { message?: string };
      data?: {
        id?: string;
        url?: string;
        display_url?: string;
        delete_url?: string;
        width?: number | string;
        height?: number | string;
        size?: number | string;
        thumb?: { url?: string };
        medium?: { url?: string };
        image?: { url?: string };
      };
    };

    const data = body?.data;
    if (!data?.url && !data?.display_url) {
      throw new Error(body?.error?.message ?? 'ImgBB did not return an image URL.');
    }

    return this.record({
      kind: 'Image',
      url: data.display_url || data.url!,
      thumbUrl: data.thumb?.url || data.medium?.url || data.display_url || data.url,
      provider: 'imgbb',
      providerId: data.id,
      deleteUrl: data.delete_url,
      fileName: file.name,
      width: numberOr(data.width),
      height: numberOr(data.height),
      sizeBytes: numberOr(data.size) ?? file.size
    });
  }

  // ------------------------------------------------------------ Cloudinary

  private uploadVideo(file: File): Observable<UploadEvent> {
    const { cloudName, uploadPreset } = this.config.cloudinary;

    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', uploadPreset);

    const url = this.config.proxyUrl
      ? `${this.config.proxyUrl}?kind=video`
      : `https://api.cloudinary.com/v1_1/${encodeURIComponent(cloudName)}/video/upload`;

    return this.send(url, form, raw => this.fromCloudinary(raw, file));
  }

  private fromCloudinary(raw: unknown, file: File): EventMedia {
    const body = raw as {
      secure_url?: string;
      url?: string;
      public_id?: string;
      delete_token?: string;
      width?: number;
      height?: number;
      bytes?: number;
      error?: { message?: string };
    };

    const url = body?.secure_url || body?.url;
    if (!url) throw new Error(body?.error?.message ?? 'Cloudinary did not return a video URL.');

    return this.record({
      kind: 'Video',
      url,
      // Cloudinary renders a still from any frame; two seconds in avoids the
      // black frame most recordings open on.
      thumbUrl: url.replace('/upload/', '/upload/so_2,w_640,c_fill,q_auto/').replace(/\.[a-z0-9]+$/i, '.jpg'),
      provider: 'cloudinary',
      providerId: body.public_id,
      deleteUrl: body.delete_token
        ? `https://api.cloudinary.com/v1_1/${this.config.cloudinary.cloudName}/delete_by_token?token=${body.delete_token}`
        : undefined,
      fileName: file.name,
      width: body.width,
      height: body.height,
      sizeBytes: body.bytes ?? file.size
    });
  }

  // ------------------------------------------------------------ links

  /**
   * Builds a gallery record from a pasted address — a YouTube or Vimeo page, or
   * a file already hosted elsewhere. Returns null when the address is unusable.
   */
  fromLink(link: string): EventMedia | null {
    const url = link.trim();
    if (!/^https?:\/\//i.test(url)) return null;

    const youtube = youtubeId(url);
    if (youtube) {
      return this.record({
        kind: 'Video',
        url,
        thumbUrl: `https://img.youtube.com/vi/${youtube}/hqdefault.jpg`,
        provider: 'youtube',
        providerId: youtube
      });
    }

    const vimeo = vimeoId(url);
    if (vimeo) {
      return this.record({ kind: 'Video', url, provider: 'vimeo', providerId: vimeo });
    }

    const kind: MediaKind = VIDEO_EXTENSIONS.test(url) ? 'Video' : 'Image';
    return this.record({
      kind,
      url,
      thumbUrl: kind === 'Image' ? url : undefined,
      provider: 'external'
    });
  }

  // ------------------------------------------------------------ plumbing

  /** POSTs a multipart body and reports progress until the host answers. */
  private send(
    url: string,
    form: FormData,
    parse: (raw: unknown) => EventMedia
  ): Observable<UploadEvent> {
    return new Observable<UploadEvent>(subscriber => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.responseType = 'json';

      xhr.upload.onprogress = e => {
        if (e.lengthComputable) {
          subscriber.next({ percent: Math.round((e.loaded / e.total) * 100) });
        }
      };

      xhr.onerror = () => subscriber.error(new Error('The upload could not reach the media host.'));
      xhr.ontimeout = () => subscriber.error(new Error('The upload timed out.'));
      xhr.onabort = () => subscriber.complete();

      xhr.onload = () => {
        const raw = parseBody(xhr);

        if (xhr.status < 200 || xhr.status >= 300) {
          subscriber.error(new Error(hostMessage(raw) ?? `The media host refused the file (${xhr.status}).`));
          return;
        }

        try {
          subscriber.next({ percent: 100, media: parse(raw) });
          subscriber.complete();
        } catch (err) {
          subscriber.error(err);
        }
      };

      xhr.send(form);

      // Unsubscribing — the editor cancelled, or left the page — stops the transfer.
      return () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) xhr.abort();
      };
    });
  }

  /** Fills in the fields every record carries, whatever the host. */
  private record(partial: Omit<EventMedia, 'id' | 'sortOrder'> & { provider: MediaProvider }): EventMedia {
    return { id: newId(), sortOrder: 0, uploadedAt: new Date().toISOString(), ...partial };
  }
}

// ---------------------------------------------------------------- helpers

function parseBody(xhr: XMLHttpRequest): unknown {
  if (xhr.response && typeof xhr.response === 'object') return xhr.response;
  try {
    return JSON.parse(xhr.responseText || '{}');
  } catch {
    return null;
  }
}

function hostMessage(raw: unknown): string | undefined {
  const body = raw as { error?: { message?: string } | string; message?: string } | null;
  if (!body) return undefined;
  if (typeof body.error === 'string') return body.error;
  return body.error?.message ?? body.message;
}

function numberOr(value: number | string | undefined): number | undefined {
  if (value === undefined || value === null || value === '') return undefined;
  const n = Number(value);
  return Number.isFinite(n) ? n : undefined;
}

function stripExtension(name: string): string {
  return name.replace(/\.[^.]+$/, '').slice(0, 120);
}

function mb(bytes: number): string {
  return (bytes / (1024 * 1024)).toFixed(bytes < 1024 * 1024 * 10 ? 1 : 0);
}

export function newId(): string {
  const c = globalThis.crypto as Crypto | undefined;
  if (c?.randomUUID) return c.randomUUID().replace(/-/g, '');
  return `m${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
}

/** Accepts watch, share, shorts and embed forms. */
export function youtubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

export function vimeoId(url: string): string | null {
  const match = url.match(/vimeo\.com\/(?:video\/)?(\d{6,})/);
  return match ? match[1] : null;
}

/** The address to put in an iframe, or null when the file plays natively. */
export function embedSrc(media: { provider: string; providerId?: string; url: string }): string | null {
  if (media.provider === 'youtube') {
    const id = media.providerId ?? youtubeId(media.url);
    return id ? `https://www.youtube-nocookie.com/embed/${id}?rel=0` : null;
  }
  if (media.provider === 'vimeo') {
    const id = media.providerId ?? vimeoId(media.url);
    return id ? `https://player.vimeo.com/video/${id}` : null;
  }
  return null;
}
