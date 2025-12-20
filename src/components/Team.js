"use client";
import { motion } from "framer-motion";
import { useSiteData } from "@/hooks/useSiteData";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";

export default function Team() {
  const { t } = useTranslation();
  const { team } = useSiteData();

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            {t("meetOurTeam")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            {t("teamSub")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center group hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 rounded-t-xl mb-6 overflow-hidden flex-shrink-0">
                {/* Rectangle/square image container */}
                <div className="relative w-full h-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                  />
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm flex-grow">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}