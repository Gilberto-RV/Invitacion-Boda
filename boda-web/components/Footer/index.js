import Component from '../../core/Component.js';
import Observer from '../../core/Observer.js';
import { escapeHtml } from '../../core/Helpers.js';

export default class Footer extends Component {
  render() {
    const { texts, event } = this.config;
    return `
      <footer class="footer-section" id="footer">
        <div class="footer-container reveal-on-scroll">
          <p class="footer-thankyou">${escapeHtml(texts.footer.thankYou)}</p>
          <div class="footer-divider"></div>
          <div class="footer-initials">
            ${escapeHtml(event.bride[0])} & ${escapeHtml(event.groom[0])}
          </div>
          <p class="footer-date">${event.date.split('-')[2]} · ${event.date.split('-')[1]} · ${event.date.split('-')[0]}</p>
        </div>
      </footer>
    `;
  }

  init() {
    const observer = Observer.createRevealObserver();
    const container = document.querySelector('#footer .reveal-on-scroll');
    if (container) {
      observer.observe(container);
    }
  }
}
