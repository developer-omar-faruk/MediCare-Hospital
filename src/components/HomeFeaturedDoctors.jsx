import { doctors } from "../data";
import { SectionWrapper, fadeUp } from "../pages/UTILITIES";

import { motion } from "framer-motion";
import { FiAward, FiArrowRight, FiStar } from "react-icons/fi";


function HomeFeaturedDoctors({setActivePage}) {
  return (
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Our Specialists</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">Meet Our Expert Doctors</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Experienced, compassionate specialists dedicated to providing you with the best possible care.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {doctors.slice(0, 4).map((doc, i) => (
                <motion.div key={doc.id} variants={fadeUp} whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all group">
                  <div className="h-44 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative overflow-hidden">
                    <img src={doc.image} alt={doc.name} className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover" />
                    <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">Available</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-base">{doc.name}</h3>
                    <p className="text-blue-600 text-sm font-medium">{doc.specialty}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{doc.qualification}</p>
                    <div className="flex items-center justify-between mt-3 mb-3">
                      <span className="text-xs text-gray-500 flex items-center gap-1"><FiAward size={12} />{doc.experience} yrs exp</span>
                      <span className="text-xs text-amber-500 flex items-center gap-1"><FiStar size={12} />{doc.rating} ({doc.reviews})</span>
                    </div>
                    <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => setActivePage("appointment")}
                      className="w-full bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-600 border border-blue-100 py-2 rounded-xl text-sm font-semibold transition-all">
                      Book Appointment
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="text-center mt-8">
              <button onClick={() => setActivePage("doctors")} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 mx-auto transition-colors">
                View All Doctors <FiArrowRight />
              </button>
            </motion.div>
          </SectionWrapper>
        </div>
    </section>
  )
}

export default HomeFeaturedDoctors
