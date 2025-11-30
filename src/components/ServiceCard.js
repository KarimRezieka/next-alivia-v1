"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

export default function ServiceCard({ service }) {
  const { t } = useTranslation();
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="card h-full"
    >
      <div className="relative h-48 bg-gradient-to-br from-primary-500 to-primary-700 rounded-t-xl flex items-center justify-center">
        <div className="text-6xl opacity-20 text-white">📋</div>
        <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full capitalize">
          {service.categoryTranslated || service.category.replace("-", " ")}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
          {service.description}
        </p>
        <Link
          href={`/services/${service.id}`}
          className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center"
        >
          {t("learnMore")}
          <span className="ml-2">→</span>
        </Link>
      </div>
    </motion.div>
  );
}
