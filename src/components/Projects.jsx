// src/components/Projects.jsx
import { useState, useEffect } from "react";
import { FiHeart, FiExternalLink, FiGithub, FiX, FiLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// Design projects by category
const designProjects = {
  "Desain Grafis": [
    {
      id: 1,
      title: "Brand Identity for Coffee Haven",
      description:
        "Complete brand identity design for a premium coffee shop chain.",
      fullDescription:
        "Developed comprehensive brand identity for a specialty coffee chain with 12 locations across Indonesia. Created custom wordmark, iconography, packaging system, and interior branding elements with a color palette inspired by Indonesian coffee beans and traditional batik textiles.",
      year: 2023,
      imageUrl:
        "https://www.dropbox.com/scl/fi/osh82a6nlaj4tmbj5ihba/kopi.jpeg?rlkey=jk1l70fdpeyn8azso2rbtvjlz&raw=1",
      tags: ["Logo Design", "Packaging", "Visual Identity"],
      featured: true,
      colorPalette: [
        { hex: "#3E2723", name: "Coffee Bean" },
        { hex: "#8D6E63", name: "Light Brown" },
        { hex: "#D7CCC8", name: "Sand" },
        { hex: "#5D4037", name: "Dark Brown" },
        { hex: "#A1887F", name: "Taupe" },
      ],
      client: "Coffee Haven",
      deliverables: [
        "Logo",
        "Brand Guidelines",
        "Packaging System",
        "Merchandise",
      ],
    },
    {
      id: 3,
      title: "Fashion Magazine Design",
      description:
        "Art direction and layout design for a quarterly fashion magazine.",
      fullDescription:
        "Developed a bold typographic system and innovative grid layouts to showcase high-fashion photography for a leading Indonesian fashion publication.",
      year: 2023,
      imageUrl:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      tags: ["Layout Design", "Typography", "Art Direction"],
      featured: true,
      client: "Vogue Indonesia",
      deliverables: ["Magazine Layouts", "Editorial Spreads"],
    },
    {
      id: 4,
      title: "Malindo Food Pack",
      description: "Malindo Food Pack",
      fullDescription:
        "Created minimalist designs using eco-friendly materials and printing techniques to reflect the brand's environmental values while maintaining premium appeal.",
      year: 2022,
      imageUrl:
        "https://www.dropbox.com/scl/fi/kscpimyobd0p7k4m0u3as/pack.jpeg?rlkey=5tqup4ksnj0u42lq76xrlr26i&raw=1",
      tags: ["Sustainable Design", "3D Mockups"],
      client: "Green Beauty Co.",
      deliverables: ["Primary Packaging", "Secondary Packaging"],
    },
  ],
  "UI/UX": [
    {
      id: 2,
      title: "Tajuk Tani Mobile App UI/UX",
      description: "Tajuk Tani application design with modern interface",
      fullDescription:
        "Designed a complete Tani app UI with booking system, itinerary planner, and social features. Created a custom illustration system for destinations and activities.",
      year: 2023,
      imageUrl:
        "https://www.dropbox.com/scl/fi/z7195xn4er4z7yeeswkbo/mobile.jpeg?rlkey=um0x5kmv29umza7dhyust5qox&raw=1",
      tags: ["Mobile Design", "User Experience", "Prototyping"],
      featured: false,
      client: "TravelGo Inc.",
      deliverables: ["UI Kit", "Prototypes", "Design System"],
    },
  ],
};

// Kompasiana articles data
const kompasianaArticles = [
  {
    id: 5,
    title: "Cara Jitu Bidik Biasiswa Luar Negeri",
    description: "Begini cara jitu bidik dan dapat beasiswa luar negeri.",
    fullDescription:
      "Artikel ini membahas strategi lengkap untuk mendapatkan beasiswa ke luar negeri, mulai dari persiapan dokumen hingga tips wawancara. Berdasarkan pengalaman pribadi penulis yang berhasil mendapatkan beasiswa ke 3 universitas berbeda di Eropa.",
    imageUrl:
      "https://assets-a1.kompasiana.com/items/album/2021/06/26/vasily-koloda-8cqdvpuo-ki-unsplash-60d7458370620d3d6a205662.jpg?t=o&v=1200",
    tags: ["Pendidikan", "Beasiswa"],
    year: 2021,
    category: "Copywriting",
    client: "Kompasiana",
    deliverables: ["Online Article"],
    url: "https://www.kompasiana.com/wahyupujis17/60d7466406310e2b17462492/cara-jitu-bidik-biasiswa-luar-negeri",
    readTime: "5 min read",
    publishedDate: "June 26, 2021",
  },
  {
    id: 6,
    title: "Lima Rasa Percaya Diri yang Perlu Kita Hindari",
    description:
      "Segala sesuatu yang berlebihan itu buruk, termasuk kepercayaan diri.",
    fullDescription:
      "Artikel ini mengupas lima jenis kepercayaan diri berlebihan yang justru bisa merugikan diri sendiri dan hubungan dengan orang lain. Dilengkapi dengan contoh kasus dan solusi untuk menyeimbangkan kepercayaan diri.",
    imageUrl:
      "https://assets-a1.kompasiana.com/items/album/2021/06/29/karl-magnuson-85j99sgggnw-unsplash-60db1497152510202b4a5ae2.jpg?t=o&v=1200",
    tags: ["Psikologi", "Pengembangan Diri"],
    year: 2021,
    category: "Copywriting",
    client: "Kompasiana",
    deliverables: ["Online Article"],
    url: "https://www.kompasiana.com/wahyupujis17/60db157a06310e299f7d76d2/lima-rasa-percaya-diri-yang-perlu-kita-hindari",
    readTime: "4 min read",
    publishedDate: "June 29, 2021",
  },
  {
    id: 7,
    title: "Amunisi Wajib Seorang Backpacker",
    description: "Persiapan yang harus dimiliki oleh backpacker pemula",
    fullDescription:
      "Panduan lengkap untuk backpacker pemula yang ingin melakukan perjalanan mandiri. Berisi daftar perlengkapan wajib, tips mengatur budget, dan strategi packing yang efisien berdasarkan pengalaman penjelajahan ke 15 negara.",
    imageUrl:
      "https://assets-a1.kompasiana.com/items/album/2021/06/28/dokpri-60d8bcbcbb44860258311032.jpg?t=o&v=1200",
    tags: ["Traveling", "Backpacker"],
    year: 2021,
    category: "Copywriting",
    client: "Kompasiana",
    deliverables: ["Online Article"],
    url: "https://www.kompasiana.com/wahyupujis17/60d8bd4506310e1194338032/amunisi-wajib-seorang-backpacker",
    readTime: "6 min read",
    publishedDate: "June 28, 2021",
  },
];

const ProjectCard = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200"
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(project)}
    >
      <div className="relative h-64 overflow-hidden cursor-pointer">
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.5 }}
        />

        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          {project.category}
        </div>

        <button
          className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-colors ${
            isLiked
              ? "bg-pink-600/90 text-white"
              : "bg-white/90 text-gray-700 hover:bg-pink-600/90 hover:text-white"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
        >
          <FiHeart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
        </button>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          <span className="text-sm text-gray-500">{project.year}</span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.url && (
          <div className="flex items-center text-sm text-blue-600">
            <FiLink className="mr-1" />
            <span>Kompasiana Article</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-2"
          onClick={onClose}
        >
          <FiX className="w-6 h-6" />
        </button>

        <div className="p-8">
          {project.category === "Copywriting" ? (
            <ArticleContent project={project} />
          ) : (
            <DesignContent project={project} />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const DesignContent = ({ project }) => (
  <div className="space-y-8">
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="rounded-lg w-full h-auto shadow-lg"
        />
      </div>
      <div className="md:w-1/2">
        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
        <p className="text-gray-700 mt-2">{project.fullDescription}</p>

        <div className="mt-6">
          <h4 className="text-lg font-medium text-gray-900 mb-4">
            Project Details
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500 text-sm">Client</p>
              <p className="text-gray-900">{project.client}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Year</p>
              <p className="text-gray-900">{project.year}</p>
            </div>
            <div className="col-span-2">
              <p className="text-gray-500 text-sm">Deliverables</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.deliverables.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {project.colorPalette && (
      <div className="mt-8">
        <h4 className="text-xl font-bold text-gray-900 mb-4">Color Palette</h4>
        <div className="grid grid-cols-5 gap-4">
          {project.colorPalette.map((color, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className="w-full h-16 rounded-lg mb-2 border border-gray-300"
                style={{ backgroundColor: color.hex }}
              />
              <p className="text-gray-900 text-sm">{color.name}</p>
              <p className="text-gray-500 text-xs">{color.hex}</p>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

const ArticleContent = ({ project }) => (
  <div className="space-y-6">
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/3">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="rounded-lg w-full h-auto shadow-lg"
        />
      </div>
      <div className="md:w-2/3">
        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
        <div className="flex items-center gap-4 mt-2 text-gray-500 text-sm">
          <span>{project.publishedDate}</span>
          <span>•</span>
          <span>{project.readTime}</span>
        </div>
        <p className="text-gray-700 mt-4">{project.fullDescription}</p>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white transition-colors"
        >
          <FiExternalLink className="mr-2" />
          Baca Artikel Lengkap di Kompasiana
        </a>
      </div>
    </div>
  </div>
);

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Desain Grafis");
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectsList, setProjectsList] = useState([]);

  const categories = ["Desain Grafis", "UI/UX", "Copywriting"];

  useEffect(() => {
    let allProjects = [];
    Object.entries(designProjects).forEach(([category, projects]) => {
      allProjects = [
        ...allProjects,
        ...projects.map((project) => ({
          ...project,
          category,
        })),
      ];
    });

    // Add copywriting articles with their category
    const writingProjects = kompasianaArticles.map((article) => ({
      ...article,
      category: "Copywriting",
    }));

    setProjectsList([...allProjects, ...writingProjects]);
  }, []);

  const filteredProjects = projectsList.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Creative Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my design projects and published articles.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeFilter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-sm"
              }`}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
