export default function Navbar() {
  const links = [
    { href: "#achievements", label: "Logros" },
    { href: "#projects", label: "Proyectos" },
    { href: "#skills", label: "Skills" },
    { href: "#timeline", label: "Timeline" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b" style={{background: "var(--card)", backdropFilter: "saturate(180%) blur(10px)", borderColor: "var(--border)"}}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-sm font-semibold tracking-tight">Portfolio</a>
          <nav className="flex gap-1">
            {links.map(l => (
              <a key={l.href} href={l.href} className="px-3 py-2 text-sm rounded-full hover:bg-black/5" style={{WebkitTapHighlightColor:"transparent"}}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
