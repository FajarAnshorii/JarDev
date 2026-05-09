import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, ArrowRight, HelpCircle, Clock, Shield, CreditCard, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Pertanyaan yang sering diajukan tentang layanan JarDev Builder.",
};

const faqCategories = [
  {
    category: "General",
    icon: HelpCircle,
    items: [
      {
        q: "Apa itu JarDev Builder?",
        a: "JarDev Builder adalah agency yang menyediakan layanan pembuatan website, mobile app, dan desain UI/UX. Kami membantu bisnis dari berbagai ukuran untuk memiliki presence digital yang kuat dan profesional.",
      },
      {
        q: "Berapa lama pengalaman tim JarDev?",
        a: "Tim kami memiliki pengalaman lebih dari 5 tahun di industri web development dan design. Founder dan lead developer telah mengerjakan berbagai project dari startup hingga enterprise.",
      },
      {
        q: "Apa saja teknologi yang digunakan?",
        a: "Kami menggunakan teknologi modern seperti Next.js, React, TypeScript, Node.js, Tailwind CSS, PostgreSQL, MongoDB, React Native, dan Flutter. Pemilihan teknologi bergantung pada kebutuhan project Anda.",
      },
    ],
  },
  {
    category: "Project & Timeline",
    icon: Clock,
    items: [
      {
        q: "Berapa lama waktu pengerjaan project?",
        a: "Waktu pengerjaan tergantung kompleksitas project: Landing page: 2-4 minggu, Company profile: 4-8 minggu, E-commerce: 8-16 minggu, Custom web app: 12-24 minggu. Kami akan memberikan timeline yang realistis di awal project.",
      },
      {
        q: "Bagaimana cara memulai project?",
        a: "Langkah-langkahnya: 1) Hubungi kami via form, email, atau WhatsApp. 2) Jadwalkan meeting untuk discuss kebutuhan. 3) Kami berikan proposal dan quote. 4) Setujui dan mulai project dengan DP 50%.",
      },
      {
        q: "Apakah bisa revisi jika hasil tidak sesuai?",
        a: "Ya! Setiap paket sudah termasuk jumlah revisi tertentu (3-10x). Kami akan demo progress secara berkala dan adjust sesuai feedback Anda sebelum final delivery.",
      },
    ],
  },
  {
    category: "Pembayaran",
    icon: CreditCard,
    items: [
      {
        q: "Bagaimana sistem pembayarannya?",
        a: "Kami menggunakan sistem 50% DP di awal dan 50% saat project selesai. Untuk project besar (>Rp 10jt), bisa diangsur 3x. Pembayaran via transfer bank lokal.",
      },
      {
        q: "Apakah ada biaya tambahan di luar quote?",
        a: "Tidak ada biaya tersembunyi. Quote yang kami berikan adalah harga final kecuali ada perubahan scope yang disepakati bersama. Semua tambahan akan di komunikasikan terlebih dahulu.",
      },
      {
        q: "Apakah bisa cicilan?",
        a: "Ya, untuk project di atas Rp 10jt, kami menyediakan opsi cicilan 2-3x tanpa bunga. Hubungi kami untuk discuss opsi pembayaran yang paling cocok.",
      },
    ],
  },
  {
    category: "Maintenance & Support",
    icon: Wrench,
    items: [
      {
        q: "Apakah ada support setelah project selesai?",
        a: "Ya! Semua paket sudah termasuk support period (30-60 hari). Setelah itu, Anda bisa memilih paket maintenance bulanan mulai dari Rp 500rb/bulan untuk update konten, backup, dan security monitoring.",
      },
      {
        q: "Apa yang termasuk dalam maintenance?",
        a: "Maintenance meliputi: update plugin/security, backup regular, troubleshooting bug, bantuan teknis minor, dan konsultasi singkat. Untuk fitur baru atau perubahan major akan di quote terpisah.",
      },
      {
        q: "Apakah bisa take over project dari agency lain?",
        a: "Bisa! Kami memiliki pengalaman take over project dari agency lain. Pastikan semua source code dan akses diberikan. Kami akan audit dan memberikan rencana migrasi yang jelas.",
      },
    ],
  },
  {
    category: "Keamanan & Privasi",
    icon: Shield,
    items: [
      {
        q: "Apakah data project saya aman?",
        a: "Kami sangat menjaga kerahasiaan project klien. Semua data dan source code tidak akan dishare atau digunakan untuk project lain. Kami bisa tanda tangan NDA jika diperlukan.",
      },
      {
        q: "Siapa yang memiliki hak cipta hasil project?",
        a: "Setelah pembayaran lunas, semua hak cipta dan source code menjadi milik klien sepenuhnya. Kami hanya berhak menampilkan project tersebut di portfolio kami (dengan izin).",
      },
      {
        q: "Bagaimana jika ada dispute atau masalah?",
        a: "Kami selalu berusaha menyelesaikan semua masalah secara baik-baik melalui komunikasi. Jika tidak достигнуто consenso, kami akan menggunakan mediator independen. Kepuasan klien adalah prioritas utama kami.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="orb orb-primary w-52 sm:w-72 md:w-96 lg:w-[500px] h-52 sm:h-72 md:h-96 lg:h-[500px] -top-24 sm:-top-32 md:-top-48 left-1/2 -translate-x-1/2 opacity-20" />

        <div className="container-site relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
              <HelpCircle className="w-4 h-4 mr-2" />
              FAQ
            </Badge>
            <h1 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
              Pertanyaan yang Sering <span className="text-gradient-primary">Diajukan</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Can't find the answer you're looking for? Chat with us directly.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button className="bg-gradient-primary hover:opacity-90 shadow-glow">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat with Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="container-site">
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
            {faqCategories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold">{cat.category}</h2>
                  </div>
                  <div className="space-y-4">
                    {cat.items.map((item, i) => (
                      <Card key={i} className="bg-card border-border">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg font-medium leading-relaxed">
                            {item.q}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 text-muted-foreground">
                          <p className="leading-relaxed">{item.a}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 md:py-24 bg-card/50 relative">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-display text-2xl sm:text-3xl mb-4 sm:mb-6">
              Masih Ada Pertanyaan?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              Tim kami siap membantu menjawab semua pertanyaan Anda. Jangan sungkan untuk menghubungi kami.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                <MessageCircle className="w-5 h-5 mr-2" />
                Hubungi Kami
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}