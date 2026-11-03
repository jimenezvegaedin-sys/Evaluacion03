"use client";

import { useState, type ReactNode } from "react";
import type { Categoria } from "@/data/productos";
import styles from "./ProductCatalog.module.css";

type Item = { slug: string; categoria: Categoria; card: ReactNode };
const categorias = ["Todas las categorías", "Embrague", "Transmisión", "Frenos"] as const;

export default function ProductCatalog({ items }: { items: Item[] }) {
  const [categoria, setCategoria] = useState<string>(categorias[0]);
  const visibles = items.filter((item) => categoria === categorias[0] || item.categoria === categoria);

  return (
    <>
      <div className={styles.filters} role="group" aria-label="Filtrar por categoría">
        {categorias.map((item) => <button type="button" key={item} aria-pressed={categoria === item} className={categoria === item ? styles.selected : ""} onClick={() => setCategoria(item)}>{item}</button>)}
      </div>
      <p className={styles.count} role="status">{visibles.length} productos · {categoria}</p>
      <div className={styles.grid}>{visibles.map((item) => <div key={item.slug}>{item.card}</div>)}</div>
    </>
  );
}
