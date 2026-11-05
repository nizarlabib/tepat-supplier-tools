import { useEffect, useMemo, useState } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Container } from "../components/common/Container";
import { CatalogBanner } from "../components/catalog/CatalogBanner";
import { CatalogHeader } from "../components/catalog/CatalogHeader";
import { CategoryFilterSidebar } from "../components/catalog/CategoryFilterSidebar";
import { ProductGrid } from "../components/catalog/ProductGrid";
import { SearchBar } from "../components/catalog/SearchBar";
import { CatalogAbout } from "../components/catalog/CatalogAbout";
import { ContactCTA } from "../components/catalog/ContactCTA";
import { products } from "../data/products";

const PAGE_SIZE = 9;
const SEARCH_DEBOUNCE_MS = 300;

export function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua Produk");
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    // SEO title & meta description
    const originalTitle = document.title;
    document.title = "Produk Kami | Tepat Supplier Tools";

    const metaDescription = document.querySelector('meta[name="description"]');
    const originalMeta = metaDescription?.getAttribute("content") || "";
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Temukan berbagai pilihan peralatan bengkel bubut dan kebutuhan machining dari Tepat Supplier Tools.",
      );
    }

    window.scrollTo({ top: 0, behavior: "instant" });

    return () => {
      document.title = originalTitle;
      if (metaDescription && originalMeta) {
        metaDescription.setAttribute("content", originalMeta);
      }
    };
  }, []);

  // Debounce the text search by 300 ms. The input stays responsive while the
  // applied query only updates after the user pauses typing. Each new applied
  // query returns the catalog to page 1.
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setSearchQuery(searchInput);
      setCurrentPage(1);
    }, SEARCH_DEBOUNCE_MS);

    return () => window.clearTimeout(timeout);
  }, [searchInput]);

  const categoryCounts = useMemo(() => {
    return products.reduce(
      (acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );
  }, []);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "Semua Produk" ||
        product.category === selectedCategory;

      const searchableValues = [
        product.name,
        product.brand ?? "",
        product.description,
      ];

      const matchesSearch =
        query.length === 0 ||
        searchableValues.some((value) =>
          value.toLowerCase().includes(query),
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PAGE_SIZE),
  );
  const activePage = Math.min(currentPage, totalPages);
  const visibleProducts = filteredProducts.slice(
    (activePage - 1) * PAGE_SIZE,
    activePage * PAGE_SIZE,
  );

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchInput(query);
  };

  const handleClearSearch = () => {
    setSearchInput("");
    setSearchQuery("");
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSelectedCategory("Semua Produk");
    setSearchInput("");
    setSearchQuery("");
    setCurrentPage(1);
  };

  const handleResetCategory = () => {
    setSelectedCategory("Semua Produk");
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const listing = document.getElementById("katalog-produk");
    if (listing) {
      listing.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-graphite focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Lewati ke konten utama
      </a>

      {/* 1. Global Navbar */}
      <Navbar />

      <main id="main-content">
        {/* 2. Compact Full-Width Main Banner */}
        <CatalogBanner />

        {/* 3. Catalog Header & Marketplace Listing */}
        <div className="bg-white py-8 sm:py-12 lg:py-16">
          <Container>
            <CatalogHeader />

            {/* 4. Search Bar */}
            <div className="mb-8">
              <SearchBar
                value={searchInput}
                onChange={handleSearchChange}
                onClear={handleClearSearch}
              />
            </div>

            {/* 5. Two-Column Catalog Layout */}
            <div
              id="katalog-produk"
              className="flex scroll-mt-24 flex-col lg:flex-row gap-8 lg:gap-10"
            >
              <CategoryFilterSidebar
                selectedCategory={selectedCategory}
                onSelectCategory={handleSelectCategory}
                categoryCounts={categoryCounts}
                totalCount={products.length}
              />

              <ProductGrid
                products={visibleProducts}
                selectedCategory={selectedCategory}
                searchQuery={searchQuery}
                onResetCategory={handleResetCategory}
                onResetFilters={handleResetFilters}
                currentPage={activePage}
                totalPages={totalPages}
                totalResults={filteredProducts.length}
                onPageChange={handlePageChange}
              />
            </div>
          </Container>
        </div>

        {/* 5. About Us Section (Below Product Catalog) */}
        <CatalogAbout />

        {/* 6. Contact CTA */}
        <ContactCTA />
      </main>

      {/* 7. Global Footer */}
      <Footer />
    </>
  );
}
