import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MAIN_NAV, NavItem } from './nav.data';

/**
 * The dark institutional navigation bar. On desktop the dropdowns open on hover
 * (CSS); below 900px the bar collapses into a hamburger menu whose dropdowns
 * become tap-to-open accordions.
 */
@Component({
  selector: 'ts-main-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="mainnav" aria-label="Main">
      <div class="container">
        <button class="nav-toggle"
                type="button"
                [attr.aria-expanded]="mobileOpen()"
                aria-controls="navbar"
                (click)="mobileOpen.set(!mobileOpen())">
          <span class="bars"><i></i><i></i><i></i></span> MENU
        </button>

        <ul class="navbar" id="navbar" [class.open]="mobileOpen()">
          @for (item of nav; track item.label) {
            <li [class.open]="openIndex() === $index"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: item.link === '/' }">
              @if (item.children?.length) {
                <a [routerLink]="item.link" (click)="onParentClick($event, $index)">
                  {{ item.label }} <i class="caret"></i>
                </a>
                <div class="dropdown">
                  @for (child of item.children; track child.label + child.link) {
                    <a [routerLink]="child.link" (click)="closeAll()">{{ child.label }}</a>
                  }
                </div>
              } @else {
                <a [routerLink]="item.link" (click)="closeAll()">{{ item.label }}</a>
              }
            </li>
          }
        </ul>
      </div>
    </nav>
  `
})
export class MainNav {
  readonly nav: NavItem[] = MAIN_NAV;
  readonly mobileOpen = signal(false);
  readonly openIndex = signal(-1);

  /**
   * On narrow screens the top-level link toggles its submenu instead of
   * navigating, which is the only way to reach the children by touch.
   */
  onParentClick(event: Event, index: number): void {
    if (window.innerWidth > 900) {
      this.closeAll();
      return;
    }
    event.preventDefault();
    this.openIndex.set(this.openIndex() === index ? -1 : index);
  }

  closeAll(): void {
    this.mobileOpen.set(false);
    this.openIndex.set(-1);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeAll();
  }
}
