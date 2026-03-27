"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";
import { personal } from "@/lib/data";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.3 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated grid */}
      <div className="absolute inset-0 animated-grid" />

      {/* Floating gradient blobs */}
      <div
        className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(24,69,59,0.09) 0%, transparent 65%)",
          animation: "float 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(24,69,59,0.07) 0%, transparent 65%)",
          animation: "float 9s ease-in-out 5s infinite",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p
              variants={item}
              className="font-mono text-msu text-sm tracking-widest uppercase mb-6"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={item}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold text-ink leading-[0.92] tracking-tight mb-5"
            >
              Dustin
              <br />
              <span className="text-msu">Chandra</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl text-ink-muted font-medium mb-2"
            >
              Computer Engineering Student
            </motion.p>

            <motion.div
              variants={item}
              className="flex items-center gap-1.5 text-ink-faint text-sm mb-8"
            >
              <MapPin size={13} />
              <span>East Lansing, MI · Michigan State University</span>
            </motion.div>

            <motion.p
              variants={item}
              className="text-ink-muted max-w-md leading-relaxed mb-10"
            >
              {personal.tagline}
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap gap-3 mb-10"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 bg-msu text-white px-6 py-3 rounded-lg font-medium hover:bg-msu-600 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
              >
                View My Work
              </button>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-1">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted hover:text-msu p-2.5 rounded-xl hover:bg-msu-100 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted hover:text-msu p-2.5 rounded-xl hover:bg-msu-100 transition-all duration-200"
                aria-label="GitHub"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="text-ink-muted hover:text-msu p-2.5 rounded-xl hover:bg-msu-100 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Info card */}
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Decorative offset */}
              <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl border-2 border-msu/15 pointer-events-none" />

              <div className="card p-8 relative">
                {/* Education */}
                <div className="mb-6 pb-6 border-b border-rim">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="section-label !mb-1">Education</p>
                      <p className="font-bold text-ink text-lg leading-snug">
                        Michigan State University
                      </p>
                      <p className="text-ink-muted text-sm mt-1">
                        B.S. Computer Engineering
                      </p>
                      <p className="text-ink-faint text-xs mt-0.5">
                        Minors: Entrepreneurship · Economics
                      </p>
                    </div>
                    <div className="bg-msu-100 border border-msu-200 rounded-xl px-3 py-2.5 text-center flex-shrink-0">
                      <p className="text-msu font-bold text-2xl leading-none">3.6</p>
                      <p className="text-msu/60 text-[10px] font-mono mt-0.5">GPA</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5 mt-3">
                    <span className="skill-tag">Class of 2027</span>
                    <span className="skill-tag">Year 3</span>
                  </div>
                </div>

                {/* Currently */}
                <div className="mb-6 pb-6 border-b border-rim">
                  <p className="section-label !mb-3">Currently</p>
                  <div className="space-y-3">
                    {[
                      { role: "Co-Founder & CTO", org: "Sprout" },
                    ].map(({ role, org }) => (
                      <div key={org} className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                        <div>
                          <p className="text-ink text-sm font-medium">{role}</p>
                          <p className="text-ink-faint text-xs">{org}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Incoming */}
                <div>
                  <p className="block font-mono text-amber-600 text-sm tracking-widest uppercase mb-3">
                    Incoming
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-ink font-semibold text-sm">
                      GM Energy Operations Intern
                    </p>
                    <p className="text-ink-muted text-xs mt-0.5">
                      General Motors · Warren, MI
                    </p>
                    <p className="text-amber-600 text-xs font-mono mt-2">
                      Summer 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-ink-faint hover:text-msu transition-colors duration-200"
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
