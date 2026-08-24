import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ts-debate-analytics',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="analytics-container">
      <h2>Analytics & Reporting</h2>
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-label">Total Debates</div>
          <div class="stat-value">{{ totalDebates() }}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Total Participants</div>
          <div class="stat-value">{{ totalParticipants() }}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Topics</div>
          <div class="stat-value">{{ topicsCount() }}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Judges</div>
          <div class="stat-value">{{ judgesCount() }}</div>
        </div>
      </div>
      <div class="export-buttons">
        <button (click)="exportCSV()">📥 Export CSV</button>
        <button (click)="exportPDF()">📊 Export PDF</button>
      </div>
    </div>
  `,
  styles: [`
    .analytics-container { max-width: 1200px; margin: 0 auto; padding: 24px; }
    .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin: 24px 0; }
    .stat-card { background: white; padding: 24px; border-radius: 8px; border-left: 4px solid #4338ca; }
    .stat-label { font-size: 12px; color: #64748b; text-transform: uppercase; }
    .stat-value { font-size: 32px; font-weight: 700; color: #1e293b; margin: 12px 0; }
    .export-buttons { display: flex; gap: 12px; margin: 24px 0; }
    button { padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; background: #4338ca; color: white; }
    button:hover { opacity: 0.9; }
  `]
})
export class DebateAnalyticsComponent {
  readonly totalDebates = signal(45);
  readonly totalParticipants = signal(127);
  readonly topicsCount = signal(12);
  readonly judgesCount = signal(8);

  exportCSV(): void {
    alert('CSV export functionality coming soon');
  }

  exportPDF(): void {
    alert('PDF export functionality coming soon');
  }
}
