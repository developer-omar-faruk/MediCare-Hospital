// ...............COMPONENTS..............
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// ...............PAGES..............
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DoctorsPage from "./pages/DoctorsPage";
import DoctorDetailPage from "./pages/DoctorDetailPage";
import DepartmentsPage from "./pages/DepartmentsPage";

import { useState, useEffect, useRef, createContext, useContext } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";


export default function App() {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState("home");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleSetPage = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (activePage) {
      case "home": return <HomePage setActivePage={handleSetPage} />;
      case "about": return <AboutPage setActivePage={handleSetPage} />;
      case "doctors": return <DoctorsPage setActivePage={handleSetPage} setSelectedDoctor={setSelectedDoctor} />;
      case "doctor-detail": return <DoctorDetailPage doctor={selectedDoctor} setActivePage={handleSetPage} />;
      case "departments": return <DepartmentsPage setActivePage={handleSetPage} />;
      case "services": return <ServicesPage setActivePage={handleSetPage} />;
      case "appointment": return <AppointmentPage />;
      case "contact": return <ContactPage />;
      default: return <HomePage setActivePage={handleSetPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <AnimatePresence>{loading && <LoadingScreen onDone={() => setLoading(false)} />}</AnimatePresence>
      {!loading && (
        <>
          <Navbar activePage={activePage} setActivePage={handleSetPage} />
          <AnimatePresence mode="wait">
            <motion.main key={activePage} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.35 }}>
              {renderPage()}
            </motion.main>
          </AnimatePresence>
          <Footer setActivePage={handleSetPage} />
          <ScrollToTop />
        </>
      )}
    </div>
  );
}