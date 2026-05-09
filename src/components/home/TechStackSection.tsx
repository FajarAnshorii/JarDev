"use client";

import { motion } from "framer-motion";
import { SectionHeading, StaggerContainer, staggerItem } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/utils";

interface TechItem {
  name: string;
  icon: string;
  category: string;
}

const techStack: TechItem[] = [
  // Frontend
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "Next.js", icon: "▲", category: "Frontend" },
  { name: "TypeScript", icon: "🔷", category: "Frontend" },
  { name: "Vue.js", icon: "💚", category: "Frontend" },
  { name: "Tailwind CSS", icon: "🌊", category: "Frontend" },
  { name: "Framer Motion", icon: "🎭", category: "Frontend" },

  // Backend
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "Python", icon: "🐍", category: "Backend" },
  { name: "PostgreSQL", icon: "🐘", category: "Backend" },
  { name: "MongoDB", icon: "🍃", category: "Backend" },
  { name: "Redis", icon: "🔴", category: "Backend" },
  { name: "GraphQL", icon: "◈", category: "Backend" },

  // Mobile
  { name: "React Native", icon: "⚛️", category: "Mobile" },
  { name: "Flutter", icon: "🦋", category: "Mobile" },
  { name: "Expo", icon: "🚀", category: "Mobile" },

  // DevOps & Tools
  { name: "Docker", icon: "🐳", category: "DevOps" },
  { name: "AWS", icon: "☁️", category: "DevOps" },
  { name: "Vercel", icon: "▲", category: "DevOps" },
  { name: "Git", icon: "📦", category: "DevOps" },
  { name: "Figma", icon: "🎨", category: "Design" },
];

const categories = ["All", "Frontend", "Backend", "Mobile", "DevOps", "Design"];

export function TechStackSection() {
  return (
    <section className="relative py-16 md:py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-primary/5 to-background" />

      <div className="container-site relative z-10">
        <SectionHeading
          badge="Tech Stack"
          title="Teknologi Modern & Terpercaya"
          subtitle="Stack Yang Kami Kuasai"
          description="Kami menggunakan teknologi terbaru dan terbaik untuk memberikan hasil yang optimal untuk proyek Anda."
        />

        {/* Tech Grid */}
        <StaggerContainer
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-6"
          staggerDelay={0.05}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group"
            >
              <div className="relative p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift text-center">
                {/* Icon */}
                <div className="text-2xl md:text-4xl lg:text-5xl mb-2 md:mb-4">{tech.icon}</div>

                {/* Name */}
                <h4 className="font-semibold text-xs md:text-base lg:text-lg text-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </h4>

                {/* Category Badge */}
                <span className="absolute top-2 right-2 md:top-4 md:right-4 text-[10px] md:text-[10px] px-2 md:px-3 py-0.5 md:py-1 rounded-full bg-muted text-muted-foreground">
                  {tech.category}
                </span>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Marquee Section */}
        <div className="mt-10 md:mt-16 overflow-hidden">
          <div className="relative">
            {/* Fade Mask */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-20 bg-linear-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-20 bg-linear-to-l from-background to-transparent z-10" />

            {/* Marquee */}
            <div className="animate-marquee flex gap-6 md:gap-8">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-muted/50 border border-border whitespace-nowrap"
                >
                  <span className="text-xl md:text-2xl">{tech.icon}</span>
                  <span className="text-xs md:text-sm font-medium text-foreground">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}