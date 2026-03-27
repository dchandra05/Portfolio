"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { LinkedInIcon } from "@/components/Icons";

const SPROUT_URL = "https://www.sproutnow.net/#/landing";
const JONAH_LINKEDIN = "https://www.linkedin.com/in/jonah-alsfasser/";
const DUSTIN_LINKEDIN = "https://linkedin.com/in/dustinchandra";

const techGroups = [
  { category: "Frontend", items: ["React", "JavaScript", "HTML", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Prisma"] },
  { category: "Database & APIs", items: ["PostgreSQL", "SupabaseAPI", "AlpacaAPI"] },
  { category: "Platform", items: ["Vercel", "Git", "GitHub"] },
];

const features = [
  {
    icon: "🤖",
    title: "AI Tool Fluency",
    desc: "Students learn to work effectively with modern AI tools — including ChatGPT and Claude Code — turning them into real productivity multipliers.",
    tags: ["ChatGPT", "Claude Code", "AI Workflows"],
  },
  {
    icon: "💻",
    title: "Developer Skills",
    desc: "Hands-on coding, version control, APIs, and the real workflows that professional developers use every day.",
    tags: ["Git", "APIs", "Dev Environments"],
  },
  {
    icon: "📊",
    title: "Financial Literacy",
    desc: "Investing, portfolio management, and personal finance — the money skills schools almost never teach.",
    tags: ["Investing", "Budgeting", "Markets"],
  },
  {
    icon: "🎮",
    title: "Gamified Learning",
    desc: "Progress through structured modules with milestones and achievements that keep engagement high and momentum consistent.",
    tags: ["Modules", "Progress Tracking"],
  },
  {
    icon: "📈",
    title: "Analytics & Insights",
    desc: "Built-in analytics track engagement and completion metrics, driving data-informed improvements to course content.",
    tags: ["Engagement Data", "Iteration"],
  },
  {
    icon: "🔧",
    title: "Practical Projects",
    desc: "Every module ends in a real project — not a quiz. Students leave with work they can show and skills they can use.",
    tags: ["Portfolio-Ready", "Hands-On"],
  },
];

const teamMembers = [
  {
    initials: "DC",
    name: "Dustin J. Chandra",
    role: "Founder & CEO",
    detail: "Michigan State University · Computer Engineering",
    linkedin: DUSTIN_LINKEDIN,
  },
  {
    initials: "JA",
    name: "Jonah Alsfasser",
    role: "Business Partner",
    detail: "",
    linkedin: JONAH_LINKEDIN,
  },
];

export default function SproutPageContent() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Minimal nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-ivory/90 backdrop-blur-md border-b border-rim">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-ink-muted hover:text-ink transition-colors duration-200 text-sm font-medium"
          >
            <ArrowLeft size={15} />
            Back to Portfolio
          </Link>
          <a
            href={SPROUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-msu text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-msu-600 transition-colors duration-200"
          >
            Visit Sprout
            <ExternalLink size={13} />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mb-14"
          >
            <span className="inline-block font-mono text-msu text-sm tracking-widest uppercase bg-msu-100 border border-msu-200 px-3 py-1 rounded-full mb-6">
              Featured Project
            </span>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-ink leading-[0.92] tracking-tight mb-4">
              Sprout
            </h1>
            <p className="text-2xl text-msu font-semibold mb-5">
              Gamified Learning Platform
            </p>
            <p className="text-lg text-ink-muted leading-relaxed mb-8 max-w-2xl">
              Bridging the gap between classroom education and the practical
              skills students actually need — from AI fluency to real developer
              workflows — in an engaging, gamified format.
            </p>
            <a
              href={SPROUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-msu text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-msu-600 transition-colors duration-200 shadow-lg"
            >
              Visit sproutnow.net
              <ExternalLink size={16} />
            </a>
          </motion.div>

          {/* Large browser preview */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <a
              href={SPROUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden border border-rim shadow-xl hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="bg-parchment border-b border-rim px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <span className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <div className="flex-1 bg-white/80 rounded-md px-3 py-1 text-xs text-ink-faint font-mono">
                  sproutnow.net
                </div>
                <ExternalLink
                  size={13}
                  className="text-ink-faint group-hover:text-msu transition-colors flex-shrink-0"
                />
              </div>
              <div className="relative h-[480px] sm:h-[560px] lg:h-[640px] overflow-hidden bg-msu-100">
                <iframe
                  src={SPROUT_URL}
                  className="absolute top-0 left-0 border-0 pointer-events-none"
                  style={{
                    width: "167%",
                    height: "1400px",
                    transform: "scale(0.6)",
                    transformOrigin: "top left",
                  }}
                  title="Sprout Platform"
                  loading="lazy"
                  tabIndex={-1}
                />
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 lg:py-28 bg-white border-y border-rim">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="section-label">The Problem</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-ink mb-6 leading-tight">
                Traditional education
                <br />
                <span className="text-msu">leaves a gap.</span>
              </h2>
              <div className="space-y-4 text-ink-muted leading-relaxed">
                <p>
                  Students graduate with theoretical knowledge but little experience
                  using the tools that define modern work. The AI revolution is
                  reshaping every industry, yet most curricula haven&apos;t caught up.
                </p>
                <p>
                  The result: graduates who know the textbook but are unprepared for
                  the tools, workflows, and expectations they&apos;ll face on day one
                  of any modern job.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                {
                  title: "No AI fluency",
                  desc: "Students graduate without knowing how to effectively use AI tools that now dominate every workplace.",
                },
                {
                  title: "Missing workflows",
                  desc: "Real developer and professional workflows aren't taught — version control, APIs, deployment.",
                },
                {
                  title: "Theory-heavy",
                  desc: "Heavy focus on theory with minimal hands-on, practical application of what's actually used.",
                },
                {
                  title: "Day-one gap",
                  desc: "Employers consistently report that graduates lack the job-ready skills needed from day one.",
                },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="card p-5 hover:border-msu/25 transition-colors"
                >
                  <p className="font-semibold text-ink mb-2 text-sm">{title}</p>
                  <p className="text-ink-faint text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="section-label inline-block">The Solution</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-ink mb-5 leading-tight">
              Learn what{" "}
              <span className="text-msu">actually matters.</span>
            </h2>
            <p className="text-ink-muted leading-relaxed text-lg">
              Sprout delivers interactive, gamified modules covering the practical
              skills traditional education skips — from modern AI tools to real
              developer workflows.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
                className="card p-6 hover:border-msu/25 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="text-2xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-ink mb-2">{feature.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed mb-4">
                  {feature.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {feature.tags.map((tag) => (
                    <span key={tag} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 lg:py-28 bg-white border-y border-rim">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12"
          >
            <span className="section-label">Built With</span>
            <h2 className="text-4xl font-bold text-ink leading-tight">
              The <span className="text-msu">tech stack.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techGroups.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="card p-5 hover:border-msu/25 hover:shadow-md"
              >
                <p className="section-label !text-xs !mb-3">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="skill-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12"
          >
            <span className="section-label">The Team</span>
            <h2 className="text-4xl font-bold text-ink leading-tight">
              Who&apos;s <span className="text-msu">building it.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="card p-6 hover:border-msu/25 hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-msu flex items-center justify-center text-white font-bold text-sm font-mono mb-4">
                  {member.initials}
                </div>
                <p className="font-bold text-ink text-lg">{member.name}</p>
                <p className="text-msu font-medium text-sm mt-0.5 mb-3">
                  {member.role}
                </p>
                {member.detail && (
                  <p className="text-ink-muted text-sm mb-3">{member.detail}</p>
                )}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-msu text-sm font-medium hover:underline"
                >
                  <LinkedInIcon size={14} />
                  LinkedIn
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-msu">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              See it for yourself.
            </h2>
            <p className="text-msu-200/80 max-w-md mx-auto mb-8 leading-relaxed">
              Sprout is live and actively being developed. Check out the platform
              and see what we&apos;re building.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={SPROUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-msu font-semibold px-8 py-3.5 rounded-xl hover:bg-cream transition-colors duration-200 shadow-lg"
              >
                Visit Sprout
                <ExternalLink size={16} />
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3.5 rounded-xl font-medium hover:bg-white/10 transition-colors duration-200"
              >
                <ArrowLeft size={16} />
                Back to Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
