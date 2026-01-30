import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import AIPricing from "@/components/AIPricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Pricing />
        <AIPricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
