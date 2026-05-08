import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { LenisProvider } from "@/providers/LenisProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "JarDev Builder — Web Development & Design Services",
    template: "%s | JarDev Builder",
  },
  description:
    "JarDev Builder menyediakan layanan pembuatan website profesional, mobile app, dan desain UI/UX. Transformasi ide bisnis Anda menjadi solusi digital yang luar biasa.",
  keywords: [
    "jasa pembuatan website",
    "web development",
    "UI UX design",
    "mobile app development",
    "landing page",
    "e-commerce",
    " JarDev",
  ],
  authors: [{ name: "JarDev Builder" }],
  creator: "JarDev Builder",
  metadataBase: new URL("https://jardev.builder"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "JarDev Builder",
    title: "JarDev Builder — Web Development & Design Services",
    description:
      "Layanan pembuatan website profesional, mobile app, dan desain UI/UX berkualitas tinggi.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JarDev Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JarDev Builder — Web Development & Design Services",
    description:
      "Layanan pembuatan website profesional, mobile app, dan desain UI/UX berkualitas tinggi.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <LenisProvider>
          <TooltipProvider>
            {children}
            <Toaster position="bottom-right" richColors closeButton />
          </TooltipProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
