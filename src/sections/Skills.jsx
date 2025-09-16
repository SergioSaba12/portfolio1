import { motion } from "framer-motion";

const defaultSkills = [
  { group: "Lenguajes & Core", items: ["Python", "TypeScript", "JavaScript", "C/C++", "SQL"] },
  { group: "ML / Data", items: ["Scikit‑learn", "XGBoost", "Pandas", "NumPy", "TensorFlow (básico)", "OpenCV"] },
  { group: "Frontend", items: ["React", "Vite", "Tailwind", "Framer Motion"] },
  { group: "DevOps / Tools", items: ["Git/GitHub", "Docker (básico)", "Vercel", "Netlify", "CI/CD"] }
];

function Chip({ children }) { return <span className="apple-chip">{children}</span>; }

export default function Skills({ data = defaultSkills, certs = [] }) {
  return (
    <section id="skills" className="apple-section">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Skills & Certificaciones</h2>
          <p className="apple-muted mt-2 max-w-2xl">Stack principal y herramientas que uso a diario.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((s, i) => (
            <div key={i} className="apple-surface p-6">
              <h3 className="text-base font-semibold">{s.group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">{s.items.map((t, j) => <Chip key={j}>{t}</Chip>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
