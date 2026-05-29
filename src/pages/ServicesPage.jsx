import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageHero from "../components/layout/PageHero";
import ServicePageIntro from "../components/sections/ServicePageIntro";
import ServicePageGrid from "../components/sections/ServicePageGrid";
import ServicePageProcess from "../components/sections/ServicePageProcess";
import ServicePageTestimonials from "../components/sections/ServicePageTestimonials";
import { landingImages } from "../data/projects";

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-brand-hero">
        <Header variant="dark" />
        <PageHero
          title="Our Services"
          backgroundImage={landingImages.whyChooseMiddle}
          breadcrumbs={[
            { label: "Home", to: "/" },
            { label: "Service" },
          ]}
        />
      </div>

      <main className="flex-1 bg-white">
        <ServicePageIntro />
        <ServicePageGrid />
        <ServicePageProcess />
        <ServicePageTestimonials />
      </main>

      <Footer />
    </div>
  );
}
