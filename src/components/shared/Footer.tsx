"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Globe, Send, MessageCircle, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "628990415500";

const footerLinks = {
  services: [
    { href: "/services", label: "Website Development", desc: "Landing page, company profile, web app" },
    { href: "/services", label: "Mobile App Development", desc: "iOS & Android apps" },
    { href: "/services", label: "UI/UX Design", desc: "Wireframing, prototyping, design system" },
    { href: "/services", label: "E-Commerce", desc: "Online store dengan payment gateway" },
    { href: "/pricing", label: "Lihat Semua Paket", desc: "Mulai dari Rp 2.5jt", highlight: true },
  ],
  company: [
    { href: "/about", label: "About Us", desc: "Kenali tim kami" },
    { href: "/portfolio", label: "Portfolio", desc: "150+ project selesai" },
    { href: "/pricing", label: "Pricing", desc: "Harga transparan" },
    { href: "/blog", label: "Blog", desc: "Tips & tutorial" },
    { href: "/contact", label: "Contact", desc: "Konsultasi gratis" },
  ],
  resources: [
    { href: "/faq", label: "FAQ", desc: "Pertanyaan umum" },
    { href: "/terms", label: "Terms of Service", desc: "Syarat & ketentuan" },
    { href: "/privacy", label: "Privacy Policy", desc: "Kebijakan privasi" },
    { href: "/cookies", label: "Cookie Policy", desc: "Kebijakan cookie" },
  ],
};

const socialLinks = [
  { icon: Globe, href: "https://github.com", label: "GitHub" },
  { icon: Globe, href: "https://instagram.com", label: "Instagram" },
  { icon: Globe, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Globe, href: "https://twitter.com", label: "Twitter" },
  { icon: Globe, href: "https://youtube.com", label: "YouTube" },
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "contact@jardev.builder", href: "mailto:contact@jardev.builder" },
  { icon: Phone, label: "Phone", value: "+62 899 0415 500", href: `https://wa.me/${WHATSAPP_NUMBER}` },
  { icon: MapPin, label: "Location", value: "Jakarta, Indonesia", href: "#" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Halo, saya ingin konsultasi tentang project web development. Mohon info lebih lanjut.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };
  return (
    <footer className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-primary/10 to-transparent rounded-full blur-[100px]" />

      <div className="relative pt-20 pb-10">
        <div className="container-site">
          {/* Quick Contact Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-primary/10 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10 sm:mb-16 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold">Chat Langsung dengan Tim Kami</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">Respon cepat via WhatsApp. Konsultasi gratis!</p>
              </div>
            </div>
            <Button
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat Sekarang
            </Button>
          </motion.div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <span className="text-2xl font-bold heading-gradient">JarDev</span>
                  <span className="block text-xs text-muted-foreground tracking-wider uppercase">
                    Builder
                  </span>
                </div>
              </Link>

              <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
                Membangun solusi digital yang mengubah ide menjadi kenyataan.
                Kami memberikan hasil berkualitas tinggi untuk bisnis Anda.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      {info.value}
                    </a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "w-10 h-10 rounded-lg bg-muted flex items-center justify-center",
                        "text-muted-foreground hover:text-foreground hover:bg-primary/10",
                        "transition-colors duration-200"
                      )}
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm transition-colors",
                        link.highlight
                          ? "text-primary font-medium hover:text-primary/80"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                Newsletter
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Dapatkan tips dan info terbaru seputar web development.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <Input
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-muted border-border focus:border-primary"
                />
                <Button
                  type="submit"
                  variant="outline"
                  className="w-full border-primary/50 text-primary hover:bg-primary/10"
                >
                  {subscribed ? (
                    <>Subscribed! ✓</>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          <Separator className="bg-border mb-8" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()}{" "}
                <span className="text-foreground font-medium">JarDev Builder</span>.
                All rights reserved.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="hover:text-foreground transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}