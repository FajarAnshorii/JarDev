import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Clock, Shield, Star, Zap, Globe, Smartphone, Palette, ShoppingCart, Code, Monitor, Users, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SectionHeading } from "@/components/shared/SectionHeading";

const WHATSAPP_NUMBER = "628990415500";

interface PageProps {
  params: Promise<{ service: string }>;
}

// Service data
const servicesData: Record<string, {
  title: string;
  titleShort: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  colorGradient: string;
  description: string;
  longDescription: string;
  features: string[];
  deliverables: string[];
  process: { step: string; title: string; description: string }[];
  technologies: { name: string; category: string }[];
  pricing: {
    basic: { name: string; price: string; features: string[] };
    standard: { name: string; price: string; features: string[] };
    premium: { name: string; price: string; features: string[] };
  };
  faq: { q: string; a: string }[];
  emoji: string;
}> = {
  "website-development": {
    title: "Pengembangan Website",
    titleShort: "Website",
    icon: Globe,
    color: "primary",
    colorGradient: "bg-gradient-primary",
    description: "Website profesional dengan performa tinggi, responsif, dan SEO-optimized untuk bisnis Anda.",
    longDescription: "Kami membangun website yang tidak hanya menarik secara visual, tapi juga memiliki performa prima, mudah ditemukan di Google, dan memberikan pengalaman pengguna yang excepcional. Dari halaman landing page sederhana hingga aplikasi web kompleks, kami memiliki solusi untuk setiap kebutuhan bisnis Anda.",
    features: ["Halaman Landing", "Profil Perusahaan", "Portal Berita", "Aplikasi Web"],
    deliverables: [
      "Desain responsif untuk semua perangkat",
      "Optimasi SEO on-page",
      "Sertifikat SSL dan keamanan",
      "Formulir kontak dan interaksi",
      "Kecepatan memuat optimal",
      "Dashboard admin (opsional)",
      "Integrasi dengan media sosial",
      "Setup Google Analytics",
      "Source code lengkap",
      "Dokumentasi teknis",
    ],
    process: [
      { step: "01", title: "Konsultasi dan Analisis", description: "Memahami kebutuhan, target audiens, dan tujuan bisnis Anda." },
      { step: "02", title: "Wireframe dan Desain", description: "Membuat wireframe dan mockup interaktif untuk persetujuan." },
      { step: "03", title: "Pengembangan", description: "Coding dengan kode bersih dan praktik terbaik." },
      { step: "04", title: "Pengujian dan QA", description: "Pengujian menyeluruh di berbagai browser dan perangkat." },
      { step: "05", title: "Peluncuran dan Pelatihan", description: "Deploy dan pelatihan untuk tim Anda." },
      { step: "06", title: "Dukungan dan Pemeliharaan", description: "Dukungan teknis dan pemeliharaan berkala." },
    ],
    technologies: [
      { name: "Next.js", category: "Framework" },
      { name: "React", category: "Library" },
      { name: "TypeScript", category: "Bahasa" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Node.js", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Prisma", category: "ORM" },
      { name: "Vercel", category: "Hosting" },
    ],
    pricing: {
      basic: {
        name: "Halaman Landing",
        price: "Rp 2.5jt",
        features: ["1-3 Halaman", "Desain kustom", "Responsif mobile", "SEO dasar", "Sertifikat SSL", "Formulir kontak", "Dukungan 30 hari", "3x revisi"],
      },
      standard: {
        name: "Profil Perusahaan",
        price: "Rp 5jt",
        features: ["5-10 Halaman", "Desain premium", "Dashboard admin", "SEO lanjutan", "Integrasi blog", "Formulir kontak", "Link media sosial", "Dukungan 60 hari", "3x revisi", "Source code"],
      },
      premium: {
        name: "Aplikasi Web",
        price: "Rp 15jt",
        features: ["Halaman tidak terbatas", "Fitur kustom", "Autentikasi pengguna", "Integrasi API", "Desain database", "Panel admin", "Fitur real-time", "Dukungan 90 hari", "3x revisi", "Dokumentasi lengkap"],
      },
    },
    faq: [
      { q: "Berapa lama waktu pengerjaan website?", a: "Halaman landing: 2-4 minggu, Profil perusahaan: 4-8 minggu, Aplikasi web: 8-16 minggu. Waktu bisa berbeda tergantung kompleksitas." },
      { q: "Apakah sudah termasuk hosting?", a: "Tidak, hosting dan domain adalah biaya terpisah. Kami bisa bantu setup dan rekomendasi provider hosting." },
      { q: "Bisakah saya edit konten sendiri?", a: "Ya! Dengan dashboard admin, Anda bisa edit konten tanpa perlu coding. Pelatihan penggunaan akan diberikan." },
      { q: "Apakah ada dukungan setelah peluncuran?", a: "Semua paket sudah termasuk periode dukungan. Setelah itu, bisa pilih paket pemeliharaan bulanan." },
    ],
    emoji: "🌐",
  },
  "mobile-app-development": {
    title: "Pengembangan Aplikasi Mobile",
    titleShort: "Mobile",
    icon: Smartphone,
    color: "secondary",
    colorGradient: "bg-gradient-secondary",
    description: "Aplikasi mobile lintas platform dengan React Native dan Flutter untuk iOS dan Android.",
    longDescription: "Hadirkan bisnis Anda ke kantong pelanggan dengan aplikasi mobile yang powerful. Dengan React Native dan Flutter, kami bisa membangun aplikasi yang berjalan sempurna di iOS dan Android sekaligus, menghemat biaya pengembangan hingga 50% dibanding pengembangan native.",
    features: ["Aplikasi iOS", "Aplikasi Android", "React Native", "Flutter"],
    deliverables: [
      "Aplikasi untuk iOS dan Android",
      "Desain UI/UX mobile-first",
      "Notifikasi push",
      "Kemampuan offline (opsional)",
      "Integrasi API",
      "Integrasi Analytics",
      "Panduan submission App Store",
      "Panduan submission Google Play",
      "Source code lengkap",
      "Dokumentasi API",
    ],
    process: [
      { step: "01", title: "Analisis Kebutuhan", description: "Menganalisis kebutuhan aplikasi, alur pengguna, dan fitur utama." },
      { step: "02", title: "Desain UI/UX", description: "Membuat antarmuka yang ramah pengguna dengan pendekatan mobile-first." },
      { step: "03", title: "Pengembangan", description: "Coding lintas platform dengan React Native atau Flutter." },
      { step: "04", title: "Pengujian", description: "Pengujian di berbagai perangkat dan versi OS." },
      { step: "05", title: "Deployment", description: "Persiapan dan panduan submission ke App Store dan Play Store." },
      { step: "06", title: "Setelah Peluncuran", description: "Pemantauan, perbaikan bug, dan pembaruan fitur." },
    ],
    technologies: [
      { name: "React Native", category: "Framework" },
      { name: "Flutter", category: "Framework" },
      { name: "TypeScript", category: "Bahasa" },
      { name: "Dart", category: "Bahasa" },
      { name: "Firebase", category: "Backend" },
      { name: "Node.js", category: "Backend" },
      { name: "Redux", category: "State" },
      { name: "Fastlane", category: "CI/CD" },
    ],
    pricing: {
      basic: {
        name: "Aplikasi Basic",
        price: "Rp 5jt",
        features: ["1 platform (iOS atau Android)", " hingga 5 layar", "Fitur dasar", "Notifikasi push", "Desain standar", "Dukungan 30 hari", "3x revisi"],
      },
      standard: {
        name: "Aplikasi Standard",
        price: "Rp 10jt",
        features: ["2 platform (iOS dan Android)", " hingga 15 layar", "Integrasi API", "Autentikasi pengguna", "Notifikasi push", "Desain premium", "Dukungan 60 hari", "3x revisi", "Source code"],
      },
      premium: {
        name: "Aplikasi Enterprise",
        price: "Rp 25jt",
        features: ["2 platform (iOS dan Android)", "Layar tidak terbatas", "Fitur kustom", "Dashboard admin", "Integrasi pembayaran", "Dashboard analytics", "Mode offline", "Dukungan 6 bulan", "3x revisi", "Dokumentasi lengkap"],
      },
    },
    faq: [
      { q: "React Native atau Flutter, mana yang lebih baik?", a: "Keduanya memiliki kelebihan masing-masing. React Native lebih familiar bagi developer React, Flutter menawarkan UI yang lebih bisa dikustomisasi. Kami akan rekomendasikan yang terbaik untuk kebutuhan Anda." },
      { q: "Bisakah aplikasi di-publish di App Store?", a: "Ya! Kami menyediakan panduan lengkap untuk submission ke App Store dan Google Play Store. Proses review biasanya 1-7 hari." },
      { q: "Bagaimana jika saya sudah punya aplikasi yang perlu diperbarui?", a: "Kami bisa melakukan audit dan peningkatan aplikasi. Hubungi kami untuk konsultasi." },
      { q: "Bisakah integrate dengan sistem yang sudah ada?", a: "Ya, kami bisa integrate dengan ERP, CRM, atau sistem backend yang sudah ada melalui API." },
    ],
    emoji: "📱",
  },
  "ui-ux-design": {
    title: "Desain UI/UX",
    titleShort: "UI/UX",
    icon: Palette,
    color: "accent",
    colorGradient: "bg-gradient-accent",
    description: "Desain antarmuka yang menarik dan pengalaman pengguna yang intuitif untuk produk digital Anda.",
    longDescription: "Desain yang bagus bukan hanya soal tampilan, tapi juga soal cara kerjanya. Tim desainer kami menggabungkan estetika yang menarik dengan pengalaman pengguna yang intuitif untuk menciptakan produk digital yang tidak hanya indah dipandang, tapi juga efektif dalam mencapai tujuan bisnis.",
    features: ["Wireframing", "Prototyping", "Sistem Desain", "Desain Mobile-first"],
    deliverables: [
      "Riset dan analisis pengguna",
      "Wireframe (fidelitas rendah)",
      "Mockup fidelitas tinggi",
      "Prototipe interaktif",
      "Sistem desain",
      "Library komponen",
      "Panduan gaya",
      "Ekspor aset (SVG, PNG, dll)",
      "Serah terima ke developer",
      "Dokumentasi desain",
    ],
    process: [
      { step: "01", title: "Riset Pengguna", description: "Memahami kebutuhan pengguna, titik kesulitan, dan perilaku." },
      { step: "02", title: "Arsitektur Informasi", description: "Menyusun struktur konten dan alur navigasi." },
      { step: "03", title: "Wireframing", description: "Membuat layout fidelitas rendah untuk validasi konsep." },
      { step: "04", title: "Desain Visual", description: "Desain fidelitas tinggi dengan identitas merek." },
      { step: "05", title: "Prototyping", description: "Prototipe interaktif untuk pengujian pengguna." },
      { step: "06", title: "Serah Terima", description: "Siapkan desain untuk pengembangan dengan spesifikasi lengkap." },
    ],
    technologies: [
      { name: "Figma", category: "Alat Desain" },
      { name: "Adobe XD", category: "Alat Desain" },
      { name: "Sketch", category: "Alat Desain" },
      { name: "Illustrator", category: "Ilustrasi" },
      { name: "Photoshop", category: "Editing Gambar" },
      { name: "Principle", category: "Animasi" },
      { name: "Framer", category: "Prototipe" },
      { name: "Maze", category: "Pengujian" },
    ],
    pricing: {
      basic: {
        name: "Paket Redesain",
        price: "Rp 1.5jt",
        features: ["1-3 layar redesain", "Wireframe", "Mockup fidelitas tinggi", "3x revisi", "File sumber", "Waktu 7 hari"],
      },
      standard: {
        name: "Paket Desain Lengkap",
        price: "Rp 5jt",
        features: ["5-10 layar", "Wireframe", "Mockup fidelitas tinggi", "Prototipe interaktif", "Sistem desain", "3x revisi", "File sumber", "Waktu 14 hari"],
      },
      premium: {
        name: "Sistem Desain Lengkap",
        price: "Rp 15jt",
        features: ["Layar tidak terbatas", "Sistem desain lengkap", "Library komponen", "Panduan gaya", "Prototipe interaktif", "Pengujian pengguna", "3x revisi", "Dokumentasi lengkap", "Dukungan prioritas"],
      },
    },
    faq: [
      { q: "Apakah sudah termasuk serah terima ke developer?", a: "Ya, semua paket sudah termasuk serah terima desain dengan spesifikasi lengkap untuk developer, termasuk ekspor aset dan design tokens." },
      { q: "Berapa kali bisa revisi?", a: "Semua paket mendapat 3x revisi. Revisi tambahan bisa ditambahkan dengan biaya terpisah." },
      { q: "Apakah bisa bantu desain logo juga?", a: "Desain logo adalah layanan terpisah. Kami bisa refer ke desainer partner atau include dengan biaya tambahan." },
      { q: "Bagaimana dengan pengujian pengguna?", a: "Basic dan Standard tidak termasuk pengujian pengguna. Premium termasuk pengujian pengguna termoderasi dengan 5 pengguna." },
    ],
    emoji: "🎨",
  },
  "ecommerce-development": {
    title: "Pengembangan E-Commerce",
    titleShort: "E-Commerce",
    icon: ShoppingCart,
    color: "primary",
    colorGradient: "bg-gradient-primary",
    description: "Toko online lengkap dengan fitur payment gateway, inventori, dan manajemen pesanan.",
    longDescription: "Mulai menjual online dengan e-commerce yang powerful dan mudah dikelola. Dari setup produk, integrasi pembayaran, sampai manajemen inventori - semua dalam satu platform yang bisa bertumbuh seiring bisnis Anda. Dengan desain yang menarik dan alur checkout yang smooth, meningkatkan konversi penjualan.",
    features: ["Payment Gateway", "Sistem Inventori", "Manajemen Pesanan", "Dashboard Analytics"],
    deliverables: [
      "Toko online lengkap",
      "Katalog produk tidak terbatas",
      "Keranjang belanja dan wishlist",
      "Alur checkout yang dioptimalkan",
      "Integrasi payment gateway",
      "Integrasi pengiriman",
      "Manajemen inventori",
      "Dashboard manajemen pesanan",
      "Manajemen pelanggan",
      "Dashboard analytics penjualan",
      "Integrasi email marketing",
      "SEO teroptimasi",
    ],
    process: [
      { step: "01", title: "Pemilihan Platform", description: "Memilih platform yang tepat: Shopify, WooCommerce, atau kustom." },
      { step: "02", title: "Desain Toko", description: "Desain toko online yang menarik dan mudah dinavigasi." },
      { step: "03", title: "Setup Fitur", description: "Setup pembayaran, pengiriman, inventori, dan fitur lainnya." },
      { step: "04", title: "Migrasi Data", description: "Migrasi produk dari platform lama jika ada." },
      { step: "05", title: "Pengujian", description: "Pengujian semua alur dari browsing sampai checkout." },
      { step: "06", title: "Peluncuran dan Pelatihan", description: "Peluncuran dan pelatihan untuk tim Anda." },
    ],
    technologies: [
      { name: "Next.js", category: "Frontend" },
      { name: "Shopify", category: "Platform" },
      { name: "WooCommerce", category: "Platform" },
      { name: "Stripe", category: "Pembayaran" },
      { name: "Midtrans", category: "Pembayaran" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Admin JS", category: "Dashboard" },
      { name: "Mailchimp", category: "Marketing" },
    ],
    pricing: {
      basic: {
        name: "Toko Starter",
        price: "Rp 5jt",
        features: [" hingga 50 produk", "Desain dasar", "Payment gateway", "Setup pengiriman", "Sertifikat SSL", "Responsif mobile", "Dukungan 30 hari", "3x revisi"],
      },
      standard: {
        name: "Toko Professional",
        price: "Rp 10jt",
        features: [" hingga 500 produk", "Desain premium", "Opsi pembayaran multiple", "Sistem inventori", "Manajemen pesanan", "Dashboard analytics", "Email marketing", "Dukungan 60 hari", "3x revisi", "Source code"],
      },
      premium: {
        name: "Toko Enterprise",
        price: "Rp 25jt",
        features: ["Produk tidak terbatas", "Fitur kustom", "Integrasi POS", "Multi gudang", "Fitur B2B", "Integrasi aplikasi mobile", "Akses API", "Solusi white-label", "Dukungan 6 bulan", "3x revisi"],
      },
    },
    faq: [
      { q: "Platform apa yang digunakan?", a: "Kami menggunakan Shopify Plus untuk enterprise, WooCommerce untuk mid-market, dan solusi kustom untuk kebutuhan khusus. Pilihan tergantung budget dan fitur yang dibutuhkan." },
      { q: "Bisakah integrate dengan marketplace?", a: "Ya, bisa integrate dengan Tokopedia, Shopee, dll melalui API untuk sinkronisasi inventori dan pesanan." },
      { q: "Bagaimana dengan payment gateway Indonesia?", a: "Kami setup dengan Midtrans, Xendit, atau payment gateway lokal lainnya sesuai kebutuhan. Untuk pembayaran internasional, kami bisa tambah Stripe atau PayPal." },
      { q: "Apakah dukungan sudah termasuk hosting?", a: "Untuk solusi Shopify dan WooCommerce hosted, hosting sudah termasuk. Untuk solusi kustom, hosting adalah biaya terpisah." },
    ],
    emoji: "🛒",
  },
  "performance-optimization": {
    title: "Optimasi Performa",
    titleShort: "Performa",
    icon: Zap,
    color: "secondary",
    colorGradient: "bg-gradient-secondary",
    description: "Optimasi kecepatan dan performa website untuk Core Web Vitals yang maksimal.",
    longDescription: "Kecepatan website langsung mempengaruhi bounce rate dan konversi. Penelitian menunjukkan setiap 1 detik penundaan bisa mengurangi konversi hingga 7%. Kami membantu mengoptimalkan website Anda agar memiliki Core Web Vitals yang excelent, meningkatkan ranking di Google dan pengalaman pengguna.",
    features: ["Optimasi Kecepatan", "Core Web Vitals", "Lazy Loading", "Setup CDN"],
    deliverables: [
      "Audit performa lengkap",
      "Analisis Kecepatan Halaman",
      "Optimasi Core Web Vitals",
      "Optimasi gambar",
      "Code splitting dan lazy loading",
      "Strategi caching",
      "Setup dan konfigurasi CDN",
      "Optimasi sisi server",
      "Optimasi performa mobile",
      "Setup pemantauan performa",
      "Laporan sebelum dan sesudah",
      "Rekomendasi untuk masa depan",
    ],
    process: [
      { step: "01", title: "Audit Performa", description: "Analisis menyeluruh performa website dengan Google Lighthouse, PageSpeed Insights, dan WebPageTest." },
      { step: "02", title: "Identifikasi Bottleneck", description: "Menemukan masalah yang mempengaruhi performa: render-blocking resources, ukuran gambar, dll." },
      { step: "03", title: "Implementasi", description: "Implementasi optimasi dengan prioritas berdasarkan dampak." },
      { step: "04", title: "Pengujian dan Validasi", description: "Validasi hasil optimasi dan pastikan tidak ada yang rusak." },
      { step: "05", title: "Setup Pemantauan", description: "Setup pemantauan untuk track performa jangka panjang." },
      { step: "06", title: "Pelaporan", description: "Deliver laporan lengkap dengan perbandingan sebelum dan sesudah." },
    ],
    technologies: [
      { name: "Google PageSpeed", category: "Analisis" },
      { name: "Lighthouse", category: "Analisis" },
      { name: "WebPageTest", category: "Analisis" },
      { name: "Vercel", category: "Hosting" },
      { name: "Cloudflare", category: "CDN" },
      { name: "ImageOptim", category: "Optimasi" },
      { name: "Next.js", category: "Optimasi" },
      { name: "AWS", category: "Cloud" },
    ],
    pricing: {
      basic: {
        name: "Optimasi Cepat",
        price: "Rp 1jt",
        features: ["Audit kecepatan", "Optimasi gambar", "Caching dasar", "Lazy loading gambar", "3x revisi", "Waktu 3 hari"],
      },
      standard: {
        name: "Optimasi Lengkap",
        price: "Rp 3jt",
        features: ["Audit performa lengkap", "Optimasi gambar", "Optimasi kode", "Setup CDN", "Strategi caching", "Fokus Core Web Vitals", "3x revisi", "Waktu 7 hari"],
      },
      premium: {
        name: "Optimasi Enterprise",
        price: "Rp 7.5jt",
        features: ["Audit komprehensif", "Semua optimasi", "Tuning infrastruktur", "CDN dan Edge caching", "Pemantauan pengguna nyata", "Peringatan performa 24/7", "Laporan bulanan", "Dukungan prioritas", "Konsultasi berkelanjutan"],
      },
    },
    faq: [
      { q: "Berapa lama biasanya peningkatan performa?", a: "Tergantung titik awal. Untuk website dengan performa buruk, kita bisa lihat peningkatan 30-50% dalam waktu 1-2 minggu. Core Web Vitals yang excellent biasanya memakan waktu 2-4 minggu." },
      { q: "Apakah optimasi aman untuk website yang sudah ada?", a: "Ya, semua optimasi yang kami lakukan sudah diuji dan tidak akan merusak fungsionalitas website. Kami selalu backup sebelum membuat perubahan." },
      { q: "Bagaimana dengan dampak SEO?", a: "Performa adalah faktor ranking di Google. Peningkatan kecepatan website biasanya berdampak positif pada SEO, terutama setelah update Google Core Web Vitals." },
      { q: "Apakah ini untuk website yang sudah jadi saja?", a: "Sebagian besar optimasi memang untuk website yang sudah ada, tapi kami juga menyediakan konsultasi untuk website baru agar dari awal sudah teroptimasi." },
    ],
    emoji: "⚡",
  },
  "custom-web-application": {
    title: "Aplikasi Web Kustom",
    titleShort: "Web Kustom",
    icon: Code,
    color: "accent",
    colorGradient: "bg-gradient-accent",
    description: "Aplikasi web kustom sesuai kebutuhan bisnis dengan teknologi modern.",
    longDescription: "Butuh aplikasi yang sesuai dengan alur kerja bisnis Anda secara spesifik? Dengan aplikasi web kustom, Anda mendapatkan solusi yang dirancang khusus untuk kebutuhan Anda. Tidak ada batasan fitur, tidak ada kompromi. Dari produk SaaS sampai alat internal, kami membangun aplikasi yang sesuai dengan kebutuhan Anda.",
    features: ["Aplikasi SaaS", "Dashboard Admin", "Integrasi API", "Desain Database"],
    deliverables: [
      "Aplikasi kustom sesuai kebutuhan",
      "Autentikasi dan otorisasi pengguna",
      "Kontrol akses berbasis peran",
      "Fitur real-time (opsional)",
      "Pengembangan API",
      "Desain dan optimasi database",
      "Dashboard admin",
      "Pelaporan dan analytics",
      "Notifikasi Email/SMS",
      "Integrasi dengan pihak ketiga",
      "Responsif mobile",
      "Dokumentasi komprehensif",
    ],
    process: [
      { step: "01", title: "Discovery", description: "Menganalisis kebutuhan bisnis, persyaratan pengguna, dan spesifikasi teknis." },
      { step: "02", title: "Desain Arsitektur", description: "Merancang arsitektur sistem, skema database, dan desain API." },
      { step: "03", title: "Desain UI/UX", description: "Membuat antarmuka yang intuitif sesuai kebutuhan pengguna." },
      { step: "04", title: "Pengembangan", description: "Pengembangan agile dengan pendekatan berbasis sprint." },
      { step: "05", title: "Pengujian dan QA", description: "Pengujian komprehensif: unit, integrasi, dan pengujian penerimaan pengguna." },
      { step: "06", title: "Deployment dan Pelatihan", description: "Deploy ke production dan pelatihan untuk pengguna akhir." },
    ],
    technologies: [
      { name: "Next.js", category: "Frontend" },
      { name: "React", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "Python/FastAPI", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "MongoDB", category: "Database" },
      { name: "Redis", category: "Cache" },
      { name: "Docker", category: "DevOps" },
      { name: "AWS/GCP", category: "Cloud" },
      { name: "Stripe", category: "Pembayaran" },
    ],
    pricing: {
      basic: {
        name: "Aplikasi Starter",
        price: "Rp 10jt",
        features: ["Fitur dasar (3-5 modul)", "Autentikasi pengguna", "Dashboard dasar", "1 desain database", "UI standar", "Dukungan 60 hari", "3x revisi", "Source code"],
      },
      standard: {
        name: "Aplikasi Professional",
        price: "Rp 25jt",
        features: ["Kompleksitas sedang (5-10 modul)", "Auth lanjutan dan RBAC", "Dashboard admin", "Integrasi API", "Fitur real-time", "Modul pelaporan", "Dukungan 90 hari", "3x revisi", "Dokumentasi lengkap"],
      },
      premium: {
        name: "Aplikasi Enterprise",
        price: "Rp 50jt+",
        features: ["Sistem kompleks (10+ modul)", "Arsitektur multi-tenant", "Desain microservices", "Keamanan lanjutan", "Integrasi pihak ketiga", "API mobile", "Pelaporan kustom", "Dukungan 6 bulan", "3x revisi", "Pelatihan dan serah terima"],
      },
    },
    faq: [
      { q: "Berapa lama pengembangan aplikasi web kustom?", a: "Tergantung kompleksitas. Aplikasi sederhana: 2-3 bulan, Kompleksitas sedang: 3-6 bulan, Sistem enterprise kompleks: 6-12 bulan. Kami akan berikan timeline yang detail setelah fase discovery." },
      { q: "Bisakah pengembangan dilakukan bertahap?", a: "Ya! Untuk project besar, kami biasanya melakukan pengembangan bertahap agar Anda bisa iterasi dan feedback sepanjang proses. Ini juga membantu mengelola arus kas." },
      { q: "Bagaimana dengan pemeliharaan setelah peluncuran?", a: "Semua paket sudah termasuk periode pemeliharaan. Setelah itu, kami menyediakan kontrak pemeliharaan tahunan dengan SLA yang jelas." },
      { q: "Bisakah diskalakan jika bisnis berkembang?", a: "Tentu! Kami desain aplikasi dengan skalabilitas dalam pikiran. Arsitektur yang modular memungkinkan penambahan fitur dan penskalaan tanpa harus menulis ulang dari awal." },
    ],
    emoji: "💻",
  },
};

// Generate static params
export async function generateStaticParams() {
  return Object.keys(servicesData).map((service) => ({
    service,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service } = await params;
  const serviceData = servicesData[service];

  if (!serviceData) {
    return { title: "Layanan Tidak Ditemukan" };
  }

  return {
    title: serviceData.title,
    description: serviceData.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { service } = await params;
  const data = servicesData[service];

  if (!data) {
    notFound();
  }

  const Icon = data.icon;
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Halo, saya tertarik dengan layanan ${data.title}. Mohon info lebih lanjut.`)}`;

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="orb orb-primary w-[500px] h-[500px] -top-48 -left-48 opacity-20" />
        <div className="orb orb-secondary w-[400px] h-[400px] bottom-0 -right-48 opacity-15" />

        <div className="container-site relative z-10">
          <Link href="/services" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Layanan
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${data.colorGradient} mb-6 shadow-lg`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <Badge variant="outline" className={`mb-4 ${data.color === "primary" ? "border-primary/50 text-primary" : data.color === "secondary" ? "border-secondary/50 text-secondary" : "border-accent/50 text-accent"}`}>
                <span className="mr-2">{data.emoji}</span>
                Detail Layanan
              </Badge>
              <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6">
                {data.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {data.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {data.features.map((feature, i) => (
                  <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-0">
                    <Check className="w-3 h-3 mr-1" />
                    {feature}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className={`${data.colorGradient} hover:opacity-90 shadow-glow`}>
                    Konsultasi Gratis
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-2 bg-green-500/10 hover:bg-green-500/20 text-green-500 border-green-500/50">
                    Chat WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[150px]">{data.emoji}</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-primary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Long Description */}
      <section className="py-16 bg-card/50">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-display text-2xl md:text-3xl mb-6">
              Tentang Layanan Ini
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {data.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24">
        <div className="container-site">
          <SectionHeading
            badge="Hasil"
            title="Yang Anda Dapatkan"
            subtitle="Hasil kerja lengkap untuk setiap project"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {data.deliverables.map((item, i) => (
              <Card key={i} className="bg-card border-border">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">{item}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-card/50">
        <div className="container-site">
          <SectionHeading
            badge="Proses"
            title="Bagaimana Kami Bekerja"
            subtitle="Metodologi yang terstruktur untuk hasil terbaik"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {data.process.map((item, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-gradient-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-8 rounded-2xl border border-border hover:border-primary/30 transition-all">
                  <div className="text-5xl font-bold text-primary/10 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24">
        <div className="container-site">
          <SectionHeading
            badge="Teknologi"
            title="Tech Stack"
            subtitle="Teknologi modern yang kami gunakan"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-12">
            {data.technologies.map((tech, i) => (
              <div key={i} className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover-lift text-center transition-all">
                <div className="text-2xl mb-2">⚛️</div>
                <p className="text-sm font-medium group-hover:text-primary transition-colors">{tech.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-card/50">
        <div className="container-site">
          <SectionHeading
            badge="Harga"
            title="Paket Harga"
            subtitle="Pilihan paket yang sesuai dengan kebutuhan Anda"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
            {(["basic", "standard", "premium"] as Array<"basic" | "standard" | "premium">).map((tier, i) => {
              const plan = data.pricing[tier];
              const isPopular = tier === "standard";

              return (
                <Card
                  key={tier}
                  className={`relative overflow-hidden ${isPopular ? "bg-gradient-to-b from-primary/10 to-card border-primary/50 shadow-glow scale-105" : "bg-card border-border"}`}
                >
                  {isPopular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2">
                      <Badge className="bg-gradient-primary text-white px-4 py-1">
                        <Star className="w-3 h-3 mr-1" />
                        Paling Populer
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="pt-12 pb-4">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-gradient-primary">{plan.price}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="pb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardContent className="pt-0">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                      <Button className={`w-full ${isPopular ? data.colorGradient : "bg-secondary/20"} hover:opacity-90`} variant={isPopular ? "default" : "outline"}>
                        Pilih Paket Ini
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container-site">
          <SectionHeading
            badge="FAQ"
            title="Pertanyaan Umum"
            subtitle="Jawaban untuk pertanyaan yang sering diajukan"
          />

          <div className="max-w-3xl mx-auto mt-12 space-y-4">
            {data.faq.map((item, i) => (
              <Card key={i} className="bg-card border-border">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-medium flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm text-primary font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    {item.q}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-muted-foreground">
                  <p className="leading-relaxed ml-11">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="orb orb-primary w-[400px] h-[400px] -top-32 left-1/2 -translate-x-1/2 opacity-20" />

        <div className="container-site relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-display text-3xl md:text-4xl mb-6">
              Siap Memulai Project <span className="text-gradient-primary">{data.titleShort}</span> Anda?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Konsultasi gratis dengan tim kami. Dapatkan penawaran terbaik untuk kebutuhan spesifik Anda.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white shadow-lg">
                  <Users className="w-5 h-5 mr-2" />
                  Chat Sekarang
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}