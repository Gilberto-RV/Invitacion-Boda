import Component from '../../core/Component.js';
import Observer from '../../core/Observer.js';
import { escapeHtml } from '../../core/Helpers.js';

export default class Intro extends Component {
  render() {
    const { texts } = this.config;
    const paragraphs = escapeHtml(texts.intro.body)
      .split('\n\n')
      .map(p => `<p class="intro-paragraph">${p.replace(/\n/g, '<br>')}</p>`)
      .join('');

    return `
      <section class="intro-section" id="intro">
        <div class="intro-container reveal-on-scroll">
          <div class="intro-leaf-decor">🌿</div>
          <h2 class="intro-title">${escapeHtml(texts.intro.title)}</h2>
          <div class="intro-divider"></div>
          <div class="intro-body">
            ${paragraphs}
          </div>
        </div>
      </section>
    `;
  }

  init() {
    const observer = Observer.createRevealObserver();
    const element = document.querySelector('#intro .reveal-on-scroll');
    if (element) {
      observer.observe(element);
    }
  }
}
