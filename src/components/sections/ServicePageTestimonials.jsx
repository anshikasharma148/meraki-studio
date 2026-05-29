import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "../../data/site";
import { servicePageImages } from "../../data/projects";
import { pageContainer } from "../../constants/layout";
import ImageReveal from "../ui/ImageReveal";
import RevealGroup from "../ui/RevealGroup";
import ScrollReveal from "../ui/ScrollReveal";

const avatarUrl =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80";

function TestimonialCard({ item, delay = 0 }) {
  return (
    <ScrollReveal delay={delay} className="service-page-testimonial-card">
      <div className="mb-4 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
        ))}
      </div>
      <blockquote className="service-page-testimonial-quote">
        &ldquo;{item.quote}&rdquo;
      </blockquote>
      <div className="mt-5 flex items-center gap-3">
        <img
          src={avatarUrl}
          alt={item.name}
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <p className="service-page-testimonial-name">{item.name}</p>
          <p className="service-page-testimonial-company">{item.company}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function ServicePageTestimonials() {
  const { title, body, cta } = site.servicesPage.testimonials;
  const items = site.testimonials.items.slice(0, 2);

  return (
    <section className="service-page-testimonials bg-white py-16 lg:py-24">
      <RevealGroup className={pageContainer}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <ScrollReveal>
              <h2 className="service-page-testimonials-title">{title}</h2>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <p className="service-page-testimonials-body">{body}</p>
            </ScrollReveal>
            <ScrollReveal delay={160} className="mt-8">
              <Link to="/" className="service-page-view-all">
                {cta}
              </Link>
            </ScrollReveal>

            <div className="mt-10 flex gap-5">
              <ImageReveal
                src={servicePageImages.testimonialLeft}
                alt="Interior showcase"
                className="service-page-testimonial-image service-page-testimonial-image--wide"
                imageClassName="object-cover"
                delay={200}
              />
              <ImageReveal
                src={servicePageImages.testimonialRight}
                alt="Bedroom interior"
                className="service-page-testimonial-image service-page-testimonial-image--tall"
                imageClassName="object-cover"
                delay={280}
              />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {items.map((item, i) => (
              <TestimonialCard key={item.name} item={item} delay={120 + i * 100} />
            ))}
          </div>
        </div>
      </RevealGroup>
    </section>
  );
}
