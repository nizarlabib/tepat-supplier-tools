import { Container } from "../common/Container";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { advantages, whyChooseUs } from "../../data/site";

export function WhyChooseUs() {
  return (
    <section
      id="keunggulan"
      className="scroll-mt-20 bg-graphite py-20 text-white sm:py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                index={whyChooseUs.index}
                eyebrow={whyChooseUs.eyebrow}
                title={whyChooseUs.title}
                description={whyChooseUs.description}
                tone="dark"
              />

              <div className="relative mt-10">
                <img
                  src={whyChooseUs.image}
                  alt={whyChooseUs.imageAlt}
                  width="1400"
                  height="933"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute -bottom-5 right-4 max-w-[230px] border border-industrial-blue/40 bg-graphite p-5 sm:-right-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-graphite/50">
                    {whyChooseUs.noteTitle}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-graphite/50">
                    {whyChooseUs.noteText}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <div className="border-t border-white/20">
              {advantages.map((advantage) => (
                <div
                  key={advantage.index}
                  className="grid grid-cols-[auto_1fr] gap-5 border-b border-white/20 py-6 sm:gap-8 sm:py-7"
                >
                  <span className="pt-1 text-[10px] font-semibold tracking-[0.16em] text-graphite/50">
                    {advantage.index}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-[-0.015em] text-white sm:text-2xl">
                      {advantage.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-graphite/50">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
