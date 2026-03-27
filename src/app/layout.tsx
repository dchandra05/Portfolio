import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dustin Chandra – Computer Engineering Student at MSU",
  description:
    "Portfolio of Dustin J. Chandra — Computer Engineering student at Michigan State University. Incoming GM Energy Operations Intern. Building impactful software through engineering, data, and entrepreneurship.",
  keywords: [
    "Dustin Chandra",
    "Computer Engineering",
    "Michigan State University",
    "Software Engineer",
    "Portfolio",
    "General Motors",
    "Sprout",
  ],
  authors: [{ name: "Dustin J. Chandra" }],
  openGraph: {
    title: "Dustin Chandra – Computer Engineering @ MSU",
    description:
      "Portfolio of Dustin J. Chandra — Engineer, Founder, and Incoming GM Intern.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-cream text-ink antialiased">{children}</body>
    </html>
  );
}
