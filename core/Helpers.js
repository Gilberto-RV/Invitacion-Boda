/**
 * Formatea una fecha YYYY-MM-DD a formato amigable en español.
 * @param {string} dateString
 * @returns {string} Fecha formateada (ej. 27 de noviembre de 2026)
 */
export function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
}

/**
 * Escapa HTML para prevenir XSS.
 * @param {string} unsafe
 * @returns {string} String sanitizado
 */
export function escapeHtml(unsafe) {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Actualiza dinámicamente las etiquetas SEO en el head.
 * @param {Object} seoConfig Configuración de SEO
 */
export function updateSEO(seoConfig) {
  if (!seoConfig) return;

  if (seoConfig.title) {
    document.title = seoConfig.title;
  }

  const updateMeta = (nameOrProperty, value, attribute = 'name') => {
    if (!value) return;
    let meta = document.querySelector(`meta[${attribute}="${nameOrProperty}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, nameOrProperty);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', value);
  };

  updateMeta('description', seoConfig.description);
  updateMeta('og:title', seoConfig.ogTitle, 'property');
  updateMeta('og:description', seoConfig.ogDescription, 'property');
  updateMeta('og:image', seoConfig.ogImage, 'property');
  updateMeta('og:url', seoConfig.ogUrl, 'property');
  updateMeta('twitter:card', seoConfig.twitterCard || 'summary_large_image');
  updateMeta('twitter:title', seoConfig.ogTitle);
  updateMeta('twitter:description', seoConfig.ogDescription);
  updateMeta('twitter:image', seoConfig.ogImage);

  if (seoConfig.canonical) {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', seoConfig.canonical);
  }
}
