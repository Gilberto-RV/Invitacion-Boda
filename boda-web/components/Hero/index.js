import Component from '../../core/Component.js';
import { formatDate } from '../../core/Helpers.js';

export default class Hero extends Component {
  render() {
    const { event, texts, assets } = this.config;
    const dateFormatted = formatDate(event.date);

    return `
      <section class="hero-section" id="hero" style="background-image: linear-gradient(var(--color-overlay), var(--color-overlay)), url('${assets.heroBg}');">
        <div class="hero-content">
          <span class="hero-subtitle">${texts.hero.subtitle}</span>
          <h1 class="hero-title">
            <span class="name-bride">${event.bride}</span>
            <span class="ampersand">&</span>
            <span class="name-groom">${event.groom}</span>
          </h1>
          <div class="hero-divider"></div>
          <p class="hero-date">${dateFormatted}</p>
        </div>
        <div class="scroll-indicator">
          <span>${texts.common.scrollDown}</span>
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
      }, 200);
    }
  }
}
