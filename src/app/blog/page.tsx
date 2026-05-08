import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User, Search, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tips, tutorial, dan insight tentang web development, design, dan digital marketing dari tim JarDev Builder.",
};

const categories = [
  { id: "all", label: "Semua" },
  { id: "development", label: "Development" },
  { id: "design", label: "Design" },
  { id: "business", label: "Business" },
  { id: "tutorial", label: "Tutorial" },
  { id: "tips", label: "Tips & Tricks" },
];

const posts = [
  {
    id: 1,
    slug: "panduan-memilih-tech-stack-untuk-startup",
    title: "Panduan Memilih Tech Stack yang Tepat untuk Startup Anda",
    excerpt: "Memilih teknologi yang tepat adalah keputusan penting yang akan mempengaruhi growth dan scalability startup Anda di masa depan.",
    category: "development",
    categoryLabel: "Development",
    author: "Fajar Prasetyo",
    date: "2024-05-15",
    readTime: "8 min read",
    image: "/placeholder-blog-1.jpg",
    tags: ["Tech Stack", "Startup", "Next.js"],
    featured: true,
  },
  {
    id: 2,
    slug: "prinsip-design-system-untuk-developer",
    title: "Prinsip Design System yang Harus Diketahui Setiap Developer",
    excerpt: "Memahami design system akan membantu Anda berkomunikasi lebih efektif dengan desainer dan membangun UI yang konsisten.",
    category: "design",
    categoryLabel: "Design",
    author: "Sarah Wijaya",
    date: "2024-05-10",
    readTime: "6 min read",
    image: "/placeholder-blog-2.jpg",
    tags: ["Design System", "UI/UX", "Figma"],
    featured: true,
  },
  {
    id: 3,
    slug: "optimasi-core-web-vitals-untuk-seo",
    title: "Cara Optimasi Core Web Vitals untuk Ranking di Google",
    excerpt: "Core Web Vitals adalah faktor penting dalam SEO. Learn how to optimize your website's performance metrics.",
    category: "development",
    categoryLabel: "Development",
    author: "Fajar Prasetyo",
    date: "2024-05-05",
    readTime: "10 min read",
    image: "/placeholder-blog-3.jpg",
    tags: ["SEO", "Performance", "Core Web Vitals"],
    featured: false,
  },
  {
    id: 4,
    slug: "estimasi-biaya-pembuatan-website-2024",
    title: "Berapa Sebenarnya Biaya Pembuatan Website di 2024?",
    excerpt: "Breakdown lengkap biaya pembuatan website dari landing page hingga enterprise-level application.",
    category: "business",
    categoryLabel: "Business",
    author: "Fajar Prasetyo",
    date: "2024-04-28",
    readTime: "7 min read",
    image: "/placeholder-blog-4.jpg",
    tags: ["Budget", "Website", "Business"],
    featured: false,
  },
  {
    id: 5,
    slug: "react-vs-nextjs-kapan-menggunakan",
    title: "React vs Next.js: Kapan Harus Menggunakan Yang Mana?",
    excerpt: "Memahami perbedaan dan Use case React dan Next.js untuk memilih tools yang tepat untuk project Anda.",
    category: "development",
    categoryLabel: "Development",
    author: "Fajar Prasetyo",
    date: "2024-04-20",
    readTime: "9 min read",
    image: "/placeholder-blog-5.jpg",
    tags: ["React", "Next.js", "Comparison"],
    featured: false,
  },
  {
    id: 6,
    slug: "trend-ui-design-2024",
    title: "10 Trend UI Design yang Akan Dominasi di 2024",
    excerpt: "Dari glassmorphism hingga micro-interactions, berikut adalah trend design yang perlu Anda watch.",
    category: "design",
    categoryLabel: "Design",
    author: "Sarah Wijaya",
    date: "2024-04-15",
    readTime: "5 min read",
    image: "/placeholder-blog-6.jpg",
    tags: ["UI Design", "Trends", "2024"],
    featured: false,
  },
];

const latestPosts = posts.slice(0, 3);
const allPosts = posts;

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="orb orb-primary w-[500px] h-[500px] -top-48 right-0 opacity-20" />
        <div className="orb orb-secondary w-[400px] h-[400px] bottom-0 -left-32 opacity-15" />

        <div className="container-site relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-secondary/50 text-secondary">
              📝 Blog
            </Badge>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6">
              Tips & Insights dari <span className="text-gradient-primary">Tim Kami</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Artikel tentang web development, design, dan bisnis digital untuk membantu Anda stay updated.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 border-b border-border">
        <div className="container-site">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={cat.id === "all" ? "default" : "outline"}
                  size="sm"
                  className={cat.id === "all" ? "bg-gradient-primary" : ""}
                >
                  {cat.label}
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Cari artikel..."
                className="pl-10 bg-muted border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container-site">
          <SectionHeading
            badge="Featured"
            title="Artikel Pilihan"
            subtitle="Artikel terbaik yang kami rekomendasikan untuk Anda"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {latestPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`}>
                <Card className="group h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover-lift overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                    <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-40 group-hover:opacity-70 transition-opacity">
                        {post.category === "development" && "💻"}
                        {post.category === "design" && "🎨"}
                        {post.category === "business" && "💼"}
                      </span>
                    </div>
                    <Badge variant="secondary" className="absolute top-4 left-4 bg-primary/20 text-primary border-0">
                      {post.categoryLabel}
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <Button variant="ghost" size="sm" className="text-primary">
                        Baca Selengkapnya
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-card/50">
        <div className="container-site">
          <SectionHeading
            badge="Semua Artikel"
            title="Katalog Lengkap"
            subtitle="Jelajahi semua artikel dari tim JarDev Builder"
            centered
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {allPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`}>
                <Card className="group h-full bg-card border-border hover:border-primary/30 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl opacity-40">
                        {post.category === "development" && "💻"}
                        {post.category === "design" && "🎨"}
                        {post.category === "business" && "💼"}
                      </span>
                    </div>
                    <Badge variant="secondary" className="absolute top-3 left-3 bg-primary/10 text-primary border-0 text-xs">
                      {post.categoryLabel}
                    </Badge>
                  </div>

                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                      <span>{new Date(post.date).toLocaleDateString("id-ID", { day: "numeric", month: "short" })}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-muted-foreground" />
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="default" size="sm" className="bg-gradient-primary">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary/10" />
        <div className="orb orb-primary w-[400px] h-[400px] -top-32 left-1/2 -translate-x-1/2 opacity-20" />

        <div className="container-site relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-display text-3xl md:text-4xl mb-6">
              Subscribe untuk <span className="text-gradient-primary">Artikel Terbaru</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Dapatkan email setiap kali kami publish artikel baru. No spam, unsubscribe anytime.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="email@example.com"
                className="bg-card border-border"
              />
              <Button className="bg-gradient-primary hover:opacity-90 shadow-glow w-full sm:w-auto">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}