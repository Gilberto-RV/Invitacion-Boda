# Sistema de Diseño (Design System)

Este documento detalla los tokens visuales, las reglas tipográficas, las pautas de diseño y las directrices de accesibilidad que rigen la identidad visual de la invitación digital.

---

## 1. Paleta de Colores

Nuestra paleta se inspira en elementos naturales, botánicos y románticos, combinando tonos tierra suaves y pasteles con alto nivel de contraste para la lectura.

| Variable CSS | Color (HEX) | Propósito y Uso |
|---|---|---|
| `--color-sage` | `#919682` | Verde Salvia principal. Usado para títulos de sección y decoraciones botánicas. |
| `--color-sage-light` | `#a4a995` | Salvia claro. Usado para efectos hover y elementos secundarios. |
| `--color-sage-dark` | `#6e7261` | Salvia oscuro. Usado para texto sobre fondos muy claros. |
| `--color-beige` | `#C7A491` | Beige Arena. Usado para bordes, separadores de sección y botones sutiles. |
| `--color-beige-light` | `#d6bcae` | Arena claro. Usado para fondos secundarios y detalles. |
| `--color-pink` | `#EECFCA` | Rosa Empolvado. Color de acento para subcabeceras, indicadores y estados activos. |
| `--color-pink-light` | `#f5e3e0` | Rosa muy claro. Fondos decorativos sutiles. |
| `--color-ivory` | `#ECE1DD` | Marfil. Fondo principal de la invitación, aportando calidez (sustituye al blanco puro). |
| `--color-white` | `#FFFFFF` | Blanco puro. Usado para contenedores de texto destacados e interiores de tarjetas. |
| `--color-dark` | `#2C302E` | Gris oscuro. Color principal del texto (body) para asegurar máxima legibilidad. |
| `--color-dark-light` | `#4A4F4C` | Gris oscuro medio. Usado para textos secundarios y pies de página. |

---

## 2. Tipografía y Escala Tipográfica

Importamos tipografías complementarias de **Google Fonts**:
1. **Cormorant Garamond (Serif)**: Aporta un estilo tradicional, elegante y editorial de alta gama.
2. **Outfit (Sans-serif)**: Limpia, moderna y con excelente legibilidad en pantallas pequeñas.

### Escala de Tamaños
- **`--font-size-xs`**: `0.75rem` (12px) - Texto legal, notas pequeñas, indicador de scroll.
- **`--font-size-sm`**: `0.875rem` (14px) - Subtítulos, metadatos y etiquetas.
- **`--font-size-base`**: `1.0rem` (16px) - Texto de lectura principal (body).
- **`--font-size-lg`**: `1.125rem` (18px) - Destacados o párrafos introductorios.
- **`--font-size-xl`**: `1.25rem` (20px) - Títulos de bloques internos.
- **`--font-size-xxl`**: `1.5rem` (24px) - Fechas y subtítulos destacados.
- **`--font-size-h3`**: `1.75rem` (28px) - Títulos de componentes medianos (Padres, Ubicación).
- **`--font-size-h2`**: `2.2rem` (35px) - Títulos de secciones principales (Nuestra Historia, RSVP).
- **`--font-size-h1`**: `3.5rem` (56px) - Nombres en la portada (Hero).

---

## 3. Espaciado y Límites de Contenedor

Para asegurar la consistencia y el correcto flujo del diseño Mobile First:

- **Secciones**: Relleno vertical estándar de `100px` (`--spacing-section`) para móviles, escalando a `120px` en pantallas grandes. Esto crea "respiro" y elegancia.
- **Contenedores de Contenido**: Ancho máximo de `600px` (`--max-width-content`) para textos largos. Esto previene líneas de texto demasiado largas y fatiga de lectura.
- **Rejilla Móvil**: Padding lateral mínimo de `24px` (`--spacing-lg`) en móviles para evitar que el texto toque los bordes físicos de la pantalla.

---

## 4. Sombras (Shadows)

Utilizamos elevaciones muy sutiles para no romper el estilo minimalista y limpio del sitio.
- **`--shadow-subtle`**: `0 4px 20px rgba(0, 0, 0, 0.05)` (Tarjetas de información del evento, inputs suaves).
- **`--shadow-medium`**: `0 8px 30px rgba(0, 0, 0, 0.08)` (Modales, lightbox de galería, menús flotantes).
- **`--shadow-text`**: `0 2px 10px rgba(0, 0, 0, 0.2)` (Filtro sutil en el texto de Hero sobre la imagen de fondo).

---

## 5. Accesibilidad (a11y)

1. **Contraste de Color**: El texto principal (`#2C302E`) sobre fondo Marfil (`#ECE1DD`) o Blanco (`#FFFFFF`) excede la relación de contraste **4.5:1** requerida por las pautas WCAG 2.1 AA.
2. **Respeto a Preferencias del Usuario**: El archivo `theme/animations.css` incluye la directiva `prefers-reduced-motion: reduce`, la cual desactiva todas las animaciones complejas, fade-ins y transiciones de scroll para los usuarios que tengan configurada esta opción a nivel de sistema operativo.
3. **Estructura Semántica**: Un solo elemento `<h1>` en el sitio (en el Hero) y un flujo coherente de encabezados `<h2>` para secciones principales y `<h3>` para sub-secciones.
