"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  centered?: boolean; // Add centered prop for backward compatibility
  className?: string;
  badgeClassName?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  description,
  align = "center",
  centered = true,
  className,
  badgeClassName,
}: SectionHeadingProps) {
  const isCenter = align === "center" || centered;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "mb-20 md:mb-24",
        isCenter ? "text-center max-w-3xl mx-auto" : "text-left max-w-2xl",
        className
      )}
    >
      {/* Badge */}
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={cn(
            "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full",
            "bg-primary/10 text-primary text-sm font-medium",
            "border border-primary/20",
            badgeClassName
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          {badge}
        </motion.span>
      )}

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-primary font-semibold uppercase tracking-wider text-sm mb-6 mt-6"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
      >
        <span className="heading-gradient">{title}</span>
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 text-muted-foreground text-base sm:text-base md:text-lg leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};