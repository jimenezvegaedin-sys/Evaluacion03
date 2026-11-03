import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { productos } from "@/data/productos";
import styles from "../pages.module.css";

export const metadata: Metadata = { title: "Nuestros productos", description: "Explora repuestos de embrague, transmisión y frenos en el catálogo académico de IKOMI PERÚ." };

export default function ProductosPage() {
  return <section className="container section"><SectionTitle title="Nuestros productos" description="Los mejores productos y precios. Encuentra la pieza que necesitas." /><div className={styles.grid}>{productos.map((producto) => <ProductCard key={producto.slug} producto={producto} />)}</div><p className={styles.note}>Catálogo académico con imágenes referenciales. Consulta la aplicación, disponibilidad y precio con un asesor antes de comprar.</p></section>;
}
