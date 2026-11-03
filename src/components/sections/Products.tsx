import { MessageCircle } from "lucide-react";
import { Button } from "../common/Button";
import { Container } from "../common/Container";
import { ProductCard } from "../common/ProductCard";
import { SectionHeading } from "../common/SectionHeading";
import { products, productsSection, whatsappHref } from "../../data/site";

export function Products() {
  return (
    <section
      id="produk"
      className="scroll-mt-20 border-b border-steel-grey bg-light-grey py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            index={productsSection.index}
            eyebrow={productsSection.eyebrow}
            title={productsSection.title}
            className="lg:col-span-7"
          />
          <p className="max-w-md text-base leading-7 text-graphite/60 lg:col-span-4 lg:col-start-9">
            {productsSection.description}
          </p>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 lg:grid-cols-12 lg:gap-y-16">
          <ProductCard
            product={products[0]}
            className="lg:col-span-7"
          />
          <ProductCard
            product={products[1]}
            className="lg:col-span-5 lg:mt-20"
          />
          <ProductCard
            product={products[2]}
            className="lg:col-span-5"
          />
          <ProductCard
            product={products[3]}
            className="lg:col-span-7 lg:mt-16"
          />
          <ProductCard
            product={products[4]}
            className="lg:col-span-7"
          />

          <div className="flex flex-col justify-between bg-graphite p-8 text-white sm:p-10 lg:col-span-5 lg:mt-16">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-graphite/50">
                {productsSection.panelLabel}
              </p>
              <h3 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.025em]">
                {productsSection.panelTitle}
              </h3>
              <p className="mt-5 max-w-sm text-sm leading-6 text-graphite/50">
                {productsSection.panelDescription}
              </p>
            </div>
            <Button
              href={whatsappHref}
              variant="light"
              icon={<MessageCircle className="size-4" aria-hidden="true" />}
              target="_blank"
              rel="noreferrer"
              className="mt-10 w-full sm:w-auto"
            >
              {productsSection.panelCta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
