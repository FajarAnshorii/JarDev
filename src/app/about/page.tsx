import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Heart, Users, Award, Clock, Globe, Coffee, Code, Lightbulb, Rocket, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "Kenali JarDev Builder - Tim developer dan designer profesional yang passionate dalam menciptakan solusi digital berkualitas.",
};

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "Kami tidak compromis dengan kualitas. Setiap line of code dan pixel design diperhitungkan dengan matang.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Kepuasan klien adalah prioritas utama. Kami mendengarkan, memahami, dan memberikan solusi terbaik.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Terus belajar dan mengadopsi teknologi terbaru untuk memberikan hasil yang relevan dan future-proof.",
  },
  {
    icon: Shield,
    title: "Transparency",
    description: "Komunikasi terbuka dan jujur. Tidak ada biaya tersembunyi, progress yang jelas, dan timeline yang realistis.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Kami tidak hanya coding, tapi juga thinking. Memahami masalah bisnis dan memberikan solusi yang tepat.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Digital presence harus bisa diakses semua orang. Kami membangun website yang inklusif dan accessible.",
  },
];

const team = [
  {
    name: "Fajar Prasetyo",
    role: "Founder & Lead Developer",
    bio: "Full-stack developer dengan pengalaman 5+ tahun. Spesialisasi di React, Next.js, dan Node.js. Passionate dalam clean code dan performance optimization.",
    avatar: "FP",
    skills: ["Next.js", "React", "Node.js", "PostgreSQL"],
  },
  {
    name: "Sarah Wijaya",
    role: "UI/UX Designer",
    bio: "Desainer kreatif dengan background di digital product design. Fokus pada user-centered design dan visual identity yang memorable.",
    avatar: "SW",
    skills: ["Figma", "UI Design", "Prototyping", "Design System"],
  },
  {
    name: "Ahmad Rizki",
    role: "Mobile Developer",
    bio: "React Native & Flutter specialist. Membangun aplikasi mobile yang performant dan user-friendly untuk berbagai platform.",
    avatar: "AR",
    skills: ["React Native", "Flutter", "iOS", "Android"],
  },
];

const timeline = [
  {
    year: "2024",
    title: "Rebranding & Expansion",
    description: "Memperluas layanan dengan mobile app development dan menambah tim dengan 2 developer senior.",
  },
  {
    year: "2023",
    title: "50+ Happy Clients",
    description: "Merayakan milestone 50 klien puas dan launch portfolio dengan project-projects menarik.",
  },
  {
    year: "2022",
    title: "Focus on Quality",
    description: "Implementasi QA process yang lebih ketat dan investment di tools dan infrastructure.",
  },
  {
    year: "2021",
    title: "The Beginning",
    description: "JarDev Builder officially launched dengan misi memberikan solusi digital yang accessible dan berkualitas.",
  },
];

const stats = [
  { value: "5+", label: "Tahun Pengalaman" },
  { value: "150+", label: "Project Selesai" },
  { value: "50+", label: "Klien Puas" },
  { value: "98%", label: "Client Retention" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="orb orb-primary w-52 sm:w-72 md:w-96 lg:w-[500px] h-52 sm:h-72 md:h-96 lg:h-[500px] -top-24 sm:-top-32 md:-top-48 -left-24 sm:-left-32 md:-left-48 opacity-20" />
        <div className="orb orb-secondary w-44 sm:w-64 md:w-80 lg:w-[400px] h-44 sm:h-64 md:h-80 lg:h-[400px] bottom-0 -right-16 sm:-right-24 md:-right-32 opacity-15" />

        <div className="container-site relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
                <Coffee className="w-4 h-4 mr-2" />
                About Us
              </Badge>
              <h1 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
                Membangun <span className="text-gradient-primary">Digital Dreams</span> Bersama
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Kami adalah tim developer dan designer yang passionate dalam menciptakan solusi digital berkualitas. Dengan pengalaman lebih dari 5 tahun, kami membantu bisnis dari berbagai ukuran untuk memiliki presence digital yang kuat.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-gradient-primary mb-1">
                      {stat.value}
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl sm:text-7xl md:text-8xl">👨‍💻</span>
                    <div className="mt-4 text-2xl font-bold heading-gradient">JarDev Builder</div>
                    <p className="text-muted-foreground mt-2">Building Digital Solutions</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-primary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-card/50 relative">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <Card className="bg-card border-primary/30">
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Misi Kami</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Memberikan solusi digital yang accessible, berkualitas, dan affordable untuk bisnis Indonesia. Kami percaya bahwa setiap bisnis berhak memiliki digital presence yang profesional tanpa harus mengeluarkan biaya yang besar.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-secondary/30">
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-secondary flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Menjadi partner digital yang terpercaya bagi bisnis Indonesia dalam perjalanan transformasi digital. Menghubungkan ide dengan teknologi untuk menciptakan solusi yang memberikan dampak nyata.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container-site">
          <SectionHeading
            badge="Nilai Kami"
            title="Principle yang Kami Pegang"
            subtitle="Fondasi yang memandu setiap keputusan dan tindakan kami"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="group bg-card border-border hover:border-primary/30 transition-all duration-300 hover-lift"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-card/50 relative">
        <div className="container-site">
          <SectionHeading
            badge="Tim Kami"
            title="Meet The Team"
            subtitle="Orang-orang passionate di balik layar JarDev Builder"
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group bg-card border-border hover:border-primary/30 transition-all duration-300"
              >
                <CardContent className="p-5 sm:p-6 text-center">
                  <Avatar className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4 ring-4 ring-primary/20">
                    <AvatarFallback className="bg-gradient-primary text-2xl text-white">
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container-site">
          <SectionHeading
            badge="Perjalanan"
            title="Our Story"
            subtitle="Pencapaian dan milestone sepanjang perjalanan JarDev Builder"
            centered
          />

          <div className="max-w-3xl mx-auto mt-12">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-primary transform -translate-x-1/2 md:-translate-x-1/2 z-10 ring-4 ring-background" />

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                      <Card className="bg-card border-border">
                        <CardContent className="p-6">
                          <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary border-0">
                            {item.year}
                          </Badge>
                          <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-primary/10 relative">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="orb orb-primary w-52 sm:w-72 md:w-96 lg:w-[400px] h-52 sm:h-72 md:h-96 lg:h-[400px] -top-24 sm:-top-32 left-1/2 -translate-x-1/2 opacity-20" />

        <div className="container-site relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-secondary/50 text-secondary">
              <Award className="w-4 h-4 mr-2" />
              Ready to Collaborate
            </Badge>
            <h2 className="heading-display text-3xl md:text-4xl mb-6">
              Yuk, Bangun Project <span className="text-gradient-primary">Bersama!</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              Kami siap membantu Anda menciptakan digital presence yang kuat dan memorable.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                  Hubungi Kami
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-2">
                  Lihat Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}