import styles from "./SectionTitle.module.css";

type Props = { title: string; description?: string; eyebrow?: string };

export default function SectionTitle({ title, description, eyebrow }: Props) {
  return (
    <header className={styles.header}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h1>{title}</h1>
      <span className={styles.line} aria-hidden="true" />
      {description && <p className={styles.description}>{description}</p>}
    </header>
  );
}
