// src/components/Contact.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPhone, FaRegEnvelope } from "react-icons/fa";
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
      href: "https://github.com/ ",
      icon: <FaGithub className="text-lg" />,
      label: "GitHub",
    },
    {
      href: "https://twitter.com/ ",
      icon: <FaTwitter className="text-lg" />,
      label: "Twitter",
    },
    {
      href: "https://linkedin.com/ ",
      icon: <FaLinkedin className="text-lg" />,
      label: "LinkedIn",
    },
  ];

  const contactInfo = [
    {
      icon: <FaRegEnvelope className="text-lg" />,
      title: "Email",
      value: "sapa@wahyupuji.com",
      link: "mailto:sapa@wahyupuji.com",
    },
    {
      icon: <FaPhone className="text-lg" />,
      title: "Phone",
      value: "+62 812-3456-7890",
      link: "tel:+6281234567890",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="w-full py-20 px-4 sm:px-6 bg-gray-50"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Section Title */}
        <motion.div className="mb-12 text-center" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="mt-3 text-gray-600 max-w-md mx-auto">
            Let's collaborate and create something amazing together
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Information */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6"
            variants={itemVariants}
          >
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center gap-4 text-gray-800">
                    <div
                      className="p-2 rounded-md bg-white shadow-sm text-[#0f3c4c]"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-600 hover:text-[#0f3c4c] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <h4 className="text-sm font-medium text-gray-500 mb-3">
                FOLLOW ME
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white shadow-sm text-gray-700 hover:text-[#0f3c4c] transition-colors"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="w-full lg:w-1/2" variants={itemVariants}>
            <form className="space-y-5">
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0f3c4c] focus:border-[#0f3c4c]"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0f3c4c] focus:border-[#0f3c4c]"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0f3c4c] focus:border-[#0f3c4c]"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full py-2.5 px-4 bg-[#0f3c4c] text-white font-medium rounded-md hover:bg-[#0d323f] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
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
