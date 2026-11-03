# Link frente a enlace nativo

## Condiciones y método

- Aplicación compilada con Next.js 16.4.4 y servida mediante `next start` en `http://127.0.0.1:3100`.
- Chromium de Playwright; contexto nuevo para cada variante, sin extensiones ni credenciales.
- Chrome DevTools auténtico conectado al target por CDP; pestaña Network y filtro `productos`.
- Navegación Inicio → Productos con el enlace de la Navbar.
- Capturas directas `network-link.png` y `network-anchor.png`, sin retocar ni reemplazar filas de Network.
- Solicitudes verificadas adicionalmente mediante `Network.requestWillBeSent`, contando URL, método y tipo, sin inspeccionar cookies, cabeceras ni cuerpos.

## Cambio temporal de código

Versión normal:

```tsx
<Link href={href} className={clase}>
  <Icon name={icon} size={19} />{label}
</Link>
```

Solo para el enlace `/productos`, se sustituyó temporalmente por:

```tsx
<a href={href} className={clase}>
  <Icon name={icon} size={19} />{label}
</a>
```

Se compiló cada variante antes de capturarla. Al terminar se restauró Link; el código entregado no contiene esa sustitución. `clase` abrevia únicamente los atributos de presentación en estos fragmentos; en la ejecución se conservaron las clases y el cierre del menú originales.

## Resultados reales

| Observación de `/productos` | Link | `<a href>` |
| --- | --- | --- |
| Solicitudes `Document` | 0 | 1 |
| Solicitudes `Fetch` RSC registradas | 2 | 2 además del documento |
| Variable de prueba en `window` conservada | Sí | No |
| Navegación completa de documento | No | Sí |

Con Link, Next puede anticipar la carga al entrar el enlace en pantalla y recuperar segmentos RSC (`?_rsc=...`). Al hacer clic actualiza el contenido dentro del documento actual y preserva el layout; no debe interpretarse como «no hay solicitudes de red».

Con `<a>`, el navegador pidió un documento HTML nuevo (`Type: document`) y reinició el contexto JavaScript. También hay prefetch en este caso porque otros enlaces a Productos, como el del Hero y el Footer, siguieron utilizando Link. Ese prefetch no convierte el enlace nativo de la Navbar en navegación cliente.

La tabla visible de DevTools puede mostrar además solicitudes de detalles de producto por prefetch. El conteo de arriba incluye exclusivamente el pathname exacto `/productos`, no los seis slugs. Las duraciones de estas ejecuciones locales no constituyen un benchmark de rendimiento.

## Repetir

Con el código normal y un build reciente:

```sh
npm run build
npm run start
```

Abrir Inicio en Chrome, abrir DevTools → Network, activar la grabación, filtrar por `productos` y navegar con el enlace de la Navbar. Para la variante nativa, hacer la sustitución temporal indicada, detener el servidor, compilar, volver a iniciarlo y repetir con un contexto nuevo de navegador. Después restaurar Link y volver a compilar.
