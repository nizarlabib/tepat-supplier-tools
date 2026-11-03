import { useState } from "react";
import { Package } from "lucide-react";
import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="group flex flex-col h-full bg-white border border-steel-grey rounded-sm overflow-hidden transition-all duration-200 hover:border-graphite/40 hover:shadow-sm">
      {/* 1. Product Image with Fallback */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-light-grey border-b border-steel-grey/60">
        {imageFailed ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-graphite/40">
            <Package className="size-8 stroke-[1.5]" aria-hidden="true" />
            <span className="text-[11px] font-medium tracking-wide">
              Gambar produk demonstrasi
            </span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.alt || product.name}
            onError={() => setImageFailed(true)}
            loading="lazy"
            className="size-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
          />
        )}
      </div>

      {/* 2. Product Information */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Brand (if available) */}
        {product.brand && (
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-industrial-blue">
            {product.brand}
          </p>
        )}

        {/* Product Name */}
        <h3 className="mt-1 font-display text-base font-semibold leading-snug tracking-[-0.02em] text-graphite transition-colors duration-150 group-hover:text-industrial-blue sm:text-lg">
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-graphite/70">
          {product.description}
        </p>
      </div>
    </article>
  );
}

