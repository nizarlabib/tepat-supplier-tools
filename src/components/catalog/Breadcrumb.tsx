import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  items?: Array<{ label: string; href?: string }>;
}

export function Breadcrumb({
  items = [
    { label: "Beranda", href: "/" },
    { label: "Produk" },
  ],
}: BreadcrumbProps) {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href?: string,
  ) => {
    if (href && href.startsWith("/")) {
      e.preventDefault();
      window.history.pushState({}, "", href);
      window.dispatchEvent(new PopStateEvent("popstate"));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-xs font-medium text-graphite/60">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight
                  className="size-3 text-steel-grey shrink-0"
                  aria-hidden="true"
                />
              )}
              {isLast || !item.href ? (
                <span
                  className="text-graphite font-semibold"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="transition-colors hover:text-industrial-blue"
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

