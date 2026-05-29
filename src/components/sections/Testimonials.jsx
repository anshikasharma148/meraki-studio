import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { site } from "../../data/site";
import { testimonialCollageImages } from "../../data/projects";
import { pageContainer } from "../../constants/layout";
import ImageReveal from "../ui/ImageReveal";
import RevealGroup from "../ui/RevealGroup";
import ScrollReveal from "../ui/ScrollReveal";

const avatarUrl =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80";

export default function Testimonials() {
  const { title, items } = site.testimonials;
  const [active, setActiveIndex] = useState(0);
  const current = items[active] ?? items[0];

  const goPrev = () =>
    setActiveIndex((i) => (i - 1 + items.length) % items.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % items.length);

  return (
    <section className="testimonial-section relative bg-white py-16 lg:py-24">
      <RevealGroup className={pageContainer}>
        <div className="testimonial-wrapper flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          {/* Left — copy + slider controls */}
          <div className="testimonial-left w-full max-w-[540px]">
            <ScrollReveal className="testimonial-title-block mb-8 lg:mb-[55px]">
              <h2 className="testimonial-title">{title}</h2>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <blockquote className="testimonial-text mt-6 max-w-[419px]">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={240} className="mt-8 flex items-center justify-between gap-4">
              <div className="client-meta flex items-center gap-[15px]">
                <ImageReveal
                  src={avatarUrl}
                  alt={current.name}
                  className="h-12 w-12 shrink-0 rounded-full"
                  zoomIn={false}
                />
                <div>
                  <p className="client-name">{current.name}</p>
                  <p className="client-title">{current.company}</p>
                </div>
              </div>

              {items.length > 1 && (
                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="testimonial-arrow flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="testimonial-arrow flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </ScrollReveal>
          </div>

          {/* Right — image collage */}
          <div className="testimonial-gallery w-full max-w-[582px] lg:shrink-0">
            <div className="testimonial-thumb-inner grid grid-cols-[1.05fr_0.95fr] gap-[30px]">
              <div className="testimonial-thumb-left row-span-2 overflow-hidden rounded-tl-[70px] rounded-br-[70px]">
                <ImageReveal
                  src={testimonialCollageImages.main}
                  alt="Interior design showcase"
                  className="h-full min-h-[320px] w-full sm:min-h-[360px] lg:min-h-[400px]"
                  imageClassName="h-full min-h-[inherit] object-cover"
                  delay={100}
                />
              </div>

              <div className="testimonial-thumb-right-top overflow-hidden rounded-tl-[70px]">
                <ImageReveal
                  src={testimonialCollageImages.top}
                  alt="Bedroom interior"
                  className="aspect-[4/3] w-full sm:aspect-auto sm:h-[185px]"
                  imageClassName="h-full w-full object-cover"
                  delay={180}
                />
              </div>

              <div className="testimonial-thumb-right-bottom overflow-hidden rounded-br-[70px]">
                <ImageReveal
                  src={testimonialCollageImages.bottom}
                  alt="Dining interior"
                  className="aspect-[4/3] w-full sm:aspect-auto sm:h-[185px]"
                  imageClassName="h-full w-full object-cover"
                  delay={260}
                />
              </div>
            </div>
          </div>
        </div>
      </RevealGroup>
    </section>
  );
}
