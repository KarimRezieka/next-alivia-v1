"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteData } from "@/data/data";
import { useTranslation } from "@/hooks/useTranslation";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="font-bold text-xl sm:text-2xl text-primary-600 hover:text-primary-700 transition-colors">
                {siteData.company.name}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-8 rtl:space-x-reverse">
                <Link
                  href="#features"
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  {t("features")}
                </Link>
                <Link
                  href="#services"
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  {t("services")}
                </Link>
                <Link
                  href="#about"
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  {t("about")}
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  {t("contact")}
                </Link>
              </div>
            </div>

            {/* Right side - CTA and Language */}
            <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse flex-shrink-0">
              <Link href="/services" className="btn-primary">
                {t("allServices")}
              </Link>
              <LanguageSelector />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2 rtl:space-x-reverse">
              <LanguageSelector />
              <button
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors active:bg-gray-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-5 flex flex-col justify-center space-y-1.5">
                  <span
                    className={`block w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                      isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              height: isMobileMenuOpen ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-3 py-4 space-y-1">
              <Link
                href="#features"
                className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-primary-600 font-medium transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("features")}
              </Link>
              <Link
                href="#services"
                className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-primary-600 font-medium transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("services")}
              </Link>
              <Link
                href="#about"
                className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-primary-600 font-medium transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("about")}
              </Link>
              <Link
                href="#contact"
                className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-primary-600 font-medium transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("contact")}
              </Link>
              <Link
                href="/services"
                className="block px-4 py-3 mt-2 rounded-lg bg-primary-600 text-white font-semibold text-center hover:bg-primary-700 transition-all duration-200 shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("allServices")}
              </Link>
            </div>
          </motion.div>
        </div>
    </motion.nav>
  );
}