import { Link } from "react-router-dom";
import StatCard from "../ui/StatCard";
import ImageReveal from "../ui/ImageReveal";
import RevealGroup from "../ui/RevealGroup";
import ScrollReveal from "../ui/ScrollReveal";
import { projects, landingImages } from "../../data/projects";
import { site } from "../../data/site";

const stats = [
  site.stats.experience,
  site.stats.awards,
  site.stats.team,
  site.stats.projects,
];

export default function Projects() {
  const featured = projects.find((p) => p.featured) || projects[0];
  const tall = projects.filter((p) => p.size === "tall");
  const wide = projects.find((p) => p.size === "wide");

  let delay = 0;
  const nextDelay = () => {
    const d = delay;
    delay += 100;
    return d;
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="absolute right-0 top-24 h-48 w-1/3 max-w-sm bg-brand-mint" />
      <RevealGroup className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal className="mb-12 text-right">
          <h2 className="font-serif text-3xl font-bold text-brand-dark md:text-4xl lg:text-[2.75rem]">
            Let&apos;s explore our signature projects
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="relative md:col-span-7">
            <ImageReveal
              src={featured.image}
              alt={featured.title}
              className="h-[320px] w-full md:h-[400px]"
              delay={nextDelay()}
            />
            <ScrollReveal delay={200} className="absolute bottom-6 right-6 max-w-xs">
              <div className="bg-white/90 p-6 backdrop-blur-sm">
                <h3 className="font-serif text-xl font-bold text-brand-dark">
                  {featured.title}
                </h3>
                <p className="mt-2 font-sans text-sm text-gray-500">
                  {featured.description}
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 gap-4 md:col-span-5">
            {tall.slice(0, 2).map((p) => (
              <ImageReveal
                key={p.id}
                src={p.image}
                alt={p.title}
                className="h-48 w-full md:h-[190px]"
                delay={nextDelay()}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 border border-dotted border-gray-200 md:col-span-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="border border-dotted border-gray-200"
              >
                <ScrollReveal delay={80 + i * 60}>
                  <StatCard value={stat.value} label={stat.label} />
                </ScrollReveal>
              </div>
            ))}
          </div>

          <div className="md:col-span-3">
            <ImageReveal
              src={landingImages.projectsMedium}
              alt="Sector-2 Faridabad — dining"
              className="h-64 w-full md:h-full"
              delay={nextDelay()}
            />
          </div>

          {wide && (
            <div className="md:col-span-5">
              <ImageReveal
                src={wide.image}
                alt={wide.title}
                className="h-48 w-full md:h-64"
                delay={nextDelay()}
              />
            </div>
          )}
        </div>

        <ScrollReveal delay={120} className="mt-10 text-center">
          <Link
            to="/portfolio"
            className="font-sans text-sm text-brand-dark underline underline-offset-4 hover:opacity-80"
          >
            View Full Portfolio →
          </Link>
        </ScrollReveal>
      </RevealGroup>
    </section>
  );
}
