import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });

  return {
    title: `${t("cookies.title")} | Codezuno`,
    description: t("cookies.metaDescription"),
    alternates: {
      canonical: `https://codezuno.com/${locale}/cookies`,
      languages: {
        en: "https://codezuno.com/en/cookies",
        pl: "https://codezuno.com/pl/cookies",
        es: "https://codezuno.com/es/cookies",
      },
    },
  };
}

function CookiesContent() {
  const t = useTranslations("legal");

  return (
    <div className="prose prose-gray max-w-none">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">{t("cookies.title")}</h1>
      <p className="text-gray-500 mb-8">{t("cookies.lastUpdated")}: January 2025</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("cookies.sections.what.title")}</h2>
        <p className="text-gray-600 leading-relaxed">{t("cookies.sections.what.content")}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("cookies.sections.types.title")}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{t("cookies.sections.types.intro")}</p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">{t("cookies.sections.types.essential.title")}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{t("cookies.sections.types.essential.content")}</p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">{t("cookies.sections.types.analytics.title")}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{t("cookies.sections.types.analytics.content")}</p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">{t("cookies.sections.types.preferences.title")}</h3>
        <p className="text-gray-600 leading-relaxed">{t("cookies.sections.types.preferences.content")}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("cookies.sections.manage.title")}</h2>
        <p className="text-gray-600 leading-relaxed">{t("cookies.sections.manage.content")}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("cookies.sections.thirdParty.title")}</h2>
        <p className="text-gray-600 leading-relaxed">{t("cookies.sections.thirdParty.content")}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("cookies.sections.contact.title")}</h2>
        <p className="text-gray-600 leading-relaxed">
          {t("cookies.sections.contact.content")}: <a href="mailto:hello@codezuno.com" className="text-primary-600 hover:text-primary-700">hello@codezuno.com</a>
        </p>
      </section>
    </div>
  );
}

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container-custom max-w-4xl">
          <CookiesContent />
        </div>
      </main>
      <Footer />
    </>
  );
}
