"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "pl", name: "Polski", flag: "🇵🇱" },
  { code: "es", name: "Español", flag: "🇪🇸" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  const switchLanguage = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLanguage.flag} {currentLanguage.code.toUpperCase()}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => switchLanguage(lang.code)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                    lang.code === locale ? "bg-primary-50 text-primary-600" : "text-gray-700"
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="text-sm font-medium">{lang.name}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
