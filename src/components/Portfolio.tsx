import React from "react";
import { ExternalLink } from "lucide-react";
import machineImg from "@/assets/machine.jpg";
import bellaImg from "@/assets/bella.jpg";
import loyaltifyImg from "@/assets/loyaltify-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

type Project = {
  titleKey: TranslationKey;
  image: string;
  href?: string;
  buttonKey?: TranslationKey;
};

const projects: Project[] = [
  {
    titleKey: "portfolio.card.machine.title",
    href: "https://machineprodutora.com.br/",
    image: machineImg
  },
  {
    titleKey: "portfolio.card.bella.title",
    href: "https://www.bellabronze.com.br/",
    image: bellaImg,
    buttonKey: "portfolio.card.bella.button"
  },
  {
    titleKey: "portfolio.card.loyaltify.title",
    href: "https://loyaltify.vercel.app/",
    image: loyaltifyImg
  }
];

function Portfolio() {
  const { t } = useLanguage();
  return (
    <section id="portfolio" className="relative overflow-hidden">
      {/* strong blue → orange gradient background */}
      <div className="portfolio-gradient pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight text-white drop-shadow-sm sm:text-4xl md:text-5xl">
            {t("portfolio.sectionTitle")}
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-base/7 text-white/90 sm:mt-4 sm:text-lg">
            {t("portfolio.sectionSubtitle")}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const CardInner = (
              <article
                className={[
                  "group relative flex h-full flex-col rounded-2xl bg-white/95 shadow-lg ring-1 ring-black/5",
                  "transition-transform duration-300 will-change-transform",
                  "hover:-translate-y-1 hover:rotate-[-1.5deg]"
                ].join(" ")}
              >
                <div className="h-[220px] overflow-hidden rounded-2xl bg-muted">
                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-center justify-between gap-3 rounded-b-2xl px-5 py-4">
                  <h3 className="text-base font-semibold text-neutral-900">
                    {t(project.titleKey)}
                  </h3>

                  {project.href && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2F6BFF] to-[#FF7A3D] px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-black/5 transition-all hover:brightness-105 group-hover:-translate-y-0.5">
                      {t(project.buttonKey ?? "portfolio.card.machine.button")} <ExternalLink size={16} />
                    </span>
                  )}
                </div>
              </article>
            );

            return project.href ? (
              <a
                key={project.titleKey}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full w-full"
              >
                {CardInner}
              </a>
            ) : (
              <div key={project.title} className="block h-full w-full">
                {CardInner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
export { Portfolio };
