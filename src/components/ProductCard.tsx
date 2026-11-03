import Image from "next/image";
import Link from "next/link";
import type { Producto } from "@/data/productos";
import styles from "./ProductCard.module.css";

export default function ProductCard({ producto }: { producto: Producto }) {
  return (
    <article className={styles.card}>
      <Link href={`/productos/${producto.slug}`} className={styles.link}>
        <div className={styles.image}>
          <Image src={producto.imagen} alt={producto.alt} fill sizes="(max-width: 600px) 90vw, (max-width: 950px) 44vw, 350px" />
        </div>
        <div className={styles.body}>
          <p className={styles.category}>{producto.categoria}</p>
          <h2>{producto.nombre}</h2>
          <span className={styles.more}>Ver detalle <span aria-hidden="true">→</span></span>
        </div>
      </Link>
    </article>
  );
}
