import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../common/Button";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { ProductCard } from "../catalog/ProductCard";
import { featuredProducts } from "../../data/products";

export function Products() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const handleScrollPrev = () => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({ left: -340, behavior: "smooth" });
  };

  const handleScrollNext = () => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({ left: 340, behavior: "smooth" });
  };

  return (
    <section
      id="product"
      className="scroll-mt-20 border-b border-steel-grey bg-light-grey py-20 sm:py-24 lg:py-28"
    >
      {/* Anchor compatibility for both #product and #produk */}
      <div id="produk" className="-mt-20 pt-20" aria-hidden="true" />

      <Container>
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionHeading
              index="01"
              eyebrow="Koleksi Produk"
              title="Perkakas Machining & Bengkel Bubut"
              description="Pilihan produk unggulan untuk mendukung kebutuhan operasional mesin bubut, milling, dan fabrikasi workshop Anda."
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              href="/produk"
              variant="outline"
              icon={<ArrowUpRight className="size-4" aria-hidden="true" />}
              className="border-graphite/30 text-graphite hover:border-graphite"
            >
              Lihat Semua Produk
            </Button>

            {/* Desktop Carousel Controls */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={handleScrollPrev}
                disabled={!canScrollLeft}
                className="flex size-10 items-center justify-center border border-steel-grey bg-white text-graphite transition-all duration-200 hover:border-graphite disabled:cursor-not-allowed disabled:opacity-35"
                aria-label="Gulir ke produk sebelumnya"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleScrollNext}
                disabled={!canScrollRight}
                className="flex size-10 items-center justify-center border border-steel-grey bg-white text-graphite transition-all duration-200 hover:border-graphite disabled:cursor-not-allowed disabled:opacity-35"
                aria-label="Gulir ke produk berikutnya"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-12">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none"
            style={{ scrollSnapType: "x mandatory" }}
            role="region"
            aria-roledescription="carousel"
            aria-label="Karusel produk pilihan"
            tabIndex={0}
          >
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="w-[280px] sm:w-[320px] shrink-0 snap-start"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Mobile Swipe Indicator / Helper */}
          <div className="mt-4 flex items-center justify-between sm:hidden text-xs text-graphite/50">
            <span>Geser untuk melihat produk lainnya</span>
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={handleScrollPrev}
                disabled={!canScrollLeft}
                className="p-1 border border-steel-grey bg-white disabled:opacity-30"
                aria-label="Sebelumnya"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={handleScrollNext}
                disabled={!canScrollRight}
                className="p-1 border border-steel-grey bg-white disabled:opacity-30"
                aria-label="Berikutnya"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
