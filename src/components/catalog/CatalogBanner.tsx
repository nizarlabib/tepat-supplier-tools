import { Container } from "../common/Container";
import { catalogPage } from "../../data/site";

export function CatalogBanner() {
  return (
    <section className="relative overflow-hidden border-b border-steel-grey bg-graphite text-white">
      {/* Background Image with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={catalogPage.bannerImage}
          alt={catalogPage.bannerImageAlt}
          className="size-full object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-graphite/95 via-graphite/85 to-graphite/60 sm:from-graphite/90 sm:via-graphite/75 sm:to-graphite/50"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
              {catalogPage.bannerEyebrow}
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
              {catalogPage.bannerTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base sm:leading-7">
              {catalogPage.bannerDescription}
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
