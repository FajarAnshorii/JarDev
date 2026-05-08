import type { Metadata } from "next";
import { Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Kebijakan privasi JarDev Builder - Bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        <div className="container-site relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
              <Shield className="w-4 h-4 mr-2" />
              Privacy Policy
            </Badge>
            <h1 className="heading-display text-4xl md:text-5xl mb-6">
              Kebijakan <span className="text-gradient-primary">Privasi</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              Terakhir diperbarui: Mei 2024
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Informasi yang Kami Kumpulkan</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kami mengumpulkan informasi yang Anda berikan langsung kepada kami, termasuk nama, alamat email, nomor telepon, dan informasi projekt yang Anda bagikan saat menghubungi kami melalui formulir kontak, email, atau WhatsApp.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Penggunaan Informasi</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Informasi yang kami kumpulkan digunakan untuk: (1) merespons pertanyaan dan konsultasi Anda; (2) memberikan penawaran harga dan proposal proyek; (3) mengomunikasikan update terkait proyek yang berjalan; (4) mengirim newsletter dan informasi promotional jika Anda subscribe; (5) meningkatkan layanan kami.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Perlindungan Data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kami mengimplementasikan langkah-langkah keamanan yang sesuai untuk melindungi informasi Anda dari akses yang tidak sah, perubahan, pengungkapan, atau penghancuran. Data klien disimpan secara aman dan tidak akan dishare dengan pihak ketiga tanpa izin.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Hak Anda</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Anda memiliki hak untuk: mengakses data pribadi Anda; mengoreksi informasi yang tidak akurat; meminta penghapusan data Anda; menolak pemrosesan data tertentu; withdraw consent kapan saja. Untuk行使 hak ini, hubungi kami di contact@jardev.builder.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Website kami menggunakan cookies untuk meningkatkan pengalaman browsing Anda. Cookies membantu kami memahami bagaimana Anda menggunakan website kami agar kami bisa memberikan layanan yang lebih baik. Anda bisa configure browser Anda untuk menolak cookies jika preferir.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Perubahan Kebijakan</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diposting di halaman ini dengan tanggal "terakhir diperbarui" yang direvisi. Kami encourage Anda untuk mereview kebijakan ini secara berkala.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Hubungi Kami</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, jangan ragu untuk menghubungi kami di contact@jardev.builder atau via WhatsApp di +62 899 0415 500.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}