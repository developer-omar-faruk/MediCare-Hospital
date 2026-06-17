import { services } from "../data";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";


function ServicesPage({ setActivePage }) {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Our Services</h1>
          <p className="text-blue-100 max-w-xl mx-auto">Comprehensive healthcare services available around the clock.</p>
        </motion.div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
                const Icon = s.icon;
                return (
                    <motion.div key={s.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className={`rounded-2xl border ${s.color} p-6 hover:shadow-lg transition-all`}>
                        <div className={`w-14 h-14 ${s.iconBg} rounded-2xl flex items-center justify-center text-xl mb-4 shadow`}> <Icon/> </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{s.name}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                        <button onClick={() => setActivePage("appointment")} className="text-blue-600 hover:text-blue-800 text-sm font-semibold flex items-center gap-1.5 transition-colors">
                        Book Service <FiArrowRight size={14} />
                        </button>
                    </motion.div>
                )
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage