import { Container } from "../common/Container";
import aboutMachinist from "../../assets/images/about-machinist.jpg";
import { catalogPage } from "../../data/site";

export function CatalogAbout() {
  return (
    <section className="border-t border-steel-grey bg-light-grey py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left / Text Side */}
          <div className="lg:col-span-7">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-industrial-blue">
              Tentang Kami
            </span>

            <h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em] text-graphite sm:text-3xl lg:text-4xl">
              {catalogPage.aboutTitle}
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-graphite/75 sm:text-base sm:leading-8">
              {catalogPage.aboutDescription}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="border-l-2 border-industrial-blue bg-white p-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-graphite">
                  Fokus Perkakas Bubut
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-graphite/65">
                  Menyediakan mata bor, tap ulir, insert widia, dan aksesoris mesin berkualitas.
                </p>
              </div>
              <div className="border-l-2 border-industrial-blue bg-white p-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-graphite">
                  Konsultasi Machining
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-graphite/65">
                  Membantu pemilihan spesifikasi alat potong sesuai jenis material kerja workshop.
                </p>
              </div>
            </div>
          </div>

          {/* Right / Image Side */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden border border-steel-grey bg-white rounded-sm">
              <img
                src={aboutMachinist}
                alt="Teknisi machinist di bengkel bubut industri"
                className="h-72 w-full object-cover sm:h-80 lg:h-96"
                loading="lazy"
              />
              <div className="border-t border-steel-grey bg-white p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-graphite">
                  Workshop Machining & Presisi
                </p>
                <p className="text-xs text-graphite/60 mt-0.5">
                  Dukungan perkakas potong untuk produktivitas bengkel Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

