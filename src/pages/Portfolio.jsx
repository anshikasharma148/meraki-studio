import { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageHero from "../components/layout/PageHero";
import PortfolioGridItem from "../components/ui/PortfolioGridItem";
import PortfolioProjectOverview from "../components/sections/PortfolioProjectOverview";
import RevealGroup from "../components/ui/RevealGroup";
import { landingImages, projects, getPortfolioMasonryItems } from "../data/projects";
import { pageContainer } from "../constants/layout";

export default function Portfolio() {
  const [view, setView] = useState("gallery");
  const masonryItems = getPortfolioMasonryItems(projects);

  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-brand-hero">
        <Header variant="dark" />
        <PageHero
          title="Our Projects"
          backgroundImage={landingImages.heroMain}
          breadcrumbs={[
            { label: "Home", to: "/" },
            { label: "Projects" },
          ]}
        />
      </div>

      <main className="flex-1 bg-white">
        <section className="portfolio-section py-14 lg:py-20">
          <RevealGroup key={view} className={pageContainer}>
            {view === "gallery" ? (
              <>
                <div className="portfolio-masonry">
                  {masonryItems.map((item, i) => (
                    <PortfolioGridItem key={item.id} item={item} delay={i * 60} />
                  ))}
                </div>

                <div className="mt-14 flex justify-center lg:mt-16">
                  <button
                    type="button"
                    onClick={() => setView("overview")}
                    className="portfolio-next-btn"
                  >
                    Next &gt;
                  </button>
                </div>
              </>
            ) : (
              <>
                <PortfolioProjectOverview projects={projects} />

                <div className="mt-14 flex justify-center lg:mt-16">
                  <button
                    type="button"
                    onClick={() => setView("gallery")}
                    className="portfolio-next-btn"
                  >
                    &lt; Back
                  </button>
                </div>
              </>
            )}
          </RevealGroup>
        </section>
      </main>

      <Footer />
    </div>
  );
}
