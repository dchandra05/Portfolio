"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, CalendarDays } from "lucide-react";
import { experiences, type ExperienceStatus } from "@/lib/data";

const statusConfig: Record<
  ExperienceStatus,
  { label: string; badge: string; dot: string; cardAccent: string }
> = {
  upcoming: {
    label: "Incoming",
    badge: "bg-amber-50 text-amber-700 border border-amber-200",
    dot: "bg-amber-400",
    cardAccent: "border-amber-200/60 hover:border-amber-300",
  },
  current: {
    label: "Active",
    badge: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    dot: "bg-emerald-500",
    cardAccent: "border-rim hover:border-msu/25",
  },
  past: {
    label: "Past",
    badge: "bg-msu-100 text-msu border border-msu-200",
    dot: "bg-msu-200",
    cardAccent: "border-rim hover:border-msu/25",
  },
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14"
        >
          <span className="section-label">Experience</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-ink leading-tight">
            Where I&apos;ve{" "}
            <span className="text-msu">worked.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[22px] top-6 bottom-6 w-px bg-rim hidden md:block" />

          <div className="space-y-5">
            {experiences.map((exp, i) => {
              const cfg = statusConfig[exp.status];
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.07,
                    ease: "easeOut",
                  }}
                  className="relative md:pl-14"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-[14px] top-7 w-4 h-4 rounded-full border-[3px] border-cream hidden md:block ${cfg.dot}`}
                  />

                  <div
                    className={`card p-6 hover:-translate-y-0.5 hover:shadow-md ${cfg.cardAccent} ${
                      exp.status === "upcoming" ? "bg-amber-50/30" : ""
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-bold text-ink text-lg leading-snug">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-1 text-sm">
                          <span className="font-semibold text-msu">
                            {exp.company}
                          </span>
                          {exp.location && (
                            <>
                              <span className="text-rim">·</span>
                              <span className="flex items-center gap-1 text-ink-muted">
                                <MapPin size={11} />
                                {exp.location}
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span
                          className={`text-xs font-medium px-2.5 py-1 rounded-full ${cfg.badge}`}
                        >
                          {cfg.label}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-ink-faint font-mono whitespace-nowrap">
                          <CalendarDays size={11} />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {exp.bullets.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {exp.bullets.map((bullet, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2.5 text-sm text-ink-muted leading-relaxed"
                          >
                            <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-msu flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
