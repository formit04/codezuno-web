"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useTranslations } from "next-intl";

const testimonials = [
  {
    name: "Emma Nielsen",
    role: "CEO",
    company: "TechStart",
    content:
      "Codezuno delivered our e-commerce platform ahead of schedule. Their attention to detail and technical expertise exceeded our expectations. The team was responsive and professional throughout the entire project.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "CTO",
    company: "FinanceApp",
    content:
      "Working with Codezuno was a game-changer for our startup. They built a scalable fintech solution that handles thousands of transactions daily. Highly recommend their services.",
    rating: 5,
  },
  {
    name: "Sofia Rodriguez",
    role: "Product Manager",
    company: "HealthTech Solutions",
    content:
      "The mobile app they developed for us received excellent feedback from our users. Codezuno's team understood our healthcare requirements and delivered a secure, user-friendly solution.",
    rating: 5,
  },
  {
    name: "David Müller",
    role: "Founder",
    company: "LogiSmart",
    content:
      "From concept to launch, Codezuno guided us through every step. Their expertise in cloud architecture helped us build a robust logistics platform that scales with our business.",
    rating: 5,
  },
  {
    name: "James Mitchell",
    role: "VP of Engineering",
    company: "CloudSync",
    content:
      "Codezuno's team integrated seamlessly with ours. They delivered a complex microservices architecture that improved our system performance by 40%. Professional, skilled, and reliable.",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    role: "Director of Digital",
    company: "RetailPlus",
    content:
      "Outstanding work on our omnichannel retail platform. Codezuno understood our business needs and translated them into a solution that boosted our online sales significantly.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section id="testimonials" className="section-padding relative bg-white">
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
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card card-hover p-6 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary-500" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-gray-900 font-semibold text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
