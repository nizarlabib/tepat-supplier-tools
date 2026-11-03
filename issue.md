# ISSUE: Product-Focused Website Enhancement
## Tepat Supplier Tools

## 1. Objective

Refactor the existing Tepat Supplier Tools website to prioritize product discovery and product visibility.

The website should emphasize the products sold by the company rather than company introduction content.

There are two main experiences:

1. Homepage: Full-width hero banner followed by a product showcase carousel.
2. Product Catalog (`/produk`): Searchable and paginated product catalog with a marketplace-inspired layout.

Both pages must share centralized product data and consistent visual identity.

IMPORTANT: Read `DESIGN_BRIEF.md` and `AGENTS.md` before implementation.

---

## 2. Design Direction

Maintain the approved **Modern Industrial Minimalist** style.

Color palette:
- Pure White: #FFFFFF
- Light Grey: #F3F5F7
- Steel Grey: #E2E7EC
- Graphite: #202A35
- Industrial Blue: #315F85
- Blue Accent: #2563EB

Design principles:
- White-dominant layout.
- Professional industrial appearance.
- Clean typography hierarchy.
- Generous whitespace.
- High-quality industrial photography.
- Subtle borders and shadows.
- Minimal and purposeful interactions.

Avoid:
- Bronze and gold.
- Warm beige.
- Excessive gradients.
- Heavy shadows.
- Unnecessary decorations.
- Generic marketplace styling.

The result should feel like a premium corporate product catalog, not a full e-commerce marketplace.

---

## 3. Homepage (`/`)

### A. Full-Width Hero Banner

Replace the existing half-width split hero with a full-width industrial banner.

Requirements:
- Full-width image background.
- Industrial machining photography.
- Background image using cover behavior.
- Subtle overlay for text readability.
- Responsive image positioning.
- Clear headline and CTA.

Suggested content:

**Headline:**
"Perlengkapan Bengkel Bubut & Machining Berkualitas"

**Description:**
"Solusi terpercaya untuk kebutuhan peralatan machining dan perlengkapan bengkel bubut Anda."

CTA:
- Jelajahi Produk
- Hubungi Kami

"Jelajahi Produk" scrolls to `#product`.

"Hubungi Kami" navigates to the existing contact destination.

### B. Product Showcase (`#product`)

This section should appear immediately after the hero banner.

Convert the existing product section into a horizontal carousel.

Requirements:
- Use centralized product data.
- Display selected products as a preview.
- Product image.
- Product name.
- Brand, if available.
- Short description.
- Previous and next controls.
- Mobile touch/swipe support.
- Smooth scrolling.
- Responsive card dimensions.

Add a visible CTA:

"Lihat Semua Produk"

Navigate to `/produk`.

Use CSS scroll-snap or existing carousel utilities. Avoid unnecessary dependencies.

### C. About Us Section

Move the About Us section below the Product Showcase.

The homepage should prioritize products before company information.

Suggested content:

**Heading:**
"Tentang Tepat Supplier Tools"

**Description:**
"Tepat Supplier Tools menyediakan berbagai kebutuhan perlengkapan bengkel bubut dan machining untuk membantu para pelaku industri menemukan peralatan yang sesuai dengan kebutuhan pekerjaan mereka."

Design:
- Clean editorial or split-layout composition.
- Industrial workshop photography.
- Concise company introduction.
- Consistent color palette.
- Avoid excessive statistics or unsupported company claims.

Do not invent company history, certifications, achievements, or customer testimonials.

### D. Other Existing Sections

Preserve other relevant existing sections.

However, maintain the priority:
1. Hero.
2. Product Showcase.
3. About Us.
4. Other supporting sections.
5. Contact CTA.
6. Footer.

Avoid allowing supporting sections to dominate product presentation.

---

## 4. Product Catalog (`/produk`)

The catalog should be the primary focus of