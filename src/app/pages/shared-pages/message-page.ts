import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

/** Renders 403 and 404 states inside the institutional shell. */
@Component({
  selector: 'ts-message-page',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="section" style="min-height:52vh;display:grid;place-items:center">
      <div class="container text-center" style="max-width:620px">
        <div style="font-family:var(--serif);font-size:clamp(3.4rem,12vw,6rem);color:var(--gold-500);line-height:1">
          {{ code() }}
        </div>
        <h1 style="margin:6px 0 10px">{{ heading() }}</h1>
        <div style="width:96px;height:3px;background:linear-gradient(90deg,var(--gold-600),var(--gold-300));margin:0 auto 16px"></div>
        <p class="muted" style="font-size:.94rem">{{ body() }}</p>
        <div style="margin-top:20px">
          <a class="btn btn-gold" routerLink="/">Return Home</a>
          <a class="btn btn-ghost" routerLink="/contact">Contact Us</a>
        </div>
      </div>
    </main>
  `
})
export class MessagePage implements OnInit {
  private readonly route = inject(ActivatedRoute);

  readonly code = signal('404');
  readonly heading = signal('Page Not Found');
  readonly body = signal('The page you requested does not exist or has been moved.');

  ngOnInit(): void {
    const data = this.route.snapshot.data;
    if (data['code']) this.code.set(data['code'] as string);
    if (data['heading']) this.heading.set(data['heading'] as string);
    if (data['body']) this.body.set(data['body'] as string);
  }
}
