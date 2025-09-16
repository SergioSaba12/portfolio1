// src/sections/Clients.jsx
export default function Clients() {
  // Puedes cambiar srcLight/srcDark por el mismo archivo si tu SVG ya funciona en ambos modos
  const items = [
    {
      name: "MAPFRE",
      srcLight: "/images/logos/mapfre.png",
      srcDark:  "/images/logos/mapfre.png",
      width: 140, height: 36
    },
    {
      name: "Universitat de València",
      srcLight: "/images/logos/uv.svg",
      srcDark:  "/images/logos/uv.svg",
      width: 120, height: 36
    },
    {
      name: "UVemprén",
      srcLight: "/images/logos/logo-uvempren-uv.png",
      srcDark:  "/images/logos/logo-uvempren-uv.png",
      width: 140, height: 36
    },
    {
      name: "Samsung IC",
      srcLight: "/images/logos/sic.png",
      srcDark:  "/images/logos/sic.png",
      width: 140, height: 36
    },
      {
      name: "Olivia Mareque",
      srcLight: "/images/logos/olivia.png",
      srcDark:  "/images/logos/olivia.png",
      width: 140, height: 36
    },
  ];

  return (
    <section id="clients" className="apple-section">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">Partners & Press</h2>
        <p className="apple-muted text-center mt-2">Reconocimientos y colaboraciones</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((c, i) => (
            <figure
              key={i}
              className="apple-surface p-6 rounded-[20px] flex items-center justify-center transition-transform duration-300 hover:-translate-y-0.5"
              title={c.name}
            >
              {/* contenedor que fija alto y mantiene proporción */}
              <div className="relative w-full" style={{ height: 48 }}>
                <picture className="flex h-full w-full items-center justify-center">
                  {/* Si quieres distintas versiones para dark/light, déjalas. Si no, usa la misma en ambos <source> */}
                  <source srcSet={c.srcDark} media="(prefers-color-scheme: dark)" />
                  <img
                    src={c.srcLight}
                    alt={c.name}
                    width={c.width ?? 140}
                    height={c.height ?? 36}
                    className="max-h-10 object-contain opacity-90"
                    style={{ filter: "none" }}
                    onError={(e) => { e.currentTarget.style.opacity = "0.6"; }}
                  />
                </picture>
              </div>
              <figcaption className="sr-only">{c.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
