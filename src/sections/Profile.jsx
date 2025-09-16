export default function Profile() {
  const person = {
    name: "Sergio Sabater Ruiz",
    role: "Machine Learning & Deep Learning Engineer",
    location: "Meliana (Valencia)",
    email: "sergio.telematico@gmail.com",
    phone: "+34 722 273 036",
    linkedin: "https://www.linkedin.com/in/sergio-sabater-ruiz-562753268",
    photo: "/images/me.jpg",
    languages: ["Español", "Valenciano", "Inglés (B2)"],
    links: [
      { label: "AIntegra", href: "https://aintegra.vercel.app/" },
      { label: "Sentinel‑AX", href: "https://sergiosaba12.github.io/Sentinel-AX/" }
    ],
    education: [
      { title: "Grado en Ingeniería Telemática", org: "Universitat de València", period: "2021 – Actualidad" },
      { title: "Diploma de Extensión Universitaria en IA", org: "Samsung Innovation Campus · UPV", period: "2025" }
    ],
    awards: [
      "Gennera 2025 (UV × MAPFRE) — 1º premio",
      "Gennera 5UCV — Representante UV, propuesta premiada",
      "Mejor Proyecto ETSE‑UV (Xarxa UVemprén 2025)"
    ],
    skills: [
      "Python", "Java", "C++", "JavaScript", "SQL",
      "TensorFlow", "Keras", "PyTorch", "scikit‑learn",
      "NumPy", "Pandas", "Matplotlib",
      "Hugging Face", "Docker (básico)"
    ]
  };

  return (
    <section id="about" className="apple-section">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="apple-surface overflow-hidden" style={{borderRadius: 24}}>
              <img src={person.photo} alt={person.name} className="w-full h-auto object-cover" />
            </div>
          </div>

          <div className="md:col-span-3">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{person.name}</h1>
            <p className="apple-muted mt-1">{person.role}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <span className="apple-chip">{person.location}</span>
              <a href={`mailto:${person.email}`} className="apple-chip">{person.email}</a>
              <a href={`tel:${person.phone.replace(/\s+/g,'')}`} className="apple-chip">{person.phone}</a>
              <a
  href={person.linkedin}
  target="_blank"
  rel="noreferrer noopener"
  className="apple-chip"
>
  LinkedIn
</a>

            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold tracking-wide uppercase apple-muted">Idiomas</h3>
                <div className="mt-2 flex flex-wrap gap-2">{person.languages.map((l,i)=>(<span key={i} className="apple-chip">{l}</span>))}</div>
                <h3 className="mt-6 text-sm font-semibold tracking-wide uppercase apple-muted">Links</h3>
                <div className="mt-2 flex flex-wrap gap-2">{person.links.map((l,i)=>(<a key={i} href={l.href} target="_blank" rel="noreferrer noopener" className="apple-chip">{l.label}</a>))}</div>
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wide uppercase apple-muted">Premios</h3>
                <ul className="mt-2 space-y-1 text-sm">{person.awards.map((a,i)=>(<li key={i}>• {a}</li>))}</ul>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold tracking-wide uppercase apple-muted">Educación</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  {person.education.map((e,i)=>(
                    <li key={i} className="apple-surface p-3">
                      <p className="font-medium">{e.title}</p>
                      <p className="apple-muted">{e.org} • {e.period}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wide uppercase apple-muted">Skills</h3>
                <div className="mt-2 flex flex-wrap gap-2">{person.skills.map((s,i)=>(<span key={i} className="apple-chip">{s}</span>))}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
