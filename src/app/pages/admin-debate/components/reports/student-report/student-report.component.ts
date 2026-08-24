import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ts-student-report',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="report-container"><h2>Student Report</h2><p>Coming soon</p></div>`,
  styles: [`
    .report-container { max-width: 1200px; margin: 0 auto; padding: 24px; }
  `]
})
export class StudentReportComponent {}
