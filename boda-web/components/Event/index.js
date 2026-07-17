import Component from '../../core/Component.js';
import Observer from '../../core/Observer.js';
import MapsService from '../../services/maps.js';
import { escapeHtml } from '../../core/Helpers.js';

export default class Event extends Component {
  render() {
    const { event, texts } = this.config;

    const googleMapsUrl = MapsService.getNavigationUrl(event.location.googleMapsUrl);

    return `
      <section class="event-section" id="event">
        <div class="event-container reveal-on-scroll">
          <h2 class="event-title">${escapeHtml(texts.event.title)}</h2>
          <div class="event-divider"></div>
          
          <div class="event-cards">
            <!-- Tarjeta Ceremonia -->
            <div class="event-card">
              <div class="event-icon">⛪</div>
              <h3 class="event-card-title">${escapeHtml(event.details.ceremony.title)}</h3>
              <p class="event-card-time">${escapeHtml(event.details.ceremony.time)} hrs</p>
              <p class="event-card-desc">${escapeHtml(event.details.ceremony.description)}</p>
            </div>
            
            <!-- Tarjeta Recepción -->
            <div class="event-card">
              <div class="event-icon">🥂</div>
              <h3 class="event-card-title">${escapeHtml(event.details.reception.title)}</h3>
              <p class="event-card-time">${escapeHtml(event.details.reception.time)} hrs</p>
              <p class="event-card-desc">${escapeHtml(event.details.reception.description)}</p>
            </div>
          </div>
          
          <div class="location-details">
            <span class="location-title">📍 Lugar</span>
            <p class="location-name">${escapeHtml(event.location.name)}</p>
            <p class="location-address">${escapeHtml(event.location.address)}</p>
            <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary maps-btn">
              ${escapeHtml(texts.event.mapsButton)}
            </a>
          </div>
        </div>
      </section>
    `;
  }

  init() {
    const observer = Observer.createRevealObserver();
    const container = document.querySelector('#event .reveal-on-scroll');
    if (container) {
      observer.observe(container);
    }
  }
}
