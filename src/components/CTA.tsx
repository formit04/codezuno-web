"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function CTA() {
  const t = useTranslations("cta");

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 lg:p-16 text-center overflow-hidden"
        >
          {/* Background Decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm text-white/90 font-medium">
                {t("badge")}
              </span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#contact"
                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2 group"
              >
                {t("startProject")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#portfolio"
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all"
              >
                {t("viewWork")}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
