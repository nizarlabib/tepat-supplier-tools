import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "../common/Button";
import { Container } from "../common/Container";
import { Reveal } from "../common/Reveal";
import { hero, products, whatsappHref } from "../../data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden border-b border-steel-grey bg-white"
    >
      <Container>
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col justify-center pt-14 lg:col-span-7 lg:py-20">
            <Reveal>
              <div className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-graphite/60">
                <span className="h-px w-10 bg-industrial-blue" aria-hidden="true" />
                <span>{hero.eyebrow}</span>
              </div>

              <h1 className="mt-7 max-w-[780px] font-display text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-graphite">
                {hero.titleBefore}{" "}
                <span className="text-industrial-blue">{hero.titleAccent}</span>{" "}
                {hero.titleAfter}
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-graphite/60 sm:text-lg sm:leading-8">
                {hero.description}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  href="#produk"
                  variant="primary"
                  icon={<ArrowRight className="size-4" aria-hidden="true" />}
                >
                  Jelajahi Produk
                </Button>
                <Button
                  href={whatsappHref}
                  variant="outline"
                  icon={<MessageCircle className="size-4" aria-hidden="true" />}
                  target="_blank"
                  rel="noreferrer"
                >
                  Hubungi Kami
                </Button>
              </div>

              <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-[12px] font-medium uppercase tracking-[0.08em] text-graphite/60">
                {hero.proof.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="size-1 bg-industrial-blue" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="relative pb-10 lg:col-span-5 lg:py-8">
            <Reveal delay={0.1} className="relative h-full">
              <div className="relative h-full overflow-hidden bg-white">
                <img
                  src={hero.image}
                  alt={hero.imageAlt}
                  width="1800"
                  height="1200"
                  fetchPriority="high"
                  decoding="async"
                  className="h-[430px] w-full object-cover sm:h-[540px] lg:h-full lg:min-h-[650px]"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-graphite/30 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute bottom-5 left-5 max-w-[280px] border-l-2 border-industrial-blue bg-white p-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-industrial-blue">
                    Tepat / Machining
                  </p>
                  <p className="mt-2 text-sm font-medium leading-6 text-graphite">
                    {hero.caption}
                  </p>
                </div>
              </div>
              <div
                className="absolute -left-3 top-8 hidden h-24 border-l border-industrial-blue/60 lg:block"
                aria-hidden="true"
              />
            </Reveal>
          </div>
        </div>

        <nav
          className="mt-2 border-t border-steel-grey py-5 lg:mt-0"
          aria-label="Kategori produk"
        >
          <div className={`category-scroll flex items-center gap-5 overflow-x-auto pb-1 pr-8 lg:pr-0`}>
            <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.16em] text-graphite/60">
              Kategori
            </span>
            <span className="h-4 w-px shrink-0 bg-steel-grey" aria-hidden="true" />
            {products.map((product) => (
              <a
                key={product.id}
                href="#produk"
                className="shrink-0 text-xs font-medium text-graphite/70 transition-colors hover:text-industrial-blue"
              >
                {product.name}
              </a>
            ))}
          </div>
        </nav>
      </Container>
    </section>
  );
}
