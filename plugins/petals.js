export default class PetalsPlugin {
  constructor() {
    this.container = null;
    this.active = false;
  }

  /**
   * Inicializa el plugin de pétalos flotantes.
   */
  init() {
    if (document.getElementById('petals-container')) return;

    this.container = document.createElement('div');
    this.container.id = 'petals-container';
    this.container.className = 'petals-container-overlay';
    document.body.appendChild(this.container);
    this.active = true;

    this.startSpawning();
  }

  startSpawning() {
    const spawnPetal = () => {
      if (!this.active) return;

      const petal = document.createElement('div');
      petal.className = 'petal-particle';

      // Posicionamiento horizontal aleatorio
      petal.style.left = `${Math.random() * 100}vw`;

      // Tamaño aleatorio de la hoja
      const size = Math.random() * 12 + 8; // Entre 8px y 20px
      petal.style.width = `${size}px`;
      petal.style.height = `${size * 0.7}px`; // Hojas ligeramente ovaladas

      // Velocidades y rotación aleatoria
      petal.style.animationDuration = `${Math.random() * 6 + 6}s`; // Duración de caída entre 6s y 12s
      petal.style.animationDelay = `${Math.random() * 2}s`;
      
      this.container.appendChild(petal);

      // Eliminar el elemento después de que termine la animación
      setTimeout(() => {
        if (petal.parentNode === this.container) {
          this.container.removeChild(petal);
        }
      }, 12000);

      // Programar siguiente generación
      setTimeout(spawnPetal, Math.random() * 1200 + 400); // Generar cada 0.4s a 1.6s
    };

    spawnPetal();
  }

  destroy() {
    this.active = false;
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
  }
}
