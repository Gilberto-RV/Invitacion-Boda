import Component from '../../core/Component.js';
import Observer from '../../core/Observer.js';
import { escapeHtml } from '../../core/Helpers.js';

export default class Entertainment extends Component {
  render() {
    const { texts, people } = this.config;

    if (!people || !people.entertainment || people.entertainment.length === 0) {
      return '';
    }

    const title = texts.entertainment && texts.entertainment.subtitle 
      ? texts.entertainment.subtitle 
      : (texts.entertainment && texts.entertainment.title ? texts.entertainment.title : 'Para amenización en nuestra Boda');

    const renderNames = (namesArray) => {
      return namesArray
        .map(name => `<div class="entertainment-artist"><span class="entertainment-name">${escapeHtml(name)}</span></div>`)
        .join('');
    };

    return `
      <section class="entertainment-section" id="entertainment">
        <div class="entertainment-container reveal-on-scroll">
          <div class="entertainment-icon-decor">🎵</div>
          <h2 class="entertainment-title">${escapeHtml(title)}</h2>
          <div class="entertainment-divider"></div>
          <div class="entertainment-card">
            ${renderNames(people.entertainment)}
          </div>
        </div>
      </section>
    `;
  }

  init() {
    const observer = Observer.createRevealObserver();
    const container = document.querySelector('#entertainment .reveal-on-scroll');
    if (container) {
      observer.observe(container);
    }
  }
}
