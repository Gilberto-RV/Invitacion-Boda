# Progreso del Proyecto

## 16 Julio 2026

### Planeación

✔ Se decidió desarrollar una versión Web antes del PDF.

✔ Se utilizará HTML, CSS y JavaScript.

✔ Se publicará mediante GitHub Pages.

✔ Se definió la estructura documental.

✔ Se obtuvo la primera versión del contexto.

✔ Se definió la identidad visual.

✔ Se recibió la paleta de colores.

✔ Se recibió la información principal de la boda.

---

## 17 Julio 2026

### Refactorización de Arquitectura y Primeros Componentes

✔ Se reestructuraron los directorios del proyecto y se crearon carpetas vacías para escalar (`assets/fonts/`, `assets/lottie/`, `plugins/`).

✔ Se organizaron los recursos de imágenes en subcarpetas específicas (`img/hero/`, `img/gallery/`).

✔ Se consolidó toda la información del evento y textos en el archivo centralizado `config/wedding.json`.

✔ Se creó el archivo de soporte de instalación `manifest.json`.

✔ Se implementó la Capa Core:
  - `Component.js`: Clase abstracta para componentes.
  - `Renderer.js`: Motor de inyección de HTML y ciclos de vida.
  - `EventBus.js`: Canal de comunicación por eventos desacoplado.
  - `Router.js`: Router hash-based para anclas y scroll suave.
  - `Helpers.js`: Sanitizador XSS, formateador de fechas y dinamicidad de SEO en el `<head>`.
  - `App.js`: Clase principal de carga y registro de componentes.
  - `Observer.js` y `Animation.js`: Ayudantes para Intersection Observer y scroll.

✔ Se implementó la Capa de Servicios:
  - `whatsapp.js`: Servicio generador de enlaces dinámicos de confirmación.

✔ Se estableció el Sistema de Diseño CSS:
  - Creación de archivos en `theme/` (`colors.css`, `typography.css`, `spacing.css`, `shadows.css`, `animations.css`) integrados en el archivo central `styles.css`.

✔ Se construyeron los primeros componentes 100% desacoplados y dependientes de configuración:
  - **Hero** (index.js y styles.css)
  - **Intro** (index.js y styles.css)

✔ Se actualizaron los puntos de entrada:
  - `index.html`: Carga de módulos ES, manifiesto y fuentes web.
  - `main.js`: Registro de componentes e inicio dinámico de la App.

✔ Se creó la documentación del sistema en `docs/DESIGN_SYSTEM.md` y `docs/UX.md`, y se estructuró el `README.md` principal.

### Implementación de Componentes Countdown, Parents y Sponsors

✔ Se actualizó `config/wedding.json` con la hora del evento y parámetros para nuevos componentes.

✔ Se implementó el componente **Countdown** (`components/Countdown/index.js` y `styles.css`), con cálculo en tiempo real por segundo, visualización responsiva y emisión de eventos mediante `EventBus`.

✔ Se implementó el componente **Parents** (`components/Parents/index.js` y `styles.css`) con maquetación elegante y responsiva en columnas.

✔ Se implementó el componente **Sponsors** (`components/Sponsors/index.js` y `styles.css`) con tarjetas minimalistas auto-adaptables de 1 a 4 columnas.

### Implementación de Componentes Gallery y Event/Map

✔ Se actualizó `wedding.json` con detalles de la Ceremonia, Recepción y listado de recursos de la Galería.

✔ Se implementó el servicio de **Lightbox** (`services/gallery.js`) con soporte táctil, teclas de dirección y escape, y bloqueo de scroll en segundo plano.

✔ Se implementó el servicio de **Mapas** (`services/maps.js`).

✔ Se implementó el componente **Gallery** (`components/Gallery/index.js` y `styles.css`) con carga perezosa (`loading="lazy"`) en las imágenes.

✔ Se implementó el componente **Event** (`components/Event/index.js` y `styles.css`) con tarjetas informativas y botón de redirección dinámica a Google Maps.

### Implementación de RSVP, Footer, Música y Pétalos (Fase Final)

✔ Se actualizó `wedding.json` con las configuraciones de audio, formulario RSVP y control de características activas (features).

✔ Se implementó el servicio **AudioService** (`services/audio.js`) para manejar la reproducción de música de fondo, inyección de un botón de control flotante responsivo y lógica de reproducción en la primera interacción para evadir bloqueos de autoplay de navegadores.

✔ Se implementó el plugin de **Pétalos Botánicos** (`plugins/petals.js`) para inyectar hojas salvia cayendo de forma fluida en segundo plano y eliminándose tras finalizar su recorrido para optimizar memoria.

✔ Se implementó el componente **RSVP** (`components/RSVP/index.js` y `styles.css`) para recopilar nombres, acompañantes, confirmar/declinar asistencia y generar redirección automatizada hacia WhatsApp.

✔ Se implementó el componente **Footer** (`components/Footer/index.js` y `styles.css`) para el cierre tipográfico y presentación de iniciales de la pareja.

---

## Pendientes

✔ Todos los componentes base y plugins interactivos programados han sido construidos con éxito.

---

## Próxima etapa

- Despliegue de la invitación digital en producción en GitHub Pages.