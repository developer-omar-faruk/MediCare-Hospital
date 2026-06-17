import {hospitalInfo} from '../data'

import { useState, useEffect, useRef, createContext, useContext } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FiPhone, FiMail, FiMapPin, FiClock, FiAlertCircle, FiFacebook,
  FiTwitter, FiInstagram, FiYoutube, FiMessageCircle, FiCheckCircle
} from "react-icons/fi";


function ContactPage() {
  const [formSent, setFormSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const handleSubmit = e => { e.preventDefault(); setFormSent(true); };
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Contact Us</h1>
          <p className="text-blue-100 max-w-xl mx-auto">We're here to help. Reach out to us anytime.</p>
        </motion.div>
      </section>
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
          {/* Info */}
          <div className="space-y-5">
            {[
              { icon: <FiPhone size={22} />, title: "Phone", lines: [hospitalInfo.phone, "Fax: +880 1921 425563"], color: "bg-blue-50 text-blue-600" },
              { icon: <FiMail size={22} />, title: "Email", lines: [hospitalInfo.email, "billing@medicareprime.com"], color: "bg-green-50 text-green-600" },
              { icon: <FiMapPin size={22} />, title: "Address", lines: [hospitalInfo.address], color: "bg-purple-50 text-purple-600" },
              { icon: <FiClock size={22} />, title: "Hours", lines: ["Mon–Sat: 8 AM – 8 PM", "Emergency: 24/7"], color: "bg-amber-50 text-amber-600" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex gap-4">
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center shrink-0`}>{item.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  {item.lines.map((l, j) => <p key={j} className="text-gray-500 text-sm">{l}</p>)}
                </div>
              </motion.div>
            ))}
            {/* Emergency Box */}
            <div className="bg-red-600 rounded-2xl p-5 text-white">
              <div className="flex items-center gap-2 mb-1"><FiAlertCircle size={18} /><span className="font-bold">Emergency Hotline</span></div>
              <div className="text-2xl font-extrabold">{hospitalInfo.emergency}</div>
              <p className="text-red-100 text-xs mt-1">Available 24/7 — Do not hesitate</p>
            </div>
            {/* Social */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 className="font-bold text-gray-900 mb-3">Follow Us</h3>
              <div className="flex gap-3">
                {[FiFacebook, FiTwitter, FiInstagram, FiYoutube].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-xl flex items-center justify-center transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <AnimatePresence mode="wait">
                {formSent ? (
                  <motion.div key="success" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-10">
                    <FiCheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-500 mb-5">We'll get back to you within 24 hours.</p>
                    <button onClick={() => setFormSent(false)} className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors">Send Another</button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                        <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your Name"
                          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                        <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com"
                          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone</label>
                        <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+1 (000) 000-0000"
                          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject *</label>
                        <input required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="How can we help?"
                          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                      <textarea required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={5} placeholder="Write your message here..."
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none" />
                    </div>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors">
                      <FiMessageCircle size={18} /> Send Message
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
            {/* Map placeholder */}
            <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-56 bg-gradient-to-br from-blue-100 to-blue-200 flex flex-col items-center justify-center gap-2 text-blue-400">
                <FiMapPin size={40} />
                <span className="font-semibold">Medical Road, Chandpur District, NY 10001</span>
                <span className="text-sm text-blue-300">Google Maps Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage
