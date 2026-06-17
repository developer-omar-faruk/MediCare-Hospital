import { departments, doctors } from "../data";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiCalendar } from "react-icons/fi";


function AppointmentPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", doctor: "", dept: "", date: "", time: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const times = ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"];
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Book an Appointment</h1>
          <p className="text-blue-100 max-w-xl mx-auto">Schedule your visit with one of our expert specialists.</p>
        </motion.div>
      </section>
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div key="success" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }}
                className="text-center bg-white rounded-3xl shadow-xl p-14 border border-gray-100">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <FiCheckCircle size={40} className="text-green-500" />
                  </div>
                </motion.div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Appointment Booked!</h2>
                <p className="text-gray-500 mb-2">Thank you, <strong>{form.name}</strong>. Your appointment request has been received.</p>
                <p className="text-gray-400 text-sm mb-6">Our team will contact you at <strong>{form.phone}</strong> to confirm your appointment within 2 hours.</p>
                <motion.button whileHover={{ scale: 1.04 }} onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", doctor: "", dept: "", date: "", time: "", message: "" }); }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                  Book Another Appointment
                </motion.button>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Appointment Details</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Patient Name *</label>
                      <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Full Name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                      <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+1 (000) 000-0000"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Department *</label>
                      <select required value={form.dept} onChange={e => setForm({ ...form, dept: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                        <option value="">Select Department</option>
                        {departments.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Select Doctor</label>
                      <select value={form.doctor} onChange={e => setForm({ ...form, doctor: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                        <option value="">Any Available Doctor</option>
                        {doctors.filter(d => !form.dept || d.dept === form.dept).map(d => <option key={d.id} value={d.name}>{d.name} – {d.specialty}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Date *</label>
                      <input required type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Time *</label>
                      <select required value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                        <option value="">Select Time Slot</option>
                        {times.map(t => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message / Symptoms</label>
                    <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4} placeholder="Briefly describe your symptoms or reason for visit..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none" />
                  </div>
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-colors shadow-lg">
                    <FiCalendar size={18} /> Book Appointment
                  </motion.button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

export default AppointmentPage