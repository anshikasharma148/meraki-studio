import { useCallback, useState } from "react";
import { PencilRuler, Tags, UsersRound } from "lucide-react";
import { site } from "../../data/site";
import { landingImages, whyChooseSliderImages } from "../../data/projects";
import { pageContainer } from "../../constants/layout";
import ImageReveal from "../ui/ImageReveal";
import RevealGroup from "../ui/RevealGroup";
import ScrollReveal from "../ui/ScrollReveal";
import ServiceImageSlider from "../ui/ServiceImageSlider";

const featureIcons = {
  modernDesign: PencilRuler,
  expertTeam: UsersRound,
  reasonablePrice: Tags,
};

function SingleFeature({ iconKey, title, description }) {
  const Icon = featureIcons[iconKey];

  return (
    <div className="single-feature">
      <Icon
        className="h-9 w-9 shrink-0 stroke-[1.15] text-[#232323] sm:h-10 sm:w-10"
        aria-hidden
      />
      <div className="min-w-0 flex-1">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-text">{description}</p>
      </div>
    </div>
  );
}

export default function WhyChoose() {
  const { title, intro, featureDescription, features } = site.whyChoose;
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideKey, setSlideKey] = useState(0);

  const goToSlide = useCallback((index) => {
    setActiveSlide(index);
    setSlideKey((k) => k + 1);
  }, []);

  return (
    <section className="relative z-[1] overflow-hidden bg-white py-16 lg:py-24 xl:pt-[139px]">
      <RevealGroup className={pageContainer}>
        <div className="flex flex-col flex-wrap items-start justify-between gap-12 lg:flex-row lg:flex-nowrap lg:gap-0">
          {/* Left column */}
          <div className="w-full max-w-[459px]">
            <ScrollReveal className="feature-title-block mb-10 lg:mb-[50px]">
              <h2 className="feature-section-title">{title}</h2>
              <p className="feature-section-intro">{intro}</p>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <SingleFeature
                iconKey="modernDesign"
                title={features.modernDesign.title}
                description={featureDescription}
              />
            </ScrollReveal>

            <div className="mt-10">
              <ImageReveal
                src={landingImages.whyChooseLeft}
                alt="Interior living space"
                className="h-56 w-full max-w-[404px] lg:h-64"
                delay={180}
              />
            </div>
          </div>

          {/* Middle column — slider + features */}
          <div className="w-full max-w-[455px] lg:mx-10 xl:mx-[50px]">
            <ServiceImageSlider
              images={whyChooseSliderImages}
              activeIndex={activeSlide}
              slideKey={slideKey}
              onGoToSlide={goToSlide}
              className="h-64 w-full sm:h-72 lg:h-[280px]"
              delay={100}
              enabled={whyChooseSliderImages.length > 1}
            />

            <div className="feature-block mt-10 lg:mt-12">
              <ScrollReveal delay={160}>
                <SingleFeature
                  iconKey="expertTeam"
                  title={features.expertTeam.title}
                  description={featureDescription}
                />
              </ScrollReveal>
              <ScrollReveal delay={240}>
                <SingleFeature
                  iconKey="reasonablePrice"
                  title={features.reasonablePrice.title}
                  description={featureDescription}
                />
              </ScrollReveal>
            </div>
          </div>

          {/* Right column — tall image on mint panel */}
          <div className="relative w-full max-w-[526px] lg:-mr-12">
            <div className="relative bg-brand-mint p-5 sm:p-6 lg:pr-12 lg:pt-8 lg:pb-8">
              <ImageReveal
                src={landingImages.whyChooseRight}
                alt="Bathroom interior design"
                className="h-[min(420px,65vh)] w-full lg:h-[520px] xl:h-[560px]"
                delay={200}
              />
            </div>
          </div>
        </div>
      </RevealGroup>
    </section>
  );
}
