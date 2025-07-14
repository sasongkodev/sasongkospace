// src/components/AboutMe.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { FiLayout, FiPenTool, FiTag, FiLayers, FiType } from "react-icons/fi";
import { FaPaintBrush, FaSwatchbook } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
  FaBehance,
  FaDribbble,
} from "react-icons/fa6";

// HighlightCard component with colored icons
const HighlightCard = ({ icon, text, desc, color }) => (
  <motion.div
    className="flex items-start gap-3 p-4 bg-gray-800/80 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-700 hover:border-gray-600"
    whileHover={{ y: -5 }}
  >
    <div className={`p-2 rounded-full ${color.bg}`}>{icon}</div>
    <div>
      <h4 className="font-medium text-gray-100">{text}</h4>
      <p className="text-sm text-gray-400 mt-1">{desc}</p>
    </div>
  </motion.div>
);

// SkillTag component with color variations
const SkillTag = ({ name, icon, color }) => (
  <motion.span
    className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm cursor-pointer flex items-center gap-2 hover:bg-opacity-80 transition-all border ${color.bg} ${color.border} ${color.text} ${color.hover}`}
    whileHover={{
      scale: 1.05,
    }}
  >
    {icon}
    {name}
  </motion.span>
);

// SocialLink component with hover colors
const SocialLink = ({ href, icon, label, color }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-3 rounded-full transition-colors ${color.base} ${color.hover}`}
    aria-label={label}
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);

// Custom hook for role rotation
const useRoleRotation = (roles, interval = 3000) => {
  const [currentRole, setCurrentRole] = useState(roles[0]);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      index = (index + 1) % roles.length;
      setCurrentRole(roles[index]);
    }, interval);
    return () => clearInterval(timer);
  }, [roles, interval]);

  return currentRole;
};

// Color palette
const COLORS = {
  primary: {
    text: "text-teal-400",
    bg: "bg-teal-400/10",
    border: "border-teal-400/20",
    hover: "hover:bg-teal-400/20",
  },
  secondary: {
    text: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
    hover: "hover:bg-amber-400/20",
  },
  accent: {
    text: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/20",
    hover: "hover:bg-rose-400/20",
  },
  neutral: {
    text: "text-gray-300",
    bg: "bg-gray-700/50",
    border: "border-gray-600",
    hover: "hover:bg-gray-600",
  },
};

// Constants
const ROLES = [
  "Desainer Grafis",
  "Copywriter",
  "Brand Strategist",
  "Illustrator",
];

const HIGHLIGHTS = [
  {
    icon: <FaPaintBrush className="text-teal-400 text-xl" />,
    text: "Desain Minimalis & Estetis",
    desc: "Kesederhanaan yang elegan dengan fokus pada detail",
    color: {
      bg: "bg-teal-400/20",
    },
  },
  {
    icon: <FiType className="text-amber-400 text-xl" />,
    text: "Copywriting Persuasif",
    desc: "Pesan yang menggerakkan emosi dan tindakan",
    color: {
      bg: "bg-amber-400/20",
    },
  },
  {
    icon: <FaSwatchbook className="text-rose-400 text-xl" />,
    text: "Solusi Branding Kreatif",
    desc: "Identitas visual yang konsisten dan memorable",
    color: {
      bg: "bg-rose-400/20",
    },
  },
  {
    icon: <FiPenTool className="text-indigo-400 text-xl" />,
    text: "Storytelling Visual",
    desc: "Narasi kuat melalui kombinasi teks dan gambar",
    color: {
      bg: "bg-indigo-400/20",
    },
  },
];

const SKILLS = [
  { name: "Brand Identity", icon: <FiTag size={14} />, color: COLORS.primary },
  {
    name: "UI/UX Design",
    icon: <FiLayout size={14} />,
    color: COLORS.secondary,
  },
  { name: "Illustration", icon: <FiPenTool size={14} />, color: COLORS.accent },
  { name: "Typography", icon: <FiType size={14} />, color: COLORS.primary },
  {
    name: "Copywriting",
    icon: <FiPenTool size={14} />,
    color: COLORS.secondary,
  },
  { name: "Art Direction", icon: <FiLayers size={14} />, color: COLORS.accent },
];

const SOCIAL_LINKS = [
  {
    href: "https://github.com/sasongkodev", // Replace with actual GitHub URL
    icon: <FaGithub />,
    label: "GitHub",
    color: { base: "text-gray-300", hover: "hover:bg-gray-600" },
  },

  {
    href: "https://www.linkedin.com/in/wahyu-puji-sasongko-435a24207/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
    color: { base: "text-sky-400", hover: "hover:bg-sky-400/10" },
  },
  {
    href: "mailto:sapa@wahyupuji.com",
    icon: <FaRegEnvelope />,
    label: "Email",
    color: { base: "text-gray-300", hover: "hover:bg-gray-600" },
  },
];

export default function AboutMe() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const currentRole = useRoleRotation(ROLES);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const profileImage =
    "https://www.dropbox.com/scl/fi/31tpeqxijlcf7xrwd6e38/profil.jpeg?rlkey=dth7dbvmx0dfoh6gvi8kkxrj4&st=vhzcnl2s&raw=1";
  const placeholderImage =
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=1180&q=80";

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-20 px-4 sm:py-28 sm:px-6 overflow-hidden"
    >
      {/* Subtle texture background */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Title */}
        <motion.div className="mb-16 text-center" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 relative inline-block font-['Inter']">
            <span className="relative z-10">
              Tentang <span className="text-teal-400">Saya</span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400/30 via-amber-400/30 to-rose-400/30 -z-10"></span>
          </h2>
          <p className="mt-4 text-gray-400">
            Mengenal lebih dekat{" "}
            <span className="text-amber-300">kreativitas</span> dan{" "}
            <span className="text-rose-300">keahlian</span> saya
          </p>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div
            className="w-full lg:w-2/5 relative"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400/20 via-amber-400/20 to-rose-400/20 rounded-2xl opacity-30 group-hover:opacity-50 blur-md transition-all duration-300"></div>
              <div className="relative overflow-hidden rounded-xl shadow-2xl border-4 border-gray-700 transform rotate-1 group-hover:rotate-0 transition-all duration-500">
                <img
                  src={profileImage}
                  alt="Wahyu Puji Sasongko"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => (e.target.src = placeholderImage)}
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="w-full lg:w-3/5 space-y-6"
            variants={itemVariants}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-100">
              Wahyu Puji Sasongko
            </h3>
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-gradient-to-r from-teal-400 to-amber-400"></div>
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400 font-medium italic"
              >
                {currentRole}
              </motion.span>
            </div>

            <p className="text-gray-300 leading-relaxed pl-4 border-l-4 border-teal-400/50 bg-gray-800/50 p-4 rounded-r-lg">
              Halo! Saya seorang{" "}
              <span className="font-semibold text-teal-300">
                desainer grafis
              </span>{" "}
              dan{" "}
              <span className="font-semibold text-amber-300">copywriter</span>{" "}
              dengan passion menciptakan karya visual yang tidak hanya indah
              tetapi juga didukung oleh{" "}
              <span className="text-rose-300">pesan verbal yang kuat</span>.
              Saya percaya bahwa desain yang baik adalah perpaduan antara
              estetika, fungsi, dan narasi yang menyeluruh.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {HIGHLIGHTS.map((item, i) => (
                <HighlightCard key={i} {...item} />
              ))}
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mt-6">
              {SKILLS.map((skill, i) => (
                <SkillTag key={i} {...skill} />
              ))}
            </div>

            {/* Contact Links */}
            <div className="flex items-center gap-2 mt-8">
              {SOCIAL_LINKS.map((link, i) => (
                <SocialLink key={i} {...link} />
              ))}
            </div>

            <motion.div
              className="mt-10 flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400 italic"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="w-10 h-0.5 bg-gradient-to-r from-teal-400/50 to-amber-400/50"></div>
              <span className="text-sm md:text-base">
                Where design meets storytelling
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
