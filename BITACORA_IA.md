# Bitácora técnica — IKOMI PERÚ

Registro de consultas técnicas, soluciones evaluadas y comprobaciones del proyecto.

## 1. Configuración de Next.js

- **Objetivo:** crear una base reproducible y comprensible.
- **Consulta técnica (prompt):** «Evalúa TypeScript, Tailwind CSS, carpeta src/, App Router y ESLint.»
- **Resumen de la respuesta:** configuración con TypeScript estricto, `src/app`, App Router, ESLint plano y CSS Modules. Versiones contrastadas con el registro npm.
- **Decisión:** aceptado: TypeScript, App Router y ESLint; elegida la alternativa CSS Modules para los estilos.
- **Justificación:** el documento admite CSS Modules; evita sobrescribir Bootstrap y permite describir los estilos particulares del anexo. Las decisiones comparan alternativas en el contexto del catálogo de IKOMI.
- **Verificación:** `npm install` instaló 346 paquetes; ESLint sin errores; build inicial correcto con Next 16.4.4; respuesta HTTP 200 de `/` en desarrollo.

## 2. Rutas, metadata y catálogo

- **Objetivo:** cubrir el enrutamiento de archivos y los casos de producto inexistente.
- **Consulta técnica (prompt):** «Incluye al menos tres productos, rutas dinámicas, `notFound()` y metadata individual para las páginas.»
- **Resumen de la respuesta:** catálogo tipado con seis productos; ruta `[slug]` con `params` asíncronos, `generateMetadata`, `generateStaticParams` y 404 personalizada. Componentes ProductCard y SectionTitle reutilizables.
- **Decisión:** aceptado; se utilizaron seis productos visibles en el anexo en vez del mínimo de tres.
- **Justificación:** permite reproducir la cuadrícula de referencia sin inventar SKU, stock ni precios. Las imágenes se recortaron del anexo como recursos; no son evidencias de ejecución. Se mantuvo la versión del App Router actual, sin APIs de Pages Router.
- **Verificación:** ESLint y build correctos; `node scripts/check-routes.mjs` comprobó 12 URLs válidas con títulos y descripciones únicos y dos respuestas HTTP 404 (URL inexistente y slug inválido).

## 3. Navegación responsive

- **Objetivo:** navegar sin recargas completas y reconocer la sección actual.
- **Consulta técnica (prompt):** «Navegación mediante `next/link`. Enlace activo mediante `usePathname`. Menú responsive para móviles.»
- **Resumen de la respuesta:** Navbar con Link, estado local del menú y coincidencia de ruta exacta o prefijo para los detalles de producto. La navegación compartida se colocó en el layout.
- **Decisión:** aceptado.
- **Justificación:** el estado del menú y `usePathname` requieren un Client Component; las páginas informativas conservan el renderizado de servidor. Productos debe permanecer activo al abrir un slug.
- **Verificación:** Playwright comprobó abrir/cerrar menú, navegación al listado y un único enlace activo en un detalle.

## 4. Componentes y estilos

- **Objetivo:** reproducir la referencia con componentes y estilos consistentes.
- **Consulta técnica (prompt):** «Implementa Navbar, Footer, Hero, ProductCard, SectionTitle y ContactForm.» y «Verifica el diseño en 375 px, 768 px y 1280 px.»
- **Resumen de la respuesta:** componentes con CSS Modules, variables compartidas, imágenes locales optimizadas mediante Image, Inter con next/font y filtros reales por categoría. ContactForm implementa únicamente la interfaz.
- **Decisión:** modificado después de las pruebas de contraste y del estado del formulario.
- **Justificación:** la semejanza visual no garantiza legibilidad ni un estado de interfaz correcto. Se ajustó la paleta y se invalidó el mensaje de revisión al editar.
- **Verificación:** seis páginas recorridas en cada uno de los tres anchos; imágenes cargadas, sin desbordamiento horizontal ni excepciones JavaScript. Los dos defectos iniciales se detallan a continuación.

## Corrección 1 — Confirmación obsoleta en ContactForm

**Problema detectado:** tras completar y revisar el formulario, borrar el nombre mantenía visible «Los campos están completos». La propuesta inicial controlaba el envío, pero no invalidaba el resultado al cambiar los datos.

Antes (`src/components/ContactForm.tsx`):

```tsx
<form className={styles.form} onSubmit={handleSubmit}>
```

Después:

```tsx
<form
  className={styles.form}
  onSubmit={handleSubmit}
  onChange={() => setReviewed(false)}
>
```

**Fundamento:** un resultado de validación deja de ser válido cuando cambia el contenido. `onChange` burbujea desde los campos y elimina el aviso; la validación nativa vuelve a comprobarse al revisar otra vez.

**Detección real:** prueba `formulario valida y descarta confirmación al editar`: esperaba cero elementos con `role="status"`, pero recibió uno. Registro: `evidencias/formulario-estado-inicial.json`. Después de la corrección, la misma prueba pasó.

## Corrección 2 — Paleta con contraste insuficiente

**Problema detectado:** el azul aproximado de la referencia no daba contraste suficiente con enlaces blancos/amarillos; el rojo tampoco con el texto blanco pequeño de botones.

Antes (`src/app/globals.css`):

```css
--blue-light: #5774ce;
--red: #e93646;
```

Después:

```css
--blue-light: #3f5db8;
--red: #ce2639;
```

**Fundamento:** conservar los colores corporativos no exige copiar valores que dificultan leer la navegación. Se oscurecieron las variables centrales, evitando correcciones aisladas en cada componente. También se mantuvo el texto blanco en el hover del filtro seleccionado.

**Detección real:** axe-core informó contraste 3.38:1 para amarillo/azul, 4.37:1 para blanco/azul y 4.13:1 para blanco/rojo; el mínimo esperado en esos textos era 4.5:1. Registro: `evidencias/accesibilidad-inicial.json`. Tras la corrección, el análisis de Inicio, Productos y Contacto terminó sin infracciones detectadas en las reglas WCAG A/AA ejecutadas. Las siete pruebas E2E pasaron.

## Reflexión personal pendiente (máximo 200 palabras)

Pendiente de redacción personal después de ejecutar y estudiar el proyecto. Preguntas guía: ¿qué parte entiendo mejor gracias a la IA?, ¿qué tuve que razonar por mi cuenta?, ¿qué comprobación me hizo cambiar de opinión?
