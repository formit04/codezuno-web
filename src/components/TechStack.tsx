"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const technologies = [
  { name: "React", category: "Frontend", logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", category: "Frontend", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "Vue.js", category: "Frontend", logo: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
  { name: "TypeScript", category: "Language", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Node.js", category: "Backend", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Python", category: "Backend", logo: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Go", category: "Backend", logo: "https://cdn.simpleicons.org/go/00ADD8" },
  { name: "PostgreSQL", category: "Database", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "MongoDB", category: "Database", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Redis", category: "Database", logo: "https://cdn.simpleicons.org/redis/DC382D" },
  { name: "AWS", category: "Cloud", logo: "https://cdn.simpleicons.org/amazonaws/232F3E" },
  { name: "Docker", category: "DevOps", logo: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Kubernetes", category: "DevOps", logo: "https://cdn.simpleicons.org/kubernetes/326CE5" },
  { name: "GraphQL", category: "API", logo: "https://cdn.simpleicons.org/graphql/E10098" },
  { name: "Tailwind", category: "Styling", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Figma", category: "Design", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
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
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card px-6 py-5 cursor-default text-center flex flex-col items-center gap-3"
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={32}
                height={32}
                className="w-8 h-8"
                unoptimized
              />
              <div>
                <div className="text-gray-900 font-medium">{tech.name}</div>
                <div className="text-xs mt-1 px-2 py-0.5 rounded-full inline-block bg-primary-50 text-primary-700">
                  {tech.category}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
