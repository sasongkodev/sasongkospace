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
    icon: <SiNotion size={24} />,
    description: "Project management and documentation",
    proficiency: 85,
    color: "from-gray-500 to-gray-400",
  },
  {
    name: "Canva",
    icon: <SiCanva size={24} />,
    description: "Quick design solutions and social media graphics",
    proficiency: 90,
    color: "from-teal-500 to-teal-400",
  },
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop size={24} />,
    description: "Photo editing and digital artwork",
    proficiency: 95,
    color: "from-blue-500 to-blue-400",
  },
  {
    name: "Illustrator",
    icon: <SiAdobeillustrator size={24} />,
    description: "Vector graphics and logo design",
    proficiency: 90,
    color: "from-orange-500 to-orange-400",
  },
  {
    name: "InDesign",
    icon: <SiAdobeindesign size={24} />,
    description: "Print layouts and multi-page documents",
    proficiency: 85,
    color: "from-pink-500 to-pink-400",
  },
  {
    name: "WordPress",
    icon: <SiWordpress size={24} />,
    description: "Website development and CMS",
    proficiency: 80,
    color: "from-blue-400 to-blue-300",
  },
  {
    name: "Lightroom",
    icon: <SiAdobelightroom size={24} />,
    description: "Photo processing and batch editing",
    proficiency: 88,
    color: "from-blue-300 to-blue-200",
  },
  {
    name: "Communication",
    icon: <FiMessageSquare size={24} />,
    description: "Client presentations and team collaboration",
    proficiency: 92,
    color: "from-indigo-500 to-indigo-400",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 bg-white">
      {/* Content */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-200 shadow-sm hover:shadow-md transition-all"
            >
              <div
                className={`flex justify-center mb-4 p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white`}
              >
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-900">
                {skill.name}
              </h3>
              <p className="text-gray-600 text-center mb-4 text-sm">
                {skill.description}
              </p>

              <div className="mb-2 flex justify-between text-xs text-gray-500">
                <span>Proficiency</span>
                <span>{skill.proficiency}%</span>
              </div>

              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
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
          className="mt-16 bg-blue-50 p-8 rounded-xl border border-blue-100 max-w-3xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <div className="bg-blue-100 p-3 rounded-lg mb-4 sm:mb-0 sm:mr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Continuous Learning
              </h3>
              <p className="text-gray-600">
                I'm constantly expanding my skills with new design tools and
                techniques. Currently mastering motion graphics and 3D design to
                enhance my creative capabilities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
