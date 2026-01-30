import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AIServices from "@/components/AIServices";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <AIServices />
        <Portfolio />
        <Testimonials />
        <TechStack />
        <Process />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
      <ScrollToTop />
    </>
  );
}
