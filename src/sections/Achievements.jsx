import { motion } from "framer-motion";

const achievements = [
  {
    year: "2025",
    title: "Gennera 2025 (UV – MAPFRE)",
    desc: "Primer premio a una solución de IA ante MAPFRE.",
    image: "/images/logros/gennera2025.jpg",
  },
  {
    year: "2025",
    title: "Gennera 5UCV (UA)",
    desc: "Representante de la UV frente a las cinco universidades públicas – propuesta premiada.",
    image: "/images/logros/gennera5ucv.jpeg",
  },
  {
    year: "2025",
    title: "Mejor Proyecto ETSE-UV (Xarxa UVemprén 2025)",
    desc: "AIntegra seleccionado por innovación y viabilidad.",
    image: "/images/logros/mejorproyectoetseuv.jpeg",
  },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 160, damping: 18 } } };

export default function Achievements() {
  return (
    <section id="achievements" className="apple-section">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Logros & Reconocimientos</h2>
          <p className="apple-muted mt-2">Premios y distinciones conseguidos en 2025</p>
        </header>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {achievements.map((a, i) => (
            <motion.li key={i} variants={item} className="apple-surface overflow-hidden">
              {a.image && (
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
              <div className="p-5">
                <div className="text-xs uppercase apple-muted">{a.year}</div>
                <h3 className="mt-1 text-lg font-semibold leading-snug">{a.title}</h3>
                <p className="mt-2 text-sm">{a.desc}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
