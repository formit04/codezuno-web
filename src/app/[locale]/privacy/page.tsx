import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });

  return {
    title: `${t("privacy.title")} | Codezuno`,
    description: t("privacy.metaDescription"),
    alternates: {
      canonical: `https://codezuno.com/${locale}/privacy`,
      languages: {
        en: "https://codezuno.com/en/privacy",
        pl: "https://codezuno.com/pl/privacy",
        es: "https://codezuno.com/es/privacy",
      },
    },
  };
}

function PrivacyContent() {
  const t = useTranslations("legal");

  return (
    <div className="prose prose-gray max-w-none">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">{t("privacy.title")}</h1>
      <p className="text-gray-500 mb-8">{t("privacy.lastUpdated")}: January 2025</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("privacy.sections.intro.title")}</h2>
        <p className="text-gray-600 leading-relaxed">{t("privacy.sections.intro.content")}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("privacy.sections.dataCollection.title")}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{t("privacy.sections.dataCollection.content")}</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>{t("privacy.sections.dataCollection.items.name")}</li>
          <li>{t("privacy.sections.dataCollection.items.email")}</li>
          <li>{t("privacy.sections.dataCollection.items.message")}</li>
          <li>{t("privacy.sections.dataCollection.items.usage")}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("privacy.sections.dataUse.title")}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{t("privacy.sections.dataUse.content")}</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>{t("privacy.sections.dataUse.items.respond")}</li>
          <li>{t("privacy.sections.dataUse.items.improve")}</li>
          <li>{t("privacy.sections.dataUse.items.marketing")}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("privacy.sections.cookies.title")}</h2>
        <p className="text-gray-600 leading-relaxed">{t("privacy.sections.cookies.content")}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("privacy.sections.rights.title")}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{t("privacy.sections.rights.content")}</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>{t("privacy.sections.rights.items.access")}</li>
          <li>{t("privacy.sections.rights.items.rectification")}</li>
          <li>{t("privacy.sections.rights.items.erasure")}</li>
          <li>{t("privacy.sections.rights.items.portability")}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("privacy.sections.contact.title")}</h2>
        <p className="text-gray-600 leading-relaxed">
          {t("privacy.sections.contact.content")}: <a href="mailto:hello@codezuno.com" className="text-primary-600 hover:text-primary-700">hello@codezuno.com</a>
        </p>
      </section>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container-custom max-w-4xl">
          <PrivacyContent />
        </div>
      </main>
      <Footer />
    </>
  );
}
