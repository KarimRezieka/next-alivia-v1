"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/data/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    // Get saved language preference from localStorage
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
      // Set RTL direction and lang for Arabic
      document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = savedLanguage;
    } else {
      // Set default
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
    }
  }, []);

  const changeLanguage = (newLang) => {
    if (translations[newLang]) {
      setLanguage(newLang);
      localStorage.setItem("language", newLang);
      // Set RTL direction and lang for Arabic
      document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = newLang;
    }
  };

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
