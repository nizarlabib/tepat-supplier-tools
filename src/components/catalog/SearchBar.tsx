import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

export function SearchBar({ value, onChange, onClear }: SearchBarProps) {
  return (
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
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Cari nama produk, merek, atau deskripsi..."
        autoComplete="off"
        className="w-full rounded-sm border border-steel-grey bg-white py-3 pl-11 pr-11 text-sm text-graphite placeholder:text-graphite/45 transition-colors focus:border-industrial-blue focus:outline-none [&::-webkit-search-cancel-button]:hidden"
      />
      {value.length > 0 && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center text-graphite/50 transition-colors hover:text-graphite"
          aria-label="Hapus kata kunci pencarian"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
