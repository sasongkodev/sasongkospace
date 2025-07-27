// src/components/Projects.jsx
import { useState, useEffect } from "react";
import { FiHeart, FiExternalLink, FiX, FiLink, FiFolder } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// Design projects by category
const designProjects = {
  "Desain Grafis": [
    {
      id: 1,
      title: "Desain Cover Buku Filsafat Komunikasi",
      description:
        "Cover buku akademik dengan pendekatan visual modern dan estetik",
      fullDescription:
        "Saya dipercaya untuk merancang cover buku 'Filsafat Komunikasi' karya dosen saya saat menjalani Kuliah Kerja Komunikasi. Desain ini merefleksikan nuansa akademik dengan pendekatan visual yang modern dan estetik, menyeimbangkan antara keseriusan topik filsafat dengan daya tarik visual.",
      year: 2022,
      imageUrl:
        "https://www.dropbox.com/scl/fi/5ej8nbwku5av7nr7duzg8/cover-buku.jpg?rlkey=jbiynyeo1e326lvu39p6dl9b3&st=eo7mdkh7&raw=1",
      tags: ["Book Design", "Typography", "Academic"],
      client: "Galuh Patria Publisher – Yogyakarta",
      deliverables: ["Book Cover Design"],
      dropboxUrl:
        "https://www.dropbox.com/scl/fi/5ej8nbwku5av7nr7duzg8/cover-buku.jpg?rlkey=jbiynyeo1e326lvu39p6dl9b3&dl=0",
    },
    {
      id: 2,
      title: "Layout Buku The Journey of Idekata",
      description: "Layout buku untuk komunitas penulisan muda",
      fullDescription:
        "Sebagai layout designer untuk buku 'The Journey of Idekata', saya bertanggung jawab menciptakan tata letak yang meningkatkan keterbacaan dan kenyamanan visual karya para penulis muda dalam komunitas tersebut. Desain ini memadukan elemen kreatif dengan struktur yang jelas untuk pengalaman membaca yang optimal.",
      year: 2021,
      imageUrl:
        "https://www.dropbox.com/scl/fi/p8ruesl1j5dbqnc919c2u/416shots_so.png?rlkey=7ullwaepktnl8pyxamunwf2bb&st=7kiibtdj&raw=1",
      tags: ["Layout Design", "Book Design", "Typography"],
      client: "Komunitas Penulisan Muda Idekata – UIN Sunan Kalijaga",
      deliverables: ["Book Layout", "Typesetting"],
      dropboxUrl:
        "https://www.dropbox.com/scl/fi/p8ruesl1j5dbqnc919c2u/416shots_so.png?rlkey=7ullwaepktnl8pyxamunwf2bb&dl=0",
    },
    {
      id: 3,
      title: "Banner Seminar Kebudayaan",
      description: "Banner promosi seminar kebudayaan",
      fullDescription:
        "Merancang banner untuk Seminar Kebudayaan yang diselenggarakan oleh HMPS Ilmu Komunikasi UIN Sunan Kalijaga. Desain ini bertujuan menarik partisipasi peserta dengan visual yang mencerminkan semangat akademik dan kebudayaan lokal, menggabungkan elemen tradisional dengan gaya modern.",
      year: 2021,
      imageUrl:
        "https://www.dropbox.com/scl/fi/qrv39ccjw7hjal1dr3voc/projeck.jpg?rlkey=m6l33f9djrwau8uj0qjpzb9ep&st=7qh1x0q9&raw=1",
      tags: ["Event Design", "Print Media", "Banner"],
      client: "HMPS Ilmu Komunikasi – UIN Sunan Kalijaga",
      deliverables: ["Seminar Banner"],
      dropboxUrl:
        "https://www.dropbox.com/scl/fi/qrv39ccjw7hjal1dr3voc/projeck.jpg?rlkey=m6l33f9djrwau8uj0qjpzb9ep&dl=0",
    },
    {
      id: 4,
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
      dropboxUrl:
        "https://www.dropbox.com/scl/fi/osh82a6nlaj4tmbj5ihba/kopi.jpeg?rlkey=jk1l70fdpeyn8azso2rbtvjlz&dl=0",
    },
    {
      id: 6,
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
      dropboxUrl:
        "https://www.dropbox.com/scl/fi/kscpimyobd0p7k4m0u3as/pack.jpeg?rlkey=5tqup4ksnj0u42lq76xrlr26i&dl=0",
    },
  ],
  "UI/UX": [
    {
      id: 7,
      title: "Desain Landing Page Drone",
      description: "UI design untuk produk drone",
      fullDescription:
        "Selama masa magang di BuildWithAngga, saya berkolaborasi dengan tim kreatif untuk merancang landing page produk drone. Proyek ini menekankan pada penyampaian fitur teknologi secara visual yang interaktif dan menarik, dengan fokus pada user experience dan conversion rate.",
      year: 2022,
      imageUrl:
        "https://www.dropbox.com/scl/fi/d99qww5hp0kas5s8dl03x/drone.webp?rlkey=gr3z6lqdpf1jtb2q6fit7fu2s&st=vxd2iqou&raw=1",
      tags: ["Web Design", "Landing Page", "Product Design"],
      client: "BuildWithAngga",
      deliverables: ["Landing Page Design", "UI Kit"],
      dropboxUrl:
        "https://www.dropbox.com/scl/fi/d99qww5hp0kas5s8dl03x/drone.webp?rlkey=gr3z6lqdpf1jtb2q6fit7fu2s&dl=0",
    },
    {
      id: 8,
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
      dropboxUrl:
        "https://www.dropbox.com/scl/fi/z7195xn4er4z7yeeswkbo/mobile.jpeg?rlkey=um0x5kmv29umza7dhyust5qox&dl=0",
    },
  ],
};

// Kompasiana articles data (Updated with provided data)
const kompasianaArticles = [
  {
    id: 9,
    title: "Upgrade Pola Pikirmu Sebelum 20 Tahun",
    description:
      "Image captionTidak ada manusia yang sempurna, semua orang tahu. Semua orang, termasuk Anda, pasti pernah melakukan kesalahan. Kesalahan ini disengaja&",
    imageUrl:
      "https://assets-a1.kompasiana.com/items/album/2021/06/18/rowan-chestnut-smas-uxg4l0-unsplash-60cc1438bb44863d855f2b85.jpg?t=o&v=1200",
    url: "https://www.kompasiana.com/wahyupujis17/60cc169c9f7b9d2e072adcf2/upgrade-pola-pikirmu-sebelum-20-tahun",
    year: 2021,
    tags: ["Pengembangan Diri"],
    category: "Copywriting",
    client: "Kompasiana",
    deliverables: ["Online Article"],
    fullDescription:
      "Tidak ada manusia yang sempurna, semua orang tahu. Semua orang, termasuk Anda, pasti pernah melakukan kesalahan. Kesalahan ini disengaja atau tidak, besar atau kecil, semua pasti pernah terjadi. Namun, bagaimana kita memandang dan belajar dari kesalahan tersebut yang akan menentukan arah hidup kita. Artikel ini membahas pentingnya meng-upgrade pola pikir sebelum memasuki usia 20 tahun untuk membangun fondasi yang kuat di masa depan.",
    readTime: "5 min read",
    publishedDate: "June 18, 2021",
  },
  {
    id: 10,
    title: "Cara Efektif Bangun Sosial Branding",
    description:
      "Berikut ini bebera cara untuk membangun personal branding secara efektif.",
    imageUrl:
      "https://assets-a1.kompasiana.com/items/album/2021/06/10/jeff-sheldon-9syokyrq-re-unsplash-60c1f831d541df385a5af612.jpg?t=o&v=1200",
    url: "https://www.kompasiana.com/wahyupujis17/60c1f91cd541df0b6a002622/cara-efektif-bangun-sosial-branding",
    year: 2021,
    tags: ["Karir", "Branding"],
    category: "Copywriting",
    client: "Kompasiana",
    deliverables: ["Online Article"],
    fullDescription:
      "Personal branding adalah cara Anda mempresentasikan diri dan nilai-nilai Anda kepada dunia, terutama dalam konteks profesional. Dalam era digital ini, membangun personal branding yang kuat sangat penting untuk membuka peluang karir dan jaringan yang luas. Artikel ini memberikan langkah-langkah praktis untuk membangun sosial branding Anda secara efektif.",
    readTime: "4 min read",
    publishedDate: "June 10, 2021",
  },
  {
    id: 11,
    title: "Kerugian Menggunakan Software Almunium",
    description:
      "Berikut bahaya menggunakan software bajakan di komputer dan software pengganti software alumunium",
    imageUrl:
      "https://assets-a1.kompasiana.com/items/album/2021/06/06/mikaela-shannon-cln6n30q3sw-unsplash-60bcc6698ede48558e3388d6.jpg?t=o&v=1200",
    url: "https://www.kompasiana.com/wahyupujis17/60bcc777d541df372b7b0af2/kerugian-menggunakan-software-almunium",
    year: 2021,
    tags: ["Teknologi", "Keamanan"],
    category: "Copywriting",
    client: "Kompasiana",
    deliverables: ["Online Article"],
    fullDescription:
      "Software bajakan atau sering disebut 'software aluminium' mungkin terlihat menguntungkan secara finansial di awal, tetapi penggunaannya menyimpan berbagai risiko serius. Artikel ini mengupas tuntas kerugian dan bahaya yang ditimbulkan oleh penggunaan software bajakan, serta memberikan alternatif software legal dan gratis yang bisa digunakan.",
    readTime: "6 min read",
    publishedDate: "June 6, 2021",
  },
  {
    id: 12,
    title: "Yuk Kenalan dengan Pomodoro",
    description:
      "Konsep teknik pomodoro Ialah Dalam menyelesaikan sebuah tugas dibagi dalam blok blok waktu selama 25 menit .",
    imageUrl:
      "https://assets-a1.kompasiana.com/items/album/2021/03/11/smart-timepiece-backlight-alarm-clock-jp9901-or-jam-alarm-white-1-6049fa80d541df545746c7d2.jpg?t=o&v=1200",
    url: "https://www.kompasiana.com/wahyupujis17/6049f920d541df65f374c604/yuk-kenalan-dengan-pomodoro",
    year: 2021,
    tags: ["Produktivitas", "Manajemen Waktu"],
    category: "Copywriting",
    client: "Kompasiana",
    deliverables: ["Online Article"],
    fullDescription:
      "Teknik Pomodoro adalah metode manajemen waktu yang dikembangkan oleh Francesco Cirillo pada akhir tahun 1980-an. Teknik ini menggunakan timer untuk membagi waktu kerja menjadi interval-interval, secara tradisional 25 menit kerja yang diselingi dengan jeda pendek. Artikel ini menjelaskan konsep teknik Pomodoro dan bagaimana menerapkannya untuk meningkatkan fokus dan produktivitas.",
    readTime: "3 min read",
    publishedDate: "March 11, 2021",
  },
  // Existing articles from the original file
  {
    id: 13,
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
    id: 14,
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
    id: 15,
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
  {
    id: 16,
    title:
      "5 AI Open Source Terbaik di 2025: Pilihan Teratas untuk Developer dan Data Scientist",
    description:
      "Temukan 5 AI open source terbaik di 2025, termasuk TensorFlow, PyTorch, DeepSeek AI, Hugging Face Transformers, dan OpenAI Whisper. Solusi AI gratis & canggih!",
    fullDescription:
      "Artikel ini membahas secara mendalam 5 framework AI open source terbaik di tahun 2025 yang wajib diketahui oleh developer dan data scientist. Kami mengulas fitur utama, kelebihan, dan penggunaan praktis dari masing-masing tools tersebut.",
    imageUrl:
      "https://ngobrolit.com/wp-content/uploads/2025/02/image-1024x576.png",
    tags: ["Teknologi", "AI", "Open Source"],
    year: 2025,
    category: "Copywriting",
    client: "NgobrolIT",
    deliverables: ["Online Article"],
    url: "https://ngobrolit.com/5-ai-open-source-terbaik-di-2025-pilihan-teratas-untuk-developer-dan-data-scientist/",
    readTime: "6 min read",
    publishedDate: "February 2025",
  },
  {
    id: 17,
    title: "Tips Jitu Mengatasi Mental Block Programmer di Tahun 2025",
    description:
      "Mental block saat ngoding bisa menghambat produktivitas programmer. Temukan cara mengatasi mental block dengan teknik relaksasi, pomodoro, dan strategi manajemen waktu yang efektif",
    fullDescription:
      "Artikel ini memberikan solusi praktis untuk mengatasi mental block yang sering dialami programmer. Kami membahas berbagai teknik mulai dari manajemen waktu, teknik relaksasi, hingga pendekatan psikologis untuk meningkatkan produktivitas coding.",
    imageUrl:
      "https://ngobrolit.com/wp-content/uploads/2025/01/Mental-Block.jpg",
    tags: ["Programming", "Produktivitas"],
    year: 2025,
    category: "Copywriting",
    client: "NgobrolIT",
    deliverables: ["Online Article"],
    url: "https://ngobrolit.com/tips-jitu-mengatasi-mental-block-programmer-di-tahun-2025/",
    readTime: "5 min read",
    publishedDate: "January 2025",
  },
  {
    id: 18,
    title: "Mengapa Blogger Sulit Menyaingi WordPress dalam Hal SEO?",
    description:
      "Search Engine Optimization (SEO) adalah serangkaian strategi dan teknik yang digunakan untuk meningkatkan visibilitas suatu situs web di mesin pencari, seperti Google.",
    fullDescription:
      "Analisis mendalam tentang perbedaan kemampuan SEO antara platform Blogger dan WordPress. Artikel ini membahas faktor teknis, fleksibilitas, dan fitur-fitur yang membuat WordPress unggul dalam hal optimasi mesin pencari.",
    imageUrl: "https://ngobrolit.com/wp-content/uploads/2024/12/seo.jpg",
    tags: ["SEO", "Blogging"],
    year: 2024,
    category: "Copywriting",
    client: "NgobrolIT",
    deliverables: ["Online Article"],
    url: "https://ngobrolit.com/mengapa-blogger-sulit-menyaingi-wordpress-dalam-hal-seo/",
    readTime: "7 min read",
    publishedDate: "December 2024",
  },
  {
    id: 19,
    title:
      "Inilah Mengapa Python Tetap Menjadi Bahasa Pemrograman Terbaik untuk Dipelajari di 2025",
    description:
      "Pelajari mengapa Python tetap menjadi bahasa pemrograman terbaik untuk dipelajari di tahun 2025. Mudah dipelajari, serbaguna, dan relevan untuk karir teknologi masa depan.",
    fullDescription:
      "Pembahasan komprehensif tentang keunggulan Python di tahun 2025. Artikel ini mencakup perkembangan terbaru Python, aplikasinya di berbagai bidang seperti AI, data science, dan web development, serta prospek karir untuk pengembang Python.",
    imageUrl: "https://ngobrolit.com/wp-content/uploads/2025/01/image.png",
    tags: ["Programming", "Python"],
    year: 2025,
    category: "Copywriting",
    client: "NgobrolIT",
    deliverables: ["Online Article"],
    url: "https://ngobrolit.com/python-bahasa-pemrograman-terbaik-2025/",
    readTime: "8 min read",
    publishedDate: "January 2025",
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
            <span>Read Article</span>
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
        {/* Tombol untuk membuka project di Dropbox */}
        {project.dropboxUrl && (
          <a
            href={project.dropboxUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-md"
          >
            <FiFolder className="w-5 h-5 mr-2" />
            Lihat Project di Dropbox
          </a>
        )}
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
          Baca Artikel Lengkap
        </a>
      </div>
    </div>
  </div>
);

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All"); // Default to "All"
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectsList, setProjectsList] = useState([]);

  // Include "All" in the categories array
  const categories = ["All", "Desain Grafis", "UI/UX", "Copywriting"];

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

  // Filter projects based on activeFilter
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
          {/* Render buttons for all categories including "All" */}
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeFilter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-sm"
              }`}
              onClick={() => setActiveFilter(category)} // Set filter to "All", "Desain Grafis", etc.
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
          {/* Map through filteredProjects */}
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
