import { useState } from "react";
import { ChevronDown, Filter, X } from "lucide-react";
import { productCategories } from "../../data/products";

const ALL_PRODUCTS_LABEL = "Semua Produk";
const CATEGORIES: readonly string[] = [
  ALL_PRODUCTS_LABEL,
  ...productCategories.map((category) => category.name),
];

interface CategoryFilterSidebarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  categoryCounts: Record<string, number>;
  totalCount: number;
}

export function CategoryFilterSidebar({
  selectedCategory,
  onSelectCategory,
  categoryCounts,
  totalCount,
}: CategoryFilterSidebarProps) {
  const [isDesktopAccordionOpen, setIsDesktopAccordionOpen] = useState(true);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const handleSelect = (category: string) => {
    onSelectCategory(category);
    setIsMobileFilterOpen(false);
  };

  return (
    <>
      {/* ========================================================
          MOBILE CATEGORY FILTER CONTROL (< lg)
         ======================================================== */}
      <div className="lg:hidden mb-6">
        <div className="flex items-center justify-between gap-3 bg-light-grey p-3 border border-steel-grey rounded-sm">
          <div className="flex items-center gap-2">
            <Filter className="size-4 text-industrial-blue" aria-hidden="true" />
            <span className="text-xs font-semibold text-graphite">Filter:</span>
            <span className="text-xs font-medium text-industrial-blue bg-white px-2 py-0.5 border border-steel-grey rounded">
              {selectedCategory}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-graphite hover:text-industrial-blue transition-colors"
            aria-expanded={isMobileFilterOpen}
            aria-controls="mobile-filter-panel"
          >
            {isMobileFilterOpen ? (
              <>
                Tutup <X className="size-4" aria-hidden="true" />
              </>
            ) : (
              <>
                Kategori <ChevronDown className="size-4" aria-hidden="true" />
              </>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {isMobileFilterOpen && (
          <div
            id="mobile-filter-panel"
            className="mt-2 border border-steel-grey bg-white p-3 rounded-sm shadow-sm space-y-1 animate-in fade-in duration-200"
          >
            {CATEGORIES.map((category) => {
              const count =
                category === "Semua Produk"
                  ? totalCount
                  : categoryCounts[category] || 0;
              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleSelect(category)}
                  className={`flex w-full items-center justify-between px-3 py-2 text-xs font-medium rounded-sm transition-colors ${
                    isActive
                      ? "bg-graphite text-white font-semibold"
                      : "text-graphite/70 hover:bg-light-grey hover:text-graphite"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`rounded px-1.5 py-0.5 text-[10px] ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-light-grey text-graphite/60"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* ========================================================
          DESKTOP CATEGORY FILTER SIDEBAR (>= lg)
         ======================================================== */}
      <aside
        className="hidden lg:block w-60 shrink-0 self-start sticky top-28"
        aria-label="Filter kategori produk"
      >
        <div className="border border-steel-grey bg-white rounded-sm overflow-hidden">
          {/* Accordion Header */}
          <button
            type="button"
            onClick={() => setIsDesktopAccordionOpen(!isDesktopAccordionOpen)}
            className="flex w-full items-center justify-between border-b border-steel-grey bg-light-grey px-4 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-graphite hover:text-industrial-blue transition-colors"
            aria-expanded={isDesktopAccordionOpen}
            aria-controls="desktop-category-list"
          >
            <span className="flex items-center gap-2">
              <Filter className="size-3.5 text-industrial-blue" aria-hidden="true" />
              Kategori Produk
            </span>
            <ChevronDown
              className={`size-4 text-graphite/60 transition-transform duration-200 ${
                isDesktopAccordionOpen ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>

          {/* Accordion Body */}
          {isDesktopAccordionOpen && (
            <div id="desktop-category-list" className="p-2 space-y-1">
              {CATEGORIES.map((category) => {
                const count =
                  category === "Semua Produk"
                    ? totalCount
                    : categoryCounts[category] || 0;
                const isActive = selectedCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleSelect(category)}
                    className={`flex w-full items-center justify-between px-3 py-2.5 text-xs transition-all duration-150 rounded-sm ${
                      isActive
                        ? "bg-graphite text-white font-semibold"
                        : "text-graphite/70 hover:bg-light-grey hover:text-graphite"
                    }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-light-grey text-graphite/60 border border-steel-grey/60"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </aside>
    </>
  );
}

