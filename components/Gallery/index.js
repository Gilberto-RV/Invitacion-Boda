import Component from '../../core/Component.js';
import Observer from '../../core/Observer.js';
import GalleryService from '../../services/gallery.js';

export default class Gallery extends Component {
  constructor(config) {
    super(config);
    this.galleryService = new GalleryService();
  }

  render() {
    const { texts, assets } = this.config;

    const renderImages = () => {
      return assets.gallery.map((imgUrl, index) => `
        <div class="gallery-item" data-index="${index}">
          <img src="${imgUrl}" alt="Foto de la pareja ${index + 1}" loading="lazy">
          <div class="gallery-item-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
      `).join('');
    };

    return `
      <section class="gallery-section" id="gallery">
        <div class="gallery-container reveal-on-scroll">
          <h2 class="gallery-title">${texts.gallery.title}</h2>
          <div class="gallery-divider"></div>
          <div class="gallery-grid">
            ${renderImages()}
          </div>
        </div>
      </section>
    `;
  }

  init() {
    const observer = Observer.createRevealObserver();
    const container = document.querySelector('#gallery .reveal-on-scroll');
    if (container) {
      observer.observe(container);
    }

    const { assets } = this.config;
    this.galleryService.init(assets.gallery);

    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
      item.addEventListener('click', () => {
        const index = parseInt(item.getAttribute('data-index'), 10);
        this.galleryService.open(index);
      });
    });
  }
}
