// src/components/Contact.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaRegEnvelope, FaPaperPlane } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  const socialLinks = [
    {
      href: "https://https://github.com/sasongkodev.com/",
      icon: <FaGithub className="text-lg" />,
      label: "GitHub",
    },
    // {
    //   href: "https://twitter.com/",
    //   icon: <FaTwitter className="text-lg" />,
    //   label: "Twitter",
    // },
    {
      href: "https://www.linkedin.com/in/wahyu-puji-sasongko-435a24207/",
      icon: <FaLinkedin className="text-lg" />,
      label: "LinkedIn",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="w-full py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Section Title */}
        <motion.div className="mb-16 text-center" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-md mx-auto">
            Have a project in mind or want to collaborate? Drop me a message!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Email Information */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start"
            variants={itemVariants}
          >
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 w-full max-w-md">
              <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
                <div className="p-3 mb-4 rounded-full bg-teal-50 text-teal-500">
                  <FaRegEnvelope className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Email Me
                </h3>
                <a
                  href="mailto:sapa@wahyupuji.com"
                  className="text-lg text-teal-600 hover:text-teal-700 transition-colors font-medium mb-6"
                >
                  sapa@wahyupuji.com
                </a>
                <p className="text-gray-500 mb-6">
                  I typically respond within 24 hours. Looking forward to
                  hearing from you!
                </p>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-sm font-medium text-gray-500 mb-4 text-center lg:text-left">
                  OR CONNECT VIA
                </h4>
                <div className="flex justify-center lg:justify-start gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-50 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={link.label}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="w-full lg:w-1/2" variants={itemVariants}>
            <form className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
                  placeholder="Hello, I'd like to discuss..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 px-6 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors flex items-center justify-center gap-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
