import Component from '../../core/Component.js';
import Observer from '../../core/Observer.js';
import { eventBus } from '../../core/EventBus.js';

export default class Countdown extends Component {
  render() {
    const { texts } = this.config;
    return `
      <section class="countdown-section" id="countdown">
        <div class="countdown-container reveal-on-scroll">
          <h2 class="countdown-section-title">${texts.countdown.title}</h2>
          <div class="countdown-grid">
            <div class="countdown-item">
              <span class="countdown-value" id="cd-days">00</span>
              <span class="countdown-label">${texts.countdown.days}</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-value" id="cd-hours">00</span>
              <span class="countdown-label">${texts.countdown.hours}</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-value" id="cd-minutes">00</span>
              <span class="countdown-label">${texts.countdown.minutes}</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-value" id="cd-seconds">00</span>
              <span class="countdown-label">${texts.countdown.seconds}</span>
            </div>
          </div>
          <div class="countdown-message hidden" id="cd-message">
            ${texts.countdown.finished}
          </div>
        </div>
      </section>
    `;
  }

  init() {
    // Revelar componente al scroll
    const observer = Observer.createRevealObserver();
    const container = document.querySelector('#countdown .reveal-on-scroll');
    if (container) {
      observer.observe(container);
    }

    const { event } = this.config;
    const targetDate = new Date(`${event.date}T${event.time}`).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(this.timerInterval);
        this.showFinishedMessage();
        eventBus.emit('countdown:finished');
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      this.updateDomElement('cd-days', days);
      this.updateDomElement('cd-hours', hours);
      this.updateDomElement('cd-minutes', minutes);
      this.updateDomElement('cd-seconds', seconds);
    };

    // Primera ejecución y seteo de bucle
    updateTimer();
    this.timerInterval = setInterval(updateTimer, 1000);
  }

  updateDomElement(id, value) {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = value.toString().padStart(2, '0');
    }
  }

  showFinishedMessage() {
    const grid = document.querySelector('.countdown-grid');
    const msg = document.getElementById('cd-message');
    if (grid && msg) {
      grid.classList.add('hidden');
      msg.classList.remove('hidden');
    }
  }
}
