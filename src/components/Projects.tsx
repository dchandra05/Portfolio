"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { GitHubIcon } from "@/components/Icons";
import { projects, type Project } from "@/lib/data";

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: Project;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.4,
        delay: index * 0.07,
        ease: "easeOut",
      }}
      className="card p-6 flex flex-col h-full group hover:border-msu/25 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="font-mono text-msu text-xs uppercase tracking-widest mb-1">
            {project.subtitle}
          </p>
          <h3 className="text-xl font-bold text-ink">{project.title}</h3>
        </div>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-msu-100 text-ink-muted hover:text-msu transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon size={15} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-msu-100 text-ink-muted hover:text-msu transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      <p className="text-ink-muted text-sm leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span key={t} className="skill-tag">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white border-y border-rim">
      <div className="max-w-6xl mx-auto px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14"
        >
          <span className="section-label">Projects</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-ink leading-tight">
            Things I&apos;ve <span className="text-msu">built.</span>
          </h2>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.07, ease: "easeOut" }}
          className="mb-7"
        >
          <div className="card overflow-hidden group hover:border-msu/30 hover:shadow-lg">
            <div className="h-1.5 bg-msu" />
            <div className="p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-msu uppercase tracking-widest bg-msu-100 border border-msu-200 px-3 py-1 rounded-full">
                      Featured Project
                    </span>
                  </div>
                  <p className="font-mono text-msu text-xs uppercase tracking-widest mb-2">
                    {featured.subtitle}
                  </p>
                  <h3 className="text-3xl font-bold text-ink mb-4">
                    {featured.title}
                  </h3>
                  <p className="text-ink-muted leading-relaxed max-w-2xl mb-6">
                    {featured.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.tech.map((t) => (
                      <span key={t} className="skill-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/sprout"
                      className="inline-flex items-center gap-2 bg-msu text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-msu-600 transition-all duration-200"
                    >
                      Learn More
                      <ArrowRight size={14} />
                    </Link>
                    <a
                      href="https://www.sproutnow.net/#/landing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-msu text-msu px-4 py-2 rounded-lg text-sm font-medium hover:bg-msu-100 transition-all duration-200"
                    >
                      <ExternalLink size={14} />
                      Visit Site
                    </a>
                  </div>
                </div>

                {/* Live site preview */}
                <div className="lg:w-80 xl:w-96 flex-shrink-0">
                  <Link
                    href="/sprout"
                    className="block rounded-xl overflow-hidden border border-rim shadow-md hover:shadow-lg transition-shadow group"
                  >
                    <div className="bg-parchment border-b border-rim px-3 py-2 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                      </div>
                      <div className="flex-1 bg-white/80 rounded px-2 py-0.5 text-[10px] text-ink-faint font-mono truncate">
                        sproutnow.net
                      </div>
                      <ArrowRight size={11} className="text-ink-faint group-hover:text-msu transition-colors flex-shrink-0" />
                    </div>
                    <div className="relative h-80 overflow-hidden bg-msu-100">
                      <iframe
                        src="https://www.sproutnow.net/#/landing"
                        className="absolute top-0 left-0 border-0 pointer-events-none"
                        style={{
                          width: "167%",
                          height: "1200px",
                          transform: "scale(0.6)",
                          transformOrigin: "top left",
                        }}
                        title="Sprout Platform"
                        loading="lazy"
                        tabIndex={-1}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other projects */}
        <div className="grid md:grid-cols-2 gap-5">
          {rest.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i + 2}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
