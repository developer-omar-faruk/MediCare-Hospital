import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {FiChevronUp,} from "react-icons/fi";


function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-lg flex items-center justify-center transition-colors">
          <FiChevronUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop
