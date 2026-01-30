"use client";

import Link from "next/link";
import { Mail, Heart, MessageCircle } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

const contactLinks = [
  { icon: Mail, href: "mailto:hello@codezuno.com", label: "Email" },
  { icon: MessageCircle, href: "https://wa.me/48509818007", label: "WhatsApp", isWhatsApp: true },
];

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const footerLinks = {
    services: [
      { name: t("links.webDev"), href: `/${locale}/#services` },
      { name: t("links.mobileDev"), href: `/${locale}/#services` },
      { name: t("links.desktopApps"), href: `/${locale}/#services` },
      { name: t("links.apiDev"), href: `/${locale}/#services` },
      { name: t("links.cloudSolutions"), href: `/${locale}/#services` },
    ],
    company: [
      { name: t("links.aboutUs"), href: `/${locale}/#about` },
      { name: t("links.portfolio"), href: `/${locale}/#portfolio` },
      { name: t("links.testimonials"), href: `/${locale}/#testimonials` },
      { name: t("links.process"), href: `/${locale}/#process` },
      { name: t("links.contact"), href: `/${locale}/#contact` },
    ],
    legal: [
      { name: t("links.privacy"), href: "#" },
      { name: t("links.terms"), href: "#" },
      { name: t("links.cookies"), href: "#" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              {/* White logo for dark footer */}
              <div className="w-10 h-10 relative flex items-center justify-center">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <circle cx="20" cy="20" r="18" fill="url(#footerLogoGradient)" />
                  <path d="M14 12L10 20L14 28" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M26 12L30 20L26 28" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 15H24L16 25H24" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="0" y1="0" x2="40" y2="40">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#0891b2" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex items-baseline">
                <span className="text-xl font-bold text-white">Code</span>
                <span className="text-xl font-bold text-primary-400">zuno</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              {t("description")}
            </p>
            <div className="flex gap-3">
              {contactLinks.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith("https") ? "_blank" : undefined}
                  rel={contact.href.startsWith("https") ? "noopener noreferrer" : undefined}
                  aria-label={contact.label}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                    contact.isWhatsApp
                      ? "bg-green-900/50 text-green-400 hover:text-white hover:bg-green-600"
                      : "bg-gray-800 text-gray-400 hover:text-white hover:bg-primary-600"
                  }`}
                >
                  <contact.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("services")}</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("company")}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("legal")}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Codezuno. {t("rights")}
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            {t("craftedWith")} <Heart className="w-4 h-4 text-red-500 fill-red-500" /> {t("in")}
          </p>
        </div>
      </div>
    </footer>
  );
}
