import { Link } from "react-router-dom";
import { site } from "../../data/site";
import { landingImages } from "../../data/projects";
import { pageContainer } from "../../constants/layout";
import ImageReveal from "../ui/ImageReveal";
import RevealGroup from "../ui/RevealGroup";
import ScrollReveal from "../ui/ScrollReveal";

function Tagline({ text }) {
  const parts = text.split(/(Unique|Modern)/);
  return (
    <p className="hero-tagline text-[1.25rem] sm:text-[1.4rem] lg:text-[1.5rem] xl:text-[1.65rem]">
      {parts.map((part, i) =>
        part === "Unique" || part === "Modern" ? (
          <span
            key={`${part}-${i}`}
            className="underline decoration-white decoration-1 underline-offset-[5px]"
          >
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  );
}

export default function HeroArch() {
  const { headline, subline } = site.hero;

  return (
    <section className="relative overflow-hidden bg-brand-hero pb-8 lg:pb-10">
      <div
        className={`${pageContainer} relative overflow-hidden`}
        style={{ height: "clamp(640px, 82vh, 860px)" }}
      >
        <RevealGroup immediate className="relative hidden h-full lg:block">
          <div
            className="absolute left-1/2 top-0 z-[1] h-[92%] max-h-[780px] w-[min(48vw,520px)] -translate-x-1/2 xl:w-[560px]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-t-[999px]">
              <div
                className="absolute inset-0 bg-brand-sage"
                aria-hidden
              />
              <div className="absolute inset-[3px] bottom-0 overflow-hidden rounded-t-[999px]">
                <ImageReveal
                  src={landingImages.heroMain}
                  alt="Meraki Studio interior"
                  className="h-full w-full"
                  variant="dark"
                  immediate
                  delay={150}
                  duration={1300}
                />
              </div>
            </div>
          </div>

          <div
            className="absolute left-0 top-[18%] z-[2]"
            style={{ width: "min(54%, 560px)" }}
          >
            <ScrollReveal delay={80} duration={1400}>
              <h1 className="hero-headline">
                {headline.map((line) => (
                  <span
                    key={line}
                    className="block text-[2.75rem] leading-[1.08] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem]"
                  >
                    {line}
                  </span>
                ))}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={220} duration={1400}>
              <Link
                to="/portfolio"
                className="mt-8 inline-block border border-white bg-black px-8 py-3 font-sans text-[14px] font-normal tracking-wide text-white hover:bg-black/90 lg:mt-10"
              >
                Explore Now
              </Link>
            </ScrollReveal>
          </div>

          <div
            className="absolute right-0 top-[34%] z-[2]"
            style={{ width: "min(40%, 400px)" }}
          >
            <ScrollReveal delay={300} duration={1400}>
              <Tagline text={subline} />
            </ScrollReveal>
          </div>

          <div
            className="absolute z-[3] w-[260px] xl:w-[280px]"
            style={{
              left: "calc(50% + min(22vw, 235px))",
              bottom: "6%",
            }}
          >
            <ImageReveal
              src={landingImages.heroSecondary}
              alt="Interior detail"
              className="aspect-[5/4] w-full shadow-[0_20px_48px_rgba(0,0,0,0.4)]"
              variant="dark"
              immediate
              delay={550}
              duration={1100}
            />
          </div>
        </RevealGroup>

        <RevealGroup immediate className="flex h-full flex-col gap-6 overflow-y-auto py-4 lg:hidden">
          <ScrollReveal delay={40}>
            <h1 className="hero-headline">
              {headline.map((line) => (
                <span
                  key={line}
                  className="block text-[2.25rem] leading-[1.08] sm:text-[2.75rem]"
                >
                  {line}
                </span>
              ))}
            </h1>
          </ScrollReveal>
          <div className="mx-auto h-[min(52vh,420px)] w-[min(88vw,360px)] overflow-hidden rounded-t-[999px]">
            <ImageReveal
              src={landingImages.heroMain}
              alt="Meraki Studio interior"
              className="h-full w-full"
              variant="dark"
              immediate
              delay={100}
            />
          </div>
          <ScrollReveal delay={180}>
            <Tagline text={subline} />
          </ScrollReveal>
          <ScrollReveal delay={260}>
            <Link
              to="/portfolio"
              className="inline-block w-fit border border-white bg-black px-8 py-3 font-sans text-[14px] text-white"
            >
              Explore Now
            </Link>
          </ScrollReveal>
          <ImageReveal
            src={landingImages.heroSecondary}
            alt="Interior detail"
            className="mx-auto aspect-[5/4] w-full max-w-[300px]"
            variant="dark"
            immediate
            delay={400}
          />
        </RevealGroup>
      </div>
    </section>
  );
}
