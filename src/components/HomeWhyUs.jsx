import { SectionWrapper, fadeUp } from "../pages/UTILITIES";

import { motion } from "framer-motion";
import {
  FiShield, FiAward, FiCalendar, FiAlertCircle, FiTrendingUp, FiZap,
} from "react-icons/fi";

const whyChooseUs = [
  { icon: <FiAlertCircle size={24} />, title: "24/7 Emergency", desc: "Round-the-clock emergency care with rapid response teams always ready.", color: "text-red-500 bg-red-50" },
  { icon: <FiAward size={24} />, title: "Expert Doctors", desc: "Over 350 board-certified specialists across all major medical disciplines.", color: "text-blue-500 bg-blue-50" },
  { icon: <FiTrendingUp size={24} />, title: "Modern Equipment", desc: "State-of-the-art medical technology for precise diagnosis and treatment.", color: "text-green-500 bg-green-50" },
  { icon: <FiShield size={24} />, title: "Affordable Care", desc: "Transparent pricing, insurance support, and flexible payment options.", color: "text-purple-500 bg-purple-50" },
  { icon: <FiZap size={24} />, title: "Fast Service", desc: "Minimal wait times with efficient patient flow and digital queuing.", color: "text-amber-500 bg-amber-50" },
  { icon: <FiCalendar size={24} />, title: "Online Appointments", desc: "Easy online booking, reminders, and teleconsultation from home.", color: "text-teal-500 bg-teal-50" },
];


function HomeWhyUs() {
  return (
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Why MediCare Prime</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">Why Choose Us?</h2>
              <p className="text-gray-500 max-w-xl mx-auto">We combine medical excellence with genuine human compassion.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.02 }}
                  className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 transition-all">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>
  )
}

export default HomeWhyUs
