import {hospitalInfo, navLinks, departments} from '../data'

import { useState, useEffect, useRef, createContext, useContext } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FiPhone, FiMail, FiMapPin, FiClock, FiHeart, FiActivity,
  FiUser, FiUsers, FiShield, FiAward, FiCalendar, FiArrowRight,
  FiMenu, FiX, FiSearch, FiChevronDown, FiStar, FiCheckCircle,
  FiAlertCircle, FiTrendingUp, FiEye, FiBriefcase, FiGlobe,
  FiInstagram, FiTwitter, FiFacebook, FiYoutube, FiChevronUp,
  FiMessageCircle, FiHome, FiLayers, FiZap
} from "react-icons/fi";


function Footer({ setActivePage }) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
                <FiHeart className="text-white" size={18} />
              </div>
              <div>
                <div className="text-white font-bold text-base">{hospitalInfo.name}</div>
                <div className="text-xs text-gray-400">Hospital & Healthcare</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">Providing world-class healthcare with compassion and excellence since {hospitalInfo.founded}.</p>
            <div className="flex gap-3">
              {[FiFacebook, FiTwitter, FiInstagram, FiYoutube].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(l => (
                <li key={l.path}><button onClick={() => setActivePage(l.path)} className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"><FiArrowRight size={12} />{l.label}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Departments</h4>
            <ul className="space-y-2">
              {departments.slice(0, 7).map(d => (
                <li key={d.id}><button onClick={() => setActivePage("departments")} className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"><FiArrowRight size={12} />{d.name}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-gray-400"><FiMapPin size={15} className="mt-0.5 text-blue-400 shrink-0" />{hospitalInfo.address}</li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400"><FiPhone size={15} className="text-blue-400" />{hospitalInfo.phone}</li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400"><FiMail size={15} className="text-blue-400" />{hospitalInfo.email}</li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400"><FiClock size={15} className="text-blue-400" />{hospitalInfo.hours}</li>
            </ul>
            <div className="mt-4 bg-red-900/40 border border-red-700/40 rounded-xl p-3">
              <p className="text-red-400 text-xs font-semibold flex items-center gap-1.5 mb-1"><FiAlertCircle size={13} />Emergency Hotline</p>
              <p className="text-white font-bold text-lg">{hospitalInfo.emergency}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {hospitalInfo.name}. All rights reserved. | Designed with ❤️ for better healthcare.
      </div>
    </footer>
  );
}

export default Footer
