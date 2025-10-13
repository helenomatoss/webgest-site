import { MouseEvent } from "react";
import { Instagram, Mail, Phone } from "lucide-react";
import { PHONE_DISPLAY } from "@/config/contact";
import webgestLogo from "@/assets/webgest-logo-transparent.png";

export function Footer() {
  const quickLinks = [
    { name: "InÃ­cio", href: "#hero" },
    { name: "ServiÃ§os", href: "#services" },
    { name: "PortfÃ³lio", href: "#portfolio" },
    { name: "Contato", href: "#contato" }
  ];

  const services = [
    "Sites Profissionais",
    "Landing Pages",
    "Sistemas Internos",
    "E-commerce"
  ];
  const handleScrollToContact = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (typeof document === "undefined") return;

    const section = document.getElementById("contato");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full floating-element"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-white/20 rotate-45 floating-element" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 border border-white/20 rounded-full floating-element" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src={webgestLogo} 
                alt="WebGest Logo" 
                className="h-16 w-auto bg-white px-2 py-1 rounded-lg"
              />
            </div>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Transformando ideias em <strong>soluÃ§Ãµes digitais de alto impacto</strong>. 
              Especialistas em sites profissionais, landing pages e sistemas internos que geram resultados reais.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-white/80">
                <Phone className="h-4 w-4 mr-3 text-webgest-orange" />
                {PHONE_DISPLAY}
              </div>
              <div className="flex items-center text-white/80">
                <Mail className="h-4 w-4 mr-3 text-webgest-orange" />
                contato@webgestsolutions.com
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Links RÃ¡pidos</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-webgest-orange transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Nossos ServiÃ§os</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/80 block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a
                href="https://www.instagram.com/webgestsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Instagram – WebGest Solutions"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            
            {/* CTA Button */}
            <a
              href="#contato"
              onClick={handleScrollToContact}
              aria-label="Ir para contato"
              className="bg-gradient-to-r from-primary to-webgest-orange text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Iniciar Projeto
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6 text-center">
          <p className="text-white/60">
            Â© 2025 WebGest â€” Todos os direitos reservados. | Desenvolvido com â¤ï¸ pela WebGest
          </p>
        </div>
      </div>
    </footer>
  );
}




