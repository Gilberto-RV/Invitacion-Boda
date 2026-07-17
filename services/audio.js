export default class AudioService {
  constructor() {
    this.audio = null;
    this.playButton = null;
    this.isPlaying = false;
  }

  /**
   * Inicializa el servicio de audio cargando la URL de configuración
   * @param {string} audioUrl Ruta de la canción
   */
  init(audioUrl) {
    if (!audioUrl) return;

    this.audio = new Audio(audioUrl);
    this.audio.loop = true;

    this.createFloatingButton();
    this.setupInteractionAutoplay();
  }

  createFloatingButton() {
    if (document.getElementById('music-control')) return;

    const btn = document.createElement('button');
    btn.id = 'music-control';
    btn.className = 'music-floating-btn';
    btn.setAttribute('aria-label', 'Control de música');
    btn.innerHTML = `<span class="music-icon">🎵</span>`;

    document.body.appendChild(btn);
    this.playButton = btn;

    btn.addEventListener('click', () => {
      if (this.isPlaying) {
        this.pause();
      } else {
        this.play();
      }
    });
  }

  setupInteractionAutoplay() {
    // Los navegadores modernos bloquean la reproducción automática.
    // Iniciamos la reproducción al primer clic/interacción del usuario en la pantalla.
    const startAudioOnInteraction = () => {
      if (!this.isPlaying && this.audio) {
        this.play().then(() => {
          // Desvincular eventos para evitar ejecuciones adicionales
          document.removeEventListener('click', startAudioOnInteraction);
          document.removeEventListener('touchstart', startAudioOnInteraction);
        }).catch(err => {
          console.log("Autoplay bloqueado temporalmente por política del navegador.");
        });
      }
    };

    document.addEventListener('click', startAudioOnInteraction);
    document.addEventListener('touchstart', startAudioOnInteraction);
  }

  async play() {
    if (!this.audio) return;
    try {
      await this.audio.play();
      this.isPlaying = true;
      this.playButton.classList.add('playing');
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }

  pause() {
    if (!this.audio) return;
    this.audio.pause();
    this.isPlaying = false;
    this.playButton.classList.remove('playing');
  }
}
