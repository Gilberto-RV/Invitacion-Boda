import Component from '../../core/Component.js';
import Observer from '../../core/Observer.js';
import WhatsAppService from '../../services/whatsapp.js';
import { escapeHtml } from '../../core/Helpers.js';

export default class RSVP extends Component {
  render() {
    const { texts } = this.config;

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

            <!-- Acceso directo de respaldo por si el navegador bloquea la 2da ventana -->
            <div class="rsvp-feedback-box hidden" id="rsvp-feedback">
              <p class="rsvp-feedback-title">¡Enviando confirmación a ambos novios!</p>
              <p class="rsvp-feedback-hint">
                Si tu navegador no abrió alguno de los dos automáticamente:
              </p>
              <div class="rsvp-fallback-actions">
                <a href="#" id="rsvp-btn-groom" target="_blank" rel="noopener noreferrer" class="rsvp-fallback-btn">
                  💬 Reenviar a Daniel
                </a>
                <a href="#" id="rsvp-btn-bride" target="_blank" rel="noopener noreferrer" class="rsvp-fallback-btn">
                  💬 Reenviar a Angélica
                </a>
              </div>
            </div>
          </form>
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
  }

  handleFormSubmit() {
    const { whatsapp } = this.config;
    const name = document.getElementById('rsvp-name').value.trim();
    const attendance = document.querySelector('input[name="rsvp-attendance"]:checked').value;

    if (!name) return;

    const groomPhone = whatsapp?.groomPhone || whatsapp?.phone || '+522461026338';
    const bridePhone = whatsapp?.bridePhone || '+522463259593';

    let message = '';
    if (attendance === 'si') {
      message = `¡Hola! Confirmo mi asistencia a su boda. ¡Nos vemos muy pronto! Con cariño ${name}`;
    } else {
      message = `¡Hola! Agradezco mucho la invitación a su boda. Lamentablemente no podré asistir. Con cariño ${name}`;
    }

    const groomUrl = WhatsAppService.generateLink(groomPhone, message);
    const brideUrl = WhatsAppService.generateLink(bridePhone, message);

    // Preparar enlaces de respaldo en caso de que el navegador bloquee uno
    const btnGroom = document.getElementById('rsvp-btn-groom');
    const btnBride = document.getElementById('rsvp-btn-bride');
    const feedbackBox = document.getElementById('rsvp-feedback');

    if (btnGroom) btnGroom.href = groomUrl;
    if (btnBride) btnBride.href = brideUrl;
    if (feedbackBox) feedbackBox.classList.remove('hidden');

    // Opción 4: Abrir ambos enlaces directamente al presionar el botón
    window.open(groomUrl, '_blank');
    window.open(brideUrl, '_blank');
  }
}
