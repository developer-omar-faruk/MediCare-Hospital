import { SectionWrapper, fadeUp } from "../pages/UTILITIES";

import { motion } from "framer-motion";
import {
  FiHeart, FiActivity, FiUsers, FiShield, FiAlertCircle, FiTrendingUp
} from "react-icons/fi";

const quickServices = [
  { name: "Emergency Care", icon: <FiAlertCircle size={28} />, color: "from-red-500 to-red-600", desc: "24/7 trauma & emergency" },
  { name: "Cardiology", icon: <FiHeart size={28} />, color: "from-pink-500 to-pink-600", desc: "Heart & vascular care" },
  { name: "Neurology", icon: <FiActivity size={28} />, color: "from-purple-500 to-purple-600", desc: "Brain & nerve treatment" },
  { name: "Pediatrics", icon: <FiUsers size={28} />, color: "from-green-500 to-green-600", desc: "Child health specialists" },
  { name: "Orthopedics", icon: <FiShield size={28} />, color: "from-blue-500 to-blue-600", desc: "Bone & joint surgery" },
  { name: "Laboratory", icon: <FiTrendingUp size={28} />, color: "from-teal-500 to-teal-600", desc: "Advanced diagnostics" },
];


function HomeQuickService({setActivePage}) {
  return (
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Our Core Services</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Comprehensive healthcare services designed to meet all your medical needs under one roof.</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickServices.map((s, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -8, scale: 1.03 }} onClick={() => setActivePage("services")}
                  className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-5 flex flex-col items-center gap-3 transition-all group">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow group-hover:shadow-lg transition-all`}>{s.icon}</div>
                  <div className="text-center">
                    <div className="font-bold text-sm text-gray-800">{s.name}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{s.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>
        </div>
    </section>
  )
}

export default HomeQuickService
