"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-10" />
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px]" />

      <div className="container-site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Main CTA Card */}
          <div className="relative p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl sm:rounded-3xl overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-background" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />

            {/* Border Gradient */}
            <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-primary via-secondary to-accent opacity-50" />

            {/* Content */}
            <div className="relative text-center max-w-3xl mx-auto">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary text-sm font-medium">
                  Available for New Projects
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              >
                <span className="heading-gradient">
                  Siap Wujudkan Ide Digital Anda?
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed"
              >
                Jangan biarkan ide bisnis Anda hanya jadi impian. Hubungi kami
                sekarang dan dapatkan konsultasi gratis untuk proyek Anda.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-primary hover:opacity-90 shadow-glow hover:shadow-glow-lg transition-all duration-300 text-lg px-8 py-6 h-auto group"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Chat WhatsApp
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <Link href="/contact#schedule">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 h-auto border-2 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                  >
                    <Calendar className="mr-2 w-5 h-5" />
                    Jadwalkan Call
                  </Button>
                </Link>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Response &lt; 1 Jam
                </span>
                <span className="hidden sm:block">•</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Konsultasi Gratis
                </span>
                <span className="hidden sm:block">•</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  No Commitment
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}