export default class GalleryService {
  constructor() {
    this.images = [];
    this.currentIndex = 0;
    this.overlay = null;
  }

  /**
   * Inicializa la lista de imágenes y genera el marcado del Lightbox.
   * @param {Array} images Lista de URLs de imágenes
   */
  init(images) {
    this.images = images;
    this.createLightboxMarkup();
  }

  createLightboxMarkup() {
    if (document.getElementById('gallery-lightbox')) return;

    const overlay = document.createElement('div');
    overlay.id = 'gallery-lightbox';
    overlay.className = 'lightbox-overlay hidden';
    overlay.innerHTML = `
      <button class="lightbox-close" aria-label="Cerrar">&times;</button>
      <button class="lightbox-prev" aria-label="Anterior">&#10094;</button>
      <div class="lightbox-content">
        <img src="" id="lightbox-img" alt="Vista ampliada">
      </div>
      <button class="lightbox-next" aria-label="Siguiente">&#10095;</button>
    `;

    document.body.appendChild(overlay);
    this.overlay = overlay;

    // Listeners
    overlay.querySelector('.lightbox-close').addEventListener('click', () => this.close());
    overlay.querySelector('.lightbox-prev').addEventListener('click', () => this.prev());
    overlay.querySelector('.lightbox-next').addEventListener('click', () => this.next());

    // Cerrar al hacer clic fuera de la foto
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay || e.target.classList.contains('lightbox-content')) {
        this.close();
      }
    });

    // Soporte de teclado (Escape, Flechas)
    document.addEventListener('keydown', (e) => {
      if (overlay.classList.contains('hidden')) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowRight') this.next();
      if (e.key === 'ArrowLeft') this.prev();
    });

    // Soporte táctil (Deslizar / Swipe)
    let startX = 0;
    overlay.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    overlay.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      const diffX = startX - endX;
      if (Math.abs(diffX) > 50) { // Umbral de swipe
        if (diffX > 0) this.next();
        else this.prev();
      }
    }, { passive: true });
  }

  open(index) {
    this.currentIndex = index;
    const imgElement = document.getElementById('lightbox-img');
    if (imgElement && this.images[this.currentIndex]) {
      imgElement.src = this.images[this.currentIndex];
      this.overlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden'; // Bloquear scroll
    }
  }

  close() {
    this.overlay.classList.add('hidden');
    document.body.style.overflow = ''; // Restaurar scroll
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    const imgElement = document.getElementById('lightbox-img');
    if (imgElement) {
      imgElement.src = this.images[this.currentIndex];
    }
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    const imgElement = document.getElementById('lightbox-img');
    if (imgElement) {
      imgElement.src = this.images[this.currentIndex];
    }
  }
}
