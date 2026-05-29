import { Link } from "react-router-dom";
import ScrollReveal from "../ui/ScrollReveal";
import { pageContainer } from "../../constants/layout";

export default function PageHero({ title, breadcrumbs = [], backgroundImage }) {
  return (
    <section className="page-hero relative overflow-hidden">
      <div className="page-hero-bg absolute inset-0" aria-hidden>
        {backgroundImage && (
          <img src={backgroundImage} alt="" className="h-full w-full object-cover" />
        )}
        <div className="absolute inset-0 bg-brand-hero/88" />
      </div>

      <div className={`${pageContainer} relative py-16 text-center lg:py-20`}>
        <ScrollReveal immediate>
          <h1 className="page-hero-title">{title}</h1>
        </ScrollReveal>

        {breadcrumbs.length > 0 && (
          <ScrollReveal immediate delay={80}>
            <nav className="page-hero-breadcrumb mt-4" aria-label="Breadcrumb">
              {breadcrumbs.map((crumb, i) => (
                <span key={crumb.label}>
                  {i > 0 && <span className="mx-2">-</span>}
                  {crumb.to ? (
                    <Link to={crumb.to} className="page-hero-breadcrumb-link">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span>{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
