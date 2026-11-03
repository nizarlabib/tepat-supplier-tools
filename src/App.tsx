import { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";

function isCatalogPath(): boolean {
  if (typeof window === "undefined") return false;
  const path = window.location.pathname;
  const hash = window.location.hash;
  return (
    path === "/produk" ||
    path === "/produk/" ||
    hash === "#/produk" ||
    hash === "#/produk/"
  );
}

function App() {
  const [showCatalog, setShowCatalog] = useState<boolean>(isCatalogPath);

  useEffect(() => {
    const handleLocationChange = () => {
      setShowCatalog(isCatalogPath());
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);

    // Global click listener to intercept internal route links
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Ignore external or non-http links
      if (
        target.target === "_blank" ||
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:")
      ) {
        return;
      }

      // Handle navigation to /produk
      if (href === "/produk" || href === "/produk/") {
        e.preventDefault();
        window.history.pushState({}, "", "/produk");
        setShowCatalog(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      // Handle navigation to home /
      if (href === "/" || href === "/#home") {
        e.preventDefault();
        window.history.pushState({}, "", "/");
        setShowCatalog(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      // Handle navigation from catalog to home section: /#tentang, /#keunggulan, /#kontak
      if (href.startsWith("/#")) {
        e.preventDefault();
        const sectionId = href.slice(2);
        window.history.pushState({}, "", "/" + href.slice(1));
        setShowCatalog(false);
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }, 50);
        return;
      }
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  return showCatalog ? <Catalog /> : <Home />;
}

export default App;
