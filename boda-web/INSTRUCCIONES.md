# Instrucciones permanentes

## Calidad

Todo cambio deberá mantener un nivel visual profesional.

Nunca implementar soluciones rápidas si comprometen la mantenibilidad.

---

## Código

Mantener HTML semántico.

Mantener CSS organizado.

Mantener JavaScript modular.

Evitar duplicación.

---

## Componentes

Todo componente debe ser reutilizable.

No escribir estilos duplicados.

---

## Responsive

La prioridad absoluta es Mobile First.

Posteriormente adaptar Tablet y Desktop.

---

## Rendimiento

Optimizar imágenes.

Evitar librerías innecesarias.

Reducir JavaScript.

Mantener tiempos de carga bajos.

---

## Accesibilidad

Contraste adecuado.

Etiquetas ARIA cuando sean necesarias.

Navegación mediante teclado.

---

## Documentación

Cada sesión de desarrollo debe actualizar:

PROGRESO.md

Si existe una decisión importante también actualizar:

DECISIONES.md

Si cambia un requerimiento:

CONTEXTO.md

Si cambia la estructura:

README.md

Nunca eliminar información histórica de PROGRESO.md.

Agregar nuevas entradas cronológicamente.

---

## Diseño

Mantener una identidad visual consistente.

No utilizar colores fuera de la paleta salvo justificación.

Mantener espaciados uniformes.

Animaciones discretas.

Evitar saturación visual.

---

## Git

Cada cambio importante debe corresponder a un commit con mensaje descriptivo.

---

## Reglas de Componentes (17 Julio 2026)

- **Aislamiento del DOM**: Nunca acceder directamente al DOM de otro componente.
- **Sin Dependencias Cruzadas**: Nunca importar un componente dentro de otro componente.
- **Comunicación Desacoplada**: Toda comunicación deberá realizarse exclusivamente mediante el `EventBus`, la configuración central, servicios o utilidades del Core.
- **Única Responsabilidad**: Cada componente debe tener una única responsabilidad enfocada y clara.
- **Principio de Reutilización**: Los componentes deben poder eliminarse, reordenarse o reutilizarse en otra invitación sin romper la aplicación.
- **Plantilla Genérica**: Evitar hardcodear datos de texto, fechas, nombres o enlaces de una boda específica. Toda la información debe obtenerse dinámicamente de `config/wedding.json`.