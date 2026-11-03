import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image src="/images/hero-repuestos.webp" alt="Selección de repuestos: amortiguadores, discos, filtros y componentes de motor" fill sizes="100vw" preload />
      </div>
      <div className={styles.shade} />
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>REPUESTOS DE KOREA Y JAPÓN</p>
          <h1>REPUESTOS EN GENERAL<br /><span>para camiones de todas las marcas.</span></h1>
          <p className={styles.description}>Somos una empresa importadora de repuestos.<br />La pieza que necesitas, el respaldo que mereces.</p>
          <div className={styles.actions}>
            <Link href="/productos" className={styles.primary}>Explorar productos <span aria-hidden="true">→</span></Link>
            <Link href="/contacto" className={styles.secondary}>Contáctenos</Link>
          </div>
        </div>
      </div>
      <div className={styles.caption}>IKOMI PERÚ <span>·</span> CALIDAD QUE NOS MUEVE</div>
    </section>
  );
}
