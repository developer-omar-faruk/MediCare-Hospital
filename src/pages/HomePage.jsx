import {hospitalInfo, stats, doctors, departments, testimonials, faqs,} from "../data";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FiPhone, FiHeart, FiActivity, FiUsers, FiShield, FiAward,
  FiCalendar, FiArrowRight, FiChevronDown, FiStar, FiCheckCircle, FiAlertCircle,
  FiTrendingUp, FiZap,
} from "react-icons/fi";

const quickServices = [
  { name: "Emergency Care", icon: <FiAlertCircle size={28} />, color: "from-red-500 to-red-600", desc: "24/7 trauma & emergency" },
  { name: "Cardiology", icon: <FiHeart size={28} />, color: "from-pink-500 to-pink-600", desc: "Heart & vascular care" },
  { name: "Neurology", icon: <FiActivity size={28} />, color: "from-purple-500 to-purple-600", desc: "Brain & nerve treatment" },
  { name: "Pediatrics", icon: <FiUsers size={28} />, color: "from-green-500 to-green-600", desc: "Child health specialists" },
  { name: "Orthopedics", icon: <FiShield size={28} />, color: "from-blue-500 to-blue-600", desc: "Bone & joint surgery" },
  { name: "Laboratory", icon: <FiTrendingUp size={28} />, color: "from-teal-500 to-teal-600", desc: "Advanced diagnostics" },
];

const whyChooseUs = [
  { icon: <FiAlertCircle size={24} />, title: "24/7 Emergency", desc: "Round-the-clock emergency care with rapid response teams always ready.", color: "text-red-500 bg-red-50" },
  { icon: <FiAward size={24} />, title: "Expert Doctors", desc: "Over 350 board-certified specialists across all major medical disciplines.", color: "text-blue-500 bg-blue-50" },
  { icon: <FiTrendingUp size={24} />, title: "Modern Equipment", desc: "State-of-the-art medical technology for precise diagnosis and treatment.", color: "text-green-500 bg-green-50" },
  { icon: <FiShield size={24} />, title: "Affordable Care", desc: "Transparent pricing, insurance support, and flexible payment options.", color: "text-purple-500 bg-purple-50" },
  { icon: <FiZap size={24} />, title: "Fast Service", desc: "Minimal wait times with efficient patient flow and digital queuing.", color: "text-amber-500 bg-amber-50" },
  { icon: <FiCalendar size={24} />, title: "Online Appointments", desc: "Easy online booking, reminders, and teleconsultation from home.", color: "text-teal-500 bg-teal-50" },
];

// ─── UTILITIES ───────────────────────────────────────────────────────────────
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

function SectionWrapper({ children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}


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
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div key={i} animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4 + (i % 4), repeat: Infinity, delay: i * 0.3 }}
              className="absolute rounded-full bg-white/10"
              style={{ width: 20 + (i * 7) % 60, height: 20 + (i * 7) % 60, left: `${(i * 17) % 95}%`, top: `${(i * 13) % 85}%` }} />
          ))}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white text-sm font-medium">Now accepting new patients</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Advanced Healthcare for a <span className="text-blue-300">Healthier Tomorrow</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="text-blue-100 text-lg mb-8 max-w-xl leading-relaxed">
              World-class medical care with cutting-edge technology, compassionate staff, and a commitment to your wellbeing — all under one roof.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="flex flex-wrap gap-4">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} onClick={() => setActivePage("appointment")}
                className="bg-white text-blue-700 hover:bg-blue-50 px-7 py-3.5 rounded-2xl font-bold text-base shadow-xl flex items-center gap-2 transition-colors">
                <FiCalendar size={18} /> Book Appointment
              </motion.button>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href="tel:+8801624471890"
                className="bg-red-500 hover:bg-red-600 text-white px-7 py-3.5 rounded-2xl font-bold text-base shadow-xl flex items-center gap-2 transition-colors">
                <FiPhone size={18} /> Emergency: {hospitalInfo.emergency}
              </motion.a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-6 mt-10">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-extrabold text-white"><AnimatedCounter target={s.value} suffix={s.suffix} /></div>
                  <div className="text-blue-200 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-4 items-end">
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {[
                { icon: <FiShield size={28} />, label: "Accredited", val: "JCI Certified", color: "bg-blue-500" },
                { icon: <FiAward size={28} />, label: "Award Winner", val: "Best Hospital 2023", color: "bg-green-500" },
                { icon: <FiUsers size={28} />, label: "Staff", val: "1,200+ Employees", color: "bg-purple-500" },
                { icon: <FiActivity size={28} />, label: "Beds", val: "500+ Beds", color: "bg-amber-500" },
              ].map((c, i) => (
                <motion.div key={i} whileHover={{ scale: 1.05, y: -4 }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
                  className="bg-white/15 backdrop-blur border border-white/20 rounded-2xl p-4 text-center">
                  <div className={`${c.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mx-auto mb-2 shadow`}>{c.icon}</div>
                  <div className="text-white font-bold text-xs">{c.val}</div>
                  <div className="text-blue-200 text-[10px]">{c.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* QUICK SERVICES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Our Core Services</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Comprehensive healthcare services designed to meet all your medical needs under one roof.</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickServices.map((s, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -8, scale: 1.03 }} onClick={() => setActivePage("services")}
                  className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-5 flex flex-col items-center gap-3 transition-all group">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow group-hover:shadow-lg transition-all`}>{s.icon}</div>
                  <div className="text-center">
                    <div className="font-bold text-sm text-gray-800">{s.name}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{s.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">About MediCare Prime</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-5">A Legacy of Healing & Excellence</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Founded in {hospitalInfo.founded}, MediCare Prime Hospital has been at the forefront of medical innovation and compassionate patient care for over 29 years. Our world-class facility combines the latest medical technology with a deeply human approach to healing.</p>
              <p className="text-gray-600 leading-relaxed mb-6">We are JCI-accredited with 350+ specialist doctors, 28 departments, and 500+ beds, serving patients from across the nation and internationally.</p>
              <ul className="space-y-2 mb-7">
                {["JCI Accredited & ISO Certified", "350+ Board-Certified Specialists", "28 Specialized Departments", "NABL Accredited Laboratory"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700"><FiCheckCircle className="text-green-500 shrink-0" size={16} />{item}</li>
                ))}
              </ul>
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={() => setActivePage("about")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors">
                Learn More <FiArrowRight />
              </motion.button>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.04 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all">
                  <div className="text-3xl font-extrabold text-blue-600 mb-1"><AnimatedCounter target={s.value} suffix={s.suffix} /></div>
                  <div className="text-gray-500 text-sm">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* FEATURED DOCTORS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Our Specialists</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">Meet Our Expert Doctors</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Experienced, compassionate specialists dedicated to providing you with the best possible care.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {doctors.slice(0, 4).map((doc, i) => (
                <motion.div key={doc.id} variants={fadeUp} whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all group">
                  <div className="h-44 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative overflow-hidden">
                    <img src={doc.image} alt={doc.name} className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover" />
                    <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">Available</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-base">{doc.name}</h3>
                    <p className="text-blue-600 text-sm font-medium">{doc.specialty}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{doc.qualification}</p>
                    <div className="flex items-center justify-between mt-3 mb-3">
                      <span className="text-xs text-gray-500 flex items-center gap-1"><FiAward size={12} />{doc.experience} yrs exp</span>
                      <span className="text-xs text-amber-500 flex items-center gap-1"><FiStar size={12} />{doc.rating} ({doc.reviews})</span>
                    </div>
                    <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => setActivePage("appointment")}
                      className="w-full bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-600 border border-blue-100 py-2 rounded-xl text-sm font-semibold transition-all">
                      Book Appointment
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="text-center mt-8">
              <button onClick={() => setActivePage("doctors")} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 mx-auto transition-colors">
                View All Doctors <FiArrowRight />
              </button>
            </motion.div>
          </SectionWrapper>
        </div>
      </section>

      {/* DEPARTMENTS */}
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
