import Link from "next/link";
import Icon from "./Icon";
import { navigation } from "@/data/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.company}>
          <h2>IKOMI PERÚ</h2>
          <p>Empresa importadora y comercializadora de repuestos para vehículos. Calidad y asesoría para seguir en movimiento.</p>
          <a href="https://www.facebook.com/ikomiperu/" target="_blank" rel="noreferrer" className={styles.social}>f <span>Encuéntranos en Facebook ↗</span></a>
        </div>
        <div className={styles.contacts}>
          <div className={`${styles.contact} ${styles.address}`}>
            <Icon name="pin" size={27} /><h3>Dirección</h3>
            <p>Avenida Nicolás Ayllón 3384<br />Carretera Central — Paradero Rayovac<br />Lima — Ate</p>
          </div>
          <div className={styles.contact}>
            <Icon name="mail" size={26} /><h3>Correo</h3>
            <a href="mailto:ventas@ikomiperu.com">ventas@ikomiperu.com</a>
          </div>
          <div className={styles.contact}>
            <Icon name="phone" size={26} /><h3>Teléfono</h3>
            <a href="tel:+51985068416">+51 985 068 416</a>
          </div>
        </div>
        <div className={styles.links}>
          <h3>Links</h3>
          {navigation.map(({ href, label, icon }) => <Link href={href} key={href}><Icon name={icon} size={16} />{label}</Link>)}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}><p>© 2026 IKOMI PERÚ · Proyecto académico</p><a href="#arriba">Volver arriba ↑</a></div>
      </div>
    </footer>
  );
}
