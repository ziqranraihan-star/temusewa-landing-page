import React from 'react';
import { Store, ShoppingBag, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { siteConfig } from '../../config/siteConfig';

export default function AudiencePillarsSection({ onOpenScheduleModal }) {
  const openWhatsApp = (personaKey) => {
    const template = siteConfig.whatsappTemplates[personaKey] || siteConfig.whatsappTemplates.mitra;
    const url = `https://wa.me/${siteConfig.company.whatsappNumber}?text=${encodeURIComponent(template)}`;
    window.open(url, '_blank');
  };

  const icons = {
    mitra: Store,
    pelanggan: ShoppingBag
  };

  return (
    <section id="audiens" className="py-20 lg:py-28 bg-[#F4F7FB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#0D2C54] border border-slate-200 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#18A766]" />
            Solusi untuk Ekosistem Rental di Indonesia
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2C54] tracking-tight">
            Memberdayakan Setiap Pemangku Kepentingan
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            TemuSewa.ID dirancang bukan hanya sebagai aplikasi sewa, melainkan jembatan sinergi yang memberikan nilai tambah nyata bagi pemilik rental (mitra bisnis) dan pelanggan persewaan.
          </p>
        </div>

        {/* 2 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {siteConfig.audiencePillars.map((pillar) => {
            const Icon = icons[pillar.id] || Store;
            const isMitra = pillar.id === 'mitra';

            return (
              <div
                key={pillar.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isMitra
                    ? 'bg-white border-2 border-[#18A766] shadow-floating relative -translate-y-1'
                    : 'bg-white border border-slate-200 shadow-soft hover:shadow-md hover:border-slate-300'
                }`}
              >
                {isMitra && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#18A766] text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-md uppercase tracking-wider">
                    Fokus Utama Kemitraan
                  </div>
                )}

                <div className="space-y-6">
                  {/* Top Header */}
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isMitra ? 'bg-emerald-50 text-[#18A766]' : 'bg-slate-100 text-[#0D2C54]'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant={isMitra ? 'green' : 'navy'} size="xs">
                      {pillar.badge}
                    </Badge>
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0D2C54]">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="pt-2 border-t border-slate-100 space-y-2.5">
                    {pillar.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          isMitra ? 'text-[#18A766]' : 'text-slate-500'
                        }`} />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-8 border-t border-slate-100 mt-6">
                  <button
                    onClick={() => {
                      if (pillar.id === 'mitra') {
                        onOpenScheduleModal();
                      } else {
                        openWhatsApp(pillar.ctaType);
                      }
                    }}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                      isMitra
                        ? 'bg-[#18A766] text-white hover:bg-[#138A53] shadow-md hover:shadow-emerald-500/20'
                        : 'bg-slate-100 text-[#0D2C54] hover:bg-slate-200'
                    }`}
                  >
                    <span>{pillar.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
