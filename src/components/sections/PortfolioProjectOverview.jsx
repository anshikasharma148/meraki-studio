import { Link } from "react-router-dom";
import ImageReveal from "../ui/ImageReveal";
import ScrollReveal from "../ui/ScrollReveal";

export default function PortfolioProjectOverview({ projects }) {
  return (
    <div className="portfolio-overview grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12">
      {projects.map((project, i) => (
        <ScrollReveal key={project.id} delay={i * 100}>
          <article className="portfolio-overview-card">
            <Link to="/contact" className="block overflow-hidden">
              <ImageReveal
                src={project.image}
                alt={project.title}
                className="portfolio-overview-image w-full"
                imageClassName="h-full w-full object-cover"
                delay={i * 80}
              />
            </Link>
            <p className="portfolio-overview-category mt-5">{project.category}</p>
            <h3 className="portfolio-overview-title">{project.title}</h3>
            <p className="portfolio-overview-description">{project.description}</p>
          </article>
        </ScrollReveal>
      ))}
    </div>
  );
}
