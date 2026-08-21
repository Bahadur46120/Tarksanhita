import { Injectable, signal } from '@angular/core';

const FONT_KEY = 'ts.fontIndex';
const CONTRAST_KEY = 'ts.highContrast';
const SIZES = [14, 15, 16, 17, 18, 19];
const DEFAULT_INDEX = 2;

/**
 * Accessibility preferences exposed by the header controls: text scaling and a
 * high-contrast mode. Both persist across visits.
 */
@Injectable({ providedIn: 'root' })
export class UiService {
  private readonly fontIndex = signal(this.readNumber(FONT_KEY, DEFAULT_INDEX));
  readonly highContrast = signal(localStorage.getItem(CONTRAST_KEY) === 'true');

  constructor() {
    this.applyFont();
    this.applyContrast();
  }

  changeFont(step: number): void {
    const next = step === 0
      ? DEFAULT_INDEX
      : Math.min(SIZES.length - 1, Math.max(0, this.fontIndex() + step));
    this.fontIndex.set(next);
    localStorage.setItem(FONT_KEY, String(next));
    this.applyFont();
  }

  toggleContrast(): void {
    this.highContrast.update(v => !v);
    localStorage.setItem(CONTRAST_KEY, String(this.highContrast()));
    this.applyContrast();
  }

  /** Reads a short page summary aloud where the browser supports speech synthesis. */
  speak(text: string): void {
    if (!('speechSynthesis' in window)) return;
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    speechSynthesis.speak(utterance);
  }

  private applyFont(): void {
    document.documentElement.style.setProperty('--fs', `${SIZES[this.fontIndex()]}px`);
  }

  private applyContrast(): void {
    document.body.classList.toggle('hc', this.highContrast());
  }

  private readNumber(key: string, fallback: number): number {
    const raw = Number(localStorage.getItem(key));
    return Number.isInteger(raw) && raw >= 0 && raw < SIZES.length ? raw : fallback;
  }
}
