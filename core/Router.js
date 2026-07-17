import Animation from './Animation.js';

export default class Router {
  constructor() {
    this.routes = [];
    window.addEventListener('hashchange', () => this.handleHashChange());
    window.addEventListener('load', () => this.handleHashChange());
  }

  /**
   * Registra un ancla y una acción asociada
   * @param {string} hash Fragmento (ej: '#hero')
   * @param {function} callback Función a ejecutar
   */
  register(hash, callback) {
    this.routes.push({ hash, callback });
  }

  handleHashChange() {
    const hash = window.location.hash || '#hero';

    const route = this.routes.find(r => r.hash === hash);
    if (route && typeof route.callback === 'function') {
      route.callback();
    }

    if (hash.startsWith('#')) {
      Animation.scrollTo(hash);
    }
  }

  /**
   * Navega a un hash específico de manera programática
   * @param {string} hash
   */
  navigate(hash) {
    window.location.hash = hash;
  }
}
