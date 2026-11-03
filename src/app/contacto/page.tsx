import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import styles from "../pages.module.css";

export const metadata: Metadata = { title: "Contáctenos", description: "Encuentra IKOMI PERÚ en Avenida Nicolás Ayllón 3384, Ate, Lima. Consulta nuestros canales de contacto y ubicación." };

export default function ContactoPage() {
  return <section className="container section"><SectionTitle title="Contáctenos" description="Estamos para ayudarte a encontrar el repuesto adecuado." /><div className={styles.twoColumns}><address><h2>Visítanos</h2><p>Avenida Nicolás Ayllón 3384<br />Carretera Central, paradero Rayovac<br />Ate, Lima — Perú</p></address><div><h2>Conversemos</h2><p><a href="tel:+51985068416">+51 985 068 416</a></p><p><a href="mailto:ventas@ikomiperu.com">ventas@ikomiperu.com</a></p><p>La interfaz del formulario se incorpora en la siguiente etapa de componentes.</p></div></div></section>;
}
