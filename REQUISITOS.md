# Evaluación 03 — checklist trazable

Fuente: `EC03-S12-JVENTURA-2026-02.docx`, 11 páginas. Referencias de página contrastadas con la paginación de Microsoft Word. `[x]` significa comprobado y `[ ]` pendiente.

## Contexto y condiciones transversales

- [x] Leer portada: curso Desarrollo de Aplicaciones Web Avanzado: FullStack, docente Jorge Ventura Gonzales, secciones A–D (p. 1).
- [x] Registrar el contexto general de capacidades: JWT, Sequelize, plantillas y despliegue (p. 2). Los procedimientos específicos de esta evaluación no exigen implementar autenticación ni una base de datos.
- [ ] Estudiante: revisar el material de la semana; respetar las condiciones del laboratorio (trabajo individual, Windows 10/equipo virtual, orden, sin manipular hardware/red ni consumir alimentos) (p. 2). Son condiciones personales del laboratorio, no verificables mediante código.
- [x] Leer caso IKOMI y visitar https://www.ikomiperu.com/ (p. 3).
- [x] Analizar cinco criterios de 4 puntos cada uno; máximo 20 (pp. 3, 7).
- [ ] Validar personalmente las explicaciones y reescribirlas con palabras propias: las respuestas copiadas de IA no suman puntos (p. 3).
- [ ] Poder explicar y modificar cualquier archivo: no explicarlo limita a 2 puntos el criterio relacionado (pp. 3, 7).

## Parte 1 — Introducción a Next.js (4 puntos)

- [ ] **1.1** Nombre `ikomi-next-<apellido>`; se utilizará `ikomi-next-jimenez`, de acuerdo con la identidad Git configurada. Decidir TypeScript/JavaScript, Tailwind, `src/`, App Router y ESLint (p. 4).
- [ ] **1.2** `DECISIONES.md` con tabla **Opción elegida | Alternativa descartada | Justificación**, al menos dos líneas por decisión, aplicadas a IKOMI (p. 4).
- [ ] **1.3** Explicar `app/layout`, `app/page`, `public/`, `next.config`, scripts `dev`, `build`, `start` (p. 4).
- [ ] **1.4** Comparar con SPA React/Vite en SEO, renderizado de servidor y rendimiento; ejemplo concreto de una página (p. 4).
- [ ] **1.5** `npm run build` sin errores y captura auténtica en `evidencias/` (p. 4).
- [ ] **Excelente:** ejecutar y compilar sin errores, argumentos propios y precisos sobre configuración, estructura y ventaja frente a SPA (p. 7).

## Parte 2 — Enrutamiento y páginas (4 puntos)

- [ ] **2.1** `/` → `src/app/page.tsx` (p. 4; referencia p. 8).
- [ ] **2.1** `/nosotros` → `src/app/nosotros/page.tsx` (p. 4; referencia p. 8).
- [ ] **2.1** `/servicios` → `src/app/servicios/page.tsx` (p. 4; referencia p. 9).
- [ ] **2.1** `/productos` → `src/app/productos/page.tsx` (p. 4; referencia p. 9).
- [ ] **2.1** `/productos/[slug]` → `src/app/productos/[slug]/page.tsx` (p. 4; referencia p. 9).
- [ ] **2.1** `/marcas` → `src/app/marcas/page.tsx` (p. 4; referencia p. 10).
- [ ] **2.1** `/contacto` → `src/app/contacto/page.tsx` (p. 4; referencia p. 10).
- [ ] **2.1** 404 personalizada para rutas inexistentes → `src/app/not-found.tsx` (p. 4).
- [ ] **2.2** Archivo de datos con ≥3 productos, listado, detalle por slug y `notFound()` para slug inválido (p. 4).
- [ ] **2.3** Título y descripción individuales mediante `metadata` / `generateMetadata` (p. 4).
- [ ] **2.4** Justificar uso o descarte de layout anidado para productos y route groups `(marketing)` (p. 4).
- [ ] **Excelente:** todas las rutas, datos dinámicos, 404, metadata y justificación verificadas (p. 7).

## Parte 3 — Navegación (4 puntos)

- [ ] **3.1** Navbar en todas las páginas; navegación interna con `next/link` (p. 5).
- [ ] **3.2** Enlace activo con `usePathname`, incluidos detalles de productos (p. 5).
- [ ] **3.2** Explicar `"use client"` de Navbar y por qué las demás partes pueden ser Server Components (p. 5).
- [ ] **3.3** Menú responsive funcional (p. 5).
- [ ] **3.4** Reemplazo temporal real de Link por `<a href>`; observación de Network, captura auténtica y explicación de la diferencia; restaurar Link (p. 5).
- [ ] **Excelente:** navegación completa, estado activo, menú responsive y explicación respaldada por evidencia (p. 7).

## Parte 4 — Componentes y estilización (4 puntos)

- [ ] **4.1** Componentes reutilizables `Navbar`, `Footer`, `Hero`, `ProductCard` con props, `SectionTitle`, `ContactForm` solo interfaz (p. 5).
- [ ] **4.1** Navbar y Footer dentro del layout raíz (p. 5; Footer p. 11).
- [ ] **4.2** Elegir Tailwind, CSS Modules o Bootstrap y justificar frente a las otras dos; colores/tipografía centralizados (p. 5).
- [ ] **4.3** `next/image`: alt descriptivo, tamaños definidos y beneficio explicado (p. 5).
- [ ] **4.3** `next/font`: fuente y beneficio explicados (p. 5).
- [ ] **4.4** Capturas de ≥2 páginas a **375 px** (p. 5).
- [ ] **4.4** Capturas de ≥2 páginas a **768 px** (p. 5).
- [ ] **4.4** Capturas de ≥2 páginas a **1280 px** (p. 5).
- [ ] **4.5** Animación/transición con propósito y explicación de su utilidad (p. 5).
- [ ] **4.6** Árbol con distinción Server/Client en README o imagen (p. 5).
- [ ] **Referencia Inicio:** cabecera azul, logotipo IKOMI/IKM, enlaces claros, activo amarillo; hero de repuestos con velo oscuro y texto blanco; acceso de contacto (p. 8).
- [ ] **Referencia Nosotros:** tarjetas de Equipo, Almacén, Tienda y Empresa, con imágenes, encabezados grises y fondo claro (p. 8).
- [ ] **Referencia Servicios:** sección oscura, título centrado/subrayado rojo, cuatro tarjetas Ventas, Asesoría, Delivery y Productos, iconos rojos; geometría diagonal (p. 9).
- [ ] **Referencia Productos:** fondo blanco, título/subrayado, categorías y cuadrícula de repuestos (p. 9). Los filtros visibles deben funcionar o no presentarse como controles.
- [ ] **Referencia Marcas:** sección oscura, tarjetas blancas con marca y descripción; Sangsin, Hansang, Mando, TCIC, Valeo, Yulim (p. 10).
- [ ] **Referencia Contacto:** título, explicación, mapa y formulario con nombres, teléfono, correo, asunto, mensaje y botón rojo (p. 10).
- [ ] **Referencia Footer:** fondo oscuro, descripción de empresa, dirección, correo, teléfonos, links y copyright (p. 11).
- [ ] **Excelente:** reutilización, props, layout, imágenes/fuente, tres tamaños, transición útil, coherencia, justificación y árbol (p. 7).

## Parte 5 — Uso crítico de IA y sustentación (4 puntos)

- [ ] **5.1** `BITACORA_IA.md` con ≥5 entradas reales, cada una con objetivo, prompt, resumen, decisión (aceptado/modificado/rechazado) y justificación (p. 5).
- [ ] **5.2** ≥2 errores reales propuestos por IA, evidencia del problema, antes/después y explicación de corrección; no introducir fallos deliberados para completar la rúbrica (p. 5).
- [ ] **5.3** Reflexión **personal** de ≤200 palabras: qué se comprendió gracias a IA y qué se razonó por cuenta propia (p. 5).
- [ ] **5.4** Preparar guía de exposición de cinco minutos y práctica de cambio pequeño en vivo; sustentación real sin IA (p. 5).
- [ ] **Conclusiones:** cinco conclusiones personales. El original dice «después de la evaluación 01»; confirmar con docente si se refiere a la evaluación 03 (p. 11).
- [ ] **Excelente:** bitácora completa, ≥2 errores reales, reflexión propia y capacidad demostrada de explicación/modificación (p. 7).

## Entregables y proceso (p. 6, salvo indicación)

- [ ] Repositorio https://github.com/jimenezvegaedin-sys/Evaluacion03 con ≥5 commits progresivos y descriptivos; verificar cada push.
- [ ] Desplegar en plataforma explicada en clase (plataforma por confirmar); preparar instrucciones reproducibles no equivale a desplegar.
- [ ] README: instalación, ejecución y árbol de componentes.
- [ ] `DECISIONES.md` y `BITACORA_IA.md` en raíz.
- [ ] `evidencias/` con build, Network y seis capturas responsive como mínimo.
- [ ] Ejecutar `npm install`, `npm run dev` y `npm run build` y comprobar resultados reales.
- [ ] Verificar producción con `npm run start`, rutas estáticas, tres detalles y ambos casos 404 (verificación complementaria).
- [ ] Captura del historial real de GitHub en navegador (evidencia complementaria).
- [ ] Informe final requisito por requisito, resultados, archivos, commits, evidencias, despliegue y observaciones (revisión complementaria).
- [ ] Revisar `git status`, diff y archivos a incluir antes de cada commit; no leer ni publicar secretos (control de publicación).

## Riesgos de calificación que no se resuelven generando archivos

1. Sin bitácora: criterio 5 = 0 (p. 3).
2. Justificaciones copiadas de IA: no suman; las decisiones deben comprenderse y explicarse con palabras propias (p. 3).
3. No explicar un fragmento: máximo 2 en el criterio relacionado (pp. 3, 7).
4. Reflexión, conclusiones y sustentación dependen de la experiencia real del estudiante (pp. 5, 11).
5. La capacidad general de p. 2 no sustituye los procedimientos concretos de pp. 4–6.

## Registro del análisis visual

Las imágenes extraídas se guardaron temporalmente fuera del repositorio, sin alterarlas. Relación del DOCX: `image4.png` Inicio, `image5.png` Nosotros (p. 8); `image6.png` Servicios, `image7.png` Productos (p. 9); `image8.png` Marcas, `image9.png` Contacto (p. 10); `image10.png` Footer (p. 11). Las otras tres son imágenes institucionales. Las capturas del anexo tienen prioridad sobre el sitio oficial de noviembre de 2026, que actualmente presenta otra navegación y apariencia.
