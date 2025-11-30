"use client";
import { motion } from "framer-motion";
import { useSiteData } from "@/hooks/useSiteData";
import { useTranslation } from "@/hooks/useTranslation";

export default function About() {
  const { t } = useTranslation();
  const { company } = useSiteData();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t("aboutAlivia")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {company.mission}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-primary-500 mr-4 mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t("comprehensiveSupport")}
                  </h4>
                  <p className="text-gray-600">
                    {t("comprehensiveSupportDesc")}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-primary-500 mr-4 mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t("personalizedService")}
                  </h4>
                  <p className="text-gray-600">
                    {t("personalizedServiceDesc")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-transparent"></div>
              <div className="relative z-10 text-center text-white">
                <div className="text-8xl mb-4 opacity-30">🏢</div>
                <h3 className="text-2xl font-bold mb-2">
                  {t("trustedPartner")}
                </h3>
                <p className="text-lg opacity-90">{t("successMission")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
