import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "../common/Button";
import { Container } from "../common/Container";
import { Logo } from "../common/Logo";
import { navItems, site, whatsappHref } from "../../data/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCatalog, setIsCatalog] = useState(false);
  const [activeHref, setActiveHref] = useState(navItems[0].href);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkRoute = () => {
      const isProduk =
        window.location.pathname === "/produk" ||
        window.location.pathname === "/produk/" ||
        window.location.hash.startsWith("#/produk");
      setIsCatalog(isProduk);
      if (isProduk) {
        setActiveHref("/produk");
      }
    };

    checkRoute();
    window.addEventListener("popstate", checkRoute);
    window.addEventListener("hashchange", checkRoute);

    return () => {
      window.removeEventListener("popstate", checkRoute);
      window.removeEventListener("hashchange", checkRoute);
    };
  }, []);

  useEffect(() => {
    if (isCatalog) {
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);

      const offset = 120;
      let currentHref = navItems[0].href;

      navItems.forEach((item) => {
        if (item.href === "#produk") return;
        const section = document.getElementById(item.href.slice(1));
        if (!section) {
          return;
        }

        if (section.getBoundingClientRect().top <= offset) {
          currentHref = item.href;
        }
      });

      // Check produk section on home
      const produkSection = document.getElementById("produk");
      if (produkSection && produkSection.getBoundingClientRect().top <= offset) {
        currentHref = "#produk";
      }

      setActiveHref(currentHref);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isCatalog]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusableElements = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    menuButtonRef.current?.focus();
  };

  const getEffectiveHref = (itemHref: string) => {
    if (itemHref === "#produk") {
      return "/produk";
    }
    if (isCatalog) {
      if (itemHref === "#home") return "/";
      return `/${itemHref}`;
    }
    return itemHref;
  };

  const isItemActive = (itemHref: string) => {
    if (isCatalog) {
      return itemHref === "#produk";
    }
    return activeHref === itemHref;
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white transition-colors duration-300 ${
        isScrolled ? "border-steel-grey" : "border-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <Logo href={isCatalog ? "/" : "#home"} />

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Navigasi utama">
          {navItems.map((item) => {
            const targetHref = getEffectiveHref(item.href);
            const active = isItemActive(item.href);

            return (
              <a
                key={item.href}
                href={targetHref}
                aria-current={active ? (isCatalog && item.href === "#produk" ? "page" : "location") : undefined}
                className={`relative py-2 text-[13px] font-medium transition-colors duration-200 ${
                  active
                    ? "text-graphite font-semibold"
                    : "text-graphite/75 hover:text-graphite"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-px bg-industrial-blue transition-all duration-200 ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
            className="hidden whitespace-nowrap text-[13px] font-medium text-graphite/60 transition-colors duration-200 hover:text-graphite xl:inline"
          >
            {site.whatsappDisplay}
          </a>
          <Button
            href={whatsappHref}
            variant="primary"
            icon={<MessageCircle className="size-4" aria-hidden="true" />}
            className="min-h-11 px-5"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </Button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="flex size-11 items-center justify-center border border-graphite/20 text-graphite transition-colors hover:border-graphite lg:hidden"
          aria-label="Buka menu navigasi"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </Container>

      {isOpen ? (
        <div
          ref={panelRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi"
          className="fixed inset-0 z-[60] flex flex-col bg-white lg:hidden"
        >
          <Container className="flex h-20 shrink-0 items-center justify-between border-b border-steel-grey">
            <Logo href={isCatalog ? "/" : "#home"} />
            <button
              ref={closeButtonRef}
              type="button"
              className="flex size-11 items-center justify-center border border-graphite/20 text-graphite"
              aria-label="Tutup menu navigasi"
              onClick={closeMenu}
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </Container>

          <Container className="flex flex-1 flex-col overflow-y-auto py-8">
            <nav className="flex flex-col" aria-label="Navigasi mobile">
              {navItems.map((item, index) => {
                const targetHref = getEffectiveHref(item.href);
                const active = isItemActive(item.href);

                return (
                  <a
                    key={item.href}
                    href={targetHref}
                    onClick={closeMenu}
                    aria-current={active ? (isCatalog && item.href === "#produk" ? "page" : "location") : undefined}
                    className="group flex items-center justify-between border-b border-steel-grey py-5"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-industrial-blue">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={`font-display text-3xl font-semibold tracking-[-0.025em] ${active ? "text-industrial-blue" : "text-graphite"}`}>
                        {item.label}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="size-5 text-graphite/50 transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </nav>

            <div className="mt-auto pt-10">
              <Button
                href={whatsappHref}
                variant="primary"
                icon={<MessageCircle className="size-4" aria-hidden="true" />}
                className="w-full"
                target="_blank"
                rel="noreferrer"
              >
                Hubungi via WhatsApp
              </Button>
              <div className="mt-6 space-y-1 text-sm text-graphite/60">
                <p>{site.whatsappDisplay}</p>
                <p>{site.email}</p>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
