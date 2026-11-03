import styles from "./SectionTitle.module.css";

type Props = { title: string; description?: string; eyebrow?: string; as?: "h1" | "h2" };

export default function SectionTitle({ title, description, eyebrow, as: Heading = "h1" }: Props) {
  return (
    <header className={styles.header}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <Heading className={styles.title}>{title}</Heading>
      <span className={styles.line} aria-hidden="true" />
      {description && <p className={styles.description}>{description}</p>}
    </header>
  );
}
