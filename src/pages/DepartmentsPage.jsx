import { departments, doctors } from "../data";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";


function DepartmentsPage({ setActivePage }) {
  const [selectedDept, setSelectedDept] = useState(null);
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Our Departments</h1>
          <p className="text-blue-100 max-w-xl mx-auto">Specialized medical departments delivering expert care across all disciplines.</p>
        </motion.div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, i) => (
            <motion.div key={dept.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }} onClick={() => setSelectedDept(selectedDept?.id === dept.id ? null : dept)}
              className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all">
              <div className={`h-2 bg-gradient-to-r ${dept.color}`} />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{dept.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900">{dept.name}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{dept.desc}</p>
                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Services</p>
                  <ul className="space-y-1">
                    {dept.services.map((s, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-gray-600">
                        <FiCheckCircle size={12} className="text-green-500 shrink-0" />{s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Specialists</p>
                  <div className="flex flex-wrap gap-2">
                    {doctors.filter(d => d.dept === dept.name).slice(0, 2).map(doc => (
                      <span key={doc.id} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{doc.name}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default DepartmentsPage
