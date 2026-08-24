import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ts-debate-scoring',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="scoring-container"><h2>Debate Scoring Interface</h2><p>Coming soon</p></div>`,
  styles: [`
    .scoring-container { max-width: 900px; margin: 0 auto; padding: 24px; }
  `]
})
export class DebateScoringComponent {}
