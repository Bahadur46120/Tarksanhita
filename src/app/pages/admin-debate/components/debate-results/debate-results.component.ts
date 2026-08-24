import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ts-debate-results',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="results-container"><h2>Debate Results</h2><p>Coming soon</p></div>`,
  styles: [`
    .results-container { max-width: 900px; margin: 0 auto; padding: 24px; }
  `]
})
export class DebateResultsComponent {}
