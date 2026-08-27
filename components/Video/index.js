import Component from '../../core/Component.js';
import Observer from '../../core/Observer.js';
import { escapeHtml } from '../../core/Helpers.js';

export default class Video extends Component {
  render() {
    const { texts, assets } = this.config;

    if (!assets || !assets.video) {
      return '';
    }

    const title = texts.video && texts.video.title ? texts.video.title : 'Nuestra Historia';
    const subtitle = texts.video && texts.video.subtitle ? texts.video.subtitle : '';

    return `
      <section class="video-section" id="video">
        <div class="video-container reveal-on-scroll">
          <div class="video-leaf-decor">🌿</div>
          <h2 class="video-title">${escapeHtml(title)}</h2>
          <div class="video-divider"></div>
          ${subtitle ? `<p class="video-subtitle">${escapeHtml(subtitle)}</p>` : ''}
          <div class="video-player-wrapper">
            <video class="video-element" controls playsinline preload="metadata">
              <source src="${assets.video}" type="video/mp4">
              Tu navegador no soporta el formato de video.
            </video>
          </div>
        </div>
      </section>
    `;
  }

  init() {
    const observer = Observer.createRevealObserver();
    const element = document.querySelector('#video .reveal-on-scroll');
    if (element) {
      observer.observe(element);
    }
  }
}
