"use client";
import { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  { code: "ar", name: "العربية", flag: "🇪🇬" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  
];

export default function LanguageSelector() {
  const { locale, changeLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find((lang) => lang.code === locale);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline text-sm font-medium">
          {currentLanguage?.name}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-400"
        >
          ↓
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-30"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown Menu - Full width like mobile menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40"
              style={{ width: "100vw", maxWidth: "100vw", overflowX: "hidden" }}
            >
              <div className="max-w-7xl mx-auto px-4 py-2">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => {
                      changeLanguage(language.code);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 text-left rtl:text-right hover:bg-gray-50 transition-colors duration-200 rounded-lg ${
                      locale === language.code
                        ? "bg-primary-50 text-primary-600"
                        : "text-gray-700"
                    }`}
                  >
                    <span className="text-lg">{language.flag}</span>
                    <span className="text-sm font-medium">{language.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
