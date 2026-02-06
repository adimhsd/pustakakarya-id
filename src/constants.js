import { Code, BookOpen, GraduationCap, FileText, Globe, Smartphone, Cloud, PenTool, Layout, ShieldCheck, Video, Users, Mic } from 'lucide-react';

export const COMPANY_INFO = {
  name: "PT Digital Pustaka Karya Indonesia",
  shortName: "Pustaka Karya",
  email: "admin@pustakakarya.id",
  phone: "6285117705470",
  address: "Indonesia", // Placeholder
  whatsappUrl: "https://wa.me/6285117705470",
  socials: {
    instagram: "#",
    facebook: "#",
    x: "#"
  }
};

export const NAVIGATION = [
  { label: "Tentang Kami", href: "#about" },
  { label: "Ekosistem", href: "#ecosystem" },
  { label: "Layanan", href: "#services" }, // Added based on typical needs
  { label: "Kontak", href: "#contact" },
];

export const HERO_CONTENT = {
  headline: "Menjembatani Inovasi Akademik dengan Solusi Digital",
  subheadline: "PT Digital Pustaka Karya Indonesia hadir sebagai mitra strategis dalam transformasi digital, publikasi ilmiah, dan pengembangan kompetensi berbasis industri.",
  ctaPrimary: { label: "Jelajahi Ekosistem", href: "#ecosystem" },
  ctaSecondary: { label: "Pelajari Visi Kami", href: "#about" },
};

export const ABOUT_CONTENT = {
  title: "Membangun Masa Depan dari Akar Literasi dan Teknologi",
  description: "Berawal dari visi untuk menyatukan dunia akademisi dengan kebutuhan praktis industri, kami percaya bahwa setiap karya ilmiah harus memiliki dampak nyata, dan setiap bisnis harus diperkuat oleh sistem digital yang cerdas.",
  vision: "Menjadi pusat ekosistem digital terpadu di Indonesia.",
  mission: "Inovasi, Literasi, Edukasi, dan Kolaborasi.",
};

export const FOUNDER_CONTENT = {
  name: "Nama Anda, M.Kom.",
  role: "Founder & CEO PT Digital Pustaka Karya Indonesia",
  tags: [
    "Expert in FinTech & Big Data",
    "Academic Practitioner",
    "System Architect"
  ],
  quote: "Teknologi bukan hanya soal baris kode, tapi soal bagaimana kita mengabadikan karya dan mempermudah akses pengetahuan bagi semua orang. Melalui Pustaka Karya, kami mewujudkan sinergi itu.",
  imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
};

export const ECOSYSTEM_SERVICES = [
  {
    id: "dev",
    title: "Software Dev & IoT",
    description: "Mewujudkan ide menjadi sistem digital yang handal dan terukur.",
    details: [
      "Web & Mobile App Development",
      "IoT Integration (Smart System)",
      "Cloud & Infrastructure Setup"
    ],
    cta: "Lihat Portofolio",
    link: "https://dev.pustakakarya.id",
    icon: Code,
    color: "blue", // Helper for styling
    letter: "D"
  },
  {
    id: "publisher",
    title: "Publisher & HKI",
    description: "Layanan profesional untuk mengabadikan karya tulis dan perlindungan hukum.",
    details: [
      "Penerbitan Buku (ISBN)",
      "Jasa Editor & Layouter Profesional",
      "Pengurusan HKI (Hak Kekayaan Intelektual)"
    ],
    cta: "Terbitkan Karya",
    link: "https://publisher.pustakakarya.id",
    icon: BookOpen,
    color: "purple",
    letter: "P"
  },
  {
    id: "academy",
    title: "Academy (MOOC)",
    description: "Tingkatkan kompetensi melalui pelatihan berbasis industri dan akademisi.",
    details: [
      "E-Course (Video Based Learning)",
      "Workshop & Professional Certification",
      "Webinar & Seminar Series"
    ],
    cta: "Mulai Belajar",
    link: "https://academy.pustakakarya.id",
    icon: GraduationCap,
    color: "green",
    letter: "A"
  },
  {
    id: "journal",
    title: "Scientific Journal",
    description: "Platform publikasi ilmiah untuk hilirisasi hasil penelitian dan pengabdian.",
    details: [
      "Jurnal Karya (Scientific Research)",
      "Jurnal Abdi (PKM)",
      "Terindeks & Sesuai Standar OJS"
    ],
    cta: "Kirim Manuskrip",
    link: "https://journal.pustakakarya.id",
    icon: FileText,
    color: "orange",
    letter: "J"
  }
];

export const FOOTER_CONTENT = {
  copyright: `© ${new Date().getFullYear()} PT Digital Pustaka Karya Indonesia. All rights reserved.`,
};

export const LEGAL_CONTENT = {
  title: "Legalitas & Badan Hukum",
  description: "PT Digital Pustaka Karya Indonesia telah resmi terdaftar sebagai badan hukum Perseroan Perorangan di Kementerian Hukum dan HAM Republik Indonesia, menjamin kredibilitas dan kepatuhan terhadap regulasi yang berlaku.",
  documents: [
    {
      title: "Sertifikat Pendaftaran Pendirian",
      subtitle: "Nomor: AHU-022525.AH.01.30.Tahun 2025",
      imageUrl: "/images/legal/sertifikat.png", // Ensure these file paths match where you place them
      alt: "Sertifikat Pendaftaran Pendirian PT Digital Pustaka Karya Indonesia"
    },
    {
      title: "Surat Pernyataan Pendirian",
      subtitle: "Dokumen Resmi Kementerian Hukum dan HAM",
      imageUrl: "/images/legal/pernyataan.png",
      alt: "Surat Pernyataan Pendirian Perseroan Perorangan"
    }
  ]
};
