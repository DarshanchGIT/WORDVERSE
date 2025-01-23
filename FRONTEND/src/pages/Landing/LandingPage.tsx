import { Navbar } from "../../components/Landing/Navbar";
import { Testimonials } from "../../components/Landing/Testimonials";
import { AuroraHero } from "../../components/ui/AuroraHero";
import { FAQSection } from "../../components/Landing/Faqs";
import { ContactForm } from "../../components/Landing/Contact";
import { FeatureHover } from "../../components/Landing/FeatureHover";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section id="navbar">
        <Navbar />
      </section>
      <section id="AuroraHero">
        <AuroraHero />
      </section>
      <section id="features">
        <FeatureHover />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="faqs">
        <FAQSection />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </div>
  );
}
