"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: t("services"), href: `/${locale}/#services` },
    { name: t("ai"), href: `/${locale}/#ai` },
    { name: t("portfolio"), href: `/${locale}/#portfolio` },
    { name: t("pricing"), href: `/${locale}/pricing` },
    { name: t("testimonials"), href: `/${locale}/#testimonials` },
    { name: t("contact"), href: `/${locale}/#contact` },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary-600 transition-colors font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Link href={`/${locale}/#contact`} className="btn-primary">
              {t("getStarted")}
            </Link>
          </div>

          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-gray-600 hover:text-primary-600 hover:bg-gray-50 py-3 px-4 rounded-lg transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-100 mt-2">
                  <div className="flex justify-center mb-4">
                    <LanguageSwitcher />
                  </div>
                  <Link
                    href={`/${locale}/#contact`}
                    className="btn-primary block text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("getStarted")}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
