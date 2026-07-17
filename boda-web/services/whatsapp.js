export default class WhatsAppService {
  /**
   * Genera un enlace de WhatsApp con un mensaje personalizado.
   * @param {string} phoneNumber Número de teléfono con prefijo
   * @param {string} message Mensaje inicial
   * @returns {string} Enlace listo para usar
   */
  static generateLink(phoneNumber, message) {
    const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
  }
}
