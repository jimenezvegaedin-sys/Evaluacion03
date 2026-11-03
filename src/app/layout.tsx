import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: { default: "IKOMI PERÚ | Repuestos de Korea y Japón", template: "%s | IKOMI PERÚ" },
  description: "Repuestos para camiones y buses. Proyecto académico de IKOMI PERÚ desarrollado con Next.js App Router.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={inter.variable}>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <main id="contenido">{children}</main>
      </body>
    </html>
  );
}
