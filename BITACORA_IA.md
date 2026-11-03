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

## Registro de correcciones

Pendiente de completar con los problemas detectados durante las pruebas: código anterior, corrección, causa y resultado de la comprobación.

## Reflexión personal pendiente (máximo 200 palabras)

Pendiente de redacción personal después de ejecutar y estudiar el proyecto. Preguntas guía: ¿qué parte entiendo mejor gracias a la IA?, ¿qué tuve que razonar por mi cuenta?, ¿qué comprobación me hizo cambiar de opinión?
