import Component from '../../core/Component.js';
import Observer from '../../core/Observer.js';
import WhatsAppService from '../../services/whatsapp.js';
import { escapeHtml } from '../../core/Helpers.js';

export default class RSVP extends Component {
  render() {
    const { texts, whatsapp } = this.config;
    const groomName = whatsapp?.groomName || 'Daniel';
    const brideName = whatsapp?.brideName || 'Angélica';

    return `
      <section class="rsvp-section" id="rsvp">
        <div class="rsvp-container reveal-on-scroll">
          <h2 class="rsvp-title">${escapeHtml(texts.rsvp.title)}</h2>
          <p class="rsvp-subtitle">${escapeHtml(texts.rsvp.subtitle)}</p>
          <div class="rsvp-divider"></div>
          
          <form class="rsvp-form" id="rsvp-form-element">
            <div class="form-group">
              <input type="text" id="rsvp-name" class="form-input" placeholder="${escapeHtml(texts.rsvp.namePlaceholder)}" required autocomplete="off">
            </div>
            
            <div class="form-group-radio">
              <label class="radio-card">
                <input type="radio" name="rsvp-attendance" value="si" checked>
                <span class="radio-design"></span>
                <span class="radio-label">${escapeHtml(texts.rsvp.confirmYes)}</span>
              </label>
              <label class="radio-card">
                <input type="radio" name="rsvp-attendance" value="no">
                <span class="radio-design"></span>
                <span class="radio-label">${escapeHtml(texts.rsvp.confirmNo)}</span>
              </label>
            </div>
            
            <button type="submit" class="btn btn-primary rsvp-btn">
              ${escapeHtml(texts.rsvp.buttonText)}
            </button>
          </form>
        </div>

        <!-- Modal de confirmación doble (Daniel y Angélica) -->
        <div class="rsvp-modal-overlay" id="rsvp-modal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="rsvp-modal-title-id">
          <div class="rsvp-modal-card">
            <button class="rsvp-modal-close" id="rsvp-modal-close" type="button" aria-label="Cerrar modal">&times;</button>
            <div class="rsvp-modal-badge-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <h3 class="rsvp-modal-title" id="rsvp-modal-title-id">Confirmación a los Novios</h3>
            <p class="rsvp-modal-desc" id="rsvp-modal-desc">
              Hemos abierto WhatsApp para enviar tu confirmación a <strong>${escapeHtml(groomName)}</strong>.
              <br>
              Por favor toca a continuación para enviarla también a <strong>${escapeHtml(brideName)}</strong>:
            </p>

            <div class="rsvp-recipients-list">
              <!-- Destinatario 1: Daniel -->
              <div class="rsvp-recipient-item is-sent" id="rsvp-item-groom">
                <div class="rsvp-recipient-info">
                  <span class="rsvp-recipient-role">Novio</span>
                  <strong class="rsvp-recipient-name">${escapeHtml(groomName)}</strong>
                  <span class="rsvp-recipient-status sent" id="rsvp-status-groom">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Mensaje abierto
                  </span>
                </div>
                <a href="#" id="rsvp-link-groom" target="_blank" rel="noopener noreferrer" class="rsvp-recipient-action-btn secondary" title="Reenviar a ${escapeHtml(groomName)}">
                  Reenviar
                </a>
              </div>

              <!-- Destinatario 2: Angélica -->
              <div class="rsvp-recipient-item pending" id="rsvp-item-bride">
                <div class="rsvp-recipient-info">
                  <span class="rsvp-recipient-role">Novia</span>
                  <strong class="rsvp-recipient-name">${escapeHtml(brideName)}</strong>
                  <span class="rsvp-recipient-status pending" id="rsvp-status-bride">
                    Pendiente de envío
                  </span>
                </div>
                <a href="#" id="rsvp-link-bride" target="_blank" rel="noopener noreferrer" class="rsvp-recipient-action-btn primary" title="Enviar a ${escapeHtml(brideName)}">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                  <span>Enviar a ${escapeHtml(brideName)}</span>
                </a>
              </div>
            </div>

            <div class="rsvp-modal-footer">
              <p class="rsvp-success-note hidden" id="rsvp-both-sent-note">
                ✨ ¡Muchísimas gracias! Confirmación enviada a ambos novios.
              </p>
              <button type="button" class="btn btn-secondary rsvp-btn-done" id="rsvp-modal-done">
                Listo
              </button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  init() {
    const observer = Observer.createRevealObserver();
    const container = document.querySelector('#rsvp .reveal-on-scroll');
    if (container) {
      observer.observe(container);
    }

    const form = document.getElementById('rsvp-form-element');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleFormSubmit();
      });
    }

    this.setupModalEvents();
  }

  setupModalEvents() {
    const modal = document.getElementById('rsvp-modal');
    const closeBtn = document.getElementById('rsvp-modal-close');
    const doneBtn = document.getElementById('rsvp-modal-done');
    const brideLink = document.getElementById('rsvp-link-bride');

    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeModal());
    }

    if (doneBtn) {
      doneBtn.addEventListener('click', () => this.closeModal());
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.closeModal();
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        this.closeModal();
      }
    });

    if (brideLink) {
      brideLink.addEventListener('click', () => {
        this.markBrideSent();
      });
    }
  }

  markBrideSent() {
    const statusBride = document.getElementById('rsvp-status-bride');
    const itemBride = document.getElementById('rsvp-item-bride');
    const linkBride = document.getElementById('rsvp-link-bride');
    const bothSentNote = document.getElementById('rsvp-both-sent-note');

    if (statusBride) {
      statusBride.className = 'rsvp-recipient-status sent';
      statusBride.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        Mensaje abierto
      `;
    }

    if (itemBride) {
      itemBride.classList.remove('pending');
      itemBride.classList.add('is-sent');
    }

    if (linkBride) {
      linkBride.className = 'rsvp-recipient-action-btn secondary';
      linkBride.innerHTML = 'Reenviar';
    }

    if (bothSentNote) {
      bothSentNote.classList.remove('hidden');
    }
  }

  handleFormSubmit() {
    const { whatsapp } = this.config;
    const name = document.getElementById('rsvp-name').value.trim();
    const attendance = document.querySelector('input[name="rsvp-attendance"]:checked').value;

    if (!name) return;

    const groomPhone = whatsapp?.groomPhone || whatsapp?.phone || '+522461026338';
    const bridePhone = whatsapp?.bridePhone || '+522463259593';
    const groomName = whatsapp?.groomName || 'Daniel';
    const brideName = whatsapp?.brideName || 'Angélica';

    let message = '';
    if (attendance === 'si') {
      message = `¡Hola! Confirmo mi asistencia a su boda. ¡Nos vemos muy pronto! Con cariño ${name}`;
    } else {
      message = `¡Hola! Agradezco mucho la invitación a su boda. Lamentablemente no podré asistir. Con cariño ${name}`;
    }

    const groomUrl = WhatsAppService.generateLink(groomPhone, message);
    const brideUrl = WhatsAppService.generateLink(bridePhone, message);

    const linkGroom = document.getElementById('rsvp-link-groom');
    const linkBride = document.getElementById('rsvp-link-bride');
    const statusBride = document.getElementById('rsvp-status-bride');
    const itemBride = document.getElementById('rsvp-item-bride');
    const bothSentNote = document.getElementById('rsvp-both-sent-note');

    if (linkGroom) {
      linkGroom.setAttribute('href', groomUrl);
    }

    if (linkBride) {
      linkBride.setAttribute('href', brideUrl);
      linkBride.className = 'rsvp-recipient-action-btn primary';
      linkBride.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
        <span>Enviar a ${escapeHtml(brideName)}</span>
      `;
    }

    if (statusBride) {
      statusBride.className = 'rsvp-recipient-status pending';
      statusBride.textContent = 'Pendiente de envío';
    }

    if (itemBride) {
      itemBride.classList.remove('is-sent');
      itemBride.classList.add('pending');
    }

    if (bothSentNote) {
      bothSentNote.classList.add('hidden');
    }

    // 1. Abrir WhatsApp para Daniel inmediatamente
    window.open(groomUrl, '_blank');

    // 2. Abrir modal para completar el envío doble hacia Angélica
    this.openModal();
  }

  openModal() {
    const modal = document.getElementById('rsvp-modal');
    if (modal) {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal() {
    const modal = document.getElementById('rsvp-modal');
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }
}
