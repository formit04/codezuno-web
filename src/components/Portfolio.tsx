"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  const t = useTranslations("portfolio");

  const projects = [
    {
      key: "ecommerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      key: "healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      tags: ["React Native", "Firebase", "Node.js", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      key: "saas",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["React", "D3.js", "Python", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      key: "fintech",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
      tags: ["Vue.js", "Go", "Redis", "Kubernetes"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="portfolio" className="section-padding relative bg-gray-50">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group card card-hover overflow-hidden"
            >
              {/* Project Image */}
              <div className="h-56 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={t(`projects.${project.key}.title`)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full">
                    {t(`projects.${project.key}.category`)}
                  </span>
                </div>

                {/* Hover Links - only show if real URLs exist */}
                {(project.liveUrl !== "#" || project.githubUrl !== "#") && (
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-primary-500 hover:text-white transition-colors shadow-lg"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    )}
                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition-colors shadow-lg"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {t(`projects.${project.key}.title`)}
                </h3>
                <p className="text-gray-600 mb-4">{t(`projects.${project.key}.description`)}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links - only show if real URLs exist */}
                {(project.liveUrl !== "#" || project.githubUrl !== "#") && (
                  <div className="flex gap-4 pt-2 border-t border-gray-100">
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t("liveDemo")}
                      </a>
                    )}
                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        {t("sourceCode")}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
