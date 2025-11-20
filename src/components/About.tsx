import { Shield, Zap, Target } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Shield,
      title: "Confiança",
      description: "Transparência e qualidade"
    },
    {
      icon: Zap,
      title: "Tecnologia",
      description: "Soluções modernas e escaláveis"
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Foco em conversão e performance"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background relative tech-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre a WebGest
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos especialistas em transformar ideias em <strong>soluções digitais de alto impacto</strong>. 
            Da criação de sites a sistemas internos sob medida, ajudamos empresas a crescer com 
            <strong> tecnologia e inovação</strong>.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="text-center group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-primary to-webgest-orange p-6 rounded-2xl inline-block mb-6 group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-r from-primary/5 to-webgest-orange/5 rounded-2xl p-8 md:p-12 border border-border/20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Nossa Missão
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Democratizar o acesso à tecnologia de qualidade, oferecendo soluções digitais 
              que impulsionam o crescimento de empresas de todos os portes. Acreditamos que 
              cada negócio merece uma presença digital profissional e eficiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
