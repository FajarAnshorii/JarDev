"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { SectionHeading, StaggerContainer, staggerItem } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  projectType: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ahmad Wijaya",
    role: "CEO",
    company: "TechStart Indonesia",
    avatar: "/avatars/ahmad.jpg",
    content:
      "JarDev Builder membantu kami membangun website company profile yang luar biasa. Hasilnya exceeded our expectations! Tim sangat profesional dan responsif.",
    rating: 5,
    projectType: "Company Website",
  },
  {
    name: "Sarah Putri",
    role: "Marketing Manager",
    company: "FashionHub",
    avatar: "/avatars/sarah.jpg",
    content:
      "Aplikasi mobile yang dikembangkan oleh JarDev sangat user-friendly dan performant. Sales kami increase 40% sejak launching. Highly recommended!",
    rating: 5,
    projectType: "Mobile App",
  },
  {
    name: "Budi Santoso",
    role: "Founder",
    company: "EduLearn Platform",
    avatar: "/avatars/budi.jpg",
    content:
      "Landing page yang dibuat oleh JarDev meningkatkan conversion rate kami significantly. Design yang modern dan loading speed yang sangat cepat.",
    rating: 5,
    projectType: "Landing Page",
  },
  {
    name: "Diana Chen",
    role: "Director",
    company: "LogiTrack Solutions",
    avatar: "/avatars/diana.jpg",
    content:
      "Tim JarDev sangat kreatif dalam solving problems. Website e-commerce kami sekarang lebih modern dan mudah digunakan. Great job!",
    rating: 5,
    projectType: "E-Commerce",
  },
];

export function TestimonialSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-secondary/5 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container-site relative z-10">
        <SectionHeading
          badge="Testimonials"
          title="Kata Mereka Yang Sudah Percaya"
          subtitle="Client Feedback"
          description="Keberhasilan proyek adalah prioritas utama kami. Dengarkan pengalaman langsung dari klien kami."
        />

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          staggerDelay={0.15}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className="h-full bg-card border-border hover:border-primary/30 transition-all duration-300 hover-lift relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-primary/10">
                  <Quote className="w-16 h-16" />
                </div>

                <CardContent className="p-6 md:p-8">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground leading-relaxed mb-6 relative z-10">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Project Type Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
                    {testimonial.projectType}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border-2 border-primary/20">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-primary text-white">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}