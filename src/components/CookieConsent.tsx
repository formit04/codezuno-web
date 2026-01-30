"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function CookieConsent() {
  const t = useTranslations("cookieConsent");
  const locale = useLocale();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Delay showing the banner for better UX
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container-custom">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:flex md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-4 mb-4 md:mb-0">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t("title")}</h3>
                  <p className="text-sm text-gray-600">
                    {t("message")}{" "}
                    <Link
                      href={`/${locale}/cookies`}
                      className="text-primary-600 hover:text-primary-700 underline"
                    >
                      {t("learnMore")}
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={declineCookies}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  {t("decline")}
                </button>
                <button
                  onClick={acceptCookies}
                  className="px-6 py-2 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/20"
                >
                  {t("accept")}
                </button>
                <button
                  onClick={declineCookies}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors md:hidden"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
