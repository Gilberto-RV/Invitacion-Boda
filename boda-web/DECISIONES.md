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

## Confirmación

WhatsApp mediante enlace personalizado.

Durante el desarrollo utilizará el número del desarrollador.

Posteriormente será actualizado.

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