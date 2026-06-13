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

// ─── DATA ────────────────────────────────────────────────────────────────────
const hospitalInfo = {
  name: "MediCare Prime Hospital",
  tagline: "Advanced Healthcare for a Healthier Tomorrow",
  phone: "+1 (800) 123-4567",
  emergency: "+1 (800) 911-0000",
  email: "info@medicareprime.com",
  address: "1247 Healthcare Blvd, Medical District, NY 10001",
  hours: "Mon–Sat: 8:00 AM – 8:00 PM | Emergency: 24/7",
  founded: 1995,
};

const stats = [
  { label: "Patients Served", value: 120000, suffix: "+" },
  { label: "Expert Doctors", value: 350, suffix: "+" },
  { label: "Departments", value: 28, suffix: "" },
  { label: "Years of Excellence", value: 29, suffix: "+" },
];

const navLinks = [
  { label: "Home", path: "home" },
  { label: "About", path: "about" },
  { label: "Doctors", path: "doctors" },
  { label: "Departments", path: "departments" },
  { label: "Services", path: "services" },
  { label: "Appointment", path: "appointment" },
  { label: "Contact", path: "contact" },
];

const doctors = [
  { id: 1, name: "Dr. Sarah Mitchell", specialty: "Cardiology", dept: "Cardiology", qualification: "MD, FACC", experience: 18, availability: "Mon, Wed, Fri", rating: 4.9, reviews: 312, image: "https://api.dicebear.com/7.x/personas/svg?seed=Sarah&backgroundColor=b6e3f4" },
  { id: 2, name: "Dr. James Thornton", specialty: "Neurology", dept: "Neurology", qualification: "MD, PhD", experience: 22, availability: "Tue, Thu, Sat", rating: 4.8, reviews: 289, image: "https://api.dicebear.com/7.x/personas/svg?seed=James&backgroundColor=c0aede" },
  { id: 3, name: "Dr. Priya Sharma", specialty: "Pediatrics", dept: "Pediatrics", qualification: "MBBS, DCH", experience: 14, availability: "Mon–Fri", rating: 4.9, reviews: 421, image: "https://api.dicebear.com/7.x/personas/svg?seed=Priya&backgroundColor=d1d4f9" },
  { id: 4, name: "Dr. Robert Chen", specialty: "Orthopedics", dept: "Orthopedics", qualification: "MD, MS Ortho", experience: 20, availability: "Mon, Tue, Thu", rating: 4.7, reviews: 198, image: "https://api.dicebear.com/7.x/personas/svg?seed=Robert&backgroundColor=ffd5dc" },
  { id: 5, name: "Dr. Emily Watson", specialty: "Dermatology", dept: "Dermatology", qualification: "MD, FRCP", experience: 12, availability: "Wed, Fri, Sat", rating: 4.8, reviews: 267, image: "https://api.dicebear.com/7.x/personas/svg?seed=Emily&backgroundColor=b6e3f4" },
  { id: 6, name: "Dr. Michael Adeyemi", specialty: "Oncology", dept: "Oncology", qualification: "MD, DM Oncology", experience: 25, availability: "Mon, Wed, Fri", rating: 4.9, reviews: 345, image: "https://api.dicebear.com/7.x/personas/svg?seed=Michael&backgroundColor=c0aede" },
  { id: 7, name: "Dr. Aisha Patel", specialty: "Gynecology", dept: "Gynecology", qualification: "MBBS, MS OBG", experience: 16, availability: "Tue, Thu, Sat", rating: 4.8, reviews: 389, image: "https://api.dicebear.com/7.x/personas/svg?seed=Aisha&backgroundColor=d1d4f9" },
  { id: 8, name: "Dr. Lucas Rodriguez", specialty: "General Medicine", dept: "General Medicine", qualification: "MD, MRCP", experience: 10, availability: "Mon–Sat", rating: 4.6, reviews: 156, image: "https://api.dicebear.com/7.x/personas/svg?seed=Lucas&backgroundColor=ffd5dc" },
  { id: 9, name: "Dr. Nina Johansson", specialty: "Ophthalmology", dept: "Ophthalmology", qualification: "MS Ophthalmology", experience: 13, availability: "Mon, Wed, Sat", rating: 4.7, reviews: 203, image: "https://api.dicebear.com/7.x/personas/svg?seed=Nina&backgroundColor=b6e3f4" },
  { id: 10, name: "Dr. David Kim", specialty: "Dentistry", dept: "Dentistry", qualification: "BDS, MDS", experience: 11, availability: "Tue, Thu, Fri", rating: 4.8, reviews: 274, image: "https://api.dicebear.com/7.x/personas/svg?seed=David&backgroundColor=c0aede" },
  { id: 11, name: "Dr. Fatima Al-Hassan", specialty: "Neurology", dept: "Neurology", qualification: "MD, DM Neurology", experience: 19, availability: "Mon, Tue, Fri", rating: 4.9, reviews: 301, image: "https://api.dicebear.com/7.x/personas/svg?seed=Fatima&backgroundColor=d1d4f9" },
  { id: 12, name: "Dr. Thomas Blake", specialty: "Cardiology", dept: "Cardiology", qualification: "MD, DNB Cardio", experience: 21, availability: "Wed, Thu, Sat", rating: 4.7, reviews: 187, image: "https://api.dicebear.com/7.x/personas/svg?seed=Thomas&backgroundColor=ffd5dc" },
  { id: 13, name: "Dr. Mei Lin Zhang", specialty: "Pediatrics", dept: "Pediatrics", qualification: "MD, FCPS", experience: 9, availability: "Mon–Fri", rating: 4.8, reviews: 356, image: "https://api.dicebear.com/7.x/personas/svg?seed=MeiLin&backgroundColor=b6e3f4" },
  { id: 14, name: "Dr. Carlos Mendez", specialty: "Orthopedics", dept: "Orthopedics", qualification: "MS Ortho, DNB", experience: 17, availability: "Tue, Wed, Sat", rating: 4.6, reviews: 142, image: "https://api.dicebear.com/7.x/personas/svg?seed=Carlos&backgroundColor=c0aede" },
  { id: 15, name: "Dr. Ingrid Larsson", specialty: "Dermatology", dept: "Dermatology", qualification: "MD, DVL", experience: 15, availability: "Mon, Thu, Fri", rating: 4.9, reviews: 298, image: "https://api.dicebear.com/7.x/personas/svg?seed=Ingrid&backgroundColor=d1d4f9" },
  { id: 16, name: "Dr. Samuel Okafor", specialty: "Oncology", dept: "Oncology", qualification: "MBBS, MD Oncology", experience: 23, availability: "Mon, Wed, Fri", rating: 4.8, reviews: 267, image: "https://api.dicebear.com/7.x/personas/svg?seed=Samuel&backgroundColor=ffd5dc" },
  { id: 17, name: "Dr. Leila Hosseini", specialty: "Gynecology", dept: "Gynecology", qualification: "MD, MRCOG", experience: 18, availability: "Tue, Thu, Sat", rating: 4.7, reviews: 312, image: "https://api.dicebear.com/7.x/personas/svg?seed=Leila&backgroundColor=b6e3f4" },
  { id: 18, name: "Dr. Andrew Fisher", specialty: "General Medicine", dept: "General Medicine", qualification: "MD, FRCS", experience: 14, availability: "Mon–Sat", rating: 4.6, reviews: 178, image: "https://api.dicebear.com/7.x/personas/svg?seed=Andrew&backgroundColor=c0aede" },
  { id: 19, name: "Dr. Yuki Tanaka", specialty: "Ophthalmology", dept: "Ophthalmology", qualification: "DNB Ophthalmology", experience: 10, availability: "Mon, Wed, Fri", rating: 4.8, reviews: 221, image: "https://api.dicebear.com/7.x/personas/svg?seed=Yuki&backgroundColor=d1d4f9" },
  { id: 20, name: "Dr. Omar Diallo", specialty: "Dentistry", dept: "Dentistry", qualification: "BDS, MDS Prosth.", experience: 8, availability: "Tue, Thu, Sat", rating: 4.7, reviews: 189, image: "https://api.dicebear.com/7.x/personas/svg?seed=Omar&backgroundColor=ffd5dc" },
];

const departments = [
  { id: 1, name: "Cardiology", icon: "❤️", desc: "Comprehensive cardiac care including diagnostics, interventional procedures, and rehabilitation for all heart conditions.", services: ["ECG & Echocardiography", "Angioplasty", "Heart Surgery", "Cardiac Rehabilitation", "Pacemaker Implantation"], color: "from-red-400 to-red-600" },
  { id: 2, name: "Neurology", icon: "🧠", desc: "Expert diagnosis and treatment of neurological disorders affecting the brain, spinal cord, and nervous system.", services: ["MRI & CT Scans", "EEG Testing", "Stroke Management", "Epilepsy Treatment", "Parkinson's Care"], color: "from-purple-400 to-purple-600" },
  { id: 3, name: "Orthopedics", icon: "🦴", desc: "Advanced musculoskeletal care including joint replacement, sports medicine, and spine surgery.", services: ["Joint Replacement", "Spine Surgery", "Sports Medicine", "Fracture Care", "Arthroscopy"], color: "from-blue-400 to-blue-600" },
  { id: 4, name: "Pediatrics", icon: "👶", desc: "Dedicated healthcare for infants, children, and adolescents with specialized pediatric specialists.", services: ["Well-Child Visits", "Vaccination", "Neonatal Care", "Growth Monitoring", "Pediatric Surgery"], color: "from-green-400 to-green-600" },
  { id: 5, name: "Dermatology", icon: "🩺", desc: "Expert skin, hair, and nail treatments using the latest dermatological technologies.", services: ["Skin Cancer Screening", "Laser Therapy", "Acne Treatment", "Hair Transplant", "Cosmetic Procedures"], color: "from-pink-400 to-pink-600" },
  { id: 6, name: "Gynecology", icon: "🌸", desc: "Complete women's health services from routine checkups to complex gynecological procedures.", services: ["Prenatal Care", "Laparoscopy", "Fertility Treatment", "Menopause Management", "Cervical Screening"], color: "from-rose-400 to-rose-600" },
  { id: 7, name: "Oncology", icon: "🔬", desc: "Comprehensive cancer care with multidisciplinary team approach, chemotherapy, and radiation therapy.", services: ["Chemotherapy", "Radiation Therapy", "Immunotherapy", "Cancer Screening", "Palliative Care"], color: "from-amber-400 to-amber-600" },
  { id: 8, name: "Dentistry", icon: "🦷", desc: "Complete dental care from preventive dentistry to complex oral surgeries and cosmetic procedures.", services: ["Dental Implants", "Root Canal", "Teeth Whitening", "Orthodontics", "Oral Surgery"], color: "from-teal-400 to-teal-600" },
  { id: 9, name: "Ophthalmology", icon: "👁️", desc: "Advanced eye care including cataract surgery, LASIK, glaucoma treatment, and retina care.", services: ["LASIK Surgery", "Cataract Surgery", "Glaucoma Treatment", "Retina Care", "Eye Exams"], color: "from-cyan-400 to-cyan-600" },
  { id: 10, name: "General Medicine", icon: "💊", desc: "Primary healthcare for adults covering diagnosis, treatment, and prevention of common medical conditions.", services: ["General Consultation", "Diabetes Care", "Hypertension Management", "Health Screenings", "Preventive Care"], color: "from-indigo-400 to-indigo-600" },
];

const services = [
  { id: 1, name: "Emergency Care", icon: <FiAlertCircle />, desc: "Round-the-clock emergency medical services with a dedicated trauma team and fully equipped ER.", color: "bg-red-50 border-red-100", iconBg: "bg-red-100 text-red-600" },
  { id: 2, name: "ICU & Critical Care", icon: <FiActivity />, desc: "State-of-the-art intensive care units with continuous monitoring and expert critical care physicians.", color: "bg-blue-50 border-blue-100", iconBg: "bg-blue-100 text-blue-600" },
  { id: 3, name: "Advanced Surgery", icon: <FiZap />, desc: "Minimally invasive and robotic surgeries performed by highly skilled surgeons across all specialties.", color: "bg-purple-50 border-purple-100", iconBg: "bg-purple-100 text-purple-600" },
  { id: 4, name: "Laboratory Services", icon: <FiTrendingUp />, desc: "Comprehensive pathology lab with NABL accreditation offering 2000+ diagnostic tests.", color: "bg-green-50 border-green-100", iconBg: "bg-green-100 text-green-600" },
  { id: 5, name: "Ambulance Service", icon: <FiPhone />, desc: "24/7 ambulance services with advanced life support equipment and trained paramedics.", color: "bg-amber-50 border-amber-100", iconBg: "bg-amber-100 text-amber-600" },
  { id: 6, name: "Vaccination Program", icon: <FiShield />, desc: "Comprehensive vaccination services for all age groups including travel vaccines.", color: "bg-teal-50 border-teal-100", iconBg: "bg-teal-100 text-teal-600" },
  { id: 7, name: "Diagnostic Imaging", icon: <FiEye />, desc: "Advanced imaging including MRI, CT Scan, PET Scan, X-Ray, Ultrasound, and Mammography.", color: "bg-cyan-50 border-cyan-100", iconBg: "bg-cyan-100 text-cyan-600" },
  { id: 8, name: "Health Checkup Packages", icon: <FiCheckCircle />, desc: "Customized health checkup packages for individuals, corporates, and senior citizens.", color: "bg-pink-50 border-pink-100", iconBg: "bg-pink-100 text-pink-600" },
  { id: 9, name: "Pharmacy", icon: <FiBriefcase />, desc: "24/7 in-hospital pharmacy stocked with all essential medicines and healthcare products.", color: "bg-indigo-50 border-indigo-100", iconBg: "bg-indigo-100 text-indigo-600" },
  { id: 10, name: "Physiotherapy", icon: <FiActivity />, desc: "Expert physiotherapy and rehabilitation services for post-surgical and injury recovery.", color: "bg-orange-50 border-orange-100", iconBg: "bg-orange-100 text-orange-600" },
  { id: 11, name: "Nutrition & Dietetics", icon: <FiHeart />, desc: "Personalized diet plans and nutrition counseling for chronic disease management.", color: "bg-lime-50 border-lime-100", iconBg: "bg-lime-100 text-lime-600" },
  { id: 12, name: "Mental Health", icon: <FiUser />, desc: "Compassionate mental health services including psychiatry, psychology, and counseling.", color: "bg-violet-50 border-violet-100", iconBg: "bg-violet-100 text-violet-600" },
  { id: 13, name: "Blood Bank", icon: <FiHeart />, desc: "Fully equipped blood bank with modern cross-matching and component preparation facilities.", color: "bg-red-50 border-red-100", iconBg: "bg-red-100 text-red-600" },
  { id: 14, name: "Telemedicine", icon: <FiGlobe />, desc: "Online consultations with specialists from the comfort of your home via secure video calls.", color: "bg-sky-50 border-sky-100", iconBg: "bg-sky-100 text-sky-600" },
  { id: 15, name: "Home Healthcare", icon: <FiHome />, desc: "Skilled nursing, post-op care, and chronic disease management in the comfort of your home.", color: "bg-emerald-50 border-emerald-100", iconBg: "bg-emerald-100 text-emerald-600" },
];

const testimonials = [
  { id: 1, name: "Margaret Thompson", role: "Cardiac Patient", rating: 5, text: "Dr. Mitchell saved my life. The cardiology team at MediCare Prime is exceptional. From the moment I arrived, I felt cared for. The facilities are world-class and the staff is incredibly compassionate.", avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Margaret&backgroundColor=b6e3f4" },
  { id: 2, name: "Kevin Lawson", role: "Orthopedic Patient", rating: 5, text: "After my knee replacement surgery, I was back on my feet in record time. Dr. Chen and his team were brilliant throughout the entire process. Best hospital I've ever been to.", avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Kevin&backgroundColor=c0aede" },
  { id: 3, name: "Ananya Singh", role: "Mother of a Pediatric Patient", rating: 5, text: "Dr. Sharma took such wonderful care of my daughter. The pediatric ward is cheerful and child-friendly. The nurses were so patient and kind. We couldn't have asked for better care.", avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Ananya&backgroundColor=d1d4f9" },
  { id: 4, name: "Robert Hayes", role: "Cancer Survivor", rating: 5, text: "The oncology team at MediCare Prime gave me hope when I had none. Dr. Adeyemi's expertise and the entire support team helped me through chemotherapy with dignity and care.", avatar: "https://api.dicebear.com/7.x/personas/svg?seed=RobertH&backgroundColor=ffd5dc" },
  { id: 5, name: "Sofia Bertrand", role: "Dermatology Patient", rating: 4, text: "The dermatology department is top-notch. Dr. Watson diagnosed my condition quickly and the treatment plan was very effective. The hospital is clean, modern, and welcoming.", avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Sofia&backgroundColor=b6e3f4" },
  { id: 6, name: "James Okonkwo", role: "Emergency Patient", rating: 5, text: "The ER team responded so fast. Within minutes of arriving I was being treated. The doctors and nurses were calm, professional and reassuring. Truly a life-saving hospital.", avatar: "https://api.dicebear.com/7.x/personas/svg?seed=JamesO&backgroundColor=c0aede" },
  { id: 7, name: "Linda Xu", role: "Maternity Patient", rating: 5, text: "I delivered my baby at MediCare Prime and it was a beautiful experience. The birthing suite was comfortable, the midwives were amazing and Dr. Patel was absolutely wonderful.", avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Linda&backgroundColor=d1d4f9" },
  { id: 8, name: "Patrick Moreau", role: "Neurology Patient", rating: 5, text: "After my stroke, Dr. Thornton and the neurology team provided exceptional rehabilitation care. Their expertise and dedication is unmatched. I have made a full recovery.", avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Patrick&backgroundColor=ffd5dc" },
  { id: 9, name: "Yuna Park", role: "General Checkup", rating: 4, text: "I came for a routine health checkup and was impressed by the efficiency and thoroughness. The lab results were ready within hours and the doctor explained everything clearly.", avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Yuna&backgroundColor=b6e3f4" },
  { id: 10, name: "David Fernandez", role: "Dental Patient", rating: 5, text: "Dr. Kim performed my dental implants and the results are incredible. Pain-free procedure, excellent aftercare and a beautiful result. The dental team is outstanding.", avatar: "https://api.dicebear.com/7.x/personas/svg?seed=DavidF&backgroundColor=c0aede" },
];

const faqs = [
  { q: "How do I book an appointment?", a: "You can book an appointment through our website's Appointment page, call our helpline at +1 (800) 123-4567, or visit the hospital reception in person." },
  { q: "What are the hospital visiting hours?", a: "General visiting hours are 10:00 AM – 12:00 PM and 4:00 PM – 7:00 PM. ICU visits are restricted to specific times. Please check with the nursing station." },
  { q: "Does the hospital accept insurance?", a: "Yes, we accept all major insurance plans including Medicare, Medicaid, BlueCross, Aetna, and many more. Please contact our billing department for specific plan information." },
  { q: "Is emergency care available 24/7?", a: "Absolutely. Our Emergency Department is open 24 hours a day, 7 days a week, 365 days a year with a dedicated trauma team always on standby." },
  { q: "How can I access my medical records?", a: "You can access your medical records through our Patient Portal online, or request them from the Medical Records department with valid ID." },
  { q: "Are online consultations available?", a: "Yes, we offer telemedicine consultations with most of our specialists. You can schedule a video consultation through the Appointment page or our app." },
  { q: "What should I bring to my first appointment?", a: "Please bring a valid photo ID, insurance card, list of current medications, any previous medical records or test results, and a referral letter if required." },
  { q: "Is parking available at the hospital?", a: "Yes, we have a multi-level parking facility with 500+ spaces. Parking is complimentary for the first 2 hours for patients and visitors." },
  { q: "Do you offer second opinions?", a: "Yes, we have a dedicated Second Opinion program. Our specialists review complex cases from other hospitals. Contact us to schedule a second opinion consultation." },
  { q: "How long does a routine checkup take?", a: "A comprehensive health checkup typically takes 3–4 hours depending on the package. You will receive most results on the same day." },
  { q: "Do you have a pharmacy on-site?", a: "Yes, our 24/7 pharmacy is located on the ground floor and is stocked with all prescribed medications and over-the-counter products." },
  { q: "What languages are spoken at the hospital?", a: "We have staff who speak English, Spanish, French, Mandarin, Hindi, and Arabic. Translation services are available for other languages upon request." },
  { q: "How do I get a medical certificate?", a: "Medical certificates can be obtained from the doctor who treated you. Please submit a request at the Medical Records desk or through the Patient Portal." },
  { q: "What payment methods are accepted?", a: "We accept cash, all major credit/debit cards, bank transfers, and most insurance direct billing. EMI options are available for select procedures." },
  { q: "Is there a cafeteria for family members?", a: "Yes, our hospital cafeteria is open from 7:00 AM to 10:00 PM with healthy meal options for patients, visitors, and staff." },
];

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

const achievements = [
  { year: "2023", title: "Best Hospital of the Year", org: "National Healthcare Excellence Awards" },
  { year: "2022", title: "JCI Accreditation", org: "Joint Commission International" },
  { year: "2021", title: "Top Cardiac Care Center", org: "American Heart Association" },
  { year: "2020", title: "Green Hospital Award", org: "Healthcare Environmental Trust" },
  { year: "2019", title: "Patient Safety Gold Standard", org: "National Patient Safety Foundation" },
];

const leadership = [
  { name: "Dr. William Carter", role: "Chief Executive Officer", image: "https://api.dicebear.com/7.x/personas/svg?seed=William&backgroundColor=b6e3f4", bio: "25+ years in healthcare administration. Former WHO consultant." },
  { name: "Dr. Rebecca Stone", role: "Chief Medical Officer", image: "https://api.dicebear.com/7.x/personas/svg?seed=Rebecca&backgroundColor=c0aede", bio: "Renowned cardiologist and clinical researcher with 200+ publications." },
  { name: "Mr. Daniel Park", role: "Chief Operations Officer", image: "https://api.dicebear.com/7.x/personas/svg?seed=Daniel&backgroundColor=d1d4f9", bio: "Healthcare operations expert with expertise in digital transformation." },
];

// ─── CONTEXT ─────────────────────────────────────────────────────────────────
const AppContext = createContext();
const useApp = () => useContext(AppContext);

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

// ─── LOADING SCREEN ───────────────────────────────────────────────────────────
function LoadingScreen({ onDone }) {
  useEffect(() => { const t = setTimeout(onDone, 2200); return () => clearTimeout(t); }, []);
  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900">
      <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="mb-6">
        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
          <FiHeart className="text-blue-600" size={40} />
        </div>
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-3xl font-bold text-white mb-2">MediCare Prime</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-blue-200 text-sm mb-8">Advanced Healthcare for a Healthier Tomorrow</motion.p>
      <motion.div initial={{ width: 0 }} animate={{ width: 220 }} transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }}
        className="h-1 bg-white rounded-full" style={{ maxWidth: 220 }} />
    </motion.div>
  );
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white text-xs sm:text-sm py-1.5 px-4 flex items-center justify-center gap-4 flex-wrap">
        <span className="flex items-center gap-1.5 font-semibold"><FiAlertCircle size={14} /> Emergency Hotline:</span>
        <a href="tel:+18009110000" className="font-bold hover:underline">{hospitalInfo.emergency}</a>
        <span className="hidden sm:inline">|</span>
        <span className="hidden sm:flex items-center gap-1.5"><FiClock size={13} /> Available 24/7</span>
      </div>
      <motion.nav initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => setActivePage("home")} className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow">
                <FiHeart className="text-white" size={18} />
              </div>
              <div className="leading-tight text-left">
                <div className="text-base font-bold text-blue-700">MediCare Prime</div>
                <div className="text-[10px] text-gray-500 hidden sm:block">Hospital & Healthcare</div>
              </div>
            </button>
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(l => (
                <button key={l.path} onClick={() => setActivePage(l.path)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${activePage === l.path ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"}`}>
                  {l.label}
                </button>
              ))}
            </div>
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+18001234567" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600">
                <FiPhone size={14} /><span>{hospitalInfo.phone}</span>
              </a>
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={() => setActivePage("appointment")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors">
                Book Appointment
              </motion.button>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden">
              <div className="px-4 py-3 space-y-1">
                {navLinks.map(l => (
                  <button key={l.path} onClick={() => { setActivePage(l.path); setMenuOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activePage === l.path ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50"}`}>
                    {l.label}
                  </button>
                ))}
                <button onClick={() => { setActivePage("appointment"); setMenuOpen(false); }}
                  className="w-full bg-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold mt-2">
                  Book Appointment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
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

// ─── SCROLL TO TOP ────────────────────────────────────────────────────────────
function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-lg flex items-center justify-center transition-colors">
          <FiChevronUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
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
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href="tel:+18009110000"
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

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────
function AboutPage({ setActivePage }) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">About MediCare Prime</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">Healing lives with expertise, empathy, and excellence since {hospitalInfo.founded}.</p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper className="grid lg:grid-cols-3 gap-8">
            {[
              { title: "Our Mission", icon: <FiHeart size={28} />, color: "bg-blue-600", text: "To provide world-class, patient-centered healthcare that improves lives and serves our community with integrity, innovation, and compassion." },
              { title: "Our Vision", icon: <FiEye size={28} />, color: "bg-green-600", text: "To be the most trusted healthcare institution in the region, recognized for clinical excellence, outstanding outcomes, and a culture of continuous improvement." },
              { title: "Our Values", icon: <FiAward size={28} />, color: "bg-purple-600", text: "Compassion, Integrity, Excellence, Innovation, Teamwork, and Respect form the core of everything we do at MediCare Prime." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white rounded-2xl shadow-md border border-gray-100 p-7 hover:shadow-xl transition-all">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow`}>{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}
          </SectionWrapper>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900">Our History</h2>
            </motion.div>
            <div className="relative border-l-2 border-blue-200 pl-8 space-y-8">
              {[
                { year: 1995, event: "MediCare Prime Hospital founded with 50 beds and 10 doctors." },
                { year: 2002, event: "Expanded to 200 beds. Launched the Cardiology and Neurology departments." },
                { year: 2009, event: "Received NABH Accreditation. Opened the Advanced Cancer Center." },
                { year: 2015, event: "Achieved JCI Accreditation — the gold standard in global healthcare." },
                { year: 2019, event: "Launched telemedicine platform serving 50,000+ patients remotely." },
                { year: 2023, event: "Awarded Best Hospital of the Year. Reached 120,000+ patients served milestone." },
              ].map((h, i) => (
                <motion.div key={i} variants={fadeUp} className="relative">
                  <div className="absolute -left-11 w-5 h-5 bg-blue-600 rounded-full border-3 border-white shadow" />
                  <span className="text-blue-600 font-bold text-sm">{h.year}</span>
                  <p className="text-gray-700 mt-1">{h.event}</p>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="text-4xl font-extrabold text-blue-600 mb-1"><AnimatedCounter target={s.value} suffix={s.suffix} /></div>
                <div className="text-gray-600 font-medium">{s.label}</div>
              </motion.div>
            ))}
          </SectionWrapper>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900">Awards & Achievements</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {achievements.map((a, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4 items-start hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
                    <FiAward size={24} className="text-amber-500" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-500 font-bold mb-0.5">{a.year}</div>
                    <div className="font-bold text-gray-900 text-sm">{a.title}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{a.org}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900">Our Leadership</h2>
            </motion.div>
            <div className="grid sm:grid-cols-3 gap-8">
              {leadership.map((l, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center hover:shadow-xl transition-all">
                  <img src={l.image} alt={l.name} className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-blue-50 shadow" />
                  <h3 className="font-bold text-gray-900">{l.name}</h3>
                  <p className="text-blue-600 text-sm font-medium mb-2">{l.role}</p>
                  <p className="text-gray-500 text-xs">{l.bio}</p>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}

// ─── DOCTORS PAGE ─────────────────────────────────────────────────────────────
function DoctorsPage({ setActivePage, setSelectedDoctor }) {
  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("All");

  const deptOptions = ["All", ...Array.from(new Set(doctors.map(d => d.dept)))];
  const filtered = doctors.filter(d => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) || d.specialty.toLowerCase().includes(search.toLowerCase());
    const matchDept = filterDept === "All" || d.dept === filterDept;
    return matchSearch && matchDept;
  });

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Our Expert Doctors</h1>
          <p className="text-blue-100 max-w-xl mx-auto">350+ board-certified specialists dedicated to your health.</p>
        </motion.div>
      </section>
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[89px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search doctors by name or specialty..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
          </div>
          <select value={filterDept} onChange={e => setFilterDept(e.target.value)} className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
            {deptOptions.map(d => <option key={d}>{d}</option>)}
          </select>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <FiUser size={48} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No doctors found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((doc, i) => (
                <motion.div key={doc.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
                  whileHover={{ y: -6 }} className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all">
                  <div className="h-44 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative">
                    <img src={doc.image} alt={doc.name} className="w-28 h-28 rounded-full border-4 border-white shadow-lg" />
                    <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">Available</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900">{doc.name}</h3>
                    <p className="text-blue-600 text-sm font-medium">{doc.specialty}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{doc.qualification}</p>
                    <div className="flex items-center justify-between mt-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1"><FiAward size={11} />{doc.experience} yrs</span>
                      <span className="flex items-center gap-1"><FiStar size={11} className="text-amber-400" />{doc.rating}</span>
                      <span className="flex items-center gap-1"><FiClock size={11} />{doc.availability.split(",")[0]}...</span>
                    </div>
                    <button onClick={() => { setSelectedDoctor(doc); setActivePage("doctor-detail"); }}
                      className="w-full bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-600 border border-blue-100 py-2 rounded-xl text-sm font-semibold transition-all">
                      View Profile
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// ─── DOCTOR DETAIL PAGE ───────────────────────────────────────────────────────
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

// ─── DEPARTMENTS PAGE ─────────────────────────────────────────────────────────
function DepartmentsPage({ setActivePage }) {
  const [selectedDept, setSelectedDept] = useState(null);
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Our Departments</h1>
          <p className="text-blue-100 max-w-xl mx-auto">Specialized medical departments delivering expert care across all disciplines.</p>
        </motion.div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, i) => (
            <motion.div key={dept.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }} onClick={() => setSelectedDept(selectedDept?.id === dept.id ? null : dept)}
              className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all">
              <div className={`h-2 bg-gradient-to-r ${dept.color}`} />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{dept.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900">{dept.name}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{dept.desc}</p>
                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Services</p>
                  <ul className="space-y-1">
                    {dept.services.map((s, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-gray-600">
                        <FiCheckCircle size={12} className="text-green-500 shrink-0" />{s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Specialists</p>
                  <div className="flex flex-wrap gap-2">
                    {doctors.filter(d => d.dept === dept.name).slice(0, 2).map(doc => (
                      <span key={doc.id} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{doc.name}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ─── SERVICES PAGE ────────────────────────────────────────────────────────────
function ServicesPage({ setActivePage }) {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Our Services</h1>
          <p className="text-blue-100 max-w-xl mx-auto">Comprehensive healthcare services available around the clock.</p>
        </motion.div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className={`rounded-2xl border ${s.color} p-6 hover:shadow-lg transition-all`}>
                <div className={`w-14 h-14 ${s.iconBg} rounded-2xl flex items-center justify-center text-xl mb-4 shadow`}>{s.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                <button onClick={() => setActivePage("appointment")} className="text-blue-600 hover:text-blue-800 text-sm font-semibold flex items-center gap-1.5 transition-colors">
                  Book Service <FiArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── APPOINTMENT PAGE ─────────────────────────────────────────────────────────
function AppointmentPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", doctor: "", dept: "", date: "", time: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const times = ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"];
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Book an Appointment</h1>
          <p className="text-blue-100 max-w-xl mx-auto">Schedule your visit with one of our expert specialists.</p>
        </motion.div>
      </section>
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div key="success" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }}
                className="text-center bg-white rounded-3xl shadow-xl p-14 border border-gray-100">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <FiCheckCircle size={40} className="text-green-500" />
                  </div>
                </motion.div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Appointment Booked!</h2>
                <p className="text-gray-500 mb-2">Thank you, <strong>{form.name}</strong>. Your appointment request has been received.</p>
                <p className="text-gray-400 text-sm mb-6">Our team will contact you at <strong>{form.phone}</strong> to confirm your appointment within 2 hours.</p>
                <motion.button whileHover={{ scale: 1.04 }} onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", doctor: "", dept: "", date: "", time: "", message: "" }); }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                  Book Another Appointment
                </motion.button>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Appointment Details</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Patient Name *</label>
                      <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Full Name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                      <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+1 (000) 000-0000"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Department *</label>
                      <select required value={form.dept} onChange={e => setForm({ ...form, dept: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                        <option value="">Select Department</option>
                        {departments.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Select Doctor</label>
                      <select value={form.doctor} onChange={e => setForm({ ...form, doctor: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                        <option value="">Any Available Doctor</option>
                        {doctors.filter(d => !form.dept || d.dept === form.dept).map(d => <option key={d.id} value={d.name}>{d.name} – {d.specialty}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Date *</label>
                      <input required type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Time *</label>
                      <select required value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                        <option value="">Select Time Slot</option>
                        {times.map(t => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message / Symptoms</label>
                    <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4} placeholder="Briefly describe your symptoms or reason for visit..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none" />
                  </div>
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-colors shadow-lg">
                    <FiCalendar size={18} /> Book Appointment
                  </motion.button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
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
              { icon: <FiPhone size={22} />, title: "Phone", lines: [hospitalInfo.phone, "Fax: +1 (800) 123-4568"], color: "bg-blue-50 text-blue-600" },
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
                <span className="font-semibold">1247 Healthcare Blvd, Medical District, NY 10001</span>
                <span className="text-sm text-blue-300">Google Maps Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
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