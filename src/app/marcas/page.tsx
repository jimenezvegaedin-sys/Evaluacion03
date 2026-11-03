import type { Metadata } from "next";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import styles from "../pages.module.css";

export const metadata: Metadata = { title: "Nuestras marcas", description: "Conoce las marcas de referencia de IKOMI PERÚ: Sangsin Brake, Hansang, Mando, TCIC, PHC Valeo y Yulim." };
const marcas = [
  { id: "sangsin", nombre: "Sangsin Brake", descripcion: "Marca coreana especializada en piezas de fricción para sistemas de frenos. Una de las referencias de calidad mostradas en el catálogo de IKOMI." },
  { id: "hansang", nombre: "Hansang", descripcion: "Repuestos para transmisión y caja: piñones, coronas y componentes para el movimiento de tu vehículo. Consulta la aplicación específica con un asesor." },
  { id: "mando", nombre: "Mando", descripcion: "Marca del sector automotriz con soluciones para distintos sistemas del vehículo. Tecnología y experiencia al servicio de la movilidad." },
  { id: "tcic", nombre: "TCIC", descripcion: "Componentes hidráulicos para freno y embrague. Encuentra orientación para identificar la pieza que corresponde a tu unidad." },
  { id: "valeo", nombre: "PHC Valeo", descripcion: "Especialista en tecnología de embrague y soluciones de transmisión. Una marca presente en las referencias de productos del laboratorio." },
  { id: "yulim", nombre: "Yulim", descripcion: "Piezas para sistemas de suspensión y dirección. Consulta las opciones y compatibilidad según el modelo de tu vehículo." },
];

export default function MarcasPage() {
  return <section className={styles.dark}><div className="container"><SectionTitle title="Marcas" description="Trabajamos con marcas reconocidas, especializadas en la fabricación de repuestos para vehículos." /><div className={styles.grid}>{marcas.map((marca) => <article className={styles.panel} key={marca.id}><div className={styles.brandLogo}><Image src={`/images/marca-${marca.id}.webp`} alt={`Logotipo de ${marca.nombre}`} fill sizes="170px" /></div><h2>{marca.nombre}</h2><p className={styles.brandDescription}>{marca.descripcion}</p></article>)}</div></div></section>;
}
