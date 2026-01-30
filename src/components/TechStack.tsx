"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const technologies = [
  { name: "React", category: "Frontend", color: "bg-blue-100 text-blue-700" },
  { name: "Next.js", category: "Frontend", color: "bg-gray-100 text-gray-700" },
  { name: "Vue.js", category: "Frontend", color: "bg-green-100 text-green-700" },
  { name: "TypeScript", category: "Language", color: "bg-blue-100 text-blue-700" },
  { name: "Node.js", category: "Backend", color: "bg-green-100 text-green-700" },
  { name: "Python", category: "Backend", color: "bg-yellow-100 text-yellow-700" },
  { name: "Go", category: "Backend", color: "bg-cyan-100 text-cyan-700" },
  { name: "PostgreSQL", category: "Database", color: "bg-blue-100 text-blue-700" },
  { name: "MongoDB", category: "Database", color: "bg-green-100 text-green-700" },
  { name: "Redis", category: "Database", color: "bg-red-100 text-red-700" },
  { name: "AWS", category: "Cloud", color: "bg-orange-100 text-orange-700" },
  { name: "Docker", category: "DevOps", color: "bg-blue-100 text-blue-700" },
  { name: "Kubernetes", category: "DevOps", color: "bg-blue-100 text-blue-700" },
  { name: "GraphQL", category: "API", color: "bg-pink-100 text-pink-700" },
  { name: "Tailwind", category: "Styling", color: "bg-cyan-100 text-cyan-700" },
  { name: "Figma", category: "Design", color: "bg-purple-100 text-purple-700" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function TechStack() {
  const t = useTranslations("techStack");

  return (
    <section className="section-padding relative bg-gray-50">
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
          className="flex flex-wrap justify-center gap-4"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card px-6 py-4 cursor-default"
            >
              <div className="text-gray-900 font-medium">{tech.name}</div>
              <div className={`text-xs mt-1 px-2 py-0.5 rounded-full inline-block ${tech.color}`}>
                {tech.category}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
