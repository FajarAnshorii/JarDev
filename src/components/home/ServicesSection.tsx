"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Palette,
  ShoppingCart,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { SectionHeading, StaggerContainer, staggerItem } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const services: Service[] = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Website profesional, responsif, dan modern untuk bisnis Anda.",
    features: ["Custom Website", "Landing Page", "Company Profile", "Blog & CMS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Aplikasi mobile iOS & Android dengan performa tinggi.",
    features: ["React Native", "Flutter", "PWA", "App Store Ready"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Desain antarmuka yang menarik dan pengalaman pengguna yang intuitif.",
    features: ["User Research", "Wireframing", "UI Design", "Prototype"],
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Toko online lengkap dengan fitur pembayaran dan manajemen produk.",
    features: ["Online Store", "Payment Gateway", "Inventory System", "Analytics"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Perawatan dan dukungan teknis untuk menjaga website berjalan optimal.",
    features: ["24/7 Support", "Regular Updates", "Security Patches", "Backup System"],
    color: "from-red-500 to-rose-500",
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-16 md:py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-secondary/5 to-background" />
      <div className="absolute top-1/2 left-0 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 md:w-96 h-64 md:h-96 bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="container-site relative z-10">
        <SectionHeading
          badge="Our Services"
          title="Solusi Digital Terintegrasi"
          subtitle="Apa Yang Kami Tawarkan"
          description="Kami menyediakan berbagai layanan digital untuk membantu bisnis Anda berkembang di era digital."
        />

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          staggerDelay={0.1}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className="group h-full bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden hover-lift">
                <CardContent className="p-4 md:p-6 lg:p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className={cn(
                      "w-12 h-12 md:w-14 md:h-14 rounded-xl bg-linear-to-br p-0.5 mb-4 md:mb-5",
                      service.color
                    )}
                  >
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                      <service.icon className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 md:mb-5 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
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
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-primary text-white font-semibold shadow-glow hover:shadow-glow-lg transition-shadow"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}