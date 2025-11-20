import type React from "react";
import { Globe, Zap, Settings, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function Services() {
  const { t } = useLanguage();

  const goToContact = (e?: React.MouseEvent) => {
    e?.preventDefault?.();
    const el = document.getElementById('contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: Globe,
      title: t("services.sites.title"),
      description: t("services.sites.text"),
      features: [
        t("services.sites.feature1"),
        t("services.sites.feature2"),
        t("services.sites.feature3")
      ],
    },
    {
      icon: Zap,
      title: t("services.landing.title"),
      description: t("services.landing.text"),
      features: [
        t("services.landing.feature1"),
        t("services.landing.feature2"),
        t("services.landing.feature3")
      ],
    },
    {
      icon: Settings,
      title: t("services.systems.title"),
      description: t("services.systems.text"),
      features: [
        t("services.systems.feature1"),
        t("services.systems.feature2"),
        t("services.systems.feature3")
      ],
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-accent/20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("services.sectionTitle")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("services.sectionSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group flex flex-col h-full"
              >
                {/* Icon */}
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-webgest-orange mb-6 group-hover:scale-110 transition-transform duration-300">
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

                {/* Spacer to preserve layout after removing CTA */}
                <div className="mt-auto" aria-hidden="true"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#contato"
            onClick={goToContact}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-webgest-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {t("services.card.cta")}
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

