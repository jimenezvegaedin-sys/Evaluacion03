import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import Icon, { type IconName } from "@/components/Icon";
import styles from "../pages.module.css";

export const metadata: Metadata = { title: "Servicios", description: "Ventas, asesoría personalizada, delivery y productos de calidad: conoce los servicios de IKOMI PERÚ." };
const servicios: { nombre: string; icon: IconName; descripcion: string }[] = [
  { nombre: "Ventas", icon: "briefcase", descripcion: "Venta de repuestos de motor, cajas, transmisiones, piñones y coronas de marcas de Korea y Japón. Te ayudamos a encontrar lo que tu unidad necesita." },
  { nombre: "Asesoría", icon: "check", descripcion: "Atención personalizada para elegir el repuesto adecuado. Cuéntanos el modelo, motor y número de pieza de tu vehículo." },
  { nombre: "Delivery", icon: "truck", descripcion: "Coordina la entrega de tus repuestos sin salir de casa. Consulta cobertura, plazos y condiciones de envío con nuestro equipo." },
  { nombre: "Productos", icon: "wrench", descripcion: "Una selección de marcas especializadas y repuestos para diferentes sistemas del vehículo, con orientación antes y después de la compra." },
];

export default function ServiciosPage() {
  return (
    <section className={`${styles.dark} ${styles.angled}`}>
      <div className="container">
        <SectionTitle title="Servicios" description="Estamos listos para atenderte." />
        <div className={styles.twoColumns}>
          {servicios.map((servicio) => (
            <article className={styles.service} key={servicio.nombre}>
              <Icon name={servicio.icon} size={35} />
              <div><h2>{servicio.nombre}</h2><p>{servicio.descripcion}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
