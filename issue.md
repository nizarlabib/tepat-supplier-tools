# ISSUE: Product-Focused Website Enhancement

## Project Context

Build and enhance the company website for **Tepat Supplier Tools**, a long-established supplier of lathe workshop and machining tools such as drill bits, hand taps, carbide inserts, NACHI products, and other machining accessories.

The project uses:

- Vite
- React
- TypeScript
- Tailwind CSS v4
- Lucide React

Before making changes, read `DESIGN_BRIEF.md` and `AGENTS.md` if they exist. Inspect the existing project structure, routes, components, styling, and product data before implementing anything.

Follow the existing architecture and coding conventions. Reuse existing components wherever possible. Do not perform an unrelated redesign.

---

## 1. Design Direction

Use a **Premium Modern Industrial Minimalist** visual direction.

### Color Palette

- Pure White: `#FFFFFF`
- Light Grey: `#F3F5F7`
- Steel Grey: `#E2E7EC`
- Graphite: `#202A35`
- Industrial Blue: `#315F85`
- Blue Accent: `#2563EB`

### Design Guidelines

- Clean, modern, professional, and industrial.
- Use clear typography and strong visual hierarchy.
- Keep sufficient whitespace.
- Use subtle borders and restrained shadows.
- Avoid excessive gradients.
- Avoid bronze, gold, beige, or warm vintage colors.
- Avoid generic marketplace-style design.
- Ensure responsive behavior on desktop, tablet, and mobile.

The website is a **company profile and product information website**, not an e-commerce platform.

Do not implement shopping cart, checkout, online payment, product pricing, or stock indicators.

---

## 2. Homepage

The homepage should prioritize products and make the company look professional and trustworthy.

### A. Main Hero Banner

Improve the existing main banner.

Requirements:

- Use a full-width hero banner with an attractive, high-quality industrial machining image.
- Replace the current image if it looks generic, outdated, low-quality, or visually uninteresting.
- Find a more compelling image that represents the company's industry, such as:
  - CNC machining process.
  - Metal lathe workshop.
  - Industrial cutting tools in action.
  - Precision machining and metalworking.
- Prefer authentic industrial photography with strong composition, professional lighting, and high resolution.
- Search suitable images from reliable sources such as Unsplash or Pexels. Check existing project assets first before introducing a new image.
- Use an image with enough negative space for readable headline and CTA placement.
- Apply a subtle dark overlay or gradient only when needed to maintain text readability.
- Keep the main headline, supporting text, and CTA visually prominent.
- Make the banner responsive and ensure the image crop remains attractive on mobile.
- Do not use an image that contains unrelated industries or products.

The hero must feel visually impactful and establish the industrial identity of Tepat Supplier Tools.

### B. Product Showcase

Create a product showcase section on the homepage.

Requirements:

- Display products using a horizontal carousel.
- Reuse the centralized product data source described in the Product Data section.
- Each product card should display:
  - Product image.
  - Product name.
  - Brand, if available.
  - Short description.
- Provide carousel navigation controls.
- Use CSS scroll-snap or another lightweight implementation.
- Avoid adding unnecessary carousel dependencies.
- Include a CTA button: **Lihat Semua Produk**.
- The CTA must navigate to `/produk`.

### C. About Us

Move the About Us section below the product showcase.

It should contain a concise company introduction, experience, and business focus.

Keep the content professional and avoid making this section visually more dominant than the product showcase.

### D. Contact CTA

Add a clear contact CTA after the About Us section.

Encourage visitors to contact the company for product inquiries or further information.

Reuse existing contact information and links if available. Do not invent phone numbers, email addresses, or social media accounts.

### E. Homepage Order

Use this section order:

1. Navbar
2. Full-width Hero Banner
3. Product Showcase Carousel
4. About Us
5. Existing supporting sections, if relevant
6. Contact CTA
7. Footer

---

## 3. Dedicated Product Catalog Page (`/produk`)

Create or improve a dedicated product catalog page.

### A. Compact Full-width Banner

Add a compact full-width banner below the global Navbar.

Requirements:

- Smaller height than the homepage hero.
- Use an industrial-themed image or a suitable variation of the homepage visual.
- Keep the title and supporting text readable.
- The banner should introduce the product catalog without taking too much vertical space.

### B. Catalog Header and Breadcrumb

Below the banner, display:

- Breadcrumb navigation.
- Page heading, such as "Produk Kami".
- Short introductory description.

### C. Search Bar

Add a product search bar above the catalog content.

Search requirements:

- Search by product name, brand, and description.
- Case-insensitive matching.
- Search runs on the client side using the centralized product data.
- The search input should update immediately as the user types.
- Implement **debounced search with a 300 ms delay** before applying the search filter.
- Do not execute filtering on every keystroke.
- Use `setTimeout` and cleanup with `clearTimeout` inside `useEffect`, or an existing reusable debounce utility if the project already has one.
- Avoid adding a new dependency just for debounce.
- Show a clear button when the search input has a value.
- Clearing the search should restore the full product list, subject to the selected category.
- Keep the input responsive and accessible.

Use separate state for the immediate input value and the debounced search query when necessary.

The filtering pipeline should use the debounced query:

`Products → Debounced Search Filter → Category Filter → Pagination → Product Grid`

Category changes should apply immediately; only text search needs debounce.

When the debounced search query changes, reset the current page to page 1.

### D. Category Filter

Create a category filter sidebar on the left side of the catalog.

Available categories:

1. Semua Produk
2. Mata Bor
3. Hand Tap
4. Insert Widia
5. Aksesoris Machining

Requirements:

- Use a dropdown, collapsible accordion, or simple vertical category list.
- Do not use horizontal navigation chips.
- Clearly indicate the currently selected category.
- Selecting a category filters products immediately.
- Search and category filtering must work together.
- Selecting another category resets pagination to page 1.

On mobile:

- Do not force a permanent sidebar.
- Provide a category filter button that opens a compact dropdown, drawer, or collapsible section.
- Keep the experience easy to use on small screens.

### E. Product Grid

Display products in a responsive grid.

Suggested layout:

- Desktop: 3 columns.
- Tablet: 2 columns.
- Mobile: 1 or 2 columns depending on available width.

Each product card should display:

- Product image.
- Product name.
- Brand, if available.
- Short description.

Keep cards consistent in height and image proportions.

Do not display:

- Product price.
- Rating.
- Stock availability.
- Add-to-cart button.
- Checkout button.
- Unnecessary product specifications.

No product detail page is required for this task.

### F. Pagination

Implement client-side pagination.

Requirements:

- Default: 9 products per page.
- Display previous and next buttons.
- Display page numbers.
- Highlight the active page.
- Disable previous/next when unavailable.
- Hide pagination if the filtered result only has one page.
- Reset to page 1 when the debounced search query or category changes.
- Apply filtering before pagination.
- Ensure changing pages does not lose the current search query or category selection.

### G. Empty State

When no products match the current search and category:

- Display a clear empty state.
- Show a message such as "Produk tidak ditemukan".
- Provide a reset button.
- Reset should clear the search input, reset the category to Semua Produk, and return pagination to page 1.

### H. About Us and Contact CTA

Place About Us below the complete product catalog and pagination.

Place the Contact CTA after About Us.

Products must remain the primary focus of this page.

### I. Product Page Order

Use this order:

1. Navbar
2. Compact Full-width Banner
3. Breadcrumb and Catalog Header
4. Search Bar
5. Category Sidebar + Product Grid
6. Pagination
7. About Us
8. Contact CTA
9. Footer

---

## 4. Centralized Product Data

Create or reuse a centralized product data source, preferably:

`src/data/products.ts`

Both the homepage carousel and `/produk` catalog must use the same product data.

Preserve existing dummy product records and product images whenever possible.

Suggested TypeScript structure:

```ts
export interface Product {
  id: string;
  name: string;
  brand?: string;
  category: string;
  description: string;
  image: string;
  isDemo?: boolean;
}
```

Use the existing project structure if a suitable centralized data source already exists.

Do not duplicate product records across pages.

Ensure category values are consistent with the available category filters.

---

## 5. Frontend Data and Future API Documentation

Create a documentation file:

`docs/FRONTEND_DATA_CONTRACT.md`

This document is important because the website currently uses local dummy data, but may later consume a backend API built with Go.

**Do not build the backend API now.** The goal is to document the data requirements and establish a clear contract between the future API and frontend.

The documentation must describe every data structure currently used by the website and identify the keys that a future API needs to provide.

### A. Document the Current Frontend Data

Inspect the actual implementation and document all relevant data, including:

1. Products.
2. Product categories.
3. Homepage hero banner.
4. About Us content.
5. Contact information.
6. Navigation links, if they are data-driven.
7. Footer content, if it contains configurable company information.

For each structure, document:

- Field/key name.
- Data type.
- Required or optional.
- Description and purpose.
- Example value.
- Whether the value is currently hardcoded or expected from the future API.

Do not document fields that are not actually used without clearly identifying them as proposed future fields.

### B. Product Data Contract

Document a recommended product structure for future API integration.

Suggested fields:

| Key | Type | Required | Description |
|---|---|---|---|
| id | string | Yes | Unique product identifier |
| slug | string | Yes | URL-friendly product identifier |
| name | string | Yes | Product name |
| brand | string or null | No | Product brand, e.g. NACHI |
| category_id | string | Yes | Reference to product category |
| description | string | Yes | Short product description |
| image_url | string or null | No | Main product image URL |
| image_alt | string or null | No | Accessible image description |
| is_active | boolean | Yes | Whether product is published |
| created_at | string or null | No | Creation timestamp |
| updated_at | string or null | No | Last update timestamp |

This is a proposed API contract. Adapt it to the existing frontend data where necessary, but keep the naming consistent and document any mapping.

`isDemo` or similar dummy-data flags should remain frontend fixture metadata, not a required public API field.

### C. Product Category Data Contract

Document the recommended category structure:

| Key | Type | Required | Description |
|---|---|---|---|
| id | string | Yes | Unique category identifier |
| name | string | Yes | Display name |
| slug | string | Yes | Stable category identifier for filtering |
| description | string or null | No | Optional category description |
| is_active | boolean | Yes | Whether category is available |
| sort_order | number | No | Display order |

Use stable category slugs such as:

- `mata-bor`
- `hand-tap`
- `insert-widia`
- `aksesoris-machining`

"Semua Produk" should be treated as a frontend filter option, not a real category record returned by the API.

### D. Homepage and Company Content

Document the data required by the homepage and company profile.

Suggested structures:

**Hero Banner**

| Key | Type | Required | Description |
|---|---|---|---|
| title | string | Yes | Main heading |
| subtitle | string | No | Supporting text |
| image_url | string | Yes | Hero image URL |
| image_alt | string | No | Image accessibility text |
| cta_label | string | No | CTA button label |
| cta_url | string | No | CTA destination |

**About Us**

| Key | Type | Required | Description |
|---|---|---|---|
| title | string | Yes | Section heading |
| description | string | Yes | Company introduction |
| image_url | string or null | No | Company image |
| image_alt | string or null | No | Image accessibility text |

**Contact Information**

| Key | Type | Required | Description |
|---|---|---|---|
| heading | string | Yes | Contact CTA heading |
| description | string | No | Supporting text |
| phone | string or null | No | Contact phone number |
| email | string or null | No | Contact email |
| whatsapp_url | string or null | No | WhatsApp contact URL |
| address | string or null | No | Company address |

Only include social media, footer, and navigation fields if the current website actually uses them or they are clearly useful for future content management.

### E. Recommended Future API Endpoints

Document suggested endpoints without implementing them.

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/v1/products` | Get product list with search, category, and pagination |
| GET | `/api/v1/products/{slug}` | Get a single product if a detail page is introduced later |
| GET | `/api/v1/categories` | Get active product categories |
| GET | `/api/v1/site-content` | Get company profile, hero, contact, and other website content |

For the product listing endpoint, document these query parameters:

| Parameter | Type | Example | Description |
|---|---|---|---|
| search | string | `nachi` | Search product name, brand, and description |
| category | string | `mata-bor` | Filter using category slug |
| page | integer | `1` | Current page |
| per_page | integer | `9` | Number of products per page |

The future backend should handle search, category filtering, and pagination. The current frontend implementation should continue using local data and client-side filtering.

### F. Example API Response

Include a realistic example for `GET /api/v1/products`.

Recommended response:

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

This is an illustrative contract, not real product data.

Also provide an example response for categories and site content where useful.

### G. Future Frontend Integration Notes

Document how the current frontend data maps to the proposed API response.

Include:

- Which components consume product data.
- Which components consume category data.
- Which homepage sections consume site content.
- Which fields are required to render each component.
- How the frontend should handle nullable or missing optional fields.
- How image URLs should be consumed.
- How API pagination metadata maps to the catalog pagination UI.
- Which dummy data files can eventually be replaced by API service calls.

Keep the documentation practical and easy for a future developer to follow.

**Important:** Do not create unnecessary API service layers or install data-fetching libraries solely for this task. Only establish the documentation and keep the current local-data implementation working.

---

## 6. Technical and Implementation Guidelines

- Reuse the existing Navbar and Footer.
- Reuse existing components and routing configuration.
- Keep product data centralized.
- Use React local state for search, category filtering, and pagination.
- Implement debounce without unnecessary dependencies.
- Keep components readable and maintainable.
- Extract reusable components when they provide clear value.
- Use Lucide React for icons.
- Do not add backend APIs for product search or filtering.
- Do not introduce unnecessary libraries.
- Do not make unrelated changes to existing sections or functionality.
- Follow the current TypeScript and Tailwind conventions.

### Implementation Workflow

1. Read `DESIGN_BRIEF.md` and `AGENTS.md`.
2. Inspect the existing project structure and implementation.
3. Review existing hero assets and select a more compelling industrial machining image.
4. Inspect and reuse the existing product data.
5. Implement the homepage improvements.
6. Implement the `/produk` catalog page.
7. Add debounced search and verify its interaction with category filtering and pagination.
8. Create `docs/FRONTEND_DATA_CONTRACT.md` based on the actual frontend implementation and proposed future API contract.
9. Verify responsive layouts.
10. Run linting and production build.
11. Fix any errors introduced by the changes.

---

## 7. Acceptance Criteria

The task is complete when:

### Homepage and Catalog

- [ ] Homepage hero uses a more attractive, relevant, high-quality industrial machining image.
- [ ] Homepage hero is full width and responsive.
- [ ] Homepage product showcase uses a carousel.
- [ ] "Lihat Semua Produk" navigates to `/produk`.
- [ ] Homepage and catalog share the same centralized product data.
- [ ] `/produk` has a compact full-width banner.
- [ ] Product catalog has a search bar.
- [ ] Search supports product name, brand, and description.
- [ ] Search uses a 300 ms debounce.
- [ ] Search input remains responsive while typing.
- [ ] Category filters work together with search.
- [ ] Category changes apply immediately.
- [ ] Pagination displays 9 products per page by default.
- [ ] Search and category changes reset pagination to page 1.
- [ ] Empty state and reset functionality work correctly.
- [ ] About Us appears below the product showcase/catalog.
- [ ] Contact CTA is available after About Us.
- [ ] No e-commerce functionality is introduced.
- [ ] Desktop, tablet, and mobile layouts work correctly.

### Future API Documentation

- [ ] `docs/FRONTEND_DATA_CONTRACT.md` is created.
- [ ] Current frontend data structures are documented.
- [ ] Product fields, types, and required/optional status are documented.
- [ ] Category fields and available category identifiers are documented.
- [ ] Hero, About Us, and Contact data requirements are documented.
- [ ] Recommended future API endpoints and query parameters are documented.
- [ ] Example JSON responses are included.
- [ ] Frontend component-to-data mapping is documented.
- [ ] Future API integration notes explain which local data sources can be replaced.
- [ ] Documentation distinguishes current implementation from proposed future API fields.
- [ ] No backend API is implemented as part of this task.

### Quality

- [ ] Linting passes.
- [ ] Production build passes.
- [ ] Existing functionality remains intact.

**Important:** Focus on a polished visual result, a clear future API data contract, and a simple, maintainable implementation. Do not overengineer this website.