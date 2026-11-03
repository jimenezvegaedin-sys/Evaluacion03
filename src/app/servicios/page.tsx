import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import styles from "../pages.module.css";

export const metadata: Metadata = { title: "Servicios", description: "Ventas, asesoría personalizada, delivery y productos de calidad: conoce los servicios de IKOMI PERÚ." };
const servicios = [
  { nombre: "Ventas", descripcion: "Venta de repuestos de motor, cajas, transmisiones, piñones y coronas de marcas de Korea y Japón. Te ayudamos a encontrar lo que tu unidad necesita." },
  { nombre: "Asesoría", descripcion: "Atención personalizada para elegir el repuesto adecuado. Cuéntanos el modelo, motor y número de pieza de tu vehículo." },
  { nombre: "Delivery", descripcion: "Coordina la entrega de tus repuestos sin salir de casa. Consulta cobertura, plazos y condiciones de envío con nuestro equipo." },
  { nombre: "Productos", descripcion: "Una selección de marcas especializadas y repuestos para diferentes sistemas del vehículo, con orientación antes y después de la compra." },
];

export default function ServiciosPage() {
  return <section className={styles.dark}><div className="container"><SectionTitle title="Servicios" description="Estamos listos para atenderte." /><div className={styles.twoColumns}>{servicios.map((servicio) => <article className={styles.service} key={servicio.nombre}><h2>{servicio.nombre}</h2><p>{servicio.descripcion}</p></article>)}</div></div></section>;
}
