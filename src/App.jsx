import React, { useState } from "react";
import { motion } from "framer-motion";

// Cambia por tus imágenes en /public
const FOTO_PERFIL = "/sergio.jpg";
const FOTO_PREMIO = "/campeon_genera.jpg";

const content = {
  es: {
    nav: ["Sobre mí", "Proyectos", "Contacto"],
    hero: {
      name: "Sergio Sabater Ruiz",
      subtitle: "Ingeniería Telemática · IA & Desarrollo",
      mail: "✉️",
      linkedin: "LinkedIn",
    },
    about: {
      title: "Sobre mí",
      desc: "Estudiante de Ingeniería Telemática, especializado en IA, desarrollo y emprendimiento tecnológico. Me encanta aprender, crear soluciones y trabajar en equipo para dejar huella en el mundo digital.",
    },
    blocks: [
      {
        title: "Experiencia",
        content: (
          <>
            <div className="mb-4">
              <div className="font-semibold">Monitor de Ocio y Tiempo Libre (Prácticas)</div>
              <div className="text-sm text-[#1a8cff]">IMC Meliana · Jul 2019</div>
              <ul className="list-disc pl-5 text-[#2b3648] text-sm mt-1">
                <li>Dinamización de actividades deportivas y educativas</li>
                <li>Supervisión y trabajo con grupos infantiles</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Voluntario Escuela de Verano</div>
              <div className="text-sm text-[#1a8cff]">IMC Meliana · 2017-2018</div>
              <ul className="list-disc pl-5 text-[#2b3648] text-sm mt-1">
                <li>Organización de talleres y juegos educativos</li>
                <li>Apoyo al equipo de monitores</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        title: "Educación",
        content: (
          <>
            <div className="mb-2">
              <div className="font-semibold">Grado en Ingeniería Telemática</div>
              <div className="text-sm text-[#1a8cff]">Universitat de València · 2021-2025</div>
              <div className="text-sm">Redes, programación, sistemas distribuidos y telecomunicaciones</div>
            </div>
            <div className="mb-2">
              <div className="font-semibold">Diploma en Inteligencia Artificial</div>
              <div className="text-sm text-[#1a8cff]">Samsung Innovation Campus (UPV) · 2025</div>
              <div className="text-sm">Python, estadística, machine learning, deep learning, LLM</div>
            </div>
            <div className="mb-2">
              <div className="font-semibold">Curso Challenges in Data Science</div>
              <div className="text-sm text-[#1a8cff]">Universitat de València · 2024</div>
              <div className="text-sm">Big Data, AI, startups y comunicación</div>
            </div>
            <div>
              <div className="font-semibold">Emprendimiento UVemprén</div>
              <div className="text-sm text-[#1a8cff]">Universitat de València · 2024</div>
            </div>
          </>
        ),
      },
    ],
    skills: "Skills",
    softSkills: "Soft Skills",
    softList: ["Resolución de problemas", "Aprendizaje autónomo", "Trabajo en equipo", "Iniciativa y creatividad"],
    languages: "Idiomas",
    langList: ["Español (nativo)", "Valenciano (nativo)", "Inglés (B2 certificado)"],
    projects: "Proyectos",
    certs: "Certificaciones",
    projectCard: {
      title: "AIntegra Limited",
      dev: "(en desarrollo)",
      desc: "Solución tecnológica inclusiva para integración social y laboral mediante IA y accesibilidad digital.",
    },
    certList: [
      "Python Essentials - Banco Santander",
      "Testing e Integración Continua - Capgemini",
    ],
    awards: "🏆 Premios y Reconocimientos",
    award1: {
      title: "Ganador Concurso Gennera - UV",
      year: "(2025)",
      desc: "Premio al mejor proyecto universitario de reto empresarial.",
    },
    award2: {
      title: "3er puesto MOTIVEM Fest - UV",
      year: "(2024)",
      desc: "Reconocimiento a idea innovadora en emprendimiento universitario.",
    },
    premioFoto: "Sergio Sabater Ruiz recibiendo el premio Gennera",
    footer: "Web hecha con React, Tailwind y Framer Motion",
  },
  en: {
    nav: ["About me", "Projects", "Contact"],
    hero: {
      name: "Sergio Sabater Ruiz",
      subtitle: "Telematics Engineering · AI & Development",
      mail: "✉️",
      linkedin: "LinkedIn",
    },
    about: {
      title: "About me",
      desc: "Telematics Engineering student, specialized in AI, development and tech entrepreneurship. I love learning, creating solutions and working in teams to make an impact in the digital world.",
    },
    blocks: [
      {
        title: "Experience",
        content: (
          <>
            <div className="mb-4">
              <div className="font-semibold">Leisure and Free Time Monitor (Internship)</div>
              <div className="text-sm text-[#1a8cff]">IMC Meliana · Jul 2019</div>
              <ul className="list-disc pl-5 text-[#2b3648] text-sm mt-1">
                <li>Organization of sports and educational activities</li>
                <li>Supervision and work with children groups</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Summer School Volunteer</div>
              <div className="text-sm text-[#1a8cff]">IMC Meliana · 2017-2018</div>
              <ul className="list-disc pl-5 text-[#2b3648] text-sm mt-1">
                <li>Organization of workshops and educational games</li>
                <li>Support to the monitors team</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        title: "Education",
        content: (
          <>
            <div className="mb-2">
              <div className="font-semibold">Degree in Telematics Engineering</div>
              <div className="text-sm text-[#1a8cff]">Universitat de València · 2021-2025</div>
              <div className="text-sm">Networks, programming, distributed systems and telecommunications</div>
            </div>
            <div className="mb-2">
              <div className="font-semibold">Diploma in Artificial Intelligence</div>
              <div className="text-sm text-[#1a8cff]">Samsung Innovation Campus (UPV) · 2025</div>
              <div className="text-sm">Python, statistics, machine learning, deep learning, LLM</div>
            </div>
            <div className="mb-2">
              <div className="font-semibold">Course Challenges in Data Science</div>
              <div className="text-sm text-[#1a8cff]">Universitat de València · 2024</div>
              <div className="text-sm">Big Data, AI, startups and communication</div>
            </div>
            <div>
              <div className="font-semibold">Entrepreneurship UVemprén</div>
              <div className="text-sm text-[#1a8cff]">Universitat de València · 2024</div>
            </div>
          </>
        ),
      },
    ],
    skills: "Skills",
    softSkills: "Soft Skills",
    softList: ["Problem solving", "Self-learning", "Teamwork", "Initiative and creativity"],
    languages: "Languages",
    langList: ["Spanish (native)", "Valencian (native)", "English (B2 certified)"],
    projects: "Projects",
    certs: "Certifications",
    projectCard: {
      title: "AIntegra Limited",
      dev: "(in development)",
      desc: "Inclusive tech solution for social and work integration through AI and digital accessibility.",
    },
    certList: [
      "Python Essentials - Banco Santander",
      "Testing and Continuous Integration - Capgemini",
    ],
    awards: "🏆 Awards and Recognitions",
    award1: {
      title: "Winner Gennera Contest - UV",
      year: "(2025)",
      desc: "Award for the best university business challenge project.",
    },
    award2: {
      title: "3rd place MOTIVEM Fest - UV",
      year: "(2024)",
      desc: "Recognition for innovative idea in university entrepreneurship.",
    },
    premioFoto: "Sergio Sabater Ruiz receiving the Gennera award",
    footer: "Website made with React, Tailwind and Framer Motion",
  }
};

export default function App() {
  const [lang, setLang] = useState("es");
  const [showContact, setShowContact] = useState(false);
  const t = content[lang];

  // Animación para las chips
  const chipVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: i => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.04, type: "spring", stiffness: 500 }
    }),
  };

  return (
    <div className="min-h-screen transition-colors bg-gradient-to-br from-[#e0f2fe] via-[#f8fafc] to-[#e0e7ff]">
      {/* Fondo decorativo blobs */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 pointer-events-none"
      >
        <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-[#1a8cff]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-[#ffc300]/20 rounded-full blur-2xl" />
        <div className="absolute top-[40%] left-[-80px] w-[180px] h-[180px] bg-[#195799]/10 rounded-full blur-2xl" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-md border-b border-[#e0f2fe] transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-2xl">🌐</span>
            <span className="text-lg sm:text-xl font-extrabold text-[#2563eb] tracking-tight drop-shadow-sm">Sergio Sabater</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-3">
            <a href="#sobre-mi" className="relative px-2 sm:px-3 py-1 rounded-lg font-semibold text-[#2563eb] hover:bg-[#e0f2fe] transition-colors duration-200 text-sm sm:text-base">
              {t.nav[0]}
            </a>
            <a href="#proyectos" className="relative px-2 sm:px-3 py-1 rounded-lg font-semibold text-[#2563eb] hover:bg-[#e0f2fe] transition-colors duration-200 text-sm sm:text-base">
              {t.nav[1]}
            </a>
            <button
              type="button"
              className="relative px-2 sm:px-3 py-1 rounded-lg font-semibold text-[#2563eb] hover:bg-[#e0f2fe] transition-colors duration-200 text-sm sm:text-base"
              onClick={() => setShowContact((prev) => !prev)}
            >
              {t.nav[2]}
            </button>
            <button
              className="ml-1 sm:ml-2 rounded-lg px-2 sm:px-3 py-1 bg-[#e0f2fe] text-[#2563eb] font-semibold border border-[#b3e0ff] hover:bg-[#bae6fd] transition-colors text-sm sm:text-base"
              onClick={() => setLang(lang === "es" ? "en" : "es")}
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO + FOTO */}
      <header className="relative flex flex-col items-center justify-center min-h-[35vh] py-10 px-2 sm:px-4 bg-transparent pt-20">
        {/* Círculo animado fondo */}
        <motion.div
          className="absolute left-0 right-0 top-0 mx-auto w-[220px] sm:w-[360px] h-[90px] sm:h-[160px] rounded-full bg-[#1a8cff]/10 blur-3xl z-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="w-28 h-28 sm:w-44 sm:h-44 rounded-full border-4 border-[#1a8cff] shadow-xl bg-white overflow-hidden z-10 mb-4"
          initial={{ y: -60, opacity: 0, scale: 0.85 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: "spring" }}
        >
          <img src={FOTO_PERFIL} alt={t.hero.name} className="object-cover w-full h-full" />
        </motion.div>
        <motion.h1
          className="text-2xl sm:text-4xl font-extrabold tracking-tight z-10 text-center text-[#1a8cff] drop-shadow-sm"
          initial={{ y: 30, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
        >
          {t.hero.name}
        </motion.h1>
        <motion.div
          className="text-base sm:text-lg font-semibold text-[#195799] mt-2 mb-2 z-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          {t.hero.subtitle}
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row gap-1 sm:gap-3 mt-2 z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a href="mailto:sergio.telematico@gmail.com" className="hover:underline text-[#1a8cff] font-bold text-sm sm:text-base">{t.hero.mail}</a>
          <a href="https://www.linkedin.com/in/sergio-sabater-ruiz-562753268/" className="hover:underline text-[#1a8cff] font-bold text-sm sm:text-base">{t.hero.linkedin}</a>
        </motion.div>
      </header>

      {/* SOBRE MI */}
      <motion.section
        className="max-w-3xl mx-auto -mt-10 mb-8 bg-white/70 rounded-2xl p-4 sm:p-8 shadow-2xl border border-[#cce6ff] relative z-20"
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <motion.h2
          className="text-xl sm:text-2xl font-bold mb-2 text-[#1a8cff]"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {t.about.title}
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg text-[#1a1d29] opacity-90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {t.about.desc}
        </motion.p>
      </motion.section>

      {/* BLOQUES PRINCIPALES */}
      <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 px-2 z-30">
        {t.blocks.map((block, idx) => (
          <motion.section
            key={block.title}
            className="rounded-2xl p-4 sm:p-7 bg-white/70 shadow-xl mb-2 border border-[#cce6ff] hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.025] transition-all duration-300"
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + idx * 0.1, type: "spring" }}
            whileHover={{ scale: 1.025, boxShadow: "0 6px 40px #1a8cff20" }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-[#195799] mb-3">{block.title}</h3>
            <div>{block.content}</div>
          </motion.section>
        ))}

        {/* Skills & Soft Skills */}
        <motion.section
          className="col-span-1 rounded-2xl p-4 sm:p-7 bg-white/70 shadow-xl flex flex-col gap-2 border border-[#cce6ff] hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.025] transition-all duration-300"
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring" }}
          whileHover={{ scale: 1.025, boxShadow: "0 6px 40px #1a8cff20" }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-[#195799] mb-2">{t.skills}</h3>
          <div className="flex flex-wrap gap-2 mb-1">
            {["C/C++", "Python", "Java", "HTML/CSS/JS", "Git/GitHub", "Linux", "VSCode", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Keras", "OpenAI API"]
              .map((skill, i) => (
                <motion.span
                  key={skill}
                  className="bg-[#e6f4ff] text-[#1a8cff] font-bold rounded-xl px-3 py-1 text-xs shadow-sm border border-[#b3e0ff]"
                  variants={chipVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  {skill}
                </motion.span>
            ))}
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#195799] mt-3 mb-1">{t.softSkills}</h3>
          <div className="flex flex-wrap gap-2">
            {t.softList.map((soft, i) => (
              <motion.span
                key={soft}
                className="bg-[#1a8cff] text-white rounded-xl px-3 py-1 text-xs font-semibold"
                variants={chipVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 10}
              >
                {soft}
              </motion.span>
            ))}
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#195799] mt-3 mb-1">{t.languages}</h3>
          <div className="flex flex-wrap gap-2">
            {t.langList.map((idioma, i) => (
              <motion.span
                key={idioma}
                className="bg-[#e6f4ff] text-[#1a8cff] rounded-xl px-3 py-1 text-xs border border-[#b3e0ff]"
                variants={chipVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 20}
              >
                {idioma}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Proyectos & Certificaciones */}
        <motion.section
          className="col-span-1 rounded-2xl p-4 sm:p-7 bg-white/70 shadow-xl flex flex-col gap-2 border border-[#cce6ff] hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.025] transition-all duration-300"
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, type: "spring" }}
          whileHover={{ scale: 1.025, boxShadow: "0 6px 40px #1a8cff20" }}
          id="proyectos"
        >
          <h3 className="text-lg sm:text-xl font-bold text-[#195799] mb-2">{t.projects}</h3>
          <div className="flex flex-col sm:flex-row items-center gap-3 rounded-xl bg-[#f8fbff] p-4 shadow mb-3 border border-[#e0f0ff]">
            <div className="flex-1">
              <div className="font-semibold">
                {t.projectCard.title} <span className="text-[#1a8cff]">{t.projectCard.dev}</span>
              </div>
              <div className="text-sm">{t.projectCard.desc}</div>
            </div>
            <img
              src="/proyecto_aintegra.jpg"
              alt="Aintegra Limited"
              className="w-24 h-24 object-cover rounded-xl border border-[#b3e0ff] shadow-sm"
              style={{ minWidth: 72, minHeight: 72 }}
            />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#195799] mb-2 mt-1">{t.certs}</h3>
          <ul className="list-disc pl-5 text-[#1a8cff] text-sm">
            {t.certList.map(cert => <li key={cert}>{cert}</li>)}
          </ul>
        </motion.section>
      </main>

      {/* Contacto desplegable */}
      <motion.div
        initial={false}
        animate={showContact ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden"
      >
        {showContact && (
          <section
            id="contacto"
            className="max-w-xl w-full mx-auto my-8 sm:my-10 bg-white/80 rounded-2xl p-4 sm:p-8 shadow-xl border border-[#cce6ff] flex flex-col items-center"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a8cff] mb-3">Contacto</h2>
            <a
              href="mailto:sabaterruizs@gmail.com"
              className="text-base sm:text-lg text-[#195799] font-semibold underline break-all"
            >
              sabaterruizs@gmail.com
            </a>
          </section>
        )}
      </motion.div>

      {/* PREMIOS - BLOQUE DESTACADO */}
      <motion.section
        className="max-w-5xl mx-auto my-8 sm:my-10 rounded-3xl p-0 sm:p-10 bg-white/70 shadow-2xl flex flex-col md:flex-row items-center gap-5 sm:gap-7 overflow-hidden relative border-2 border-[#a6d9ff]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="flex-1 py-4 sm:py-6 px-2 sm:px-4">
          <motion.h3
            className="text-2xl sm:text-3xl font-black text-[#1a8cff] mb-3"
            initial={{ scale: 0.85, opacity: 0, y: 60 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, type: "spring" }}
          >
            {t.awards}
          </motion.h3>
          <motion.div
            className="mb-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="block font-bold text-[#195799] text-lg sm:text-xl">
              {t.award1.title} <span className="text-[#ffc300] text-base sm:text-lg">{t.award1.year}</span>
            </span>
            <span className="block text-sm sm:text-base text-[#1a8cff]/80">{t.award1.desc}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <span className="block font-bold text-[#195799] text-lg sm:text-xl mt-3">
              {t.award2.title} <span className="text-[#ffc300] text-base sm:text-lg">{t.award2.year}</span>
            </span>
            <span className="block text-sm sm:text-base text-[#1a8cff]/80">{t.award2.desc}</span>
          </motion.div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center py-4 sm:py-6 px-2 sm:px-4">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl border-4 border-[#e6f4ff] max-w-xs w-full cursor-pointer"
            whileHover={{ scale: 1.07, rotate: -2, boxShadow: "0 8px 40px #ffc30055" }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => window.open("https://www.uv.es/uv-emprende/es/novedades/la-universitat-valencia-conselleria-innovacion-industria-comercio-turismo-libran-premios-reto-innovacion-ha-presentado-mapfre-al-estudiantado-uv-marco-del-programa-gennera-1286067678746/Novetat.html?id=1286427854981", "_blank")}
            title="Ver noticia del premio"
          >
            <img src={FOTO_PREMIO} alt={t.premioFoto} className="object-cover w-full h-44 sm:h-64 transition-all duration-500" />
          </motion.div>
          <motion.span
            className="text-xs sm:text-sm text-[#1a8cff] font-semibold mt-2 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {t.premioFoto}
          </motion.span>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="mt-8 sm:mt-10 mb-5 text-center text-[#1a8cff]/80 text-xs opacity-80 px-2">
        &copy; {new Date().getFullYear()} Sergio Sabater Ruiz — {t.footer}
      </footer>
    </div>
  );
}