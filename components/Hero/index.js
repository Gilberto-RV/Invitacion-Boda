import Component from '../../core/Component.js';
import { formatDate, escapeHtml } from '../../core/Helpers.js';

export default class Hero extends Component {
  render() {
    const { event, texts, assets } = this.config;
    const dateFormatted = formatDate(event.date);

    return `
      <section class="hero-section" id="hero">
        <div class="hero-bg" style="background-image: linear-gradient(rgba(24, 26, 24, 0.55), rgba(24, 26, 24, 0.7)), url('${assets.heroBg}');"></div>
        <div class="hero-content">
          <span class="hero-subtitle">${escapeHtml(texts.hero.subtitle)}</span>
          
          <div class="hero-photo-container">
            <div class="hero-photo-frame">
              <img src="${assets.heroBg}" alt="Boda de ${escapeHtml(event.bride)} y ${escapeHtml(event.groom)}" class="hero-photo-img">
            </div>
          </div>

          <h1 class="hero-title">
            <span class="name-bride">${escapeHtml(event.bride)}</span>
            <span class="ampersand">&</span>
            <span class="name-groom">${escapeHtml(event.groom)}</span>
          </h1>
          <div class="hero-divider"></div>
          <p class="hero-date">${dateFormatted}</p>
        </div>
        <div class="scroll-indicator">
          <span>${escapeHtml(texts.common.scrollDown)}</span>
          <div class="arrow"></div>
        </div>
      </section>
    `;
  }

  init() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.style.opacity = '0';
      heroContent.style.transform = 'translateY(20px)';
      heroContent.style.transition = 'opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      
      setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
      }, 150);
    }
  }
}
