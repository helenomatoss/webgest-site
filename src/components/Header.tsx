import { useState, useEffect, KeyboardEvent, MouseEventHandler } from "react";
import { Menu, X } from "lucide-react";
import webgestLogo from "@/assets/webgest-logo-transparent.png";

type NavigationItem = {
  name: string;
  href: string;
  ariaLabel?: string;
};

const navigation: NavigationItem[] = [
  { name: "In\u00edcio", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  {
    name: "Portf\u00f3lio",
    href: "#portfolio",
    ariaLabel: "Ir para a se\u00e7\u00e3o Portf\u00f3lio"
  },
  { name: "Servi\u00e7os", href: "#servicos" },
  {
    name: "Planos",
    href: "#planos",
    ariaLabel: "Ir para a se\u00e7\u00e3o Planos"
  },
  { name: "Contato", href: "#contato" }
];

const SECTION_ALIASES: Record<string, string> = {
  inicio: "hero",
  sobre: "about",
  servicos: "services",
  planos: "plans",
  contato: "contato",
  portfolio: "portfolio"
};

const scrollToId = (id: string) => {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  const trimmed = id.trim().replace(/^#/, "");
  if (!trimmed) return;

  const normalized = trimmed.toLowerCase();
  const alias = SECTION_ALIASES[normalized];
  const target =
    document.getElementById(trimmed) ||
    (alias ? document.getElementById(alias) : null);

  if (!target) return;

  const headerEl =
    document.querySelector<HTMLElement>("[data-header]") ||
    document.querySelector<HTMLElement>("header");
  const headerH = headerEl ? headerEl.offsetHeight : 80;

  const y = target.getBoundingClientRect().top + window.pageYOffset - headerH - 8;
  window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToHero = () => {
    scrollToId("#inicio");
    setIsMenuOpen(false);
  };

  const handleLogoKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleScrollToHero();
    }
  };

  const handleNavClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    const href = (event.currentTarget.getAttribute("href") || "").trim();
    if (!href.startsWith("#")) {
      setIsMenuOpen(false);
      return;
    }

    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      setIsMenuOpen(false);
      return;
    }

    event.preventDefault();
    scrollToId(href);
    setIsMenuOpen(false);
  };

  return (
    <header
      data-header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/30 shadow-lg"
          : "bg-gradient-to-r from-primary/10 via-primary/5 to-webgest-orange/10 backdrop-blur-sm border-b border-white/10"
      }`}
    >
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center h-16">
          <div className="flex flex-1 items-center min-w-0">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer"
              role="link"
              tabIndex={0}
              aria-label="Ir para o topo"
              onClick={handleScrollToHero}
              onKeyDown={handleLogoKeyDown}
            >
              <img
                src={webgestLogo}
                alt="WebGest Logo"
                className="h-24 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-label={item.ariaLabel}
                onClick={handleNavClick}
                className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end">
            {/* CTA Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-4 pr-6">
              <a
                href="#contato"
                onClick={handleNavClick}
                className="bg-gradient-to-r from-primary to-webgest-orange text-white px-3 py-1.5 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Fale Conosco
              </a>
              <a
                href="https://webgestsolutions.com/webconnect/login.php"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir Portal do Cliente"
                className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
              >
                Portal do Cliente
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={item.ariaLabel}
                  onClick={handleNavClick}
                  className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contato"
                onClick={handleNavClick}
                className="bg-gradient-to-r from-primary to-webgest-orange text-white px-6 py-3 rounded-lg font-semibold text-center mt-4"
              >
                Fale Conosco
              </a>
              <a
                href="https://webgestsolutions.com/webconnect/login.php"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir Portal do Cliente"
                onClick={() => setIsMenuOpen(false)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-blue-700 transition-colors duration-200"
              >
                Portal do Cliente
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

