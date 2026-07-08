import {hospitalInfo, stats, doctors, departments, testimonials, faqs,} from "../data";
import { SectionWrapper, AnimatedCounter, fadeUp } from './UTILITIES';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiPhone, FiHeart, FiActivity, FiUsers, FiShield, FiAward,
  FiCalendar, FiArrowRight, FiChevronDown, FiStar, FiCheckCircle, FiAlertCircle,
  FiTrendingUp, FiZap,
} from "react-icons/fi";

import HomeHero from "../components/HomeHero";
import HomeQuickService from "../components/HomeQuickService";
import HomeAboutPrev from "../components/HomeAboutPrev";
import HomeFeaturedDoctors from "../components/HomeFeaturedDoctors";
import HomeDepartments from "../components/HomeDepartments";


const whyChooseUs = [
  { icon: <FiAlertCircle size={24} />, title: "24/7 Emergency", desc: "Round-the-clock emergency care with rapid response teams always ready.", color: "text-red-500 bg-red-50" },
  { icon: <FiAward size={24} />, title: "Expert Doctors", desc: "Over 350 board-certified specialists across all major medical disciplines.", color: "text-blue-500 bg-blue-50" },
  { icon: <FiTrendingUp size={24} />, title: "Modern Equipment", desc: "State-of-the-art medical technology for precise diagnosis and treatment.", color: "text-green-500 bg-green-50" },
  { icon: <FiShield size={24} />, title: "Affordable Care", desc: "Transparent pricing, insurance support, and flexible payment options.", color: "text-purple-500 bg-purple-50" },
  { icon: <FiZap size={24} />, title: "Fast Service", desc: "Minimal wait times with efficient patient flow and digital queuing.", color: "text-amber-500 bg-amber-50" },
  { icon: <FiCalendar size={24} />, title: "Online Appointments", desc: "Easy online booking, reminders, and teleconsultation from home.", color: "text-teal-500 bg-teal-50" },
];


function HomePage({ setActivePage }) {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const t = setInterval(() => setTestimonialIdx(i => (i + 1) % testimonials.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* HERO */}
      <HomeHero setActivePage={setActivePage} />

      {/* QUICK SERVICES */}
      <HomeQuickService setActivePage={setActivePage} />

      {/* ABOUT PREVIEW */}
      <HomeAboutPrev setActivePage={setActivePage} />

      {/* FEATURED DOCTORS */}
      <HomeFeaturedDoctors setActivePage={setActivePage} />

      {/* DEPARTMENTS */}
      <HomeDepartments setActivePage={setActivePage} />

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Why MediCare Prime</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">Why Choose Us?</h2>
              <p className="text-gray-500 max-w-xl mx-auto">We combine medical excellence with genuine human compassion.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.02 }}
                  className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 transition-all">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-gradient-to-br from-blue-700 to-blue-900 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-widest">Patient Stories</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">What Our Patients Say</h2>
          </div>
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div key={testimonialIdx} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 }} transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center mx-auto max-w-2xl">
                <img src={testimonials[testimonialIdx].avatar} alt="" className="w-16 h-16 rounded-full border-3 border-white mx-auto mb-4 shadow-lg" />
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonials[testimonialIdx].rating)].map((_, i) => <FiStar key={i} className="text-yellow-400 fill-yellow-400" size={18} />)}
                </div>
                <p className="text-white text-base leading-relaxed mb-5 italic">"{testimonials[testimonialIdx].text}"</p>
                <div className="text-white font-bold">{testimonials[testimonialIdx].name}</div>
                <div className="text-blue-200 text-sm">{testimonials[testimonialIdx].role}</div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTestimonialIdx(i)}
                  className={`transition-all rounded-full ${i === testimonialIdx ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/40"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">FAQs</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">Frequently Asked Questions</h2>
            </motion.div>
            <div className="space-y-3">
              {faqs.slice(0, 8).map((faq, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-blue-50 transition-colors">
                    <span className="font-semibold text-gray-800 pr-4">{faq.q}</span>
                    <motion.span animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <FiChevronDown className="text-blue-500 shrink-0" size={20} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.3 }}
                        className="overflow-hidden">
                        <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionWrapper>
            <motion.div variants={fadeUp} className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-10 sm:p-14 shadow-2xl">
              <FiCalendar size={48} className="text-blue-200 mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Book Your Appointment Today</h2>
              <p className="text-blue-100 text-base mb-8 max-w-md mx-auto">Don't delay your health. Our specialists are ready to help you on your path to wellness.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} onClick={() => setActivePage("appointment")}
                  className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3.5 rounded-2xl font-bold text-base shadow-xl flex items-center gap-2 transition-colors">
                  <FiCalendar size={18} /> Schedule Now
                </motion.button>
                <motion.a whileHover={{ scale: 1.05 }} href="tel:+18001234567"
                  className="bg-white/20 hover:bg-white/30 border border-white/30 text-white px-8 py-3.5 rounded-2xl font-bold text-base flex items-center gap-2 transition-all">
                  <FiPhone size={18} /> Call Us
                </motion.a>
              </div>
            </motion.div>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}

export default HomePage
