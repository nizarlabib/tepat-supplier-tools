import { MessageCircle } from "lucide-react";
import { Button } from "../common/Button";
import { Container } from "../common/Container";
import { catalogPage, whatsappHref } from "../../data/site";

export function ContactCTA() {
  return (
    <section
      id="kontak-katalog"
      className="border-t border-steel-grey bg-light-grey py-16 sm:py-20 lg:py-24"
      aria-labelledby="cta-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-industrial-blue">
            {catalogPage.ctaEyebrow}
          </span>

          <h2
            id="cta-heading"
            className="mt-3 font-display text-2xl font-semibold leading-tight tracking-[-0.03em] text-graphite sm:text-3xl lg:text-4xl"
          >
            {catalogPage.ctaTitle}
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-graphite/70 sm:text-base sm:leading-7">
            {catalogPage.ctaDescription}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href={whatsappHref}
              variant="primary"
              icon={<MessageCircle className="size-4" aria-hidden="true" />}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              {catalogPage.ctaLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

