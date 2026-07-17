# Invitación de Boda Digital - Plantilla Premium

Proyecto de invitación de boda digital premium para **Angélica & Daniel**, estructurada como una plantilla web de página única (SPA), 100% responsiva, Mobile-First y basada en configuraciones de datos JSON.

---

## Características de la Arquitectura

1. **Configuración Unificada**: Todo el contenido, logística, personas y SEO se definen en `config/wedding.json`. Cambiar este archivo adapta el sitio para una nueva boda.
2. **Capa Core**:
   - `App.js`: Administra la carga de datos y registro de componentes.
   - `Component.js`: Clase abstracta base de componentes.
   - `Renderer.js`: Orquestador del ciclo de vida (`render` e `init`).
   - `EventBus.js`: Canal de eventos para la comunicación desacoplada.
   - `Router.js`: Router basado en hashes para anclas con scroll suave.
3. **Estilos Centralizados (Theme)**: El tema de diseño se compone de tokens separados en la carpeta `theme/` (`colors.css`, `typography.css`, etc.) importados en `styles.css`.
4. **Desacoplamiento Absoluto**: Cada sección vive en su propia carpeta en `components/` y cuenta con su propia lógica (`index.js`) y estilos (`styles.css`).

---

## Estructura del Directorio

```
boda-web/
├── config/              # Archivos de configuración JSON
├── core/                # Capa Core (App, Component, Renderer, etc.)
├── services/            # Servicios de integración externa (WhatsApp)
├── plugins/             # Carpetas para futuras extensiones
├── theme/               # Tokens de diseño CSS (colores, fuentes)
├── components/          # Componentes independientes (Hero, Intro, etc.)
├── assets/              # Archivos CSS globales, imágenes y tipografías
├── docs/                # Documentación del sistema de diseño y UX
├── index.html           # Archivo HTML de entrada
└── manifest.json        # Manifiesto de la aplicación web
```

---

## Cómo Ejecutar el Proyecto Localmente

No se requieren frameworks ni compiladores. Solo necesitas un servidor local web estático para evitar bloqueos por políticas de CORS al cargar los módulos ES y archivos JSON de configuración.

### Opción 1: Usando Node (npx)
Si tienes Node.js instalado, ejecuta el siguiente comando en la raíz del proyecto:
```bash
npx live-server boda-web
```

### Opción 2: Usando Python
Si cuentas con Python instalado:
```bash
python -m http.server -d boda-web
```

---

## Reglas de Desarrollo del Proyecto

- **Sin Acoplamientos directos**: Nunca importes un componente dentro de otro.
- **Acceso al DOM**: Un componente nunca debe manipular el DOM de otra sección.
- **Comunicación**: Utiliza `core/EventBus.js` para comunicar cambios entre componentes de manera reactiva.
- **Mobile First**: Diseña primero para pantallas de teléfonos y amplía con media queries a tablet y escritorio.
