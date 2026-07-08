import { departments } from "../data";
import { SectionWrapper, fadeUp } from "../pages/UTILITIES";

import { motion } from "framer-motion";


function HomeDepartments({setActivePage}) {
  return (
    <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Medical Specialties</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">Our Departments</h2>
              <p className="text-gray-500 max-w-xl mx-auto">10 specialized departments offering comprehensive medical care.</p>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {departments.map((d, i) => (
                <motion.div key={d.id} variants={fadeUp} whileHover={{ y: -5, scale: 1.03 }} onClick={() => setActivePage("departments")}
                  className="cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 p-5 text-center transition-all group">
                  <div className="text-3xl mb-2">{d.icon}</div>
                  <div className="font-bold text-sm text-gray-800 group-hover:text-blue-600 transition-colors">{d.name}</div>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>
        </div>
    </section>
  )
}

export default HomeDepartments
