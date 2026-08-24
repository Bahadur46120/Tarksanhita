import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ts-category-list',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="list-container"><h2>Categories</h2><p>Coming soon</p></div>`,
  styles: [`
    .list-container { max-width: 1000px; margin: 0 auto; padding: 24px; }
  `]
})
export class CategoryListComponent {}
