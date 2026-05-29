import Button from "../ui/Button";
import { site } from "../../data/site";
import { servicePageImages } from "../../data/projects";
import { pageContainer } from "../../constants/layout";
import ImageReveal from "../ui/ImageReveal";
import RevealGroup from "../ui/RevealGroup";
import ScrollReveal from "../ui/ScrollReveal";

export default function ServicePageIntro() {
  const { eyebrow, titleLines, body, callTitle, cta } = site.servicesPage.intro;

  return (
    <section className="service-page-intro relative overflow-hidden bg-white py-16 lg:py-24">
      <RevealGroup className={pageContainer}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="service-page-intro-copy max-w-[500px]">
            <ScrollReveal>
              <p className="service-page-eyebrow">{eyebrow}</p>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="service-page-intro-title">
                {titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <p className="service-page-intro-text">{body}</p>
            </ScrollReveal>
            <ScrollReveal delay={240}>
              <h3 className="service-page-call-title">{callTitle}</h3>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="service-page-call-phone"
              >
                {site.phone}
              </a>
            </ScrollReveal>
            <ScrollReveal delay={320} className="mt-8">
              <Button to="/contact" className="rounded-sm px-8 py-4 text-sm">
                {cta}
              </Button>
            </ScrollReveal>
          </div>

          <div className="service-page-intro-gallery relative mx-auto w-full max-w-[520px] lg:max-w-none">
            <div className="service-page-intro-frame" aria-hidden />
            <ImageReveal
              src={servicePageImages.introMain}
              alt="Bedroom interior design"
              className="service-page-intro-main relative z-10 ml-auto aspect-[4/3] w-[88%]"
              imageClassName="object-cover"
              delay={120}
            />
            <ImageReveal
              src={servicePageImages.introSecondary}
              alt="Living room interior design"
              className="service-page-intro-secondary relative z-20 -mt-16 aspect-[4/3] w-[58%]"
              imageClassName="object-cover"
              delay={220}
            />
          </div>
        </div>
      </RevealGroup>
    </section>
  );
}
