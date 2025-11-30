"use client";
import { useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/data";
import { translations } from "@/data/translations";

export function useSiteData() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  // Helper to get translated category name
  const getCategoryName = (category) => {
    const categoryMap = {
      visa: t.categoryVisa,
      residence: t.categoryResidence,
      education: t.categoryEducation,
      documentation: t.categoryDocumentation,
      logistics: t.categoryLogistics,
      administrative: t.categoryAdministrative,
      healthcare: t.categoryHealthcare,
      employment: t.categoryEmployment,
      business: t.categoryBusiness,
      consulting: t.categoryConsulting,
      legal: t.categoryLegal,
      support: t.categorySupport,
      lifestyle: t.categoryLifestyle,
    };
    return categoryMap[category] || category;
  };

  // Memoize translated services to prevent infinite loops
  const services = useMemo(() => {
    const categoryMap = {
      visa: t.categoryVisa,
      residence: t.categoryResidence,
      education: t.categoryEducation,
      documentation: t.categoryDocumentation,
      logistics: t.categoryLogistics,
      administrative: t.categoryAdministrative,
      healthcare: t.categoryHealthcare,
      employment: t.categoryEmployment,
      business: t.categoryBusiness,
      consulting: t.categoryConsulting,
      legal: t.categoryLegal,
      support: t.categorySupport,
      lifestyle: t.categoryLifestyle,
    };

    const serviceTranslations = t.serviceTranslations || {};

    return siteData.services.map((service) => {
      const translation = serviceTranslations[service.id];
      return {
        ...service,
        title: translation?.title || service.title,
        description: translation?.description || service.description,
        detailedDescription:
          translation?.detailedDescription || service.detailedDescription,
        requiredPapers: translation?.requiredPapers || service.requiredPapers,
        categoryTranslated: categoryMap[service.category] || service.category,
      };
    });
  }, [language, t]);

  // Memoize translated company info
  const company = useMemo(() => {
    return {
      ...siteData.company,
      tagline: t.companyTagline,
      description: t.companyDescription,
      mission: t.mission,
    };
  }, [language]);

  // Memoize navigation
  const navigation = useMemo(() => {
    return siteData.navigation.map((item) => ({
      ...item,
      name: t[item.name.toLowerCase()] || item.name,
    }));
  }, [language]);

  // Get translated FAQs
  const faqs = useMemo(() => {
    const translatedFAQs = t.faqs;
    if (
      translatedFAQs &&
      Array.isArray(translatedFAQs) &&
      translatedFAQs.length > 0
    ) {
      return translatedFAQs;
    }
    // Fallback to English if translations not available
    return siteData.faqs;
  }, [language, t]);

  return {
    company,
    services,
    partners: siteData.partners,
    team: siteData.team,
    faqs,
    getCategoryName,
    navigation,
  };
}
