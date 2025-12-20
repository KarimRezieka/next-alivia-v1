"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section
      id="home"
      className="relative pt-20 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      {/* Decorative background elements - education themed */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-100 rounded-full opacity-30"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-primary-100 rounded-full opacity-30"></div>
        {/* Graduation cap decoration */}
        <div className="absolute top-1/4 right-1/4 opacity-10">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
          </svg>
        </div>
        {/* Globe decoration */}
        <div className="absolute bottom-1/4 left-1/3 opacity-10">
          <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 00-1-1H8v-2h2a1 1 0 001-1V7h2a2 2 0 002-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39M11 19.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1a2 2 0 002 2m1-16A10 10 0 002 12a10 10 0 0010 10 a10 10 0 0010-10A10 10 0 0012 2z"/>
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
              </svg>
              {t("welcomeToSpain")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {t("studyIn")}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Spain
              </span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-gray-700 font-normal">
                {t("heroTitle")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {t("heroSubtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
<Link
  href="#services"
  className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
>
  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
  <span className="relative flex items-center">
    {t("exploreServices")} {/* This should show "Explore Study Programs" */}
    <svg
      className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  </span>
</Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl shadow-md hover:shadow-lg hover:border-blue-500 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                {t("getConsultation")}
              </Link>
            </motion.div>

            {/* Study Abroad Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-900">{t("visaAssistance")}</div>
                <div className="text-xs text-gray-600">{t("guaranteedSuccess")}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                    </svg>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-900">{t("universityAdmissions")}</div>
                <div className="text-xs text-gray-600">{t("topInstitutions")}</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Student Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative z-10"
          >
            <div className="relative w-full h-[500px] lg:h-[600px]">
              {/* Main Image Container with shadow and border */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                {/* Image with overlay gradient */}
                <div className="relative w-full h-full">
                  {/* Replace with your actual study abroad image */}
                  <Image
                    src="/images/Hero/Hero.png" // Change this to your image path
                    alt="Students studying in Spain"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
                </div>

                {/* Badge on top-left corner */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-bold text-blue-700">{t("visaSuccessRate")}</span>
                  </div>
                </div>
              </div>

              {/* Floating elements around the image */}
              <div className="absolute -bottom-4 -left-4 w-40 bg-white rounded-2xl shadow-xl p-4 transform -rotate-3 hidden lg:block z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">{t("campusesAcross")}</div>
                    <div className="font-bold text-blue-600">{t("spain")}</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-32 bg-indigo-50 rounded-2xl shadow-xl p-4 transform rotate-3 hidden lg:block z-20">
                <div className="text-center">
                  <div className="text-xs text-indigo-600 font-bold">{t("programsCount")}</div>
                  <div className="text-xs text-gray-600">{t("programsAvailable")}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}