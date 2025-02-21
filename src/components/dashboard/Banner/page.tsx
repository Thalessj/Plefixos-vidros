"use client";
import { motion } from "framer-motion";
import { Star, Award, Users } from "lucide-react";
import { useState, useEffect } from "react";

interface VanishTextProps {
  texts: string[];
}

const VanishText = ({ texts }: VanishTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="relative h-14 md:h-16 overflow-hidden text-center">
      {texts.map((text, index) => (
        <motion.div
          key={text}
          initial={{ opacity: 0, y: 20 }}
          animate={
            index === currentIndex
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: -20 }
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute w-full font-extrabold text-2xl sm:text-4xl md:text-6xl tracking-tight"
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
};

export default function Banner() {
  return (
    <div
      id="Home"
      className="relative flex items-center justify-center min-h-[80vh] md:min-h-screen bg-gradient-to-br from-[#0077B6] to-[#00507A] text-white px-4 sm:px-6"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/20" />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <VanishText texts={["20 anos de", "+ de 142 clientes"]} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg sm:text-2xl md:text-3xl font-semibold"
          >
            Referência Local
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 sm:mt-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
          >
            {[
              {
                icon: <Award className="w-8 h-8 mb-2" />,
                title: "Experiência",
                text: "20 Anos no Mercado",
              },
              {
                icon: <Users className="w-8 h-8 mb-2" />,
                title: "Clientes",
                text: "+140 Satisfeitos",
              },
              {
                icon: <Star className="w-8 h-8 mb-2" />,
                title: "Qualidade",
                text: "Serviço Premium",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-4 sm:p-6 rounded-lg bg-white/10 transition-transform cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.2)",
                }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {item.icon}
                <span className="text-lg sm:text-xl font-bold">
                  {item.title}
                </span>
                <span className="text-sm sm:text-lg opacity-90">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
