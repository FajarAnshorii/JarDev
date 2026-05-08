import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles, Zap, Building2, Clock, Shield, RefreshCw, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Paket harga pembuatan website dan aplikasi mobile. Mulai dari Rp 2.5jt dengan hasil profesional dan dukungan penuh.",
};

const plans = [
  {
    name: "Starter",
    price: "Rp 2.5jt",
    period: "one-time",
    description: "Cocok untuk landing page, company profile sederhana, atau portfolio online.",
    icon: Sparkles,
    color: "primary",
    popular: false,
    features: [
      "1-5 Halaman",
      "Desain Responsif",
      "Optimasi SEO Dasar",
      "Kontak Form",
      "Hosting Setup",
      "SSL Certificate",
      "Support 30 hari",
      "3x Revisi",
    ],
    notIncluded: ["Custom Domain", "Admin Dashboard", "Payment Gateway", "API Integration"],
  },
  {
    name: "Professional",
    price: "Rp 5jt",
    period: "one-time",
    description: "Paket lengkap untuk website bisnis dengan fitur advanced dan integrasi.",
    icon: Zap,
    color: "secondary",
    popular: true,
    features: [
      "6-15 Halaman",
      "Desain Custom",
      "Optimasi SEO Lanjutan",
      "Admin Dashboard",
      "Custom Domain",
      "Payment Gateway",
      "Analytics Integration",
      "Email Setup",
      "Support 60 hari",
      "3x Revisi",
      "Source Code",
    ],
    notIncluded: [],
  },
  {
    name: "Enterprise",
    price: "Rp 15jt",
    period: "one-time",
    description: "Solusi enterprise dengan fitur lengkap, custom development, dan dedicated support.",
    icon: Building2,
    color: "accent",
    popular: false,
    features: [
      "Unlimited Halaman",
      "Desain Premium",
      "Full SEO Optimization",
      "Admin Dashboard",
      "Custom Domain",
      "Multiple Payment Gateway",
      "API Integration",
      "Mobile App (iOS & Android)",
      "Maintenance 6 bulan",
      "3x Revisi",
      "Priority Support",
      "Training User",
      "Source Code + Documentation",
    ],
    notIncluded: [],
  },
];

const addOns = [
  {
    name: "Mobile App (iOS & Android)",
    price: "Rp 5jt",
    description: "Aplikasi mobile dengan React Native atau Flutter.",
  },
  {
    name: "Custom Feature",
    price: "Rp 2jt",
    description: "Fitur custom sesuai kebutuhan spesifik bisnis Anda.",
  },
  {
    name: "Logo & Brand Identity",
    price: "Rp 1.5jt",
    description: "Desain logo profesional + brand guidelines.",
  },
  {
    name: "SEO Premium",
    price: "Rp 1jt",
    description: "Optimasi SEO lengkap: technical SEO, content strategy, backlink building.",
  },
  {
    name: "Extra Revisi",
    price: "Rp 500rb",
    description: "Paket 3x revisi tambahan.",
  },
  {
    name: "Maintenance Bulanan",
    price: "Rp 500rb/bulan",
    description: "Dukungan maintenance bulanan: update, backup, security.",
  },
];

const faqItems = [
  {
    question: "Berapa lama waktu pengerjaan?",
    answer: "Waktu pengerjaan tergantung kompleksitas project. Landing page: 2-4 minggu, Website company profile: 4-8 minggu, E-commerce/Web app: 8-16 minggu. Kami akan memberikan timeline yang jelas di awal project.",
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer: "Kami menggunakan sistem pembayaran 50% di awal (DP) dan 50% saat project selesai. Untuk project besar, bisa diangsur menjadi 3x pembayaran. Transfer ke rekening bank lokal.",
  },
  {
    question: "Apakah sudah termasuk hosting dan domain?",
    answer: "Paket Starter dan Professional tidak termasuk hosting dan domain. Anda bisa beli sendiri atau kami bantu setup. Paket Enterprise sudah termasuk 1 tahun hosting dan domain.",
  },
  {
    question: "Bagaimana jika hasil tidak sesuai ekspektasi?",
    answer: "Kami memberikan机会 revisi sesuai paket yang dipilih. Sebelum final, kami akan demo dan adjust sesuai feedback Anda. Kepuasan klien adalah prioritas utama kami.",
  },
  {
    question: "Apakah bisa memilih tech stack sendiri?",
    answer: "Ya! Kami akan memberikan rekomendasi terbaik berdasarkan kebutuhan project Anda, namun final decision tetap di tangan Anda. Tech stack akan didiskusikan di awal project.",
  },
  {
    question: "Apakah tersedia maintenance setelah project selesai?",
    answer: "Ya! Kami提供 berbagai paket maintenance mulai dari Rp 500rb/bulan untuk update konten, backup, dan security monitoring. Paket Enterprise sudah termasuk 6 bulan maintenance.",
  },
];

const colorMap: Record<string, string> = {
  primary: "bg-gradient-primary text-white",
  secondary: "bg-gradient-secondary text-white",
  accent: "bg-gradient-accent text-black",
};

const colorBorderMap: Record<string, string> = {
  primary: "border-primary/50 hover:border-primary",
  secondary: "border-secondary/50 hover:border-secondary",
  accent: "border-accent/50 hover:border-accent",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="orb orb-primary w-[500px] h-[500px] -top-48 left-1/2 -translate-x-1/2 opacity-20" />
        <div className="orb orb-accent w-[300px] h-[300px] bottom-0 right-0 opacity-15" />

        <div className="container-site relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-8 border-primary/50 text-primary">
              <Sparkles className="w-4 h-4 mr-2" />
              Harga Transparan
            </Badge>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-8">
              Investasi untuk <span className="text-gradient-primary">Digital Presence</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Harga yang kompetitif dengan hasil berkualitas. Tidak ada biaya tersembunyi. Transparan dari awal.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 md:py-32 relative">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <Card
                  key={index}
                  className={`relative overflow-hidden ${
                    plan.popular
                      ? "bg-gradient-to-b from-primary/10 to-card border-primary/50 shadow-glow scale-105"
                      : "bg-card border-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2">
                      <Badge className="bg-gradient-primary text-white px-4 py-1">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="pt-12 pb-6 px-8">
                    <div className={`w-16 h-16 rounded-2xl ${colorMap[plan.color]} flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="mt-6">
                      <span className="text-4xl font-bold text-gradient-primary">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-4 leading-relaxed">{plan.description}</p>
                  </CardHeader>

                  <CardContent className="pb-8 px-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {plan.notIncluded.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground/50">
                          <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span className="line-through">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-0">
                    <Link href="/contact" className="w-full">
                      <Button
                        className={`w-full ${
                          plan.popular
                            ? "bg-gradient-primary hover:opacity-90 shadow-glow"
                            : "bg-secondary/20 hover:bg-secondary/30"
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        Pilih Paket Ini
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-24 bg-card/50 relative">
        <div className="container-site">
          <SectionHeading
            badge="Add-ons"
            title="Tambah Fitur Sesuai Kebutuhan"
            subtitle="Pilihan add-on untuk menyesuaikan project dengan kebutuhan spesifik Anda"
            centered
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {addOns.map((addon, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold">{addon.name}</h4>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                      {addon.price}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative">
        <div className="container-site">
          <SectionHeading
            badge="FAQ"
            title="Pertanyaan yang Sering Diajukan"
            subtitle="Jawaban untuk pertanyaan umum tentang pricing dan layanan kami"
            centered
          />

          <div className="max-w-3xl mx-auto mt-12 space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden">
                <CardHeader className="pb-4">
                  <h4 className="text-lg font-semibold flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm text-primary font-bold">
                      {index + 1}
                    </span>
                    {item.question}
                  </h4>
                </CardHeader>
                <CardContent className="pt-0 text-muted-foreground">
                  <p className="leading-relaxed">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 border-t border-b border-border">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-10 h-10 text-primary" />
              <p className="font-semibold">Pembayaran Aman</p>
              <p className="text-sm text-muted-foreground">Transfer ke rekening resmi</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <RefreshCw className="w-10 h-10 text-secondary" />
              <p className="font-semibold">Uang Kembali</p>
              <p className="text-sm text-muted-foreground">Garansi kepuasan klien</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-10 h-10 text-accent" />
              <p className="font-semibold">Tepat Waktu</p>
              <p className="text-sm text-muted-foreground">Deadline yang realistis</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Zap className="w-10 h-10 text-primary" />
              <p className="font-semibold">Quality Assurance</p>
              <p className="text-sm text-muted-foreground">Testing sebelum launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary/10" />
        <div className="orb orb-primary w-[400px] h-[400px] -top-32 left-1/2 -translate-x-1/2 opacity-20" />

        <div className="container-site relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-display text-3xl md:text-4xl mb-6">
              Siap Memulai Project Anda? <span className="text-gradient-primary">Let's Build Together!</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Konsultasi gratis untuk discuss kebutuhan dan get custom quote untuk project Anda.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow text-lg px-10 py-6">
                Konsultasi Gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}