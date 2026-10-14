import React from 'react';
import { Building2, ShieldCheck, Cpu, Code2, Users2, Target, Award, ArrowUpRight, Sparkles } from 'lucide-react';
import Badge from '../common/Badge';
import { siteConfig } from '../../config/siteConfig';

export default function CompanyProfileSection({ onOpenScheduleModal }) {
  const companyPillars = [
    {
      icon: Code2,
      title: "Rekayasa Perangkat Lunak Terintegrasi",
      desc: "Membangun arsitektur perangkat lunak scalable berbasis cloud, menghubungkan aplikasi mobile mitra, customer marketplace, dan backoffice internal dalam satu data pipeline sinkron."
    },
    {
      icon: Users2,
      title: "Pendekatan Human-Centric & Pendampingan",
      desc: "Kami percaya teknologi terbaik adalah teknologi yang benar-benar digunakan. PT Garis Daya Digital menempatkan tim pendamping lapangan untuk mengawal adaptasi pengguna."
    },
    {
      icon: Target,
      title: "Visi Transformasi Ekosistem Rental Nasional",
      desc: "Menghilangkan friksi transaksi sewa-menyewa di Indonesia, meningkatkan pendapatan UMKM rental, dan menyediakan akses sewa yang mudah, transparan, dan terpercaya."
    }
  ];

  return (
    <section id="perusahaan" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#18A766] border border-emerald-200 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            Tentang Perusahaan Pengembang
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2C54] tracking-tight">
            PT Garis Daya Digital
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Perusahaan pengembang produk digital di balik lahir dan berkembangnya TemuSewa.ID. Kami mengombinasikan kecakapan teknologi tingkat tinggi dengan empati mendalam pada kebutuhan bisnis di lapangan.
          </p>
        </div>

        {/* Corporate Profile Card */}
        <div className="bg-gradient-to-br from-slate-900 to-[#0D2C54] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden mb-12">
          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#18A766]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold border border-white/10">
                <ShieldCheck className="w-4 h-4" />
                Legalitas & Pengembang Resmi TemuSewa.ID
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Membangun Fondasi Masa Depan Industri Rental di Indonesia
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                PT Garis Daya Digital didirikan dengan komitmen menghadirkan produk perangkat lunak bernilai guna tinggi yang langsung memecahkan masalah riil. TemuSewa.ID dikembangkan dengan metodologi rekayasa produk modern, pemantauan kualitas berkala, dan kesiapan infrastruktur untuk melayani jutaan transaksi di seluruh tanah air.
              </p>

              <div className="pt-3 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-700/80">
                <div>
                  <div className="text-xs text-slate-400">Status Dokumen</div>
                  <div className="text-sm font-bold text-white">Versi 1.0 (Okt 2026)</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Fokus Bisnis</div>
                  <div className="text-sm font-bold text-emerald-400">SaaS & Marketplace</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Cakupan Layanan</div>
                  <div className="text-sm font-bold text-white">Nasional (Indonesia)</div>
                </div>
              </div>
            </div>

            {/* Right Card: Kemitraan & Kolaborasi */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/15 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#18A766] flex items-center justify-center text-white font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-300 font-medium">Kemitraan Strategis & Kolaborasi</div>
                  <div className="text-sm font-bold text-white">Terbuka Untuk Kolaborasi</div>
                </div>
              </div>

              <p className="text-xs text-slate-200 leading-relaxed italic">
                "Kami menyambut para pemilik usaha rental visioner dan mitra strategis yang memiliki kesamaan pandangan dalam merevolusi ekosistem persewaan modern di Indonesia."
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenScheduleModal}
                  className="w-full py-2.5 px-4 bg-white text-[#0D2C54] hover:bg-slate-100 font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <span>Hubungi Manajemen Perusahaan</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Pillars of PT Garis Daya Digital */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {companyPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:border-emerald-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#18A766] shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#0D2C54]">{p.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
