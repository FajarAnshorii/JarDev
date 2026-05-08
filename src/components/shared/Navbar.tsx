"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

const serviceLinks = [
  { href: "/services/website-development", label: "Website Development", desc: "Landing page, company profile, web app", emoji: "🌐" },
  { href: "/services/mobile-app-development", label: "Mobile App Development", desc: "iOS & Android apps", emoji: "📱" },
  { href: "/services/ui-ux-design", label: "UI/UX Design", desc: "Wireframing, prototyping, design system", emoji: "🎨" },
  { href: "/services/ecommerce-development", label: "E-Commerce Development", desc: "Online store dengan payment gateway", emoji: "🛒" },
  { href: "/services/performance-optimization", label: "Performance Optimization", desc: "Core Web Vitals optimization", emoji: "⚡" },
  { href: "/services/custom-web-application", label: "Custom Web Application", desc: "SaaS, admin dashboard, API integration", emoji: "💻" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/90 glass border-b border-border py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container-site">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-shadow duration-300">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold heading-gradient">JarDev</span>
                <span className="text-[10px] text-muted-foreground -mt-1 tracking-wider uppercase">
                  Builder
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg",
                    pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              ))}

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg",
                  pathname.startsWith("/services")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}>
                  Services
                  {pathname.startsWith("/services") && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80 p-2 bg-card border-border">
                  {serviceLinks.map((service) => (
                    <DropdownMenuItem key={service.href}>
                      <Link
                        href={service.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer w-full"
                      >
                        <span className="text-2xl">{service.emoji}</span>
                        <div>
                          <p className="font-medium">{service.label}</p>
                          <p className="text-sm text-muted-foreground">{service.desc}</p>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <div className="border-t border-border mt-2 pt-2">
                    <DropdownMenuItem>
                      <Link href="/services" className="flex items-center justify-center gap-2 text-primary font-medium w-full">
                        Lihat Semua Services
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center gap-3">
              <ThemeToggle />

              <Link href="/contact" className="hidden lg:block">
                <Button className="bg-gradient-primary hover:opacity-90 shadow-glow hover:shadow-glow-lg transition-all duration-300">
                  Mulai Project
                </Button>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-background/95 backdrop-blur-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-card border-l border-border p-6 pt-24"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-xl text-lg font-medium transition-all duration-200",
                        pathname === link.href
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="mt-6"
                >
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-gradient-primary hover:opacity-90 shadow-glow">
                      Mulai Project
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}