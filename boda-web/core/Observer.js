export default class Observer {
  /**
   * Crea un IntersectionObserver reutilizable para efectos de revelado
   * @param {Object} options Opciones del IntersectionObserver
   * @returns {IntersectionObserver}
   */
  static createRevealObserver(options = {}) {
    const defaultOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
      ...options
    };

    return new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, defaultOptions);
  }
}
