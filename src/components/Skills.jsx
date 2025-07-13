import React from "react";
import { motion } from "framer-motion";
import {
  SiNotion,
  SiCanva,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiWordpress,
} from "react-icons/si";
import { FiMessageSquare } from "react-icons/fi";

const skills = [
  {
    name: "Notion",
    icon: <SiNotion size={40} />,
    description: "Project management and documentation",
    proficiency: 85,
    color: "text-gray-300",
  },
  {
    name: "Canva",
    icon: <SiCanva size={40} />,
    description: "Quick design solutions and social media graphics",
    proficiency: 90,
    color: "text-teal-300",
  },
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop size={40} />,
    description: "Photo editing and digital artwork",
    proficiency: 95,
    color: "text-blue-300",
  },
  {
    name: "Illustrator",
    icon: <SiAdobeillustrator size={40} />,
    description: "Vector graphics and logo design",
    proficiency: 90,
    color: "text-orange-300",
  },
  {
    name: "InDesign",
    icon: <SiAdobeindesign size={40} />,
    description: "Print layouts and multi-page documents",
    proficiency: 85,
    color: "text-pink-300",
  },
  {
    name: "WordPress",
    icon: <SiWordpress size={40} />,
    description: "Website development and CMS",
    proficiency: 80,
    color: "text-blue-200",
  },
  {
    name: "Lightroom",
    icon: <SiAdobelightroom size={40} />,
    description: "Photo processing and batch editing",
    proficiency: 88,
    color: "text-blue-100",
  },
  {
    name: "Communication",
    icon: <FiMessageSquare size={40} />,
    description: "Client presentations and team collaboration",
    proficiency: 92,
    color: "text-indigo-300",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 bg-gray-800/50 p-8 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-blue-300">Design Skills</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Tools and abilities I use to bring creative visions to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-900/70 p-6 rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all"
              >
                <div className={`flex justify-center mb-4 ${skill.color}`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-white">
                  {skill.name}
                </h3>
                <p className="text-gray-300 text-center mb-4">
                  {skill.description}
                </p>

                <div className="mb-2 flex justify-between text-sm text-gray-400">
                  <span>Proficiency</span>
                  <span>{skill.proficiency}%</span>
                </div>

                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${skill.color.replace(
                      "text",
                      "bg"
                    )}`}
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 bg-gray-900/50 p-8 rounded-xl border border-gray-700 max-w-3xl mx-auto"
          >
            <div className="flex items-center">
              <div className="bg-blue-900/30 p-3 rounded-lg mr-4 border border-blue-400/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Continuous Learning
                </h3>
                <p className="text-gray-300">
                  I'm constantly expanding my skills with new design tools and
                  techniques. Currently mastering motion graphics and 3D design
                  to enhance my creative capabilities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
