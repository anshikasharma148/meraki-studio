import { CheckCircle2, MapPin, Monitor, PanelsTopLeft } from "lucide-react";
import { site } from "../../data/site";
import { servicePageImages } from "../../data/projects";
import { pageContainer } from "../../constants/layout";
import ImageReveal from "../ui/ImageReveal";
import RevealGroup from "../ui/RevealGroup";
import ScrollReveal from "../ui/ScrollReveal";

const stepIcons = [MapPin, PanelsTopLeft, Monitor, CheckCircle2];

export default function ServicePageProcess() {
  const { title, stepDescription, steps } = site.servicesPage.process;

  return (
    <section className="service-page-process relative overflow-hidden py-16 lg:py-24">
      <div className="service-page-process-pattern pointer-events-none absolute inset-0" aria-hidden />

      <RevealGroup className={`${pageContainer} relative`}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="service-page-process-gallery relative mx-auto w-full max-w-[460px]">
            <ImageReveal
              src={servicePageImages.processBack}
              alt="Interior design process"
              className="service-page-process-back relative z-10 aspect-[3/4] w-[72%]"
              imageClassName="object-cover"
              delay={80}
            />
            <ImageReveal
              src={servicePageImages.processFront}
              alt="Designed interior space"
              className="service-page-process-front relative z-20 -mt-20 ml-auto aspect-[3/4] w-[68%]"
              imageClassName="object-cover"
              delay={180}
            />
          </div>

          <div>
            <ScrollReveal>
              <h2 className="service-page-process-title">
                {title}
                <span className="service-page-process-arrow" aria-hidden>
                  ↷
                </span>
              </h2>
            </ScrollReveal>

            <div className="service-page-steps mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10">
              {steps.map((step, i) => {
                const Icon = stepIcons[i] ?? CheckCircle2;
                return (
                  <ScrollReveal key={step.number} delay={100 + i * 80}>
                    <div className="service-page-step">
                      <Icon className="service-page-step-icon" strokeWidth={1.5} />
                      <h3 className="service-page-step-title">
                        {step.number}. {step.title}
                      </h3>
                      <p className="service-page-step-text">{stepDescription}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </RevealGroup>
    </section>
  );
}
