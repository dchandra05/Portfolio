"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, ExternalLink, FileText } from "lucide-react";
import { personal } from "@/lib/data";

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="resume"
      className="py-20 lg:py-28 bg-white border-y border-rim"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8" ref={ref}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="section-label inline-block">Resume</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-ink mb-5 leading-tight">
              View my full{" "}
              <span className="text-msu">resume.</span>
            </h2>
            <p className="text-ink-muted max-w-md mx-auto mb-10 leading-relaxed">
              A complete overview of my education, experience, projects, and
              skills — available to view or download.
            </p>
          </motion.div>

          {/* Preview card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="card p-8 lg:p-10 text-left mb-8 hover:border-msu/25 hover:shadow-md"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-msu flex items-center justify-center text-white flex-shrink-0">
                <FileText size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-ink text-xl mb-0.5">
                  Dustin J. Chandra
                </h3>
                <p className="text-msu font-medium text-sm mb-5">
                  Computer Engineering Student · Michigan State University
                </p>

                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                  {[
                    {
                      heading: "Education",
                      lines: [
                        "B.S. Computer Engineering, MSU",
                        "GPA: 3.6 / 4.0 · Expected May 2027",
                      ],
                    },
                    {
                      heading: "Key Experience",
                      lines: [
                        "Incoming GM Energy Operations Intern",
                        "AI Extern @ Wayfair · Founder @ Sprout",
                      ],
                    },
                    {
                      heading: "Core Skills",
                      lines: [
                        "React · Node.js · Python · PostgreSQL",
                        "AWS · Google Cloud · FastAPI · Prisma",
                      ],
                    },
                    {
                      heading: "Leadership",
                      lines: [
                        "VP of Finance · Alpha Sigma Phi",
                        "Finance & Investing Mentor",
                      ],
                    },
                  ].map(({ heading, lines }) => (
                    <div key={heading}>
                      <p className="font-semibold text-ink mb-1.5">{heading}</p>
                      {lines.map((line) => (
                        <p key={line} className="text-ink-muted leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href={personal.resume}
              download
              className="inline-flex items-center gap-2 bg-msu text-white px-6 py-3 rounded-lg font-medium hover:bg-msu-600 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-msu text-msu px-6 py-3 rounded-lg font-medium hover:bg-msu-100 transition-all duration-200 active:scale-95"
            >
              <ExternalLink size={16} />
              View PDF
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="mt-5 text-xs text-ink-faint font-mono"
          >
            Add your resume to{" "}
            <code className="bg-parchment border border-rim px-1.5 py-0.5 rounded text-msu">
              /public/resume.pdf
            </code>{" "}
            to enable download
          </motion.p>
        </div>
      </div>
    </section>
  );
}
