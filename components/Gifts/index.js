import Component from '../../core/Component.js';
import Observer from '../../core/Observer.js';
import { escapeHtml } from '../../core/Helpers.js';

export default class Gifts extends Component {
  render() {
    const { texts } = this.config;
    const gifts = texts.gifts || {
      title: 'Mesa de Regalos',
      badge: 'Lluvia de Sobres',
      message: 'El mejor regalo para nosotros será compartir este día tan especial a su lado. Si desean acompañarnos con un detalle, hemos elegido la tradición de la lluvia de sobres, que nos ayudará a comenzar esta nueva etapa juntos.\n\nCon mucho cariño, agradecemos cada muestra de amor y buenos deseos.',
      noteTitle: 'Lluvia de sobres',
      note: 'En la recepción encontrarán un buzón donde podrán depositar su sobre con sus buenos deseos para los novios.'
    };

    const paragraphs = (gifts.message || '').split('\n\n').filter(p => p.trim().length > 0);

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

            <div class="gifts-quote">
              ${paragraphs.map((p, index) => {
                const isFirst = index === 0;
                const isLast = index === paragraphs.length - 1;
                const text = `${isFirst ? '“' : ''}${escapeHtml(p)}${isLast ? '”' : ''}`;
                return `<p class="${index > 0 ? 'gifts-quote-closing' : ''}">${text}</p>`;
              }).join('')}
            </div>

            <div class="gifts-note-box">
              <span class="gifts-note-icon">💌</span>
              <div class="gifts-note-content">
                <strong class="gifts-note-heading">${escapeHtml(gifts.noteTitle || 'Lluvia de sobres')}</strong>
                <p class="gifts-note-text">
                  ${escapeHtml(gifts.note)}
                </p>
              </div>
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
