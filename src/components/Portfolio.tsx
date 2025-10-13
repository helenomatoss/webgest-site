import React from "react";
import { ExternalLink } from "lucide-react";
import machineImg from "@/assets/machine.jpg";
import bellaImg from "@/assets/bella.jpg";
import thaynaImg from "@/assets/thayna.jpg";

type Project = {
  title: string;
  href: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Machine Produtora",
    href: "#",
    image: machineImg
  },
  {
    title: "Studio Bella Bronze",
    href: "#",
    image: bellaImg
  },
  {
    title: "Thayna Baterias",
    href: "#",
    image: thaynaImg
  }
];

function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden">
      {/* strong blue → orange gradient background */}
      <div className="portfolio-gradient pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight text-white drop-shadow-sm sm:text-4xl md:text-5xl">
            Parceiros na Transformação Digital
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-base/7 text-white/90 sm:mt-4 sm:text-lg">
            Conheça algumas das marcas que confiam na Webgest para impulsionar
            sua presença online.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={[
                "group relative rounded-2xl bg-white/95 shadow-lg ring-1 ring-black/5",
                "transition-transform duration-300 will-change-transform",
                "hover:-translate-y-1 hover:rotate-[-1.5deg]"
              ].join(" ")}
            >
              <div className="rounded-2xl overflow-hidden h-[220px] bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center justify-between gap-3 rounded-b-2xl px-5 py-4">
                <h3 className="text-base font-semibold text-neutral-900">
                  {project.title}
                </h3>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2F6BFF] to-[#FF7A3D] px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-black/5 transition-all hover:brightness-105 group-hover:-translate-y-0.5"
                >
                  Visitar <ExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
export { Portfolio };
