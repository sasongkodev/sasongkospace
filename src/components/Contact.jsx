// src/components/Contact.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
  FaBehance,
  FaDribbble,
} from "react-icons/fa6";

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const socialLinks = [
    {
      href: "https://github.com/",
      icon: <FaGithub />,
      label: "GitHub",
      color: "hover:bg-gray-600",
    },
    {
      href: "https://dribbble.com/",
      icon: <FaDribbble />,
      label: "Dribbble",
      color: "hover:bg-pink-400/10 text-pink-400",
    },
    {
      href: "https://behance.net/",
      icon: <FaBehance />,
      label: "Behance",
      color: "hover:bg-blue-400/10 text-blue-400",
    },
    {
      href: "https://www.linkedin.com/in/wahyu-puji-sasongko-435a24207/",
      icon: <FaLinkedin />,
      label: "LinkedIn",
      color: "hover:bg-sky-400/10 text-sky-400",
    },
    {
      href: "mailto:sapa@wahyupuji.com",
      icon: <FaRegEnvelope />,
      label: "Email",
      color: "hover:bg-gray-600 text-gray-300",
    },
  ];

  const contactInfo = [
    {
      icon: <FaRegEnvelope className="text-xl" />,
      title: "Email",
      value: "sapa@wahyupuji.com",
      link: "mailto:sapa@wahyupuji.com",
      color: "text-teal-400",
    },
    {
      icon: <FaPhone className="text-xl" />,
      title: "Telepon",
      value: "+62 812-3456-7890",
      link: "tel:+6281234567890",
      color: "text-amber-400",
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Lokasi",
      value: "Yogyakarta, Indonesia",
      color: "text-rose-400",
    },
    {
      icon: <FaClock className="text-xl" />,
      title: "Jam Kerja",
      value: "Senin - Jumat, 09:00 - 17:00 WIB",
      color: "text-indigo-400",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-20 px-4 sm:py-28 sm:px-6 overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Section Title */}
        <motion.div className="mb-16 text-center" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 relative inline-block">
            <span className="relative z-10">
              Hubungi <span className="text-teal-400">Saya</span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400/30 via-amber-400/30 to-rose-400/30 -z-10"></span>
          </h2>
          <p className="mt-4 text-gray-400">
            Mari berkolaborasi dan ciptakan sesuatu yang menakjubkan
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <motion.div
            className="w-full lg:w-1/2 space-y-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-gray-100">
              Informasi Kontak
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className={`flex items-center gap-4 ${item.color}`}>
                    <div className="p-3 rounded-full bg-gray-700/50">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300">
                        {item.title}
                      </h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-400 hover:text-teal-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-400">{item.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-medium text-gray-300 mb-4">
                Temui Saya Di
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-full bg-gray-800 border border-gray-700 text-xl transition-colors ${link.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
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
            <form className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700 space-y-6">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">
                Kirim Pesan
              </h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-gray-200"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-gray-200"
                    placeholder="Masukkan email Anda"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-gray-200"
                    placeholder="Apa yang ingin Anda bicarakan?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-gray-200"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Kirim Pesan
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
