"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Layout, Server, Cloud, BookOpen } from "lucide-react";
import { skillCategories, type SkillLevel } from "@/lib/data";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layout,
  Server,
  Cloud,
  BookOpen,
};

const levelConfig: Record<SkillLevel, { label: string; width: string; bar: string; text: string }> = {
  excel:        { label: "Expert",       width: "100%", bar: "bg-emerald-500",    text: "text-emerald-600" },
  proficient:   { label: "Proficient",   width: "80%",  bar: "bg-emerald-400",    text: "text-emerald-500" },
  intermediate: { label: "Intermediate", width: "50%",  bar: "bg-amber-400",      text: "text-amber-500"   },
};

const extraTools = [
  "Git",
  "GitHub",
  "Microsoft Office",
  "Linux",
  "REST APIs",
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14"
        >
          <span className="section-label">Skills</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-ink leading-tight">
            My tech <span className="text-msu">stack.</span>
          </h2>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="flex flex-wrap gap-4 mb-10"
        >
          {(Object.entries(levelConfig) as [SkillLevel, typeof levelConfig[SkillLevel]][]).map(([, cfg]) => (
            <div key={cfg.label} className="flex items-center gap-2 text-sm">
              <span className={`w-3 h-3 rounded-full ${cfg.bar}`} />
              <span className="text-ink-muted">{cfg.label}</span>
            </div>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
                className="card p-6 hover:border-msu/25 hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-msu flex items-center justify-center text-white flex-shrink-0">
                    {Icon && <Icon size={17} />}
                  </div>
                  <h3 className="font-semibold text-ink">{cat.label}</h3>
                </div>

                <div className="space-y-3.5">
                  {cat.skills.map((skill, j) => {
                    const cfg = levelConfig[skill.level];
                    return (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm text-ink font-medium">{skill.name}</span>
                          <span className={`text-xs font-medium ${cfg.text}`}>{cfg.label}</span>
                        </div>
                        <div className="h-1.5 w-full bg-rim rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${cfg.bar}`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: cfg.width } : { width: 0 }}
                            transition={{ duration: 0.7, delay: i * 0.07 + j * 0.06, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Also familiar with */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
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
