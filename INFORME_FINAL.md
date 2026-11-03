# Informe de revisión — Evaluación 03

Fecha: 03/11/2026. Proyecto: **ikomi-next-jimenez**. Repositorio: https://github.com/jimenezvegaedin-sys/Evaluacion03.

## Resumen

Sitio corporativo IKOMI PERÚ implementado con Next.js 16.4.4, React 19.3.1, App Router, TypeScript y CSS Modules. Las páginas, el catálogo de seis productos, las rutas dinámicas y la 404 están operativos. Compilación, tipos, lint y pruebas de interfaz comprobados. Existen capturas auténticas de build, Network, responsive y GitHub.

**Pendiente:** reflexión personal, cinco conclusiones personales, demostración de sustentación y despliegue público. No se considera completada la evaluación ni se atribuye una nota de 20 puntos mientras existan estos pendientes.

## Comparación con las once páginas

| Página | Contenido del documento | Resultado de la revisión |
| --- | --- | --- |
| 1 | Portada, curso, docente y secciones | Identificación registrada en REQUISITOS.md. |
| 2 | Capacidades, seguridad, recursos y trabajo individual | Condiciones personales pendientes de confirmación; las capacidades generales no añaden JWT/Sequelize al procedimiento específico de este laboratorio. |
| 3 | Cinco criterios, caso IKOMI y reglas de IA | Sitio basado en el anexo, cinco áreas técnicas documentadas y bitácora existente; revisión y explicación propias pendientes. |
| 4 | Configuración y todas las rutas | Implementadas y comprobadas; decisiones y comparación con SPA en DECISIONES.md. |
| 5 | Navegación, componentes, estilos, IA y sustentación | Implementación y evidencias listas; reflexión y sustentación personal pendientes. |
| 6 | Entregables y despliegue | Repositorio progresivo, README, decisiones, bitácora y capturas presentes. Despliegue no realizado. |
| 7 | Rúbrica de 20 puntos | Condiciones técnicas revisadas; comprensión y desempeño en vivo no pueden acreditarse mediante archivos. |
| 8 | Referencias Inicio y Nosotros | Hero de repuestos, cabecera azul y cuatro tarjetas de empresa reproducidos razonablemente. |
| 9 | Referencias Servicios y Productos | Cuatro servicios sobre fondo oscuro con diagonales; catálogo claro con seis repuestos y filtros funcionales. |
| 10 | Referencias Marcas y Contacto | Seis marcas en tarjetas blancas; mapa real y formulario con todos los campos. |
| 11 | Footer y cinco conclusiones | Footer compartido implementado; conclusiones por redactar. Se conserva la observación sobre la mención a «evaluación 01». |

El checklist completo con cada subapartado y página de origen está en [REQUISITOS.md](REQUISITOS.md).

## Estado por criterio

### 1. Proyecto y decisiones

- **1.1:** nombre correcto en package.json; TypeScript, `src/`, App Router y ESLint. CSS Modules elegido como alternativa admitida a Tailwind.
- **1.2:** tabla con alternativas y justificaciones en dos líneas por decisión.
- **1.3:** funciones de layout, page, public, next.config y scripts explicadas.
- **1.4:** comparación Next frente a SPA React/Vite con ejemplo de ficha de producto; distinción entre SSG y SSR por petición.
- **1.5:** build sin errores y captura de salida real. Es una terminal web, no VS Code; hay instrucciones para agregar una captura de VS Code si se solicita.
- **Pendiente personal:** comprender y explicar los argumentos con palabras propias.

### 2. Enrutamiento y páginas

- **2.1:** seis rutas corporativas, detalle de producto y página 404 personalizados.
- **2.2:** seis productos tipados; `generateStaticParams`, búsqueda por slug y `notFound()`.
- **2.3:** metadata individual de páginas y fichas mediante `metadata` y `generateMetadata`.
- **2.4:** descarte razonado de layout anidado y route groups para este tamaño de sitio.

### 3. Navegación

- **3.1:** navegación interna mediante Link; Navbar en el layout raíz.
- **3.2:** `usePathname`, `aria-current` y coincidencia por prefijo para mantener Productos activo en los detalles. Client/Server explicado.
- **3.3:** menú móvil con botón, estado expandido y cierre al navegar.
- **3.4:** experimento real con sustitución temporal por `<a>`, builds separados y capturas auténticas de DevTools. Link restaurado.

### 4. Componentes y estilos

- **4.1:** Navbar, Footer, Hero, ProductCard, SectionTitle y ContactForm; componentes adicionales Icon, ProductCatalog y ContactShortcut.
- **4.2:** CSS Modules y variables de tema centrales; alternativas comparadas.
- **4.3:** next/image con alt y espacio reservado; Inter mediante next/font.
- **4.4:** seis páginas comprobadas en 375/768/1280 px; capturas de al menos dos por ancho.
- **4.5:** transición de tarjetas para indicar interacción, también al foco; movimiento reducido respetado.
- **4.6:** árbol Server/Client en README.

### 5. Uso crítico y sustentación

- **5.1:** cinco entradas técnicas con consulta, objetivo, solución, decisión y justificación.
- **5.2:** dos problemas reales detectados y corregidos: confirmación obsoleta al editar el formulario y paleta con contraste insuficiente. Código antes/después y resultados de regresión registrados.
- **5.3:** reflexión de máximo 200 palabras **pendiente de redacción personal**.
- **5.4:** guía de cinco minutos y ejercicios preparados en SUSTENTACION.md; explicación y cambio en vivo **pendientes de demostración**.
- **Conclusiones de p. 11:** cinco temas guía en CONCLUSIONES.md; **pendientes de redacción personal**.

## Archivos implementados

```text
src/
├── app/
│   ├── layout.tsx, page.tsx, not-found.tsx, icon.svg
│   ├── globals.css, home.module.css, pages.module.css
│   ├── nosotros/page.tsx
│   ├── servicios/page.tsx
│   ├── productos/page.tsx
│   ├── productos/[slug]/page.tsx
│   ├── marcas/page.tsx
│   └── contacto/page.tsx
├── components/
│   ├── Navbar, Footer, Hero, ProductCard, SectionTitle
│   ├── ContactForm, ProductCatalog, ContactShortcut
│   └── Icon (componentes .tsx y módulos CSS cuando corresponde)
└── data/productos.ts, navigation.ts
public/images/ — 18 recursos WebP y FUENTES.md
package.json, package-lock.json, tsconfig.json
next.config.ts, eslint.config.mjs, .gitignore
README.md, REQUISITOS.md, DECISIONES.md, BITACORA_IA.md
SUSTENTACION.md, CONCLUSIONES.md, INFORME_FINAL.md
evidencias/ — capturas y explicación de Network
```

Las herramientas de captura, resultados JSON, logs, dependencias instaladas, salidas de compilación y el DOCX original no forman parte de la entrega actual. Los JSON de configuración necesarios para instalar y compilar sí se conservan.

Auditoría de entrega: 80 archivos, 14 capturas PNG, enlaces Markdown locales comprobados y ningún archivo auxiliar o de credenciales en la selección versionada.

## Pruebas y resultados reales

| Comprobación | Resultado |
| --- | --- |
| `npm install` | Correcto; repetido después de retirar dependencias auxiliares de captura. |
| `npm run lint` | Sin errores, también con la configuración final. |
| `npm run typecheck` | Sin errores, también con la configuración final. |
| `npm run build` | Código de salida 0; rutas estáticas y seis fichas prerenderizadas. Repetido con la entrega final depurada. |
| Desarrollo | Respuesta HTTP 200 para las seis páginas y una ficha; instancia ya abierta reutilizada en la comprobación final. Un intento de iniciar una segunda instancia fue rechazado por Next y se corrigió el método de verificación. |
| Producción | Doce URLs con HTTP 200, h1, título y descripción únicos. |
| 404 | HTTP 404 y contenido personalizado en `/ruta-inexistente` y `/productos/slug-invalido`. |
| Responsive | 18 recorridos: seis páginas por tres anchos, sin desbordamiento horizontal ni imágenes rotas. |
| Interacción | Menú móvil, cierre al navegar y enlace activo en detalle correctos; filtros 6 → 1 → 3 → 6 productos correctos. |
| Formulario | Campos requeridos y correo; aviso local y eliminación del aviso al editar. |
| Accesibilidad automatizada | axe-core sin infracciones en las reglas WCAG A/AA ejecutadas sobre Inicio, Productos y Contacto, tras ajustar contraste. Se excluyó el contenido del iframe externo. |
| E2E | Siete pruebas aprobadas después de corregir dos fallos reales. |
| Mapa | Carga real de Google Maps comprobada, con captura tomada tras esperar su renderizado. |
| Network | Link: cero documentos nuevos para Productos; `<a>`: un documento nuevo y reinicio del contexto de ventana. |

## Evidencias existentes

- `build-terminal.png`: salida en directo de `npm run build` en terminal web.
- `network-link.png`, `network-anchor.png` y `EXPERIMENTO_NETWORK.md`.
- `inicio-375.png`, `productos-375.png`.
- `inicio-768.png`, `productos-768.png`.
- `inicio-1280.png`, `productos-1280.png`.
- `nosotros-1280.png`, `servicios-1280.png`, `marcas-1280.png`, `contacto-1280.png`.
- `github-commits.png`: historial real con seis commits visibles hasta `26a8e30`.

## Commits publicados y comprobados

| Commit | Etapa |
| --- | --- |
| `591c057` | Requisitos y checklist con páginas de origen. |
| `ce47def` | Configuración inicial de Next, instalación, lint y build. |
| `b9b0c0a` | Organización de la documentación técnica. |
| `c6910d2` | Rutas, metadata, datos y catálogo dinámico; pruebas de URLs. |
| `ad653bf` | Navegación, diseño responsive, componentes y pruebas de interfaz. |
| `26a8e30` | Evidencias de build/Network/GitHub, guía de sustentación, revisión y depuración de la entrega. |

Cada uno se publicó al terminar su etapa y se contrastó el hash local con `refs/heads/main` del remoto. El historial completo, incluido el commit de cierre de este informe, está en [GitHub](https://github.com/jimenezvegaedin-sys/Evaluacion03/commits/main/).

## Estado del despliegue

**No realizado.** No existe una URL de producción acreditada. La aplicación queda lista para ejecutarse localmente con los comandos del README. El entregable de despliegue de p. 6 permanece pendiente.

## Observaciones para la revisión del docente

1. La reflexión y las conclusiones deben completarse a partir de experiencia personal; los marcadores actuales no son respuestas terminadas.
2. Las decisiones deben poder explicarse en vivo. Según pp. 3 y 7, no explicar un fragmento limita el criterio correspondiente a dos puntos.
3. Los recursos gráficos proceden de las capturas del anexo y tienen resolución limitada. Se priorizó la referencia del laboratorio sobre el rediseño actual de la web oficial; no se pretende una copia pixel a pixel.
4. El formulario no envía mensajes, acorde con «solo interfaz» de p. 5. El mapa requiere conexión al servicio externo.
5. El Footer usa el teléfono confirmado en la web oficial actual y no duplica el correo de la captura.
6. La captura del build muestra una terminal web real; si se exige el entorno de VS Code, seguir los pasos de evidencias/README.md para adjuntarla.
7. Confirmar la mención a «evaluación 01» en la solicitud de cinco conclusiones de p. 11.
