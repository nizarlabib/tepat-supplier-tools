# Tepat Supplier Tools

Single-page corporate product showcase for Tepat Supplier Tools, an industrial supplier of lathe workshop equipment, machining tools, and cutting tools. The site is Indonesian-first and converts inquiries through WhatsApp.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Lucide React
- Motion

No router, backend, CMS, or product database is used.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

`npm run build` runs TypeScript first and then produces `dist/`.

## Project structure

```text
src/
  components/
    common/     Shared UI primitives
    layout/     Navbar and Footer
    sections/   One component per landing-page section
  data/
    site.ts     All editable business copy, contact details, and image references
  assets/
    fonts/      Self-hosted Manrope and Inter WOFF2 files
    images/     Local demonstration photography
  pages/
    Home.tsx    Page composition
  index.css     Tailwind theme tokens, fonts, and base styles
```

## Editing content

Most content lives in `src/data/site.ts`:

- `site`: WhatsApp number, prefilled message, phone, email, address, and hours
- `navItems`: header and footer navigation
- `hero`, `about`, `productsSection`, `advantages`, `whyChooseUs`, `brandFocus`, `contact`: section copy
- `products`: the five product categories, descriptions, applications, and images
- `socials`: social media links

To replace product or section photography, add the image to `src/assets/images/` and update the import and `image*` values in `site.ts`. Keep image alt text accurate.

The contact form does not submit to a backend. It composes a WhatsApp message from the entered values and opens `wa.me` in a new tab.

## Before launch

The repository intentionally contains demonstration content:

- Replace the dummy WhatsApp, phone, email, address, and business hours in `site.ts`.
- Replace placeholder social and legal links or remove them.
- Replace Pexels demonstration photography with client-owned images and update alt text.
- Confirm all product claims and NACHI wording. Do not claim official distributor status without approval.
- Replace `public/og-image.jpg` and add the production domain to canonical, Open Graph, and Twitter metadata in `index.html`.
- Add `public/robots.txt` and `public/sitemap.xml` once the domain is known.
- Consider converting images to WebP or AVIF before deployment.

See `HANDOFF.md` for the full implementation record and remaining launch checklist.

## Accessibility and performance notes

- Self-hosted fonts; no runtime third-party font requests.
- Reduced-motion preferences are respected.
- Mobile navigation traps focus, closes with Escape, locks body scroll, and restores focus.
- The hero image is eager-loaded with high fetch priority; below-the-fold images are lazy-loaded.
- The only intentional UI gradient is the hero image scrim used for caption legibility.
