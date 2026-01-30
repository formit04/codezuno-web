"use client";

import { motion } from "framer-motion";
import { Check, Star, Zap, Rocket } from "lucide-react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Pricing() {
  const t = useTranslations("pricing");
  const locale = useLocale();

  const plans = [
    {
      key: "starter",
      icon: Zap,
      price: "2,500",
      color: "from-blue-500 to-blue-600",
      popular: false,
    },
    {
      key: "professional",
      icon: Star,
      price: "10,000",
      color: "from-primary-500 to-primary-600",
      popular: true,
    },
    {
      key: "enterprise",
      icon: Rocket,
      price: "50,000",
      color: "from-purple-500 to-purple-600",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding relative bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            {t("subtitle")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            {t("title")} <span className="gradient-text">{t("titleHighlight")}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const features = t.raw(`plans.${plan.key}.features`) as string[];

            return (
              <motion.div
                key={plan.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative card p-8 ${plan.popular ? "ring-2 ring-primary-500 scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-primary-600 text-white text-sm font-semibold rounded-full">
                      {t("popular")}
                    </span>
                  </div>
                )}

                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}>
                  <plan.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t(`plans.${plan.key}.name`)}
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  {t(`plans.${plan.key}.description`)}
                </p>

                <div className="mb-6">
                  <span className="text-gray-500 text-sm">{t("from")}</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">€{plan.price}</span>
                    <span className="text-gray-500">/ {t("project")}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${locale}/?package=${encodeURIComponent(t(`plans.${plan.key}.name`))}#contact`}
                  className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? "bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-500/20"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {t("cta")}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-12"
        >
          {t("note")}
        </motion.p>
      </div>
    </section>
  );
}
