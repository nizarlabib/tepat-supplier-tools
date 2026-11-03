# Tepat Supplier Tools - Project Handoff

**Last updated:** 2026-11-02
**Current state:** Complete static landing page, production build verified, dummy content intentionally retained for client manual replacement.
**Project root:** `/var/www/tepat-supplier-tools`
**Framework:** React + TypeScript + Vite
**Primary conversion:** WhatsApp inquiry

> Read this file first. Then read `AGENTS.md` for project rules and `DESIGN_BRIEF.md` for the original client brief. `issue.md` contains the detailed design and implementation plan, but parts of its repository audit and phase plan are historical and no longer describe the current codebase. `README.md` now documents the actual project and is the developer-facing setup guide.

---

## 1. Project Overview and Objectives

### 1.1 What this project is

A single-page corporate product showcase for **Tepat Supplier Tools**, an established supplier of lathe workshop equipment, machining tools, and industrial cutting tools.

This is not an e-commerce site. There is no cart, checkout, account system, product database, or backend. The page exists to:

1. Establish credibility for an experienced industrial tool supplier.
2. Present five product categories clearly.
3. Generate qualified inquiries through WhatsApp.

The site is Indonesian-first, with common English machining terminology retained where it is familiar to technicians.

### 1.2 Primary objectives

- Make the company feel established, specialized, and technically credible.
- Show product categories without pretending to be a mass-market catalog.
- Make WhatsApp inquiry the obvious next step without aggressive sales pressure.
- Keep content editable in one data file so the client can replace dummy content manually.
- Maintain premium visual quality across desktop, tablet, and mobile.
- Meet basic SEO, keyboard accessibility, reduced-motion, and color-contrast expectations.

### 1.3 Current status

- All requested landing-page sections are implemented.
- All content is in `src/data/site.ts` or directly in the relevant section component.
- All imagery is local and currently sourced from Pexels for demonstration.
- Fonts are self-hosted. There are no runtime third-party font requests.
- `npm run lint` passes.
- `npm run build` passes.
- Headless Chromium QA was run at 320, 360, 390, 768, 1024, 1280, 1440, and 1920 px. No horizontal overflow, broken images, console errors, page errors, or failed requests were found.
- Axe WCAG A/AA checks returned zero violations on desktop and mobile after the final accessibility fixes.
- The mobile navigation focus trap, Escape close, scroll lock, focus restoration, and WhatsApp form flow were verified.
- Dummy contact details are intentionally still present because the client said they will replace them manually.

### 1.4 Quick start

```bash
cd /var/www/tepat-supplier-tools
npm install
npm run dev
```

Production verification:

```bash
npm run lint
npm run build
npm run preview
```

Tested environment during implementation:

- Node `v22.23.2`
- npm `10.9.8`
- Vite `8.3.5`

---

## 2. Business Requirements and Target Audience

### 2.1 Business positioning

Tepat Supplier Tools should be presented as an established, knowledgeable specialist, not a generic marketplace or startup. The business supplies lathe workshop equipment, machining tools, and industrial cutting tools, and serves customers who care about application fit, availability, and practical technical guidance.

### 2.2 Target audience

- Lathe workshop owners
- Machinists and machining technicians
- Industrial workshop operators
- Businesses requiring machining tools and cutting equipment
- Procurement teams sourcing reliable industrial tool suppliers

### 2.3 Product categories

1. Mata Bor / Drill Bits
2. Hand Tap / Threading Tools
3. Insert Widia / Carbide Inserts
4. Bor NACHI / NACHI Drill Bits
5. Perkakas Machining Lainnya / Machining Accessories

### 2.4 Primary conversion paths

- Header WhatsApp button
- Hero "Hubungi Kami" button
- Hero and product category index links to `#produk`
- Product cards linking to `#kontak`
- Products-specific inquiry panel
- Brand showcase inquiry button
- Contact section direct WhatsApp, phone, email, and form
- Footer WhatsApp CTA

The contact form does not submit to a backend. It composes a prefilled message and opens `wa.me` in a new tab.

### 2.5 Business and content rules

These rules are important and must be preserved:

- Do not invent a founding year, years in business, customer counts, certifications, awards, guarantees, or distributor status.
- Present NACHI as a product reference only. Do not claim official NACHI distributor status unless the client supplies explicit approval.
- Keep claims conservative and factual.
- Do not add testimonials or certification logos unless the client provides verifiable content and permission.
- Do not add a fake brand logo wall.
- Use Indonesian as the primary language. English machining terms may remain where technicians commonly use them.
- Dummy contact details and social links must be replaced before public launch.

### 2.6 Client-supplied content still required

- Real WhatsApp number and preferred prefilled message
- Real phone, email, address, and business hours
- Official legal/trading name
- Logo files, if available
- Product photography for all five categories
- Hero, workshop, and brand-showcase photography
- Product specifications: sizes, materials, coatings, applications
- Confirmed NACHI relationship and wording
- Social media URLs
- Privacy policy and terms content
- Preferred analytics, consent, and form-backend decisions
- Production domain for canonical and Open Graph URLs

---

## 3. Approved Design Direction and Visual Identity

### 3.1 Design concept

**"Precision in Practice"**

The visual language combines industrial materiality with editorial restraint. The site should feel precise, experienced, calm, and premium. It uses large typography, asymmetric grids, generous whitespace, fine hairlines, numbered indices, and industrial blue accents used sparingly.

The signature motif is the measurement mark: short rules, crosshair marks, small index numbers, and technical captions. These reference machining and quality control without becoming decorative noise.

### 3.2 Desired impression

- Established, not experimental
- Specialist, not a general marketplace
- Premium, not luxurious or fashion-oriented
- Confident, not loud
- Technical, but warm and human

### 3.3 Avoid

- Purple/blue SaaS gradients
- Glassmorphism or frosted panels
- Neon accents or glow effects
- Repeated rounded card grids
- Generic stock photos of handshakes, smiling offices, or people pointing at screens
- Invented achievements, certifications, customer counts, or distributor claims
- Overly playful illustrations
- Excessive scroll animation, parallax, scroll-jacking, or carousels

### 3.4 Color system

**Modern Industrial Minimalist** palette:

| Token | HEX | Use |
| --- | --- | --- |
| Pure White | `#FFFFFF` | Primary background |
| Light Grey | `#F3F5F7` | Alternate section background |
| Steel Grey | `#E2E7EC` | Borders and dividers |
| Graphite | `#202A35` | Headings and primary text |
| Industrial Blue | `#315F85` | Primary brand accent |
| Blue Accent | `#2563EB` | CTA buttons and interactive elements |

Supporting tokens defined in `src/index.css`: Pure White, Light Grey, Steel Grey, Graphite, Industrial Blue, Blue Accent.

### 3.5 Color usage rules

- Pure White is the dominant background. Light Grey separates sections without clutter.
- Graphite is used for headings and primary text.
- Industrial Blue communicates brand identity; Blue Accent is reserved for primary interactions and important CTAs.
- Maintain sufficient color contrast and readability.
- Never introduce bronze, gold, or warm beige as alternative brand colors without explicit approval.
- No gradients on UI surfaces. The hero image has one subtle dark scrim gradient for caption legibility; this is intentional and should not be expanded into UI gradients.
- Borders are 1px and low contrast.

### 3.6 Typography

- Headings: **Manrope**, weights 500-700.
- Body and specifications: **Inter**, weights 400-600.
- Fallbacks: `ui-sans-serif, system-ui, sans-serif`.
- Self-hosted WOFF2 files:
  - `src/assets/fonts/manrope-latin.woff2`
  - `src/assets/fonts/inter-latin.woff2`
- Fonts are declared in `src/index.css` with `font-display: swap`.
- Pages use `font-display` for Manrope and the default sans stack for Inter.

Approved type behavior:

- Display headline: `clamp(2.75rem, 6vw, 5.5rem)`, `0.98` line-height, `-0.04em` tracking.
- Section headings: `clamp(2rem, 4vw, 3.6rem)`, `1.05` line-height, `-0.03em` tracking.
- Body: 16-18px, 1.7-1.75 line-height.
- Eyebrows: 9-11px, uppercase, 0.14-0.18em tracking.
- Product specifications: 11-14px Inter.
- Avoid all-caps body text and excessive letter-spacing.

### 3.7 Layout and spacing

- Base unit: 8px.
- Container: maximum `1320px`.
- Gutters: `24px` mobile, `40px` tablet, `64px` desktop.
- Desktop section padding: generally `128px` via `lg:py-32`.
- Tablet section padding: `96px` via `sm:py-24`.
- Mobile section padding: `80px` via `py-20`.
- Desktop grids use 12 columns with asymmetric spans such as `5/7`, `7/5`, and `4/8`.
- Hairline rules, numbered labels, and technical captions create rhythm.
- Avoid placing every section in the same card container.
- Alternate open light sections, dark statement sections, and image-led sections.

### 3.8 Graphic language

- Custom crosshair-style logo mark with an industrial blue center dot.
- Two-line wordmark: `TEPAT` / `SUPPLIER TOOLS`.
- Thin industrial blue rules and registration-style marks.
- Section indices such as `01 / Tentang Kami`.
- Small technical captions and measurement-like labels.
- Large low-contrast `TEPAT` wordmark in footer, implemented as inline SVG text.
- Lucide icons at small sizes and modest stroke weight.

### 3.9 Imagery direction

- Close-up industrial photography with visible material texture: flutes, coatings, carbide edges, threads, metal shavings.
- Neutral workshop context and controlled warm light.
- Product images use a consistent 4:3 display ratio.
- Hero image is displayed as a tall crop on desktop.
- Images have explicit width/height attributes and alt text.
- Below-the-fold images use lazy loading. Hero image uses eager loading and `fetchPriority="high"`.
- Current images are Pexels demonstration assets, not client-owned product photography.

### 3.10 Motion

- `Reveal` uses Motion for a single 16px upward fade-in, 0.55s, once per section.
- Product images scale to `1.02` on hover.
- Arrow icons translate slightly on hover.
- Header border fades in after slight scroll.
- `prefers-reduced-motion` is respected. `Reveal` renders a plain wrapper when reduced motion is requested, and global CSS reduces transitions and animations.
- No parallax, scroll-jacking, ambient animation, or auto-moving carousel.

---

## 4. Technology Stack and Architecture

### 4.1 Stack

| Area | Choice |
| --- | --- |
| UI | React `^19.3.1` |
| Language | TypeScript `^6.0.3` |
| Build | Vite `^8.3.5` |
| Styling | Tailwind CSS `^4.3.3` via `@tailwindcss/vite` |
| Icons | Lucide React `^1.66.0` |
| Animation | Motion `^14.9.0` (`motion/react`) |
| Linting | ESLint `^10.13.0` with TypeScript ESLint |
| Routing | None; single page with hash anchors |
| Backend | None |
| Fonts | Self-hosted WOFF2 |
| Images | Local JPEG assets |

No additional project dependencies were added for QA. Browser QA was run with temporary tooling outside the project.

### 4.2 Scripts

From `package.json`:

```json
{
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

There is no separate `typecheck` script. TypeScript runs as part of `npm run build`.

### 4.3 Current file structure

```text
.
├── AGENTS.md
├── DESIGN_BRIEF.md
├── HANDOFF.md
├── README.md
├── eslint.config.js
├── index.html
├── issue.md
├── package.json
├── package-lock.json
├── public/
│   ├── favicon.svg
│   └── og-image.jpg
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── assets/
│   │   ├── fonts/
│   │   │   ├── inter-latin.woff2
│   │   │   └── manrope-latin.woff2
│   │   └── images/
│   │       ├── about-machinist.jpg
│   │       ├── brand-step-drills.jpg
│   │       ├── hero-drill.jpg
│   │       ├── product-drill-bits.jpg
│   │       ├── product-hand-tap.jpg
│   │       ├── product-insert-widia.jpg
│   │       ├── product-nachi.jpg
│   │       ├── product-other-tools.jpg
│   │       └── why-lathe.jpg
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── Reveal.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   └── SectionIndex.tsx
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   └── sections/
│   │       ├── About.tsx
│   │       ├── BrandShowcase.tsx
│   │       ├── Contact.tsx
│   │       ├── Hero.tsx
│   │       ├── Products.tsx
│   │       └── WhyChooseUs.tsx
│   ├── data/
│   │   └── site.ts
│   └── pages/
│       └── Home.tsx
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### 4.4 Architecture rules

- Each landing-page section is a separate component in `src/components/sections/`.
- Shared UI lives in `src/components/common/`.
- Layout chrome lives in `src/components/layout/`.
- Static content should stay in `src/data/site.ts`.
- Section components should read from data instead of hardcoding business copy where practical.
- Use semantic HTML: `header`, `nav`, `main`, `section`, `article`, `footer`, `h1`-`h3`, `dl`, `dt`, `dd`, `ul`, `li`, `form`, `label`.
- Avoid `any`. Prefer explicit interfaces.
- Avoid unnecessary dependencies.
- Keep responsive behavior intact at every change.
- Run `npm run lint` and `npm run build` after code changes.

### 4.5 Data model

`src/data/site.ts` exports:

- Interfaces: `NavItem`, `ProductCategory`, `Advantage`, `BrandSpec`, `SocialLink`
- `site`: company name, tagline, description, WhatsApp number/display/message, email, phone, address, hours
- `whatsappHref`: computed `wa.me` URL for default inquiry
- `navItems`
- `hero`
- `about`
- `products` (five categories)
- `productsSection` (Products heading and inquiry panel copy)
- `advantages` (five items)
- `whyChooseUs`
- `brandFocus`
- `contact`
- `socials` (currently placeholder `#` links)

Images are imported at the top of `site.ts` and referenced through data objects.

### 4.6 Styling architecture

- Tailwind CSS v4 with theme tokens in `src/index.css`.
- No `tailwind.config.js`; theme is defined in CSS using `@theme`.
- Base styles include box sizing, smooth scrolling, text wrapping, image display, focus-visible outline, selection color, and reduced-motion handling.
- Utility classes are used directly in components.
- Shared spacing is handled through `Container`.
- There are no CSS modules or styled-components.

### 4.7 Build output

Latest verified production build:

- 2493 modules transformed
- JS: approximately `394.49 kB` (`123.85 kB` gzip)
- CSS: approximately `28.72 kB` (`6.23 kB` gzip)
- Largest image: `brand-step-drills` at approximately `477.69 kB`
- Fonts: Manrope `24.53 kB`, Inter `48.25 kB`
- Images total approximately `1.5 MB` in source

`dist/` is generated and gitignored.

---

## 5. Approved Design Decisions Already Made

These decisions should be preserved unless the client explicitly changes direction.

1. **Dummy content is intentionally retained.** The client said they will replace it manually. Do not replace dummy contact details or product copy unless explicitly asked.
2. **Single-page architecture.** No React Router, no separate product pages, no backend.
3. **WhatsApp-first conversion.** All primary CTAs lead to WhatsApp or the contact form that opens WhatsApp.
4. **NACHI is a product reference only.** The brand showcase explicitly says availability and types should be confirmed. Do not turn it into an official distributor claim.
5. **Indonesian-first copy.** English technical terms such as "machining", "drill bits", "carbide inserts", and "threading tools" remain for audience familiarity.
6. **Premium minimalist industrial direction.** No generic SaaS patterns, rounded card grids, fake logo walls, or decorative gradients.
7. **Asymmetric editorial layouts.** About uses `5/7`, hero uses `7/5`, products use staggered `7/5` and `5/7`, brand showcase uses `7/5`, contact uses a split panel.
8. **Self-hosted fonts.** No Google Fonts runtime requests. The current font files are Latin subsets.
9. **Accessible industrial-blue usage.** Use Industrial Blue for small text on dark surfaces and Blue Accent for primary interactions/important CTAs with sufficient contrast. Bronze is retired from the approved palette.
10. **Footer wordmark is an inline SVG.** It is decorative, low-contrast, and `aria-hidden`. SVG was chosen specifically because a low-contrast HTML text node triggered a false-positive axe color-contrast violation. Do not convert it back to HTML text without re-running accessibility checks.
11. **Header behavior at 1024px.** Desktop navigation begins at `lg`, but the phone number is hidden until `xl` to prevent crowding. The logo uses `shrink-0` and the wordmark subtitle uses `whitespace-nowrap`. This was added after visual QA showed wrapping at 1024px.
12. **Footer column balance.** Footer grid columns are brand `3/12`, navigation `2/12`, products `3/12`, contact `4/12`. Social links use tight `gap-x-2` so all three fit on one line at 1024px.
13. **Hero image scrim exception.** The hero image has a subtle Graphite gradient scrim for caption readability. This is the only intentional UI gradient.
14. **Product cards are image-led.** The image area is a link to `#kontak` and includes an arrow icon. The accessible name is "Tanya ketersediaan [product]". There is no visible standalone inquiry text link.
15. **Contact form is client-side only.** It composes a WhatsApp message from name, company, phone, interest, and message. It opens a new tab with `noopener,noreferrer`.
16. **No active-section navigation state.** The design brief mentioned a bronze active underline; an industrial-blue hairline underline is implemented. This is an optional enhancement, not a blocker.
17. **QA was automated with temporary Playwright tooling.** No Playwright dependency or test suite was added to the project.

---

## 6. Components and Features Implemented

### 6.1 Application shell

| File | Responsibility |
| --- | --- |
| `src/main.tsx` | React root, StrictMode, global CSS import |
| `src/App.tsx` | Renders `Home` |
| `src/pages/Home.tsx` | Skip link, `Navbar`, `main`, all six sections, `Footer` |
| `index.html` | `lang="id"`, viewport, theme color, description, Open Graph/Twitter metadata, favicon, root mount |
| `src/index.css` | Tailwind import, self-hosted fonts, theme tokens, base styles, reduced motion |

### 6.2 Layout components

**`src/components/layout/Navbar.tsx`**

- Sticky header at top, 80px high.
- Transparent bottom border until scroll passes 12px, then hairline border.
- Logo at left.
- Desktop nav from `lg`: Home, Tentang Kami, Produk, Keunggulan, Kontak.
- Active section is tracked on scroll. The current desktop link gets a bronze hairline underline and `aria-current="location"`; mobile links receive the same `aria-current` value.
- Desktop actions: WhatsApp button from `lg`; phone number only from `xl`.
- Mobile menu trigger below `lg`.
- Mobile panel is a full-screen Warm White dialog.
- Mobile panel includes logo, close button, numbered navigation links, WhatsApp CTA, phone, and email.
- Focus trap implemented for Tab and Shift+Tab.
- Escape closes and restores focus to the menu trigger.
- Body scroll locked while open.
- Focus moves to close button when opened.
- Menu link click closes the panel and restores focus.
- `aria-expanded`, `aria-controls`, `aria-modal`, dialog label, and nav labels are present.

**`src/components/layout/Footer.tsx`**

- Ink background.
- Top closing statement and WhatsApp CTA.
- Four-column desktop grid: brand, navigation, products, contact.
- Contact column includes phone, email, address, hours, and social placeholders.
- Social links currently point to `#`.
- Giant decorative `TEPAT` wordmark rendered as inline SVG.
- Bottom copyright, privacy placeholder, terms placeholder, and back-to-top link.
- Footer section numbered `06 / Hubungi Kami`, after contact `05`.

### 6.3 Shared components

| File | Responsibility |
| --- | --- |
| `Container.tsx` | Max 1320px container with responsive gutters |
| `Button.tsx` | Anchor-based CTA with `primary`, `outline`, `light`, and `dark` variants |
| `Logo.tsx` | Crosshair mark, two-line wordmark, light/dark tone, sticky-safe sizing |
| `ProductCard.tsx` | Product image, arrow overlay, index, English name, Indonesian name, description, applications |
| `Reveal.tsx` | Motion fade/translate reveal that becomes a plain wrapper under reduced motion |
| `SectionHeading.tsx` | Section index, eyebrow, heading, optional description, light/dark tone |
| `SectionIndex.tsx` | Numbered index, industrial-blue rule, label, accessible color variants |

`Button` is anchor-only. The contact form uses a native `<button type="submit">` because it is a form action, not navigation.

### 6.4 Sections

**Hero - `src/components/sections/Hero.tsx`**

- `id="home"`, `scroll-mt-20`.
- Asymmetric 7/5 layout on desktop, stacked on mobile.
- Eyebrow with industrial-blue rule.
- H1 with industrial-blue accent on "bengkel bubut".
- Supporting paragraph.
- Primary "Jelajahi Produk" CTA and secondary "Hubungi Kami" WhatsApp CTA.
- Three conservative proof points, not statistics.
- Hero image with high fetch priority, explicit dimensions, dark scrim, and Pure White caption panel.
- Product category index strip below the hero. Horizontally scrollable on mobile.
- Hero image is 430px mobile, 540px tablet, full/min 650px desktop.

**About - `src/components/sections/About.tsx`**

- `id="tentang"`, `scroll-mt-20`.
- 5/7 split on desktop.
- Section index `01`, eyebrow, heading, two paragraphs.
- Link to `#produk`.
- Workshop image with caption and `02 / Workshop` technical label.
- Three support points in hairline-separated rows.
- No founding year or unsupported achievements.

**Products - `src/components/sections/Products.tsx`**

- `id="produk"`, `scroll-mt-20`.
- Paper Bright background.
- Section heading uses hardcoded index `02` and eyebrow "Kategori Produk".
- Guidance paragraph on the right.
- Five product cards in an asymmetric staggered grid.
- Dark inquiry panel at the end of the grid with WhatsApp CTA.
- Cards link to the contact section rather than opening WhatsApp directly.

**Why Choose Us - `src/components/sections/WhyChooseUs.tsx`**

- `id="keunggulan"`, `scroll-mt-20`.
- Full dark Charcoal section.
- Left side: heading, description, workshop image, inset note panel.
- Right side: five numbered advantages separated by hairlines.
- Uses Industrial Blue on dark for small blue labels.
- No feature cards.

**Brand Showcase - `src/components/sections/BrandShowcase.tsx`**

- No section id; not linked from navigation.
- 7/5 split.
- Large step-drill image with `NACHI` caption panel.
- Section index `04`, eyebrow "Fokus Produk".
- Heading and description frame NACHI as available product information only.
- Specification rows for category, application, and availability.
- Explicit note that availability can change and should be confirmed via WhatsApp.
- WhatsApp CTA.

**Contact - `src/components/sections/Contact.tsx`**

- `id="kontak"`, `scroll-mt-20`.
- Split panel: dark contact panel and light form panel.
- Direct WhatsApp, email, phone, and address links.
- Form fields: name, company, phone, interest, message.
- Native required validation.
- On submit: prevents default, reads `FormData`, composes a multiline WhatsApp message, opens `wa.me` in a new tab.
- Select options are populated from `products`, plus "Lainnya".
- No backend or success state because the user is handed off to WhatsApp.

### 6.5 Accessibility features

- Skip link in `Home`.
- Semantic landmarks and heading order.
- One H1 in Hero.
- Visible focus outline globally.
- Keyboard-accessible mobile menu with focus trap.
- Escape-to-close and focus restoration.
- Body scroll lock while mobile menu is open.
- Descriptive alt text for images.
- `aria-label` on product card links and social links.
- Decorative SVGs and marks use `aria-hidden`.
- Reduced-motion support.
- Color contrast fixes verified with axe.
- Footer wordmark is hidden from assistive technology.
- Touch targets meet 44px minimum in key actions and menu controls.

### 6.6 SEO features

- Indonesian `lang`.
- Title: `Tepat Supplier Tools | Perlengkapan Bengkel Bubut & Perkakas Industri`.
- Meta description focused on drill bits, hand taps, carbide inserts, NACHI drill bits, and machining tools.
- Open Graph type, locale, site name, title, description, and image.
- Twitter card metadata and image.
- Theme color.
- Custom SVG favicon.
- OG image currently uses the hero image and is stored at `public/og-image.jpg`.

---

## 7. Files Modified

There is no Git repository in this workspace, so an exact diff against the original scaffold is not available. The following is based on the current tree and the implementation record.

### 7.1 Created or fully rewritten implementation files

- `index.html`
- `src/App.tsx`
- `src/index.css`
- `src/pages/Home.tsx`
- `src/data/site.ts`
- `src/components/common/Button.tsx`
- `src/components/common/Container.tsx`
- `src/components/common/Logo.tsx`
- `src/components/common/ProductCard.tsx`
- `src/components/common/Reveal.tsx`
- `src/components/common/SectionHeading.tsx`
- `src/components/common/SectionIndex.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/Navbar.tsx`
- `src/components/sections/About.tsx`
- `src/components/sections/BrandShowcase.tsx`
- `src/components/sections/Contact.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/Products.tsx`
- `src/components/sections/WhyChooseUs.tsx`
- `src/assets/fonts/inter-latin.woff2`
- `src/assets/fonts/manrope-latin.woff2`
- `src/assets/images/about-machinist.jpg`
- `src/assets/images/brand-step-drills.jpg`
- `src/assets/images/hero-drill.jpg`
- `src/assets/images/product-drill-bits.jpg`
- `src/assets/images/product-hand-tap.jpg`
- `src/assets/images/product-insert-widia.jpg`
- `src/assets/images/product-nachi.jpg`
- `src/assets/images/product-other-tools.jpg`
- `src/assets/images/why-lathe.jpg`
- `public/favicon.svg`
- `public/og-image.jpg`
- `issue.md`
- `HANDOFF.md`

### 7.2 Removed Vite starter or unused files

- `src/App.css`
- Starter React/Vite image assets such as `src/assets/react.svg` and `public/vite.svg`
- Empty placeholder section components from the original scaffold, including `Services.tsx`, `Statistics.tsx`, `Portfolio.tsx`, and `Testimonials.tsx`
- Unused `public/icons.svg` if present in the original scaffold

### 7.3 Reference files not part of the implementation

- `AGENTS.md` - project rules. Do not delete.
- `DESIGN_BRIEF.md` - original client brief. Keep as source reference.
- `README.md` - developer-facing project documentation covering setup, scripts, content editing, and launch placeholders.
- `package.json` and `package-lock.json` - current dependency set. No new runtime dependencies were added for the landing page.
- `eslint.config.js`, `tsconfig*.json`, `vite.config.ts` - standard project configuration.

### 7.4 Generated files

- `dist/` - production output, gitignored.
- `node_modules/` - installed dependencies, gitignored.

---

## 8. Outstanding Tasks and Known Issues

### 8.1 Required before public launch

| Priority | Task | Details |
| --- | --- | --- |
| High | Replace dummy contact data | Update `whatsappNumber`, `whatsappDisplay`, `whatsappMessage`, `email`, `phone`, `address`, and `hours` in `src/data/site.ts`. |
| High | Replace social placeholders | `socials` currently uses `#`. Add real Instagram, Facebook, and LinkedIn URLs or remove the links. |
| High | Replace legal placeholders | Footer privacy and terms links currently point to `#`. Add real pages/URLs or remove them. |
| High | Replace demonstration photography | Current Pexels images are placeholders. Replace with client-owned product and workshop photography, update alt text, and replace `public/og-image.jpg`. |
| High | Confirm product claims | Verify all product descriptions and NACHI wording. Do not claim official distributor status without approval. |
| High | Add absolute social metadata | `og:image` and Twitter image are relative. Add the production domain and absolute URLs, plus canonical and `og:url`, after deployment. |
| High | Deploy production build | Host `dist/` on the chosen static host, configure HTTPS and redirects, and verify the real domain. |
| Medium | Optimize images | Convert JPEGs to WebP/AVIF, add responsive `srcset` where useful, and reduce the largest images. `brand-step-drills.jpg` is about 468 KB source / 478 KB build output. |
| Medium | Add sitemap and robots.txt | Create `public/robots.txt` and `public/sitemap.xml` with the production domain. |
| Medium | ~~Replace stale README~~ | Done. `README.md` documents install, development, build, content editing, launch placeholders, and deployment notes. |
| Medium | Decide analytics and consent | No analytics or cookie consent exists. Add only with client approval and privacy review. |
| Medium | Decide form backend | Current form opens WhatsApp. If a backend is required, preserve the WhatsApp fallback and add submission states/error handling. |

### 8.2 Optional enhancements

- ~~Add active-section underlines in the desktop navbar.~~ Done: active links use an industrial-blue hairline underline and `aria-current="location"`.
- Add a visible "Tanya ketersediaan" text link to each product card while preserving the image link and arrow.
- ~~Move the hardcoded Products section index and eyebrow into `src/data/site.ts`.~~ Done: the section heading and inquiry panel copy now live in `productsSection`.
- Add product-specific WhatsApp prefill when a product card is clicked, instead of always linking to the contact section.
- Add a lightweight Playwright or Vitest smoke test suite if ongoing development warrants it.
- Add a branded OG image with the TEPAT wordmark rather than reusing the hero photo.
- Add favicon PNG/apple-touch variants if required by the deployment target.
- Add `og:url`, canonical, and structured data once the production domain is known.
- Consider `srcset`/`picture` for art-directed responsive images.
- Add a dedicated 404 page if the host requires one. This is currently a single-page site.

### 8.3 Known issues and intentional non-issues

- **Dummy data is intentionally misleading until replaced.** The WhatsApp number, phone, email, address, social links, and product claims are placeholders.
- **Legal links are placeholders.** They are not real policies.
- **No backend.** Form submission opens WhatsApp and cannot confirm delivery or handle failures.
- **Active nav state is cooperative with hash scrolling.** It is based on section positions with a 120px offset, so the underline may switch slightly before a section reaches the header.
- **No visible product inquiry text link.** The product image and arrow are the link, with an accessible label.
- **No section id on Brand Showcase.** It is not linked from navigation. Add `id` only if navigation is expanded.
- **Hero category strip is intentionally horizontally scrollable on mobile.** It must not cause page-level horizontal overflow.
- **The hero image uses a subtle dark gradient scrim.** This is deliberate for caption legibility and is an approved exception to the no-gradient rule.
- **Footer wordmark is nearly invisible by design.** It is decorative, low-contrast, and hidden from assistive technology.
- **Phone is hidden below `xl` in the header.** This prevents header crowding at 1024px. The phone remains available in the mobile menu, contact section, and footer.
- **Footer social links use tight spacing at 1024px.** This keeps all three links on one line. Changing footer column spans or social text tracking can reintroduce wrapping.
- **Product images have varied original dimensions but are displayed at 4:3 with `object-cover`.** Replacing images should preserve a useful focal point.
- **`issue.md` contains historical content.** Its repository audit describes the empty scaffold, not the finished implementation. Use this handoff as the current source of truth.

---

## 9. Important Implementation Constraints

1. **Do not add unnecessary dependencies.** The existing stack is sufficient.
2. **Do not add React Router for this single page.** Use hash anchors and section IDs.
3. **Keep content out of section components where practical.** Business copy and assets belong in `src/data/site.ts`.
4. **Keep sections separate and components reusable.** Avoid oversized section files.
5. **Keep the Indonesian-first tone.** Do not translate the entire site into English.
6. **Do not invent business facts.** No founding year, customer count, awards, certifications, guarantees, or official brand partnerships.
7. **Treat NACHI carefully.** Product reference only unless explicit authorization is supplied.
8. **Preserve the WhatsApp-first flow.** It is the primary business conversion.
9. **Preserve the dummy data until the client replaces it.** The client explicitly said they will replace it manually.
10. **Use explicit TypeScript types.** Avoid `any`.
11. **Use semantic HTML.** Preserve landmark structure, heading order, labels, and alt text.
12. **Maintain AA color contrast.**
    - Industrial Blue `#315F85` on dark surfaces.
    - Blue Accent `#2563EB` on light surfaces for small text and primary interactions.
13. **Maintain responsive behavior.** Test at minimum 320, 390, 768, 1024, 1280, and 1440px.
14. **No horizontal page overflow.** Intentional inner horizontal scroll is limited to the hero category strip.
15. **Preserve reduced-motion behavior.** Do not introduce animation that ignores `prefers-reduced-motion`.
16. **Self-host fonts.** Do not reintroduce Google Fonts runtime requests.
17. **Keep the footer wordmark as SVG text.** It exists specifically to remain decorative and accessible.
18. **Keep header crowding fixes.** Logo `shrink-0`, subtitle `whitespace-nowrap`, phone hidden below `xl`.
19. **Keep footer social spacing.** The current `gap-x-2` and tracking prevent 1024px clipping.
20. **Run `npm run lint` and `npm run build` after changes.**
21. **Follow `AGENTS.md`.** Read the project before modifying, create an `issue.md` entry for major changes, work incrementally, and do not touch unrelated components.
22. **Do not commit generated `dist/`.** It is gitignored.
23. **Do not assume real content is approved.** The client will replace dummy content manually.
24. **The site has no backend.** Any form backend is a new decision and needs client approval.
25. **Production URLs are unknown.** Absolute canonical and OG URLs cannot be finalized until the client supplies the domain.

---

## 10. Exact Next Steps for Continuing Development

### Phase 0 - Safe start

1. Read `HANDOFF.md`, `AGENTS.md`, and `DESIGN_BRIEF.md`.
2. Skim `src/data/site.ts` and `src/pages/Home.tsx` to understand content flow.
3. Run `npm install` if `node_modules` is absent.
4. Run `npm run lint` and `npm run build` to confirm the baseline still passes.
5. Run `npm run dev` and visually inspect desktop, tablet, and mobile.
6. Do not replace dummy content unless the client explicitly asks.

### Phase 1 - Client-managed content replacement

When the client supplies approved content:

1. Update all contact and company values in `src/data/site.ts`.
2. Update `socials` with real URLs or remove the links.
3. Replace product descriptions, applications, and English labels with approved copy.
4. Confirm NACHI wording and remove any implication of official distributor status unless approved.
5. Replace images in `src/assets/images/` while keeping imports in `site.ts` valid.
6. Update every corresponding `imageAlt` value to describe the new image accurately.
7. Replace `public/og-image.jpg` with a branded image, ideally 1200x630.
8. Update `index.html` title, description, Open Graph, and Twitter metadata if the copy changes.
9. Replace footer legal links with real pages/URLs or remove them.
10. Run `npm run lint` and `npm run build`.
11. Re-run browser QA at 320, 390, 768, 1024, 1280, and 1440px.
12. Re-check mobile menu focus, form submission, keyboard navigation, and reduced motion.
13. Re-run axe or another accessibility check after content and color changes.

### Phase 2 - Production and SEO launch

1. Obtain the production domain.
2. Add absolute `og:image`, Twitter image, canonical URL, and `og:url`.
3. Add `public/robots.txt` and `public/sitemap.xml`.
4. Decide whether to add analytics and cookie consent. If yes, update the privacy policy first.
5. Deploy `dist/` to the chosen static host.
6. Verify HTTPS, redirects, 404 behavior, and social preview images.
7. Test the live WhatsApp number and prefilled messages on iOS and Android.
8. Confirm the real phone, email, address, and hours are correct.
9. Confirm all images are client-owned or properly licensed.
10. Re-run the full responsive and accessibility checklist on the deployed URL.

### Phase 3 - Optional code improvements

Only after the client confirms they are wanted:

1. ~~Add active desktop navigation state based on the current section.~~ Done.
2. Add visible "Tanya ketersediaan" text links to product cards.
3. ~~Move hardcoded Products heading data into `site.ts`.~~ Done via `productsSection`.
4. Add product-specific WhatsApp prefills from product cards.
5. Convert images to WebP/AVIF and add `srcset`/`picture`.
6. Add a branded OG image and favicon variants.
7. Add a Playwright smoke test for navigation, mobile menu, form, and overflow.
8. Add structured data for the organization and local business if accurate.
9. Add a real privacy policy and terms page.
10. Add a form backend only if the client prefers it over WhatsApp.

### Verification checklist after any change

```bash
npm run lint
npm run build
npm run preview
```

Manual and browser checks:

- Page loads with no console errors or failed requests.
- No horizontal page overflow at 320, 360, 390, 768, 1024, 1280, 1440, and 1920px.
- Navbar does not wrap or crowd at 1024px.
- Mobile menu opens, traps focus, closes with Escape, restores focus, and locks body scroll.
- All section anchors scroll to the correct section without being hidden behind the sticky header.
- All images load and have useful alt text.
- All WhatsApp CTAs open a valid prefilled chat.
- Contact form opens WhatsApp with the entered values.
- Keyboard-only navigation is possible throughout.
- Reduced-motion mode removes or minimizes animation.
- Contrast remains AA for normal text.
- Footer social links fit on one line at 1024px.
- Footer wordmark remains decorative and hidden from assistive technology.
- `npm run lint` passes.
- `npm run build` passes.

### Definition of done for the next phase

The project is ready for public launch when:

- Real business contact details are in place.
- Real, licensed imagery and logo are in place.
- Product claims and NACHI wording are approved.
- Legal links and privacy content are resolved.
- Production domain metadata is configured.
- The deployed site passes the responsive, keyboard, contrast, WhatsApp, and form checks above.
- `npm run lint` and `npm run build` pass on the final content.