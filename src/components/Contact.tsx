"use client";

import { motion } from "framer-motion";
import { Mail, Send, MessageCircle, CheckCircle, Clock, Video, Coffee } from "lucide-react";
import { useState, useEffect, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

const WHATSAPP_NUMBER = "48509818007";

export default function Contact() {
  const t = useTranslations("contact");
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Pre-fill subject from URL parameter (from pricing page)
  useEffect(() => {
    const packageName = searchParams.get("package");
    if (packageName) {
      setFormData(prev => ({ ...prev, subject: `Inquiry: ${packageName}` }));
    }
  }, [searchParams]);

  const processInfo = [
    { icon: CheckCircle, textKey: "process.review" },
    { icon: Clock, textKey: "process.fast" },
    { icon: Coffee, textKey: "process.free" },
    { icon: Video, textKey: "process.video" },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Build WhatsApp message
    const message = `*New Contact Form Message*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}

*Message:*
${formData.message}`;

    // Open WhatsApp with pre-filled message
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding relative bg-gray-50">
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{t("form.title")}</h3>
                  <p className="text-sm text-gray-500">via WhatsApp</p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("form.name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder={t("form.namePlaceholder")}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("form.email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder={t("form.emailPlaceholder")}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("form.subject")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder={t("form.subjectPlaceholder")}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("form.message")}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder={t("form.messagePlaceholder")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t("form.send")}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{t("info.title")}</h3>

              {/* Email */}
              <a
                href="mailto:hello@codezuno.com"
                className="flex items-center gap-4 group mb-8"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors bg-primary-50 group-hover:bg-primary-100">
                  <Mail className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">{t("info.email")}</div>
                  <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                    hello@codezuno.com
                  </div>
                </div>
              </a>

              {/* Process Info */}
              <div className="space-y-4">
                {processInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1">
                      {t(item.textKey)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
