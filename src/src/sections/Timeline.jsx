import { motion } from "framer-motion";

const defaultMilestones = [
  { date: "2025-07", title: "Premio Gennera 2025", desc: "Reconocimiento junto a MAPFRE y UV." },
  { date: "2025-06", title: "Mejor Proyecto ETSE", desc: "Premio Red de Preincubadoras UVemprén." },
  { date: "2025-05", title: "Gennera 5UCV (UV)", desc: "Representación frente a otras universidades." },
  { date: "2025-04", title: "SIC — Sentinel‑AX", desc: "Proyecto de ciberseguridad basado en IA." }
];

export default function Timeline({ data = defaultMilestones }) {
  return (
    <section id="timeline" className="apple-section">
      <div className="mx-auto max-w-4xl">
        <header className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Timeline</h2>
          <p className="apple-muted mt-2">Hitos ordenados por fecha.</p>
        </header>

        <ol className="relative border-s" style={{borderColor:"var(--border)"}}>
          {data.map((m, i) => (
            <motion.li key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.06 }} className="mb-8 ms-6">
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full" style={{background:"var(--card)", border:"1px solid var(--border)"}}>
                <span className="h-2.5 w-2.5 rounded-full" style={{background:"var(--text)"}} />
              </span>
              <div className="apple-surface p-5">
                <time className="text-xs apple-muted">{m.date}</time>
                <h3 className="text-base font-semibold">{m.title}</h3>
                <p className="text-sm apple-muted">{m.desc}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
