"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Brain,
  MessageSquare,
  FileSearch,
  Workflow,
  BarChart3,
  Sparkles,
  Zap,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function AIServices() {
  const t = useTranslations("ai");
  const locale = useLocale();

  const services = [
    { icon: MessageSquare, key: "chatbots", color: "from-primary-600 to-primary-800" },
    { icon: FileSearch, key: "documents", color: "from-primary-700 to-primary-900" },
    { icon: Workflow, key: "automation", color: "from-accent-500 to-accent-700" },
    { icon: BarChart3, key: "analytics", color: "from-primary-600 to-primary-700" },
    { icon: Brain, key: "custom", color: "from-accent-600 to-accent-800" },
    { icon: Bot, key: "assistants", color: "from-primary-700 to-primary-800" },
  ];

  const benefits = [
    { key: "efficiency", value: "40%" },
    { key: "costs", value: "60%" },
    { key: "availability", value: "24/7" },
    { key: "accuracy", value: "95%" },
  ];

  return (
    <section id="ai" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900 via-gray-900 to-primary-950">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(26,47,68,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(26,47,68,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-700/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        {/* Header */}
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-600/10 border border-accent-600/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-accent-500" />
            <span className="text-sm text-accent-400 font-medium">{t("badge")}</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t("title")} <span className="bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-transparent">{t("titleHighlight")}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t("description")}
          </p>
        </motion.div>

        {/* Benefits Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-transparent mb-2">
                {benefit.value}
              </div>
              <div className="text-sm text-gray-400">{t(`benefits.${benefit.key}`)}</div>
            </div>
          ))}
        </motion.div>

        {/* AI Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-600/30 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t(`services.${service.key}.title`)}
              </h3>
              <p className="text-gray-400 text-sm">
                {t(`services.${service.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">{t("useCases.title")}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {(t.raw("useCases.items") as string[]).map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-accent-600/20 hover:border-accent-600/30 transition-all cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-primary-700 to-primary-800 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg shadow-primary-900/25 flex items-center gap-2 group"
            >
              <Zap className="w-5 h-5" />
              {t("cta.primary")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={`/${locale}/pricing`}
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              {t("cta.secondary")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
