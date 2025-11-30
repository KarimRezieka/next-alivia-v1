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
      <div className="flex justify-center w-full">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 w-full">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="font-bold text-2xl text-primary-600">
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
            <div className="md:hidden flex items-center space-x-4 rtl:space-x-reverse">
              <LanguageSelector />
              <button
                className="p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <span
                    className={`block w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                      isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
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
            className="md:hidden overflow-hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 rtl:space-y-reverse">
              <Link
                href="#features"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("features")}
              </Link>
              <Link
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("services")}
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("about")}
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("contact")}
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-primary-600 font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("allServices")}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}