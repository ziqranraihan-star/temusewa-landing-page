export const siteConfig = {
  name: "TemuSewa.ID",
  tagline: "Temukan kebutuhan rentalmu.",
  heroTitle: "Semua Rental, Lebih Dekat",
  heroSubtitle: "TemuSewa.ID adalah ekosistem yang menghubungkan penyedia rental dengan pelanggan melalui aplikasi yang mudah, aman, dan terintegrasi.",
  company: {
    name: "PT GARIS DAYA DIGITAL",
    legalName: "PT Garis Daya Digital",
    version: "1.0 | Oktober 2026",
    role: "Perusahaan Pengembang Produk Digital",
    address: "Jakarta & Layanan Seluruh Indonesia",
    email: "halo@temusewa.id",
    phone: "+62 812-3456-7890",
    whatsappNumber: "6281234567890", // Ganti dengan nomor WhatsApp resmi
    description: "PT Garis Daya Digital adalah perusahaan pengembang teknologi yang berfokus membangun produk digital terintegrasi untuk mentransformasi operasional dan ekosistem bisnis modern di Indonesia."
  },
  socialLinks: {
    instagram: "https://instagram.com/temusewa.id",
    linkedin: "https://linkedin.com/company/garis-daya-digital",
    whatsapp: "https://wa.me/6281234567890"
  },
  whatsappTemplates: {
    mitra: "Halo Tim TemuSewa.ID, saya pemilik usaha rental dan tertarik untuk bergabung menjadi Mitra Rental. Mohon informasi terkait layanan pendampingan dan implementasi aplikasi.",
    investor: "Halo PT Garis Daya Digital, saya tertarik mengetahui lebih lanjut mengenai visi, ekosistem, dan peluang investasi di TemuSewa.ID.",
    customer: "Halo TemuSewa.ID, saya ingin bertanya seputar cara mencari dan menyewa kebutuhan melalui platform TemuSewa.",
    demo: "Halo Tim TemuSewa, saya ingin mengajukan jadwal demo aplikasi dan konsultasi digitalisasi bisnis rental saya."
  },
  stats: [
    { label: "Kategori Rental", value: "6+", sub: "Tercakup Terpadu" },
    { label: "Ekosistem Aplikasi", value: "3-in-1", sub: "Mitra, User & Backoffice" },
    { label: "Layanan Pendampingan", value: "100%", sub: "Setup & Onboarding" },
    { label: "Status Integrasi", value: "Realtime", sub: "Cloud Synchronization" }
  ],
  navItems: [
    { label: "Solusi", href: "#solusi" },
    { label: "Ekosistem", href: "#ekosistem" },
    { label: "Audiens", href: "#audiens" },
    { label: "Kategori", href: "#kategori" },
    { label: "Pendampingan", href: "#pendampingan" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Tentang", href: "#perusahaan" }
  ],
  mobileNavItems: [
    { label: "Beranda", href: "#beranda" },
    { label: "Latar Belakang & Solusi", href: "#solusi" },
    { label: "Ekosistem 3 Platform", href: "#ekosistem" },
    { label: "Pilar Audiens", href: "#audiens" },
    { label: "6 Kategori Rental", href: "#kategori" },
    { label: "Layanan Pendampingan", href: "#pendampingan" },
    { label: "Roadmap Rilis", href: "#roadmap" },
    { label: "Tentang PT Garis Daya Digital", href: "#perusahaan" },
    { label: "Kontak & Konsultasi", href: "#kontak" }
  ],
  audiencePillars: [
    {
      id: "mitra",
      title: "Untuk Mitra Rental",
      badge: "Pertumbuhan Bisnis",
      description: "Kelola usaha rental Anda lebih rapi, efisien, dan siap berkembang pesat bersama teknologi manajemen modern.",
      features: [
        "Sistem operasional & kontrol stok unit otomatis",
        "Pencatatan booking dan pelacakan jadwal sewa rapi",
        "Layanan pendampingan setup, input data, dan persiapan listing",
        "Jangkauan pelanggan baru via marketplace tanpa pusing"
      ],
      ctaLabel: "Gabung Jadi Mitra",
      ctaType: "mitra"
    },
    {
      id: "pelanggan",
      title: "Untuk Pelanggan",
      badge: "Kemudahan Sewa",
      description: "Temukan berbagai kebutuhan sewa terdekat dengan mudah, aman, terpercaya, dan transparan dari smartphone Anda.",
      features: [
        "Cari barang sewa terdekat berbasis lokasi instan",
        "Informasi ketersediaan unit dan transparansi harga",
        "Pilihan rental terverifikasi dari berbagai kategori",
        "Proses pemesanan cepat dan minim hambatan"
      ],
      ctaLabel: "Jelajahi Kategori",
      ctaType: "customer"
    },
    {
      id: "investor",
      title: "Untuk Investor & Talenta",
      badge: "Skalabilitas Ekosistem",
      description: "Bergabung bersama kami membangun ekosistem rental terbesar dan paling terintegrasi di Indonesia.",
      features: [
        "Potensi pasar rental multi-kategori yang sangat masif",
        "Arsitektur produk 3 platform yang saling mendukung secara sinergis",
        "Eksekusi bisnis riil dengan pendekatan pendampingan di lapangan",
        "Didukung tim teknologi profesional PT Garis Daya Digital"
      ],
      ctaLabel: "Diskusikan Peluang",
      ctaType: "investor"
    }
  ],
  ecosystemPlatforms: [
    {
      id: "mitra-app",
      name: "Aplikasi Mitra",
      type: "Mobile & Tablet App",
      badge: "Solusi Operasional",
      color: "emerald",
      tagline: "Kendali Penuh Bisnis Rental di Genggaman",
      description: "Mendukung kebutuhan operasional bisnis rental secara menyeluruh. Didesain intuitif agar pemilik dan staf rental dapat langsung menggunakannya dengan mudah di lapangan.",
      capabilities: [
        "Manajemen ketersediaan stok & kalender booking sewa",
        "Pencatatan invoice, status pembayaran & deposit aman",
        "Verifikasi identitas dan rekam jejak penyewa",
        "Sinkronisasi otomatis dengan listing marketplace TemuSewa"
      ],
      status: "Tersedia (Beta Mitra)"
    },
    {
      id: "customer-app",
      name: "Aplikasi Customer",
      type: "Mobile App (Android & iOS)",
      badge: "Marketplace Terpadu",
      color: "blue",
      tagline: "Cari, Sewa, & Beres Tanpa Ribet",
      description: "Marketplace satu pintu untuk membantu customer menemukan, membandingkan, dan menjelajahi penawaran rental terdekat sesuai kebutuhan harian maupun event.",
      capabilities: [
        "Pencarian cerdas berbasis radius lokasi terdekat (GPS)",
        "Katalog multi-kategori lengkap dengan spesifikasi unit",
        "Sistem booking langsung dengan tanggal & durasi fleksibel",
        "Riwayat sewa dan ulasan kepuasan layanan mitra"
      ],
      status: "Sedang Dikembangkan"
    },
    {
      id: "internal-web",
      name: "Web Internal",
      type: "Cloud Command Center",
      badge: "Backoffice Terintegrasi",
      color: "indigo",
      tagline: "Monitoring & Pendampingan Terpadu",
      description: "Mendukung pekerjaan internal PT Garis Daya Digital dalam memantau, memverifikasi, dan mengelola kegiatan kemitraan serta terintegrasi langsung dengan App Mitra & Customer.",
      capabilities: [
        "Dashboard verifikasi dan kurasi mitra baru secara cepat",
        "Pemantauan status pendampingan teknis & listing unit mitra",
        "Analytics transaksi ekosistem dan tren permintaan sewa",
        "Sistem bantuan operasional (Helpdesk & Support Support Center)"
      ],
      status: "Tersedia (Internal Control)"
    }
  ],
  categories: [
    {
      id: "kendaraan",
      name: "Kendaraan",
      icon: "Car",
      description: "Rental mobil lepas kunci/driver, motor harian, sepeda listrik, dan kendaraan logistik niaga.",
      popularItems: ["Avanza / Innova", "Motor Matic", "Hiace Pariwisata", "Pick-up Box"]
    },
    {
      id: "properti",
      name: "Properti",
      icon: "Building",
      description: "Ruang usaha, ruko harian/bulanan, kos-kosan, studio foto kreatif, dan co-working space.",
      popularItems: ["Studio Foto", "Ruang Meeting", "Ruko Pop-up", "Villa Liburan"]
    },
    {
      id: "alat-elektronik",
      name: "Alat & Elektronik",
      icon: "Camera",
      description: "Kamera mirrorless, lensa premium, drone, lighting, sound system, laptop, dan proyektor presentasi.",
      popularItems: ["Sony Alpha / Canon", "DJI Mini Drone", "Sound Portable", "Laptop Kerja"]
    },
    {
      id: "alat-kerja",
      name: "Alat Kerja & Teknik",
      icon: "Wrench",
      description: "Genset portable, mesin las, alat pertukangan, tangga lipat, dan mesin pembersih industri.",
      popularItems: ["Genset 3000W", "Mesin Cuci Steam", "Bor Hammer", "Tangga Teleskopik"]
    },
    {
      id: "rumah-tangga",
      name: "Rumah Tangga",
      icon: "Home",
      description: "Perlengkapan bayi/stroller, kasur lipat tambahan, perlengkapan masak pesta, hingga kursi roda.",
      popularItems: ["Stroller Bayi", "Kursi Roda Medis", "Air Purifier", "Tenda Kemah"]
    },
    {
      id: "event",
      name: "Event & Lainnya",
      icon: "PartyPopper",
      description: "Tenda dekorasi, panggung, busana adat & jas wisuda, kostum tematik, hingga peralatan pameran.",
      popularItems: ["Jas & Kebaya", "Tenda Pesta", "Lighting Stage", "Booth Pameran"]
    }
  ],
  mentoringSteps: [
    {
      step: "01",
      title: "Instalasi & Konfigurasi Aplikasi",
      description: "Tim ahli kami mendampingi langsung pemasangan aplikasi di perangkat Anda, mengatur akun mitra, dan menyetel konfigurasi awal bisnis rental Anda."
    },
    {
      step: "02",
      title: "Penginputan Unit & Manajemen Stok",
      description: "Bantuan penuh penginputan data unit produk, foto berkualitas, penentuan tarif harian/mingguan, hingga aturan deposit yang aman."
    },
    {
      step: "03",
      title: "Persiapan Listing & Go-Live Marketplace",
      description: "Unit Anda siap tampil di ekosistem TemuSewa. Kami membimbing Anda cara menerima pesanan, mengelola jadwal, dan melayani pelanggan dengan percaya diri."
    }
  ],
  roadmapPhases: [
    {
      phase: "Fase 1",
      title: "Fondasi Ekosistem & Kemitraan Awal",
      period: "Q4 2026",
      status: "Tersedia / Sedang Berjalan",
      statusType: "live",
      description: "Fokus pada stabilisasi Aplikasi Mitra dan Web Internal untuk digitalisasi operasional pengusaha rental percontohan.",
      milestones: [
        "Peluncuran Aplikasi Mitra v1.0 (Manajemen stok & kalender sewa)",
        "Peluncuran Web Internal Command Center PT Garis Daya Digital",
        "Program pendampingan teknis langsung untuk 100+ mitra rental percontohan",
        "Portal informasional & registrasi mitra TemuSewa.ID"
      ]
    },
    {
      phase: "Fase 2",
      title: "Peluncuran Marketplace Customer & Transaksi",
      period: "Q1 - Q2 2027",
      status: "Sedang Dikembangkan",
      statusType: "progress",
      description: "Membuka akses Aplikasi Customer secara luas untuk menghubungkan pelanggan dengan inventaris mitra rental yang sudah terdata rapi.",
      milestones: [
        "Rilis Aplikasi Customer Android & iOS",
        "Fitur pencarian berbasis geolokasi (Radius GPS real-time)",
        "Integrasi pembayaran digital aman & deposit escrow perlindungan mitra",
        "Sistem verifikasi identitas (e-KYC) penyewa untuk keamanan unit"
      ]
    },
    {
      phase: "Fase 3",
      title: "Ekspansi Nasional & AI Smart-Matching",
      period: "Q3 2027+",
      status: "Direncanakan",
      statusType: "planned",
      description: "Penskalaan ekosistem ke kota-kota besar seluruh Indonesia dengan fitur analitik cerdas berbasis kecerdasan buatan.",
      milestones: [
        "Ekspansi jaringan mitra rental ke 30+ kota di Indonesia",
        "Fitur AI Smart-Pricing & prediksi lonjakan permintaan sewa (peak season)",
        "Integrasi asuransi proteksi aset rental instan",
        "Program loyalitas pelanggan dan reward mitra berprestasi"
      ]
    }
  ]
};
