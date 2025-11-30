"use client";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import { useSiteData } from "@/hooks/useSiteData";
import { useTranslation } from "@/hooks/useTranslation";
import { siteData } from "@/data/data";

export default function ServiceDetailPage() {
  const params = useParams();
  const { t } = useTranslation();
  const { services, getCategoryName } = useSiteData();
  const [service, setService] = useState(null);
  const [relatedServices, setRelatedServices] = useState([]);
  const [preSelectedService, setPreSelectedService] = useState("");

  useEffect(() => {
    const foundService = services.find((s) => s.id === params.id);
    if (!foundService) {
      notFound();
      return;
    }
    setService(foundService);
    const related = services
      .filter(
        (s) =>
          foundService.relatedServices?.includes(s.id) &&
          s.id !== foundService.id
      )
      .slice(0, 3);
    setRelatedServices(related);
  }, [params.id, services]);

  const handleGetQuoteClick = (e) => {
    e.preventDefault();
    setPreSelectedService(service.id);
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  if (!service) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        {/* Service Header */}
        <div className="bg-primary-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-6">
              <Link
                href="/services"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                {t("backToServices")}
              </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full mb-4 capitalize">
                  {getCategoryName(service.category)}
                </span>
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {service.detailedDescription}
                </p>
                <button
                  onClick={handleGetQuoteClick}
                  className="btn-primary inline-block"
                >
                  {t("getStarted")}
                </button>
              </div>

              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                  <div className="text-8xl opacity-20">📋</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Required Papers */}
              {service.requiredPapers && service.requiredPapers.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {t("requiredDocumentation")}
                  </h2>
                  <div className="card p-6">
                    <ul className="space-y-3">
                      {service.requiredPapers.map((paper, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-3 mt-1">✓</span>
                          <span className="text-gray-700">{paper}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Process Overview */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {t("howWeHelp")}
                </h2>
                <div className="card p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center rtl:text-center">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 rtl:mx-auto">
                        <span className="text-2xl">📋</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-center">
                        {t("consultation")}
                      </h3>
                      <p className="text-sm text-gray-600 text-center">
                        {t("consultationDesc")}
                      </p>
                    </div>
                    <div className="text-center rtl:text-center">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 rtl:mx-auto">
                        <span className="text-2xl">⚙️</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-center">
                        {t("processing")}
                      </h3>
                      <p className="text-sm text-gray-600 text-center">
                        {t("processingDesc")}
                      </p>
                    </div>
                    <div className="text-center rtl:text-center">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 rtl:mx-auto">
                        <span className="text-2xl">✅</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-center">
                        {t("success")}
                      </h3>
                      <p className="text-sm text-gray-600 text-center">
                        {t("successDesc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Contact Card */}
                <div className="card p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {t("needHelp")}
                  </h3>
                  <p className="text-gray-600 mb-6">{t("needHelpDesc")}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="mr-3">📧</span>
                      <span>{siteData.company.email}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="mr-3">📞</span>
                      <span>{siteData.company.phone}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleGetQuoteClick}
                    className="btn-primary w-full text-center block"
                  >
                    {t("getQuote")}
                  </button>
                </div>

                {/* Related Services */}
                {relatedServices.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      {t("relatedServices")}
                    </h3>
                    <div className="space-y-4">
                      {relatedServices.map((relatedService) => (
                        <div
                          key={relatedService.id}
                          className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
                        >
                          <Link
                            href={`/services/${relatedService.id}`}
                            className="block"
                          >
                            <h4 className="font-semibold text-gray-900 mb-2">
                              {relatedService.title}
                            </h4>
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {relatedService.description}
                            </p>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form with pre-selected service */}
        <ContactForm preSelectedService={preSelectedService} />
      </div>
      <Footer />
    </div>
  );
}