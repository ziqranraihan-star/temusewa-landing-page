import React from 'react';
import { Smartphone, Tablet, Monitor, CheckCircle2, Layers, Sparkles, ArrowRight, ShieldCheck, Zap, Database } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { siteConfig } from '../../config/siteConfig';

export default function EcosystemShowcaseSection({ onOpenDetailModal, onOpenScheduleModal }) {
  return (
    <section id="ekosistem" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#18A766] border border-emerald-200 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            Produk TemuSewa
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2C54] tracking-tight">
            Arsitektur Ekosistem 3 Platform Terintegrasi
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Menghubungkan lini operasional mitra di lapangan, pencarian calon penyewa di marketplace, dan kendali mutu terpusat oleh PT Garis Daya Digital.
          </p>
        </div>

        {/* 3 Platforms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Aplikasi Mitra */}
          <div className="bg-slate-50/70 border-2 border-emerald-500/50 rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:shadow-floating transition-all duration-300 relative group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#18A766] flex items-center justify-center">
                  <Tablet className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-[#18A766] text-xs font-bold border border-emerald-300">
                  Tersedia (Beta)
                </span>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Platform 01</span>
                <h3 className="text-2xl font-bold text-[#0D2C54] mt-1">Aplikasi Mitra</h3>
                <p className="text-xs font-semibold text-[#18A766] mt-0.5">Operasional Bisnis Rental Modern</p>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  Dirancang khusus agar staf dan pemilik rental dapat mencatat pemesanan unit, mengelola kalender jadwal sewa, dan memonitor deposit secara anti-bentrok.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-200/80">
                <div className="text-xs font-bold text-slate-700">Fitur Utama:</div>
                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#18A766] flex-shrink-0 mt-0.5" />
                  <span>Kalender ketersediaan unit & booking real-time</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#18A766] flex-shrink-0 mt-0.5" />
                  <span>Pencatatan invoice, nota sewa & deposit jaminan</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#18A766] flex-shrink-0 mt-0.5" />
                  <span>Didampingi tim teknis saat instalasi & input produk</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200/80 mt-6">
              <button
                onClick={() => onOpenDetailModal('mitra-app')}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#18A766] text-white hover:bg-[#138A53] flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Lihat Detail Aplikasi Mitra</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Aplikasi Customer */}
          <div className="bg-slate-50/70 border border-slate-200 rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:shadow-floating transition-all duration-300 relative group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold border border-blue-300">
                  Sedang Dikembangkan
                </span>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Platform 02</span>
                <h3 className="text-2xl font-bold text-[#0D2C54] mt-1">Marketplace</h3>
                <p className="text-xs font-semibold text-blue-600 mt-0.5">Sewa Berbasis Lokasi & Katalog Terbuka</p>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  Membantu pengguna menemukan apa pun kebutuhan rentalnya—mulai dari mobil, kamera, drone, genset, hingga kostum event—dengan mudah, aman, dan dekat.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-200/80">
                <div className="text-xs font-bold text-slate-700">Fitur Utama:</div>
                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Pencarian radius GPS terdekat dari posisi penyewa</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Katalog spesifikasi lengkap & ulasan rating mitra</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Direct checkout dengan metode pembayaran fleksibel</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200/80 mt-6">
              <button
                onClick={() => onOpenDetailModal('customer-app')}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-white text-[#0D2C54] border border-slate-300 hover:bg-slate-100 flex items-center justify-center gap-2 transition-colors"
              >
                <span>Lihat Detail Marketplace</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3: Web Internal PT Garis Daya Digital */}
          <div className="bg-slate-50/70 border border-slate-200 rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:shadow-floating transition-all duration-300 relative group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
                  <Monitor className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold border border-purple-300">
                  Internal Control
                </span>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Platform 03</span>
                <h3 className="text-2xl font-bold text-[#0D2C54] mt-1">Web Internal</h3>
                <p className="text-xs font-semibold text-purple-700 mt-0.5">Pusat Kendali & Pengawasan</p>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  Sistem backoffice terintegrasi yang digunakan tim internal PT Garis Daya Digital untuk memantau aktivitas, mendistribusikan tim pendamping, dan menjaga mutu transaksi.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-200/80">
                <div className="text-xs font-bold text-slate-700">Fitur Utama:</div>
                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Verifikasi data identitas mitra & kurasi listing unit</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Tracking progres pendampingan dan onboarding mitra</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Analytics tren rental & proteksi sengketa sewa</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200/80 mt-6">
              <button
                onClick={() => onOpenDetailModal('internal-web')}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-white text-[#0D2C54] border border-slate-300 hover:bg-slate-100 flex items-center justify-center gap-2 transition-colors"
              >
                <span>Lihat Detail Web Internal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
