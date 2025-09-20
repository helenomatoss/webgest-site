import { Users, Rocket, DollarSign, Trophy } from "lucide-react";

export function WhyChoose() {
  const differentials = [
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Cada projeto é único. Oferecemos suporte dedicado e comunicação direta do início ao fim.",
      highlight: "Suporte dedicado 24/7"
    },
    {
      icon: Rocket,
      title: "Soluções Rápidas e Escaláveis",
      description: "Tecnologia de qualidade, preparada para crescer junto com seu negócio.",
      highlight: "Escalabilidade garantida"
    },
    {
      icon: DollarSign,
      title: "Preços Justos e Transparentes",
      description: "Orçamentos claros, sem surpresas. Investimento que traz retorno real para sua empresa.",
      highlight: "ROI comprovado"
    },
    {
      icon: Trophy,
      title: "Foco em Resultado",
      description: "Não criamos apenas sites bonitos. Desenvolvemos soluções que geram leads, vendas e crescimento.",
      highlight: "Resultados mensuráveis"
    }
  ];

  return (
    <section className="py-20 bg-background relative tech-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Por que escolher a WebGest?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossos diferenciais fazem toda a diferença no sucesso do seu projeto digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {differentials.map((differential, index) => {
            const Icon = differential.icon;
            return (
              <div
                key={differential.title}
                className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg group relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-l from-primary/5 to-webgest-orange/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="bg-gradient-to-r from-primary to-webgest-orange p-3 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {differential.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {differential.description}
                  </p>
                  
                  {/* Highlight */}
                  <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-webgest-orange/10 text-primary font-semibold px-4 py-2 rounded-full text-sm">
                    {differential.highlight}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-webgest-orange/5 rounded-2xl p-8 border border-border/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Projetos Entregues no Prazo</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-webgest-orange mb-2">24h</div>
              <div className="text-muted-foreground">Tempo Médio de Resposta</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Taxa de Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}