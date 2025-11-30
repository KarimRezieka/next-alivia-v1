"use client";
import { motion } from "framer-motion";
import { useSiteData } from "@/hooks/useSiteData";
import { useTranslation } from "@/hooks/useTranslation";

export default function Partners() {
  const { t } = useTranslation();
  const { partners } = useSiteData();

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            {t("ourPartners")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            {t("partnersSub")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {partner.logo}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {partner.name}
              </h3>
              <p className="text-gray-600 text-sm">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
