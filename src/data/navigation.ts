import type { IconName } from "@/components/Icon";

export const navigation: { href: string; label: string; icon: IconName }[] = [
  { href: "/", label: "Inicio", icon: "home" },
  { href: "/nosotros", label: "Nosotros", icon: "building" },
  { href: "/servicios", label: "Servicios", icon: "briefcase" },
  { href: "/productos", label: "Productos", icon: "wrench" },
  { href: "/marcas", label: "Marcas", icon: "shield" },
  { href: "/contacto", label: "Contáctenos", icon: "contact" },
];
