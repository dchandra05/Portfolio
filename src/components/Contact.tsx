"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";
import { personal } from "@/lib/data";

const contactMethods = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "dustin.chandra05@gmail.com",
    href: `mailto:${personal.email}`,
    description: "Best for professional inquiries",
  },
  {
    icon: <LinkedInIcon size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/dustinchandra",
    href: personal.linkedin,
    description: "Connect professionally",
  },
  {
    icon: <GitHubIcon size={20} />,
    label: "GitHub",
    value: "github.com/dchandra05",
    href: personal.github,
    description: "See my projects & code",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-20 lg:py-28 bg-msu">
      <div className="max-w-6xl mx-auto px-5 sm:px-8" ref={ref}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-14"
          >
            <span className="block font-mono text-msu-200 text-sm tracking-widest uppercase mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              Let&apos;s work{" "}
              <span className="text-msu-200">together.</span>
            </h2>
            <p className="text-msu-200/75 max-w-lg mx-auto leading-relaxed">
              Whether you have an opportunity, a question, or just want to
              connect — my inbox is always open.
            </p>
          </motion.div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.09,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 hover:bg-white/10 hover:border-msu-200/30 rounded-2xl p-6 text-center transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-msu-200 mx-auto mb-4 group-hover:bg-msu-200/20 transition-colors duration-200">
                  {method.icon}
                </div>
                <p className="font-semibold text-white mb-1.5">{method.label}</p>
                <p className="text-msu-200/60 text-xs mb-3 break-all leading-relaxed">
                  {method.value}
                </p>
                <div className="flex items-center justify-center gap-1 text-msu-200/40 text-xs group-hover:text-msu-200 transition-colors duration-200">
                  <span>{method.description}</span>
                  <ArrowRight size={11} />
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            className="text-center"
          >
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 bg-white text-msu font-semibold px-8 py-3.5 rounded-xl hover:bg-cream transition-colors duration-200 shadow-lg"
            >
              Say Hello
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
