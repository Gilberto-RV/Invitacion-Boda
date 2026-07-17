export default class Renderer {
  constructor(config) {
    this.config = config;
    this.instances = [];
  }

  /**
   * Renderiza componentes en un contenedor y lanza sus ciclos de vida.
   * @param {Array} componentClasses Clases de componentes registrados
   * @param {string} selector Contenedor de la aplicación
   */
  render(componentClasses, selector) {
    const container = document.querySelector(selector);
    if (!container) {
      console.error(`Contenedor '${selector}' no encontrado.`);
      return;
    }

    // Instanciar cada clase con la configuración centralizada
    this.instances = componentClasses.map(({ Class }) => new Class(this.config));

    // Combinar el HTML de todos
    container.innerHTML = this.instances.map(instance => instance.render()).join('');

    // Lanzar init()
    this.instances.forEach(instance => {
      if (typeof instance.init === 'function') {
        try {
          instance.init();
        } catch (error) {
          console.error(`Error en ciclo de vida init de componente:`, error);
        }
      }
    });
  }
}
