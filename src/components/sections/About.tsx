import { ArrowRight } from "lucide-react";
import { Container } from "../common/Container";
import { Reveal } from "../common/Reveal";
import { SectionIndex } from "../common/SectionIndex";
import { about } from "../../data/site";

export function About() {
  return (
    <section
      id="tentang"
      className="scroll-mt-20 border-b border-steel-grey py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionIndex index={about.index} label={about.eyebrow} />
              <h2 className="mt-6 max-w-xl font-display text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-graphite">
                {about.title}
              </h2>
              <div className="mt-6 space-y-5 text-base leading-7 text-graphite/60">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <a
                href="#produk"
                className="group mt-7 inline-flex items-center gap-2 border-b border-graphite/30 pb-1 text-sm font-semibold text-graphite transition-colors hover:border-industrial-blue hover:text-industrial-blue"
              >
                Lihat kategori produk
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="relative lg:mt-12">
                <div
                  className="absolute -left-4 top-8 hidden h-20 border-l border-industrial-blue/60 lg:block"
                  aria-hidden="true"
                />
                <img
                  src={about.image}
                  alt={about.imageAlt}
                  width="1400"
                  height="933"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                  <div className="mt-4 flex flex-col gap-2 border-t border-steel-grey pt-4 text-[10px] font-medium uppercase tracking-[0.14em] text-graphite/60 sm:flex-row sm:items-center sm:justify-between">
                  <span>{about.caption}</span>
                  <span className="text-industrial-blue">02 / Workshop</span>
                </div>
              </div>

              <ul className="mt-10 border-t border-steel-grey">
                {about.points.map((point, index) => (
                  <li
                    key={point}
                    className="flex items-center gap-5 border-b border-steel-grey py-4"
                  >
                    <span className="text-[10px] font-semibold tracking-[0.16em] text-industrial-blue">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-graphite">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
