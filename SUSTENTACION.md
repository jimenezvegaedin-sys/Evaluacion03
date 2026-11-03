# Guía de sustentación — cinco minutos

## Recorrido de exposición

| Tiempo | Demostración | Idea técnica que debes explicar |
| --- | --- | --- |
| 0:00–0:40 | Abrir Inicio y mostrar el proyecto en el editor | `ikomi-next-jimenez` usa App Router, TypeScript y CSS Modules. Las carpetas de `src/app` determinan URLs. |
| 0:40–1:25 | Abrir `layout.tsx` y navegar a Nosotros | Navbar y Footer se comparten desde el layout; `children` cambia según la página. `page.tsx` no es el layout. |
| 1:25–2:20 | Ir a Productos, filtrar y abrir una tarjeta | Los datos están tipados en `src/data/productos.ts`. El slug identifica la ficha. `await params` y `buscarProducto` resuelven el detalle; `notFound()` cubre uno inexistente. |
| 2:20–3:05 | Mostrar Navbar y una captura de Network | `usePathname` y el estado del menú requieren `"use client"`. Link puede precargar RSC y actualizar la página sin pedir otro documento HTML. `<a>` nativo recarga el documento. |
| 3:05–3:45 | Mostrar estilos, Image, fuente y Contacto | Variables centrales, módulos CSS, transición de tarjetas, next/image con tamaños y alt, Inter mediante next/font. El formulario solo valida localmente. |
| 3:45–4:15 | Mostrar build y dos correcciones | El build pasó. Se corrigieron la confirmación obsoleta del formulario y los contrastes insuficientes; explicar la causa, no memorizar solo el cambio. |
| 4:15–5:00 | Realizar el cambio pequeño solicitado | Localizar el archivo adecuado, hacer un cambio mínimo, verificarlo en navegador y explicar su alcance. |

Practicar con cronómetro. La sustentación real es sin asistencia; sustituir este guion por una explicación que puedas dar con naturalidad.

## Preguntas que debes poder responder

**¿Por qué Next.js para IKOMI?** Las páginas y fichas tienen contenido en el HTML inicial y metadata individual. Se prerenderizan al compilar; no hace falta un SSR por petición para contenido estable. Una SPA básica requiere JavaScript del navegador para producir su contenido principal.

**¿Qué es una prop?** Un dato que recibe un componente. ProductCard recibe un `Producto` completo y construye su imagen, título y enlace. No mantiene otra copia del catálogo en estado.

**¿Qué hace `notFound()`?** Interrumpe el renderizado de la ficha inválida y muestra la interfaz `not-found.tsx`; no crea un producto vacío ni redirige al inicio.

**¿Por qué no marcar todo con `"use client"`?** Solo los componentes con hooks/eventos necesitan hidratar su lógica en el navegador. El contenido estático puede renderizarse en servidor. Esto reduce el código interactivo enviado al cliente.

**¿Cómo llegan las tarjetas al filtro?** La página servidor crea los nodos ProductCard y los pasa como slots en `items`. ProductCatalog filtra esos nodos según su categoría, sin importar ProductCard desde el módulo cliente.

**¿Por qué `fill` no provoca saltos de tamaño?** El contenedor de la imagen tiene posición relativa y `aspect-ratio`, que reserva el espacio; `sizes` orienta la selección de resolución.

**¿Se envían correos desde el formulario?** No. La evaluación pide solo interfaz. El evento de envío se cancela y aparece un aviso honesto de revisión local.

**¿Qué comprueba el build?** Compila, comprueba tipos y genera las páginas. No comprueba por sí solo que un menú abra, que los colores tengan contraste o que un estado no quede obsoleto. ESLint se ejecuta por separado.

## Práctica 1: crear `/blog`

Crear `src/app/blog/page.tsx`:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Consejos para conocer y mantener los sistemas de tu vehículo.",
};

export default function BlogPage() {
  return (
    <section className="container section">
      <h1>Blog de IKOMI PERÚ</h1>
      <p>Consejos sobre repuestos y mantenimiento.</p>
    </section>
  );
}
```

Abrir `/blog`; debe heredar Navbar y Footer. No hace falta editar una configuración de rutas. Si se solicita un enlace en el menú, añadirlo al arreglo `src/data/navigation.ts` con uno de los iconos permitidos.

## Práctica 2: cambiar el color del tema

Localizar `--blue-light` en `src/app/globals.css`. Cambiar un solo valor y observar la cabecera. Explicar que los componentes consumen esa variable y que debe mantenerse el contraste del texto blanco/amarillo. No cambiar seis archivos por separado.

## Práctica 3: agregar una prop a ProductCard

Añadir una prop opcional, por ejemplo `destacado?: boolean`, con valor por defecto `false`. Mostrar un texto «Destacado» cuando sea verdadera y pasarla solo desde Inicio. Explicar que el tipo de producto no necesita cambiar si el dato corresponde a presentación y no al catálogo.

## Revisión personal antes de entregar

- Completar la reflexión de máximo 200 palabras en `BITACORA_IA.md`.
- Escribir las cinco conclusiones en `CONCLUSIONES.md`.
- Poder explicar las decisiones con palabras propias y realizar una de las prácticas sin consultar el guion.
- Comprobar `npm install`, `npm run dev`, `npm run lint` y `npm run build` en el equipo de exposición.
