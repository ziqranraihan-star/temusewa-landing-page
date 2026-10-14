import React from 'react';
import { AlertCircle, CheckCircle2, ArrowRight, RefreshCw, ShieldAlert, FileX, Users, TrendingDown, TrendingUp, Sparkles } from 'lucide-react';
import Button from '../common/Button';

export default function ProblemSolutionSection({ onOpenScheduleModal }) {
  const problems = [
    {
      title: "Pencatatan Manual Rentan Bentrok",
      desc: "Jadwal booking di catat di chat WhatsApp atau buku manual, berujung salah jadwal atau unit ganda dipesan customer."
    },
    {
      title: "Kekhawatiran Keamanan Unit",
      desc: "Kesulitan memverifikasi data dan identitas penyewa, sehingga risiko penggelapan unit sewa menjadi momok menakutkan."
    },
    {
      title: "Jangkauan Pasar Terbatas Relasi",
      desc: "Mengandalkan promosi mulut ke mulut dan status media sosial pribadi, sulit menjaring pelanggan baru di luar lingkaran lokal."
    },
    {
      title: "Manajemen Keuangan & Deposit Berantakan",
      desc: "Sulit memantau pengembalian uang jaminan (deposit), pembayaran tempo pelanggan, serta rekapitulasi laba-rugi riil."
    }
  ];

  const solutions = [
    {
      title: "Sistem Kalender Digital Otomatis",
      desc: "Status ketersediaan unit terupdate secara live. Saat unit dipesan, kalender otomatis terkunci sehingga nol potensi jadwal bentrok."
    },
    {
      title: "Verifikasi Calon Penyewa Terstandar",
      desc: "Proses verifikasi e-KYC dan histori rental transparan untuk memastikan aset berharga Anda disewa oleh pihak bertanggung jawab."
    },
    {
      title: "Terhubung Langsung ke Marketplace",
      desc: "Unit rental Anda otomatis tayang di Aplikasi Customer TemuSewa, siap ditemukan oleh ribuan calon penyewa terdekat tiap hari."
    },
    {
      title: "Pendampingan Implementasi Nyata",
      desc: "Bukan sekadar software lepas tangan. Tim PT Garis Daya Digital membimbing instalasi, input data unit, hingga bisnis Anda mahir beroperasi."
    }
  ];

  return (
    <section id="solusi" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#18A766] border border-emerald-200 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Latar Belakang & Solusi
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2C54] tracking-tight">
            Dari Kerumitan Konvensional Menuju <br />
            <span className="text-[#18A766]">Efisiensi Operasional Terpadu</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Bisnis rental memiliki potensi perputaran ekonomi yang luar biasa. Namun, kendala operasional harian seringkali menghambat pertumbuhan bisnis Anda. TemuSewa hadir menjawab tantangan tersebut.
          </p>
        </div>

        {/* Problem vs Solution Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Box Kiri: Tantangan Lama (Pain Points) */}
          <div className="bg-slate-50/90 border border-slate-200 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600 font-bold">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">Tantangan Rental Tradisional</h3>
                    <p className="text-xs text-slate-500">Masalah umum yang menghambat potensi cuan usaha rental</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-red-50 text-red-700 border border-red-200">
                  Sebelum TemuSewa
                </span>
              </div>

              <div className="space-y-4">
                {problems.map((prob, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      ✕
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{prob.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{prob.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>Mengakibatkan kerugian waktu, stres operasional, dan omzet jalan di tempat.</span>
            </div>
          </div>

          {/* Box Kanan: Solusi TemuSewa.ID */}
          <div className="bg-gradient-to-br from-emerald-50/60 via-white to-emerald-50/30 border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-floating flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-emerald-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#18A766] flex items-center justify-center text-white font-bold shadow-md">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0D2C54]">Transformasi Digital TemuSewa</h3>
                    <p className="text-xs text-slate-600">Solusi sistemik terpadu yang dirancang praktis</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-[#18A766] border border-emerald-300">
                  Bersama TemuSewa
                </span>
              </div>

              <div className="space-y-4">
                {solutions.map((sol, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3 rounded-2xl bg-white border border-emerald-100 shadow-sm hover:border-emerald-300 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-[#18A766] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0D2C54]">{sol.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{sol.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-600 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#18A766] flex-shrink-0" />
                <span>Usaha rental rapi, pelanggan puas, omzet bertumbuh.</span>
              </div>
              <Button
                variant="primary"
                size="sm"
                onClick={onOpenScheduleModal}
                withArrow
              >
                Konsultasikan Sekarang
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
