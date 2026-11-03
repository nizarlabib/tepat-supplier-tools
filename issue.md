# Tepat Supplier Tools — Design Brief & Implementation Plan

**Status:** Implemented and production-verified. Dummy content is intentionally retained for manual replacement by the client.
**Handoff:** Replace contact details, product copy, and social links in `src/data/site.ts`; replace photography in `src/assets/images/`; update metadata and OG assets in `index.html` and `public/`.
**Verification:** `npm run lint` and `npm run build` pass. Chromium QA at 320–1920px reports no overflow, broken images, console errors, or WCAG A/AA violations.
**Project:** Premium corporate product showcase for an industrial tools and machining supplies supplier.
**Language:** Indonesian-first, with optional English product terminology where it is commonly used by machinists.

---

## 1. Repository Audit

The project is a Vite scaffold with a prepared but unused landing-page structure.

| Item | Current state |
| --- | --- |
| Framework | React 19 + TypeScript 6 + Vite 8 |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` |
| Icons | Lucide React |
| Animation | Motion |
| Router | Not installed; not required for this single-page site |
| Entry | `src/main.tsx` renders `src/App.tsx` |
| `src/App.tsx` | Still the default Vite starter screen |
| `src/App.css` | Vite starter styles; must be removed |
| `src/index.css` | Vite starter variables and layout; must be replaced |
| `src/pages/Home.tsx` | Empty |
| `src/data/site.ts` | Empty |
| `src/components/**` | All component files are empty |
| Real assets | None; only Vite/React starter images |
| Metadata | Default title, no description or Open Graph data |

**Conclusion:** There is no existing visual design to preserve. The folder structure is a useful starting point, but the site will be built from a clean design system.

---

## 2. Design Brief

### Positioning

Tepat Supplier Tools is an established, knowledgeable supplier of lathe workshop equipment, machining tools, and industrial cutting tools. The website should feel like a trusted specialist — not a mass-market shop or a generic software startup.

### Primary audience

- Lathe workshop owners
- Machinists and machining technicians
- Industrial workshop operators
- Procurement teams sourcing machining tools
- Businesses maintaining workshop equipment

### Primary goal

Establish credibility, present product categories clearly, and generate qualified inquiries through WhatsApp.

### Design concept: “Precision in Practice”

The visual language combines **industrial materiality** with **editorial restraint**. The site should feel precise, experienced, and calm: large typography, disciplined grids, honest product photography, fine hairline details, and bronze accents used with intention.

The signature motif is the **measurement mark**: short rules, crosshair marks, index numbers, and technical captions. These details reference machining and quality control without becoming decorative noise.

### Desired impression

- Established, not experimental.
- Specialist, not a general marketplace.
- Premium, not luxurious or fashion-oriented.
- Confident, not loud.
- Technical, but still warm and human.

### Avoid

- Purple/blue SaaS gradients.
- Glassmorphism or frosted panels.
- Neon accents and glowing effects.
- Rounded card grids repeated in every section.
- Generic stock photos of handshakes, smiling offices, or people pointing at screens.
- Invented achievements, founding dates, certifications, distributor claims, or customer counts.
- Overly playful illustrations.
- Excessive scroll animations.

---

## 3. Visual Direction

### 3.1 Color System

Core palette supplied by the client:

| Token | HEX | Intended use |
| --- | --- | --- |
| Charcoal | `#202326` | Primary text, dark sections, primary buttons |
| Warm White | `#F5F3EE` | Primary page background |
| Bronze | `#B87943` | Small accents, rules, icons, emphasis |
| Steel Grey | `#777D80` | Secondary labels and technical metadata |
| White | `#FFFFFF` | Content on dark surfaces |

Supporting tones derived for hierarchy and accessibility:

| Token | HEX | Intended use |
| --- | --- | --- |
| Ink | `#17191B` | Footer and deepest dark surfaces |
| Charcoal Soft | `#2B2F33` | Dark section variation |
| Paper Bright | `#FBFAF7` | Alternate light section background |
| Bone | `#E9E4DA` | Product image backgrounds, quiet fills |
| Hairline | `#D9D3C8` | Borders and dividers |
| Steel Deep | `#5D6367` | Accessible secondary body text |
| Bronze Deep | `#8C5A2C` | Solid bronze CTA background where AA contrast is required |

**Color rules**

- Warm White and Charcoal carry the page. Bronze is an accent, never a dominant surface.
- Solid bronze CTA buttons use `Bronze Deep` with white text to maintain readable contrast.
- `Bronze #B87943` is reserved for rules, small marks, hover details, and large text.
- Secondary body text must use `Steel Deep`, not `Steel Grey`, on light backgrounds.
- No gradients on UI surfaces. Photography may contain natural tonal variation.
- Borders remain 1px and low contrast.

### 3.2 Typography

**Headings:** Manrope, weights 500–700.
**Body and specifications:** Inter, weights 400–600.
**Fallbacks:** system sans-serif.

Fonts should be self-hosted as WOFF2 to avoid third-party requests. Only the weights actually used will be loaded.

| Style | Font | Size | Line height | Tracking |
| --- | --- | --- | --- | --- |
| Display | Manrope 600 | `clamp(3rem, 6vw, 5.5rem)` | `0.98` | `-0.035em` |
| Heading 1 | Manrope 600 | `clamp(2.25rem, 4vw, 4rem)` | `1.02` | `-0.03em` |
| Heading 2 | Manrope 600 | `clamp(1.875rem, 2.8vw, 3rem)` | `1.08` | `-0.025em` |
| Heading 3 | Manrope 600 | `1.375rem–1.75rem` | `1.2` | `-0.015em` |
| Body Large | Inter 400 | `1.125rem` | `1.7` | `0` |
| Body | Inter 400 | `1rem` | `1.7` | `0` |
| Specification | Inter 400/500 | `0.875rem` | `1.5` | `0.01em` |
| Eyebrow | Inter 600 | `0.75rem` | `1.2` | `0.16em`, uppercase |

**Rules**

- Maximum body measure: 60–68 characters.
- Headlines should break deliberately, not fill available width automatically.
- Use tabular numerals for product specifications if numeric tables are added.
- Avoid all-caps body text and excessive letter-spacing.

### 3.3 Spacing and Layout

- Base unit: 8px.
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160.
- Container: `1320px` maximum with `24px` mobile, `40px` tablet, and `64px` desktop gutters.
- Grid: 12 columns desktop, 8 columns tablet, 4 columns mobile.
- Desktop gutters: `32px`; tablet: `24px`; mobile: `16px`.
- Desktop section padding: `128–160px`.
- Tablet section padding: `96px`.
- Mobile section padding: `72px`.
- Hairline rules and numbered labels create rhythm between sections.

**Composition rules**

- Use asymmetric spans such as `5/7`, `7/5`, and `4/8`.
- Do not place every section inside the same card container.
- Alternate open light sections, full-bleed imagery, and dark statement sections.
- Use generous negative space around product photography.
- Avoid perfectly equal multi-column feature rows.

---

## 4. Page Composition

### 4.1 Navbar

**Desktop**

- Full-width, 80–88px tall.
- Transparent over the hero; switches to Warm White with a bottom hairline after scrolling.
- Left: custom crosshair-style logo mark and a two-line wordmark: `TEPAT` / `SUPPLIER TOOLS`.
- Center: Home, Tentang Kami, Produk, Keunggulan, Kontak.
- Right: WhatsApp CTA with a small WhatsApp icon.
- Active section: short bronze underline, not a filled pill.

**Tablet and mobile**

- Collapse below 1024px.
- Menu opens as a full-screen Warm White panel, not a floating glass sheet.
- Links use large Manrope type with numbered indices.
- WhatsApp CTA and contact details sit at the bottom.
- Scroll lock, focus trapping, Escape-to-close, and focus restoration are required.

### 4.2 Hero

Asymmetric `7/5` split:

**Left side**

- Eyebrow: `PERLENGKAPAN MACHINING & BENGKEL BUBUT`
- Headline: “Solusi Perlengkapan Bengkel Bubut dan Kebutuhan Machining.”
- Supporting description from the brief.
- Primary CTA: “Jelajahi Produk” in Charcoal.
- Secondary CTA: “Hubungi Kami” as an outlined or underlined action.
- Small supporting line about product categories — no invented statistics.

**Right side**

- Tall `4:5` close-up of drill bits, carbide inserts, or a lathe tooling setup.
- Image runs to the right edge on desktop.
- A small solid Warm White caption panel overlaps the lower-left corner, containing a technical detail such as `MATA BOR / HAND TAP / INSERT WIDIA`.
- A bronze measurement mark and vertical hairline anchor the image.

**Below hero**

- A ruled product index strip listing the five categories as text links.
- On mobile, this becomes a horizontally scrollable index with visible overflow affordance.

### 4.3 About / Tentang Kami

Split editorial layout:

- Left 5 columns: eyebrow, heading, two short paragraphs, and a text link.
- Right 7 columns: workshop or tooling photograph with a caption.
- A vertical hairline and small bronze index mark separate the columns.
- Avoid founding-year or achievement claims not supplied by the client.
- Copy focuses on experience, product knowledge, and commitment to workshop customers.

### 4.4 Product Categories / Produk

Not a generic equal card grid.

- A section introduction with heading and short guidance.
- An asymmetric 12-column product composition:
  - One featured category spanning 6–7 columns.
  - Four supporting categories arranged in a staggered `7/5` and `5/7` rhythm.
- All product images use a consistent `4:3` ratio for visual order.
- Each item includes category name, short description, and a “Tanya ketersediaan” link.
- Product cards use image, hairline rule, and text — no heavy shadows or floating cards.
- On hover, image scales slightly and the inquiry arrow moves.
- On mobile, categories become a single-column sequence with consistent image ratios.

Categories:

1. Mata Bor / Drill Bits
2. Hand Tap
3. Insert Widia / Carbide Inserts
4. Bor NACHI
5. Perkakas Machining Lainnya

### 4.5 Why Choose Us / Keunggulan

An editorial numbered list instead of feature cards.

- Full-width Warm White or Paper Bright section.
- Left column: heading and a workshop detail image.
- Right column: numbered rows:
  - `01` Pengalaman industri
  - `02` Variasi produk
  - `03` Sumber produk yang terpercaya
  - `04` Layanan pelanggan yang responsif
  - `05` Dukungan kebutuhan bengkel bubut dan machining
- Each row has a short, conservative description.
- Claims remain editable and must not imply certifications, awards, or official distributor status.
- Rows separated by hairlines; no cards.

### 4.6 Brands / Product Showcase

A restrained product-focus section, not a fake logo wall.

- Feature NACHI drill bits as a supplied product reference.
- Present it as available product information, not as an official distributor claim.
- Use a large product image and a technical specification panel.
- Add a note inviting customers to ask about other brands and availability.
- Do not display unverified brand logos or partnerships.
- If additional brand assets are supplied later, they can replace the placeholder area.

### 4.7 Contact / Kontak

Strong closing composition:

- Left: dark Charcoal panel with a large headline encouraging product questions, recommendations, and quotations.
- Right: Warm White inquiry area with a short form or a direct WhatsApp action.
- Primary action: “Hubungi via WhatsApp.”
- Secondary contact details: phone, email, address placeholders.
- Form fields use underline styling, visible labels, and inline validation.
- No backend is assumed. The form will either open WhatsApp with a prefilled message or use a `mailto:` fallback until an endpoint is provided.

### 4.8 Footer

- Ink or Charcoal background.
- Top: large short statement and a final WhatsApp CTA.
- Middle: company identity, navigation, product categories, and contact details.
- Large, low-contrast TEPAT wordmark as a graphic anchor.
- Bottom: copyright, legal placeholder links, and back-to-top link.
- Address and social media remain clearly marked placeholders until supplied.

---

## 5. Image Direction

### Photography

- Close-up industrial product photography with visible material texture: flutes, coatings, carbide edges, threads, metal shavings.
- Neutral workshop context: lathe chucks, tool holders, workbenches, measuring instruments.
- Natural or controlled warm light; avoid blue-tinted factory stock photos.
- Muted, slightly warm color grade consistent with the Charcoal/Warm White/Bronze palette.
- Hero image: `4:5` portrait.
- Product category images: consistent `4:3` landscape.
- About image: `3:2` landscape or a composed workshop detail.
- Brand showcase image: large detail shot with negative space for a specification panel.

### Product visual rules

- Products should be clean, centered, and realistically lit.
- Use dark charcoal or bone backgrounds for consistency.
- Do not mix radically different background colors across category images.
- Avoid fake packaging and invented labels.
- Alt text must describe the actual tool shown.

### Graphic details

- Custom logo mark built from a crosshair or machined-square motif.
- Thin bronze measurement ticks and registration marks.
- Lucide icons at 1.5px stroke.
- Section indices such as `01 / 05`.
- Technical captions in small Inter type.

---

## 6. Interaction and Motion

- Hero content enters with a short opacity/translate reveal.
- Section content reveals at most once, with `12px` movement and `500–600ms` duration.
- Product image hover: scale to `1.02`.
- Arrow links: arrow shifts `4px`.
- Navbar changes background after scroll.
- Mobile menu uses a purposeful open/close transition.
- Respect `prefers-reduced-motion`; remove transforms and reduce durations.
- No parallax, scroll-jacking, continuously moving carousels, or decorative ambient animation.

---

## 7. Responsive Behavior

| Area | Desktop ≥1200px | Tablet 768–1199px | Mobile <768px |
| --- | --- | --- | --- |
| Grid | 12 columns | 8 columns | 4 columns |
| Navbar | Full navigation | Collapsed menu | Full-screen drawer |
| Hero | 7/5 split | Stacked with image below copy | Single column |
| Hero headline | Up to 5.5rem | 3.5–4.5rem | 2.5–3rem |
| About | 5/7 split | Stacked | Stacked |
| Products | Asymmetric grid | 2 columns | 1 column |
| Why Choose Us | Image + list | Stacked | Stacked numbered list |
| Showcase | Split feature | Stacked | Stacked |
| Contact | Split panel/form | Stacked | Stacked |
| Footer | Multi-column | 2 columns | Stacked |

Mobile requirements:

- Minimum 44px touch targets.
- Full-width primary CTA where appropriate.
- No horizontal page scroll.
- Product index strip may scroll horizontally but must not overflow the page.
- Consistent `72px` vertical section spacing.
- Reduced type scale and simplified overlaps.

---

## 8. Content and Asset Requirements

### Required from client

- WhatsApp number and preferred prefilled message.
- Company address, phone, email, and business hours.
- Official company name and any legal/trading name.
- Logo files, if available.
- Product photography for all five categories.
- Hero and workshop/about photography.
- Product specifications: available sizes, materials, coatings, and applications.
- Any approved brand relationships or distributor status.
- Social media URLs.
- Preferred form destination or backend endpoint.
- Confirmation of Indonesian copy and tone.

### Editable placeholders allowed until assets arrive

- Address, email, phone, social links.
- Product descriptions and specification rows.
- About copy that does not invent a founding year or achievements.
- Brand showcase content beyond NACHI product references.
- Testimonials and certifications should be omitted entirely unless verifiable content is supplied.

### Content rules

- Do not invent founding dates, years in business, customer counts, certifications, awards, distributor status, or guarantees.
- Use product-category language from the brief.
- Keep claims conservative and factual.
- Clearly separate product availability from official brand partnership claims.
- All placeholder copy must be easy to replace in `src/data/site.ts`.

---

## 9. Technical Plan

### Component architecture

```text
src/
  App.tsx
  pages/
    Home.tsx
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    common/
      Container.tsx
      Button.tsx
      SectionHeading.tsx
      Logo.tsx
      SectionIndex.tsx
      Reveal.tsx
      WhatsAppLink.tsx
    sections/
      Hero.tsx
      About.tsx
      Products.tsx
      WhyChooseUs.tsx
      BrandShowcase.tsx
      Contact.tsx
  data/
    site.ts
  assets/
    images/
    fonts/
```

The existing empty `Services.tsx`, `Statistics.tsx`, `Portfolio.tsx`, and `Testimonials.tsx` placeholders will be replaced with purpose-named section components. No unrelated existing logic exists to preserve.

### Data model

`src/data/site.ts` will contain explicit TypeScript types and content for:

- Navigation links.
- Product categories.
- Product index strip.
- Why Choose Us items.
- Brand showcase content.
- Contact details and WhatsApp configuration.
- Footer links and contact placeholders.

No `any` types. Content stays out of section components.

### Styling

- Replace `src/index.css` with Tailwind v4 theme tokens, base typography, focus styles, and font-face declarations.
- Remove `src/App.css` and the Vite starter markup.
- Use Tailwind utilities for layout and component styling.
- Add a small number of reusable utility classes only where repetition is real.
- Self-host Manrope and Inter if font files can be sourced; otherwise use the approved Google Fonts fallback with preconnect.

### SEO and accessibility

- `index.html`: Indonesian `lang`, title, meta description, Open Graph and Twitter metadata, theme color.
- Title: `Tepat Supplier Tools | Perlengkapan Bengkel Bubut & Perkakas Industri`
- Meta description focused on drill bits, hand taps, carbide inserts, NACHI drill bits, and machining tools.
- Open Graph image to be supplied or generated from the hero composition.
- One `<h1>`, logical heading order, semantic landmarks.
- Skip link, visible focus states, accessible mobile navigation.
- Descriptive alt text for all product and workshop images.
- WhatsApp links clearly labeled for screen readers.
- Form labels, error handling, and keyboard support.
- No text placed over busy photography without sufficient contrast protection.

### Performance

- Optimized WebP/AVIF images with explicit dimensions.
- Lazy-load below-the-fold images.
- Preload only critical font weights.
- Use Lucide imports per icon, not a broad icon bundle.
- Use Motion sparingly.
- No new third-party dependencies.

---

## 10. Implementation Phases

1. **Foundation**
   - Remove Vite starter UI and styles.
   - Set up design tokens, fonts, base styles, and metadata.
   - Add site data types and placeholder content.

2. **Shared components**
   - Container, Button, SectionHeading, Logo, SectionIndex, Reveal, WhatsAppLink.
   - Accessible Navbar and Footer shell.

3. **Hero and product index**
   - Build responsive hero composition.
   - Add category index strip.

4. **About and Products**
   - Build editorial about section.
   - Build asymmetric product category grid.

5. **Why Choose Us and Brand Showcase**
   - Build numbered capability list.
   - Build NACHI-focused product showcase without unsupported claims.

6. **Contact and Footer**
   - Build WhatsApp inquiry section.
   - Add form handling or WhatsApp composition fallback.
   - Complete footer content placeholders.

7. **Quality pass**
   - Responsive testing at 360, 768, 1024, 1280, and 1440px.
   - Keyboard and focus review.
   - Reduced-motion review.
   - Image optimization and alt text review.
   - Run `npm run lint`.
   - Run `npm run build`.

---

## 11. Acceptance Criteria

- Page feels like a premium industrial supplier, not an e-commerce template.
- All requested sections are present and clearly distinct in composition.
- Color palette and typography follow the brief.
- Product categories are easy to scan and inquire about.
- WhatsApp CTAs are prominent but not aggressive.
- No unsupported company claims or invented brand partnerships.
- No horizontal overflow at any target breakpoint.
- Mobile navigation is keyboard accessible.
- Focus states are visible and contrast is readable.
- Motion is subtle and respects reduced-motion preferences.
- `npm run lint` passes.
- `npm run build` passes.

---

## 12. Approval Questions

1. Is the supplied WhatsApp number, address, email, and social media information available now?
2. Will real product photography and a logo be supplied, or should the first build use clearly replaceable placeholder imagery?
3. Should the contact form open WhatsApp with a prefilled message, or is a form backend available?
4. Is the NACHI mention approved as available product information only, without any distributor claim?
5. Should the site be entirely Indonesian, or retain English machining terms such as “drill bits” and “carbide inserts” alongside Indonesian labels?
