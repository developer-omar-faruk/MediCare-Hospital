import { hospitalInfo, stats } from "../data";
import { SectionWrapper, AnimatedCounter, fadeUp } from "../pages/UTILITIES";

import { motion } from "framer-motion";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";


function HomeAboutPrev({setActivePage}) {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">About MediCare Prime</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-5">A Legacy of Healing & Excellence</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Founded in {hospitalInfo.founded}, MediCare Prime Hospital has been at the forefront of medical innovation and compassionate patient care for over 29 years. Our world-class facility combines the latest medical technology with a deeply human approach to healing.</p>
              <p className="text-gray-600 leading-relaxed mb-6">We are JCI-accredited with 350+ specialist doctors, 28 departments, and 500+ beds, serving patients from across the nation and internationally.</p>
              <ul className="space-y-2 mb-7">
                {["JCI Accredited & ISO Certified", "350+ Board-Certified Specialists", "28 Specialized Departments", "NABL Accredited Laboratory"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700"><FiCheckCircle className="text-green-500 shrink-0" size={16} />{item}</li>
                ))}
              </ul>
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={() => setActivePage("about")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors">
                Learn More <FiArrowRight />
              </motion.button>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.04 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all">
                  <div className="text-3xl font-extrabold text-blue-600 mb-1"><AnimatedCounter target={s.value} suffix={s.suffix} /></div>
                  <div className="text-gray-500 text-sm">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>
        </div>
    </section>
  )
}

export default HomeAboutPrev
