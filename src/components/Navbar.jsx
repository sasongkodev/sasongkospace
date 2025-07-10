import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo / Brand */}
        <motion.a
          href="#home"
          className="text-2xl font-bold tracking-tight text-white font-montserrat flex items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setActiveLink("#home")}
        >
          <span className="bg-white/20 p-2 rounded-lg mr-2">
            <span className="text-white">WPS</span>
          </span>
          <span className="text-white/90">Portfolio</span>
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                className={`relative px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                  activeLink === link.href
                    ? "bg-white text-blue-600"
                    : "text-white hover:bg-white/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveLink(link.href)}
              >
                {link.label}
                {activeLink === link.href && (
                  <motion.span
                    layoutId="navActive"
                    className="absolute inset-0 rounded-full border-2 border-white"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <motion.button
          className="md:hidden p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {open ? (
            <HiX className="w-6 h-6 text-white" />
          ) : (
            <HiMenuAlt3 className="w-6 h-6 text-white" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          className="md:hidden bg-gradient-to-b from-blue-600 to-purple-700 shadow-xl"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <motion.li
                key={link.href}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={link.href}
                  className={`block w-full px-4 py-3 rounded-lg font-medium transition-colors ${
                    activeLink === link.href
                      ? "bg-white text-blue-600"
                      : "text-white hover:bg-white/20"
                  }`}
                  onClick={() => {
                    setOpen(false);
                    setActiveLink(link.href);
                  }}
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
