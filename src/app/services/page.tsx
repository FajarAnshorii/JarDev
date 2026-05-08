import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Globe, Smartphone, Palette, ShoppingCart, Zap, Code, Monitor, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Services",
  description: "Layanan pembuatan website profesional, mobile app, UI/UX design, dan digital solution dari JarDev Builder.",
};

const services = [
  {
    icon: Globe,
    title: "Website Development",
    slug: "website-development",
    description: "Website profesional dengan performa tinggi, responsif, dan SEO-optimized untuk bisnis Anda.",
    features: ["Landing Page", "Company Profile", "Portal Berita", "Web Application"],
    price: "Mulai dari Rp 2.5jt",
    color: "primary",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Aplikasi mobile cross-platform dengan React Native & Flutter untuk iOS dan Android.",
    features: ["iOS App", "Android App", "React Native", "Flutter"],
    price: "Mulai dari Rp 5jt",
    color: "secondary",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description: "Desain antarmuka yang menarik dan user experience yang intuitif untuk produk digital Anda.",
    features: ["Wireframing", "Prototyping", "Design System", "Mobile-first Design"],
    price: "Mulai dari Rp 1.5jt",
    color: "accent",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    slug: "ecommerce-development",
    description: "Toko online lengkap dengan fitur payment gateway, inventory, dan manajemen pesanan.",
    features: ["Payment Gateway", "Inventory System", "Order Management", "Analytics Dashboard"],
    price: "Mulai dari Rp 5jt",
    color: "primary",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    slug: "performance-optimization",
    description: "Optimasi kecepatan dan performa website untuk Core Web Vitals yang maksimal.",
    features: ["Speed Optimization", "Core Web Vitals", "Lazy Loading", "CDN Setup"],
    price: "Mulai dari Rp 1jt",
    color: "secondary",
  },
  {
    icon: Code,
    title: "Custom Web Application",
    slug: "custom-web-application",
    description: "Aplikasi web kustom sesuai kebutuhan bisnis dengan teknologi modern.",
    features: ["SaaS Application", "Admin Dashboard", "API Integration", "Database Design"],
    price: "Mulai dari Rp 10jt",
    color: "accent",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Consultation",
    description: "Kami mendengarkan kebutuhan Anda, menganalisis target audience, dan merencanakan solusi terbaik.",
  },
  {
    step: "02",
    title: "Design & Prototype",
    description: "Membuat wireframe, mockup, dan prototype interaktif untuk visualisasi produk sebelum development.",
  },
  {
    step: "03",
    title: "Development",
    description: "Coding dengan best practices, clean code, dan teknologi terbaru untuk hasil yang optimal.",
  },
  {
    step: "04",
    title: "Testing & QA",
    description: "Testing menyeluruh untuk memastikan semua fitur berfungsi dengan baik di berbagai browser dan device.",
  },
  {
    step: "05",
    title: "Launch & Deployment",
    description: "Deploy ke server production dengan setup CI/CD dan monitoring untuk performa optimal.",
  },
  {
    step: "06",
    title: "Maintenance & Support",
    description: "Dukungan maintenance berkelanjutan, update security, dan improvement fitur.",
  },
];

const technologies = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Prisma", category: "ORM" },
  { name: "NextAuth", category: "Auth" },
  { name: "Stripe", category: "Payments" },
  { name: "Vercel", category: "Deployment" },
  { name: "AWS", category: "Cloud" },
  { name: "React Native", category: "Mobile" },
  { name: "Flutter", category: "Mobile" },
  { name: "Figma", category: "Design" },
  { name: "Docker", category: "DevOps" },
];

const colorMap: Record<string, string> = {
  primary: "bg-gradient-primary text-white",
  secondary: "bg-gradient-secondary text-white",
  accent: "bg-gradient-accent text-black",
};

const iconColorMap: Record<string, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Back to Home Button */}
      <div className="container-site pt-6 pb-0">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
          <Home className="w-4 h-4" />
          Kembali ke Beranda
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="orb orb-primary w-[400px] h-[400px] -top-48 -right-48 opacity-30" />
        <div className="orb orb-secondary w-[300px] h-[300px] bottom-0 -left-48 opacity-20" />

        <div className="container-site relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 md:mb-8 border-primary/50 text-primary">
              <Monitor className="w-4 h-4 mr-2" />
              Layanan Kami
            </Badge>
            <h1 className="heading-display text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-8">
              Solusi Digital <span className="text-gradient-primary">Komprehensif</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
              Dari website sederhana hingga aplikasi kompleks, kami hadir memberikan solusi digital yang membantu bisnis Anda berkembang di era digital.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-2">
                  Lihat Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 lg:pt-32 relative">
        <div className="container-site">
          <SectionHeading
            badge="Layanan"
            title="Apa Yang Kami Tawarkan"
            subtitle="Pilihan layanan lengkap untuk memenuhi semua kebutuhan digital bisnis Anda"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:mt-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={index} href={`/services/${service.slug}`}>
                  <Card
                    className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover-lift cursor-pointer h-full"
                  >
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${colorMap[service.color]}`} />

                    <CardHeader className="p-6 md:p-8 pb-4">
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl ${colorMap[service.color]} flex items-center justify-center mb-4 md:mb-6 shadow-lg`}>
                        <Icon className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <CardTitle className="text-xl md:text-2xl mb-3 md:mb-4">{service.title}</CardTitle>
                      <CardDescription className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-6 md:p-8 pt-0">
                      <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 md:gap-3 text-sm text-muted-foreground">
                            <Check className={`w-4 h-4 md:w-5 md:h-5 ${iconColorMap[service.color]} mt-0.5 shrink-0`} />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6 border-t border-border">
                        <span className="text-sm font-medium text-muted-foreground">
                          {service.price}
                        </span>
                        <Button variant="ghost" size="sm" className="group-hover:text-primary transition-colors">
                          Lihat Detail
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 lg:pt-32 bg-card/50 relative">
        <div className="container-site">
          <SectionHeading
            badge="Proses"
            title="Bagaimana Kami Bekerja"
            subtitle="Metodologi yang transparan dan terstruktur untuk hasil проекта yang maksimal"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16">
            {process.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 md:p-8 rounded-2xl border border-border hover:border-primary/30 transition-all">
                  <div className="text-5xl md:text-6xl font-bold text-primary/10 mb-4 md:mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-24 lg:pt-32 relative">
        <div className="container-site">
          <SectionHeading
            badge="Teknologi"
            title="Tech Stack Yang Kami Kuasai"
            subtitle="Menggunakan teknologi modern dan tools terbaru untuk hasil yang berkualitas"
            centered
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 md:gap-6 mt-16">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/50 hover-lift text-center transition-all"
              >
                <div className="text-2xl md:text-3xl mb-2 md:mb-3">
                  {tech.category === "Frontend" && "⚛️"}
                  {tech.category === "Backend" && "🟢"}
                  {tech.category === "Database" && "🗄️"}
                  {tech.category === "ORM" && "🔗"}
                  {tech.category === "Auth" && "🔐"}
                  {tech.category === "Payments" && "💳"}
                  {tech.category === "Deployment" && "🚀"}
                  {tech.category === "Cloud" && "☁️"}
                  {tech.category === "Mobile" && "📱"}
                  {tech.category === "Design" && "🎨"}
                  {tech.category === "Styling" && "💅"}
                  {tech.category === "DevOps" && "⚙️"}
                </div>
                <p className="text-xs md:text-sm font-medium group-hover:text-primary transition-colors">
                  {tech.name}
                </p>
                <p className="text-[10px] md:text-xs text-muted-foreground mt-1 md:mt-2">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="orb orb-primary w-[500px] h-[500px] -top-48 left-1/2 -translate-x-1/2 opacity-20" />

        <div className="container-site relative z-10">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h2 className="heading-display text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
              Siap Mengubah Ide Menjadi <span className="text-gradient-primary">Realitas</span>?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Konsultasi gratis dengan tim kami. Dapatkan penawaran terbaik untuk proyek Anda.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow text-base md:text-lg px-8 md:px-10 py-5 md:py-6">
                Mulai Konsultasi
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
