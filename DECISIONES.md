# Decisiones del Proyecto

## Hosting

GitHub Pages

Motivo

Gratuito.

HTTPS.

Fácil mantenimiento.

---

## Tecnologías

HTML

CSS

JavaScript

No se utilizarán frameworks inicialmente.

---

## Diseño

Mobile First.

---

## Animaciones

Suaves y discretas.

Nunca deberán afectar el rendimiento.

---

## Fotografías

Se utilizarán imágenes optimizadas para WebP.

---

## Mesa de Regalos

Modalidad de "Lluvia de Sobres" situada tras los detalles de ubicación/Google Maps. Presentación con redacción respetuosa, sobria y cálida que prioriza la presencia de los invitados y señala el buzón en la recepción.

---

## Confirmación (RSVP)

WhatsApp mediante dos botones directos en el formulario principal:
- **Confirmar con Angélica (Novia):** `+52 246 325 9593`
- **Confirmar con Daniel (Novio):** `+52 246 102 6338`

El usuario selecciona a quién remitir su confirmación con un toque directo sin modales emergentes ni fricciones.

---

## Filosofía

La prioridad es transmitir emociones mediante un diseño limpio y elegante antes que utilizar efectos llamativos.

---

## Arquitectura Refactorizada (17 Julio 2026)

### Configuración Unificada
Se unificó toda la parametrización en `config/wedding.json` para reducir solicitudes HTTP y simplificar la edición.

### Instanciación Dinámica
Se decidió exportar la clase `App` sin instanciar para favorecer la escalabilidad y facilitar futuras pruebas unitarias.

### Comunicación mediante EventBus
Implementación de un EventBus nativo para desacoplar por completo la comunicación entre componentes (evitando importaciones directas entre ellos).

### Router de Anclas
Implementación de un Router interno hash-based para gestionar scroll suave, deep linking y navegación por anclas sin recargar el navegador.

---

## Estructura de Despliegue en GitHub Pages (17 Julio 2026)

### Publicación desde la Raíz del Repositorio
Se eliminó la carpeta `boda-web/` y se movió el código y los recursos a la raíz del repositorio. Esto permite que GitHub Pages publique la invitación en `https://usuario.github.io/repositorio/` de forma nativa sin requerir el sufijo `/boda-web/` en la URL pública, reduciendo la fricción para los invitados y facilitando el uso de rutas relativas compatibles.

---

## Optimización Mobile First y Nuevos Componentes (27 Agosto 2026)

### Composición Adaptativa del Hero
Se detectó que la fotografía panorámica horizontal en pantallas móviles recortaba el rostro del novio al usar `background-size: cover` estirado a 100vh. Se decidió implementar una composición adaptativa: en móviles se utiliza un fondo ambiental con desenfoque suave y un marco fotográfico estilizado con relación de aspecto que muestra a ambos novios sin cortes, con la tipografía y fecha legiblemente ubicadas. En pantallas de escritorio (PC) se mantiene la vista panorámica completa.

### Sección de Amenización Musical
Se creó el componente modular `Entertainment` parametrizado desde `wedding.json` para reconocer la participación de Natalia Guerrero Pérez en la amenización de la boda.

### Sección de Video Responsivo
Se creó el componente `Video` para integrar el archivo multimedia `assets/img/gallery/v1.mp4` con reproducción HTML5 controlada, `playsinline` y diseño armónico con la temática botánica.

### Simetría en Cuadrícula de Galería
Se integró la imagen `im11.jpeg` alcanzando 8 imágenes pares para garantizar que en dispositivos móviles (2 columnas) no quede ningún espacio vacío o asimétrico en la última fila.