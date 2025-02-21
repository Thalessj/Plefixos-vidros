"use client";
import { motion } from "framer-motion";

interface WorksProps {
  title: string;
  image: string;
  description: string;
}

const Works: React.FC<WorksProps> = ({ title, description, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white/90 shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-xl border-t-4 border-[#0077B6]"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
};

const WorksLayout = () => {
  return (
    <section
      id="works"
      className="w-full py-16 px-6 bg-gradient-to-b from-[#F0F7FA] to-[#D0E8E0]"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-black mb-12"
      >
        Serviços de Vidraçaria
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <Works
          title="Porta"
          description="Porta sob medida personalizada."
          image="/image/porta.jpg"
        />
        <Works
          title="Box para Banheiro"
          description="Box de vidro temperado sob medida."
          image="/image/box-para-banheiro.jpg"
        />
        <Works
          title="Janela"
          description="janela de vidro temperado."
          image="/image/janela.jpg"
        />
        <Works
          title="Fechamento de pia em vidro"
          description="Vidros temperados para residências e empresas."
          image="/image/fechamento-de-pia-em-vidro.jpg"
        />
      </div>
    </section>
  );
};

export default WorksLayout;
