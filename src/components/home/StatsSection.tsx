"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading, StaggerContainer, staggerItem } from "@/components/shared/SectionHeading";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    value: 150,
    suffix: "+",
    label: "Projects Completed",
    description: "Website & aplikasi yang telah berhasil dibangun",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Tingkat kepuasan klien terhadap hasil kerja",
  },
  {
    value: 50,
    suffix: "+",
    label: "Happy Clients",
    description: "Klien yang puas dengan layanan kami",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years Experience",
    description: "Tahun pengalaman di industri digital",
  },
];

function Counter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, inView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const [inView, setInView] = useState(false);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />

      <div className="container-site relative z-10">
        <SectionHeading
          badge="Our Achievements"
          title="Numbers Speak Louder"
          subtitle="Track Record Kami"
          description="Dengan pengalaman bertahun-tahun, kami telah membantu banyak bisnis untuk berkembang secara digital."
        />

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          staggerDelay={0.15}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="relative group"
              onViewportEnter={() => setInView(true)}
            >
              {/* Card */}
              <div className="relative p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative">
                  {/* Big Number */}
                  <div className="text-5xl md:text-6xl font-bold text-gradient-primary mb-4">
                    <Counter
                      value={stat.value}
                      suffix={stat.suffix}
                      inView={inView}
                    />
                  </div>

                  {/* Label */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-primary/20 to-transparent rounded-bl-full" />
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}