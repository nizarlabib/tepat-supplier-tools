import { MessageCircle } from "lucide-react";
import { Button } from "../common/Button";
import { Container } from "../common/Container";
import { Reveal } from "../common/Reveal";
import { SectionIndex } from "../common/SectionIndex";
import { brandFocus, whatsappHref } from "../../data/site";

export function BrandShowcase() {
  return (
    <section className="scroll-mt-20 border-b border-steel-grey bg-light-grey py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative">
                <img
                  src={brandFocus.image}
                  alt={brandFocus.imageAlt}
                  width="1000"
                  height="1500"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute bottom-5 left-5 border-l-2 border-industrial-blue bg-white px-5 py-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-graphite/60">
                    Fokus Produk
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold tracking-[0.04em] text-graphite">
                    NACHI
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.08}>
              <SectionIndex index={brandFocus.index} label={brandFocus.eyebrow} />
              <h2 className="mt-6 max-w-xl font-display text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-graphite">
                {brandFocus.title}
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-graphite/60">
                {brandFocus.description}
              </p>

              <dl className="mt-8 border-t border-steel-grey">
                {brandFocus.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between gap-6 border-b border-steel-grey py-4"
                  >
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-graphite/60">
                      {spec.label}
                    </dt>
                    <dd className="text-right text-sm font-medium text-graphite">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-5 max-w-md text-xs leading-5 text-graphite/60">
                {brandFocus.note}
              </p>

              <Button
                href={whatsappHref}
                variant="primary"
                icon={<MessageCircle className="size-4" aria-hidden="true" />}
                target="_blank"
                rel="noreferrer"
                className="mt-7"
              >
                Tanya ketersediaan
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
