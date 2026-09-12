export default class WhatsAppService {
  /**
   * Genera un enlace de WhatsApp con un mensaje personalizado.
   * @param {string} phoneNumber Número de teléfono con prefijo
   * @param {string} message Mensaje inicial
   * @returns {string} Enlace listo para usar
   */
  static generateLink(phoneNumber, message) {
    let cleanNumber = (phoneNumber || '').toString().replace(/[^0-9]/g, '');
    // Si tiene 10 dígitos (formato estándar México), anteponer código de país 52
    if (cleanNumber.length === 10) {
      cleanNumber = `52${cleanNumber}`;
    }
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
  }
}
