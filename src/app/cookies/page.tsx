import type { Metadata } from "next";
import { Cookie } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Kebijakan cookie JarDev Builder.",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        <div className="container-site relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
              <Cookie className="w-4 h-4 mr-2" />
              Cookie Policy
            </Badge>
            <h1 className="heading-display text-4xl md:text-5xl mb-6">
              Kebijakan <span className="text-gradient-primary">Cookie</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              Terakhir diperbarui: Mei 2024
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Apa itu Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies adalah file teks kecil yang disimpan di perangkat Anda saat Anda mengunjungi website. Cookies membantu website mengingat preferensi Anda dan meningkatkan pengalaman browsing Anda.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Jenis Cookies yang Kami Gunakan</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Essential Cookies:</strong> Diperlukan agar website berfungsi dengan baik. Tanpa cookies ini, fitur dasar seperti navigation dan secure areas tidak akan bekerja.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Performance Cookies:</strong> Mengumpulkan informasi tentang bagaimana visitors menggunakan website kami. Data ini membantu kami improve website dan memberikan pengalaman yang lebih baik.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Functionality Cookies:</strong> Memungkinkan website mengingat pilihan Anda (seperti bahasa atau region) dan menyediakan fitur yang lebih personal.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Third-Party Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kami juga menggunakan third-party services seperti Google Analytics untuk menganalisis traffic website dan Google Fonts untuk loading fonts. Services ini mungkin menetapkan cookies mereka sendiri.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Mengelola Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Anda dapat mengontrol dan/atau delete cookies sesuai keinginan. Anda dapat delete semua cookies yang ada di komputer Anda dan dapat mengatur sebagian besar browsers untuk mencegah cookies disimpan. Namun, jika Anda menonaktifkan cookies, beberapa fitur website mungkin tidak berfungsi dengan baik.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Perubahan Kebijakan</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kami dapat memperbarui kebijakan cookie ini dari waktu ke waktu. Perubahan akan diposting di halaman ini. Dengan terus menggunakan website kami, Anda agree dengan penggunaan cookies sesuai kebijakan yang berlaku.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Hubungi Kami</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Jika Anda memiliki pertanyaan tentang kebijakan cookie ini, hubungi kami di contact@jardev.builder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}