class EventBus {
  constructor() {
    this.listeners = {};
  }

  /**
   * Se suscribe a un evento. Retorna función de desuscripción.
   * @param {string} event Nombre del evento
   * @param {function} callback Función a ejecutar
   * @returns {function} Función de desuscripción
   */
  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
    return () => this.off(event, callback);
  }

  /**
   * Cancela la suscripción a un evento.
   * @param {string} event Nombre del evento
   * @param {function} callback Función registrada
   */
  off(event, callback) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
  }

  /**
   * Emite un evento con datos adjuntos.
   * @param {string} event Nombre del evento
   * @param {*} data Datos opcionales
   */
  emit(event, data) {
    if (!this.listeners[event]) return;
    this.listeners[event].forEach(callback => {
      try {
        callback(data);
      } catch (error) {
        console.error(`Error en callback de EventBus para el evento ${event}:`, error);
      }
    });
  }
}

export const eventBus = new EventBus();
