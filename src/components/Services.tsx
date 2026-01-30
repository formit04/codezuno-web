"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Monitor, Server, Cloud, Shield } from "lucide-react";
import { useTranslations } from "next-intl";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  const t = useTranslations("services");

  const services = [
    {
      icon: Globe,
      titleKey: "web",
      features: ["React/Next.js", "Vue/Nuxt", "Node.js", "Python/Django"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Smartphone,
      titleKey: "mobile",
      features: ["React Native", "Flutter", "iOS Native", "Android Native"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Monitor,
      titleKey: "desktop",
      features: ["Electron", "Tauri", ".NET/WPF", "Qt"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Server,
      titleKey: "api",
      features: ["REST APIs", "GraphQL", "Microservices", "Serverless"],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Cloud,
      titleKey: "cloud",
      features: ["AWS", "Google Cloud", "Azure", "Kubernetes"],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Shield,
      titleKey: "security",
      features: ["CI/CD", "Docker", "Security Audits", "Monitoring"],
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section id="services" className="section-padding relative bg-gray-50">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group card card-hover p-8"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t(`${service.titleKey}.title`)}
              </h3>
              <p className="text-gray-600 mb-6">{t(`${service.titleKey}.description`)}</p>

              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
