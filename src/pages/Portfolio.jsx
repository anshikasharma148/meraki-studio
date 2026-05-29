import PlaceholderPage from "./placeholders/PlaceholderPage";
import ImageReveal from "../components/ui/ImageReveal";
import RevealGroup from "../components/ui/RevealGroup";
import ScrollReveal from "../components/ui/ScrollReveal";
import { projects } from "../data/projects";

export default function Portfolio() {
  return (
    <PlaceholderPage
      title="Signature Designs, Lasting Impact"
      paragraphs={[
        "Discover how our multidisciplinary expertise brings harmony to every project. We invite you to explore our curated portfolio featuring modern residences, commercial & hospitality spaces, interior transformations, and landscapes & gardens.",
      ]}
    >
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {projects.map((project, i) => (
          <RevealGroup key={project.id}>
            <article>
              <ImageReveal
                src={project.image}
                alt={project.title}
                className="h-56 w-full"
                delay={i * 80}
              />
              <ScrollReveal delay={120}>
                <p className="mt-3 text-xs font-medium uppercase tracking-wider text-brand-sage">
                  {project.category}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <h3 className="mt-1 font-serif text-xl font-bold text-brand-dark">
                  {project.title}
                </h3>
              </ScrollReveal>
              <ScrollReveal delay={280}>
                <p className="mt-2 text-sm text-gray-500">{project.description}</p>
              </ScrollReveal>
            </article>
          </RevealGroup>
        ))}
      </div>
    </PlaceholderPage>
  );
}
