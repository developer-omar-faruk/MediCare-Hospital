import { testimonials } from "../data";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiClock, FiAward, FiArrowRight, FiStar, FiCheckCircle,
} from "react-icons/fi";


function DoctorDetailPage({ doctor, setActivePage }) {
  const [formSent, setFormSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", time: "", message: "" });
  if (!doctor) { setActivePage("doctors"); return null; }
  const times = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"];
  const handleSubmit = e => { e.preventDefault(); setFormSent(true); };
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => setActivePage("doctors")} className="text-blue-200 hover:text-white flex items-center gap-1.5 text-sm mb-6 transition-colors">
            <FiArrowRight className="rotate-180" /> Back to Doctors
          </button>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col sm:flex-row gap-8 items-start">
            <img src={doctor.image} alt={doctor.name} className="w-32 h-32 rounded-2xl border-4 border-white shadow-2xl" />
            <div className="text-white">
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-1">{doctor.name}</h1>
              <p className="text-blue-200 text-lg font-medium">{doctor.specialty}</p>
              <p className="text-blue-100 text-sm mb-4">{doctor.qualification}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-1.5 bg-white/15 px-3 py-1.5 rounded-full"><FiAward size={14} />{doctor.experience} Years Experience</span>
                <span className="flex items-center gap-1.5 bg-white/15 px-3 py-1.5 rounded-full"><FiStar size={14} />{doctor.rating} ({doctor.reviews} reviews)</span>
                <span className="flex items-center gap-1.5 bg-white/15 px-3 py-1.5 rounded-full"><FiClock size={14} />{doctor.availability}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Biography</h2>
              <p className="text-gray-600 leading-relaxed text-sm">Dr. {doctor.name.split(" ").slice(-1)[0]} is a highly experienced {doctor.specialty} specialist with {doctor.experience} years of practice. They completed their {doctor.qualification} and have since been dedicated to providing exceptional patient care. Known for combining cutting-edge medical knowledge with a compassionate bedside manner, they are one of our most sought-after specialists.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Patient Reviews</h2>
              <div className="space-y-4">
                {testimonials.slice(0, 3).map((t, i) => (
                  <div key={i} className="flex gap-3 pb-4 border-b border-gray-100 last:border-0">
                    <img src={t.avatar} alt="" className="w-10 h-10 rounded-full shrink-0" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm text-gray-900">{t.name}</span>
                        <div className="flex gap-0.5">{[...Array(t.rating)].map((_, i) => <FiStar key={i} size={11} className="text-amber-400" />)}</div>
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed">{t.text.slice(0, 120)}...</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
              <h3 className="font-bold text-gray-900 mb-4">Working Hours</h3>
              {[["Mon", "9 AM – 5 PM"], ["Tue", "9 AM – 5 PM"], ["Wed", "9 AM – 3 PM"], ["Thu", "9 AM – 5 PM"], ["Fri", "9 AM – 4 PM"], ["Sat", "Closed"], ["Sun", "Closed"]].map(([d, h]) => (
                <div key={d} className="flex justify-between items-center py-1.5 text-sm border-b border-gray-50 last:border-0">
                  <span className="text-gray-500">{d}</span>
                  <span className={`font-medium ${h === "Closed" ? "text-red-400" : "text-green-600"}`}>{h}</span>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Book Appointment</h3>
              {formSent ? (
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-4">
                  <FiCheckCircle size={40} className="text-green-500 mx-auto mb-3" />
                  <p className="font-bold text-gray-900 mb-1">Appointment Booked!</p>
                  <p className="text-gray-500 text-xs">We will confirm your appointment shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {[["name", "Your Name", "text"], ["phone", "Phone Number", "tel"], ["email", "Email Address", "email"]].map(([field, ph, type]) => (
                    <input key={field} type={type} placeholder={ph} required value={form[field]} onChange={e => setForm({ ...form, [field]: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                  ))}
                  <input type="date" required value={form.date} onChange={e => setForm({ ...form, date: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                  <select value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                    <option value="">Select Time</option>
                    {times.map(t => <option key={t}>{t}</option>)}
                  </select>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl font-semibold text-sm transition-colors">
                    Confirm Appointment
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DoctorDetailPage
