# Evidencias auténticas

## Capturas responsive

Capturadas directamente con Playwright/Chromium contra `next start` en `127.0.0.1:3100`, viewport de altura 900 px, escala 1 y página completa. Comando: `npm run test:e2e` después de `npm run build`.

| Página | 375 px | 768 px | 1280 px |
| --- | --- | --- | --- |
| Inicio | `inicio-375.png` | `inicio-768.png` | `inicio-1280.png` |
| Productos | `productos-375.png` | `productos-768.png` | `productos-1280.png` |

Las imágenes no están retocadas. Las fotos de `public/images/` son recursos del anexo, no evidencias de esta aplicación.

## Problemas encontrados y corregidos

- `formulario-estado-inicial.json`: estado obsoleto del formulario, registrado al fallar la prueba antes de corregirlo.
- `accesibilidad-inicial.json`: resultados reales de axe-core antes de ajustar la paleta.

Después de las correcciones: siete pruebas E2E aprobadas, incluidas las regresiones del formulario y contraste. Las seis páginas se comprobaron en los tres anchos, sin desbordamiento horizontal, imágenes rotas ni excepciones de JavaScript.

## Evidencias por completar

- Captura gráfica de la salida real de `npm run build`.
- Experimento y captura de la pestaña Network.
- Captura del historial de commits en GitHub.

Los logs o resultados automatizados no sustituyen una captura de DevTools ni una captura gráfica de terminal.
