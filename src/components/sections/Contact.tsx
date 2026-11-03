import type { FormEvent } from "react";
import { ChevronDown, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container } from "../common/Container";
import { Reveal } from "../common/Reveal";
import { SectionIndex } from "../common/SectionIndex";
import {
  contact,
  products,
  site,
  whatsappHref,
} from "../../data/site";

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const phone = String(data.get("phone") ?? "");
    const interest = String(data.get("interest") ?? "");
    const message = String(data.get("message") ?? "");

    const lines = [
      "Halo Tepat Supplier Tools,",
      "",
      `Nama: ${name}`,
      company ? `Perusahaan: ${company}` : "",
      `Telepon: ${phone}`,
      `Kebutuhan: ${interest}`,
      "",
      message,
    ].filter(Boolean);

    const url = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="kontak" className="scroll-mt-20 py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="grid overflow-hidden border border-steel-grey lg:grid-cols-12">
          <div className="bg-graphite p-8 text-white sm:p-12 lg:col-span-5 lg:p-14">
            <Reveal>
              <SectionIndex
                index={contact.index}
                label={contact.eyebrow}
                tone="dark"
              />
              <h2 className="mt-6 font-display text-[clamp(2rem,3.5vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                {contact.title}
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-graphite/60">
                {contact.description}
              </p>

              <div className="mt-10 space-y-1 border-t border-white/15 pt-8">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 border-b border-white/10 py-4 text-sm text-white transition-colors hover:text-graphite/50"
                >
                  <MessageCircle className="size-4 shrink-0 text-industrial-blue" aria-hidden="true" />
                  <span>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-graphite/50">
                      WhatsApp
                    </span>
                    <span className="mt-1 block">{site.whatsappDisplay}</span>
                  </span>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-4 border-b border-white/10 py-4 text-sm text-white transition-colors hover:text-graphite/50"
                >
                  <Mail className="size-4 shrink-0 text-industrial-blue" aria-hidden="true" />
                  <span>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-graphite/50">
                      Email
                    </span>
                    <span className="mt-1 block">{site.email}</span>
                  </span>
                </a>
                <a
                  href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                  className="flex items-center gap-4 border-b border-white/10 py-4 text-sm text-white transition-colors hover:text-graphite/50"
                >
                  <Phone className="size-4 shrink-0 text-industrial-blue" aria-hidden="true" />
                  <span>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-graphite/50">
                      Telepon
                    </span>
                    <span className="mt-1 block">{site.phone}</span>
                  </span>
                </a>
                <div className="flex items-start gap-4 py-4 text-sm text-white">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-industrial-blue" aria-hidden="true" />
                  <span>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-graphite/50">
                      Alamat
                    </span>
                    <span className="mt-1 block leading-6">{site.address}</span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="bg-light-grey p-8 sm:p-12 lg:col-span-7 lg:p-14">
            <Reveal delay={0.08}>
              <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-graphite">
                {contact.formTitle}
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-6 text-graphite/60">
                {contact.formDescription}
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 grid gap-x-6 gap-y-6 sm:grid-cols-2"
              >
                <label className="flex flex-col gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-graphite/60">
                    Nama
                  </span>
                  <input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Nama Anda"
                    className="w-full border-0 border-b border-graphite/20 bg-transparent px-0 py-3 text-sm text-graphite placeholder:text-graphite/50 focus:border-industrial-blue focus:outline-none"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-graphite/60">
                    Perusahaan
                  </span>
                  <input
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Nama bengkel / perusahaan"
                    className="w-full border-0 border-b border-graphite/20 bg-transparent px-0 py-3 text-sm text-graphite placeholder:text-graphite/50 focus:border-industrial-blue focus:outline-none"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-graphite/60">
                    Telepon
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="Nomor WhatsApp"
                    className="w-full border-0 border-b border-graphite/20 bg-transparent px-0 py-3 text-sm text-graphite placeholder:text-graphite/50 focus:border-industrial-blue focus:outline-none"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-graphite/60">
                    Kebutuhan
                  </span>
                  <div className="relative">
                    <select
                      name="interest"
                      required
                      defaultValue=""
                      className="w-full border-0 border-b border-graphite/20 bg-transparent px-0 py-3 text-sm text-graphite appearance-none pr-8 focus:border-industrial-blue focus:outline-none"
                    >
                      <option value="" disabled>
                        Pilih kategori
                      </option>
                      {products.map((product) => (
                        <option key={product.id} value={product.name}>
                          {product.name}
                        </option>
                      ))}
                      <option value="Lainnya">Lainnya</option>
                    </select>
                      <ChevronDown
                        className="pointer-events-none absolute right-0 top-1/2 size-4 -translate-y-1/2 text-graphite/50"
                        aria-hidden="true"
                      />
                  </div>
                </label>

                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-graphite/60">
                    Pesan
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tuliskan tipe, ukuran, atau kebutuhan produk Anda"
                    className="w-full resize-none border-0 border-b border-graphite/20 bg-transparent px-0 py-3 text-sm leading-6 text-graphite placeholder:text-graphite/50 focus:border-industrial-blue focus:outline-none"
                  />
                </label>

                <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="group inline-flex min-h-12 items-center justify-center gap-3 border border-blue-accent bg-blue-accent px-6 py-3 text-sm font-semibold leading-none text-white transition-colors duration-200 hover:border-industrial-blue hover:bg-industrial-blue"
                  >
                    Kirim via WhatsApp
                    <MessageCircle
                      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>
                  <p className="max-w-xs text-[11px] leading-5 text-graphite/60">
                    Anda akan diarahkan ke WhatsApp untuk melanjutkan
                    percakapan.
                  </p>
                </div>
                <p className="mt-6 border-t border-steel-grey pt-4 text-[11px] leading-5 text-graphite/60 sm:col-span-2">
                  Kami hanya menggunakan data ini untuk merespons pertanyaan
                  Anda.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
