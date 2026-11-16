import { Code, BookOpen, GraduationCap, FileText } from 'lucide-react';
import founderPhoto from './assets/adi-muhamad.jpg';

export const COMPANY_INFO = {
  name: "PT Digital Pustaka Karya Indonesia",
  shortName: "Pustaka Karya",
  email: "digitalpustakakarya.id@gmail.com",
  phone: "6285117705470",
  address: "Kuningan, Jawa Barat, Indonesia",
  whatsappUrl: "https://wa.me/6285117705470?text=Halo%20Admin%20PT%20Digital%20Pustaka%20Karya%20Indonesia%2C%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20pengembangan%20sistem%20dan%20ekosistem%20digital.",
  socials: {
    instagram: "https://www.instagram.com/adimhsd",
    facebook: "https://www.facebook.com/adimuhamad28",
    x: "https://github.com/adimhsd"
  }
};

export const NAVIGATION = [
  { label: "Tentang Kami", href: "#about" },
  { label: "Layanan & Ekosistem", href: "#ecosystem" },
  { label: "Founder", href: "#founder" },
  { label: "Legalitas", href: "#legal" },
  { label: "Kontak", href: "#contact" },
];

export const HERO_CONTENT = {
  badge: "System Builder • AI Automation • EdTech & Publishing",
  headlinePrefix: "Solusi Pengembangan System & Automation",
  headlineHighlight: "serta Ekosistem Literasi Digital",
  subheadline: "PT Digital Pustaka Karya Indonesia hadir sebagai mitra strategis dengan fokus utama pada layanan System Builder & Automation (pengembangan sistem web, AI Agent, RAG, & otomatisasi alur kerja), didukung layanan penerbitan buku ber-ISBN, pengelolaan jurnal ilmiah OJS, dan edukasi teknologi terapan.",
  ctaPrimary: { label: "Jelajahi Layanan", href: "#ecosystem" },
  ctaSecondary: { label: "Profil Founder", href: "#founder" },
};

export const ABOUT_CONTENT = {
  title: "Sinergi Rekayasa Sistem Otomatisasi, Kecerdasan Buatan, dan Literasi Akademik",
  description: "Berangkat dari kebutuhan nyata di dunia industri, perguruan tinggi, dan UMKM, PT Digital Pustaka Karya Indonesia menempatkan layanan System Builder & Automation sebagai fokus utama. Kami merancang dan membangun sistem informasi kustom, otomatisasi proses kerja (workflow automation), serta integrasi Artificial Intelligence yang praktis, realistis, dan berdampak langsung—sembari terus memperkuat ekosistem penerbitan buku, jurnal ilmiah, dan pelatihan digital.",
  vision: "Menjadi pusat pengembangan sistem terotomatisasi (System Builder & Automation) dan ekosistem literasi digital terpadu yang berdampak nyata di Indonesia.",
  mission: "Membangun sistem digital & otomatisasi cerdas, memperluas akses publikasi ilmiah berkualitas, serta menyelenggarakan edukasi teknologi berbasis praktik industri.",
  imageUrl: "/images/office-workspace.jpg",
  imageAlt: "Suasana Kerja & Kolaborasi Tim PT Digital Pustaka Karya Indonesia",
  imageCaption: "Kolaborasi Rekayasa Sistem, Riset AI & Literasi Digital"
};

export const FOUNDER_CONTENT = {
  name: "Adi Muhamad Muhsidi, S.SI., M.Kom.",
  personaTag: "⚡ Founder & System Builder",
  statusLabel: "Dosen & Praktisi AI Aktif",
  role: "Founder & CEO PT Digital Pustaka Karya Indonesia",
  academicRole: "Lecture S1 Bisnis Digital — Fakultas Ekonomi dan Bisnis, Universitas Kuningan",
  bio: "Akademisi berlatar belakang Ilmu Komputer & Sistem Informasi di Fakultas Ekonomi dan Bisnis Universitas Kuningan. Berfokus pada System Builder & Automation serta pengembangan aplikasi berbasis Artificial Intelligence (LLM, RAG, AI Agent), Data Mining, Machine Learning, dan Big Data yang bersifat praktis, realistis, serta berdampak langsung bagi dunia pendidikan, kampus, dan UMKM.",
  quote: "Dalam berkarya dan membangun sistem, kami berupaya memimpin lewat kebermanfaatan nyata serta menjaga kemandirian teknologi agar setiap institusi dan pelaku usaha memiliki sistem yang handal, terotomatisasi, dan merdeka.",
  imageUrl: founderPhoto,
  websiteUrl: "https://adi-muhamad.my.id/",
  chatUrl: "https://chat.adi-muhamad.my.id/"
};

export const ECOSYSTEM_SERVICES = [
  {
    id: "dev",
    badge: "FOKUS UTAMA",
    title: "System Builder & Automation",
    description: "Layanan utama perancangan dan pembangunan sistem informasi kustom, otomatisasi alur kerja (workflow automation), serta integrasi AI terapan untuk kampus, instansi, dan UMKM.",
    details: [
      "Workflow Automation (n8n, API & Payment Gateway)",
      "Integrasi AI (LLM, RAG Chatbot, OCR & Analytics)",
      "Cloud, Linux VPS & Self-Hosted Infrastructure"
    ],
    cta: "Konsultasi & Portofolio",
    link: "https://wa.me/6285117705470?text=Halo%20Admin%20PT%20Digital%20Pustaka%20Karya%20Indonesia%2C%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20System%20Builder%20%26%20Automation%20(pengembangan%20sistem%2C%20workflow%20automation%2C%20atau%20integrasi%20AI).",
    icon: Code,
    color: "blue",
    letter: "S"
  },
  {
    id: "publisher",
    badge: "PENERBITAN & HKI",
    title: "Pustaka Karya Publishing",
    description: "Layanan penerbitan buku fisik dan digital ber-ISBN serta pengurusan Hak Kekayaan Intelektual (HKI) untuk dosen, peneliti, mahasiswa, guru, dan umum.",
    details: [
      "Penerbitan Buku Referensi, Ajar & Monograf (ISBN)",
      "Jasa Editor, Layouter & Desain Sampul Profesional",
      "Pendampingan & Pengurusan HKI / Hak Cipta"
    ],
    cta: "Terbitkan Karya",
    link: "https://wa.me/6285117705470?text=Halo%20Admin%20PT%20Digital%20Pustaka%20Karya%20Indonesia%2C%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20Penerbitan%20Buku%20ber-ISBN%20dan%20Pengurusan%20HKI%20di%20Pustaka%20Karya%20Publishing.",
    icon: BookOpen,
    color: "purple",
    letter: "P"
  },
  {
    id: "journal",
    badge: "JURNAL ILMIAH & PKM",
    title: "Manajemen OJS & Publikasi",
    description: "Pengelolaan penerbitan jurnal ilmiah berbasis Open Journal Systems (OJS) untuk hilirisasi hasil penelitian akademik dan pengabdian masyarakat.",
    details: [
      "Jurnal Karya (Scientific Research) & Jurnal Abdi (PKM)",
      "Instalasi, Kustomisasi & Manajemen Standar OJS",
      "Pendampingan Tata Kelola & Indeksasi Ilmiah"
    ],
    cta: "Kirim Manuskrip",
    link: "https://wa.me/6285117705470?text=Halo%20Admin%20PT%20Digital%20Pustaka%20Karya%20Indonesia%2C%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20Manajemen%20OJS%20%26%20Publikasi%20Jurnal%20Ilmiah.",
    icon: FileText,
    color: "green",
    letter: "J"
  },
  {
    id: "academy",
    badge: "EDTECH & TRAINING",
    title: "Pustaka Karya Academy",
    description: "Pelatihan intensif teknologi informasi, Data Science, AI Automation, Machine Learning, pemrograman, dan transformasi digital berbasis praktik industri.",
    details: [
      "Workshop & Bootcamp AI, Data Mining & Python",
      "E-Course & Modul Praktikum Berbasis Studi Kasus",
      "In-House Training Transformasi Digital"
    ],
    cta: "Mulai Belajar",
    link: "https://wa.me/6285117705470?text=Halo%20Admin%20PT%20Digital%20Pustaka%20Karya%20Indonesia%2C%20saya%20ingin%20berkonsultasi%20mengenai%20program%20pelatihan%20dan%20workshop%20di%20Pustaka%20Karya%20Academy.",
    icon: GraduationCap,
    color: "orange",
    letter: "A"
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
      imageUrl: "/images/legal/sertifikat.png",
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
