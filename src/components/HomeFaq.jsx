import { faqs } from "../data";
import { SectionWrapper, fadeUp } from "../pages/UTILITIES";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";


function HomeFaq() {
    const [openFaq, setOpenFaq] = useState(null);
  return (
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
                    className="w-full cursor-pointer flex items-center justify-between p-5 text-left hover:bg-blue-50 transition-colors">
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
  )
}

export default HomeFaq
