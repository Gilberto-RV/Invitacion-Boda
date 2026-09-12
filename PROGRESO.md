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

### Reorganización Estructural para GitHub Pages

✔ Se eliminó la carpeta `boda-web/` y se movió todos los archivos y carpetas a la raíz del repositorio usando `git mv` para preservar al 100% el historial de Git.

✔ Se actualizaron y limpiaron todas las referencias a `boda-web` en la documentación del sistema de diseño, plan de desarrollo, README centralizado y scripts auxiliares.

✔ Se validaron localmente los accesos relativos de imágenes, hojas de estilo, módulos JS y llamadas asíncronas para garantizar compatibilidad con la URL de subdirectorio en GitHub Pages.

---

## 27 Agosto 2026

### Optimización Mobile, Galería Simétrica, Video y Amenización

✔ Se rediseñó la experiencia del componente **Hero** en pantallas móviles:
  - Implementación de un fondo ambiental envolvente con desenfoque suave.
  - Inclusión de marco fotográfico centrado que muestra a Daniel y Angélica completos, sin recortes en sus rostros.
  - Excelente legibilidad tipográfica y preservación de la vista panorámica en PC/Escritorio.

✔ Se implementó el componente **Video** (`components/Video/`):
  - Integración del archivo `assets/img/gallery/v1.mp4`.
  - Reproductor HTML5 responsivo con controles, `playsinline` y diseño con borde y sombras elegantes acorde a la paleta del evento.
  - Registro de animaciones y soporte dinámico desde `wedding.json`.

✔ Se perfeccionó la **Galería** de fotos:
  - Integración de `assets/img/gallery/im11.jpeg`, completando 8 imágenes seleccionadas.
  - Cuadrícula perfectamente simétrica (4 filas x 2 columnas en teléfonos móviles, y 2 filas x 4 columnas en PC / Tablets), garantizando simetría total en cualquier dispositivo.

✔ Se agregaron identificadores de versión (cache-busters `?v=...`) en `index.html`, `styles.css` y `main.js` para forzar a los navegadores móviles y de escritorio a descargar inmediatamente los componentes nuevos y estilos actualizados sin retener versiones cacheadas anteriores.

✔ Se implementó el componente **Entertainment** (`components/Entertainment/`):
  - Sección dedicada para la amenización de la boda con mención a **El Legado de los Dukes en Acción**, **Natalia Guerrero** y **Y DJ Profesional**.
  - Estructura modular, parametrizada desde `wedding.json` y coordinada visualmente con los componentes de Padrinos y Padres.

✔ Se actualizaron los Padrinos y Cortejo:
  - Adición de **Adriana Castillo Moreno** en Velación junto a Carlos Mayllen Corona.
  - Inclusión de **Cynthia Mayeli Romero Vázquez** en el nuevo rol de **Dama de Honor y Ramo**.
  - Maquetación flexible y auto-centrada en `Sponsors` para distribuir armónicamente cualquier número de padrinos.

✔ Se actualizó el horario de la **Ceremonia de Unión** a las **16:00 hrs**.

✔ Se corrigió el título duplicado de la sección multimedia renombrándola a **"Un Momento Especial"** para diferenciarla claramente de la historia de la pareja.

✔ Se actualizaron los índices principales (`assets/js/main.js`, `assets/css/styles.css`) y la documentación técnica del proyecto (`CONTEXTO.md`, `DECISIONES.md`, `PROGRESO.md`).

---

## 12 Septiembre 2026

### Actualización de Números WhatsApp y Confirmación Doble

✔ Se configuraron los números definitivos de los novios en `config/wedding.json`:
  - **Daniel (Novio):** `+52 246 102 6338` (`2461026338`)
  - **Angélica (Novia):** `+52 246 325 9593` (`2463259593`)

✔ Se enriqueció `services/whatsapp.js`:
  - Detección automática de números a 10 dígitos (formato estándar de México) para anteponer el prefijo de país `52` de forma infalible.

### Mesa de Regalos y Botones Duales en RSVP

✔ Se creó el nuevo componente **Gifts** (`components/Gifts/index.js` y `styles.css`) para la **Mesa de Regalos (Lluvia de Sobres)**:
  - Posicionada inmediatamente después de la ubicación y Google Maps (`Event`).
  - Redacción combinada cálida y elegante que resalta el valor de la compañía de los invitados y señala el buzón de sobres en la recepción.
  - Diseño con tarjeta envolvente, ícono estilizado de sobre, tipografía cuidada y animaciones al scroll.

✔ Se implementaron los dos botones de confirmación directa en el formulario **RSVP**:
  - `[ 💬 Confirmar con Angélica (Novia) ]` y `[ 💬 Confirmar con Daniel (Novio) ]`.
  - Ambos botones estilizados en verde nupcial con texto blanco y pastilla de rol translúcida.
  - Eliminación total de modales o pantallas emergentes, permitiendo al invitado elegir a quién remitir su confirmación con un toque directo.
  - Validación nativa de formulario antes del envío.

✔ Se actualizaron los textos definitivos de la **Mesa de Regalos**:
  - Mensaje principal en dos párrafos destacando el valor de compartir el día y agradeciendo muestras de amor.
  - Recuadro inferior titulado *"Lluvia de sobres"* con instrucción sobre el buzón en la recepción.

✔ Se actualizaron las versiones de caché a `?v=20260912_04` en `index.html`, `styles.css` y `main.js`.

---

## Próxima etapa

- Pruebas finales de usuario y verificación de visualización en diferentes dispositivos.