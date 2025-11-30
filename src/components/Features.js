"use client";
import { motion } from "framer-motion";
import { siteData } from "@/data/data";
import { useTranslation } from "@/hooks/useTranslation";

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      icon: "🌟",
      title: t("expertGuidance"),
      description: t("expertGuidanceDesc"),
    },
    {
      icon: "📄",
      title: t("documentSupport"),
      description: t("documentSupportDesc"),
    },
    {
      icon: "🎓",
      title: t("educationalServices"),
      description: t("educationalServicesDesc"),
    },
    {
      icon: "🤝",
      title: t("ongoingSupport"),
      description: t("ongoingSupportDesc"),
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            {t("whyChooseAlivia")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            {t("featuresSub")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
