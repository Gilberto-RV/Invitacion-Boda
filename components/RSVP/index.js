import Component from '../../core/Component.js';
import Observer from '../../core/Observer.js';
import WhatsAppService from '../../services/whatsapp.js';
import { escapeHtml } from '../../core/Helpers.js';

export default class RSVP extends Component {
  render() {
    const { texts, whatsapp } = this.config;
    const brideName = whatsapp?.brideName || 'Angélica';
    const groomName = whatsapp?.groomName || 'Daniel';

    const confirmBrideText = texts.rsvp.confirmBride || `Confirmar con ${brideName}`;
    const confirmGroomText = texts.rsvp.confirmGroom || `Confirmar con ${groomName}`;

    return `
      <section class="rsvp-section" id="rsvp">
        <div class="rsvp-container reveal-on-scroll">
          <h2 class="rsvp-title">${escapeHtml(texts.rsvp.title)}</h2>
          <p class="rsvp-subtitle">${escapeHtml(texts.rsvp.subtitle)}</p>
          <div class="rsvp-divider"></div>
          
          <form class="rsvp-form" id="rsvp-form-element" onsubmit="return false;">
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

            <p class="rsvp-choose-hint">Elige a quién deseas enviar tu confirmación:</p>

            <div class="rsvp-dual-buttons">
              <button type="button" class="btn btn-rsvp-dual btn-rsvp-bride" id="btn-rsvp-bride">
                <span class="btn-rsvp-icon">💬</span>
                <span class="btn-rsvp-content">
                  <span class="btn-rsvp-name">${escapeHtml(confirmBrideText)}</span>
                  <span class="btn-rsvp-tag">Novia</span>
                </span>
              </button>

              <button type="button" class="btn btn-rsvp-dual btn-rsvp-groom" id="btn-rsvp-groom">
                <span class="btn-rsvp-icon">💬</span>
                <span class="btn-rsvp-content">
                  <span class="btn-rsvp-name">${escapeHtml(confirmGroomText)}</span>
                  <span class="btn-rsvp-tag">Novio</span>
                </span>
              </button>
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

    const btnBride = document.getElementById('btn-rsvp-bride');
    const btnGroom = document.getElementById('btn-rsvp-groom');

    if (btnBride) {
      btnBride.addEventListener('click', () => this.sendConfirmation('bride'));
    }

    if (btnGroom) {
      btnGroom.addEventListener('click', () => this.sendConfirmation('groom'));
    }
  }

  sendConfirmation(target) {
    const nameInput = document.getElementById('rsvp-name');
    if (!nameInput) return;

    const name = nameInput.value.trim();
    if (!name) {
      nameInput.focus();
      nameInput.reportValidity();
      return;
    }

    const attendanceEl = document.querySelector('input[name="rsvp-attendance"]:checked');
    const attendance = attendanceEl ? attendanceEl.value : 'si';

    let message = '';
    if (attendance === 'si') {
      message = `¡Hola! Confirmo mi asistencia a su boda. ¡Nos vemos muy pronto! Con cariño ${name}`;
    } else {
      message = `¡Hola! Agradezco mucho la invitación a su boda. Lamentablemente no podré asistir. Con cariño ${name}`;
    }

    const { whatsapp } = this.config;
    let targetPhone = '';

    if (target === 'bride') {
      targetPhone = whatsapp?.bridePhone || '+522463259593';
    } else {
      targetPhone = whatsapp?.groomPhone || whatsapp?.phone || '+522461026338';
    }

    const whatsappUrl = WhatsAppService.generateLink(targetPhone, message);
    window.open(whatsappUrl, '_blank');
  }
}
