"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Layout, Server, Cloud, BookOpen } from "lucide-react";
import { skillCategories } from "@/lib/data";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layout,
  Server,
  Cloud,
  BookOpen,
};

const extraTools = [
  "Git",
  "GitHub",
  "Power BI",
  "Microsoft Office",
  "Linux",
  "REST APIs",
  "Agile / Scrum",
  "Figma",
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14"
        >
          <span className="section-label">Skills</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-ink leading-tight">
            My tech <span className="text-msu">stack.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.07,
                  ease: "easeOut",
                }}
                className="card p-6 hover:border-msu/25 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-msu flex items-center justify-center text-white flex-shrink-0">
                    {Icon && <Icon size={17} />}
                  </div>
                  <h3 className="font-semibold text-ink">{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="skill-tag cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tools row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.42, ease: "easeOut" }}
          className="card p-6"
        >
          <p className="section-label !mb-4">Also familiar with</p>
          <div className="flex flex-wrap gap-2">
            {extraTools.map((tool) => (
              <span
                key={tool}
                className="text-xs px-3 py-1.5 rounded-full bg-parchment text-ink-muted border border-rim hover:border-msu/25 hover:text-ink transition-colors duration-200 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
