import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Expertises", path: "/solutions" },
    { name: "Secteurs", path: "/who-we-serve" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
            isScrolled
              ? "w-full max-w-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              : "w-full max-w-7xl bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="font-bold text-black text-xl tracking-tighter leading-none">S</span>
            </div>
            <span className={`font-bold tracking-tight text-xl text-white transition-opacity duration-300 ${isScrolled ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}`}>
              SkillWatts.
            </span>
          </Link>
 
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition-transform"
            >
              Demander une étude
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </motion.nav>
      </header>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[100] bg-obsidian-900/90 flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-8 right-8 text-white p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-bold text-white tracking-tighter hover:text-plasma transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 px-8 py-4 rounded-full bg-white text-black text-lg font-semibold hover:scale-105 transition-transform"
              >
                Demander une étude
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
