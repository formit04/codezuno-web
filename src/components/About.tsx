"use client";

import { motion } from "framer-motion";
import { Target, Users, Lightbulb, Shield, Award, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  const values = [
    { icon: Target, key: "mission" },
    { icon: Users, key: "client" },
    { icon: Lightbulb, key: "innovation" },
    { icon: Shield, key: "quality" },
  ];

  const stats = [
    { icon: Award, value: "5+", labelKey: "years" },
    { icon: Users, value: "50+", labelKey: "projects" },
    { icon: Clock, value: "100%", labelKey: "delivery" },
  ];

  return (
    <section id="about" className="section-padding relative bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">{t("subtitle")}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              {t("title")} <span className="gradient-text">{t("titleHighlight")}</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              {t("description1")}
            </p>
            <p className="text-gray-600 mb-8">
              {t("description2")}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <stat.icon className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{t(`stats.${stat.labelKey}`)}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card card-hover p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t(`values.${value.key}.title`)}</h3>
                <p className="text-gray-600 text-sm">{t(`values.${value.key}.description`)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
