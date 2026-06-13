import { navLinks, hospitalInfo } from "../data";

import { useState, useEffect, useRef, createContext, useContext } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FiPhone, FiMail, FiMapPin, FiClock, FiHeart, FiActivity,
  FiUser, FiUsers, FiShield, FiAward, FiCalendar, FiArrowRight,
  FiMenu, FiX, FiSearch, FiChevronDown, FiStar, FiCheckCircle,
  FiAlertCircle, FiTrendingUp, FiEye, FiBriefcase, FiGlobe,
  FiInstagram, FiTwitter, FiFacebook, FiYoutube, FiChevronUp,
  FiMessageCircle, FiHome, FiLayers, FiZap
} from "react-icons/fi";


function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white text-xs sm:text-sm py-1.5 px-4 flex items-center justify-center gap-4 flex-wrap">
        <span className="flex items-center gap-1.5 font-semibold"><FiAlertCircle size={14} /> Emergency Hotline:</span>
        <a href="tel:+18009110000" className="font-bold hover:underline">{hospitalInfo.emergency}</a>
        <span className="hidden sm:inline">|</span>
        <span className="hidden sm:flex items-center gap-1.5"><FiClock size={13} /> Available 24/7</span>
      </div>
      <motion.nav initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => setActivePage("home")} className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow">
                <FiHeart className="text-white" size={18} />
              </div>
              <div className="leading-tight text-left">
                <div className="text-base font-bold text-blue-700">MediCare Prime</div>
                <div className="text-[10px] text-gray-500 hidden sm:block">Hospital & Healthcare</div>
              </div>
            </button>
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(l => (
                <button key={l.path} onClick={() => setActivePage(l.path)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${activePage === l.path ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"}`}>
                  {l.label}
                </button>
              ))}
            </div>
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+18001234567" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600">
                <FiPhone size={14} /><span>{hospitalInfo.phone}</span>
              </a>
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={() => setActivePage("appointment")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors">
                Book Appointment
              </motion.button>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden">
              <div className="px-4 py-3 space-y-1">
                {navLinks.map(l => (
                  <button key={l.path} onClick={() => { setActivePage(l.path); setMenuOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activePage === l.path ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50"}`}>
                    {l.label}
                  </button>
                ))}
                <button onClick={() => { setActivePage("appointment"); setMenuOpen(false); }}
                  className="w-full bg-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold mt-2">
                  Book Appointment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

export default Navbar
