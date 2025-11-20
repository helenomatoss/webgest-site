export type Locale = "pt" | "en";

export const availableLocales: Locale[] = ["pt", "en"];

const pt = {
  // Header
  "header.nav.home": "Início",
  "header.nav.about": "Sobre",
  "header.nav.services": "Serviços",
  "header.nav.portfolio": "Portfólio",
  "header.nav.plans": "Planos",
  "header.nav.contact": "Contato",
  "header.nav.portfolio.aria": "Ir para a seção Portfólio",
  "header.nav.plans.aria": "Ir para a seção Planos",
  "header.logo.aria": "Ir para o topo",
  "header.cta.contact": "Fale Conosco",
  "header.cta.clientPortal": "Portal do Cliente",
  "header.cta.clientPortal.aria": "Abrir Portal do Cliente",

  // Hero
  "hero.title": "Soluções digitais elevam\nsua presença online",
  "hero.subtitle":
    "Do conceito ao digital: sites, landing pages e sistemas internos que entregam resultados.",
  "hero.cta.primary": "Solicitar Orçamento",
  "hero.cta.secondary": "Ver Serviços",

  // About
  "about.title": "Sobre a WebGest",
  "about.description.part1": "Somos especialistas em transformar ideias em",
  "about.description.highlight1": "soluções digitais de alto impacto",
  "about.description.part2":
    "Da criação de sites a sistemas internos sob medida, ajudamos empresas a crescer com",
  "about.description.highlight2": "tecnologia e inovação",
  "about.card.trust.title": "Confiança",
  "about.card.trust.text": "Transparência e qualidade",
  "about.card.tech.title": "Tecnologia",
  "about.card.tech.text": "Soluções modernas e escaláveis",
  "about.card.results.title": "Resultados",
  "about.card.results.text": "Foco em conversão e performance",
  "mission.title": "Nossa Missão",
  "mission.text":
    "Democratizar o acesso à tecnologia de qualidade, oferecendo soluções digitais que impulsionam o crescimento de empresas de todos os portes. Acreditamos que cada negócio merece uma presença digital profissional e eficiente.",

  // Services
  "services.sectionTitle": "Nossos Serviços",
  "services.sectionSubtitle":
    "Soluções digitais completas para levar seu negócio ao próximo nível",
  "services.sites.title": "Sites Profissionais",
  "services.sites.text":
    "Sites institucionais, blogs e catálogos online que impressionam e convertem visitantes em clientes.",
  "services.sites.feature1": "Design responsivo",
  "services.sites.feature2": "Carregamento rápido",
  "services.sites.feature3": "Fácil atualização",
  "services.landing.title": "Landing Pages de Conversão",
  "services.landing.text":
    "Páginas de alta performance focadas em captar leads e maximizar suas vendas online.",
  "services.landing.feature1": "Alta conversão",
  "services.landing.feature2": "A/B Testing",
  "services.landing.feature3": "Integração com CRM",
  "services.systems.title": "Sistemas Internos",
  "services.systems.text":
    "Ferramentas sob medida para gestão, automação e organização dos processos da sua empresa.",
  "services.systems.feature1": "Desenvolvimento customizado",
  "services.systems.feature2": "Segurança avançada",
  "services.systems.feature3": "Analytics avançado",
  "services.card.cta": "Solicitar Orçamento Personalizado",

  // Why Choose
  "why.sectionTitle": "Por que escolher a WebGest?",
  "why.sectionSubtitle":
    "Nossos diferenciais fazem toda a diferença no sucesso do seu projeto digital",
  "why.card.attendance.title": "Atendimento Personalizado",
  "why.card.attendance.text":
    "Cada projeto é único. Oferecemos suporte dedicado e comunicação direta do início ao fim.",
  "why.card.attendance.highlight": "Suporte dedicado 24/7",
  "why.card.strategy.title": "Soluções Rápidas e Escaláveis",
  "why.card.strategy.text":
    "Tecnologia de qualidade, preparada para crescer junto com seu negócio.",
  "why.card.strategy.highlight": "Escalabilidade garantida",
  "why.card.pricing.title": "Preços Justos e Transparentes",
  "why.card.pricing.text":
    "Orçamentos claros, sem surpresas. Investimento que traz retorno real para sua empresa.",
  "why.card.pricing.highlight": "ROI comprovado",
  "why.card.focus.title": "Foco em Resultado",
  "why.card.focus.text":
    "Não criamos apenas sites bonitos. Desenvolvemos soluções que geram leads, vendas e crescimento.",
  "why.card.focus.highlight": "Resultados mensuráveis",
  "why.stats.projects": "Projetos Entregues no Prazo",
  "why.stats.uptime": "Uptime",
  "why.stats.satisfaction": "Taxa de Satisfação",

  // CTA
  "cta.sectionTitle": "Pronto para elevar sua\npresença digital?",
  "cta.sectionSubtitle.part1": "Transforme suas ideias em",
  "cta.sectionSubtitle.highlight": "soluções digitais",
  "cta.sectionSubtitle.part2":
    "que geram resultados reais. Vamos conversar sobre o seu próximo projeto!",
  "cta.cta.primary": "Solicitar Orçamento Agora",
  "cta.cta.whatsapp": "WhatsApp",
  "cta.badges.fast": "Entrega Rápida",
  "cta.badges.quality": "Qualidade Premium",
  "cta.badges.results": "Resultados Reais",

  // Plans
  "plans.sectionTitle": "Planos",
  "plans.sectionSubtitle": "Escolha a solução ideal para o seu projeto digital",
  "plans.basic.title": "Plano Basic",
  "plans.basic.subtitle": "Site Simples",
  "plans.basic.item1": "1 página (scroll único) ou até 3 páginas",
  "plans.basic.item2": "Design responsivo",
  "plans.basic.item3": "Integração com WhatsApp",
  "plans.basic.item4": "Entrega rápida (até 7 dias)",
  "plans.pro.title": "Plano Pro",
  "plans.pro.subtitle": "Site Profissional",
  "plans.pro.item1": "Até 6 páginas",
  "plans.pro.item2": "SEO básico",
  "plans.pro.item3": "Criação de 1 landing page por trimestre",
  "plans.pro.item4": "Relatórios simples (Google Analytics)",
  "plans.plus.title": "Plano Plus",
  "plans.plus.subtitle": "Site Premium",
  "plans.plus.item1": "Site completo e customizado (até 10 páginas)",
  "plans.plus.item2": "SEO avançado",
  "plans.plus.item3": "Criação de 1 landing page por mês",
  "plans.plus.item4": "Relatórios completos",
  "plans.plus.item5": "Suporte prioritário",
  "plans.lps.title": "Extras: Landing Pages",
  "plans.lps.express.title": "LP Express",
  "plans.lps.express.item1": "1 landing page focada em conversão",
  "plans.lps.express.item2": "CTA forte e estratégico",
  "plans.lps.express.item3": "Integração com WhatsApp ou formulário",
  "plans.lps.pro.title": "LP Pro",
  "plans.lps.pro.item1": "1 landing page otimizada",
  "plans.lps.pro.item2": "Copywriting premium",
  "plans.lps.pro.item3": "Teste A/B básico",

  // Portfolio
  "portfolio.sectionTitle": "Parceiros na Transformação Digital",
  "portfolio.sectionSubtitle":
    "Conheça algumas das marcas que confiam na Webgest para impulsionar sua presença online.",
  "portfolio.card.machine.title": "Machine Produtora",
  "portfolio.card.machine.button": "Visitar",
  "portfolio.card.bella.title": "Studio Bella Bronze",
  "portfolio.card.bella.button": "Visitar",
  "portfolio.card.loyaltify.title": "Loyaltify",

  // Contact
  "contact.sectionTitle": "Entre em Contato",
  "contact.sectionSubtitle":
    "Pronto para começar seu projeto? Vamos conversar sobre suas necessidades digitais",
  "contact.direct.title": "Fale Conosco Diretamente",
  "contact.direct.description":
    "Escolha a forma mais conveniente para entrar em contato. Estamos sempre prontos para atender você!",
  "contact.direct.whatsapp.title": "WhatsApp",
  "contact.direct.whatsapp.subtitle": "Resposta rápida e atendimento personalizado",
  "contact.direct.phone.title": "Telefone",
  "contact.direct.phone.subtitle": "Seg-Sex, 9h às 18h",
  "contact.direct.email.title": "E-mail",
  "contact.direct.email.subtitle": "Resposta em até 24h",
  "contact.form.title": "Envie sua Mensagem",
  "contact.form.name": "Nome completo *",
  "contact.form.phone": "Telefone *",
  "contact.form.email": "E-mail *",
  "contact.form.message": "Mensagem *",
  "contact.form.submit": "Enviar Mensagem",
  "contact.form.sending": "Enviando...",
  "contact.form.placeholder.name": "Seu nome completo",
  "contact.form.placeholder.phone": "(11) 95166-4011",
  "contact.form.placeholder.email": "seu@email.com",
  "contact.form.placeholder.message": "Conte-nos sobre seu projeto...",
  "contact.form.feedback.success": "Mensagem enviada! Em breve entraremos em contato.",
  "contact.form.feedback.error": "Não foi possível enviar. Tente novamente.",
  "contact.form.feedback.invalidName": "Por favor, informe seu nome completo.",
  "contact.form.feedback.invalidEmail": "E-mail inválido.",
  "contact.form.feedback.invalidPhone": "Telefone inválido.",
  "contact.form.feedback.invalidMessage": "Escreva uma mensagem.",
  "contact.form.feedback.networkError": "Falha de conexão. Tente novamente.",

  // Footer
  "footer.description":
    "Transformando ideias em soluções digitais de alto impacto. Especialistas em sites profissionais, landing pages e sistemas internos que geram resultados reais.",
  "footer.description.part1": "Transformando ideias em",
  "footer.description.highlight": "soluções digitais de alto impacto",
  "footer.description.part2":
    "Especialistas em sites profissionais, landing pages e sistemas internos que geram resultados reais.",
  "footer.links.title": "Links Rápidos",
  "footer.services.title": "Nossos Serviços",
  "footer.links.home": "Início",
  "footer.links.services": "Serviços",
  "footer.links.portfolio": "Portfólio",
  "footer.links.contact": "Contato",
  "footer.services.sites": "Sites Profissionais",
  "footer.services.landing": "Landing Pages",
  "footer.services.systems": "Sistemas Internos",
  "footer.services.ecommerce": "E-commerce",
  "footer.cta": "Iniciar Projeto",
  "footer.bottom.copyright": "© 2025 WebGest — Todos os direitos reservados.",
  "footer.bottom.madeBy": "Desenvolvido com ♥ pela WebGest",

  // Not Found
  "notFound.title": "Página não encontrada",
  "notFound.description": "Ops! A página que você está procurando não existe ou foi movida.",
  "notFound.cta.home": "Voltar ao Início",
  "notFound.cta.back": "Voltar",

  // Misc
  "whatsapp.ariaLabel": "Abrir conversa no WhatsApp",
} as const;

const en: typeof pt = {
  // Header
  "header.nav.home": "Home",
  "header.nav.about": "About",
  "header.nav.services": "Services",
  "header.nav.portfolio": "Portfolio",
  "header.nav.plans": "Plans",
  "header.nav.contact": "Contact",
  "header.nav.portfolio.aria": "Go to the Portfolio section",
  "header.nav.plans.aria": "Go to the Plans section",
  "header.logo.aria": "Go to top",
  "header.cta.contact": "Contact Us",
  "header.cta.clientPortal": "Client Portal",
  "header.cta.clientPortal.aria": "Open Client Portal",

  // Hero
  "hero.title": "Digital solutions elevate\nyour online presence",
  "hero.subtitle":
    "From concept to digital: websites, landing pages and internal systems that deliver real results.",
  "hero.cta.primary": "Request a Quote",
  "hero.cta.secondary": "View Services",

  // About
  "about.title": "About WebGest",
  "about.description.part1": "We specialize in turning ideas into",
  "about.description.highlight1": "high-impact digital solutions",
  "about.description.part2":
    "From building websites to tailor-made internal systems, we help businesses grow with",
  "about.description.highlight2": "technology and innovation",
  "about.card.trust.title": "Trust",
  "about.card.trust.text": "Transparency and quality",
  "about.card.tech.title": "Technology",
  "about.card.tech.text": "Modern and scalable solutions",
  "about.card.results.title": "Results",
  "about.card.results.text": "Focused on conversion and performance",
  "mission.title": "Our Mission",
  "mission.text":
    "To democratize access to quality technology by offering digital solutions that drive growth for companies of all sizes. We believe every business deserves a professional, efficient digital presence.",

  // Services
  "services.sectionTitle": "Our Services",
  "services.sectionSubtitle":
    "Complete digital solutions to take your business to the next level",
  "services.sites.title": "Professional Websites",
  "services.sites.text":
    "Institutional websites, blogs, and online catalogs that impress and turn visitors into clients.",
  "services.sites.feature1": "Responsive design",
  "services.sites.feature2": "Fast loading",
  "services.sites.feature3": "Easy to update",
  "services.landing.title": "Conversion-Focused Landing Pages",
  "services.landing.text":
    "High-performance pages built to capture leads and maximize your online sales.",
  "services.landing.feature1": "High conversion",
  "services.landing.feature2": "A/B Testing",
  "services.landing.feature3": "CRM integration",
  "services.systems.title": "Internal Systems",
  "services.systems.text":
    "Tailor-made tools for managing, automating, and organizing your company's processes.",
  "services.systems.feature1": "Custom development",
  "services.systems.feature2": "Advanced security",
  "services.systems.feature3": "Advanced analytics",
  "services.card.cta": "Request a Custom Quote",

  // Why Choose
  "why.sectionTitle": "Why choose WebGest?",
  "why.sectionSubtitle":
    "Our differentiators make all the difference in your digital project's success",
  "why.card.attendance.title": "Personalized Support",
  "why.card.attendance.text":
    "Every project is unique. We offer dedicated support and direct communication from start to finish.",
  "why.card.attendance.highlight": "Dedicated support 24/7",
  "why.card.strategy.title": "Fast, Scalable Solutions",
  "why.card.strategy.text":
    "Quality technology, ready to grow alongside your business.",
  "why.card.strategy.highlight": "Scalability guaranteed",
  "why.card.pricing.title": "Transparent, Fair Pricing",
  "why.card.pricing.text":
    "Clear estimates with no surprises. An investment that brings real returns for your company.",
  "why.card.pricing.highlight": "Proven ROI",
  "why.card.focus.title": "Results-Driven",
  "why.card.focus.text":
    "We don’t just create beautiful sites. We build solutions that generate leads, sales, and growth.",
  "why.card.focus.highlight": "Measurable results",
  "why.stats.projects": "Projects Delivered on Time",
  "why.stats.uptime": "Uptime",
  "why.stats.satisfaction": "Satisfaction Rate",

  // CTA
  "cta.sectionTitle": "Ready to elevate your\ndigital presence?",
  "cta.sectionSubtitle.part1": "Turn your ideas into",
  "cta.sectionSubtitle.highlight": "digital solutions",
  "cta.sectionSubtitle.part2":
    "that deliver real results. Let's talk about your next project!",
  "cta.cta.primary": "Request a Quote Now",
  "cta.cta.whatsapp": "WhatsApp",
  "cta.badges.fast": "Fast Delivery",
  "cta.badges.quality": "Premium Quality",
  "cta.badges.results": "Real Results",

  // Plans
  "plans.sectionTitle": "Plans",
  "plans.sectionSubtitle": "Choose the ideal solution for your digital project",
  "plans.basic.title": "Basic Plan",
  "plans.basic.subtitle": "Simple Website",
  "plans.basic.item1": "1 page (single scroll) or up to 3 pages",
  "plans.basic.item2": "Responsive design",
  "plans.basic.item3": "WhatsApp integration",
  "plans.basic.item4": "Fast delivery (up to 7 days)",
  "plans.pro.title": "Pro Plan",
  "plans.pro.subtitle": "Professional Website",
  "plans.pro.item1": "Up to 6 pages",
  "plans.pro.item2": "Basic SEO",
  "plans.pro.item3": "1 landing page per quarter",
  "plans.pro.item4": "Simple reporting (Google Analytics)",
  "plans.plus.title": "Plus Plan",
  "plans.plus.subtitle": "Premium Website",
  "plans.plus.item1": "Full, custom website (up to 10 pages)",
  "plans.plus.item2": "Advanced SEO",
  "plans.plus.item3": "1 landing page per month",
  "plans.plus.item4": "Full reporting",
  "plans.plus.item5": "Priority support",
  "plans.lps.title": "Extras: Landing Pages",
  "plans.lps.express.title": "Express LP",
  "plans.lps.express.item1": "1 conversion-focused landing page",
  "plans.lps.express.item2": "Strong, strategic CTA",
  "plans.lps.express.item3": "WhatsApp or form integration",
  "plans.lps.pro.title": "Pro LP",
  "plans.lps.pro.item1": "1 optimized landing page",
  "plans.lps.pro.item2": "Premium copywriting",
  "plans.lps.pro.item3": "Basic A/B testing",

  // Portfolio
  "portfolio.sectionTitle": "Partners in Digital Transformation",
  "portfolio.sectionSubtitle":
    "Check out some of the brands that trust Webgest to boost their online presence.",
  "portfolio.card.machine.title": "Machine Produtora",
  "portfolio.card.machine.button": "Visit",
  "portfolio.card.bella.title": "Studio Bella Bronze",
  "portfolio.card.bella.button": "Visit",
  "portfolio.card.loyaltify.title": "Loyaltify",

  // Contact
  "contact.sectionTitle": "Get in Touch",
  "contact.sectionSubtitle":
    "Ready to start your project? Let's discuss your digital needs",
  "contact.direct.title": "Contact Us Directly",
  "contact.direct.description":
    "Choose the most convenient way to reach us. We're always ready to help!",
  "contact.direct.whatsapp.title": "WhatsApp",
  "contact.direct.whatsapp.subtitle": "Fast response and personalized support",
  "contact.direct.phone.title": "Phone",
  "contact.direct.phone.subtitle": "Mon–Fri, 9am to 6pm",
  "contact.direct.email.title": "Email",
  "contact.direct.email.subtitle": "Response within 24h",
  "contact.form.title": "Send Your Message",
  "contact.form.name": "Full name *",
  "contact.form.phone": "Phone *",
  "contact.form.email": "Email *",
  "contact.form.message": "Message *",
  "contact.form.submit": "Send Message",
  "contact.form.sending": "Sending...",
  "contact.form.placeholder.name": "Your full name",
  "contact.form.placeholder.phone": "(11) 95166-4011",
  "contact.form.placeholder.email": "your@email.com",
  "contact.form.placeholder.message": "Tell us about your project...",
  "contact.form.feedback.success": "Message sent! We'll get in touch soon.",
  "contact.form.feedback.error": "Couldn't send it. Please try again.",
  "contact.form.feedback.invalidName": "Please enter your full name.",
  "contact.form.feedback.invalidEmail": "Invalid email.",
  "contact.form.feedback.invalidPhone": "Invalid phone number.",
  "contact.form.feedback.invalidMessage": "Write a message.",
  "contact.form.feedback.networkError": "Connection failed. Please try again.",

  // Footer
  "footer.description":
    "Transforming ideas into high-impact digital solutions. Specialists in professional websites, landing pages, and internal systems that deliver real results.",
  "footer.description.part1": "Transforming ideas into",
  "footer.description.highlight": "high-impact digital solutions",
  "footer.description.part2":
    "Specialists in professional websites, landing pages, and internal systems that deliver real results.",
  "footer.links.title": "Quick Links",
  "footer.services.title": "Our Services",
  "footer.links.home": "Home",
  "footer.links.services": "Services",
  "footer.links.portfolio": "Portfolio",
  "footer.links.contact": "Contact",
  "footer.services.sites": "Professional Websites",
  "footer.services.landing": "Landing Pages",
  "footer.services.systems": "Internal Systems",
  "footer.services.ecommerce": "E-commerce",
  "footer.cta": "Start a Project",
  "footer.bottom.copyright": "© 2025 WebGest — All rights reserved.",
  "footer.bottom.madeBy": "Built with ♥ by WebGest",

  // Not Found
  "notFound.title": "Page not found",
  "notFound.description":
    "Oops! The page you're looking for doesn't exist or was moved.",
  "notFound.cta.home": "Back to Home",
  "notFound.cta.back": "Go Back",

  // Misc
  "whatsapp.ariaLabel": "Open WhatsApp chat",
};

export type TranslationKey = keyof typeof pt;

export const translations: Record<Locale, Record<TranslationKey, string>> = {
  pt,
  en,
};
