import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ts-reports-main',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="reports-container"><h2>Reports</h2><p>Coming soon</p></div>`,
  styles: [`
    .reports-container { max-width: 1000px; margin: 0 auto; padding: 24px; }
  `]
})
export class ReportsMainComponent {}
