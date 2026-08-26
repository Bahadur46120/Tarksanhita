# Gallery — Images & Video

Two kinds of record carry a gallery: **events**, and standalone **gallery
albums** created in the admin panel. The public `/gallery` page shows both.
Files are uploaded straight from the admin's browser to a media host; only the
record of where each file lives travels through the Tarksanhita API.

**Only an Administrator can add, edit or remove gallery media.** Editors may
still write the surrounding record — an event's date and venue, an album's
title — but the API refuses their uploads, and the editor shows them the gallery
read-only rather than controls that would fail.

| Asset  | Host       | Why |
|--------|------------|-----|
| Images | ImgBB      | Free, 32 MB per file, returns thumbnail and medium renditions. |
| Video  | Cloudinary | ImgBB does not host video. Cloudinary's unsigned preset allows browser-direct upload. |
| Video by link | YouTube / Vimeo / any direct URL | No hosting cost; played in the host's embed. |

---

## 1. Configuration

`src/environments/environment.ts` and `environment.prod.ts`:

```ts
media: {
  proxyUrl: '',                                   // set to route uploads through our API
  imgbb: {
    endpoint: 'https://api.imgbb.com/1/upload',
    apiKey: '266eddc5856d1b7f9d865769d3a9888e',
    maxBytes: 32 * 1024 * 1024
  },
  cloudinary: {
    cloudName: '',                                // ← fill in to enable video upload
    uploadPreset: '',                             // ← unsigned preset name
    maxBytes: 100 * 1024 * 1024
  },
  useMediaEndpoint: true
}
```

**Video upload stays disabled until `cloudName` and `uploadPreset` are filled in.**
Until then the editor still accepts video by link, and says so in the drop zone.

To create the Cloudinary preset: Settings → Upload → *Add upload preset* →
Signing mode **Unsigned** → save the preset name. Restrict it to a folder and to
video formats while you are there.

### About the ImgBB key

The key ships inside the JavaScript bundle, so anyone reading the page source can
use it against your quota. That is the accepted trade-off for browser-direct
upload. When you would rather it were private, add an upload endpoint to the API
that forwards the multipart body to ImgBB, then set `media.proxyUrl` to it — the
uploader posts there instead and nothing else changes.

---

## 2. Data shape

`EventItem.mediaItems` is a list of:

```jsonc
{
  "id": "9f2c…",              // stable, generated in the browser
  "kind": "Image",            // Image | Video
  "url": "https://i.ibb.co/…/photo.jpg",
  "thumbUrl": "https://i.ibb.co/…/photo-thumb.jpg",
  "provider": "imgbb",        // imgbb | cloudinary | youtube | vimeo | external
  "providerId": "abc123",
  "deleteUrl": "https://ibb.co/…/delete/…",
  "caption": "Inaugural session",
  "fileName": "opening.jpg",
  "width": 1600, "height": 1067, "sizeBytes": 482113,
  "sortOrder": 0,
  "isCover": true,
  "uploadedAt": "2026-08-26T09:14:00Z",
  "uploadedBy": "editor@tarksanhita.org"
}
```

At most one item carries `isCover`, and only a still can. The API mirrors the
cover's URL onto `EventItem.imageUrl`, which the listing cards and the homepage
already read — so an event with a gallery gets a real picture on its card with no
further work.

---

## 3. API endpoints

`MediaContentControllerBase<T>` carries these; `EventsController` and
`GalleryController` both inherit them, so `{resource}` below is `events` or
`gallery`. Reads are anonymous; **every write requires the Admin role**.

| Method | Route | Purpose |
|--------|-------|---------|
| `GET`    | `/api/{resource}/{id}/media` | The gallery, in display order. |
| `POST`   | `/api/{resource}/{id}/media` | Attach one item. Body is an `EventMedia`. Appended with `$push`, so simultaneous uploads cannot overwrite each other. |
| `PUT`    | `/api/{resource}/{id}/media/{mediaId}` | Edit caption, cover flag or position. |
| `PUT`    | `/api/{resource}/{id}/media` | Replace the whole list — used for reordering. |
| `DELETE` | `/api/{resource}/{id}/media/{mediaId}` | Detach one item. |

Albums also have `GET /api/gallery/recent?take=12` for the landing page.

Two behaviours worth knowing:

- **A full `PUT /api/events/{id}` with an empty `mediaItems` keeps the existing
  gallery.** A record update replaces the whole document, so a client that knows
  nothing about media would otherwise erase it. Clearing a gallery is done
  through `DELETE`.
- **Deleting an item does not delete the file from ImgBB or Cloudinary.** The
  host's own removal link is kept in `deleteUrl`. Cloudinary's unsigned token is
  called automatically and expires about ten minutes after upload; ImgBB's is a
  web page you open yourself.

---

## 4. How the admin panel uses it

Admin → **Events** → edit an event → *Photographs & video*, or
Admin → **Gallery** → new album → *Photographs & video*.

- Drop files on the panel or press *Choose files*; several at once is fine.
- Each upload shows its own progress bar and can fail on its own without
  disturbing the rest.
- *Add by link* takes a YouTube, Vimeo or direct file address.
- Per item: caption, ← → to reorder, **Cover** to choose the card picture,
  **View** to open the original, **Remove**.

The gallery is a form field, so it is saved with the record when you press Save.
Each change is *also* pushed to the media endpoints as you make it, so nothing is
lost if the browser closes mid-edit. On a brand-new event the endpoints are not
reachable yet (there is no id); items added then are kept and saved with the
first Save.

If the media endpoints are ever unavailable, the front end notices the first 404
and stops calling them for that session — the gallery still saves with the
record. No error is put in front of the editor.

---

## 5. Public display

- `/gallery` — the wall of tiles. Albums and events with media are merged and
  sorted newest first, with All / Photographs / Video filters and a search box.
- `/gallery/{slug}` — one album: description, then the thumbnail grid.
- `/events` — cards show the cover image, with a `▶ n` marker when the gallery
  holds video.
- `/events/{slug}` — the same grid under the agenda.

Clicking any thumbnail opens a lightbox: arrow keys or the on-screen arrows to
move, Esc to close. Uploaded video plays in the browser's own player; YouTube and
Vimeo play in the host's embed.

The gallery component reads `mediaItems` from any record, so pointing a third
content type at it later needs only `IMediaOwner` on that entity and a controller
extending `MediaContentControllerBase<T>`.

---

## 6. What happened to the Library

The reference library has come off the public site: `/library` now redirects to
`/gallery`, and the navigation carries **Gallery** where Library used to be.
Articles and Research Papers moved into a new **Publications** menu so neither is
left without a way in. The Library content type is untouched in the admin panel
and in the database — nothing has been deleted.

One loose end: `institution.html` still has a Library section with eight tiles
(Books, Bare Acts, Case Laws and so on) pointing at `/library`. They redirect to
the Gallery, which reads oddly. That section wants either removing or repointing
— it was left alone rather than changed without asking.
