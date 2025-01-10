import { Navbar } from "../../components/Landing/Navbar";
import { Features } from "../../components/Landing/Features";
import { Testimonials } from "../../components/ui/Testimonials";
import { AuroraHero } from "../../components/ui/AuroraHero";
import { FAQSection } from "../../components/Landing/Faqs";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section id="navbar">
        <Navbar />
      </section>
      <section id="AuroraHero">
        <AuroraHero />
      </section>
      {/* <section id="hero">
        <Hero />
      </section> */}
      <section id="features">
        <Features />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="faqs">
        <FAQSection />
      </section>
    </div>
  );
}
