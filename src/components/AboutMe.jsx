// src/components/AboutMe.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { FiLayout, FiPenTool, FiTag, FiLayers, FiType } from "react-icons/fi";
import { FaPaintBrush, FaSwatchbook } from "react-icons/fa";

// HighlightCard component
const HighlightCard = ({ icon, text, desc }) => (
  <motion.div
    className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    whileHover={{ y: -3 }}
  >
    <div className="p-2 bg-blue-50 rounded-full">{icon}</div>
    <div>
      <h4 className="font-medium text-gray-800">{text}</h4>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  </motion.div>
);

// SkillTag component
const SkillTag = ({ name, icon }) => (
  <motion.span
    className="px-4 py-2 bg-white text-blue-700 rounded-full text-sm font-medium shadow-sm cursor-pointer flex items-center gap-2 hover:shadow-md transition-all"
    whileHover={{
      scale: 1.05,
      backgroundColor: "#3B82F6",
      color: "#FFFFFF",
    }}
  >
    {icon}
    {name}
  </motion.span>
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

// Constants
const ROLES = ["Desainer Grafis", "Illustrator", "Brand Specialist"];

const HIGHLIGHTS = [
  {
    icon: <FaPaintBrush className="text-blue-500 text-xl" />,
    text: "Desain yang bersih & estetis",
    desc: "Fokus pada kesederhanaan dan keindahan visual",
  },
  {
    icon: <FiLayout className="text-blue-500 text-xl" />,
    text: "Komunikasi visual efektif",
    desc: "Penyampaian pesan melalui desain yang kuat",
  },
  {
    icon: <FaSwatchbook className="text-blue-500 text-xl" />,
    text: "Solusi branding kreatif",
    desc: "Identitas visual yang konsisten dan memorable",
  },
  {
    icon: <FiLayers className="text-blue-500 text-xl" />,
    text: "Pengalaman UI/UX Design",
    desc: "Desain yang berpusat pada pengguna",
  },
];

const SKILLS = [
  { name: "Branding", icon: <FiTag size={14} /> },
  { name: "UI Design", icon: <FiLayout size={14} /> },
  { name: "Illustration", icon: <FiPenTool size={14} /> },
  { name: "Typography", icon: <FiType size={14} /> },
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
      className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-white py-20 px-4 sm:py-28 sm:px-6 overflow-hidden"
    >
      {/* Blob background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Title */}
        <motion.div className="mb-16 text-center" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 relative inline-block">
            <span className="relative z-10">
              Tentang <span className="text-blue-600">Saya</span>
            </span>
          </h2>
          <p className="mt-4 text-gray-500">
            Mengenal lebih dekat kreativitas saya
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
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-30 group-hover:opacity-50 blur-md transition-all duration-300"></div>
              <div className="relative overflow-hidden rounded-xl shadow-2xl border-4 border-white transform rotate-1 group-hover:rotate-0 transition-all duration-500">
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
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Wahyu Puji Sasongko
            </h3>
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-blue-400"></div>
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
                className="text-blue-600 font-medium italic"
              >
                {currentRole}
              </motion.span>
            </div>

            <p className="text-gray-600 leading-relaxed pl-4 border-l-4 border-blue-300 bg-blue-50/50 p-4 rounded-r-lg">
              Halo! Saya seorang{" "}
              <span className="font-semibold text-blue-600">
                desainer grafis
              </span>{" "}
              dengan passion menciptakan karya visual yang tidak hanya indah
              tetapi juga menyampaikan pesan dengan kuat. Saya percaya bahwa
              desain yang baik adalah perpaduan antara estetika dan fungsi.
            </p>

            {/* Highlight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {HIGHLIGHTS.map((item, i) => (
                <HighlightCard key={i} {...item} />
              ))}
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-3 mt-6">
              {SKILLS.map((skill, i) => (
                <SkillTag key={i} {...skill} />
              ))}
            </div>

            <motion.div
              className="mt-10 flex items-center gap-3 text-blue-400 italic"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="w-10 h-0.5 bg-blue-200"></div>
              <span className="text-sm md:text-base">
                Creating meaningful visual experiences
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
