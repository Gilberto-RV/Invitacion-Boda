# Documentación de Experiencia de Usuario (UX)

Este documento detalla el propósito de cada sección de la invitación digital, los objetivos emocionales y prácticos esperados, y cómo cada componente contribuye al flujo de navegación del invitado.

---

## Flujo de Navegación del Invitado (User Journey)

La invitación se plantea como una experiencia lineal y Mobile-First en una sola página (SPA). Al recibir el enlace por WhatsApp u otro medio, el usuario es guiado a través de las siguientes etapas:

```
[ Hero (Emoción/Impacto) ]
            │
            ▼
 [ Intro (Conexión Romántica) ]
            │
            ▼
[ Cuenta Regresiva (Expectativa) ]
            │
            ▼
  [ Galería (Complicidad) ]
            │
            ▼
[ Padres y Padrinos (Honor/Familia) ]
            │
            ▼
[ Info del Evento y Mapa (Logística) ]
            │
            ▼
 [ RSVP/WhatsApp (Acción Final) ]
            │
            ▼
    [ Footer (Cierre) ]
```

---

## 1. Hero (Bienvenida y Portada)

- **Objetivo**: Generar impacto emocional inmediato durante los primeros segundos de carga y presentar la información más crítica (¿Quiénes se casan? y ¿Cuándo?).
- **Táctica Visual**: Imagen de fondo a pantalla completa de la pareja de alta calidad con un filtro oscuro sutil que permite que los nombres destaquen en blanco.
- **Micro-interacción**: Fade-in suave de abajo hacia arriba del contenido y un indicador animado inferior que invita a deslizar hacia abajo de forma intuitiva.

---

## 2. Intro (Nuestra Historia)

- **Objetivo**: Crear una conexión íntima antes de presentar la logística del evento. Compartir el mensaje romántico que los novios quieren dedicar a sus invitados.
- **Táctica Visual**: Fondo limpio marfil con un pequeño elemento gráfico botánico (hoja) en color salvia. Texto con amplio interlineado e indentaciones que facilitan una lectura pausada.
- **Micro-interacción**: El texto se revela con un efecto fade-in utilizando un Intersection Observer cuando el usuario baja en la página, reforzando la sensación de calma y elegancia.

---

## 3. Cuenta Regresiva (Countdown) - *Futuro*

- **Objetivo**: Generar expectativa y urgencia positiva sobre la proximidad de la fecha.
- **Táctica Visual**: Números grandes y legibles enmarcados en cajas minimalistas con etiquetas claras (Días, Horas, Minutos, Segundos).
- **Mecanismo**: Actualización precisa en tiempo real mediante JavaScript. Al llegar a cero, emitirá un evento mediante el `EventBus` para deshabilitar o cambiar el mensaje por uno de celebración.

---

## 4. Galería (Gallery) - *Futuro*

- **Objetivo**: Mostrar la complicidad y el amor de la pareja a través de fotografías seleccionadas.
- **Táctica Visual**: Cuadrícula asimétrica o slider interactivo optimizado para gestos táctiles.
- **Mecanismo**: Carga perezosa (Lazy Loading) de las imágenes para asegurar un rendimiento de carga óptimo, y visualización en pantalla completa mediante Lightbox integrado sin salir de la invitación.

---

## 5. Padres y Padrinos (Parents & Sponsors) - *Futuro*

- **Objetivo**: Rendir homenaje y dar reconocimiento formal a las familias y padrinos que acompañan a los novios.
- **Táctica Visual**: Disposición clara por columnas, tipografía serif mediana y separación elegante de roles (Lazo, Anillos, Arras, etc.).

---

## 6. Información del Evento y Ubicación (Event & Map) - *Futuro*

- **Objetivo**: Resolver la logística del invitado (¿Dónde y a qué hora es la boda?). Evitar que el usuario se pierda buscando direcciones.
- **Táctica Visual**: Tarjetas independientes para la ceremonia/recepción.
- **Mecanismo**: Botón de llamada a la acción (CTA) directo para abrir Google Maps en la app nativa del móvil del usuario, evitando errores al copiar direcciones.

---

## 7. Confirmación (RSVP) - *Futuro*

- **Objetivo**: Facilitar al máximo la confirmación de asistencia del invitado y simplificar el control de la lista de invitados para los novios.
- **Táctica Visual**: Formulario sumamente sencillo o botón directo para confirmar.
- **Mecanismo**: Integración directa con el servicio de WhatsApp para pre-escribir un mensaje formateado con las respuestas (ej. *"Hola, confirmo mi asistencia para X personas..."*), el cual el usuario solo debe enviar con un toque.
