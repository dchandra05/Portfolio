"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { GraduationCap, TrendingUp, BookOpen } from "lucide-react";
import { education } from "@/lib/data";

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  },
});

const stats = [
  { value: "3.6", label: "GPA", sub: "out of 4.0" },
  { value: "Year 3", label: "Status", sub: "at MSU" },
  { value: "3+", label: "Internships", sub: "in 12 months" },
  { value: "2027", label: "Graduation", sub: "Expected May" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-y border-rim">
      <div className="max-w-6xl mx-auto px-5 sm:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Bio */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <span className="section-label">About Me</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-ink mb-6 leading-tight">
              Engineering solutions,
              <br />
              <span className="text-msu">building futures.</span>
            </h2>

            <div className="space-y-4 text-ink-muted leading-relaxed">
              <p>
                I&apos;m a third-year Computer Engineering student at Michigan
                State with a 3.6 GPA, two minors in Entrepreneurship and
                Economics, and a habit of starting projects that turn into more
                than I planned.
              </p>
              <p>
                Right now that mostly means building{" "}
                <strong className="text-ink font-semibold">Sprout</strong> with
                my co-founder Jonah. We started it because we kept running into
                the same problem: school teaches theory, jobs expect tools, and
                nothing really fills that gap. I also do a lot of automation
                work, and my time at Dallas Industries is probably the clearest
                example of what happens when you hand an engineer a broken
                manual process.
              </p>
              <p>
                This summer I&apos;m joining{" "}
                <strong className="text-ink font-semibold">
                  General Motors
                </strong>{" "}
                as a GM Energy Operations Intern in Warren, bringing AI into
                their business operations to improve how they sort and analyze
                data.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 mt-8">
              {[
                { icon: <GraduationCap size={15} />, label: "Computer Engineering" },
                { icon: <TrendingUp size={15} />, label: "Minor: Entrepreneurship" },
                { icon: <BookOpen size={15} />, label: "Minor: Economics" },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-msu-100 text-msu px-4 py-2 rounded-lg text-sm font-medium border border-msu-200"
                >
                  {icon}
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats + Education */}
          <motion.div
            variants={fadeUp(0.15)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-4"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map(({ value, label, sub }) => (
                <div
                  key={label}
                  className="card p-5 text-center hover:border-msu/25 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <p className="text-3xl font-bold text-msu">{value}</p>
                  <p className="text-ink text-sm font-medium mt-1">{label}</p>
                  <p className="text-ink-faint text-xs mt-0.5">{sub}</p>
                </div>
              ))}
            </div>

            {/* Education card */}
            <div className="card p-6 hover:border-msu/25 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-msu flex items-center justify-center text-white font-bold text-base font-mono flex-shrink-0">
                  MSU
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-ink">{education.school}</p>
                  <p className="text-ink-muted text-sm mt-0.5">{education.degree}</p>
                  <p className="text-ink-faint text-xs mt-1">{education.period}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {education.minors.map((m) => (
                      <span key={m} className="skill-tag">
                        Minor: {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Club */}
            <div className="card p-4 flex items-center gap-3 hover:border-msu/25">
              <div className="w-9 h-9 rounded-lg bg-msu-100 border border-msu-200 flex items-center justify-center flex-shrink-0">
                <span className="text-msu text-xs font-bold font-mono">AI</span>
              </div>
              <div>
                <p className="text-ink text-sm font-semibold">MSU AI Club</p>
                <p className="text-ink-faint text-xs">
                  Member · Exploring AI/ML research &amp; applications
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
