import {
    FiAlertCircle, FiActivity, FiZap, FiTrendingUp, FiPhone, FiShield,
    FiEye, FiCheckCircle, FiBriefcase, FiHeart, FiUser, FiGlobe,
    FiHome
} from "react-icons/fi";


// ─── Nav, Footer, Home Page, About Page DATA ────────────────────────────────────────────────────────────────────
export const hospitalInfo = {
  name: "MediCare Prime Hospital",
  tagline: "Advanced Healthcare for a Healthier Tomorrow",
  phone: "+880 1624-471890",
  emergency: "+880 1624-471890",
  email: "info@medicareprime.com",
  address: "Medical Road, Chandpur District, NY 10001",
  hours: "Mon–Sat: 8:00 AM – 8:00 PM | Emergency: 24/7",
  founded: 1995,
};

// ─── Nav, Footer DATA ────────────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "Home", path: "home" },
  { label: "About", path: "about" },
  { label: "Doctors", path: "doctors" },
  { label: "Departments", path: "departments" },
  { label: "Services", path: "services" },
  { label: "Appointment", path: "appointment" },
  { label: "Contact", path: "contact" },
];

// ─── Footer, Home Page, Departments Page, Appointment Page DATA ───────────────────────────────────────
export const departments = [
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

// ─── Home Page, About Page DATA ────────────────────────────────────────────────────────────────────
export const stats = [
  { label: "Patients Served", value: 120000, suffix: "+" },
  { label: "Expert Doctors", value: 350, suffix: "+" },
  { label: "Departments", value: 28, suffix: "" },
  { label: "Years of Excellence", value: 29, suffix: "+" },
];

// ─── Home Page, Doctors Page, Departments Page, Appointment Page DATA ─────────────────────────────────
export const doctors = [
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

// ─── Home Page, DoctorDetail Page DATA ────────────────────────────────────────────────────────────────────
export const testimonials = [
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

// ─── Home Page DATA ────────────────────────────────────────────────────────────────────
export const faqs = [
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

// ─── About Page DATA ────────────────────────────────────────────────────────────────────
export const achievements = [
  { year: "2023", title: "Best Hospital of the Year", org: "National Healthcare Excellence Awards" },
  { year: "2022", title: "JCI Accreditation", org: "Joint Commission International" },
  { year: "2021", title: "Top Cardiac Care Center", org: "American Heart Association" },
  { year: "2020", title: "Green Hospital Award", org: "Healthcare Environmental Trust" },
  { year: "2019", title: "Patient Safety Gold Standard", org: "National Patient Safety Foundation" },
];

// ─── About Page DATA ────────────────────────────────────────────────────────────────────
export const leadership = [
  { name: "Dr. William Carter", role: "Chief Executive Officer", image: "https://api.dicebear.com/7.x/personas/svg?seed=William&backgroundColor=b6e3f4", bio: "25+ years in healthcare administration. Former WHO consultant." },
  { name: "Dr. Rebecca Stone", role: "Chief Medical Officer", image: "https://api.dicebear.com/7.x/personas/svg?seed=Rebecca&backgroundColor=c0aede", bio: "Renowned cardiologist and clinical researcher with 200+ publications." },
  { name: "Mr. Daniel Park", role: "Chief Operations Officer", image: "https://api.dicebear.com/7.x/personas/svg?seed=Daniel&backgroundColor=d1d4f9", bio: "Healthcare operations expert with expertise in digital transformation." },
];

// ─── Service Page DATA ────────────────────────────────────────────────────────────────────
export const services = [
  { id: 1, name: "Emergency Care", icon: FiAlertCircle , desc: "Round-the-clock emergency medical services with a dedicated trauma team and fully equipped ER.", color: "bg-red-50 border-red-100", iconBg: "bg-red-100 text-red-600" },
  { id: 2, name: "ICU & Critical Care", icon: FiActivity , desc: "State-of-the-art intensive care units with continuous monitoring and expert critical care physicians.", color: "bg-blue-50 border-blue-100", iconBg: "bg-blue-100 text-blue-600" },
  { id: 3, name: "Advanced Surgery", icon: FiZap , desc: "Minimally invasive and robotic surgeries performed by highly skilled surgeons across all specialties.", color: "bg-purple-50 border-purple-100", iconBg: "bg-purple-100 text-purple-600" },
  { id: 4, name: "Laboratory Services", icon: FiTrendingUp , desc: "Comprehensive pathology lab with NABL accreditation offering 2000+ diagnostic tests.", color: "bg-green-50 border-green-100", iconBg: "bg-green-100 text-green-600" },
  { id: 5, name: "Ambulance Service", icon: FiPhone , desc: "24/7 ambulance services with advanced life support equipment and trained paramedics.", color: "bg-amber-50 border-amber-100", iconBg: "bg-amber-100 text-amber-600" },
  { id: 6, name: "Vaccination Program", icon: FiShield , desc: "Comprehensive vaccination services for all age groups including travel vaccines.", color: "bg-teal-50 border-teal-100", iconBg: "bg-teal-100 text-teal-600" },
  { id: 7, name: "Diagnostic Imaging", icon: FiEye , desc: "Advanced imaging including MRI, CT Scan, PET Scan, X-Ray, Ultrasound, and Mammography.", color: "bg-cyan-50 border-cyan-100", iconBg: "bg-cyan-100 text-cyan-600" },
  { id: 8, name: "Health Checkup Packages", icon: FiCheckCircle, desc: "Customized health checkup packages for individuals, corporates, and senior citizens.", color: "bg-pink-50 border-pink-100", iconBg: "bg-pink-100 text-pink-600" },
  { id: 9, name: "Pharmacy", icon: FiBriefcase , desc: "24/7 in-hospital pharmacy stocked with all essential medicines and healthcare products.", color: "bg-indigo-50 border-indigo-100", iconBg: "bg-indigo-100 text-indigo-600" },
  { id: 10, name: "Physiotherapy", icon: FiActivity , desc: "Expert physiotherapy and rehabilitation services for post-surgical and injury recovery.", color: "bg-orange-50 border-orange-100", iconBg: "bg-orange-100 text-orange-600" },
  { id: 11, name: "Nutrition & Dietetics", icon: FiHeart , desc: "Personalized diet plans and nutrition counseling for chronic disease management.", color: "bg-lime-50 border-lime-100", iconBg: "bg-lime-100 text-lime-600" },
  { id: 12, name: "Mental Health", icon: FiUser , desc: "Compassionate mental health services including psychiatry, psychology, and counseling.", color: "bg-violet-50 border-violet-100", iconBg: "bg-violet-100 text-violet-600" },
  { id: 13, name: "Blood Bank", icon: FiHeart , desc: "Fully equipped blood bank with modern cross-matching and component preparation facilities.", color: "bg-red-50 border-red-100", iconBg: "bg-red-100 text-red-600" },
  { id: 14, name: "Telemedicine", icon: FiGlobe , desc: "Online consultations with specialists from the comfort of your home via secure video calls.", color: "bg-sky-50 border-sky-100", iconBg: "bg-sky-100 text-sky-600" },
  { id: 15, name: "Home Healthcare", icon: FiHome , desc: "Skilled nursing, post-op care, and chronic disease management in the comfort of your home.", color: "bg-emerald-50 border-emerald-100", iconBg: "bg-emerald-100 text-emerald-600" },
];