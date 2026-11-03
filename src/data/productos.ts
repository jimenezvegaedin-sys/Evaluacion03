export type Categoria = "Embrague" | "Transmisión" | "Frenos";

export type Producto = {
  slug: string;
  nombre: string;
  categoria: Categoria;
  imagen: string;
  alt: string;
  descripcion: string;
  caracteristicas: string[];
};

export const productos: Producto[] = [
  {
    slug: "disco-de-embrague",
    nombre: "Disco de embrague",
    categoria: "Embrague",
    imagen: "/images/disco-embrague.webp",
    alt: "Disco de embrague con revestimiento de fricción y centro estriado",
    descripcion: "Elemento de fricción del sistema de embrague que transmite el movimiento del motor hacia la caja de cambios.",
    caracteristicas: ["Familia: sistema de embrague", "Consultar aplicación según modelo y motor", "Imagen referencial del anexo académico"],
  },
  {
    slug: "pinon-y-corona",
    nombre: "Piñón y corona",
    categoria: "Transmisión",
    imagen: "/images/pinon-corona.webp",
    alt: "Conjuntos de piñón y corona de engranajes para transmisión",
    descripcion: "Conjunto de engranajes que participa en la transmisión del movimiento al diferencial del vehículo.",
    caracteristicas: ["Familia: transmisión y diferencial", "Verificar relación y aplicación con un asesor", "No se especifica compatibilidad sin identificar la unidad"],
  },
  {
    slug: "plato-de-embrague",
    nombre: "Plato de embrague",
    categoria: "Embrague",
    imagen: "/images/plato-embrague.webp",
    alt: "Plato de presión de embrague con resorte de diafragma",
    descripcion: "Plato de presión que mantiene el disco de embrague en contacto con el volante durante la transmisión de potencia.",
    caracteristicas: ["Familia: sistema de embrague", "Consultar el conjunto adecuado para cada vehículo", "Imagen referencial"],
  },
  {
    slug: "pastillas-de-freno",
    nombre: "Pastillas de freno",
    categoria: "Frenos",
    imagen: "/images/pastillas-freno.webp",
    alt: "Juego de pastillas de freno con material de fricción y cajas Hi-Q",
    descripcion: "Piezas de fricción del sistema de frenado. La selección debe considerar el modelo y el sistema de frenos de la unidad.",
    caracteristicas: ["Familia: frenos", "Revisar desgaste y aplicación con un especialista", "Consultar disponibilidad y marca"],
  },
  {
    slug: "eje-de-transmision",
    nombre: "Eje de transmisión",
    categoria: "Transmisión",
    imagen: "/images/eje-transmision.webp",
    alt: "Ejes estriados y engranajes de una caja de cambios",
    descripcion: "Componente estriado que transmite movimiento dentro del conjunto de la caja de cambios.",
    caracteristicas: ["Familia: caja y transmisión", "Consultar medidas y número de pieza", "Selección con asesoría técnica"],
  },
  {
    slug: "kit-de-embrague",
    nombre: "Kit de embrague",
    categoria: "Embrague",
    imagen: "/images/kit-embrague.webp",
    alt: "Conjunto de embrague con volante y empaques PHC Valeo",
    descripcion: "Conjunto de componentes del sistema de embrague para una revisión coordinada de sus piezas de desgaste.",
    caracteristicas: ["Familia: sistema de embrague", "El contenido depende de la aplicación", "Consultar piezas incluidas antes de elegir"],
  },
];

export function buscarProducto(slug: string) {
  return productos.find((producto) => producto.slug === slug);
}
