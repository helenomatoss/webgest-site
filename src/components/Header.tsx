import { useEffect, useState, KeyboardEvent, MouseEventHandler } from "react";
import { Menu, X } from "lucide-react";
import webgestLogo from "@/assets/webgest-logo-transparent.png";
import flagBrazil from "@/assets/flag-brazil.png";
import flagUSA from "@/assets/flag-usa.png";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

type NavigationItem = {
  key: TranslationKey;
  href: string;
  ariaKey?: TranslationKey;
};

const navigation: NavigationItem[] = [
  { key: "header.nav.home", href: "#inicio" },
  { key: "header.nav.about", href: "#sobre" },
  { key: "header.nav.portfolio", href: "#portfolio", ariaKey: "header.nav.portfolio.aria" },
  { key: "header.nav.services", href: "#servicos" },
  { key: "header.nav.plans", href: "#planos", ariaKey: "header.nav.plans.aria" },
  { key: "header.nav.contact", href: "#contato" }
] as const;

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
  const { locale, setLocale, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleChangeLang = (next: typeof locale) => {
    if (next === locale) return;
    setLocale(next);
  };

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

  const renderLanguageToggle = (onToggle?: () => void) => (
    <div
      className={
        "flex h-9 items-center rounded-full border px-1 gap-2 transition-all " +
        (isScrolled
          ? "bg-slate-900 text-white border-slate-200/40 shadow-sm"
          : "bg-white/10 text-white border-white/30 backdrop-blur-sm")
      }
    >
      <button
        type="button"
        onClick={() => {
          handleChangeLang("pt");
          onToggle?.();
        }}
        className={
          "flex h-7 items-center justify-center gap-1.5 px-2.5 py-1 rounded-full leading-none transition-colors " +
          (locale === "pt"
            ? "bg-white text-slate-900"
            : "bg-transparent text-inherit/80 hover:bg-white/10")
        }
        aria-pressed={locale === "pt"}
      >
        <img src={flagBrazil} alt="Brasil" className="w-[18px] h-[12px] object-contain" />
        <span className="text-xs font-medium leading-none">PT</span>
      </button>

      <span className="mx-1 h-4 w-px bg-white/20" />

      <button
        type="button"
        onClick={() => {
          handleChangeLang("en");
          onToggle?.();
        }}
        className={
          "flex h-7 items-center justify-center gap-1.5 px-2.5 py-1 rounded-full leading-none transition-colors " +
          (locale === "en"
            ? "bg-white text-slate-900"
            : "bg-transparent text-inherit/80 hover:bg-white/10")
        }
        aria-pressed={locale === "en"}
      >
        <img src={flagUSA} alt="USA" className="w-[18px] h-[12px] object-contain" />
        <span className="text-xs font-medium leading-none">EN</span>
      </button>
    </div>
  );

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
              aria-label={t("header.logo.aria")}
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
                key={item.key}
                href={item.href}
                aria-label={item.ariaKey ? t(item.ariaKey) : undefined}
                onClick={handleNavClick}
                className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end">
            {/* CTA Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-4 pl-6 pr-6">
              <a
                href="#contato"
                onClick={handleNavClick}
                className={
                  "bg-gradient-to-r from-primary to-webgest-orange text-white px-3 py-1.5 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap " +
                  (isScrolled ? "shadow-lg shadow-black/10 scale-[1.02]" : "shadow-md")
                }
              >
                {t("header.cta.contact")}
              </a>
              <a
                href="https://webgestsolutions.com/webconnect/login.php"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("header.cta.clientPortal.aria")}
                className={
                  "bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 whitespace-nowrap " +
                  (isScrolled ? "shadow-lg shadow-black/10 scale-[1.02]" : "shadow-md")
                }
              >
                {t("header.cta.clientPortal")}
              </a>
              <div className="ml-6 pr-2">{renderLanguageToggle()}</div>
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
                  key={item.key}
                  href={item.href}
                  aria-label={item.ariaKey ? t(item.ariaKey) : undefined}
                  onClick={handleNavClick}
                  className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium py-2"
                >
                  {t(item.key)}
                </a>
              ))}
              {renderLanguageToggle(() => setIsMenuOpen(false))}
              <a
                href="#contato"
                onClick={handleNavClick}
                className={
                  "bg-gradient-to-r from-primary to-webgest-orange text-white px-6 py-3 rounded-lg font-semibold text-center mt-4 " +
                  (isScrolled ? "shadow-lg shadow-black/10 scale-[1.02]" : "shadow-md")
                }
              >
                {t("header.cta.contact")}
              </a>
              <a
                href="https://webgestsolutions.com/webconnect/login.php"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("header.cta.clientPortal.aria")}
                onClick={() => setIsMenuOpen(false)}
                className={
                  "bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-blue-700 transition-colors duration-200 " +
                  (isScrolled ? "shadow-lg shadow-black/10 scale-[1.02]" : "shadow-md")
                }
              >
                {t("header.cta.clientPortal")}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
