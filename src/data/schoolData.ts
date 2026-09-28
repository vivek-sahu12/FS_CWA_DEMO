import {
  StatItem,
  FacilityItem,
  LeaderItem,
  FacultyItem,
  MilestoneItem,
  GalleryItem,
  TestimonialItem,
} from '../types';

export const SCHOOL_INFO = {
  name: 'First Step Higher Secondary School',
  shortName: 'First Step H.S. School',
  cityState: 'Chhindwara (M.P.)',
  mottoHindi: 'विद्या प्रथमो चरण:',
  mottoEnglish: 'Knowledge is the First Step to Enlightenment',
  establishedYear: 1992,
  affiliation: 'CBSE Curriculum Aligned / MPBSE Affiliated',
  affiliationNo: 'MPBSE-CHH-1992-042',
  grades: 'Nursery to 12th Grade (Science, Commerce & Humanities)',
  address: 'VIP Road, Near Khajri Bypass, Chhindwara, Madhya Pradesh - 480001',
  phone: '+91 7162 245890',
  mobile: '+91 94251 88765',
  whatsapp: '+919425188765',
  email: 'admissions@firststepchhindwara.edu.in',
  officeHours: 'Monday - Saturday: 8:00 AM - 3:30 PM',
};

export const STATS: StatItem[] = [
  {
    id: 'years',
    value: 34,
    suffix: '+',
    label: 'Years of Excellence',
    subtext: 'Nurturing generations since 1992',
  },
  {
    id: 'students',
    value: 2450,
    suffix: '+',
    label: 'Happy Students',
    subtext: 'From Nursery to Class 12th',
  },
  {
    id: 'faculty',
    value: 95,
    suffix: '+',
    label: 'Dedicated Educators',
    subtext: '1:18 Teacher-Student ratio',
  },
  {
    id: 'results',
    value: 100,
    suffix: '%',
    label: 'Board Pass Record',
    subtext: 'With 72% first-division merit',
  },
];

export const FACILITIES: FacilityItem[] = [
  {
    id: 'smart-class',
    title: 'Interactive Smart Classrooms',
    description:
      'Digital touch panels with audiovisual content, 3D STEM models, and interactive learning modules in all grades.',
    icon: 'MonitorPlay',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'science-labs',
    title: 'Advanced Science & Robotics Labs',
    description:
      'Equipped Physics, Chemistry, Biology and AI/Robotics labs adhering to international safety and curriculum standards.',
    icon: 'Atom',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'library',
    title: 'Knowledge Hub & Central Library',
    description:
      'Curated repository of 15,000+ academic volumes, competitive exam primers, digital subscriptions, and calm reading bays.',
    icon: 'BookOpen',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'sports',
    title: 'Sports & Athletic Complex',
    description:
      'Multi-sport campus with cricket nets, basketball turf, badminton courts, table tennis, and licensed athletic coaches.',
    icon: 'Trophy',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'transport',
    title: 'GPS-Tracked Safe Transport',
    description:
      'Fleet of modern buses with live GPS tracking, speed governors, CCTV cameras, and female attendants across Chhindwara.',
    icon: 'Bus',
    color: 'from-rose-500 to-red-600',
  },
  {
    id: 'safety',
    title: '24/7 Campus Safety & Infirmary',
    description:
      'Round-the-clock security, 120+ HD surveillance cameras, biometric access, and a qualified full-time resident nurse.',
    icon: 'ShieldCheck',
    color: 'from-violet-500 to-purple-600',
  },
];

export const LEADERS: LeaderItem[] = [
  {
    id: 'chairman',
    name: 'Dr. Rameshwar P. Verma',
    role: 'Chairman & Founder',
    qualification: 'M.Sc., Ph.D. (Education & Child Psychology)',
    message:
      'When we laid the foundation stone in 1992, our single commitment was to ensure that no child in Chhindwara lacked access to world-class education rooted in traditional values. Thirty-four years on, that pledge burns brighter than ever.',
    experience: '40+ Years in Educational Leadership',
    avatarBg: 'bg-gradient-to-br from-blue-700 to-indigo-900',
  },
  {
    id: 'director',
    name: 'Mrs. Sunita Verma',
    role: 'Managing Director',
    qualification: 'M.A., B.Ed., Educational Management',
    message:
      'Education is not merely preparing for examinations; it is building compassionate character, analytical thinking, and the confidence to lead tomorrow’s world with humility and strength.',
    experience: '30+ Years in Academic Administration',
    avatarBg: 'bg-gradient-to-br from-amber-600 to-orange-800',
  },
  {
    id: 'principal',
    name: 'Prof. Anil Kumar Sharma',
    role: 'Principal',
    qualification: 'M.Sc. (Physics), M.Ed., UGC-NET',
    message:
      'At First Step, we celebrate each student’s unique genius. Our pedagogical blend of experiential STEM learning, expressive arts, and sports ensures holistic growth for every learner.',
    experience: '24+ Years Pedagogical Excellence',
    avatarBg: 'bg-gradient-to-br from-red-600 to-rose-900',
  },
];

export const FACULTY_MEMBERS: FacultyItem[] = [
  {
    name: 'Dr. Meenakshi Soni',
    department: 'Science & STEM',
    designation: 'Head of Department (Physics)',
    qualification: 'Ph.D., M.Sc., B.Ed.',
  },
  {
    name: 'Mr. Rajeshwar Tiwari',
    department: 'Mathematics',
    designation: 'Senior Faculty & IIT Mentor',
    qualification: 'M.Sc. (Maths), B.Ed.',
  },
  {
    name: 'Mrs. Vandana Chouhan',
    department: 'Commerce & Economics',
    designation: 'Academic Dean (Senior Wing)',
    qualification: 'M.Com, MBA, B.Ed.',
  },
  {
    name: 'Mr. Devendra Singhania',
    department: 'Information Technology',
    designation: 'Robotics & AI Lead Instructor',
    qualification: 'B.Tech (CSE), MCA',
  },
  {
    name: 'Mrs. Neha Saxena',
    department: 'Primary & Pre-Primary Wing',
    designation: 'Early Childhood Coordinator',
    qualification: 'M.A. (Psychology), ECCE',
  },
  {
    name: 'Coach Satish Bisen',
    department: 'Physical Education & Athletics',
    designation: 'Sports Director & NIS Coach',
    qualification: 'B.P.Ed., NIS Gold Medalist',
  },
];

export const MILESTONES: MilestoneItem[] = [
  {
    year: '1992',
    title: 'The First Step Taken',
    description:
      'Established on July 1st, 1992 with 45 students and 4 pioneer teachers with a mission to redefine schooling in Chhindwara.',
    badge: 'Foundation',
  },
  {
    year: '1998',
    title: 'Middle & High School Expansion',
    description:
      'Constructed the Main Academic Block and introduced well-equipped experimental science laboratories.',
    badge: 'Campus Growth',
  },
  {
    year: '2005',
    title: 'Higher Secondary Accreditation',
    description:
      'Upgraded to Senior Secondary offering Science, Commerce, and Arts streams with state-level merit accolades.',
    badge: '10+2 Accreditation',
  },
  {
    year: '2015',
    title: 'Digital Smart Campus & Sports Complex',
    description:
      'Pioneered interactive smart classrooms across all sections and inaugurated the multi-sport athletic arena.',
    badge: 'Modernization',
  },
  {
    year: '2021',
    title: 'Innovation Lab & Robotics Center',
    description:
      'Established Chhindwara district’s first dedicated school tinkering & robotics laboratory.',
    badge: 'STEM Leadership',
  },
  {
    year: '2026',
    title: '34 Years of Educational Legacy',
    description:
      'Continuing as a beacon of academic excellence with 2,400+ students and alumni excelling globally.',
    badge: 'Present Day',
  },
];

export const CORE_VALUES = [
  {
    title: 'Vidya (Knowledge & Wisdom)',
    description:
      'Empowering inquisitive minds with deep conceptual clarity, analytical discernment, and a lifelong thirst for learning.',
    icon: 'GraduationCap',
    color: 'text-blue-600 bg-blue-50 border-blue-100',
  },
  {
    title: 'Charitra (Integrity & Character)',
    description:
      'Instilling timeless moral principles, ethical fortitude, empathy, and respect for every fellow human being.',
    icon: 'HeartHandshake',
    color: 'text-rose-600 bg-rose-50 border-rose-100',
  },
  {
    title: 'Koshish (Relentless Effort)',
    description:
      'Fostering resilience, disciplined work ethic, and sportsmanship where failures are seen as stepping stones to mastery.',
    icon: 'Flame',
    color: 'text-amber-600 bg-amber-50 border-amber-100',
  },
  {
    title: 'Navachar (Innovation & Curiosity)',
    description:
      'Encouraging creative inquiry, hands-on experimentation, and modern technology adoption from kindergarten upwards.',
    icon: 'Sparkles',
    color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
  },
];

export const ADMISSION_CRITERIA = [
  {
    stage: 'Pre-Primary Wing',
    classes: 'Nursery, LKG, UKG',
    ageRange: '2.5 to 5 Years (as of 31st March)',
    focus: 'Playway learning, sensory development, motor skills, phonics & social interaction',
  },
  {
    stage: 'Primary Wing',
    classes: 'Class 1st to 5th',
    ageRange: '5+ to 10 Years',
    focus: 'Foundational literacy & numeracy, environmental inquiry, arts & introductory robotics',
  },
  {
    stage: 'Middle School',
    classes: 'Class 6th to 8th',
    ageRange: '10+ to 13 Years',
    focus: 'Experiential science, mathematics problem solving, languages, sports & computer coding',
  },
  {
    stage: 'Secondary Wing',
    classes: 'Class 9th & 10th',
    ageRange: '13+ to 15 Years',
    focus: 'Board syllabus mastery, laboratory research, competitive Olympiad grooming & career orientation',
  },
  {
    stage: 'Senior Secondary',
    classes: 'Class 11th & 12th',
    ageRange: '15+ to 18 Years',
    focus: 'Stream specialization: Science (PCM/PCB), Commerce (with Maths/IP), and Humanities + JEE/NEET/CUET coaching',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Vibrant Main Academic Pavilion',
    category: 'campus',
    description:
      'Panoramic view of the lush green courtyard, assembly ground, and three-storey modern academic wing.',
    gradient: 'from-blue-600 via-indigo-600 to-sky-700',
    icon: 'Building2',
    tags: ['Architecture', 'Lawn', 'Assembly Ground'],
  },
  {
    id: 'gal-2',
    title: 'Interactive Smart Classroom Session',
    category: 'classrooms',
    description:
      'Students actively participating in a digital 3D biology simulation led by senior educators.',
    gradient: 'from-sky-500 via-blue-600 to-indigo-700',
    icon: 'MonitorPlay',
    tags: ['Smart Class', 'Digital Board', 'Active Learning'],
  },
  {
    id: 'gal-3',
    title: 'Annual Sports Meet & Athletic Relays',
    category: 'sports',
    description:
      'Athletes sprinting to victory during the 34th Inter-House Track & Field Championships.',
    gradient: 'from-emerald-600 via-teal-600 to-green-700',
    icon: 'Trophy',
    tags: ['Athletics', 'Track & Field', 'House Championship'],
  },
  {
    id: 'gal-4',
    title: 'Annual Cultural Festival "Tarang"',
    category: 'events',
    description:
      'Spectacular classical and folk dance presentation by senior students during the school annual celebration.',
    gradient: 'from-rose-500 via-pink-600 to-purple-700',
    icon: 'Sparkles',
    tags: ['Annual Function', 'Music', 'Folk Dance'],
  },
  {
    id: 'gal-5',
    title: 'Physics & Chemistry Discovery Lab',
    category: 'classrooms',
    description:
      'Hands-on experimental setup where students explore optics, mechanics, and molecular reactions.',
    gradient: 'from-cyan-600 via-blue-700 to-slate-800',
    icon: 'Atom',
    tags: ['Science Lab', 'Experiments', 'Apparatus'],
  },
  {
    id: 'gal-6',
    title: 'Basketball & Badminton Championship Court',
    category: 'sports',
    description:
      'High-impact synthetic basketball arena illuminated for evening coaching and tournament matches.',
    gradient: 'from-amber-600 via-orange-600 to-rose-700',
    icon: 'Activity',
    tags: ['Basketball', 'Fitness', 'Team Sports'],
  },
  {
    id: 'gal-7',
    title: 'Science & Robotics Exhibition Day',
    category: 'events',
    description:
      'District-level young innovators showcase automated drones, solar cars, and clean-energy prototypes.',
    gradient: 'from-indigo-600 via-violet-600 to-purple-800',
    icon: 'Cpu',
    tags: ['Robotics', 'Innovation', 'Exhibition'],
  },
  {
    id: 'gal-8',
    title: 'Serene Central Library & Research Corner',
    category: 'campus',
    description:
      'Sunlit reading halls stacked with thousands of books, encyclopedias, and quiet study alcoves.',
    gradient: 'from-teal-600 via-cyan-700 to-blue-800',
    icon: 'BookOpen',
    tags: ['Library', 'Quiet Study', 'Periodicals'],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Rajesh & Pooja Deshmukh',
    relation: 'Parents of Arnav (Class 10th)',
    batchOrClass: 'Class 10th CBSE',
    content:
      'First Step has been a blessing for Arnav. The personal attention from teachers, the balance between academic rigor and co-curriculars, and the warm culture make it stand out in Chhindwara.',
    rating: 5,
  },
  {
    id: 't-2',
    name: 'Priyanka Verma (Alumna 2018)',
    relation: 'Software Engineer at TCS (IIT Roorkee Alum)',
    batchOrClass: 'Batch of 2018',
    content:
      'The foundational STEM labs and mentorship from physics teachers at First Step sparked my passion for engineering. The school motto "विद्या प्रथमो चरण:" remains my guiding light in life.',
    rating: 5,
  },
  {
    id: 't-3',
    name: 'Dr. Santosh Rathore',
    relation: 'Parent of Ananya (Class 4th) & Kabir (UKG)',
    batchOrClass: 'Primary & Pre-Primary Wing',
    content:
      'The safe transport, caring kindergarten teachers, and interactive smartboards have made learning an absolute joy for my children. They look forward to school every single morning!',
    rating: 5,
  },
  {
    id: 't-4',
    name: 'Harshita Sahu',
    relation: 'State Merit Rank Holder (Class 12th Science)',
    batchOrClass: 'Batch of 2025 (97.4% Board Score)',
    content:
      'Regular test series, doubt clearing sessions till late evening, and encouraging words from the Principal Sir helped me crack the state top 10 rank. Forever grateful to my alma mater.',
    rating: 5,
  },
];

export const ACHIEVEMENTS = [
  {
    number: '100%',
    title: 'Class 10 & 12 Board Results',
    desc: 'Unbroken track record of cent percent pass rate with over 45+ students scoring 90% and above.',
  },
  {
    number: '1st',
    title: 'District Science Exhibition',
    desc: 'Champions in District STEM and Green Innovation challenge 3 years in a row.',
  },
  {
    number: '18+',
    title: 'Olympiad Gold Medals',
    desc: 'National Cyber, Science & Math Olympiad medalists competing at national finals in New Delhi.',
  },
  {
    number: '500+',
    title: 'Proud Alumni Network',
    desc: 'First Step graduates now doctors, civil servants, software engineers, and entrepreneurs.',
  },
];
