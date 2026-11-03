import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Icon from "@/components/Icon";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { productos } from "@/data/productos";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: "Inicio — Repuestos para camiones y buses",
  description: "IKOMI PERÚ: importación y comercialización de repuestos de Korea y Japón. Conoce nuestro catálogo y asesoría.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className={styles.benefits} aria-label="Nuestro compromiso">
        <div className={`container ${styles.benefitsInner}`}>
          <div className={styles.benefit}><Icon name="shield" size={30} /><div><strong>Calidad y confianza</strong><span>Repuestos de Korea y Japón</span></div></div>
          <div className={styles.benefit}><Icon name="contact" size={30} /><div><strong>Asesoría personalizada</strong><span>Te ayudamos a elegir tu repuesto</span></div></div>
          <div className={styles.benefit}><Icon name="truck" size={30} /><div><strong>Envíos coordinados</strong><span>Consulta cobertura para tu destino</span></div></div>
        </div>
      </section>
      <section className="container section">
        <SectionTitle as="h2" title="Nuestros productos" eyebrow="Encuentra tu repuesto" description="Soluciones para que tu vehículo siga en movimiento." />
        <div className={styles.products}>{productos.slice(0, 3).map((producto) => <ProductCard key={producto.slug} producto={producto} />)}</div>
        <p className={styles.all}><Link href="/productos">Ver todos los productos →</Link></p>
      </section>
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div><h2>¿Buscas un repuesto en particular?</h2><p>Conversemos. Estamos listos para atenderte.</p></div>
          <Link href="/contacto">Contactar a un asesor →</Link>
        </div>
      </section>
    </>
  );
}
