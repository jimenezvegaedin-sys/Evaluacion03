import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buscarProducto, productos } from "@/data/productos";
import styles from "../../pages.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return productos.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const producto = buscarProducto(slug);
  if (!producto) return { title: "Producto no encontrado", description: "Este repuesto no existe en nuestro catálogo académico." };
  return { title: producto.nombre, description: producto.descripcion };
}

export default async function ProductoPage({ params }: Props) {
  const { slug } = await params;
  const producto = buscarProducto(slug);
  if (!producto) notFound();

  return (
    <section className="container section">
      <Link href="/productos" className={styles.back}>← Volver a todos los productos</Link>
      <div className={styles.twoColumns}>
        <div className={styles.detailImage}><Image src={producto.imagen} alt={producto.alt} fill sizes="(max-width: 600px) 90vw, 540px" preload /></div>
        <div className={styles.detail}>
          <p className={styles.category}>{producto.categoria}</p>
          <h1>{producto.nombre}</h1>
          <p>{producto.descripcion}</p>
          <h2>Información del producto</h2>
          <ul>{producto.caracteristicas.map((item) => <li key={item}>{item}</li>)}</ul>
          <Link href="/contacto" className={styles.button}>Consultar este repuesto →</Link>
          <p className={styles.note}>Ficha demostrativa para la evaluación. No constituye una oferta comercial.</p>
        </div>
      </div>
    </section>
  );
}
