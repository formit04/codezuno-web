import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import AIPricing from "@/components/AIPricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/ScrollToTop";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pricing" });

  return {
    title: t("title") + " " + t("titleHighlight"),
    description: t("description"),
    alternates: {
      canonical: `https://codezuno.com/${locale}/pricing`,
      languages: {
        en: "https://codezuno.com/en/pricing",
        pl: "https://codezuno.com/pl/pricing",
        es: "https://codezuno.com/es/pricing",
      },
    },
  };
}

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
      <CookieConsent />
      <ScrollToTop />
    </>
  );
}
