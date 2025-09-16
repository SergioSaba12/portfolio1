export default function Hero() {
  return (
    <section
      className="apple-section relative text-center"
      style={{
        backgroundImage: "url('/images/banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Capa semitransparente para que el texto sea legible */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido */}
      <div className="relative mx-auto max-w-6xl text-white">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Construyo productos con IA
        </h1>
        <p className="mt-3 text-base md:text-lg">
          Accesibilidad, ciberseguridad y telemática aplicada
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#projects" className="apple-btn bg-white text-black">
            Ver proyectos
          </a>
          <a
            href="/CV_Sergio_Sabater.pdf"
            download="Sergio_Sabater_CV.pdf"
            className="apple-btn bg-white text-black"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
