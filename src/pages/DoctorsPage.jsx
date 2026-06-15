import {doctors} from '../data'

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiAward, FiStar, FiClock, FiSearch, FiUser
} from "react-icons/fi";


function DoctorsPage({ setActivePage, setSelectedDoctor }) {
  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("All");

  const deptOptions = ["All", ...Array.from(new Set(doctors.map(d => d.dept)))];
  const filtered = doctors.filter(d => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) || d.specialty.toLowerCase().includes(search.toLowerCase());
    const matchDept = filterDept === "All" || d.dept === filterDept;
    return matchSearch && matchDept;
  });

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Our Expert Doctors</h1>
          <p className="text-blue-100 max-w-xl mx-auto">350+ board-certified specialists dedicated to your health.</p>
        </motion.div>
      </section>
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[89px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search doctors by name or specialty..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
          </div>
          <select value={filterDept} onChange={e => setFilterDept(e.target.value)} className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
            {deptOptions.map(d => <option key={d}>{d}</option>)}
          </select>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <FiUser size={48} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No doctors found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((doc, i) => (
                <motion.div key={doc.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
                  whileHover={{ y: -6 }} className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all">
                  <div className="h-44 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative">
                    <img src={doc.image} alt={doc.name} className="w-28 h-28 rounded-full border-4 border-white shadow-lg" />
                    <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">Available</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900">{doc.name}</h3>
                    <p className="text-blue-600 text-sm font-medium">{doc.specialty}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{doc.qualification}</p>
                    <div className="flex items-center justify-between mt-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1"><FiAward size={11} />{doc.experience} yrs</span>
                      <span className="flex items-center gap-1"><FiStar size={11} className="text-amber-400" />{doc.rating}</span>
                      <span className="flex items-center gap-1"><FiClock size={11} />{doc.availability.split(",")[0]}...</span>
                    </div>
                    <button onClick={() => { setSelectedDoctor(doc); setActivePage("doctor-detail"); }}
                      className="w-full bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-600 border border-blue-100 py-2 rounded-xl text-sm font-semibold transition-all">
                      View Profile
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default DoctorsPage
