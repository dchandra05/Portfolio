export const personal = {
  name: "Dustin J. Chandra",
  nameShort: "Dustin Chandra",
  firstName: "Dustin",
  title: "Computer Engineering Student",
  school: "Michigan State University",
  tagline:
    "I design and build software and hardware solutions, applying engineering knowledge and leveraging AI to solve real problems.",
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
    title: "GM Energy Operations Intern",
    company: "General Motors",
    location: "Warren, MI",
    period: "Summer 2026",
    status: "upcoming",
    bullets: [
      "Joining GM's public charging and home energy systems team at their global headquarters in Warren, MI to incorporate AI into how they sort and analyze energy data, improving on what their current processes can do.",
    ],
    skills: ["Automation", "Data Analytics", "AI"],
  },
  {
    id: "sprout",
    title: "Co-Founder & CTO",
    company: "Sprout",
    location: "East Lansing, MI",
    period: "Jun 2025 – Present",
    status: "current",
    bullets: [
      "Co-built Sprout from scratch with a classmate, a full-stack React app with a Node/Prisma/PostgreSQL backend that is live at sproutnow.net.",
      "Wrote the analytics pipeline that tracks user engagement and module completion so we actually know what is working and what needs to change.",
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
      "Built AI-powered automation workflows against real Wayfair e-commerce data, replacing manual analysis steps with pipelines that ran on their own.",
      "Connected AI models, live data sources, and dashboard outputs into one end-to-end pipeline so the team could go from raw data to visible insight without any manual handoff.",
    ],
    skills: ["AI/ML", "Python", "Automation", "Data Pipelines"],
  },
  {
    id: "dallas-sw",
    title: "Software Engineering Intern",
    company: "Dallas Industries",
    location: "Troy, MI",
    period: "Aug 2025 – Oct 2025",
    status: "past",
    bullets: [
      "Built an automated quote generation tool that cut manual input errors by roughly 90%.",
      "Reduced end-to-end quote time from about 60 minutes to under 10, and the tool generated $450K in prospective revenue within 4 months.",
    ],
    skills: ["Excel", "Microsoft VBA", "Python", "Automation"],
  },
  {
    id: "dallas-ee",
    title: "Electrical Engineering Intern",
    company: "Dallas Industries",
    location: "Troy, MI",
    period: "May 2025 – Jul 2025",
    status: "past",
    bullets: [
      "Designed and built electrical control panels to client specs, ensuring compliance with NEC (NFPA 70) and UL 508A standards.",
      "Worked on metal coil feeders, straighteners, and other automated manufacturing equipment.",
      "Gained hands-on experience with PLCs, sensors, and industrial control systems to improve automation and system performance.",
    ],
    skills: ["Electrical Design", "PLCs", "NEC Standards", "Industrial Automation"],
  },
  {
    id: "alpha-sigma-phi",
    title: "Vice President of Finance",
    company: "Alpha Sigma Phi",
    location: "East Lansing, MI",
    period: "Jan 2025 – Jan 2026",
    status: "past",
    bullets: [
      "Owned the chapter's $200K+ annual budget, tracking every dollar across dues, vendor contracts, and chapter events.",
      "Handled all financial operations for 100+ members including dues collection, reimbursements, and vendor payments with no outstanding disputes during my term.",
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
      "A gamified learning platform Jonah and I built because we kept showing up to internships and realizing nobody had taught us the tools everyone expected us to know. React frontend, Node/Prisma/PostgreSQL backend, with an analytics layer to see what users are actually doing.",
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
      "A pipeline that pulls raw events, runs scheduled backend jobs, and stores processed results. The React dashboard shows system health and metric trends so you do not have to query the database manually.",
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
      "A full-stack app for tracking investment portfolios and learning personal finance basics. I designed the UI in Figma first, then built it out with a FastAPI backend and live market data through the Alpaca API.",
    tech: ["JavaScript", "FastAPI", "AlpacaAPI", "Figma"],
    featured: false,
    github: "",
    live: "",
  },
];

export type SkillLevel = "excel" | "proficient" | "intermediate";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export const skillCategories = [
  {
    label: "Languages",
    icon: "Code2",
    skills: [
      { name: "C++", level: "excel" },
      { name: "JavaScript", level: "proficient" },
      { name: "Python", level: "proficient" },
      { name: "TypeScript", level: "intermediate" },
    ] as Skill[],
  },
  {
    label: "Frontend",
    icon: "Layout",
    skills: [
      { name: "Figma", level: "excel" },
      { name: "React", level: "proficient" },
      { name: "Next.js", level: "intermediate" },
      { name: "Tailwind CSS", level: "intermediate" },
    ] as Skill[],
  },
  {
    label: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "proficient" },
      { name: "SQL", level: "proficient" },
      { name: "FastAPI", level: "intermediate" },
      { name: "Prisma", level: "intermediate" },
    ] as Skill[],
  },
  {
    label: "Cloud & Data",
    icon: "Cloud",
    skills: [
      { name: "Power BI", level: "excel" },
      { name: "AWS", level: "intermediate" },
      { name: "Google Cloud", level: "intermediate" },
    ] as Skill[],
  },
  {
    label: "Concepts",
    icon: "BookOpen",
    skills: [
      { name: "AI / ML", level: "excel" },
      { name: "Data Structures", level: "proficient" },
      { name: "Cybersecurity", level: "proficient" },
      { name: "Computer Architecture", level: "intermediate" },
    ] as Skill[],
  },
];
