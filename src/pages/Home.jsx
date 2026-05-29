import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroArch from "../components/sections/HeroArch";
import Welcome from "../components/sections/Welcome";
import Services from "../components/sections/Services";
import WhyChoose from "../components/sections/WhyChoose";
import Projects from "../components/sections/Projects";
import Testimonials from "../components/sections/Testimonials";
import Newsletter from "../components/sections/Newsletter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="overflow-hidden bg-brand-hero">
        <Header variant="dark" />
        <HeroArch />
      </div>
      <main className="relative z-10 bg-white">
        <Welcome />
        <Services />
        <WhyChoose />
        <Projects />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
