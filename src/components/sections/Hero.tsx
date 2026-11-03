import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "../common/Button";
import { Container } from "../common/Container";
import { Reveal } from "../common/Reveal";
import { hero, products, whatsappHref } from "../../data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden border-b border-steel-grey bg-graphite text-white"
    >
      {/* 1. Full-Width Background Image with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.image}
          alt={hero.imageAlt}
          fetchPriority="high"
          decoding="async"
          className="size-full object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/80 to-graphite/60 sm:bg-gradient-to-r sm:from-graphite/95 sm:via-graphite/85 sm:to-graphite/40"
          aria-hidden="true"
        />
      </div>

      {/* 2. Hero Content */}
      <div className="relative z-10 pt-20 pb-16 sm:pt-28 sm:pb-24 lg:pt-36 lg:pb-32">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                <span className="h-px w-8 bg-industrial-blue" aria-hidden="true" />
                <span>{hero.eyebrow}</span>
              </div>

              <h1 className="mt-6 font-display text-[clamp(2.5rem,5.5vw,4.75rem)] font-bold leading-[1.05] tracking-[-0.035em] text-white">
                {hero.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg sm:leading-8">
                {hero.description}
              </p>

              <div className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <Button
                  href="#product"
                  variant="primary"
                  icon={<ArrowRight className="size-4" aria-hidden="true" />}
                  className="w-full sm:w-auto"
                >
                  {hero.primaryCta}
                </Button>
                <Button
                  href={whatsappHref}
                  variant="outline"
                  icon={<MessageCircle className="size-4" aria-hidden="true" />}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full border-white/40 text-white hover:bg-white hover:text-graphite sm:w-auto"
                >
                  {hero.secondaryCta}
                </Button>
              </div>

              <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[12px] font-medium uppercase tracking-[0.1em] text-white/70">
                {hero.proof.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="size-1.5 bg-blue-accent rounded-full" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </div>

      {/* 3. Bottom Category Strip */}
      <div className="relative z-10 border-t border-white/15 bg-graphite/90 backdrop-blur-sm py-4">
        <Container>
          <nav
            className="flex items-center gap-6 overflow-x-auto scrollbar-none"
            aria-label="Kategori produk utama"
          >
            <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
              Kategori
            </span>
            <span className="h-3.5 w-px shrink-0 bg-white/20" aria-hidden="true" />
            {products.map((product) => (
              <a
                key={product.id}
                href="#product"
                className="shrink-0 text-xs font-medium text-white/75 transition-colors hover:text-white"
              >
                {product.name}
              </a>
            ))}
          </nav>
        </Container>
      </div>
    </section>
  );
}
