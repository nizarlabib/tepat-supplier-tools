import { Breadcrumb } from "./Breadcrumb";
import { catalogPage } from "../../data/site";

export function CatalogHeader() {
  return (
    <div className="pt-8 pb-6 sm:pt-10 sm:pb-8 border-b border-steel-grey mb-8">
      <Breadcrumb />

      <div className="max-w-3xl">
        <h1 className="font-display text-3xl font-bold tracking-[-0.03em] text-graphite sm:text-4xl">
          {catalogPage.title}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-graphite/70 sm:text-base">
          {catalogPage.description}
        </p>
      </div>
    </div>
  );
}
