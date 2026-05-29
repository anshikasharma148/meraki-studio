import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
import RevealGroup from "../ui/RevealGroup";
import ScrollReveal from "../ui/ScrollReveal";
import { site } from "../../data/site";

export default function Footer() {
  return (
    <footer className="relative bg-brand-dark text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c13.8 0 25 11.2 25 25S43.8 55 30 55 5 43.8 5 30 16.2 5 30 5zm0 8c-9.4 0-17 7.6-17 17s7.6 17 17 17 17-7.6 17-17-7.6-17-17-17z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
        }}
      />
      <RevealGroup className="relative mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <ScrollReveal className="lg:border-r lg:border-white/10 lg:pr-8">
            <Logo link={false} size="footer" onDark />
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              {site.footer.description}
            </p>
            <div className="mt-8">
              <h4 className="font-serif text-lg font-semibold">Office Hour</h4>
              <p className="mt-2 text-sm text-white/70">{site.officeHours.days}</p>
              <p className="text-sm text-white/70">{site.officeHours.time}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100} className="lg:border-r lg:border-white/10 lg:px-8">
            <h4 className="font-serif text-lg font-semibold">Company</h4>
            <ul className="mt-6 space-y-3">
              {site.footer.companyLinks.map((link) => (
                <li key={link.path + link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={180} className="lg:border-r lg:border-white/10 lg:px-8">
            <h4 className="font-serif text-lg font-semibold">Information</h4>
            <ul className="mt-6 space-y-3">
              {site.footer.infoLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={260}>
            <h4 className="font-serif text-lg font-semibold">Contact info</h4>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>
                <span className="text-white/90">T:</span> {site.phone}
              </li>
              <li>
                <span className="text-white/90">A:</span> {site.address}
              </li>
              <li>
                <span className="text-white/90">E:</span>{" "}
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </RevealGroup>
      <ScrollReveal className="border-t border-white/10 bg-white py-4 text-center">
        <p className="text-sm text-gray-400">
          © 2026 <span className="text-gray-600">{site.name}</span>. All rights
          reserved.
        </p>
      </ScrollReveal>
    </footer>
  );
}
