import Renderer from './Renderer.js';
import Router from './Router.js';
import { updateSEO } from './Helpers.js';
import AudioService from '../services/audio.js';
import PetalsPlugin from '../plugins/petals.js';

export default class App {
  constructor() {
    this.components = [];
    this.config = {};
    this.router = null;
  }

  /**
   * Registra un componente en la aplicación.
   * @param {string} name Nombre único
   * @param {Class} ComponentClass Clase del componente que extiende de Component
   */
  registerComponent(name, ComponentClass) {
    this.components.push({ name, Class: ComponentClass });
  }

  /**
   * Carga configuración JSON y arranca el renderizado.
   * @param {string} appSelector Contenedor HTML principal
   */
  async start(appSelector = '#app') {
    try {
      const response = await fetch('config/wedding.json?v=' + Date.now());
      if (!response.ok) {
        throw new Error("No se pudo cargar config/wedding.json");
      }
      this.config = await response.json();

      // Actualizar SEO
      if (this.config.seo) {
        updateSEO(this.config.seo);
      }

      // Renderizado
      const renderer = new Renderer(this.config);
      renderer.render(this.components, appSelector);

      // Inicializar Router
      this.router = new Router();

      // Inicializar plugins dinámicos basados en la configuración
      this.initPlugins();

      console.log("Aplicación Boda inicializada.");
    } catch (error) {
      console.error("Fallo crítico en App.start:", error);
      const container = document.querySelector(appSelector);
      if (container) {
        container.innerHTML = `
          <div style="padding: 40px; text-align: center; font-family: sans-serif;">
            <p>Ocurrió un error al cargar la invitación. Por favor intenta recargar la página.</p>
          </div>
        `;
      }
    }
  }

  initPlugins() {
    const { features, assets } = this.config;

    // Música Flotante
    if (features && features.music && assets.audio) {
      const audioService = new AudioService();
      audioService.init(assets.audio);
    }

    // Pétalos Cayendo
    if (features && features.petals) {
      const petalsPlugin = new PetalsPlugin();
      petalsPlugin.init();
    }
  }
}
