import type { Product, ProductCategoryInfo } from "../types/product";
import productDrillBits from "../assets/images/product-drill-bits.jpg";
import productNachi from "../assets/images/product-nachi.jpg";
import productHandTap from "../assets/images/product-hand-tap.jpg";
import productInsertWidia from "../assets/images/product-insert-widia.jpg";
import productOtherTools from "../assets/images/product-other-tools.jpg";

export const productCategories: ProductCategoryInfo[] = [
  {
    id: "mata-bor",
    name: "Mata Bor",
    description:
      "Pilihan mata bor material HSS, Cobalt, hingga NACHI untuk keperluan pengeboran presisi berbagai jenis material logam.",
  },
  {
    id: "hand-tap",
    name: "Hand Tap",
    description:
      "Perkakas pembuat ulir dalam untuk pemotongan ulir manual maupun semi-otomatis dengan presisi ulir metrik dan standar bengkel.",
  },
  {
    id: "insert-widia",
    name: "Insert Widia",
    description:
      "Mata bubut dan milling insert berbahan tungsten carbide tahan aus untuk pengerjaan bubut dan frais kecepatan tinggi.",
  },
  {
    id: "aksesoris-machining",
    name: "Aksesoris Machining",
    description:
      "Peralatan pencekam dan alat bantu workshop bubut seperti drill chuck dan tap wrench untuk efisiensi pekerjaan permesinan.",
  },
];

export const products: Product[] = [
  // Mata Bor
  {
    id: "hss-twist-drill",
    name: "HSS Twist Drill Bit",
    brand: "Tepat",
    category: "Mata Bor",
    description:
      "Mata bor twist berbahan High Speed Steel untuk keperluan pengeboran umum pada besi lunak, aluminium, dan material workshop.",
    image: productDrillBits,
    alt: "Mata bor HSS twist drill bit untuk pekerjaan workshop logam",
    isDemo: true,
  },
  {
    id: "cobalt-drill-bit",
    name: "Cobalt Drill Bit (HSS-Co)",
    brand: "Tepat",
    category: "Mata Bor",
    description:
      "Mata bor dengan kandungan cobalt tinggi untuk ketahanan panas saat mengebor material stainless steel dan baja keras.",
    image: productDrillBits,
    alt: "Mata bor Cobalt untuk stainless steel dan baja keras",
    isDemo: true,
  },
  {
    id: "nachi-drill-bit",
    name: "NACHI Drill Bit",
    brand: "NACHI",
    category: "Mata Bor",
    description:
      "Mata bor presisi standar industri Jepang dengan ketahanan ulir potong untuk toleransi pemesinan ketat.",
    image: productNachi,
    alt: "Mata bor merek NACHI untuk pengerjaan presisi",
    isDemo: true,
  },

  // Hand Tap
  {
    id: "metric-hand-tap",
    name: "Metric Hand Tap",
    brand: "Tepat",
    category: "Hand Tap",
    description:
      "Hand tap ulir metrik standar untuk pembuatan ulir baru maupun perbaikan ulir baut pada komponen mesin bubut.",
    image: productHandTap,
    alt: "Hand tap ulir metrik untuk pengerjaan ulir baut",
    isDemo: true,
  },
  {
    id: "spiral-point-tap",
    name: "Spiral Point Tap",
    brand: "Tepat",
    category: "Hand Tap",
    description:
      "Tap dengan alur spiral point yang mendorong serpihan tatal ke depan, ideal untuk pengerjaan lubang tembus (through hole).",
    image: productHandTap,
    alt: "Spiral point tap untuk pengerjaan ulir lubang tembus",
    isDemo: true,
  },
  {
    id: "hand-tap-set",
    name: "Hand Tap Set (Taper, Plug, Bottoming)",
    brand: "Tepat",
    category: "Hand Tap",
    description:
      "Satu set hand tap berisikan tingkatan tap awal (taper), perantara (plug), dan penyelesai (bottoming) untuk ulir sempurna.",
    image: productHandTap,
    alt: "Satu set hand tap berisi taper, plug, dan bottoming",
    isDemo: true,
  },

  // Insert Widia
  {
    id: "carbide-turning-insert",
    name: "Carbide Turning Insert",
    brand: "Tepat",
    category: "Insert Widia",
    description:
      "Mata bubut insert tungsten carbide untuk proses bubut luar dan muka dengan geometri pemecah tatal yang stabil.",
    image: productInsertWidia,
    alt: "Insert widia carbide untuk proses turning bubut logam",
    isDemo: true,
  },
  {
    id: "carbide-milling-insert",
    name: "Carbide Milling Insert",
    brand: "Tepat",
    category: "Insert Widia",
    description:
      "Insert carbide untuk cutter frais mesin milling, menghasilkan permukaan akhir halus pada material baja maupun cor.",
    image: productInsertWidia,
    alt: "Carbide insert untuk proses milling frais presisi",
    isDemo: true,
  },

  // Aksesoris Machining
  {
    id: "tap-wrench",
    name: "Adjustable Tap Wrench",
    brand: "Tepat",
    category: "Aksesoris Machining",
    description:
      "Gagang tap dapat diatur (adjustable tap wrench) dengan rahang baja keras untuk memegang gagang tap secara kokoh saat mengulir manual.",
    image: productOtherTools,
    alt: "Gagang tap adjustable tap wrench penjepit hand tap",
    isDemo: true,
  },
  {
    id: "drill-chuck",
    name: "Keyless / Keyed Drill Chuck",
    brand: "Tepat",
    category: "Aksesoris Machining",
    description:
      "Kepala bor pencekam mata bor dengan presisi runout rendah untuk dipasang pada kepala lepas mesin bubut atau bor duduk.",
    image: productOtherTools,
    alt: "Drill chuck kepala bor pencekam mata bor untuk mesin bubut",
    isDemo: true,
  },
];

export const featuredProducts: Product[] = [
  "hss-twist-drill",
  "nachi-drill-bit",
  "metric-hand-tap",
  "spiral-point-tap",
  "carbide-turning-insert",
  "carbide-milling-insert",
  "tap-wrench",
  "drill-chuck",
]
  .map((id) => products.find((product) => product.id === id))
  .filter((product): product is Product => Boolean(product));

