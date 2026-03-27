import type { Metadata } from "next";
import SproutPageContent from "@/components/SproutPageContent";

export const metadata: Metadata = {
  title: "Sprout – Gamified Learning Platform | Dustin Chandra",
  description:
    "Sprout is a full-stack gamified learning platform designed to bridge the gap between classroom education and real-world skills — teaching students AI tools, developer workflows, and practical knowledge that traditional education skips.",
};

export default function SproutPage() {
  return <SproutPageContent />;
}
