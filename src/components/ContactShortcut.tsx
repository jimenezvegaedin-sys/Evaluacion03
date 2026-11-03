import Icon from "./Icon";
import styles from "./ContactShortcut.module.css";

export default function ContactShortcut() {
  return <a className={styles.shortcut} href="https://wa.me/51985068416" target="_blank" rel="noreferrer" aria-label="Consultar a IKOMI PERÚ por WhatsApp (abre en otra pestaña)"><Icon name="phone" size={26} /></a>;
}
