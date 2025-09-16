import { motion } from "framer-motion";

const defaultProjects = [
  {
    title: "AIntegra — Universal Gesture Trackpad",
    period: "2024–2025",
    blurb:
      "Plataforma HW+SW para control por gestos que sustituye al ratón tradicional y mejora la accesibilidad.",
    highlights: ["Gestos multimodales (manos/cabeza)", "Alineado con EDAA 2025"],
    tags: ["Accesibilidad", "IA", "HW+SW", "Frontend"],
    image: "/images/aintegrapreview.png",
    url: "https://aintegra.vercel.app/", // ← al hacer click en la card
  },

  {
    title: "Sentinel-AX — Ciberseguridad (SIC)",
    period: "2025",
    blurb:
      "Detección de amenazas con IA. Entregado en Samsung Innovation Campus.",
    highlights: ["Clasificación ML/XGBoost", "Pipeline MLOps básico"],
    tags: ["Ciberseguridad", "ML", "MLOps"],
    image: "/images/sentinelax.jpg",
    url: "https://sergiosaba12.github.io/Sentinel-AX/", // ← al hacer click en la card
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 170, damping: 18 },
  },
};

function Chip({ children }) {
  return <span className="apple-chip">{children}</span>;
}

export default function Projects({ data = defaultProjects }) {
  return (
    <section id="projects" className="apple-section">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Proyectos</h2>
          <p className="apple-muted mt-2 max-w-2xl">Selección de productos y prototipos.</p>
        </header>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {data.map((p, i) => {
            const fallback =
              p.links?.find((l) => l.href && l.href !== "#")?.href || "#";
            const href = p.url || fallback;

            return (
              <motion.li key={i} variants={item}>
                {/* Card entera clicable */}
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="apple-surface overflow-hidden block cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40 hover:scale-[1.01] transition-transform"
                  title={p.title}
                  aria-label={`Abrir ${p.title}`}
                >
                  {p.image ? (
                    <div
                      className="aspect-[16/9] w-full overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0.05), transparent)",
                      }}
                    >
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : null}

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold leading-tight">
                          {p.title}
                        </h3>
                        <p className="text-xs apple-muted">{p.period}</p>
                      </div>
                    </div>

                    <p className="mt-2 text-sm">{p.blurb}</p>

                    {p.highlights?.length ? (
                      <ul className="mt-3 list-disc pl-5 text-sm">
                        {p.highlights.map((h, j) => (
                          <li key={j}>{h}</li>
                        ))}
                      </ul>
                    ) : null}

                    {p.tags?.length ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tags.map((t, j) => (
                          <Chip key={j}>{t}</Chip>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </motion.a>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
