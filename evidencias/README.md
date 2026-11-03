# Evidencias auténticas

## Capturas responsive

Capturadas directamente con Playwright/Chromium contra `next start` en `127.0.0.1:3100`, viewport de altura 900 px, escala 1 y página completa.

| Página | 375 px | 768 px | 1280 px |
| --- | --- | --- | --- |
| Inicio | `inicio-375.png` | `inicio-768.png` | `inicio-1280.png` |
| Productos | `productos-375.png` | `productos-768.png` | `productos-1280.png` |

Las imágenes no están retocadas. Las fotos de `public/images/` son recursos del anexo, no evidencias de esta aplicación.

Capturas complementarias a 1280 px: `nosotros-1280.png`, `servicios-1280.png`, `marcas-1280.png` y `contacto-1280.png`. La captura de Contacto se realizó esperando a que cargara el mapa externo.

## Build

`build-terminal.png`: captura de una terminal web xterm.js que ejecutó realmente `npm run build` y recibió en directo stdout/stderr del proceso. Terminó con código de salida 0. No es una captura de VS Code y no contiene una salida prefabricada.

Para adjuntar además una captura desde VS Code: abrir la carpeta, abrir Terminal → Nueva terminal, ejecutar `npm run build`, esperar a la tabla de rutas y capturar con Recortes de Windows. Deben verse el comando y el resultado completo; guardar como `evidencias/build-vscode.png` y revisar que no haya otras pestañas o datos privados visibles.

## Network

- `network-link.png`: DevTools real, solicitudes fetch/RSC, sin documento nuevo de Productos.
- `network-anchor.png`: DevTools real, solicitud `document` al usar temporalmente `<a href>`.
- [Método, fragmentos y resultados](EXPERIMENTO_NETWORK.md).

## Historial de GitHub

`github-commits.png`: captura directa de https://github.com/jimenezvegaedin-sys/Evaluacion03/commits/main/ en Chromium. Muestra seis commits progresivos, hasta `26a8e30`, publicados en ese momento. El commit de cierre de este informe se consulta en el historial en línea.

## Comprobaciones

Siete pruebas E2E aprobadas, incluidas las regresiones del formulario y contraste. Las seis páginas se comprobaron en los tres anchos, sin desbordamiento horizontal, imágenes rotas ni excepciones de JavaScript. Los dos errores y sus correcciones se explican en `BITACORA_IA.md`.
