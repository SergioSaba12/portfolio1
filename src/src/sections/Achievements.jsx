import { motion } from "framer-motion";

const defaultAchievements = [
  { year: "2025", title: "Gennera 2025 (MAPFRE × Universitat de València)", org: "MAPFRE & UV", type: "Premio", highlights: ["Proyecto premiado por impacto e innovación"], tags: ["IA", "Innovación"] },
  { year: "2025", title: "Mejor Proyecto ETSE — UVemprén", org: "ETSE‑UV / UVemprén", type: "Premio", highlights: ["Reconocimiento al mejor proyecto del curso"], tags: ["ETSE", "Emprendimiento"] }
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 170, damping: 18 } } };

function Chip({ children }) { return <span className="apple-chip">{children}</span>; }

export default function Achievements({ data = defaultAchievements }) {
  return (
    <section id="achievements" className="apple-section">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Logros & Reconocimientos</h2>
          <p className="apple-muted mt-2 max-w-2xl">Premios y certificaciones que respaldan impacto real y ejecución.</p>
        </header>

        <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((a, i) => (
            <motion.li key={i} variants={item} className="apple-surface p-6">
              <div className="text-xs uppercase apple-muted">{a.year}</div>
              <h3 className="mt-1 text-xl font-semibold">{a.title}</h3>
              <p className="text-sm apple-muted">{a.org} • {a.type}</p>
              {a.highlights?.length ? (
                <ul className="mt-3 list-disc pl-5 text-sm">{a.highlights.map((h, j) => <li key={j}>{h}</li>)}</ul>
              ) : null}
              {a.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">{a.tags.map((t, j) => <Chip key={j}>{t}</Chip>)}</div>
              ) : null}
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href="/CV_Sergio_Sabater.pdf" className="apple-btn">Descargar CV</a>
          <a href="#projects" className="text-sm underline">Ver proyectos</a>
        </div>
      </div>
    </section>
  );
}
