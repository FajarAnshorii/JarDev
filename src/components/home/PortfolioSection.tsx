"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { SectionHeading, StaggerContainer, staggerItem } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

const portfolios: PortfolioItem[] = [
  {
    title: "TechCorp Indonesia",
    category: "Website Development",
    description: "Company profile modern dengan animasi interaktif dan CMS untuk management konten.",
    image: "/portfolio/techcorp.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    link: "https://techcorp.id",
    featured: true,
  },
  {
    title: "ShopFresh E-Commerce",
    category: "E-Commerce",
    description: "Toko online lengkap dengan fitur cart, payment gateway, dan dashboard admin.",
    image: "/portfolio/shopfresh.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "https://shopfresh.id",
    featured: true,
  },
  {
    title: "HealthApp Mobile",
    category: "Mobile App",
    description: "Aplikasi kesehatan dengan fitur tracking, reminder, dan konsultasi dokter.",
    image: "/portfolio/healthapp.jpg",
    tags: ["React Native", "Firebase", "Redux"],
    github: "https://github.com/jardev/healthapp",
  },
  {
    title: "EduLearn Platform",
    category: "Web Application",
    description: "Platform e-learning dengan video streaming, quiz, dan progress tracking.",
    image: "/portfolio/edulearn.jpg",
    tags: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
    link: "https://edulearn.id",
    featured: true,
  },
];

export function PortfolioSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container-site relative z-10">
        <SectionHeading
          badge="Our Portfolio"
          title="Karya Yang Pernah Kami Buat"
          subtitle="Latest Projects"
          description="Berikut adalah beberapa proyek terbaik yang telah kami selesaikan dengan hasil yang memuaskan."
        />

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          staggerDelay={0.15}
        >
          {portfolios.map((project, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className={cn(
                "group",
                project.featured && "md:col-span-2 lg:col-span-1"
              )}
            >
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden hover-lift">
                <CardContent className="p-0 h-full">
                  <div className="relative aspect-video overflow-hidden">
                    {/* Placeholder Image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-6xl opacity-30">
                        {index === 0 ? "🏢" : index === 1 ? "🛒" : index === 2 ? "📱" : "📚"}
                      </span>
                    </div>

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:scale-110 transition-transform"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:scale-110 transition-transform"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-primary text-white border-0">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Category */}
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/portfolio">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}