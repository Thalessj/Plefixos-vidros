"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface VanishTextProps {
  texts: string[];
  interval?: number;
}

const VanishText = ({ texts, interval = 3000 }: VanishTextProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="text-6xl font-bold text-black"
    >
      {texts[index]}
    </motion.span>
  );
};

export default VanishText;
