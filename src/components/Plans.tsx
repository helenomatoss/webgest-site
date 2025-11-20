import { Globe, Rocket, Crown, Sparkles, Target } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

type PlanConfig = {
  icon: typeof Globe;
  titleKey: TranslationKey;
  highlightKey: TranslationKey;
  featureKeys: TranslationKey[];
};

const mainPlans: PlanConfig[] = [
  {
    icon: Globe,
    titleKey: "plans.basic.title",
    highlightKey: "plans.basic.subtitle",
    featureKeys: [
      "plans.basic.item1",
      "plans.basic.item2",
      "plans.basic.item3",
      "plans.basic.item4"
    ]
  },
  {
    icon: Rocket,
    titleKey: "plans.pro.title",
    highlightKey: "plans.pro.subtitle",
    featureKeys: [
      "plans.pro.item1",
      "plans.pro.item2",
      "plans.pro.item3",
      "plans.pro.item4"
    ]
  },
  {
    icon: Crown,
    titleKey: "plans.plus.title",
    highlightKey: "plans.plus.subtitle",
    featureKeys: [
      "plans.plus.item1",
      "plans.plus.item2",
      "plans.plus.item3",
      "plans.plus.item4",
      "plans.plus.item5"
    ]
  }
];

type LandingPageConfig = {
  icon: typeof Sparkles;
  titleKey: TranslationKey;
  featureKeys: TranslationKey[];
};

const landingPages: LandingPageConfig[] = [
  {
    icon: Sparkles,
    titleKey: "plans.lps.express.title",
    featureKeys: [
      "plans.lps.express.item1",
      "plans.lps.express.item2",
      "plans.lps.express.item3"
    ]
  },
  {
    icon: Target,
    titleKey: "plans.lps.pro.title",
    featureKeys: [
      "plans.lps.pro.item1",
      "plans.lps.pro.item2",
      "plans.lps.pro.item3"
    ]
  }
];

export function Plans() {
  const { t } = useLanguage();

  return (
    <section id="plans" className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("plans.sectionTitle")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("plans.sectionSubtitle")}
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
                  {t(plan.titleKey)}
                </h3>
                <p className="text-primary font-semibold mb-6">
                  {t(plan.highlightKey)}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.featureKeys.map((feature, index) => (
                    <li key={index} className="flex items-center text-muted-foreground leading-relaxed">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-webgest-orange rounded-full mr-3"></div>
                      <span>{t(feature)}</span>
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
            {t("plans.lps.title")}
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
                    {t(option.titleKey)}
                  </h4>

                  <ul className="space-y-3 mb-8">
                    {option.featureKeys.map((feature, index) => (
                      <li key={index} className="flex items-center text-muted-foreground leading-relaxed">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-webgest-orange rounded-full mr-3"></div>
                        <span>{t(feature)}</span>
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

