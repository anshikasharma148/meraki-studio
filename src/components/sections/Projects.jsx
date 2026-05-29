import { Link } from "react-router-dom";
import StatCard from "../ui/StatCard";
import ImageReveal from "../ui/ImageReveal";
import ProjectHoverImage from "../ui/ProjectHoverImage";
import RevealGroup from "../ui/RevealGroup";
import ScrollReveal from "../ui/ScrollReveal";
import { pageContainer } from "../../constants/layout";
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
  const summary =
    site.projects?.summary ?? "Meraki Studio is one of the most popular for";

  let delay = 0;
  const nextDelay = () => {
    const d = delay;
    delay += 100;
    return d;
  };

  return (
    <section className="project-section relative z-[2] overflow-hidden bg-white py-16 lg:pt-[136px] lg:pb-16">
      <div
        className="pointer-events-none absolute right-0 top-20 z-0 h-52 w-[min(42%,480px)] bg-brand-mint lg:top-28 lg:h-[min(38%,320px)]"
        aria-hidden
      />

      <RevealGroup className={`${pageContainer} relative z-10`}>
        <div className="projects-mosaic">
          {/* Row 1–2 col 1: large featured */}
          <div className="projects-mosaic-featured">
            <div className="single-project relative h-full min-h-[280px] overflow-hidden sm:min-h-[360px]">
              <ImageReveal
                src={featured.image}
                alt={featured.title}
                className="h-full w-full min-h-[inherit]"
                imageClassName="h-full min-h-[inherit] object-cover"
                delay={nextDelay()}
              />
              <ScrollReveal
                delay={200}
                className="project-content absolute bottom-4 right-4 max-w-[min(92%,447px)] sm:bottom-6 sm:right-6"
              >
                <Link
                  to="/portfolio"
                  className="project-link-block block bg-white/95 px-6 py-6 sm:px-8 sm:py-7"
                >
                  <h3 className="project-title">{featured.title}</h3>
                  <p className="project-summary mt-2.5">{summary}</p>
                </Link>
              </ScrollReveal>
            </div>
          </div>

          {/* Row 1 col 2–3: heading */}
          <ScrollReveal className="projects-mosaic-heading">
            <h2 className="projects-section-title">
              Let&apos;s explore our signature projects
            </h2>
          </ScrollReveal>

          {/* Row 2 col 2 & 3: two vertical tiles */}
          {tall.slice(0, 2).map((p, i) => (
            <ProjectHoverImage
              key={p.id}
              src={p.image}
              alt={p.title}
              className={`projects-mosaic-tile-top projects-mosaic-tile-top--${
                i + 1
              } aspect-[4/5] w-full sm:aspect-auto sm:min-h-[190px] lg:h-full lg:min-h-0`}
              delay={nextDelay()}
            />
          ))}

          {/* Row 3 col 1: stats */}
          <div className="counter-wrapper projects-mosaic-stats grid grid-cols-2 border border-dotted border-gray-200">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="border border-dotted border-gray-200"
              >
                <ScrollReveal delay={80 + i * 60}>
                  <StatCard
                    value={stat.value}
                    label={stat.label}
                    variant="project"
                  />
                </ScrollReveal>
              </div>
            ))}
          </div>

          {/* Row 3 col 2: dining */}
          <ProjectHoverImage
            src={landingImages.projectsMedium}
            alt="Dining interior"
            className="projects-mosaic-tile-bottom projects-mosaic-tile-bottom--1 aspect-[4/5] w-full sm:aspect-auto sm:min-h-[220px] lg:h-full lg:min-h-0"
            delay={nextDelay()}
          />

          {/* Row 3 col 3: wide office */}
          {wide && (
            <ProjectHoverImage
              src={wide.image}
              alt={wide.title}
              className="projects-mosaic-tile-bottom projects-mosaic-tile-bottom--2 aspect-[16/10] w-full sm:aspect-auto sm:min-h-[220px] lg:h-full lg:min-h-0"
              delay={nextDelay()}
            />
          )}
        </div>

        <ScrollReveal delay={120} className="mt-10 text-center lg:mt-12">
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
