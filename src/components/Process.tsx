"use client";

import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Code, Rocket, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Process() {
  const t = useTranslations("process");

  const steps = [
    {
      icon: MessageSquare,
      key: "discovery",
      number: "01",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Lightbulb,
      key: "planning",
      number: "02",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Code,
      key: "development",
      number: "03",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Rocket,
      key: "launch",
      number: "04",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section id="process" className="section-padding relative bg-white">
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

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const details = t.raw(`steps.${step.key}.details`) as string[];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="card card-hover p-8 h-full relative z-10">
                    {/* Step Number */}
                    <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t(`steps.${step.key}.title`)}</h3>
                    <p className="text-gray-600 mb-4">{t(`steps.${step.key}.description`)}</p>

                    {/* Details */}
                    <ul className="space-y-2">
                      {details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connector Dot for Desktop */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-24 -right-4 w-3 h-3 rounded-full bg-primary-500 border-4 border-white shadow hidden lg:block z-20" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
