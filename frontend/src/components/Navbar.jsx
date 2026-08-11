import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Diamond } from "./Motifs";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Divisions", to: "/divisions" },
  { label: "Impact", to: "/impact" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? "backdrop-blur-xl bg-void/70 border-b border-gold/20" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" data-testid="logo-link" className="flex items-center gap-3 group">
          <Diamond size={22} className="transition-transform duration-500 group-hover:rotate-180" />
          <span className="font-serif text-xl tracking-wide text-white">JPNS <span className="text-gold">Enterprise</span></span>
        </Link>

        <div className="hidden lg:flex items-center gap-9">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              data-testid={`nav-${l.label.toLowerCase()}`}
              className="relative text-[13px] uppercase tracking-[0.18em] text-lightgray hover:text-white transition-colors duration-300 py-1 group"
            >
              {l.label}
              <span className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-400 ${pathname === l.to ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
          ))}
          <Link
            to="/partner"
            data-testid="nav-partner"
            className="text-[12px] uppercase tracking-[0.18em] text-void bg-gold px-6 py-3 hover:bg-white transition-colors duration-300"
          >
            Partner With Us
          </Link>
        </div>

        <button data-testid="mobile-menu-btn" className="lg:hidden text-gold" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={26} strokeWidth={1.3} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-void lg:hidden"
            data-testid="mobile-menu"
          >
            <div className="flex justify-between items-center h-20 px-6 border-b border-gold/20">
              <span className="font-serif text-xl text-white">JPNS <span className="text-gold">Enterprise</span></span>
              <button onClick={() => setOpen(false)} className="text-gold" aria-label="Close menu"><X size={26} strokeWidth={1.3} /></button>
            </div>
            <div className="flex flex-col p-8 gap-2">
              {[...LINKS, { label: "Partner With Us", to: "/partner" }].map((l, i) => (
                <motion.div key={l.to} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                  <Link to={l.to} className="font-serif text-3xl text-white/90 hover:text-gold transition-colors py-3 block">{l.label}</Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
