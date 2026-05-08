"use client";

import { motion } from "framer-motion";
import { MessageCircle, PenTool, Code, Rocket, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading, StaggerContainer, staggerItem } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProcessStep {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  duration: string;
  color: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Discovery",
    description: "Kami mendengarkan ide dan kebutuhan Anda secara detail untuk memahami visi proyek.",
    features: [
      "Konsultasi gratis 30 menit",
      "Analisis kebutuhan bisnis",
      "Penawaran solusi terbaik",
      "Timeline estimasi",
    ],
    duration: "1-2 Hari",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    description: "Desain wireframe dan mockup yang menarik dengan UX yang intuitif dan sesuai brand.",
    features: [
      "Wireframing & Architecture",
      "UI/UX Design",
      "Brand Identity Integration",
      "Review & Revisi",
    ],
    duration: "3-7 Hari",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description: "Coding profesional dengan clean code, responsive design, dan performa tinggi.",
    features: [
      "Clean & Modern Code",
      "Responsive Design",
      "Performance Optimization",
      "Continuous Testing",
    ],
    duration: "2-8 Minggu",
    color: "from-green-500 to-emerald-500",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description: "Launching proyek dengan deployment profesional dan maintenance berkelanjutan.",
    features: [
      "Deployment Production",
      "Quality Assurance",
      "Documentation",
      "Maintenance 30 Hari",
    ],
    duration: "1-3 Hari",
    color: "from-orange-500 to-yellow-500",
  },
];

export function WorkflowSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container-site relative z-10">
        <SectionHeading
          badge="Our Process"
          title="Bagaimana Kami Bekerja"
          subtitle="Workflow Terstruktur"
          description="Proses yang transparan dan terstruktur untuk memastikan proyek Anda selesai tepat waktu dengan kualitas terbaik."
        />

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-30" />

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={0.15}
          >
            {processSteps.map((step, index) => (
              <motion.div key={index} variants={staggerItem}>
                <div className="relative h-full group">
                  {/* Card */}
                  <div className="relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift overflow-hidden">
                    {/* Background Glow on Hover */}
                    <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300", step.color)} />

                    {/* Step Number */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={cn("text-5xl font-bold opacity-10 bg-gradient-to-br bg-clip-text", step.color)}>
                        {step.number}
                      </span>
                      <div className={cn("w-12 h-12 rounded-xl bg-gradient-to-br p-[2px]", step.color)}>
                        <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-foreground" />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-5">
                      {step.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="text-foreground">{step.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl glass">
            <div className="text-left mr-4">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Siap Memulai Project Anda?
              </h3>
              <p className="text-muted-foreground">
                Konsultasi gratis dan dapatkan penawaran terbaik hari ini.
              </p>
            </div>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 shadow-glow whitespace-nowrap"
              >
                Mulai Konsultasi
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}