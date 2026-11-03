# Bitácora real de asistencia de IA

Esta bitácora registra intervenciones técnicas de **una misma conversación** del 03/11/2026. Los prompts citados son fragmentos literales del pedido del usuario; no se simulan nuevas conversaciones ni decisiones personales del estudiante. Las decisiones descritas son las del asistente y quedan sujetas a revisión por Edinson.

## 1. Lectura verificable del documento

- **Objetivo:** conocer los requisitos antes de programar.
- **Prompt utilizado (usuario):** «Lee las 11 páginas completas del documento.» y «Crea un archivo `REQUISITOS.md` con una lista de verificación organizada por las cinco partes de la evaluación. Indica la página del documento de donde procede cada requisito.»
- **Respuesta/intervención real:** extracción XML de párrafos y tablas, extracción de diez imágenes, apertura en Word en modo solo lectura, comprobación de 11 páginas y lectura del texto por página. Se visualizaron todas las imágenes y se creó `REQUISITOS.md`.
- **Decisión:** aceptado con observaciones.
- **Justificación:** la paginación XML por sí sola no era fiable para citar páginas; se contrastó con Word. Se identificó además la referencia inconsistente a evaluación 01 en p. 11 y el cambio del sitio oficial respecto del anexo.
- **Verificación:** primer commit `591c057`, publicado antes de implementar la aplicación.

## 2. Configuración y explicación de Next.js

- **Objetivo:** crear una base reproducible y comprensible.
- **Prompt utilizado (usuario):** «Crea y configura el proyecto con el nombre solicitado por el profesor.» y «Evalúa TypeScript, Tailwind CSS, carpeta src/, App Router y ESLint.»
- **Respuesta/intervención real:** configuración manual en la raíz existente con nombre `ikomi-next-jimenez`, TypeScript estricto, `src/app`, App Router, ESLint plano y CSS Modules. Se consultaron versiones reales en npm.
- **Decisión:** modificado respecto de usar Tailwind por defecto; se eligió CSS Modules.
- **Justificación:** el documento admite CSS Modules; evita sobrescribir Bootstrap y permite describir los estilos particulares del anexo. Las decisiones comparan alternativas en el contexto del catálogo de IKOMI.
- **Verificación real:** `npm install` instaló 346 paquetes; `npm run lint` terminó sin errores; `npm run build` compiló Next 16.4.4 y prerenderizó `/`; el servidor dev respondió HTTP 200 a `/`. La herramienta que lanzó el proceso persistente alcanzó su timeout después de mostrar esa respuesta; no se interpreta ese timeout como fallo del build.

## Errores reales de IA

Aún no se registran dos casos de código incorrecto. Solo se añadirán problemas efectivamente detectados, con antes/después, causa y comprobación. No se copiarán los ejemplos de la rúbrica como si hubieran ocurrido.

## Reflexión personal pendiente (máximo 200 palabras)

**Debe redactarla Edinson después de ejecutar y estudiar el proyecto.** Responder: ¿qué parte entiendo mejor gracias a la IA?, ¿qué tuve que razonar personalmente?, ¿qué comprobación me hizo cambiar de opinión? No entregar este marcador como reflexión terminada.
