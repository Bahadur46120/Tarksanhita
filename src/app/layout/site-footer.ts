import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ts-site-footer',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="site-footer">
      <div class="container">
        <div class="foot-grid">

          <div>
            <h5>About Tarksanhita</h5>
            <div class="foot-brand">
              <img src="assets/brand/tarksanhita-logo.jpeg" alt="Tarksanhita emblem" />
              <div class="t">
                <div class="n">TARKSANHITA</div>
                <div class="s">The Debate on Logic</div>
              </div>
            </div>
            <p>
              A centre for law, logic, debate and knowledge — convening motions, moot
              courts and public lectures for members who reason from evidence and argue
              in good faith. Established 2016.
            </p>
            <div class="foot-social">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="X">X</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="YouTube">&#9654;</a>
              <a href="#" aria-label="Instagram">&#9678;</a>
            </div>
          </div>

          <div>
            <h5>Quick Links</h5>
            <ul class="foot-links">
              <li><a routerLink="/debates">Active Debates</a></li>
              <li><a routerLink="/events">Upcoming Events</a></li>
              <li><a routerLink="/notices">Notices</a></li>
              <li><a routerLink="/gallery">Gallery</a></li>
              <li><a routerLink="/contact">Contact</a></li>
              <li><a routerLink="/careers">Careers</a></li>
            </ul>
          </div>

          <div>
            <h5>The Centre</h5>
            <ul class="foot-links">
              <li><a routerLink="/institution">The Institution</a></li>
              <li><a routerLink="/faculty">Governing Council</a></li>
              <li><a routerLink="/events">Moot Courts &amp; Competitions</a></li>
              <li><a routerLink="/gallery">Photographs &amp; Video</a></li>
              <li><a routerLink="/research">Research &amp; Commentary</a></li>
            </ul>
          </div>

          <div>
            <h5>The Forum</h5>
            <ul class="foot-links">
              <li><a routerLink="/debates">Motions Before the Forum</a></li>
              <li><a routerLink="/debates/start">Propose a Motion</a></li>
              <li><a routerLink="/articles">Articles</a></li>
              <li><a routerLink="/notices">Notices</a></li>
              <li><a routerLink="/news">News</a></li>
            </ul>
          </div>

          <div>
            <h5>Contact</h5>
            <ul class="foot-contact">
              <li><span class="ic">&#9673;</span><span>Tarksanhita Centre, Knowledge Park Road,<br />New Delhi 110 001, India</span></li>
              <li><span class="ic">&#9990;</span><span>+91 11 4000 0000<br />+91 11 4000 0001 (Events Desk)</span></li>
              <li><span class="ic">&#9993;</span><span>info&#64;tarksanhita.in<br />events&#64;tarksanhita.in</span></li>
              <li><span class="ic">&#9719;</span><span>Mon&ndash;Sat, 09:30&ndash;17:30 IST</span></li>
            </ul>
          </div>

        </div>
      </div>

      <div style="border-top:1px solid rgba(255,255,255,.1)">
        <div class="container foot-bottom">
          <div>
            &copy; {{ year }} Tarksanhita. All Rights Reserved.
            <span class="credit">Developed by <b>Bahadur Chaudhary</b></span>
          </div>
          <nav aria-label="Legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Disclaimer</a>
            <a href="#">Accessibility</a>
            <a routerLink="/notices">Sitemap</a>
          </nav>
        </div>
      </div>
    </footer>
  `
})
export class SiteFooter {
  readonly year = new Date().getFullYear();
}
