// src/sections/Clients.jsx
export default function Clients() {
  const items = [
    {
      name: "MAPFRE",
      srcLight: "/images/logos/mapfre.png",
      srcDark:  "/images/logos/mapfre.png",
    },
    {
      name: "Universitat de València",
      srcLight: "/images/logos/uv.svg",
      srcDark:  "/images/logos/uv.svg",
    },
    {
      name: "UVemprén",
      srcLight: "/images/logos/logo-uvempren-uv.png",
      srcDark:  "/images/logos/logo-uvempren-uv.png",
    },
    {
      name: "Samsung IC",
      srcLight: "/images/logos/sic.png",
      srcDark:  "/images/logos/sic.png",
    },
    {
      name: "Olivia Mareque",
      srcLight: "/images/logos/olivia.png",
      srcDark:  "/images/logos/olivia.png",
    },
  ];

  return (
    <section id="clients" className="apple-section">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">
          Partners & Press
        </h2>
        <p className="apple-muted text-center mt-2">
          Reconocimientos y colaboraciones
        </p>

        {/* Grid responsivo */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {items.map((c, i) => (
            <figure
              key={i}
              className="apple-surface rounded-[20px] w-full h-56 flex items-center justify-center transition-transform duration-300 hover:-translate-y-1"
              title={c.name}
            >
              <picture className="flex items-center justify-center h-full">
                <source srcSet={c.srcDark} media="(prefers-color-scheme: dark)" />
                <img
                  src={c.srcLight}
                  alt={c.name}
                  className="block w-auto max-h-40 object-contain"
                  onError={(e) => { e.currentTarget.style.opacity = "0.7"; }}
                />
              </picture>
              <figcaption className="sr-only">{c.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
