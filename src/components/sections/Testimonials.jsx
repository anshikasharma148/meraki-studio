import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import ImageReveal from "../ui/ImageReveal";
import RevealGroup from "../ui/RevealGroup";
import ScrollReveal from "../ui/ScrollReveal";

const collageImages = [
  {
    src: "https://images.unsplash.com/photo-1552322174-3ba004092f7d?w=500&q=80",
    className: "h-72 w-full rounded-tl-[80px] rounded-br-[80px]",
  },
  {
    src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&q=80",
    className: "h-40 w-full rounded-tr-[60px]",
  },
  {
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&q=80",
    className: "h-40 w-full rounded-br-[60px]",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <RevealGroup className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <ScrollReveal>
              <h2 className="font-serif text-3xl font-bold text-brand-dark md:text-4xl">
                Expressions of our happy clients
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="mt-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={180}>
              <blockquote className="mt-6 font-sans text-base leading-relaxed text-gray-500">
                &ldquo;Meraki Studio transformed our home with incredible attention
                to detail. Their integrated approach to architecture and interiors
                delivered a space that truly reflects how we live. We couldn&apos;t
                be happier with the result.&rdquo;
              </blockquote>
            </ScrollReveal>
            <ScrollReveal delay={260} className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <ImageReveal
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80"
                  alt="Client"
                  className="h-12 w-12 shrink-0 rounded-full"
                />
                <div>
                  <p className="font-serif font-semibold text-brand-dark">
                    Rajesh Mehta
                  </p>
                  <p className="text-sm text-gray-500">Residential Client</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1 row-span-2 overflow-hidden rounded-tl-[80px] rounded-br-[80px]">
              <ImageReveal
                src={collageImages[0].src}
                alt=""
                className={collageImages[0].className}
              />
            </div>
            <div className="overflow-hidden rounded-tr-[60px]">
              <ImageReveal
                src={collageImages[1].src}
                alt=""
                className={collageImages[1].className}
                delay={120}
              />
            </div>
            <div className="overflow-hidden rounded-br-[60px]">
              <ImageReveal
                src={collageImages[2].src}
                alt=""
                className={collageImages[2].className}
                delay={220}
              />
            </div>
          </div>
        </div>
      </RevealGroup>
    </section>
  );
}
