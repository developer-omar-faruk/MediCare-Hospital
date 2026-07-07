import { hospitalInfo, stats } from "../data";
import { AnimatedCounter } from "../pages/UTILITIES";

import { motion } from "framer-motion";
import { FiPhone, FiActivity, FiUsers, FiShield, FiAward, FiCalendar } from "react-icons/fi";


function HomeHero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div key={i} animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4 + (i % 4), repeat: Infinity, delay: i * 0.3 }}
              className="absolute rounded-full bg-white/10"
              style={{ width: 20 + (i * 7) % 60, height: 20 + (i * 7) % 60, left: `${(i * 17) % 95}%`, top: `${(i * 13) % 85}%` }} />
          ))}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white text-sm font-medium">Now accepting new patients</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Advanced Healthcare for a <span className="text-blue-300">Healthier Tomorrow</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="text-blue-100 text-lg mb-8 max-w-xl leading-relaxed">
              World-class medical care with cutting-edge technology, compassionate staff, and a commitment to your wellbeing — all under one roof.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="flex flex-wrap gap-4">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} onClick={() => setActivePage("appointment")}
                className="bg-white text-blue-700 hover:bg-blue-50 px-7 py-3.5 rounded-2xl font-bold text-base shadow-xl flex items-center gap-2 transition-colors">
                <FiCalendar size={18} /> Book Appointment
              </motion.button>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href="tel:+8801624471890"
                className="bg-red-500 hover:bg-red-600 text-white px-7 py-3.5 rounded-2xl font-bold text-base shadow-xl flex items-center gap-2 transition-colors">
                <FiPhone size={18} /> Emergency: {hospitalInfo.emergency}
              </motion.a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-6 mt-10">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-extrabold text-white"><AnimatedCounter target={s.value} suffix={s.suffix} /></div>
                  <div className="text-blue-200 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-4 items-end">
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {[
                { icon: <FiShield size={28} />, label: "Accredited", val: "JCI Certified", color: "bg-blue-500" },
                { icon: <FiAward size={28} />, label: "Award Winner", val: "Best Hospital 2023", color: "bg-green-500" },
                { icon: <FiUsers size={28} />, label: "Staff", val: "1,200+ Employees", color: "bg-purple-500" },
                { icon: <FiActivity size={28} />, label: "Beds", val: "500+ Beds", color: "bg-amber-500" },
              ].map((c, i) => (
                <motion.div key={i} whileHover={{ scale: 1.05, y: -4 }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
                  className="bg-white/15 backdrop-blur border border-white/20 rounded-2xl p-4 text-center">
                  <div className={`${c.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mx-auto mb-2 shadow`}>{c.icon}</div>
                  <div className="text-white font-bold text-xs">{c.val}</div>
                  <div className="text-blue-200 text-[10px]">{c.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

export default HomeHero
