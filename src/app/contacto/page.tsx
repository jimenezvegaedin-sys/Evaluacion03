import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import styles from "../pages.module.css";

export const metadata: Metadata = { title: "Contáctenos", description: "Encuentra IKOMI PERÚ en Avenida Nicolás Ayllón 3384, Ate, Lima. Consulta nuestros canales de contacto y ubicación." };

export default function ContactoPage() {
  return (
    <section className="container section">
      <SectionTitle title="Contáctenos" description="Completa el formulario de demostración o comunícate con nosotros por nuestros canales de atención." />
      <div className={styles.twoColumns}>
        <div>
          <iframe className={styles.map} title="Ubicación de IKOMI PERÚ en Avenida Nicolás Ayllón 3384, Ate" src="https://maps.google.com/maps?q=Avenida%20Nicolas%20Ayllon%203384%20Ate%20Lima&z=16&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <p className={styles.note}>Avenida Nicolás Ayllón 3384 · Ate, Lima.<br /><a href="https://www.google.com/maps/search/?api=1&query=Avenida+Nicolas+Ayllon+3384+Ate+Lima" target="_blank" rel="noreferrer">Abrir ubicación en Google Maps ↗</a></p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
