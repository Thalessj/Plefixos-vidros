"use client";
import { motion } from "framer-motion";

const MapImage: React.FC = () => {
  const latitude = -22.6809639;
  const longitude = -48.669247;

  const addressLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <motion.div
      id="Location"
      className="flex flex-col justify-center items-center py-16 text-white p-6 relative bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-white/60 backdrop-blur-md shadow-2xl rounded-xl p-8 flex flex-col items-center border border-gray-300 max-w-lg w-full"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-center mb-6">
          <h1 className="text-3xl text-black font-bold mb-2">
            Minha Localização
          </h1>
          <p className="text-lg text-black opacity-80">
            Clique na imagem abaixo para ver a localização no Google Maps.
          </p>
        </div>

        <motion.a
          href={addressLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img
            src="/image/download.png"
            alt="Imagem de Localização"
            className="rounded-lg shadow-lg border border-gray-400 bg-white/70 backdrop-blur-lg p-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default MapImage;
