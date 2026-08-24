import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ts-system-settings',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="container"><h2>System Settings</h2><p>Coming soon</p></div>`,
  styles: [`
    .container { max-width: 1000px; margin: 0 auto; padding: 24px; }
  `]
})
export class SystemSettingsComponent {}
