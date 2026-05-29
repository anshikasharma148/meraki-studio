import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { site } from "../../data/site";
import { servicesSliderImages } from "../../data/projects";
import { pageContainer } from "../../constants/layout";
import ServiceImageSlider from "../ui/ServiceImageSlider";
import RevealGroup from "../ui/RevealGroup";
import ScrollReveal from "../ui/ScrollReveal";

function ServiceItem({ title, description, path, slideIndex, onActivate }) {
  return (
    <div className="service-inner max-w-[329px]">
      <Link
        to={path}
        className="service-link-block"
        onMouseEnter={() => onActivate(slideIndex)}
        onFocus={() => onActivate(slideIndex)}
      >
        <h3 className="service-link">{title}</h3>
      </Link>
      <p className="service-summary-text">{description}</p>
    </div>
  );
}

function ServiceColumn({
  items,
  description,
  delayBase = 0,
  slideOffset = 0,
  onActivate,
}) {
  return (
    <div>
      {items.map((item, i) => (
        <ScrollReveal
          key={item.title}
          delay={delayBase + i * 80}
          className={i > 0 ? "mt-8 border-t border-gray-200 pt-8" : ""}
        >
          <ServiceItem
            title={item.title}
            description={description}
            path={item.path}
            slideIndex={slideOffset + i}
            onActivate={onActivate}
          />
        </ScrollReveal>
      ))}
    </div>
  );
}

export default function Services() {
  const { titleLines, itemDescription, left, right } = site.services;
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideKey, setSlideKey] = useState(0);

  const goToSlide = useCallback((index) => {
    setActiveSlide(index);
    setSlideKey((k) => k + 1);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24 xl:py-28">
      <div
        className="pointer-events-none absolute left-0 top-0 z-0 h-[min(52%,420px)] w-[min(42%,480px)] bg-brand-mint"
        aria-hidden
      />

      <RevealGroup className={`${pageContainer} relative z-10`}>
        <ScrollReveal className="mx-auto mb-12 max-w-[578px] text-center lg:mb-[50px]">
          <h2 className="services-section-title">
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-10 xl:gap-14">
          <ServiceColumn
            items={left}
            description={itemDescription}
            delayBase={80}
            slideOffset={0}
            onActivate={goToSlide}
          />

          <div className="flex justify-center px-2 lg:px-4">
            <ServiceImageSlider
              images={servicesSliderImages}
              activeIndex={activeSlide}
              slideKey={slideKey}
              onGoToSlide={goToSlide}
              className="h-[min(520px,70vh)] w-full max-w-[300px] rounded-xl sm:max-w-[340px] lg:max-w-[370px]"
              delay={120}
              enabled={servicesSliderImages.length > 1}
            />
          </div>

          <ServiceColumn
            items={right}
            description={itemDescription}
            delayBase={160}
            slideOffset={left.length}
            onActivate={goToSlide}
          />
        </div>
      </RevealGroup>
    </section>
  );
}
