import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Syarat dan ketentuan layanan JarDev Builder.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        <div className="container-site relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
              <FileText className="w-4 h-4 mr-2" />
              Terms of Service
            </Badge>
            <h1 className="heading-display text-4xl md:text-5xl mb-6">
              Syarat & <span className="text-gradient-primary">Ketentuan</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              Terakhir diperbarui: Mei 2024
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Definisi</h2>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>"Layanan"</strong> merujuk pada semua jasa pembuatan website, mobile app, UI/UX design, dan layanan digital lainnya yang disediakan oleh JarDev Builder. <strong>"Klien"</strong> adalah pihak yang menggunakan Layanan. <strong>"Project"</strong> adalah hasil kerja yang disepakati dalam spesifikasi projekt.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Cakupan Layanan</h2>
                <p className="text-muted-foreground leading-relaxed">
                  JarDev Builder akan menyediakan layanan sesuai dengan spesifikasi yang disepakati dalam proposal. Setiap perubahan scope harus disepakati bersama dan mungkin memerlukan biaya tambahan. Timeline yang diberikan adalah estimasi dan dapat berubah berdasarkan kompleksitas project.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Pembayaran</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Klien harus membayar 50% dari total biaya sebagai down payment (DP) sebelum project dimulai. Sisa pembayaran 50% harus lunas sebelum final delivery/source code diserahkan. Untuk project besar, opsi cicilan tersedia dengan persetujuan bersama.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Revisi</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Setiap paket sudah termasuk jumlah revisi tertentu: Starter (3 revisi), Professional (10 revisi), Enterprise (unlimited dengan reasonable scope). Revisi di luar paket akan dikenakan biaya tambahan. Revisi major yang mengubah fundamental project design akan di quote terpisah.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Hak Cipta & Kepemilikan</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Setelah pembayaran lunas, semua hak cipta dan source code project menjadi milik Klien sepenuhnya. JarDev Builder berhak menampilkan project tersebut di portfolio kami untuk keperluan promosi dengan izin tertulis dari Klien.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Garansi & Support</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Semua project dilengkapi dengan support period sesuai paket yang dipilih. Bug dan error yang ditemukan dalam fase development akan diperbaiki tanpa biaya tambahan. Support tidak mencakup perubahan fitur atau new features.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Kerahasiaan</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kedua belah pihak setuju untuk menjaga kerahasiaan semua informasi yang dibagikan selama project. Informasi tidak boleh dishare ke pihak ketiga tanpa izin. Kami dapat menandatangani NDA jika diperlukan.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Batasan Tanggung Jawab</h2>
                <p className="text-muted-foreground leading-relaxed">
                  JarDev Builder tidak bertanggung jawab atas kerugian tidak langsung atau consequential damage. Tanggung jawab maksimal kami terbatas pada jumlah total biaya project yang telah dibayarkan.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Penyelesaian Perselisihan</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kami selalu berusaha menyelesaikan semua perselisihan secara baik-baik melalui komunikasi. Jika tidak достигнуто consenso dalam 30 hari, akan digunakan mediator independen. Both parties harus mematuhi keputusan mediator.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">10. Perubahan Syarat</h2>
                <p className="text-muted-foreground leading-relaxed">
                  JarDev Builder berhak mengubah syarat dan ketentuan ini dengan pemberitahuan terlebih dahulu. Perubahan akan efektif sejak tanggal posting. Layanan yang sedang berjalan akan mengikuti syarat yang berlaku saat kontrak ditandatangani.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}