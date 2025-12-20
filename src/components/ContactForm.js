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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // Update form when preSelectedService changes
  useEffect(() => {
    if (preSelectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceName: preSelectedService,
      }));
    }
  }, [preSelectedService]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t("nameRequired") || "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = t("emailRequired") || "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("invalidEmail") || "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = t("messageRequired") || "Message is required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Clear previous errors and status
    setErrors({});
    setSubmitStatus(null);
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        // Success
        setSubmitStatus({
          type: "success",
          message: result.message || t("thankYouMessage") || "Thank you! Your message has been sent."
        });
        
        // Reset form
        setFormData({ 
          name: "", 
          email: "", 
          serviceName: preSelectedService || "", 
          message: "" 
        });
        
        // Auto-clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
        
      } else {
        // Error from API
        throw new Error(result.message || "Failed to send message");
      }
      
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: error.message || t("errorSendingMessage") || "An error occurred. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Get service title from ID
  const getServiceTitle = (serviceId) => {
    const service = services.find(s => s.id === serviceId);
    return service ? service.title : serviceId;
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
                    {t("address")} <span className="text-red-500">{t("preservationNote")}</span>
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
                  {t("fullName")} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={t("enterFullName")}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  {t("emailAddress")} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={t("enterEmail")}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
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
                  disabled={isSubmitting}
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
                  {t("message")} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={t("messagePlaceholder")}
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              {/* Status Messages */}
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-800' 
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}>
                  <div className="flex items-center">
                    {submitStatus.type === 'success' ? (
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span>{submitStatus.message}</span>
                  </div>
                </div>
              )}

              <button 
                type="submit" 
                className="btn-primary w-full flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t("sending") || "Sending..."}
                  </>
                ) : (
                  t("sendMessage")
                )}
              </button>
              
              <p className="mt-4 text-sm text-gray-500 text-center">
                * {t("requiredFields") || "Required fields"}
              </p>
            </form>            
          </motion.div>
        </div>
      </div>
    </section>
  );
}