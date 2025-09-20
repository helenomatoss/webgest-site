import { Globe, Zap, Settings, ArrowRight } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Globe,
      title: "Sites Profissionais",
      description: "Sites institucionais, blogs e catálogos online que impressionam e convertem visitantes em clientes.",
      features: [
        "Design responsivo",
        "Carregamento rápido",
        "Fácil atualização"
      ],
      color: "from-primary to-primary-light"
    },
    {
      icon: Zap,
      title: "Landing Pages de Conversão",
      description: "Páginas de alta performance focadas em captar leads e maximizar suas vendas online.",
      features: [
        "Alta conversão",
        "A/B Testing",
        "Integração com CRM"
      ],
      color: "from-webgest-orange to-webgest-orange-light"
    },
    {
      icon: Settings,
      title: "Sistemas Internos",
      description: "Ferramentas sob medida para gestão, automação e organização dos processos da sua empresa.",
      features: [
        "Desenvolvimento customizado",
        "Segurança avançada",
        "Analytics avançado"
      ],
      color: "from-primary to-webgest-orange"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-accent/20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções digitais completas para levar seu negócio ao próximo nível
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group"
              >
                {/* Icon */}
                <div className={`bg-gradient-to-r ${service.color} p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-webgest-orange rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-primary/10 to-webgest-orange/10 text-primary font-semibold py-3 px-6 rounded-lg hover:from-primary hover:to-webgest-orange hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105">
                  Saiba Mais
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-webgest-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Solicitar Orçamento Personalizado
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}