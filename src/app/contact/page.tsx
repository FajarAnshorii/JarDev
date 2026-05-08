"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  CheckCircle2,
  User,
  Building2,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MessageSquare,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "628990415500";

const services = [
  "Website Development",
  "Mobile App Development",
  "UI/UX Design",
  "E-Commerce",
  "Custom Web App",
  "Lainnya",
];

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@jardev.builder",
    href: "mailto:contact@jardev.builder",
  },
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    value: "+62 899 0415 500",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Jakarta, Indonesia",
    href: "#",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat: 09:00 - 18:00",
    href: "#",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Halo, saya ${formData.name || "Someone"} ingin konsultasi tentang project.\n\n` +
        `Layanan: ${formData.service || "Belum dipilih"}\n` +
        `Budget: ${formData.budget || "Belum ditentukan"}\n\n` +
        `Pesan: ${formData.message || "Halo, saya ingin tahu lebih lanjut tentang layanan JarDev Builder."}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const sendViaWhatsApp = () => {
    const message = encodeURIComponent(
      `Halo, saya ingin konsultasi tentang project digital.\n\nMohon hubungi saya kembali. Terima kasih!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="orb orb-primary w-[500px] h-[500px] -top-48 -right-48 opacity-20" />
        <div className="orb orb-secondary w-[400px] h-[400px] bottom-0 -left-48 opacity-15" />

        <div className="container-site relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
              <MessageSquare className="w-4 h-4 mr-2" />
              Hubungi Kami
            </Badge>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6">
              Let's Build Something <span className="text-gradient-primary">Amazing</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Punya project in mind? Konsultasi gratis dengan tim kami. Kami siap membantu mengubah ide Anda menjadi kenyataan.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 relative">
        <div className="container-site">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">Terima Kasih!</h3>
                      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                        Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda dalam 1x24 jam.
                      </p>
                      <Button
                        onClick={openWhatsApp}
                        className="bg-gradient-primary hover:opacity-90 shadow-glow"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Lanjut via WhatsApp
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            Nama Lengkap *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Masukkan nama lengkap Anda"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="bg-background border-border"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="flex items-center gap-2">
                            <MailIcon className="w-4 h-4" />
                            Email *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="email@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-background border-border"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="flex items-center gap-2">
                            <PhoneIcon className="w-4 h-4" />
                            No. WhatsApp
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="08xxxxxxxxxx"
                            value={formData.phone}
                            onChange={handleChange}
                            className="bg-background border-border"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company" className="flex items-center gap-2">
                            <Building2 className="w-4 h-4" />
                            Nama Perusahaan
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Nama perusahaan (opsional)"
                            value={formData.company}
                            onChange={handleChange}
                            className="bg-background border-border"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="service">Layanan yang Dibutuhkan *</Label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full h-10 px-3 rounded-md bg-background border border-border text-foreground"
                          >
                            <option value="">Pilih layanan</option>
                            {services.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="budget">Estimasi Budget</Label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full h-10 px-3 rounded-md bg-background border border-border text-foreground"
                          >
                            <option value="">Pilih budget</option>
                            <option value="< 5jt">Kurang dari Rp 5jt</option>
                            <option value="5jt - 10jt">Rp 5jt - 10jt</option>
                            <option value="10jt - 25jt">Rp 10jt - 25jt</option>
                            <option value="25jt - 50jt">Rp 25jt - 50jt</option>
                            <option value="> 50jt">Lebih dari Rp 50jt</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Deskripsi Project
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Ceritakan tentang project Anda... Apa yang ingin Anda capai? Kapan deadline-nya?"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="bg-background border-border"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className={cn(
                            "flex-1 bg-gradient-primary hover:opacity-90 shadow-glow transition-all",
                            isSubmitting && "opacity-50"
                          )}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                              Mengirim...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2" />
                              Kirim Pesan
                            </>
                          )}
                        </Button>

                        <Button
                          type="button"
                          size="lg"
                          variant="outline"
                          onClick={sendViaWhatsApp}
                          className="flex-1 border-2 bg-green-500/10 hover:bg-green-500/20 text-green-500 border-green-500/50"
                        >
                          <MessageCircle className="w-5 h-5 mr-2" />
                          Chat WhatsApp
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Contact */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Hubungi Kami Langsung</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <a
                          key={index}
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-4 p-3 rounded-xl bg-background/50 hover:bg-primary/5 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-gradient-primary group-hover:text-white transition-all">
                            <Icon className="w-5 h-5 text-primary group-hover:text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{info.title}</p>
                            <p className="font-medium group-hover:text-primary transition-colors">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Quick WhatsApp */}
              <Card className="bg-gradient-primary/10 border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Chat via WhatsApp</h3>
                      <p className="text-sm text-muted-foreground">Respon lebih cepat</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Butuh respons cepat? Chat langsung dengan tim kami via WhatsApp untuk konsultasi instan.
                  </p>
                  <Button
                    onClick={sendViaWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Mulai Chat
                  </Button>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Kenapa Memilih Kami?</h3>
                  <ul className="space-y-3">
                    {[
                      "Konsultasi gratis & no obligation",
                      "Proposal detail dalam 24 jam",
                      "Timeline yang realistis & transparan",
                      "Quality assurance sebelum launch",
                      "Support & maintenance after project",
                      "Source code lengkap & terdokumentasi",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Section */}
      <section className="py-24 bg-card/50 relative">
        <div className="container-site">
          <SectionHeading
            badge="FAQ"
            title="Pertanyaan Umum"
            subtitle="Jawaban cepat untuk pertanyaan yang sering diajukan"
            centered
          />

          <div className="max-w-3xl mx-auto mt-12 grid gap-4">
            {[
              {
                q: "Berapa lama waktu Respon?",
                a: "Kami merespons dalam 1x24 jam kerja. Untuk chat WhatsApp, biasanya lebih cepat - dalam hitungan menit!",
              },
              {
                q: "Apakah ada biaya untuk konsultasi awal?",
                a: "Tidak, konsultasi awal kami GRATIS dan tanpa obligation. Kami akan memberikan gambaran umum dan estimate untuk project Anda.",
              },
              {
                q: "Bagaimana cara memulai project?",
                a: "Cukup hubungi kami via form, email, atau WhatsApp. Kami akan schedule meeting untuk discuss kebutuhan, lalu memberikan proposal dan timeline.",
              },
              {
                q: "Apakah support tersedia setelah project selesai?",
                a: "Ya! Semua paket sudah termasuk support period. Kami juga menyediakan layanan maintenance bulanan untuk jangka panjang.",
              },
            ].map((item, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary">
                      {index + 1}
                    </span>
                    {item.q}
                  </h4>
                  <p className="text-muted-foreground text-sm ml-8">{item.a}</p>
                </CardContent>
              </Card>
            ))}
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
              Punya Pertanyaan Lebih? <span className="text-gradient-primary">Jangan Ragu!</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Tim kami siap membantu Anda 24/7. Jangan sungkan untuk bertanya.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-2">
                  Lihat Layanan
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="border-2">
                  Lihat Harga
                </Button>
              </Link>
              <Button
                size="lg"
                onClick={sendViaWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}