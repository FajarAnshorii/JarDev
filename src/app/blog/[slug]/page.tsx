import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Share2, Globe, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const metadata: Metadata = {
  title: "Blog Post",
  description: "Artikel blog dari JarDev Builder.",
};

const WHATSAPP_NUMBER = "628990415500";

export default function BlogPostPage() {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <main className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="container-site py-8">
        <Link href="/blog">
          <Button variant="ghost" className="pl-0 hover:pl-2 transition-all">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Blog
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <article>
        <header className="container-site py-8">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <Badge variant="secondary" className="bg-primary/10 text-primary border-0 mb-4">
              Development
            </Badge>

            {/* Title */}
            <h1 className="heading-display text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Panduan Memilih Tech Stack yang Tepat untuk Startup Anda
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-gradient-primary text-xs text-white">FP</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-foreground">Fajar Prasetyo</span>
              </div>
              <span className="flex items-center gap-1 text-sm">
                <Calendar className="w-4 h-4" />
                15 Mei 2024
              </span>
              <span className="flex items-center gap-1 text-sm">
                <Clock className="w-4 h-4" />
                8 min read
              </span>
            </div>

            {/* Featured Image Placeholder */}
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden mb-12">
              <div className="absolute inset-0 bg-grid-pattern opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl opacity-50">💻</span>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="container-site pb-24">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="prose prose-invert max-w-none">
                {/* Introduction */}
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Memilih tech stack yang tepat adalah keputusan penting yang akan mempengaruhi growth dan scalability startup Anda di masa depan. Keputusan ini bukan hanya tentang apa yang trending, tapi tentang apa yang paling cocok untuk kebutuhan spesifik bisnis Anda.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-12">1. Kenali Kebutuhan Project Anda</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Sebelum memilih technology, Anda perlu memahami dengan jelas apa yang ingin Anda bangun. Apakah itu sebuah web app, mobile app, atau两者? Berapa banyak user yang Anda expect di awal dan bagaimana growth projection-nya?
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Pertanyaan-pertanyaan ini akan membantu Anda menentukan priority. Misalnya, jika Anda membangun sebuah consumer app yang memerlukan high performance dan real-time updates, Anda mungkin membutuhkan tech stack yang berbeda dengan sebuah content-based website.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-12">2. Pertimbangkan Tim Skills</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Tech stack yang Anda pilih harus align dengan kemampuan tim Anda. Jika Anda memiliki tim yang already proficient di React, menggunakan Vue mungkin tidak efisien meskipun Vue memiliki kelebihan tertentu.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Namun, jika Anda sedang membangun tim dari nol, ini adalah kesempatan untuk memilih teknologi yang paling efficient untuk project Anda tanpa harus worry tentang learning curve yang sudah exist.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-12">3. Evaluate Ecosystem & Community</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Teknologi dengan ecosystem yang strong akan memberikan banyak benefit dalam jangka panjang. Berikut yang perlu Anda pertimbangkan:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Availability of libraries dan tools</li>
                  <li>Size dan activity dari community</li>
                  <li>Quality dan quantity dari learning resources</li>
                  <li>Availability of talent di market</li>
                  <li>Track record perusahaan yang menggunakan teknologi tersebut</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-12">4. Scalability Considerations</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Startup sering kali under-estimate kebutuhan scalability. Memilih tech stack yang bisa scale tidak berarti harus over-engineering dari awal, tapi Anda perlu understand trade-offs yang akan Anda hadapi nanti.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Beberapa pertanyaan yang perlu Anda ask: Apakah database Anda bisa handle millions of records? Apakah frontend framework Anda efficient dalam rendering? Apakah backend architecture Anda mudah di-scale horizontally?
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-12">5. Cost of Ownership</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Lebih dari sekadar development cost, Anda perlu consider total cost of ownership termasuk: infrastructure cost, maintenance cost, dan potential cost dari tech debt.
                </p>

                <div className="bg-card border border-border rounded-xl p-6 my-12">
                  <h3 className="font-semibold mb-4">Recommended Tech Stack untuk Startup 2024:</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Frontend</p>
                      <p className="font-medium">Next.js + TypeScript + Tailwind</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Backend</p>
                      <p className="font-medium">Node.js / Python / Go</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Database</p>
                      <p className="font-medium">PostgreSQL / MongoDB</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Deployment</p>
                      <p className="font-medium">Vercel / AWS / DigitalOcean</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4 mt-12">Kesimpulan</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Memilih tech stack adalah decisions yang tidak bisa di-undo dengan mudah. luangkan waktu untuk research dan evaluate options Anda dengan matang. Tidak ada tech stack yang perfect untuk semua Use case - yang ada adalah tech stack yang paling cocok untuk kebutuhan spesifik Anda.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Need help deciding? Tim kami siap membantu Anda memilih tech stack yang tepat untuk project Anda. Chat dengan kami untuk konsultasi gratis!
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-3 mt-12 pt-8 border-t border-border">
                <span className="text-sm text-muted-foreground">Tags:</span>
                {["Tech Stack", "Startup", "Next.js", "Development", "Web App"].map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Share */}
              <div className="flex items-center gap-4 mt-8">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share:
                </span>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Globe className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Globe className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Globe className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full bg-green-500/10 hover:bg-green-500/20 text-green-500 border-green-500/50"
                  onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Halo, saya baca artikel ini dan tertarik untuk konsultasi.")}`, "_blank")}
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Author Card */}
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="w-16 h-16">
                        <AvatarFallback className="bg-gradient-primary text-xl text-white">FP</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">Fajar Prasetyo</h4>
                        <p className="text-sm text-muted-foreground">Founder & Lead Developer</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Full-stack developer dengan pengalaman 5+ tahun. Spesialisasi di React, Next.js, dan Node.js.
                    </p>
                  </CardContent>
                </Card>

                {/* Related Posts */}
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4">Artikel Terkait</h4>
                    <div className="space-y-4">
                      {[
                        { title: "React vs Next.js: Kapan Harus Menggunakan Yang Mana?", date: "2024-04-20" },
                        { title: "Prinsip Design System yang Harus Diketahui Setiap Developer", date: "2024-05-10" },
                        { title: "Optimasi Core Web Vitals untuk Ranking di Google", date: "2024-05-05" },
                      ].map((post, i) => (
                        <Link key={i} href="#" className="block group">
                          <p className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2 mb-1">
                            {post.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(post.date).toLocaleDateString("id-ID", { day: "numeric", month: "short" })}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="bg-gradient-primary/10 border-primary/30">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold mb-2">Butuh Konsultasi?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Tim kami siap membantu memilih tech stack yang tepat untuk project Anda.
                    </p>
                    <Link href="/contact">
                      <Button size="sm" className="bg-gradient-primary hover:opacity-90 w-full">
                        Hubungi Kami
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* More Articles */}
      <section className="py-24 bg-card/50 border-t border-border">
        <div className="container-site">
          <h2 className="heading-display text-2xl mb-8">Baca Juga Artikel Lainnya</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Prinsip Design System untuk Developer", category: "Design", date: "2024-05-10" },
              { title: "Optimasi Core Web Vitals untuk SEO", category: "Development", date: "2024-05-05" },
              { title: "Berapa Biaya Pembuatan Website 2024?", category: "Business", date: "2024-04-28" },
            ].map((article, i) => (
              <Link key={i} href="#">
                <Card className="group bg-card border-border hover:border-primary/30 transition-all h-full">
                  <CardContent className="p-5">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-0 text-xs mb-2">
                      {article.category}
                    </Badge>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {new Date(article.date).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}