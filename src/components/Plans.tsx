import { Globe, Rocket, Crown, Sparkles, Target } from "lucide-react";

const mainPlans = [
  {
    icon: Globe,
    name: "Plano Basic",
    highlight: "Site Simples",
    features: [
      "1 página (scroll único) ou até 3 páginas",
      "Design responsivo",
      "Integração com WhatsApp",
      "Entrega rápida (até 7 dias)"
    ]
  },
  {
    icon: Rocket,
    name: "Plano Pro",
    highlight: "Site Profissional",
    features: [
      "Até 6 páginas",
      "SEO básico",
      "Criação de 1 landing page por trimestre",
      "Relatórios simples (Google Analytics)"
    ]
  },
  {
    icon: Crown,
    name: "Plano Plus",
    highlight: "Site Premium",
    features: [
      "Site completo e customizado (até 10 páginas)",
      "SEO avançado",
      "Criação de 1 landing page por mês",
      "Relatórios completos",
      "Suporte prioritário"
    ]
  }
];

const landingPages = [
  {
    icon: Sparkles,
    name: "LP Express",
    features: [
      "1 landing page focada em conversão",
      "CTA forte e estratégico",
      "Integração com WhatsApp ou formulário"
    ]
  },
  {
    icon: Target,
    name: "LP Pro",
    features: [
      "1 landing page otimizada",
      "Copywriting premium",
      "Teste A/B básico",
      "Integração com CRM"
    ]
  }
];

export function Plans() {
  return (
    <section id="plans" className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Planos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha a solução ideal para o seu projeto digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {mainPlans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group flex flex-col h-full"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-webgest-orange mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-primary font-semibold mb-6">
                  {plan.highlight}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-muted-foreground leading-relaxed">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-webgest-orange rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto" aria-hidden="true"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground text-center mb-6">
            Extras: Landing Pages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {landingPages.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.name}
                  className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group flex flex-col h-full"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-webgest-orange mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h4 className="text-2xl font-bold text-foreground mb-4">
                    {option.name}
                  </h4>

                  <ul className="space-y-3 mb-8">
                    {option.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-muted-foreground leading-relaxed">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-webgest-orange rounded-full mr-3"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto" aria-hidden="true"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

