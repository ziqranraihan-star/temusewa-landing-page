# TemuSewa.ID - Design System & Brand Guidelines
> Dokumen Sumber Kebenaran (Single Source of Truth) Desain UI/UX Landing Page & Platform TemuSewa.
> Dikembangkan oleh **PT Garis Daya Digital** (Versi 1.0 - Oktober 2026).

---

## 1. Brand Identity & Filosofi
- **Nama Produk:** TemuSewa.ID
- **Induk Perusahaan:** PT Garis Daya Digital
- **Tagline:** *"Temukan kebutuhan rentalmu."*
- **Hero Headline:** *"Semua Rental, Lebih Dekat"*
- **Pernyataan Misi / Value Proposition:**
  > "TemuSewa.ID adalah ekosistem yang menghubungkan penyedia rental dengan pelanggan melalui aplikasi yang mudah, aman, dan terintegrasi."
- **Karakter Visual ("Design Vibe"):**
  Clean Modern Enterprise Marketplace & SaaS, terpercaya, segar, ramah, dan bernuansa kemitraan profesional.
- **Filosofi Logo:**
  Simbol jabat tangan (*handshake*) yang membentuk siluet *location pin* dan dua figur manusia tersenyum. Melambangkan kolaborasi, kepercayaan bisnis sewa, dan titik temu lokal antara penyedia dan penyewa.

---

## 2. Design Tokens (Warna & Palet)

### Palet Warna Utama
| Token | Hex / Nilai | Peran & Penggunaan |
| :--- | :--- | :--- |
| `primary` | `#0D2C54` | **Navy TemuSewa**: Dominan pada brand wordmark "Temu", header, display title, card kontras, dan footer |
| `primary-hover` | `#081E3A` | Warna state hover untuk elemen bernuansa navy |
| `primary-light` | `#1A457D` | Aksen sekunder navy untuk variasi border/shadow |
| `secondary` | `#18A766` | **Green TemuSewa**: Brand wordmark "Sewa", Primary Action Button (CTA), badges, highlight pertumbuhan |
| `secondary-hover` | `#138A53` | Warna state hover untuk tombol dan link aksen hijau |
| `secondary-soft` | `#E8F8F0` | Background chip, badge status aktif, icon container lembut |
| `background` | `#F4F7FB` | Background kanvas global (Light gray-blue yang sejuk dan bersih) |
| `surface` | `#FFFFFF` | Background card, container komponen, navbar putih bersih |
| `surface-subtle` | `#EDF2F7` | Garis batas tipis, pembatas section, disabled background |
| `text-primary` | `#1F2937` | Teks judul dan body copy utama (kontras tinggi, WCAG AAA) |
| `text-secondary`| `#4B5563` | Teks deskripsi, subjudul, dan keterangan pendukung |
| `text-muted` | `#9CA3AF` | Placeholder input, watermark, metadata, caption |
| `border-subtle` | `#E2E8F0` | Border card, input outline, divider line |

### Skala Status & Feedback
- **Tersedia (Live):** `#10B981` (Emerald) / `#ECFDF5`
- **Sedang Dikembangkan (In Progress):** `#3B82F6` (Blue) / `#EFF6FF`
- **Direncanakan (Roadmap):** `#F59E0B` (Amber) / `#FFFBEB`

---

## 3. Tipografi
- **Primary Font Family:** `'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Google Fonts Import:**
  `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');`

### Skala Tipografi
- **Display / Hero H1:** `Poppins Bold` (40px - 56px, line-height: 1.15, letter-spacing: -0.02em)
- **Section Heading H2:** `Poppins Bold` (28px - 36px, line-height: 1.25, letter-spacing: -0.01em)
- **Card Title H3:** `Poppins Semibold` (20px - 24px, line-height: 1.35)
- **Feature Title H4:** `Poppins Semibold` (16px - 18px, line-height: 1.4)
- **Body Regular:** `Poppins Regular` (15px - 16px, line-height: 1.6, color: `#1F2937`)
- **Body Small / Subtitle:** `Poppins Regular` (13px - 14px, line-height: 1.5, color: `#4B5563`)
- **Badge / Caption:** `Poppins Medium` (11px - 12px, letter-spacing: 0.05em, uppercase)

---

## 4. Spacing, Shapes, & Elevasi

### Corner Radius (`border-radius`)
- **Small (`rounded-md`):** `6px` - Input field, tag kecil
- **Medium (`rounded-xl`):** `12px` - Button CTA, dropdown, floating pill
- **Large (`rounded-2xl`):** `16px` - 20px - Standard content cards, metric tiles
- **Extra Large (`rounded-3xl`):** `24px` - Hero container, modal popups, mockup frames
- **Full (`rounded-full`):** `9999px` - Badges, pill filters, avatars

### Bayangan & Elevasi
- **Card Shadow (Soft):** `0 4px 20px -2px rgba(13, 44, 84, 0.06)`
- **Floating Shadow (Hover):** `0 12px 32px -4px rgba(13, 44, 84, 0.12)`
- **Button Glow Green:** `0 8px 24px -4px rgba(24, 167, 102, 0.35)`

---

## 5. Komponen Inti UI

### A. Tombol (Buttons)
1. **Primary Button:**
   - Background: `#18A766`, Text: `#FFFFFF`, Radius: `12px` (`rounded-xl`), Font: `Poppins Semibold (15px)`
   - Icon: Panah kanan (`->` atau Lucide `ArrowRight`)
   - Hover: Background `#138A53`, bayangan glow hijau lembut.
2. **Secondary Button:**
   - Border: `1.5px solid #0D2C54`, Background: Transparan / Putih, Text: `#0D2C54`, Radius: `12px`
   - Hover: Background `#0D2C54`, Text `#FFFFFF`.
3. **Ghost / Text Button:**
   - Text `#18A766`, underline on hover, icon panah micro.

### B. Cards & Kontainer
- Background: `#FFFFFF` di atas kanvas `#F4F7FB`.
- Border: `1px solid #E2E8F0` dengan transisi halus saat hover (`border-[#18A766] / 30%`).
- Padding: `24px` - `32px` untuk breathing room yang optimal.

### C. Kategori Rental Chips/Grid
6 Kategori Utama:
1. **Kendaraan** (Mobil, Motor, Sepeda Listrik, Truk)
2. **Properti** (Kos, Ruko, Ruang Usaha, Studio)
3. **Alat & Elektronik** (Kamera, Drone, Laptop, Projector, Sound)
4. **Alat Kerja** (Genset, Mesin Konstruksi, Hand Tools)
5. **Rumah Tangga** (Furnitur, Peralatan Pesta, Tenda)
6. **Event & Lainnya** (Busana, Kostum, Dekorasi, Booth)

### D. 3 Pilar Ekosistem Produk TemuSewa
1. **Aplikasi Mitra:**
   Sistem operasi manajemen rental (manajemen stok/unit, booking kalender, laporan keuangan, verifikasi penyewa).
2. **Aplikasi Customer:**
   Marketplace pencarian rental berbasis lokasi, perbandingan harga, dan pemesanan mudah.
3. **Web Internal (PT Garis Daya Digital):**
   Platform backoffice & analytics pusat untuk memantau performa platform dan mendukung operasional mitra secara terintegrasi.

---

## 6. Struktur Section Landing Page
1. **Navigation Header:** Logo TemuSewa, menu jangkar (`Beranda`, `Tentang`, `Ekosistem Produk`, `Mitra Rental`, `Kategori`, `Kontak`), CTA WhatsApp/Hubungi Kami.
2. **Hero Section:** Headline dinamis, value proposition, double CTA ("Kenali TemuSewa" & "Lihat Produk"), hero interactive preview mockup.
3. **Latar Belakang & Solusi:** Pain points pengusaha rental konvensional vs transformasi digital TemuSewa.
4. **3 Target Audiens (Pilar Nilai):**
   - *Untuk Mitra Rental* (Bisnis lebih teratur, praktis, omzet bertumbuh).
   - *Untuk Pelanggan* (Sewa barang apa saja jadi mudah, aman, terpercaya).
   - *Untuk Investor & Talenta* (Peluang ekosistem rental terbesar di Indonesia).
5. **Showcase Ekosistem 3 Platform:** Visualisasi interaktif Aplikasi Mitra, Aplikasi Customer, dan Web Internal.
6. **Kategori Rental Interaktif:** Grid 6 kategori rental dengan visual ikonik.
7. **Layanan & Pendampingan Mitra:** Program onboarding 3 langkah (Instalasi Aplikasi -> Penginputan Unit/Stok -> Persiapan Listing & Go-Live).
8. **Roadmap & Status Fitur:** Tracker transparan: Fitur Siap Pakai (Tersedia), Sedang Dikerjakan, dan Rencana Masa Depan.
9. **Profil PT Garis Daya Digital:** Kredibilitas tim pengembang, visi jangka panjang, legalitas & komitmen kualitas.
10. **CTA Kontak & Form Interaktif:** Konsultasi cepat via WhatsApp atau booking sesi temu demo aplikasi.
11. **Footer:** Navigasi lengkap, link legalitas/kebijakan, copyright PT Garis Daya Digital.
