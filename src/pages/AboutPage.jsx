import { hospitalInfo, stats, achievements, leadership } from "../data";
import { SectionWrapper, AnimatedCounter, fadeUp } from "./UTILITIES";

import { motion } from "framer-motion";
import {
  FiHeart, FiAward, FiArrowRight, FiCheckCircle, FiTrendingUp, FiEye,
  FiShield, FiActivity, FiUsers, FiCalendar, FiAlertCircle, FiZap,
} from "react-icons/fi";


function AboutPage({ setActivePage }) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">About MediCare Prime</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">Healing lives with expertise, empathy, and excellence since {hospitalInfo.founded}.</p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper className="grid lg:grid-cols-3 gap-8">
            {[
              { title: "Our Mission", icon: <FiHeart size={28} />, color: "bg-blue-600", text: "To provide world-class, patient-centered healthcare that improves lives and serves our community with integrity, innovation, and compassion." },
              { title: "Our Vision", icon: <FiEye size={28} />, color: "bg-green-600", text: "To be the most trusted healthcare institution in the region, recognized for clinical excellence, outstanding outcomes, and a culture of continuous improvement." },
              { title: "Our Values", icon: <FiAward size={28} />, color: "bg-purple-600", text: "Compassion, Integrity, Excellence, Innovation, Teamwork, and Respect form the core of everything we do at MediCare Prime." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white rounded-2xl shadow-md border border-gray-100 p-7 hover:shadow-xl transition-all">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow`}>{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}
          </SectionWrapper>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900">Our History</h2>
            </motion.div>
            <div className="relative border-l-2 border-blue-200 pl-8 space-y-8">
              {[
                { year: 1995, event: "MediCare Prime Hospital founded with 50 beds and 10 doctors." },
                { year: 2002, event: "Expanded to 200 beds. Launched the Cardiology and Neurology departments." },
                { year: 2009, event: "Received NABH Accreditation. Opened the Advanced Cancer Center." },
                { year: 2015, event: "Achieved JCI Accreditation — the gold standard in global healthcare." },
                { year: 2019, event: "Launched telemedicine platform serving 50,000+ patients remotely." },
                { year: 2023, event: "Awarded Best Hospital of the Year. Reached 120,000+ patients served milestone." },
              ].map((h, i) => (
                <motion.div key={i} variants={fadeUp} className="relative">
                  <div className="absolute -left-11 w-5 h-5 bg-blue-600 rounded-full border-3 border-white shadow" />
                  <span className="text-blue-600 font-bold text-sm">{h.year}</span>
                  <p className="text-gray-700 mt-1">{h.event}</p>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="text-4xl font-extrabold text-blue-600 mb-1"><AnimatedCounter target={s.value} suffix={s.suffix} /></div>
                <div className="text-gray-600 font-medium">{s.label}</div>
              </motion.div>
            ))}
          </SectionWrapper>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900">Awards & Achievements</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {achievements.map((a, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4 items-start hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
                    <FiAward size={24} className="text-amber-500" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-500 font-bold mb-0.5">{a.year}</div>
                    <div className="font-bold text-gray-900 text-sm">{a.title}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{a.org}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900">Our Leadership</h2>
            </motion.div>
            <div className="grid sm:grid-cols-3 gap-8">
              {leadership.map((l, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center hover:shadow-xl transition-all">
                  <img src={l.image} alt={l.name} className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-blue-50 shadow" />
                  <h3 className="font-bold text-gray-900">{l.name}</h3>
                  <p className="text-blue-600 text-sm font-medium mb-2">{l.role}</p>
                  <p className="text-gray-500 text-xs">{l.bio}</p>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}

export default AboutPage
