import type { CSSProperties } from "react";

export type IconName = "home" | "building" | "briefcase" | "wrench" | "shield" | "contact" | "pin" | "mail" | "phone" | "truck" | "check" | "menu" | "close";
const paths: Record<IconName, React.ReactNode> = {
  home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v12h5v-7h4v7h5V9" /></>,
  building: <><path d="M4 21V3h10v18M14 9h6v12M2 21h20" /><path d="M7 7h4M7 11h4M7 15h4M17 13h1M17 17h1" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V3h8v4M3 12l9 4 9-4M10 12h4" /></>,
  wrench: <path d="M21 3a6 6 0 0 1-7.6 7.6l-9 9a2.1 2.1 0 0 1-3-3l9-9A6 6 0 0 1 18 0l-4 4 4 4 4-4Z" />,
  shield: <><path d="m12 3 9 4v5c0 5-5 8-9 10-4-2-9-5-9-10V7Z" /><path d="m8 12 3 3 5-6" /></>,
  contact: <><rect x="4" y="3" width="17" height="18" rx="2" /><circle cx="12" cy="9" r="2" /><path d="M8 17c0-4 8-4 8 0M2 7h4M2 12h4M2 17h4" /></>,
  pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 5 10 8L22 5" /></>,
  phone: <path d="M6 3 3 5c-2 7 9 18 16 16l2-3-5-4-2 3c-3-1-6-4-7-7l3-2-4-5Z" />,
  truck: <><path d="M1 4h13v13H1ZM14 9h5l4 5v3h-9" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="18" r="3" /></>,
  check: <><rect x="2" y="3" width="20" height="18" rx="2" /><path d="m5 9 2 2 3-4m-5 9 2 2 3-4M13 8h5M13 15h5" /></>,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="m5 5 14 14M5 19 19 5" />,
};

export default function Icon({ name, size = 22, style }: { name: IconName; size?: number; style?: CSSProperties }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" style={style}>{paths[name]}</svg>;
}
