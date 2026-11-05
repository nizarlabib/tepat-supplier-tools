# Frontend Data Contract

Dokumen ini menjelaskan struktur data yang saat ini dipakai oleh website
Tepat Supplier Tools dan kontrak data yang disarankan untuk API backend
(misalnya Go) di masa depan.

> **Status saat ini:** seluruh data masih berupa data lokal/dummy di dalam
> `src/data/` dan `src/types/`. Tidak ada backend API yang diimplementasikan.
> Dokumen ini hanya menetapkan kontrak agar integrasi API nanti konsisten.

---

## 1. Ringkasan Sumber Data Saat Ini

| File | Isi | Dipakai oleh |
|---|---|---|
| `src/types/product.ts` | Tipe `Product` dan `ProductCategoryInfo` | Halaman katalog, kartu produk |
| `src/data/products.ts` | `products`, `productCategories`, `featuredProducts` | Homepage carousel, katalog `/produk`, sidebar kategori |
| `src/data/site.ts` | Konten situs: hero, about, kontak, navigasi, footer, konten halaman katalog | Navbar, Footer, section homepage, banner & CTA katalog |

Catatan penting: ada dua ekspor bernama `products`.

- `src/data/products.ts` → **record produk sebenarnya** (dipakai carousel dan
  katalog).
- `src/data/site.ts` → daftar **kategori showcase** untuk section kategori di
  homepage dan opsi form kontak. Ini bukan katalog produk.

Jangan mencampur keduanya saat migrasi ke API.

---

## 2. Data Produk (Current Frontend)

### 2.1 Tipe `Product`

Definisi saat ini di `src/types/product.ts`:

| Key | Type | Required | Deskripsi | Contoh | Sumber |
|---|---|---|---|---|---|
| `id` | `string` | Ya | Identifier unik produk | `"nachi-drill-bit"` | Hardcoded |
| `name` | `string` | Ya | Nama produk | `"NACHI Drill Bit"` | Hardcoded |
| `brand` | `string` | Tidak | Merek produk | `"NACHI"` | Hardcoded |
| `category` | `string` | Ya | Nama kategori (display name), harus cocok dengan filter | `"Mata Bor"` | Hardcoded |
| `description` | `string` | Ya | Deskripsi singkat produk | `"Mata bor presisi standar industri Jepang..."` | Hardcoded |
| `image` | `string` | Ya | URL/path gambar utama (hasil import Vite) | `"/assets/product-nachi-xxx.jpg"` | Hardcoded (asset lokal) |
| `alt` | `string` | Tidak | Teks alternatif gambar | `"Mata bor merek NACHI..."` | Hardcoded |
| `isDemo` | `boolean` | Ya (fixture) | Penanda data dummy. Tidak perlu dikirim API | `true` | Hardcoded |

### 2.2 Daftar Produk Saat Ini

`src/data/products.ts` berisi 10 record:

| id | name | brand | category |
|---|---|---|---|
| `hss-twist-drill` | HSS Twist Drill Bit | Tepat | Mata Bor |
| `cobalt-drill-bit` | Cobalt Drill Bit (HSS-Co) | Tepat | Mata Bor |
| `nachi-drill-bit` | NACHI Drill Bit | NACHI | Mata Bor |
| `metric-hand-tap` | Metric Hand Tap | Tepat | Hand Tap |
| `spiral-point-tap` | Spiral Point Tap | Tepat | Hand Tap |
| `hand-tap-set` | Hand Tap Set (Taper, Plug, Bottoming) | Tepat | Hand Tap |
| `carbide-turning-insert` | Carbide Turning Insert | Tepat | Insert Widia |
| `carbide-milling-insert` | Carbide Milling Insert | Tepat | Insert Widia |
| `tap-wrench` | Adjustable Tap Wrench | Tepat | Aksesoris Machining |
| `drill-chuck` | Keyless / Keyed Drill Chuck | Tepat | Aksesoris Machining |

`featuredProducts` adalah subset 8 produk yang dipakai carousel homepage.
Subset ini dapat diganti nanti dengan parameter API (misalnya `featured=true`)
atau tetap dipertahankan sebagai kurasi frontend.

### 2.3 Kategori Produk (Current Frontend)

`productCategories` di `src/data/products.ts`:

| id | name | description |
|---|---|---|
| `mata-bor` | Mata Bor | Pilihan mata bor material HSS, Cobalt, hingga NACHI... |
| `hand-tap` | Hand Tap | Perkakas pembuat ulir dalam... |
| `insert-widia` | Insert Widia | Mata bubut dan milling insert berbahan tungsten carbide... |
| `aksesoris-machining` | Aksesoris Machining | Peralatan pencekam dan alat bantu workshop bubut... |

Filter `"Semua Produk"` adalah opsi UI, **bukan** kategori dari API.

---

## 3. Kontrak API Produk (Proposed)

Struktur yang disarankan untuk `GET /api/v1/products`. Nama field API berbeda
dengan tipe frontend saat ini; bagian pemetaan ada di bagian 7.

| Key | Type | Required | Deskripsi |
|---|---|---|---|
| `id` | `string` | Ya | Unique product identifier |
| `slug` | `string` | Ya | URL-friendly product identifier |
| `name` | `string` | Ya | Product name |
| `brand` | `string \| null` | Tidak | Product brand, misalnya NACHI |
| `category_id` | `string` | Ya | Referensi ke kategori produk |
| `description` | `string` | Ya | Short product description |
| `image_url` | `string \| null` | Tidak | Main product image URL |
| `image_alt` | `string \| null` | Tidak | Accessible image description |
| `is_active` | `boolean` | Ya | Whether product is published |
| `created_at` | `string \| null` | Tidak | Creation timestamp (ISO 8601) |
| `updated_at` | `string \| null` | Tidak | Last update timestamp (ISO 8601) |

Catatan:

- `isDemo` tetap metadata fixture frontend dan **tidak perlu** menjadi field API.
- `category` (display name) saat ini digantikan oleh `category_id` + data
  kategori. Frontend dapat menampilkan nama kategori hasil join di sisi klien
  atau menyertakan objek kategori ringkas pada response.

---

## 4. Kontrak API Kategori (Proposed)

Struktur yang disarankan untuk `GET /api/v1/categories`:

| Key | Type | Required | Deskripsi |
|---|---|---|---|
| `id` | `string` | Ya | Unique category identifier |
| `name` | `string` | Ya | Display name |
| `slug` | `string` | Ya | Stable category identifier untuk filtering |
| `description` | `string \| null` | Tidak | Optional category description |
| `is_active` | `boolean` | Ya | Whether category is available |
| `sort_order` | `number` | Tidak | Display order |

Slug yang harus dipakai:

- `mata-bor`
- `hand-tap`
- `insert-widia`
- `aksesoris-machining`

`"Semua Produk"` adalah opsi filter frontend, bukan record kategori API.

---

## 5. Konten Homepage dan Perusahaan (Proposed)

### 5.1 Hero Banner

Sumber saat ini: `hero` di `src/data/site.ts` (hardcoded).

| Key | Type | Required | Deskripsi | Contoh |
|---|---|---|---|---|
| `title` | `string` | Ya | Main heading | `"Perlengkapan Bengkel Bubut & Machining Berkualitas"` |
| `subtitle` | `string` | Tidak | Supporting text | `"Solusi terpercaya untuk kebutuhan peralatan machining..."` |
| `image_url` | `string` | Ya | Hero image URL | `/assets/hero-drill.jpg` |
| `image_alt` | `string` | Tidak | Image accessibility text | `"Mata bor mesin CNC sedang mengebor logam..."` |
| `cta_label` | `string` | Tidak | CTA button label | `"Jelajahi Produk"` |
| `cta_url` | `string` | Tidak | CTA destination | `"#product"` |

Field tambahan yang saat ini dipakai frontend (boleh tetap hardcoded):
`eyebrow`, `primaryCta`, `secondaryCta`, `proof`.

### 5.2 About Us

Sumber saat ini: `about` dan `catalogPage.about*` di `src/data/site.ts`
(hardcoded).

| Key | Type | Required | Deskripsi | Contoh |
|---|---|---|---|---|
| `title` | `string` | Ya | Section heading | `"Tentang Tepat Supplier Tools"` |
| `description` | `string` | Ya | Company introduction | `"Tepat Supplier Tools menyediakan berbagai kebutuhan..."` |
| `image_url` | `string \| null` | Tidak | Company image | `/assets/about-machinist.jpg` |
| `image_alt` | `string \| null` | Tidak | Image accessibility text | `"Operator mesin bubut memeriksa proses..."` |

Field tambahan yang saat ini dipakai: `eyebrow`, `index`, `paragraphs`,
`points`, `caption`.

### 5.3 Contact Information

Sumber saat ini: `site`, `contact`, dan `whatsappHref` di `src/data/site.ts`
(hardcoded).

| Key | Type | Required | Deskripsi | Contoh |
|---|---|---|---|---|
| `heading` | `string` | Ya | Contact CTA heading | `"Punya kebutuhan perkakas untuk bengkel Anda?"` |
| `description` | `string` | Tidak | Supporting text | `"Tanyakan ketersediaan produk..."` |
| `phone` | `string \| null` | Tidak | Contact phone number | `"+62 812-3456-7890"` |
| `email` | `string \| null` | Tidak | Contact email | `"halo@tepat-supplier.co.id"` |
| `whatsapp_url` | `string \| null` | Tidak | WhatsApp contact URL | `"https://wa.me/6281234567890?text=..."` |
| `address` | `string \| null` | Tidak | Company address | `"Jl. Industri Raya No. 00, Jakarta, Indonesia"` |

Field tambahan yang saat ini dipakai: `whatsappNumber`, `whatsappDisplay`,
`whatsappMessage`, `hours`, `formTitle`, `formDescription`.

### 5.4 Navigation

Sumber saat ini: `navItems` di `src/data/site.ts` (hardcoded, data-driven).

| Key | Type | Required | Deskripsi | Contoh |
|---|---|---|---|---|
| `label` | `string` | Ya | Teks navigasi | `"Produk"` |
| `href` | `string` | Ya | Tujuan navigasi | `"#produk"` atau `"/produk"` |

Catatan: item `#produk` diarahkan ke route `/produk` oleh Navbar dan Footer.

### 5.5 Footer

Footer menggunakan `site`, `navItems`, `socials`, dan `products` (kategori
showcase dari `site.ts`). Konten yang dapat dikonfigurasi:

| Key | Type | Required | Deskripsi | Contoh |
|---|---|---|---|---|
| `site.name` | `string` | Ya | Nama perusahaan | `"Tepat Supplier Tools"` |
| `site.tagline` | `string` | Ya | Tagline | `"Perlengkapan bengkel bubut & machining"` |
| `site.description` | `string` | Ya | Deskripsi singkat | `"Supplier perlengkapan bengkel bubut..."` |
| `socials` | `Array<{ label, href }>` | Tidak | Tautan sosial | `{ label: "Instagram", href: "#" }` |

`socials` saat ini memakai placeholder `"#"` dan **tidak boleh dianggap
sebagai akun resmi** sampai URL sebenarnya tersedia.

---

## 6. Rekomendasi Endpoint API (Proposed, belum diimplementasikan)

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/api/v1/products` | Get product list with search, category, and pagination |
| `GET` | `/api/v1/products/{slug}` | Get a single product (jika nanti ada halaman detail) |
| `GET` | `/api/v1/categories` | Get active product categories |
| `GET` | `/api/v1/site-content` | Get hero, about, contact, navigation, dan konten situs lainnya |

Query parameter untuk `GET /api/v1/products`:

| Parameter | Type | Example | Deskripsi |
|---|---|---|---|
| `search` | `string` | `nachi` | Cari pada nama, brand, dan deskripsi |
| `category` | `string` | `mata-bor` | Filter berdasarkan slug kategori |
| `page` | `integer` | `1` | Halaman saat ini |
| `per_page` | `integer` | `9` | Jumlah produk per halaman |

Backend di masa depan sebaiknya menangani search, filter kategori, dan
pagination. Implementasi frontend saat ini tetap memakai data lokal dan
filter di sisi klien.

---

## 7. Contoh Response API

### 7.1 `GET /api/v1/products?search=nachi&page=1&per_page=9`

```json
{
  "data": [
    {
      "id": "product-001",
      "slug": "mata-bor-nachi-5mm",
      "name": "Mata Bor NACHI 5mm",
      "brand": "NACHI",
      "category_id": "category-001",
      "description": "Mata bor berkualitas untuk kebutuhan machining.",
      "image_url": "https://example.com/images/mata-bor-nachi-5mm.jpg",
      "image_alt": "Mata bor NACHI ukuran 5mm",
      "is_active": true,
      "created_at": "2026-11-01T08:00:00Z",
      "updated_at": "2026-11-01T08:00:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 9,
    "total": 25,
    "total_pages": 3
  }
}
```

> Contoh ini ilustratif, bukan data produk sebenarnya.

### 7.2 `GET /api/v1/categories`

```json
{
  "data": [
    {
      "id": "category-001",
      "name": "Mata Bor",
      "slug": "mata-bor",
      "description": "Mata bor untuk kebutuhan pengeboran logam.",
      "is_active": true,
      "sort_order": 1
    },
    {
      "id": "category-002",
      "name": "Hand Tap",
      "slug": "hand-tap",
      "description": "Perkakas pembuat ulir dalam.",
      "is_active": true,
      "sort_order": 2
    },
    {
      "id": "category-003",
      "name": "Insert Widia",
      "slug": "insert-widia",
      "description": "Insert tungsten carbide untuk bubut dan milling.",
      "is_active": true,
      "sort_order": 3
    },
    {
      "id": "category-004",
      "name": "Aksesoris Machining",
      "slug": "aksesoris-machining",
      "description": "Perlengkapan pendukung machining.",
      "is_active": true,
      "sort_order": 4
    }
  ]
}
```

### 7.3 `GET /api/v1/site-content`

```json
{
  "data": {
    "hero": {
      "title": "Perlengkapan Bengkel Bubut & Machining Berkualitas",
      "subtitle": "Solusi terpercaya untuk kebutuhan peralatan machining.",
      "image_url": "https://example.com/images/hero-drill.jpg",
      "image_alt": "Mata bor CNC mengebor logam",
      "cta_label": "Jelajahi Produk",
      "cta_url": "#product"
    },
    "about": {
      "title": "Tentang Tepat Supplier Tools",
      "description": "Tepat Supplier Tools menyediakan berbagai kebutuhan perlengkapan bengkel bubut dan machining.",
      "image_url": "https://example.com/images/about-machinist.jpg",
      "image_alt": "Operator mesin bubut di workshop"
    },
    "contact": {
      "heading": "Punya kebutuhan perkakas untuk bengkel Anda?",
      "description": "Tanyakan ketersediaan produk atau ajukan penawaran.",
      "phone": "+62 812-3456-7890",
      "email": "halo@tepat-supplier.co.id",
      "whatsapp_url": "https://wa.me/6281234567890",
      "address": "Jl. Industri Raya No. 00, Jakarta, Indonesia"
    }
  }
}
```

---

## 8. Pemetaan Frontend → API

### 8.1 Komponen yang Mengonsumsi Data Produk

| Komponen | File | Field yang dibutuhkan |
|---|---|---|
| Homepage carousel | `src/components/sections/Products.tsx` | `id`, `name`, `brand`, `description`, `image`, `alt` |
| `ProductCard` | `src/components/catalog/ProductCard.tsx` | `name`, `brand`, `description`, `image`, `alt` |
| Catalog grid | `src/pages/Catalog.tsx` → `ProductGrid` | `id`, `name`, `brand`, `category`, `description`, `image`, `alt` |
| Category sidebar | `CategoryFilterSidebar.tsx` | `productCategories` (`id`, `name`) + jumlah produk |

### 8.2 Komponen yang Mengonsumsi Data Kategori

| Komponen | File | Field yang dibutuhkan |
|---|---|---|
| Category sidebar | `src/components/catalog/CategoryFilterSidebar.tsx` | `name` (display) dan slug/id untuk filter |
| Catalog filter | `src/pages/Catalog.tsx` | `category` produk saat ini; nanti `category_id`/`slug` |

### 8.3 Section Homepage yang Mengonsumsi Site Content

| Section | File | Sumber data |
|---|---|---|
| Navbar | `src/components/layout/Navbar.tsx` | `navItems`, `site`, `whatsappHref` |
| Hero | `src/components/sections/Hero.tsx` | `hero`, `products` (kategori showcase) |
| Products | `src/components/sections/Products.tsx` | `featuredProducts` |
| About | `src/components/sections/About.tsx` | `about` |
| Why Choose Us | `src/components/sections/WhyChooseUs.tsx` | `whyChooseUs`, `advantages` |
| Brand Showcase | `src/components/sections/BrandShowcase.tsx` | `brandFocus` |
| Contact | `src/components/sections/Contact.tsx` | `contact`, `site`, `products` (opsi kategori) |
| Footer | `src/components/layout/Footer.tsx` | `site`, `navItems`, `socials`, `products` |
| Catalog banner/header/about/CTA | `src/components/catalog/*` | `catalogPage` |

### 8.4 Mapping Field Produk

| Frontend (`Product`) | API (`Product`) | Catatan |
|---|---|---|
| `id` | `id` | Bisa langsung dipakai |
| `name` | `name` | Bisa langsung dipakai |
| `brand` | `brand` | Nullable; sembunyikan badge brand jika kosong |
| `category` | `category_id` | Perlu mapping display name → category id/slug |
| `description` | `description` | Bisa langsung dipakai |
| `image` | `image_url` | Perlu fallback jika null |
| `alt` | `image_alt` | Fallback ke `name` jika kosong |
| `isDemo` | — | Metadata fixture, jangan dikirim API |
| — | `slug` | Diperlukan jika halaman detail ditambahkan |
| — | `is_active` | Backend hanya mengembalikan produk aktif |

### 8.5 Mapping Field Kategori

| Frontend (`ProductCategoryInfo`) | API (`Category`) |
|---|---|
| `id` | `slug` (disarankan) atau `id` |
| `name` | `name` |
| `description` | `description` |

### 8.6 Penanganan Field Opsional / Null

- `brand`: jika `null`/kosong, jangan render label brand.
- `image_url`: jika `null` atau gagal dimuat, tampilkan fallback ikon
  `Package` (sudah ada di `ProductCard`).
- `image_alt`: fallback ke `name`.
- `description`: backend sebaiknya selalu mengirim string; jika kosong,
  render tanpa paragraf.
- `phone`/`email`/`whatsapp_url`/`address`: hanya render tautan jika tersedia.
- `socials`: jangan render tautan placeholder sebagai akun resmi.

### 8.7 Cara Mengonsumsi Image URL

- Saat ini `image` adalah hasil `import` aset Vite sehingga menjadi URL
  yang di-bundle.
- API nanti mengirim `image_url` absolut (mis. `https://...`) atau path yang
  dapat di-resolve. Gunakan nilainya langsung pada atribut `src`.
- Pertahankan `loading="lazy"`, `alt`, dan fallback error yang sudah ada.

### 8.8 Mapping Pagination API → UI

- `meta.page` → halaman aktif (`currentPage`).
- `meta.per_page` → jumlah produk per halaman (default UI: 9).
- `meta.total` → total hasil filter (`totalResults`).
- `meta.total_pages` → jumlah tombol halaman (`totalPages`).
- Sembunyikan navigasi halaman jika `total_pages <= 1`.
- Reset ke halaman 1 saat query pencarian (debounced) atau kategori berubah.

### 8.9 File Dummy yang Dapat Diganti dengan API

| File / ekspor | Pengganti yang disarankan |
|---|---|
| `src/data/products.ts` → `products` | `GET /api/v1/products` |
| `src/data/products.ts` → `featuredProducts` | `GET /api/v1/products?featured=true` atau kurasi frontend |
| `src/data/products.ts` → `productCategories` | `GET /api/v1/categories` |
| `src/data/site.ts` → `hero`, `about`, `contact` | `GET /api/v1/site-content` |
| `src/data/site.ts` → `navItems`, `socials` | `GET /api/v1/site-content` (opsional) |

Tipe `Product` di `src/types/product.ts` dapat dipertahankan sebagai model
domain frontend dan dipetakan dari response API. Jangan membuat lapisan
service atau memasang library data-fetching sebelum integrasi API benar-benar
dikerjakan.
