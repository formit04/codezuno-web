"use client";

import { useTranslations } from "next-intl";

export default function FAQStructuredData() {
  const t = useTranslations("faq");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": t("questions.technologies.question"),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t("questions.technologies.answer")
        }
      },
      {
        "@type": "Question",
        "name": t("questions.timeline.question"),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t("questions.timeline.answer")
        }
      },
      {
        "@type": "Question",
        "name": t("questions.support.question"),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t("questions.support.answer")
        }
      },
      {
        "@type": "Question",
        "name": t("questions.process.question"),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t("questions.process.answer")
        }
      },
      {
        "@type": "Question",
        "name": t("questions.team.question"),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t("questions.team.answer")
        }
      },
      {
        "@type": "Question",
        "name": t("questions.pricing.question"),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t("questions.pricing.answer")
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
