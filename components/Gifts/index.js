import Component from '../../core/Component.js';
import Observer from '../../core/Observer.js';
import { escapeHtml } from '../../core/Helpers.js';

export default class Gifts extends Component {
  render() {
    const { texts } = this.config;
    const gifts = texts.gifts || {
      title: 'Mesa de Regalos',
      badge: 'Lluvia de Sobres',
      message: 'Dios nos regaló el amor y ustedes nos regalan su compañía. Su presencia es nuestro más grande regalo; pero si desean tener un detalle para el inicio de nuestro hogar, agradeceremos que sea en la modalidad de lluvia de sobres, la cual se encontrará en la recepción de la boda.',
      note: 'Encontrarás un buzón especial en la recepción para depositar tu sobre con tus mejores deseos y bendiciones.'
    };

    return `
      <section class="gifts-section" id="gifts">
        <div class="gifts-container reveal-on-scroll">
          <span class="gifts-badge">${escapeHtml(gifts.badge)}</span>
          <h2 class="gifts-title">${escapeHtml(gifts.title)}</h2>
          <div class="gifts-divider"></div>

          <div class="gifts-card">
            <div class="gifts-icon-wrapper">
              <svg class="gifts-icon" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>

            <p class="gifts-quote">
              “${escapeHtml(gifts.message)}”
            </p>

            <div class="gifts-note-box">
              <span class="gifts-note-icon">💌</span>
              <p class="gifts-note-text">
                ${escapeHtml(gifts.note)}
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  init() {
    const observer = Observer.createRevealObserver();
    const container = document.querySelector('#gifts .reveal-on-scroll');
    if (container) {
      observer.observe(container);
    }
  }
}
