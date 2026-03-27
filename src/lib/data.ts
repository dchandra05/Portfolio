export const personal = {
  name: "Dustin J. Chandra",
  nameShort: "Dustin Chandra",
  firstName: "Dustin",
  title: "Computer Engineering Student",
  school: "Michigan State University",
  tagline:
    "Building impactful software at the intersection of engineering, data, and entrepreneurship.",
  location: "East Lansing, MI",
  email: "dustin.chandra05@gmail.com",
  phone: "(248) 615-5015",
  linkedin: "https://linkedin.com/in/dustinchandra",
  github: "https://github.com/dchandra05",
  resume: "/resume.pdf",
};

export const education = {
  school: "Michigan State University",
  degree: "B.S. Computer Engineering",
  minors: ["Entrepreneurship", "Economics"],
  gpa: "3.6 / 4.0",
  period: "Aug 2023 – May 2027 (Expected)",
  location: "East Lansing, MI",
};

export type ExperienceStatus = "upcoming" | "current" | "past";

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  status: ExperienceStatus;
  bullets: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: "gm",
    title: "Energy Operations Intern",
    company: "General Motors",
    location: "Warren, MI",
    period: "Summer 2026",
    status: "upcoming",
    bullets: [
      "Incoming intern joining the Energy Operations team at GM's global headquarters.",
    ],
    skills: ["Engineering", "Energy Systems", "Operations"],
  },
  {
    id: "sprout",
    title: "Co-Founder & CTO",
    company: "Sprout",
    location: "East Lansing, MI",
    period: "Jun 2025 – Present",
    status: "current",
    bullets: [
      "Developed a full-stack gamified learning platform using React, Prisma, and PostgreSQL, supporting interactive, modular learning experiences.",
      "Built automated analytics pipelines to track user engagement and completion metrics, enabling data-driven iteration.",
    ],
    skills: ["React", "Node.js", "Prisma", "PostgreSQL", "SupabaseAPI"],
  },
  {
    id: "wayfair",
    title: "AI Automation Extern",
    company: "Wayfair",
    location: "Remote",
    period: "Nov 2025 – Mar 2026",
    status: "past",
    bullets: [
      "Deployed AI-driven automation workflows using real e-commerce store data to streamline analysis.",
      "Designed and built end-to-end automated pipelines integrating AI models, data sources, and dashboard outputs.",
    ],
    skills: ["AI/ML", "Python", "Automation", "Data Pipelines"],
  },
  {
    id: "dallas",
    title: "Software Engineering Intern",
    company: "Dallas Industries",
    location: "Troy, MI",
    period: "May 2025 – Oct 2025",
    status: "past",
    bullets: [
      "Designed and implemented an automated quote generation tool, reducing manual input errors by ~90%.",
      "Cut end-to-end quote time from ~60 minutes to under 10 minutes — generating $450K in prospective revenue within 4 months.",
    ],
    skills: ["JavaScript", "Automation", "Full-Stack"],
  },
  {
    id: "alpha-sigma-phi",
    title: "Vice President of Finance",
    company: "Alpha Sigma Phi",
    location: "East Lansing, MI",
    period: "Jan 2025 – Jan 2026",
    status: "past",
    bullets: [
      "Managed and balanced an annual budget of over $200,000.",
      "Oversaw all financial transactions including dues collection, vendor payments, and reimbursements.",
    ],
    skills: ["Finance", "Budget Management", "Leadership"],
  },
];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  featured: boolean;
  github: string;
  live: string;
}

export const projects: Project[] = [
  {
    id: "sprout",
    title: "Sprout",
    subtitle: "Gamified Learning Platform",
    description:
      "A full-stack gamified learning platform designed to make education engaging through interactive, modular experiences. Built automated analytics pipelines to track engagement and drive data-informed content iteration.",
    tech: ["React", "JavaScript", "HTML", "Node.js", "Prisma", "PostgreSQL", "SupabaseAPI", "AlpacaAPI"],
    featured: true,
    github: "",
    live: "https://www.sproutnow.net/#/landing",
  },
  {
    id: "data-pipeline",
    title: "Automated Data Pipeline",
    subtitle: "& Monitoring Dashboard",
    description:
      "A data pipeline that ingests raw events, runs automated backend jobs, and stores results for analysis. React dashboard displays system health and metric trends in near real time.",
    tech: ["JavaScript", "Node.js", "React", "PostgreSQL", "Prisma"],
    featured: false,
    github: "",
    live: "",
  },
  {
    id: "finance-tracker",
    title: "Financial Portfolio Tracker",
    subtitle: "Education & Investing",
    description:
      "A full-stack financial education and portfolio tracking app for investment tracking and learning core financial concepts, with a clean UI designed in Figma.",
    tech: ["JavaScript", "FastAPI", "AlpacaAPI", "Figma"],
    featured: false,
    github: "",
    live: "",
  },
];

export const skillCategories = [
  {
    label: "Languages",
    icon: "Code2",
    skills: ["JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    label: "Frontend",
    icon: "Layout",
    skills: ["React", "Next.js", "Tailwind CSS", "Figma"],
  },
  {
    label: "Backend",
    icon: "Server",
    skills: ["Node.js", "FastAPI", "PostgreSQL", "Prisma"],
  },
  {
    label: "Cloud & Data",
    icon: "Cloud",
    skills: ["AWS", "Google Cloud", "Power BI"],
  },
  {
    label: "Concepts",
    icon: "BookOpen",
    skills: ["Data Structures", "AI / ML", "Cybersecurity", "Computer Architecture"],
  },
];
