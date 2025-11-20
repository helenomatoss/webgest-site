import { Users, Rocket, DollarSign, Trophy } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

type Differential = {
  icon: typeof Users;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  highlightKey: TranslationKey;
};

const differentials: Differential[] = [
  {
    icon: Users,
    titleKey: "why.card.attendance.title",
    descriptionKey: "why.card.attendance.text",
    highlightKey: "why.card.attendance.highlight"
  },
  {
    icon: Rocket,
    titleKey: "why.card.strategy.title",
    descriptionKey: "why.card.strategy.text",
    highlightKey: "why.card.strategy.highlight"
  },
  {
    icon: DollarSign,
    titleKey: "why.card.pricing.title",
    descriptionKey: "why.card.pricing.text",
    highlightKey: "why.card.pricing.highlight"
  },
  {
    icon: Trophy,
    titleKey: "why.card.focus.title",
    descriptionKey: "why.card.focus.text",
    highlightKey: "why.card.focus.highlight"
  }
];

export function WhyChoose() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background relative tech-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("why.sectionTitle")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("why.sectionSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {differentials.map((differential) => {
            const Icon = differential.icon;
            return (
              <div
                key={differential.titleKey}
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
                    {t(differential.titleKey)}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {t(differential.descriptionKey)}
                  </p>
                  
                  {/* Highlight */}
                  <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-webgest-orange/10 text-primary font-semibold px-4 py-2 rounded-full text-sm">
                    {t(differential.highlightKey)}
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
              <div className="text-muted-foreground">{t("why.stats.projects")}</div>
            </div>
            <div aria-label={`${t("why.stats.uptime")} 99%`}>
              <div className="text-4xl font-bold text-webgest-orange mb-2">99%</div>
              <div className="text-muted-foreground">{t("why.stats.uptime")}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">{t("why.stats.satisfaction")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
