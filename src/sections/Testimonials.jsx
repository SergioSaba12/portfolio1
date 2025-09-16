export default function Testimonials() {
  const items = [
    { quote: "Propuesta sólida con foco en impacto real y viabilidad.", author: "Jurado Gennera", role: "UV · MAPFRE" },
    { quote: "Gran ejecución técnica y visión de producto.", author: "Mentor UVemprén", role: "UVemprén" },
    { quote: "Capacidad para desarrollar soluciones aplicadas con IA.", author: "Samsung Innovation Campus", role: "UPV" }
  ];
  return (
    <section id="testimonials" className="apple-section">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">Lo que dicen</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t,i)=>(
            <figure key={i} className="apple-surface p-6">
              <blockquote className="text-lg leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm apple-muted">
                — {t.author} · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
