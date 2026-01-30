import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });

  return {
    title: `${t("terms.title")} | Codezuno`,
    description: t("terms.metaDescription"),
    alternates: {
      canonical: `https://codezuno.com/${locale}/terms`,
      languages: {
        en: "https://codezuno.com/en/terms",
        pl: "https://codezuno.com/pl/terms",
        es: "https://codezuno.com/es/terms",
      },
    },
  };
}

function TermsContent() {
  const t = useTranslations("legal");

  return (
    <div className="prose prose-gray max-w-none">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">{t("terms.title")}</h1>
      <p className="text-gray-500 mb-8">{t("terms.lastUpdated")}: January 2025</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("terms.sections.acceptance.title")}</h2>
        <p className="text-gray-600 leading-relaxed">{t("terms.sections.acceptance.content")}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("terms.sections.services.title")}</h2>
        <p className="text-gray-600 leading-relaxed">{t("terms.sections.services.content")}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("terms.sections.intellectualProperty.title")}</h2>
        <p className="text-gray-600 leading-relaxed">{t("terms.sections.intellectualProperty.content")}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("terms.sections.payment.title")}</h2>
        <p className="text-gray-600 leading-relaxed">{t("terms.sections.payment.content")}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("terms.sections.liability.title")}</h2>
        <p className="text-gray-600 leading-relaxed">{t("terms.sections.liability.content")}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("terms.sections.termination.title")}</h2>
        <p className="text-gray-600 leading-relaxed">{t("terms.sections.termination.content")}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("terms.sections.governing.title")}</h2>
        <p className="text-gray-600 leading-relaxed">{t("terms.sections.governing.content")}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("terms.sections.contact.title")}</h2>
        <p className="text-gray-600 leading-relaxed">
          {t("terms.sections.contact.content")}: <a href="mailto:hello@codezuno.com" className="text-primary-600 hover:text-primary-700">hello@codezuno.com</a>
        </p>
      </section>
    </div>
  );
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container-custom max-w-4xl">
          <TermsContent />
        </div>
      </main>
      <Footer />
    </>
  );
}
