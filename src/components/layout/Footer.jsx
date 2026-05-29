import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
import RevealGroup from "../ui/RevealGroup";
import ScrollReveal from "../ui/ScrollReveal";
import { pageContainer } from "../../constants/layout";
import { site } from "../../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section relative bg-brand-dark text-white">
      <div
        className="footer-pattern pointer-events-none absolute inset-0 opacity-[0.08]"
        aria-hidden
      />
      <div className="footer-inner relative">
        <RevealGroup className={pageContainer}>
          <div className="footer-wrapper flex flex-col gap-12 py-16 lg:flex-row lg:items-start lg:gap-0 lg:py-20">
            {/* Column 1 — brand + office hours */}
            <div className="footer-logo-block lg:w-[28%] lg:shrink-0 lg:self-start lg:border-r lg:border-white/15 lg:pr-12 xl:pr-16">
              <ScrollReveal className="footer-logo-block-inner">
                <div className="footer-logo-block-top">
                  <Logo link={false} size="footer" onDark />
                  <p className="footer-text">{site.footer.description}</p>
                </div>
                <div className="office-hour-block">
                  <p className="footer-opening-title">Office Hour</p>
                  <p className="footer-opening-text">
                    {site.officeHours.days}
                    <br />
                    {site.officeHours.time}
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Columns 2–4 */}
            <div className="footer-content-block grid flex-1 grid-cols-1 gap-12 sm:grid-cols-3 lg:pl-12 xl:pl-16">
              <ScrollReveal delay={100} className="footer-block">
                <h4 className="footer-title">Company</h4>
                <ul className="footer-link-list">
                  {site.footer.companyLinks.map((link) => (
                    <li key={link.path + link.label}>
                      <Link to={link.path} className="footer-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={180} className="footer-block">
                <h4 className="footer-title">Information</h4>
                <ul className="footer-link-list">
                  {site.footer.infoLinks.map((link) => (
                    <li key={link.label}>
                      <Link to={link.path} className="footer-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={260} className="footer-block">
                <h4 className="footer-title">Contact info</h4>
                <div className="footer-contact">
                  <p className="footer-contact-line">
                    <span className="footer-contact-label">T:</span> {site.phone}
                  </p>
                  <p className="footer-contact-line">
                    <span className="footer-contact-label">A:</span> {site.address}
                  </p>
                  <p className="footer-contact-line">
                    <span className="footer-contact-label">E:</span>{" "}
                    <a href={`mailto:${site.email}`} className="footer-link-inline">
                      {site.email}
                    </a>
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </RevealGroup>
      </div>

      <div className="footer-copyright bg-white py-5 text-center">
        <p className="footer-copyright-text">
          © {year} <span className="footer-copyright-brand">{site.name}</span>.{" "}
          {site.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
