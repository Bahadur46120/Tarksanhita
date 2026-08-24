import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ts-participant-detail',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="detail-container"><h2>Participant Details</h2><p>Coming soon</p></div>`,
  styles: [`
    .detail-container { max-width: 800px; margin: 0 auto; padding: 24px; }
  `]
})
export class ParticipantDetailComponent {}
