import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiService } from './core/services/ui.service';

@Component({
  selector: 'ts-root',
  standalone: true,
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<router-outlet />`
})
export class App {
  // Constructing the service applies the stored text-size and contrast settings
  // before the first page is painted.
  private readonly ui = inject(UiService);
}
