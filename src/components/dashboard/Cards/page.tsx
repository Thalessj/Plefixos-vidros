"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import {
  Mail,
  BadgeCheck,
  UserRoundCheck,
  PackagePlus,
  ShieldCheck,
  CreditCard,
  Leaf,
  Truck,
  CheckCircle,
} from "lucide-react";

interface CardProps {
  Icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const Card: React.FC<CardProps> = ({ Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white/90 shadow-md rounded-lg p-6 flex items-center space-x-4 border-l-4 border-[#0077B6] cursor-pointer"
    >
      <div className="text-3xl text-[#008F5E]">{Icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const CardsLayout = () => {
  const cardsData = [
    {
      title: "Qualidade Garantida",
      description: "Produtos de alta durabilidade e resistência.",
      Icon: <BadgeCheck />,
    },
    {
      title: "Atendimento Personalizado",
      description: "Soluções sob medida para cada cliente.",
      Icon: <UserRoundCheck />,
    },
    {
      title: "Tecnologia e Inovação",
      description: "Vidros modernos com design sofisticado.",
      Icon: <PackagePlus />,
    },
    {
      title: "Segurança e Confiabilidade",
      description: "Instalações seguras e certificadas.",
      Icon: <ShieldCheck />,
    },
    {
      title: "Suporte Ágil",
      description: "Atendimento rápido e eficiente.",
      Icon: <Mail />,
    },
    {
      title: "Sustentabilidade",
      description: "Práticas ecológicas.",
      Icon: <Leaf />,
    },
    {
      title: "Entrega Rápida",
      description: "Prazos reduzidos.",
      Icon: <Truck />,
    },
    {
      title: "Garantia Estendida",
      description: "Segurança e suporte prolongados.",
      Icon: <CheckCircle />,
    },
    {
      title: "Facilidade no Pagamento",
      description: "Opções flexíveis.",
      Icon: <CreditCard />,
    },
  ];

  return (
    <section id="Cards" className="w-full py-16 px-6 bg-[#F0F8FF]">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center text-[#0077B6] mb-12"
      >
        Nossos Diferenciais
      </motion.h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.map((card, index) => (
          <Card key={index} index={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default CardsLayout;
