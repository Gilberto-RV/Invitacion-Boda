export default class Animation {
  /**
   * Realiza un desplazamiento suave hacia un selector del DOM
   * @param {string} selector Elemento destino
   */
  static scrollTo(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
