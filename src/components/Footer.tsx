"use client";

import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";
import { personal } from "@/lib/data";

const navLinks = [
  { href: "about", label: "About" },
  { href: "experience", label: "Experience" },
  { href: "projects", label: "Projects" },
  { href: "skills", label: "Skills" },
  { href: "contact", label: "Contact" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-msu-800 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center font-bold text-xs font-mono">
              DC
            </div>
            <span className="text-white/60 text-sm font-medium">
              Dustin Chandra
            </span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="text-white/40 hover:text-white/80 text-xs transition-colors duration-200"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-3">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/80 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={16} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/80 transition-colors duration-200"
              aria-label="GitHub"
            >
              <GitHubIcon size={16} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-white/40 hover:text-white/80 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-white/25 text-xs font-mono">
            © {new Date().getFullYear()} Dustin J. Chandra · Built with Next.js
            &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
