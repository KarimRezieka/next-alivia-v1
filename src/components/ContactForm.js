"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSiteData } from "@/hooks/useSiteData";
import { useTranslation } from "@/hooks/useTranslation";

export default function ContactForm({ preSelectedService = "" }) {
  const { t } = useTranslation();
  const { company, services } = useSiteData();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceName: "",
    message: "",
  });

  // Update form when preSelectedService changes
  useEffect(() => {
    if (preSelectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceName: preSelectedService,
      }));
    }
  }, [preSelectedService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(t("thankYouMessage"));
    setFormData({ name: "", email: "", serviceName: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            {t("contactUs")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            {t("contactSub")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              {t("getInTouch")}
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {t("email")}
                  </h4>
                  <p className="text-gray-600">{company.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {t("phone")}
                  </h4>
                  <p className="text-gray-600">{company.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {t("address")}
                  </h4>
                  <p className="text-gray-600">{company.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">
                {t("officeHours")}
              </h4>
              <div className="text-gray-600 space-y-1">
                <p>{t("mondayFriday")}</p>
                <p>{t("saturday")}</p>
                <p>{t("sunday")}</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="card p-8">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  {t("fullName")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder={t("enterFullName")}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  {t("emailAddress")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder={t("enterEmail")}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="serviceName"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  {t("serviceName")}
                </label>
                <select
                  id="serviceName"
                  name="serviceName"
                  value={formData.serviceName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors bg-white"
                >
                  <option value="">{t("selectService")}</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  {t("message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder={t("messagePlaceholder")}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                {t("sendMessage")}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}