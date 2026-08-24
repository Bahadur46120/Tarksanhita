import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ts-topic-form',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="form-container"><h2>Topic Form</h2><p>Coming soon</p></div>`,
  styles: [`
    .form-container { max-width: 600px; margin: 0 auto; padding: 24px; }
  `]
})
export class TopicFormComponent {}
