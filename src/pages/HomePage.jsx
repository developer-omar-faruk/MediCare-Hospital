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
import HomeWhyUs from "../components/HomeWhyUs";
import HomeTestimonial from "../components/HomeTestimonial";


function HomePage({ setActivePage }) {

  const [openFaq, setOpenFaq] = useState(null);

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
      <HomeWhyUs/>

      {/* TESTIMONIALS */}
      <HomeTestimonial/>

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
