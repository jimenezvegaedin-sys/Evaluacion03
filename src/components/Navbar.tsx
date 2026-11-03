"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import Icon from "./Icon";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header} id="arriba">
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="IKOMI PERÚ — Inicio" onClick={() => setOpen(false)}>
          <Image src="/images/logo-ikomi.webp" alt="IKOMI PERÚ — Repuestos de Korea y Japón — IKM" width={262} height={50} preload />
        </Link>
        <button type="button" className={styles.toggle} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-controls="navegacion-principal" aria-expanded={open} onClick={() => setOpen(!open)}>
          <Icon name={open ? "close" : "menu"} size={27} />
        </button>
        <nav id="navegacion-principal" aria-label="Navegación principal" className={`${styles.nav} ${open ? styles.open : ""}`} onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}>
          {navigation.map(({ href, label, icon }) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
            return (
              <Link key={href} href={href} className={`${styles.link} ${active ? styles.active : ""}`} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>
                <Icon name={icon} size={19} />{label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
