# Decisiones técnicas — IKOMI PERÚ

> Borrador técnico producido con asistencia de IA. Edinson debe contrastarlo con el código, explicarlo y reformularlo con sus propias palabras antes de entregar (documento, pp. 3 y 7). No se presenta como reflexión personal del estudiante.

## Configuración (Parte 1, p. 4)

Proyecto: **ikomi-next-jimenez** (`package.json`). El repositorio mantiene el nombre Evaluacion03. La aplicación está en la raíz para que README, decisiones y bitácora coincidan con lo solicitado.

| Opción elegida | Alternativa descartada | Justificación |
| --- | --- | --- |
| TypeScript estricto | JavaScript | Un producto de IKOMI tendrá slug, nombre, imagen y especificaciones; tipar estos datos evita pasar una tarjeta sin información obligatoria.<br>El editor permite detectar esas incompatibilidades antes de abrir `/productos`, a cambio de escribir tipos y aprenderlos. |
| CSS Modules; sin Tailwind | Tailwind CSS | Las capturas tienen cabecera azul, áreas oscuras y diagonales que se expresan directamente en CSS local a cada componente.<br>Prefiero clases semánticas y archivos pequeños a cadenas de utilidades; Tailwind también sería válido, pero no necesito su sistema adicional para estas siete páginas. |
| CSS Modules | Bootstrap | Bootstrap aceleraría formularios y grillas, pero sus estilos predeterminados no coinciden con el anexo.<br>Con módulos controlo las tarjetas y los puntos de quiebre sin sobrescribir reglas globales ni cargar un kit visual completo. |
| Carpeta `src/` | `app/` en la raíz | Agrupa aplicación, componentes y datos de IKOMI en una sola carpeta; los documentos de evaluación permanecen visibles en la raíz.<br>La URL sigue definida por `src/app`; `src` organiza código pero no añade segmentos al navegador. |
| App Router | Pages Router | Los archivos `page.tsx`, `layout.tsx` y `not-found.tsx` corresponden exactamente al laboratorio.<br>Las páginas del catálogo se renderizan en servidor por defecto y el layout comparte cabecera y pie sin copiarlos. |
| ESLint con reglas Next y TypeScript | Sin linter | Comprueba enlaces, imágenes y patrones de React en el sitio de IKOMI antes de entregar.<br>Se ejecuta con `npm run lint`; no asumo que `next build` lo ejecuta, porque en Next 16 el lint se realiza por separado. |
| Next 16.4.4 y React 19.3.1, versiones fijadas | Versiones flotantes o tutoriales antiguos | Se consultaron las versiones del registro npm al configurar el proyecto y Node 20.20.2 cumple el mínimo de Next (20.9).<br>El lockfile registra el árbol resuelto para reproducir la instalación; las APIs de rutas se validarán con el build real. |

## Función de los archivos y comandos

- `src/app/layout.tsx`: estructura HTML compartida, idioma español, fuente, metadata base y componentes comunes. Recibe `children`, que es la página de la URL actual.
- `src/app/page.tsx`: contenido de `/`; no es el contenedor de todas las páginas.
- `public/`: recursos estáticos; `public/images/pieza.webp` se consulta como `/images/pieza.webp`.
- `next.config.ts`: configuración del framework; no define las rutas. Se habilita Strict Mode y se omite la cabecera informativa `X-Powered-By`.
- `npm run dev`: servidor de desarrollo con recarga durante la edición. No mide el rendimiento de producción.
- `npm run build`: genera y comprueba el artefacto optimizado, tipos y prerenderizado. No sustituye pruebas de interacción ni ESLint.
- `npm run start`: sirve el último build en modo producción; requiere compilar antes.
- `npm run lint`: análisis estático separado con ESLint.
- `npm run typecheck`: comprobación estricta de TypeScript sin generar JavaScript.

## Next.js frente a React/Vite

Una SPA básica de Vite suele entregar un HTML inicial con un contenedor vacío y renderizar contenido tras descargar JavaScript. Vite también puede configurarse con SSR: la comparación es con una SPA, no una limitación absoluta de Vite.

En IKOMI, `/productos/disco-de-embrague` puede entregar nombre, descripción y metadata en el HTML prerenderizado. Un buscador o un cliente con conexión lenta dispone del contenido sin esperar toda la interacción del navegador. Next integra rutas, metadata, optimización de imágenes y separación Server/Client; en Vite tendría que integrar esas herramientas.

El contenido comercial estable puede generarse al compilar (SSG), una forma de renderizado del lado servidor previa a las visitas. No necesito ejecutar SSR por petición para todas las páginas. El JavaScript interactivo se limita al menú, filtros y formulario; no se convierte todo el sitio en Client Component.

## Enrutamiento y layouts (Parte 2, p. 4)

| Opción elegida | Alternativa descartada | Justificación |
| --- | --- | --- |
| Un layout raíz; sin layout propio de productos | Layout anidado de catálogo | Listado y detalle comparten cabecera y Footer con el resto de IKOMI; aún no tienen un panel persistente exclusivo.<br>Un layout anidado ahora agregaría una capa sin responsabilidad; sería útil si se incorporaran filtros laterales compartidos entre rutas. |
| Rutas directas sin `(marketing)` | Route group `(marketing)` | Todas las páginas pertenecen al mismo sitio corporativo y utilizan el mismo layout.<br>Un grupo tendría sentido al separar una futura administración, pero no cambia URLs ni aporta una separación necesaria en esta evaluación. |

## Navegación y límites Server/Client (Parte 3, p. 5)

`Navbar` necesitará `"use client"` porque `usePathname` lee la ruta del navegador y el menú utiliza estado/eventos. Un detalle de producto debe mantener activo Productos: se compara la ruta exacta o el prefijo `/productos/`, evitando que Inicio quede activo en todas las URLs.

Los componentes de contenido se mantienen de servidor: no necesitan hooks ni eventos y pueden importar los datos sin enviarlos todos como estado del navegador. Un Server Component puede incluir un Client Component; no es necesario marcar el layout completo como cliente. `Link` se admite dentro de componentes servidor.

El experimento real Link frente a `<a href>` y sus resultados se añadirán al ejecutar las pruebas. No se atribuirá una observación de Network antes de realizarla.

## Estilos, imágenes y fuente (Parte 4, p. 5)

Las variables de `globals.css` contienen la paleta compartida y los valores base; CSS Modules contiene la presentación de cada componente/página. La fuente se define en el layout mediante `next/font`; las demás reglas consumen su variable.

`next/image` genera variantes optimizadas, puede cargar de forma diferida y reserva espacio con dimensiones o un contenedor de tamaño definido al usar `fill`. `sizes` describe el tamaño real de la tarjeta según el ancho, evitando descargar siempre la imagen más grande. `alt` explica la imagen, no repite el nombre del archivo.

`next/font` permite servir la fuente desde la aplicación en vez de pedir Google Fonts durante cada visita. `display: swap` evita ocultar el texto mientras se carga la fuente. El build con una fuente remota requiere comprobar disponibilidad de la descarga.
