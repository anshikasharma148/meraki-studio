import Button from "../ui/Button";
import { site } from "../../data/site";
import { landingImages } from "../../data/projects";
import { pageContainer } from "../../constants/layout";
import ImageReveal from "../ui/ImageReveal";
import RevealGroup from "../ui/RevealGroup";
import ScrollReveal from "../ui/ScrollReveal";

export default function Welcome() {
  const { eyebrow, titleLines, body, cta, callTitle } = site.welcome;

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24 xl:py-28">
      {/* Pale mint strip behind left column (reference) */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-0 hidden h-[88%] w-[min(36%,320px)] bg-brand-mint lg:block xl:w-[min(34%,380px)]"
        aria-hidden
      />

      <RevealGroup className={`${pageContainer} relative z-10`}>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          {/* Left — tall portrait + call block */}
          <div className="relative">
            <div className="relative z-10 w-full max-w-[500px]">
              <ImageReveal
                src={landingImages.welcomeMain}
                alt="Meraki Studio interior design"
                className="aspect-[4/5] w-full"
                imageClassName="object-cover"
              />
            </div>
            <ScrollReveal delay={160} className="mt-8 lg:mt-10">
              <h3 className="font-serif text-[1.65rem] font-bold leading-snug text-brand-dark md:text-[1.85rem] lg:text-[2rem]">
                {callTitle}
              </h3>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="mt-2 inline-block font-serif text-[1.65rem] text-brand-dark underline decoration-1 underline-offset-[6px] md:text-[1.85rem] lg:text-[2rem]"
              >
                {site.phone}
              </a>
            </ScrollReveal>
          </div>

          {/* Right — copy + bottom-right secondary image */}
          <div className="relative flex min-h-0 flex-col lg:min-h-[min(640px,72vw)]">
            <div className="welcome-copy w-full max-w-[500px]">
              <ScrollReveal delay={60}>
                <p className="font-sans text-xs font-normal uppercase tracking-[0.2em] text-gray-400">
                  {eyebrow}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={120}>
                <h2 className="mt-4 font-serif text-[2.65rem] font-bold leading-[1.08] text-brand-hero sm:text-[2.85rem] lg:text-[3.25rem] xl:text-[3.5rem]">
                  {titleLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-6 max-w-[460px] font-sans text-[15px] font-normal leading-[1.72] text-gray-500">
                  {body}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={280} className="mt-8">
                <Button
                  to="/contact"
                  className="rounded-sm px-8 py-4 text-sm font-medium tracking-normal"
                >
                  {cta}
                </Button>
              </ScrollReveal>
            </div>

            <div className="mt-10 flex justify-start sm:justify-end lg:mt-auto lg:pt-10">
              <ImageReveal
                src={landingImages.welcomeSecondary}
                alt="Living space design"
                className="aspect-[4/3] w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px]"
                imageClassName="object-cover"
                delay={180}
              />
            </div>
          </div>
        </div>
      </RevealGroup>

      {/* Mobile mint accent (narrower) */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-0 h-[42%] w-[55%] bg-brand-mint lg:hidden"
        aria-hidden
      />
    </section>
  );
}
