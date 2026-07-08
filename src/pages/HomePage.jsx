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
import HomeFaq from "../components/HomeFaq";


function HomePage({ setActivePage }) {

  

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
      <HomeFaq/>

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
