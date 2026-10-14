# TemuSewa.ID - Official Landing Page

Landing page modern, responsif, dan interaktif untuk ekosistem **TemuSewa.ID**, dikembangkan oleh **PT Garis Daya Digital** (Versi 1.0 | Oktober 2026).

---

## 🎨 Desain & Identitas Brand
Sistem desain mematuhi aturan baku pada [`DESIGN.md`](./DESIGN.md) yang diekstrak langsung dari dokumen konsep arsitektur dan panduan identitas visual:
- **Navy Primary:** `#0D2C54` (Kredibilitas, fondasi enterprise, header/footer)
- **Green Secondary / Accent:** `#18A766` (Pertumbuhan, tombol aksi utama, highlight)
- **Background:** `#F4F7FB` (Kanvas terang yang bersih dan sejuk)
- **Text:** `#1F2937` (Teks utama dengan kontras tinggi)
- **Font Family:** Google Fonts **Poppins** (Bold, Semibold, Regular)
- **Logo Brand:** Simbol *Handshake Pin Location* dengan dua figur manusia tersenyum dan wordmark "Temu" (Navy) + "Sewa" (Hijau).

---

## 🚀 Fitur & Komponen yang Dibangun

1. **Sticky Glassmorphism Navbar:** Navigasi mulus (*smooth scroll*), tombol chat WhatsApp instan, tombol reservasi demo, serta mobile drawer responsif.
2. **Hero Section Dinamis:**
   - Tagline: *"Temukan kebutuhan rentalmu."*
   - Headline: *"Semua Rental, Lebih Dekat"*
   - Value Proposition terpadu.
   - Dual Call-to-Action (*Kenali TemuSewa* & *Lihat Produk*).
   - Indikator metrik (*6+ Kategori*, *3-in-1 Platform*, *100% Pendampingan*).
   - **Interactive Device Mockup**: Frame tablet dan smartphone dengan tab switcher interaktif untuk mempratinjau live UI:
     * *Aplikasi Customer* (Marketplace pencarian rental berbasis GPS).
     * *Aplikasi Mitra* (Manajemen operasional, kalender anti-bentrok, stok unit).
     * *Web Internal PT Garis Daya Digital* (Command center pengawasan & kurasi).
3. **Latar Belakang & Solusi:** Perbandingan visual antara friksi rental tradisional vs efisiensi digital TemuSewa.
4. **3 Pilar Nilai Audiens:**
   - *Untuk Calon Mitra Rental*
   - *Untuk Calon Pelanggan*
   - *Untuk Calon Investor & Talenta*
5. **Showcase Ekosistem 3 Platform:** Kartu platform interaktif lengkap dengan modal pop-up spesifikasi fungsional mendalam.
6. **Kategori Rental Interaktif:** Pemilih 6 kategori rental (Kendaraan, Properti, Alat & Elektronik, Alat Kerja & Teknik, Rumah Tangga, Event & Lainnya) yang menampilkan daftar unit populer dan tombol konsultasi kategori.
7. **Layanan & Pendampingan Mitra:** Edukasi 3 langkah onboarding (Instalasi -> Penginputan Unit -> Persiapan Listing & Go-Live).
8. **Roadmap Rilis Linier Vertikal:** Garis waktu transparan membedakan status:
   - *Fase 1 (Q4 2026):* Fondasi & Kemitraan Awal (**Tersedia / Sedang Berjalan**)
   - *Fase 2 (Q1-Q2 2027):* Marketplace Customer & Escrow Payment (**Sedang Dikembangkan**)
   - *Fase 3 (Q3 2027+):* Ekspansi Nasional & AI Smart-Matching (**Direncanakan**)
9. **Profil Kredibilitas PT Garis Daya Digital:** Rekayasa perangkat lunak terintegrasi, visi ekosistem sewa nasional, dan ajakan kemitraan investor.
10. **Dual-Action Contact & CTA:**
    - *Smart WhatsApp Trigger:* Generator pesan instan terformat berdasarkan persona (Mitra, Investor, Pelanggan, atau Demo).
    - *Modal Formulir Janjian Temu / Demo:* Formulir reservasi pertemuan/demo privat yang otomatis menyusun data rapi dan menghubungkan ke WhatsApp resmi.
11. **Floating WhatsApp Pill:** Tombol mengambang di pojok kanan bawah dengan radar badge aktif.

---

## 🛠️ Menjalankan Proyek

### 1. Mode Development (Live Server)
Server lokal saat ini sudah aktif di:
```bash
npm run dev
```
Buka peramban Anda di: **`http://localhost:3000`**

### 2. Membangun Versi Produksi (Production Build)
Untuk menghasilkan bundle file statis siap sebar (*dist*):
```bash
npm run build
```
Hasil kompilasi file statis berada di folder `dist/` dan siap diunggah ke Vercel, Netlify, Cloudflare Pages, GitHub Pages, maupun hosting cPanel.

### 3. Mengubah Kontak & Konten Secara Terpusat
Seluruh nomor WhatsApp, email, teks hero, daftar kategori, maupun tahapan roadmap dapat diedit dengan mudah melalui satu file konfigurasi:
👉 **[`src/config/siteConfig.js`](./src/config/siteConfig.js)**
