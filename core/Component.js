export default class Component {
  constructor(config) {
    if (this.constructor === Component) {
      throw new TypeError("No se puede instanciar la clase abstracta Component directamente.");
    }
    this.config = config;
  }

  /**
   * Retorna el marcado HTML del componente.
   * @returns {string} HTML estructurado
   */
  render() {
    return '';
  }

  /**
   * Método de ciclo de vida ejecutado después del renderizado en el DOM.
   */
  init() {
    // Sobrescribir en subclases
  }
}
