import { ArrowUpRight } from "lucide-react";
import type { ProductCategory } from "../../data/site";

interface ProductCardProps {
  product: ProductCategory;
  className?: string;
}

export function ProductCard({ product, className = "" }: ProductCardProps) {
  const imageStyle = product.imagePosition
    ? { objectPosition: product.imagePosition }
    : undefined;

  return (
    <article className={`group ${className}`}>
      <a
        href="#kontak"
        className="relative block overflow-hidden bg-light-grey"
        aria-label={`Tanya ketersediaan ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.imageAlt}
          width="1400"
          height="933"
          loading="lazy"
          style={imageStyle}
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        <span className="absolute right-4 top-4 flex size-10 items-center justify-center bg-white text-graphite transition-colors duration-200 group-hover:bg-industrial-blue group-hover:text-white">
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </a>

      <div className="mt-5 border-t border-steel-grey pt-5">
        <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em]">
          <span className="text-industrial-blue">{product.index}</span>
          <span className="text-graphite/60">{product.englishName}</span>
        </div>
        <h3 className="mt-3 font-display text-[1.75rem] font-semibold tracking-[-0.02em] text-graphite sm:text-2xl">
          {product.name}
        </h3>
        <p className="mt-3 max-w-lg text-[15px] leading-6 text-graphite/60">
          {product.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-graphite/70">
          {product.applications.map((application) => (
            <li key={application} className="flex items-center gap-2">
              <span className="size-1 bg-industrial-blue" aria-hidden="true" />
              {application}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
