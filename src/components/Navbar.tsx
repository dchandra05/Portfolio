"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "about", label: "About" },
  { href: "experience", label: "Experience" },
  { href: "projects", label: "Projects" },
  { href: "skills", label: "Skills" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", "about", "experience", "projects", "skills", "resume", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ivory/90 backdrop-blur-md border-b border-rim shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 rounded-lg bg-msu text-white flex items-center justify-center font-bold text-sm font-mono tracking-tight group-hover:bg-msu-600 transition-colors duration-200">
                DC
              </div>
              <span className="hidden sm:block font-semibold text-ink text-sm">
                Dustin Chandra
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(({ href, label }) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === href
                      ? "text-msu bg-msu-100"
                      : "text-ink-muted hover:text-ink hover:bg-parchment"
                  }`}
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="ml-2 inline-flex items-center gap-1.5 bg-msu text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-msu-600 transition-colors duration-200 shadow-sm"
              >
                Contact
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-parchment transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed top-16 left-0 right-0 z-40 bg-ivory/95 backdrop-blur-md border-b border-rim shadow-lg md:hidden"
          >
            <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="text-left px-4 py-3 rounded-lg text-sm font-medium text-ink-muted hover:text-ink hover:bg-parchment transition-colors"
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="mt-2 w-full bg-msu text-white py-3 rounded-lg text-sm font-medium hover:bg-msu-600 transition-colors"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
