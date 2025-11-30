"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-9xl mb-8">🔍</div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl text-gray-600 mb-8">{t("pageNotFound")}</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            {t("notFoundDesc")}
          </p>
          <div className="space-x-4">
            <Link href="/" className="btn-primary">
              {t("goHome")}
            </Link>
            <Link href="/services" className="btn-secondary">
              {t("browseServices")}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
