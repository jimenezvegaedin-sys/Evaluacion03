# IKOMI PERÚ — Evaluación 03

Aplicación **ikomi-next-jimenez**, Next.js App Router, TypeScript y CSS Modules. Desarrollo progresivo según `EC03-S12-JVENTURA-2026-02.docx` (original solo local).

## Ejecutar

Requisito: Node.js ≥20.9 (se utiliza 20.20.2) y npm.

```sh
npm install
npm run dev
# http://localhost:3000
```

Producción:

```sh
npm run lint
npm run build
npm run start
```

`npm run typecheck` comprueba tipos sin emitir archivos. `npm ci` reproduce el lockfile en CI.

## Documentación

- [Requisitos con páginas de origen](REQUISITOS.md)
- [Decisiones y explicaciones técnicas](DECISIONES.md)
- [Estado de evidencias](evidencias/README.md)

## Rutas

`/`, `/nosotros`, `/servicios`, `/productos`, `/marcas`, `/contacto`, `/productos/[slug]` y 404 personalizada. El catálogo contiene seis productos; un slug inválido utiliza `notFound()`.

## Árbol de componentes

`[S]` Server Component; `[C]` Client Component; `[compartido]` componente sin estado que también se incorpora al bundle cliente cuando se importa desde Navbar.

```text
RootLayout [S] — idioma, fuente, metadata base
├── Navbar [C] — usePathname, menú móvil
│   └── Icon [compartido]
├── main → página actual [S]
│   ├── Inicio
│   │   ├── Hero [S]
│   │   ├── SectionTitle [S] — as="h2"
│   │   └── ProductCard [S] × 3
│   ├── Nosotros / Servicios / Marcas
│   │   └── SectionTitle [S], Image e Icon según contenido
│   ├── Productos
│   │   ├── SectionTitle [S]
│   │   └── ProductCatalog [C] — estado de categoría
│   │       └── ProductCard [S] × 6, recibidas como slots desde la página
│   ├── Detalle [slug]
│   │   └── Image, datos tipados, generateMetadata y notFound
│   ├── Contacto
│   │   ├── SectionTitle [S]
│   │   ├── iframe del mapa
│   │   └── ContactForm [C] — solo interfaz y validación local
│   └── NotFound [S]
├── Footer [S]
└── ContactShortcut [S]
```

Solo Navbar, ProductCatalog y ContactForm necesitan estado del navegador. Pasar contenido servidor como prop no equivale a importar un Server Component desde un archivo cliente.

## Verificación

```sh
npm run lint
npm run build
npm run test:routes
npx playwright install chromium
npm run test:e2e
```

Las pruebas levantan y cierran su propio servidor de producción en `127.0.0.1:3100`; ese puerto debe estar libre. Las capturas responsive se generan directamente en `evidencias/` mediante Chromium. Se comprueban también filtros, menú, enlace activo, imágenes, validación del formulario y contraste automatizado; este último no sustituye una revisión manual de accesibilidad.

## Recursos

Las fotografías y logotipos proceden del anexo académico. Origen y transformación: [public/images/FUENTES.md](public/images/FUENTES.md). El sitio se aproxima al anexo, no al rediseño posterior de la web oficial. Las imágenes extraídas son recursos del sitio, no evidencias de ejecución.

El formulario es únicamente una demostración: no guarda ni envía datos. El mapa y los enlaces de WhatsApp/Facebook abren servicios externos reales.
