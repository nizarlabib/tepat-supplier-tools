import { ChevronLeft, ChevronRight, RotateCcw, Search, X } from "lucide-react";
import { ProductCard } from "./ProductCard";
import type { Product } from "../../types/product";

interface ProductGridProps {
  products: Product[];
  selectedCategory: string;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onResetCategory: () => void;
  onResetFilters: () => void;
  currentPage: number;
  totalPages: number;
  totalResults: number;
  onPageChange: (page: number) => void;
}

export function ProductGrid({
  products,
  selectedCategory,
  searchQuery,
  onSearchChange,
  onResetCategory,
  onResetFilters,
  currentPage,
  totalPages,
  totalResults,
  onPageChange,
}: ProductGridProps) {
  const hasSearch = searchQuery.trim().length > 0;

  return (
    <div className="flex-1 min-w-0">
      {/* Search */}
      <div className="relative">
        <label htmlFor="product-search" className="sr-only">
          Cari produk
        </label>
        <Search
          className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-graphite/40"
          aria-hidden="true"
        />
        <input
          id="product-search"
          type="search"
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Cari nama produk, merek, atau kategori..."
          className="w-full border border-steel-grey bg-white py-3 pl-11 pr-11 text-sm text-graphite placeholder:text-graphite/45 transition-colors focus:border-industrial-blue focus:outline-none rounded-sm"
        />
        {searchQuery.length > 0 && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center text-graphite/50 transition-colors hover:text-graphite"
            aria-label="Hapus kata kunci pencarian"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Header Info: Active Filter, Search, and Count */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between pt-4 pb-4 mb-6 border-b border-steel-grey/60 text-xs text-graphite/60">
        <div>
          <span>Menampilkan </span>
          <strong className="text-graphite font-semibold">{totalResults}</strong>
          <span> produk</span>
          {selectedCategory !== "Semua Produk" && (
            <span>
              {" "}
              dalam kategori{" "}
              <strong className="text-graphite font-semibold">
                {selectedCategory}
              </strong>
            </span>
          )}
          {hasSearch && (
            <span>
              {" "}
              untuk{" "}
              <strong className="text-graphite font-semibold">
                &ldquo;{searchQuery.trim()}&rdquo;
              </strong>
            </span>
          )}
        </div>

        {(selectedCategory !== "Semua Produk" || hasSearch) && (
          <button
            type="button"
            onClick={onResetFilters}
            className="flex items-center gap-1.5 text-industrial-blue hover:text-graphite transition-colors font-medium"
          >
            <RotateCcw className="size-3" aria-hidden="true" />
            Reset Filter
          </button>
        )}
      </div>

      {/* Product List or Empty State */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center p-12 text-center border border-dashed border-steel-grey rounded-sm bg-light-grey/50">
          <p className="text-sm font-medium text-graphite">
            {hasSearch
              ? "Produk tidak ditemukan."
              : "Belum ada produk dalam kategori ini."}
          </p>
          <p className="mt-1 text-xs text-graphite/60">
            {hasSearch
              ? "Coba kata kunci lain atau tampilkan seluruh katalog produk."
              : "Silakan pilih kategori lain atau tampilkan seluruh katalog produk."}
          </p>
          <button
            type="button"
            onClick={hasSearch ? onResetFilters : onResetCategory}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-industrial-blue hover:bg-graphite transition-colors rounded-sm"
          >
            Kembali ke Semua Produk
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav
          aria-label="Navigasi halaman produk"
          className="mt-10 flex items-center justify-between gap-3 border-t border-steel-grey pt-6"
        >
          <button
            type="button"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage <= 1}
            className="inline-flex items-center gap-1.5 border border-steel-grey bg-white px-3 py-2 text-xs font-semibold text-graphite transition-colors hover:border-graphite disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Sebelumnya</span>
          </button>

          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => onPageChange(page)}
                  aria-current={page === currentPage ? "page" : undefined}
                  aria-label={`Halaman ${page}`}
                  className={`flex size-9 items-center justify-center border text-xs font-semibold transition-colors ${
                    page === currentPage
                      ? "border-graphite bg-graphite text-white"
                      : "border-steel-grey bg-white text-graphite hover:border-graphite"
                  }`}
                >
                  {page}
                </button>
              ),
            )}
          </div>

          <button
            type="button"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className="inline-flex items-center gap-1.5 border border-steel-grey bg-white px-3 py-2 text-xs font-semibold text-graphite transition-colors hover:border-graphite disabled:cursor-not-allowed disabled:opacity-35"
          >
            <span className="hidden sm:inline">Berikutnya</span>
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </nav>
      )}
    </div>
  );
}
