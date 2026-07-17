import Component from '../../core/Component.js';
import Observer from '../../core/Observer.js';
import { escapeHtml } from '../../core/Helpers.js';

export default class Parents extends Component {
  render() {
    const { texts, people } = this.config;

    const renderNames = (namesArray) => {
      return namesArray.map(name => `<span class="parents-name">${escapeHtml(name)}</span>`).join('');
    };

    return `
      <section class="parents-section" id="parents">
        <div class="parents-container reveal-on-scroll">
          <h2 class="parents-title">${escapeHtml(texts.parents.title)}</h2>
          <div class="parents-divider"></div>
          <div class="parents-grid">
            <div class="parents-column">
              <span class="parents-label">${escapeHtml(texts.parents.brideLabel)}</span>
              <div class="parents-names-list">
                ${renderNames(people.parents.bride)}
              </div>
            </div>
            <div class="parents-column">
              <span class="parents-label">${escapeHtml(texts.parents.groomLabel)}</span>
              <div class="parents-names-list">
                ${renderNames(people.parents.groom)}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  init() {
    const observer = Observer.createRevealObserver();
    const container = document.querySelector('#parents .reveal-on-scroll');
    if (container) {
      observer.observe(container);
    }
  }
}
