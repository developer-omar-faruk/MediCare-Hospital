import { useEffect } from "react";
import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";


function LoadingScreen({ onDone }) {
  useEffect(() => { const t = setTimeout(onDone, 2200); return () => clearTimeout(t); }, []);
  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900">
      <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="mb-6">
        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
          <FiHeart className="text-blue-600" size={40} />
        </div>
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-3xl font-bold text-white mb-2">MediCare Prime</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-blue-200 text-sm mb-8">Advanced Healthcare for a Healthier Tomorrow</motion.p>
      <motion.div initial={{ width: 0 }} animate={{ width: 220 }} transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }}
        className="h-1 bg-white rounded-full" style={{ maxWidth: 220 }} />
    </motion.div>
  );
}

export default LoadingScreen
