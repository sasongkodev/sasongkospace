// src/components/Projects.jsx
import { useState, useEffect } from "react";
import { FiHeart, FiExternalLink, FiGithub, FiX, FiLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// Design projects by category
const designProjects = {
  Branding: [
    {
      id: 1,
      title: "Brand Identity for Coffee Haven",
      description:
        "Complete brand identity design for a premium coffee shop chain.",
      fullDescription:
        "Developed comprehensive brand identity for a specialty coffee chain with 12 locations across Indonesia. Created custom wordmark, iconography, packaging system, and interior branding elements with a color palette inspired by Indonesian coffee beans and traditional batik textiles.",
      year: 2023,
      imageUrl:
        "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
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
  ],
  "UI/UX": [
    {
      id: 2,
      title: "Fitness Tracker Mobile App",
      description: "User interface design for a fitness tracking application.",
      fullDescription:
        "Designed the complete UI/UX for a fitness tracking app with over 50,000 active users. Created a custom illustration system for workout categories and achievements.",
      year: 2022,
      imageUrl:
        "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      tags: ["Mobile Design", "User Experience", "Prototyping"],
      featured: false,
      client: "FitTrack Inc.",
      deliverables: ["UI Kit", "Prototypes", "Design System"],
    },
  ],
  Editorial: [
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
  ],
  Packaging: [
    {
      id: 4,
      title: "Organic Skincare Packaging",
      description: "Sustainable packaging system for an organic skincare line.",
      fullDescription:
        "Created minimalist designs using eco-friendly materials and printing techniques to reflect the brand's environmental values while maintaining premium appeal.",
      year: 2022,
      imageUrl:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      tags: ["Sustainable Design", "3D Mockups"],
      client: "Green Beauty Co.",
      deliverables: ["Primary Packaging", "Secondary Packaging"],
    },
  ],
};

// Kompasiana articles data
const kompasianaArticles = [
  {
    title: "Cara Jitu Bidik Biasiswa Luar Negeri",
    description: "Begini cara jitu bidik dan dapat beasiswa luar negeri.",
    image:
      "https://assets-a1.kompasiana.com/items/album/2021/06/26/vasily-koloda-8cqdvpuo-ki-unsplash-60d7458370620d3d6a205662.jpg?t=o&v=1200",
    url: "https://www.kompasiana.com/wahyupujis17/60d7466406310e2b17462492/cara-jitu-bidik-biasiswa-luar-negeri",
  },
  {
    title: "Lima Rasa Percaya Diri yang Perlu Kita Hindari",
    description:
      "Segala sesuatu yang berlebihan itu buruk, termasuk kepercayaan diri.",
    image:
      "https://assets-a1.kompasiana.com/items/album/2021/06/29/karl-magnuson-85j99sgggnw-unsplash-60db1497152510202b4a5ae2.jpg?t=o&v=1200",
    url: "https://www.kompasiana.com/wahyupujis17/60db157a06310e299f7d76d2/lima-rasa-percaya-diri-yang-perlu-kita-hindari",
  },
  {
    title: "Amunisi Wajib Seorang Backpacker",
    description: "Persiapan yang harus dimiliki oleh backpacker pemula",
    image:
      "https://assets-a1.kompasiana.com/items/album/2021/06/28/dokpri-60d8bcbcbb44860258311032.jpg?t=o&v=1200",
    url: "https://www.kompasiana.com/wahyupujis17/60d8bd4506310e1194338032/amunisi-wajib-seorang-backpacker",
  },
];

const ProjectCard = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(project)}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden cursor-pointer">
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          {project.category}
        </div>

        {/* Like Button */}
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

      {/* Project Details */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          <span className="text-sm text-gray-500">{project.year}</span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

        {/* Tags */}
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

        {/* Link indicator for copywriting projects */}
        {project.link && (
          <div className="flex items-center text-sm text-blue-600">
            <FiLink className="mr-1" />
            <span>Kompasiana Article</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectsList, setProjectsList] = useState([]);

  const categories = [
    "All",
    "Branding",
    "UI/UX",
    "Editorial",
    "Packaging",
    "Copywriting",
  ];

  useEffect(() => {
    // Combine all projects with their categories
    let allProjects = [];

    // Add design projects with their categories
    Object.entries(designProjects).forEach(([category, projects]) => {
      allProjects = [
        ...allProjects,
        ...projects.map((project) => ({
          ...project,
          category,
        })),
      ];
    });

    // Add copywriting articles
    const writingProjects = kompasianaArticles.map((article, i) => ({
      id: allProjects.length + i + 1,
      title: article.title,
      description: article.description,
      fullDescription: article.description,
      imageUrl: article.image,
      category: "Copywriting",
      year: 2021,
      tags: ["Artikel", "Kompasiana"],
      featured: false,
      client: "Kompasiana",
      deliverables: ["Online Article", "Content Writing"],
      link: article.url,
    }));

    setProjectsList([...allProjects, ...writingProjects]);
  }, []);

  const filteredProjects = projectsList.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Creative Portfolio</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my design projects and published articles.
          </p>
        </motion.div>

        {/* Filter Controls */}
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
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 shadow-sm"
              }`}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
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

      {/* Project Modal */}
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

// ProjectModal component remains the same as in your previous code
