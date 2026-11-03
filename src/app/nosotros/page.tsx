import type { Metadata } from "next";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import styles from "../pages.module.css";

export const metadata: Metadata = { title: "Nosotros", description: "Conoce al equipo, almacén, tienda e infraestructura de IKOMI PERÚ, importadora de repuestos de Korea y Japón." };
const espacios = [
  { nombre: "Equipo", imagen: "equipo", alt: "Equipo de IKOMI PERÚ frente al local de repuestos" },
  { nombre: "Almacén", imagen: "almacen", alt: "Pasillo de almacén con estanterías de repuestos" },
  { nombre: "Tienda", imagen: "tienda", alt: "Fachada de la tienda IKOMI PERÚ" },
  { nombre: "Empresa", imagen: "empresa", alt: "Edificio de la empresa IKOMI PERÚ" },
];

export default function NosotrosPage() {
  return <section className={styles.light}><div className="container section"><SectionTitle title="Nosotros" description="Un equipo comprometido con mantener tu vehículo en movimiento." /><div className={styles.grid}>{espacios.map((espacio) => <article key={espacio.nombre} className={styles.panel}><h2 className={styles.photoTitle}>{espacio.nombre}</h2><div className={styles.photo}><Image src={`/images/${espacio.imagen}.webp`} alt={espacio.alt} fill sizes="(max-width: 600px) 85vw, (max-width: 950px) 40vw, 310px" /></div></article>)}</div></div></section>;
}
