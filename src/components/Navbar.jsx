import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: "Sobre mí" },
    { href: "#projects", label: "Proyectos" },
    { href: "#achievements", label: "Logros" },
    { href: "#skills", label: "Skills" },
    { href: "#timeline", label: "Timeline" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-14">
        <span className="font-bold">Portfolio</span>

        {/* Links desktop */}
        <ul className="hidden md:flex gap-6 text-sm">
          {links.map((l, i) => (
            <li key={i}>
              <a href={l.href} className="hover:text-blue-400 transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa móvil */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú desplegable móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="md:hidden bg-black/90 backdrop-blur p-6 space-y-4"
          >
            {links.map((l, i) => (
              <a
                key={i}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-lg hover:text-blue-400 transition"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
