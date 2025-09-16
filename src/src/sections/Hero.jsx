import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{padding:"96px 0"}}>
      {/* background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{maskImage:"radial-gradient(white, transparent 70%)"}}>
        <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full" style={{background:"linear-gradient(135deg, rgba(0,0,0,0.06), transparent)"}} />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full" style={{background:"linear-gradient(135deg, rgba(0,0,0,0.05), transparent)"}} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} transition={{type:"spring", stiffness:120, damping:18}}>
            <p className="text-sm apple-muted mb-2">Engineer • AI • Product</p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Construyo productos con <span className="inline-block" style={{background:"linear-gradient(90deg,#111,#555)", WebkitBackgroundClip:"text", color:"transparent"}}>IA</span> y diseño de alto nivel
            </h1>
            <p className="mt-4 text-base md:text-lg apple-muted max-w-xl">
              AIntegra · Blue Sentinel · Sentinel‑AX. Enfocado en accesibilidad, IoT marítimo y ciberseguridad aplicada.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="apple-btn">Ver proyectos</a>
              <a href="/CV_Sergio_Sabater.pdf" className="apple-btn" style={{background:"var(--text)", color:"var(--bg)", borderColor:"var(--text)"}}>Descargar CV</a>
            </div>
          </motion.div>

          {/* mockup card */}
          <motion.div initial={{opacity:0, scale:0.98, y:8}} animate={{opacity:1, scale:1, y:0}} transition={{delay:0.05, type:"spring", stiffness:120, damping:18}} className="apple-surface p-3 md:p-4">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-[16px]" style={{background:"linear-gradient(180deg, rgba(0,0,0,0.06), transparent)"}}>
              <img src="/images/hero-mock.png" alt="Vista previa de proyectos" className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full" style={{background:"var(--text)"}} />
                <p className="text-sm font-medium">AIntegra · Blue Sentinel · Sentinel‑AX</p>
              </div>
              <p className="apple-muted text-sm mt-1">Soluciones reales con foco en accesibilidad, medio ambiente y seguridad.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
