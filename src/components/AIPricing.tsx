"use client";

import { motion } from "framer-motion";
import { Check, MessageSquare, FileSearch, Brain, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function AIPricing() {
  const t = useTranslations("aiPricing");
  const locale = useLocale();

  const plans = [
    {
      key: "chatbot",
      icon: MessageSquare,
      price: "5,000",
      color: "from-violet-500 to-purple-600",
      popular: false,
    },
    {
      key: "automation",
      icon: FileSearch,
      price: "15,000",
      color: "from-blue-500 to-cyan-600",
      popular: true,
    },
    {
      key: "custom",
      icon: Brain,
      price: "50,000",
      color: "from-pink-500 to-rose-600",
      popular: false,
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-violet-950 via-gray-900 to-gray-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-violet-300 font-medium">{t("badge")}</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t("title")} <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">{t("titleHighlight")}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
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
                className={`relative p-8 rounded-2xl bg-white/5 border backdrop-blur-sm ${
                  plan.popular
                    ? "border-violet-500/50 ring-1 ring-violet-500/20 scale-105"
                    : "border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold rounded-full">
                      {t("popular")}
                    </span>
                  </div>
                )}

                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}>
                  <plan.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {t(`plans.${plan.key}.name`)}
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  {t(`plans.${plan.key}.description`)}
                </p>

                <div className="mb-6">
                  <span className="text-gray-500 text-sm">{t("from")}</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">€{plan.price}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${locale}/?package=${encodeURIComponent(t(`plans.${plan.key}.name`) + " (AI)")}#contact`}
                  className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-500 hover:to-purple-500 shadow-lg shadow-violet-500/25"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                  }`}
                >
                  {t("cta")}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm mb-6">{t("note")}</p>
          <Link
            href={`/${locale}/?package=${encodeURIComponent("Custom AI Project")}#contact`}
            className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors"
          >
            {t("customProject")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
