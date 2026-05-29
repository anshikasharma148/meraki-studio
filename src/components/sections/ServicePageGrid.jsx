import { site } from "../../data/site";
import { getServicePageCards } from "../../data/projects";
import { pageContainer } from "../../constants/layout";
import ImageReveal from "../ui/ImageReveal";
import RevealGroup from "../ui/RevealGroup";
import ScrollReveal from "../ui/ScrollReveal";

export default function ServicePageGrid() {
  const { titleLines, gridIntro } = {
    titleLines: site.services.titleLines,
    gridIntro: site.servicesPage.gridIntro,
  };
  const cards = getServicePageCards(site.services);

  return (
    <section className="service-page-grid bg-white py-16 lg:py-24">
      <RevealGroup className={pageContainer}>
        <ScrollReveal className="mx-auto mb-12 max-w-[620px] text-center lg:mb-16">
          <h2 className="services-section-title">
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="service-page-grid-intro mt-5">{gridIntro}</p>
        </ScrollReveal>

        <div className="service-page-cards grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 70}>
              <article className="service-page-card">
                <ImageReveal
                  src={card.image}
                  alt={card.alt}
                  className="service-page-card-image w-full"
                  imageClassName="h-full w-full object-cover"
                  delay={i * 60}
                />
                <h3 className="service-page-card-title">{card.title}</h3>
                <p className="service-page-card-text">{card.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </RevealGroup>
    </section>
  );
}
