"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

const faqKeys = ["technologies", "timeline", "support", "process", "team", "pricing"];

export default function FAQ() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding relative bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">{t("subtitle")}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            {t("title")} <span className="gradient-text">{t("titleHighlight")}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqKeys.map((key, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  openIndex === index
                    ? "bg-primary-50 border border-primary-100"
                    : "bg-gray-50 border border-gray-100 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className={`font-semibold ${openIndex === index ? "text-primary-700" : "text-gray-900"}`}>
                    {t(`questions.${key}.question`)}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180 text-primary-600" : "text-gray-400"
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 mt-4 leading-relaxed">
                        {t(`questions.${key}.answer`)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
