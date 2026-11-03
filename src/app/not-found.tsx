import Link from "next/link";
import type { Metadata } from "next";
import styles from "./pages.module.css";

export const metadata: Metadata = { title: "Página no encontrada", description: "Esta página no existe. Vuelve al inicio o explora los repuestos del catálogo de IKOMI PERÚ." };

export default function NotFound() {
  return <section className={`container section ${styles.notFound}`}><strong aria-hidden="true">404</strong><h1>No encontramos esta página</h1><p>El enlace no existe o el repuesto no forma parte de nuestro catálogo.</p><Link href="/productos" className={styles.button}>Explorar productos →</Link><Link href="/">Volver al inicio</Link></section>;
}
