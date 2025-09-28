import { useState, useEffect, KeyboardEvent, MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import webgestLogo from "@/assets/webgest-logo-transparent.png";

type NavigationItem = {
  name: string;
  href: string;
  scrollId?: string;
  ariaLabel?: string;
};

const navigation: NavigationItem[] = [
  { name: "In\u00edcio", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Servi\u00e7os", href: "#services" },
  {
    name: "Planos",
    href: "/#plans",
    scrollId: "plans",
    ariaLabel: "Ir para a se\u00e7\u00e3o Planos"
  },
  { name: "Contato", href: "#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleLogoKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleScrollToHero();
    }
  };

  const isHomePage = () =>
    typeof window !== 'undefined' && window.location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigationClick = (
    event: MouseEvent<HTMLAnchorElement>,
    item: NavigationItem
  ) => {
    if (item.scrollId && isHomePage()) {
      event.preventDefault();
      scrollToSection(item.scrollId);
      setIsMenuOpen(false);
      return;
    }

    setIsMenuOpen(false);
  };

  const handleNavigationKeyDown = (
    event: KeyboardEvent<HTMLAnchorElement>,
    item: NavigationItem
  ) => {
    if (event.key === 'Enter' && item.scrollId && isHomePage()) {
      event.preventDefault();
      scrollToSection(item.scrollId);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-xl border-b border-border/30 shadow-lg' 
        : 'bg-gradient-to-r from-primary/10 via-primary/5 to-webgest-orange/10 backdrop-blur-sm border-b border-white/10'
    }`}>
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between h-16">
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

           {/* Desktop Navigation */}
           <nav className="hidden md:flex items-center space-x-8">
             {navigation.map((item) => (
               <a
                 key={item.name}
                 href={item.href}
                 aria-label={item.ariaLabel}
                 onClick={(event) => handleNavigationClick(event, item)}
                 onKeyDown={(event) => handleNavigationKeyDown(event, item)}
                 className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
               >
                 {item.name}
               </a>
             ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-gradient-to-r from-primary to-webgest-orange text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Fale Conosco
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={item.ariaLabel}
                  onClick={(event) => handleNavigationClick(event, item)}
                  onKeyDown={(event) => handleNavigationKeyDown(event, item)}
                  className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-to-r from-primary to-webgest-orange text-white px-6 py-3 rounded-lg font-semibold text-center mt-4"
              >
                Fale Conosco
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
