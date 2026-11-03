import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio — Repuestos para camiones y buses",
  description: "IKOMI PERÚ: importación y comercialización de repuestos de Korea y Japón. Conoce nuestro catálogo y asesoría.",
};

export default function HomePage() {
  return <section className="container section"><h1>IKOMI PERÚ</h1><p>Repuestos de Korea y Japón para camiones y buses.</p><p>Base del proyecto configurada. El catálogo y las páginas se implementan en la siguiente etapa.</p></section>;
}
