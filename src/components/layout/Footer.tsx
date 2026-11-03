import { ArrowUp, ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "../common/Button";
import { Container } from "../common/Container";
import { Logo } from "../common/Logo";
import {
  navItems,
  products,
  site,
  socials,
  whatsappHref,
} from "../../data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden bg-graphite text-white">
      <Container className="pt-16 sm:pt-20">
        <div className="flex flex-col gap-8 border-b border-white/20 pb-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-graphite/50">
              06 / Hubungi Kami
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
              Siap membantu kebutuhan perkakas Anda.
            </h2>
          </div>
          <Button
            href={whatsappHref}
            variant="light"
            icon={<MessageCircle className="size-4" aria-hidden="true" />}
            target="_blank"
            rel="noreferrer"
            className="w-full shrink-0 sm:w-auto"
          >
            Hubungi via WhatsApp
          </Button>
        </div>

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Logo tone="dark" />
            <p className="mt-6 max-w-xs text-sm leading-6 text-graphite/50">
              Supplier perlengkapan bengkel bubut, perkakas machining, dan
              peralatan potong industri.
            </p>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-graphite/50">
              {site.tagline}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-graphite/50">
              Navigasi
            </h3>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-graphite/50">
              Produk
            </h3>
            <ul className="mt-5 space-y-3">
              {products.map((product) => (
                <li key={product.id}>
                  <a
                    href="#produk"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-graphite/50">
              Kontak
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li className="max-w-[220px] leading-6">{site.address}</li>
              <li>{site.hours}</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-x-2 gap-y-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.1em] text-graphite/50 transition-colors hover:text-graphite/100"
                  aria-label={social.label}
                >
                  {social.label}
                  <ArrowUpRight className="size-3" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="select-none overflow-hidden border-t border-white/20 pt-10 text-white/[0.04]"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 733 197"
            className="block h-[calc(clamp(5rem,19vw,18rem)*0.72)] w-auto overflow-visible"
            focusable="false"
          >
            <text
              x="0"
              y="197"
              fill="currentColor"
              className="font-display font-bold"
              fontSize="273.6"
              letterSpacing="-0.08em"
            >
              TEPAT
            </text>
          </svg>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/20 py-6 text-[11px] text-graphite/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#" className="transition-colors hover:text-graphite/100">
              Kebijakan Privasi
            </a>
            <a href="#" className="transition-colors hover:text-graphite/100">
              Syarat & Ketentuan
            </a>
            <a
              href="#home"
              className="flex items-center gap-1.5 transition-colors hover:text-graphite/100"
            >
              Kembali ke atas
              <ArrowUp className="size-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
