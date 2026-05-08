import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="container-site">
        <div className="max-w-md mx-auto text-center">
          {/* 404 Visual */}
          <div className="relative mb-8">
            <div className="text-[180px] md:text-[240px] font-bold text-primary/10 leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl">🔍</span>
            </div>
          </div>

          {/* Content */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-muted-foreground mb-8">
            Maaf, halaman yang Anda cari tidak tersedia. Mungkin sudah dipindahkan atau tidak ada.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button className="bg-gradient-primary hover:opacity-90 shadow-glow">
                <Home className="w-5 h-5 mr-2" />
                Kembali ke Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-2">
                Hubungi Kami
              </Button>
            </Link>
          </div>

          {/* Suggestions */}
          <div className="mt-12 p-6 bg-card rounded-xl border border-border">
            <h2 className="font-semibold mb-4">Mungkin Anda mencari:</h2>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Link href="/services" className="text-sm text-primary hover:underline">
                Services
              </Link>
              <span className="text-border">•</span>
              <Link href="/portfolio" className="text-sm text-primary hover:underline">
                Portfolio
              </Link>
              <span className="text-border">•</span>
              <Link href="/pricing" className="text-sm text-primary hover:underline">
                Pricing
              </Link>
              <span className="text-border">•</span>
              <Link href="/blog" className="text-sm text-primary hover:underline">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}