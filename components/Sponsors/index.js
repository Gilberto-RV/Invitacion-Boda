import Component from '../../core/Component.js';
import Observer from '../../core/Observer.js';
import { escapeHtml } from '../../core/Helpers.js';

export default class Sponsors extends Component {
  render() {
    const { texts, people } = this.config;

    const renderSponsorGroup = (labelKey, peopleArray) => {
      if (!peopleArray || peopleArray.length === 0) return '';
      const list = peopleArray.map(name => `<span class="sponsor-name">${escapeHtml(name)}</span>`).join('');
      const roleLabel = texts.sponsors && texts.sponsors[labelKey] ? texts.sponsors[labelKey] : labelKey;
      return `
        <div class="sponsor-card">
          <span class="sponsor-role">${escapeHtml(roleLabel)}</span>
          <div class="sponsor-names-list">
            ${list}
          </div>
        </div>
      `;
    };

    const sponsorCards = people && people.sponsors
      ? Object.keys(people.sponsors).map(key => renderSponsorGroup(key, people.sponsors[key])).join('')
      : '';

    return `
      <section class="sponsors-section" id="sponsors">
        <div class="sponsors-container reveal-on-scroll">
          <h2 class="sponsors-title">${escapeHtml(texts.sponsors.title)}</h2>
          <div class="sponsors-divider"></div>
          <div class="sponsors-grid">
            ${sponsorCards}
          </div>
        </div>
      </section>
    `;
  }

  init() {
    const observer = Observer.createRevealObserver();
    const container = document.querySelector('#sponsors .reveal-on-scroll');
    if (container) {
      observer.observe(container);
    }
  }
}
