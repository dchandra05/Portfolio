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
    title: "AI Literacy",
    desc: "Hands-on practice with ChatGPT, Claude, and AI coding tools. Not just knowing they exist but actually being able to use them as part of a real workflow.",
    tags: ["ChatGPT", "Claude Code", "AI Workflows"],
  },
  {
    icon: "💻",
    title: "Developer Skills",
    desc: "Git, APIs, environment setup, and deployment basics. The unglamorous infrastructure that every professional developer uses before writing a single line of product code.",
    tags: ["Git", "APIs", "Dev Environments"],
  },
  {
    icon: "📊",
    title: "Financial Literacy",
    desc: "How investing actually works, what an index fund is, how to build a budget you will stick to, and why compound interest matters more than most courses let on. The financial foundation schools consistently skip.",
    tags: ["Investing", "Budgeting", "Markets"],
  },
  {
    icon: "🎮",
    title: "Gamified Learning",
    desc: "Modules are structured with clear milestones so progress feels concrete. No 40-minute lectures, just the next step and then the one after that.",
    tags: ["Modules", "Progress Tracking"],
  },
  {
    icon: "📈",
    title: "Analytics & Insights",
    desc: "I built the analytics layer myself so we can see exactly where students drop off and which modules are worth keeping. We iterate on content the same way you would iterate on a product.",
    tags: ["Engagement Data", "Iteration"],
  },
  {
    icon: "🔧",
    title: "Practical Projects",
    desc: "Each module ends with something you actually built, not a multiple-choice quiz. The goal is a portfolio of real work, not a certificate.",
    tags: ["Portfolio-Ready", "Hands-On"],
  },
];

const teamMembers = [
  {
    initials: "DC",
    name: "Dustin J. Chandra",
    role: "Co-Founder & CTO",
    detail: "Michigan State University · Computer Engineering",
    linkedin: DUSTIN_LINKEDIN,
  },
  {
    initials: "JA",
    name: "Jonah Alsfasser",
    role: "Co-Founder & CEO",
    detail: "Michigan State University · Computational Data Science",
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
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
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
              Jonah and I built Sprout because we kept showing up to internships
              and realizing nobody had taught us the tools everyone expected us
              to know. AI workflows, version control, how money actually works,
              the stuff that matters on day one.
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
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
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
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="section-label">The Problem</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-ink mb-6 leading-tight">
                Traditional education
                <br />
                <span className="text-msu">leaves a gap.</span>
              </h2>
              <div className="space-y-4 text-ink-muted leading-relaxed">
                <p>
                  I noticed it my first week at Dallas Industries. I had four
                  semesters of CS theory and zero experience with the tools my
                  team used every day. Git workflows, API integrations,
                  AI-assisted development, none of it was in the syllabus.
                </p>
                <p>
                  Jonah had the same experience on the finance and business
                  side. Nobody taught him how to read a brokerage account or
                  manage a real budget until he had to figure it out himself.
                  So instead of waiting for a curriculum to catch up, we built
                  what we wished had existed.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                {
                  title: "No AI literacy",
                  desc: "Most programs still treat AI as optional. By graduation, peers who figured it out on their own are already ahead.",
                },
                {
                  title: "Missing workflows",
                  desc: "Version control, API integrations, deployment. The daily infrastructure of any dev job that is rarely taught but immediately expected.",
                },
                {
                  title: "Theory-heavy",
                  desc: "Four years of coursework can leave you great at explaining algorithms and completely lost when someone asks you to ship something.",
                },
                {
                  title: "Financial blind spots",
                  desc: "Investing, budgeting, understanding a paycheck. Most students leave college without ever being taught the basics of personal finance.",
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
              Sprout covers the skills that do not make it into most syllabi.
              How to actually use AI tools, how professional dev workflows run,
              and how to manage your own money. Structured modules, real
              projects, and enough gamification to make it worth finishing.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
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
                transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
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
                transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
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
              Sprout is live. We&apos;re still building, adding modules, improving
              the analytics, expanding the content. Come see where it is right now.
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
