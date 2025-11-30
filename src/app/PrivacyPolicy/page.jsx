"use client";
import {
  ArrowLeft,
  Shield,
  Eye,
  Lock,
  Database,
  Users,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  const sections = [
    {
      id: "information-collection",
      title: t("informationCollection"),
      icon: Database,
      content: `We collect minimal information to provide our URL shortening service effectively. This includes:
      
      **Automatically Collected Information:**
      • IP addresses for rate limiting and abuse prevention
      • Browser type and version for compatibility
      • Device information for analytics
      • Referrer information when you visit our site
      
      **User-Provided Information:**
      • URLs you choose to shorten
      • Custom aliases (if you create them)
      • Optional account information if you register`,
    },
    {
      id: "information-use",
      title: t("informationUse"),
      icon: Eye,
      content: `We use collected information solely to:
      
      • Provide and maintain our URL shortening service
      • Generate analytics and click statistics
      • Prevent abuse, spam, and malicious activity
      • Improve our service performance and user experience
      • Comply with legal obligations when required
      
      We never sell your personal information to third parties or use it for advertising purposes.`,
    },
    {
      id: "data-sharing",
      title: t("dataSharing"),
      icon: Users,
      content: `We maintain strict data sharing policies:
      
      **We DO NOT share your information except:**
      • When required by law or legal process
      • To protect our rights or prevent illegal activity
      • With service providers who help operate our platform (under strict confidentiality)
      
      **We NEVER:**
      • Sell your data to advertisers or marketers
      • Share your personal information with social media platforms
      • Use your data for purposes other than providing our service`,
    },
    {
      id: "data-security",
      title: t("dataSecurity"),
      icon: Lock,
      content: `We implement industry-standard security measures:
      
      • SSL/TLS encryption for all data transmission
      • Secure servers with regular security updates
      • Limited access to personal data on a need-to-know basis
      • Regular security audits and monitoring
      • Secure deletion of data when no longer needed
      
      While we strive to protect your information, no method of transmission over the internet is 100% secure.`,
    },
    {
      id: "data-retention",
      title: t("dataRetention"),
      icon: Database,
      content: `We retain information only as long as necessary:
      
      • **Short URLs:** Retained indefinitely to ensure links remain functional
      • **Click Analytics:** Aggregated data retained for service improvement
      • **IP Addresses:** Logged temporarily for abuse prevention, then anonymized
      • **Account Data:** Retained until you delete your account
      
      You can request deletion of your personal data by contacting us.`,
    },
    {
      id: "your-rights",
      title: t("yourRights"),
      icon: Shield,
      content: `You have the following rights regarding your data:
      
      • **Access:** Request information about data we have about you
      • **Correction:** Request correction of inaccurate personal data
      • **Deletion:** Request deletion of your personal data
      • **Portability:** Request a copy of your data in a portable format
      • **Objection:** Object to processing of your personal data
      
      To exercise these rights, contact us at privacy@123url.io`,
    },
    {
      id: "international-transfers",
      title: t("internationalTransfers"),
      icon: Globe,
      content: `Our service may involve international data transfers:
      
      • We use cloud providers that may store data in various countries
      • All transfers comply with applicable privacy laws and regulations
      • We ensure appropriate safeguards are in place for international transfers
      • Data is processed in accordance with this privacy policy regardless of location`,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t("backToHome")}
            </Link>
          </div>

          <div className="mt-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {t("privacyPolicy")}
                </h1>
                <p className="text-gray-600">{t("lastUpdated")}</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl">
              {t("privacyIntro")}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Quick Navigation */}
          <div className="bg-white rounded-xl p-6 mb-8 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t("quickNavigation")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors p-2 rounded-lg hover:bg-blue-50"
                >
                  <section.icon className="w-4 h-4" />
                  <span className="text-sm">{section.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="bg-white rounded-xl p-8 border border-gray-200"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                </div>
                <div className="prose prose-gray max-w-none">
                  {section.content.split("\n").map((paragraph, index) => {
                    if (
                      paragraph.startsWith("**") &&
                      paragraph.endsWith(":**")
                    ) {
                      return (
                        <h3
                          key={index}
                          className="text-lg font-semibold text-gray-900 mt-6 mb-3"
                        >
                          {paragraph.replace(/\*\*/g, "")}
                        </h3>
                      );
                    } else if (paragraph.startsWith("•")) {
                      return (
                        <li key={index} className="text-gray-700 ml-4">
                          {paragraph.substring(2)}
                        </li>
                      );
                    } else if (
                      paragraph.startsWith("**") &&
                      paragraph.endsWith("**")
                    ) {
                      return (
                        <p
                          key={index}
                          className="font-semibold text-gray-900 mt-4"
                        >
                          {paragraph.replace(/\*\*/g, "")}
                        </p>
                      );
                    } else if (paragraph.trim()) {
                      return (
                        <p
                          key={index}
                          className="text-gray-700 leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              </section>
            ))}
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 rounded-xl p-8 mt-12 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t("questionsAboutPolicy")}
            </h2>
            <p className="text-gray-700 mb-6">{t("privacyContactText")}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t("emailUs")}
                </h3>
                <p className="text-gray-700">info@alivia.es</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t("responseTime")}
                </h3>
                <p className="text-gray-700">{t("responseTimeText")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
