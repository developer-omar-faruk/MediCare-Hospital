import { testimonials } from "../data";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiStar } from "react-icons/fi";


function HomeTestimonial() {

    const [testimonialIdx, setTestimonialIdx] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setTestimonialIdx(i => (i + 1) % testimonials.length), 4500);
        return () => clearInterval(t);
    }, []);

  return (
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
  )
}

export default HomeTestimonial
