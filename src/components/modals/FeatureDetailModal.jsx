import React from 'react';
import { Tablet, Smartphone, Monitor, CheckCircle2, ShieldCheck, Zap, Layers, ArrowRight } from 'lucide-react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { siteConfig } from '../../config/siteConfig';

export default function FeatureDetailModal({ selectedPlatformId, isOpen, onClose, onOpenScheduleModal }) {
  const platform = siteConfig.ecosystemPlatforms.find(p => p.id === selectedPlatformId) || siteConfig.ecosystemPlatforms[0];

  const detailData = {
    'mitra-app': {
      icon: Tablet,
      color: 'emerald',
      audience: 'Pemilik Usaha Rental, Manajer Operasional, dan Staf Kasir / Gudang',
      problemSolved: 'Mencegah unit disewa ganda (double-booking), kehilangan jejak penyewa, serta ketiadaan histori transaksi yang rapi.',
      sections: [
        {
          title: "1. Manajemen Kalender & Ketersediaan Stok",
          items: [
            "Tampilan kalender interaktif harian, mingguan, dan bulanan",
            "Status unit otomatis berubah saat booking disetujui (Tersedia, Terbooking, Keluar, Masa Maintenance)",
            "Pengingat otomatis waktu pengembalian unit sewa"
          ]
        },
        {
          title: "2. Verifikasi Penyewa & e-KYC Lapangan",
          items: [
            "Penyimpanan foto identitas (KTP/SIM/Paspor) aman di cloud",
            "Pencatatan jaminan deposit fisik maupun digital",
            "Riwayat kedisiplinan pengembalian penyewa"
          ]
        },
        {
          title: "3. Kasir, Nota Digital, & Keuangan",
          items: [
            "Penerbitan nota sewa digital via WhatsApp atau cetak thermal",
            "Rekapitulasi omzet berkala tanpa hitung manual",
            "Sinkronisasi langsung dengan listing pencarian pelanggan"
          ]
        }
      ]
    },
    'customer-app': {
      icon: Smartphone,
      color: 'blue',
      audience: 'Masyarakat Umum, Wisatawan, Mahasiswa, EO, dan Pelaku Usaha Mikro',
      problemSolved: 'Menghilangkan kebingungan mencari tempat rental tepercaya, negosiasi harga yang tidak jelas, dan ketidakpastian ketersediaan barang.',
      sections: [
        {
          title: "1. Pencarian Cerdas Berbasis Radius Lokasi (GPS)",
          items: [
            "Mendeteksi posisi pengguna dan menampilkan rental terdekat dalam radius kilometer",
            "Filter berdasarkan kategori, rentang tarif, dan rating kepuasan mitra",
            "Peta navigasi langsung ke lokasi workshop rental mitra"
          ]
        },
        {
          title: "2. Transparansi Spesifikasi & Unit Nyata",
          items: [
            "Galeri foto dan video unit asli yang telah dikurasi tim TemuSewa",
            "Kelengkapan aksesoris, paket sewa (dengan driver/lepas kunci), dan syarat sewa",
            "Ulasan autentik dari pelanggan yang telah selesai menyewa"
          ]
        },
        {
          title: "3. Pemesanan Langsung & Keamanan Transaksi",
          items: [
            "Pilih tanggal sewa dan jam ambil/antar secara fleksibel",
            "Pembayaran aman dengan proteksi garansi unit tersedia",
            "Bantuan pelanggan jika terjadi kendala operasional di jalan"
          ]
        }
      ]
    },
    'internal-web': {
      icon: Monitor,
      color: 'purple',
      audience: 'Tim Operasional, Tim Pendamping Teknis, dan Manajemen PT Garis Daya Digital',
      problemSolved: 'Memastikan standar kualitas layanan seluruh mitra tetap prima, mengawal integritas ekosistem, serta mitigasi sengketa sewa secara objektif.',
      sections: [
        {
          title: "1. Command Center & Verifikasi Kemitraan",
          items: [
            "Validasi berkas pendaftaran mitra baru dan inspeksi kelayakan listing",
            "Alokasi jadwal tim pendamping lapangan untuk setup aplikasi mitra",
            "Pemantauan status onboarding mitra dari instalasi hingga go-live"
          ]
        },
        {
          title: "2. Integrasi Data Real-Time Multi-Platform",
          items: [
            "Sinkronisasi data terpusat antara App Mitra dan Marketplace",
            "Monitoring stabilitas server, performa API, dan kepatuhan transaksi",
            "Pelacakan anomali transaksi atau laporan sengketa pengguna"
          ]
        },
        {
          title: "3. Analitika Bisnis & Perencanaan Fitur",
          items: [
            "Analisis data kategori rental dengan permintaan tertinggi di tiap daerah",
            "Dasar penentuan fitur-fitur baru pada rilis teknologi TemuSewa",
            "Laporan pertumbuhan ekosistem dan metrik operasional secara berkala"
          ]
        }
      ]
    }
  };

  const currentDetail = detailData[platform.id] || detailData['mitra-app'];
  const Icon = currentDetail.icon;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={platform.name}
      subtitle={platform.tagline}
      maxWidth="max-w-2xl"
    >
      <div className="space-y-6">
        
        {/* Banner Pill */}
        <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#18A766] shadow-sm">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0D2C54]">{platform.type}</div>
              <div className="text-[11px] text-slate-500">Status: <strong className="text-slate-800">{platform.status}</strong></div>
            </div>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-[#18A766] border border-emerald-200">
            {platform.badge}
          </span>
        </div>

        {/* Target Audience & Problem Solved */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <span className="font-bold text-[#0D2C54]">Pengguna Utama:</span>
            <p className="text-slate-600">{currentDetail.audience}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <span className="font-bold text-[#0D2C54]">Masalah yang Diselesaikan:</span>
            <p className="text-slate-600">{currentDetail.problemSolved}</p>
          </div>
        </div>

        {/* Deep Dive Sections */}
        <div className="space-y-4">
          <div className="text-sm font-bold text-[#0D2C54] border-b pb-2">
            Cakupan Fungsional & Modul Sistem:
          </div>
          {currentDetail.sections.map((sec, idx) => (
            <div key={idx} className="space-y-2">
              <h5 className="text-xs font-bold text-slate-800">{sec.title}</h5>
              <div className="space-y-1.5 pl-1">
                {sec.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-[#18A766] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
          <Button
            variant="primary"
            size="md"
            className="flex-1"
            withArrow
            onClick={() => {
              onClose();
              onOpenScheduleModal();
            }}
          >
            Ajukan Pertanyaan / Jadwal Demo Platform Ini
          </Button>
          <Button
            variant="secondary"
            size="md"
            onClick={onClose}
          >
            Tutup
          </Button>
        </div>

      </div>
    </Modal>
  );
}
