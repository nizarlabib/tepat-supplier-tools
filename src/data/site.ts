import aboutMachinist from "../assets/images/about-machinist.jpg";
import brandStepDrills from "../assets/images/brand-step-drills.jpg";
import heroDrill from "../assets/images/hero-drill.jpg";
import productDrillBits from "../assets/images/product-drill-bits.jpg";
import productHandTap from "../assets/images/product-hand-tap.jpg";
import productInsertWidia from "../assets/images/product-insert-widia.jpg";
import productNachi from "../assets/images/product-nachi.jpg";
import productOtherTools from "../assets/images/product-other-tools.jpg";
import whyLathe from "../assets/images/why-lathe.jpg";

export interface NavItem {
  label: string;
  href: string;
}

export interface ProductCategory {
  id: string;
  index: string;
  name: string;
  englishName: string;
  description: string;
  applications: string[];
  image: string;
  imageAlt: string;
  imagePosition?: string;
}

export interface Advantage {
  index: string;
  title: string;
  description: string;
}

export interface BrandSpec {
  label: string;
  value: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export const site = {
  name: "Tepat Supplier Tools",
  shortName: "Tepat",
  tagline: "Perlengkapan bengkel bubut & machining",
  description:
    "Supplier perlengkapan bengkel bubut, perkakas machining, dan peralatan potong industri.",
  whatsappNumber: "6281234567890",
  whatsappDisplay: "+62 812-3456-7890",
  whatsappMessage:
    "Halo Tepat Supplier Tools, saya ingin bertanya tentang ketersediaan produk.",
  email: "halo@tepat-supplier.co.id",
  phone: "+62 812-3456-7890",
  address: "Jl. Industri Raya No. 00, Jakarta, Indonesia",
  hours: "Senin–Sabtu, 08.00–17.00",
} as const;

export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Produk", href: "#produk" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Kontak", href: "#kontak" },
];

export const hero = {
  eyebrow: "Perlengkapan machining & bengkel bubut",
  title: "Perlengkapan Bengkel Bubut & Machining Berkualitas",
  description:
    "Solusi terpercaya untuk kebutuhan peralatan machining dan perlengkapan bengkel bubut Anda.",
  primaryCta: "Jelajahi Produk",
  secondaryCta: "Hubungi Kami",
  image: heroDrill,
  imageAlt:
    "Mata bor mesin CNC sedang mengebor logam dengan aliran cairan pendingin",
  proof: ["Pemilihan produk", "Konsultasi kebutuhan", "Respons via WhatsApp"],
};

export const about = {
  index: "02",
  eyebrow: "Tentang Kami",
  title: "Tentang Tepat Supplier Tools",
  paragraphs: [
    "Tepat Supplier Tools menyediakan berbagai kebutuhan perlengkapan bengkel bubut dan machining untuk membantu para pelaku industri menemukan peralatan yang sesuai dengan kebutuhan pekerjaan mereka.",
    "Kami memahami bahwa hasil pekerjaan yang presisi dimulai dari perkakas yang sesuai. Karena itu, kami membantu pelanggan memilih produk berdasarkan aplikasi, material, dan kebutuhan pekerjaan.",
  ],
  points: [
    "Pemahaman kebutuhan machining",
    "Pilihan produk untuk bengkel bubut",
    "Respons cepat untuk pertanyaan teknis",
  ],
  image: aboutMachinist,
  imageAlt:
    "Operator mesin bubut memeriksa proses pembubutan logam di bengkel",
  caption: "Dukungan untuk pekerjaan bubut dan machining sehari-hari.",
};

export const products: ProductCategory[] = [
  {
    id: "mata-bor",
    index: "01",
    name: "Mata Bor",
    englishName: "Drill Bits",
    description:
      "Pilihan mata bor untuk kebutuhan pengeboran logam, perawatan, dan pekerjaan machining sehari-hari.",
    applications: ["Pengeboran logam", "Perawatan bengkel"],
    image: productDrillBits,
    imageAlt:
      "Koleksi mata bor dan cutting tool presisi dengan latar terang",
  },
  {
    id: "hand-tap",
    index: "02",
    name: "Hand Tap",
    englishName: "Threading Tools",
    description:
      "Alat pembuat ulir untuk kebutuhan tapping, perbaikan komponen, dan pekerjaan perakitan logam.",
    applications: ["Pembuatan ulir", "Perbaikan komponen"],
    image: productHandTap,
    imageAlt:
      "Hand tap dan mata bor tersusun dalam tool holder di meja kerja",
  },
  {
    id: "insert-widia",
    index: "03",
    name: "Insert Widia",
    englishName: "Carbide Inserts",
    description:
      "Insert karbida untuk proses pembubutan dan pemesinan dengan hasil potongan yang konsisten.",
    applications: ["Pembubutan", "Pemesinan presisi"],
    image: productInsertWidia,
    imageAlt:
      "Insert karbida dan tool holder untuk proses pembubutan logam",
  },
  {
    id: "bor-nachi",
    index: "04",
    name: "Bor NACHI",
    englishName: "NACHI Drill Bits",
    description:
      "Mata bor NACHI untuk kebutuhan pengeboran presisi di bengkel bubut dan lingkungan produksi.",
    applications: ["Pengeboran presisi", "Produksi"],
    image: productNachi,
    imageAlt:
      "Mata bor presisi mengebor logam dengan penggaris sebagai acuan ukuran",
  },
  {
    id: "perkakas-machining",
    index: "05",
    name: "Perkakas Machining Lainnya",
    englishName: "Machining Accessories",
    description:
      "Aksesori dan perlengkapan pendukung untuk operasi bubut, milling, serta perawatan mesin.",
    applications: ["Bubut & milling", "Perawatan mesin"],
    image: productOtherTools,
    imageAlt:
      "Mesin milling industri dengan tool holder dan perlengkapan machining",
    imagePosition: "50% 35%",
  },
];

export const productsSection = {
  index: "02",
  eyebrow: "Kategori Produk",
  title: "Perkakas untuk alur kerja bengkel bubut.",
  description:
    "Pilih kategori yang sesuai dengan kebutuhan pekerjaan Anda. Untuk tipe, ukuran, dan ketersediaan spesifik, silakan hubungi tim kami.",
  panelLabel: "Kebutuhan spesifik",
  panelTitle: "Tidak menemukan tipe atau ukuran yang dicari?",
  panelDescription:
    "Kirimkan detail kebutuhan Anda. Kami akan membantu mengecek ketersediaan produk yang sesuai.",
  panelCta: "Tanya ketersediaan",
} as const;

export const catalogPage = {
  bannerEyebrow: "Katalog Produk",
  bannerTitle: "Solusi Perlengkapan Machining untuk Kebutuhan Industri",
  bannerDescription:
    "Temukan berbagai pilihan peralatan bengkel bubut dan kebutuhan machining dari Tepat Supplier Tools.",
  bannerImage: heroDrill,
  bannerImageAlt:
    "Mata bor CNC mengebor logam dengan cairan pendingin di bengkel machining",
  title: "Produk Kami",
  description:
    "Berbagai pilihan perlengkapan bengkel bubut dan kebutuhan machining untuk mendukung pekerjaan Anda.",
  aboutTitle: "Tentang Tepat Supplier Tools",
  aboutDescription:
    "Tepat Supplier Tools menyediakan berbagai kebutuhan perlengkapan bengkel bubut dan machining untuk membantu para pelaku industri menemukan peralatan yang sesuai dengan kebutuhan pekerjaan mereka.",
  ctaEyebrow: "Konsultasi & Pemesanan",
  ctaTitle: "Butuh Informasi Lebih Lanjut?",
  ctaDescription:
    "Hubungi kami untuk mendapatkan informasi mengenai produk dan kebutuhan perlengkapan bengkel Anda.",
  ctaLabel: "Hubungi Kami",
} as const;

export const advantages: Advantage[] = [
  {
    index: "01",
    title: "Pengalaman industri",
    description:
      "Kami memahami kebutuhan bengkel bubut dan machining dari sisi aplikasi kerja, bukan hanya katalog produk.",
  },
  {
    index: "02",
    title: "Variasi produk",
    description:
      "Mata bor, hand tap, insert widia, Bor NACHI, hingga perlengkapan machining pendukung.",
  },
  {
    index: "03",
    title: "Sumber produk yang terpercaya",
    description:
      "Produk dipilih dengan perhatian pada kesesuaian aplikasi dan ketersediaan untuk kebutuhan workshop.",
  },
  {
    index: "04",
    title: "Layanan responsif",
    description:
      "Tim kami siap membantu pertanyaan produk, rekomendasi, dan permintaan penawaran melalui WhatsApp.",
  },
  {
    index: "05",
    title: "Dukungan bengkel bubut",
    description:
      "Pendampingan pemilihan perlengkapan untuk pekerjaan bubut, perawatan, dan machining umum.",
  },
];

export const whyChooseUs = {
  index: "03",
  eyebrow: "Keunggulan",
  title: "Alasan bengkel dan tim pengadaan memilih Tepat.",
  description:
    "Kami memosisikan diri sebagai mitra teknis yang membantu memilih perkakas sesuai kebutuhan pekerjaan.",
  image: whyLathe,
  imageAlt:
    "Pekerja memeriksa proses pembubutan logam pada mesin bubut",
  noteTitle: "Presisi dalam praktik",
  noteText:
    "Perkakas yang tepat membantu menjaga hasil kerja tetap konsisten.",
};

export const brandFocus = {
  index: "04",
  eyebrow: "Fokus Produk",
  title: "Bor NACHI untuk pekerjaan yang menuntut presisi.",
  description:
    "Salah satu referensi produk yang tersedia untuk kebutuhan pengeboran pada pekerjaan bengkel bubut dan machining.",
  note:
    "Informasi merek ditampilkan sebagai referensi produk. Ketersediaan tipe dan ukuran dapat berubah; silakan konfirmasi melalui WhatsApp.",
  image: brandStepDrills,
  imageAlt:
    "Mata bor step drill kuningan dengan permukaan logam gelap",
  specs: [
    { label: "Kategori", value: "Mata bor" },
    { label: "Aplikasi", value: "Pengeboran logam" },
    { label: "Ketersediaan", value: "Konfirmasi tipe & ukuran" },
  ] satisfies BrandSpec[],
};

export const contact = {
  index: "05",
  eyebrow: "Kontak",
  title: "Punya kebutuhan perkakas untuk bengkel Anda?",
  description:
    "Tanyakan ketersediaan produk, minta rekomendasi, atau ajukan penawaran. Kami akan membantu mengarahkan kebutuhan Anda melalui WhatsApp.",
  formTitle: "Minta penawaran",
  formDescription:
    "Isi detail singkat di bawah ini. Anda akan diarahkan ke WhatsApp dengan pesan yang sudah terisi.",
};

export const socials: SocialLink[] = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
];
