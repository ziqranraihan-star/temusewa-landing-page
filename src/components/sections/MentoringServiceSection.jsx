import React from 'react';
import { DownloadCloud, Upload, Rocket, CheckCircle2, Headphones, Sparkles, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import Button from '../common/Button';
import { siteConfig } from '../../config/siteConfig';

export default function MentoringServiceSection({ onOpenScheduleModal }) {
  const steps = [
    {
      num: "01",
      icon: DownloadCloud,
      title: "Instalasi & Pengaturan Akun",
      desc: "Tim teknis kami memandu instalasi Aplikasi Mitra di ponsel atau tablet Anda, menyetel profil bisnis rental, jam operasional, dan lokasi pickup.",
      badge: "Langkah Pertama"
    },
    {
      num: "02",
      icon: Upload,
      title: "Penginputan Unit & Tarif",
      desc: "Bantuan mengunggah foto unit berkualitas tinggi, mengisi spesifikasi detail, menetapkan harga harian/mingguan, hingga aturan deposit yang aman.",
      badge: "Langkah Kedua"
    },
    {
      num: "03",
      icon: Rocket,
      title: "Persiapan Listing & Go-Live",
      desc: "Simulasi penerimaan pesanan sewa, bimbingan verifikasi identitas penyewa, dan pengaktifan listing agar langsung dapat dicari calon pelanggan terdekat.",
      badge: "Siap Beroperasi"
    }
  ];

  return (
    <section id="pendampingan" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#18A766] border border-emerald-200 text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5" />
            Layanan & Pendampingan Mitra
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2C54] tracking-tight">
            Tidak Perlu Ragu, Kami Dampingi <br />
            <span className="text-[#18A766]">Hingga Bisnis Anda Siap Menerima Order</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Banyak pemilik rental khawatir kesulitan memakai aplikasi baru. Di TemuSewa.ID, kami menyediakan pendampingan langsung agar proses migrasi digital berjalan mulus tanpa hambatan.
          </p>
        </div>

        {/* 3 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 relative">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/80 border border-slate-200 rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:shadow-floating hover:border-emerald-300 transition-all duration-300 relative group"
              >
                {/* Step Number Watermark */}
                <span className="absolute top-4 right-6 text-5xl font-black text-slate-200/70 group-hover:text-emerald-100 transition-colors pointer-events-none">
                  {st.num}
                </span>

                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#18A766]">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#18A766] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {st.badge}
                  </span>

                  <div>
                    <h3 className="text-xl font-bold text-[#0D2C54]">{st.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200/80 mt-6 flex items-center gap-2 text-xs font-semibold text-[#18A766]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Dukungan Personel Ahli TemuSewa</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div className="bg-gradient-to-r from-[#0D2C54] to-[#1A457D] rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-bold border border-white/10">
                <ShieldCheck className="w-4 h-4" />
                Jaminan Kemitraan Nyaman
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Punya 1 Unit atau Ratusan Unit? Kami Siap Bantu Setup
              </h3>
              <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
                Jadwalkan sesi pendampingan awal bersama tim spesialis implementasi kami. Kami jelaskan alur aplikasi, bantu siapkan data listing, dan jawab segala pertanyaan Anda.
              </p>
            </div>

            <Button
              variant="primary"
              size="lg"
              withArrow
              onClick={onOpenScheduleModal}
              className="flex-shrink-0 shadow-lg glow-green"
            >
              Jadwalkan Pendampingan Mitra
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
