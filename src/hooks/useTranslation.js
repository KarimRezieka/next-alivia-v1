"use client";
import { useLanguage } from "@/context/LanguageContext";

export function useTranslation() {
  const { language, changeLanguage, t: translations } = useLanguage();

  const t = (key) => {
    return translations?.[key] || key;
  };

  return { 
    t, 
    locale: language, 
    changeLanguage 
  };
}