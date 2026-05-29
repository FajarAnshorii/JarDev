import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Star, Calendar, Folder, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Kumpulan hasil kerja JarDev Builder - Website, mobile app, dan desain UI/UX untuk berbagai industri.",
};

const categories = [
  { id: "all", label: "Semua", icon: Folder },
  { id: "website", label: "Website", icon: ExternalLink },
  { id: "mobile", label: "Mobile App", icon: Calendar },
  { id: "design", label: "UI/UX Design", icon: Star },
  { id: "ecommerce", label: "E-Commerce", icon: Calendar },
];

const projects = [
  {
    id: 1,
    title: "Company Profile ME GACOAN",
    category: "website",
    categoryLabel: "Website",
    description: "Website Profil Perusahaan (Company Profile) resmi ME GACOAN bergaya Dark-Modern Sinematik yang interaktif, enerjik, dan dioptimalkan secara realtime dengan Next.js & Tailwind CSS.",
    image: "/portfolio/gacoan.jpg",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    link: "https://me-gacoan-profile.vercel.app/",
    github: "https://github.com/FajarAnshorii/ME-GACOAN-Company-Profile.git",
    year: "2026",
    featured: true,
  }
];

export default function PortfolioPage() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="orb orb-primary w-52 sm:w-72 md:w-96 lg:w-[400px] h-52 sm:h-72 md:h-96 lg:h-[400px] -top-24 sm:-top-32 md:-top-32 -right-24 sm:-right-32 md:-right-32 opacity-20" />
        <div className="orb orb-secondary w-36 sm:w-56 md:w-72 lg:w-[300px] h-36 sm:h-56 md:h-72 lg:h-[300px] bottom-0 -left-24 sm:-left-32 md:-left-32 opacity-15" />

        <div className="container-site relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
              <Folder className="w-4 h-4 mr-2" />
              Portfolio Kami
            </Badge>
            <h1 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
              Hasil Kerja yang <span className="text-gradient-primary">Berbicara</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Kumpulan project yang telah kami kerjakan untuk berbagai klien dari berbagai industri.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-8 md:py-12 relative">
        <div className="container-site">
          <SectionHeading
            badge="Featured"
            title="Project Unggulan"
            subtitle="Project terbaik yang menjadi kebanggaan kami"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 hover-lift"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl sm:text-6xl opacity-50 group-hover:scale-110 transition-transform duration-500">
                      {project.category === "ecommerce" && "🛒"}
                      {project.category === "website" && "🌐"}
                      {project.category === "mobile" && "📱"}
                      {project.category === "design" && "🎨"}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-0">
                      {project.categoryLabel}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex gap-3">
                  <a
                    href={project.link}
                    className="flex-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-gradient-primary hover:opacity-90">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Lihat Project
                    </Button>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Globe className="w-4 h-4" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 md:py-24 bg-card/50 relative">
        <div className="container-site">
          <SectionHeading
            badge="Semua Project"
            title="Katalog Lengkap"
            subtitle="Semua project yang telah kami selesaikan"
            centered
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl sm:text-5xl opacity-40 group-hover:opacity-70 transition-opacity">
                      {project.category === "ecommerce" && "🛒"}
                      {project.category === "website" && "🌐"}
                      {project.category === "mobile" && "📱"}
                      {project.category === "design" && "🎨"}
                    </span>
                  </div>
                </div>

                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-0 text-xs">
                      {project.categoryLabel}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-24 relative">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { value: "150+", label: "Project Selesai" },
              { value: "50+", label: "Klien Puas" },
              { value: "15+", label: "Industri" },
              { value: "98%", label: "Client Retention" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary/10" />
        <div className="orb orb-secondary w-52 sm:w-72 md:w-96 lg:w-[400px] h-52 sm:h-72 md:h-96 lg:h-[400px] -bottom-16 sm:-bottom-24 md:-bottom-32 left-1/2 -translate-x-1/2 opacity-20" />

        <div className="container-site relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-display text-3xl md:text-4xl mb-6">
              Punya Project in Mind? <span className="text-gradient-primary">Let's Talk!</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              Kami siap membantu mewujudkan ide digital Anda menjadi kenyataan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                  Mulai Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="border-2">
                  Lihat Harga
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}