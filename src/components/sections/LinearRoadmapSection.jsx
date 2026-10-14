import React from 'react';
import { Milestone, CheckCircle2, Clock, Calendar, Sparkles, ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';
import Badge from '../common/Badge';
import { siteConfig } from '../../config/siteConfig';

export default function LinearRoadmapSection({ onOpenScheduleModal }) {
  const getStatusBadge = (statusType, statusLabel) => {
    switch (statusType) {
      case 'live':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#18A766] border border-emerald-300 text-xs font-bold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#18A766] animate-pulse" />
            {statusLabel}
          </span>
        );
      case 'progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-300 text-xs font-bold shadow-sm">
            <Clock className="w-3.5 h-3.5 text-blue-600 animate-spin" />
            {statusLabel}
          </span>
        );
      case 'planned':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-300 text-xs font-bold shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            {statusLabel}
          </span>
        );
    }
  };

  return (
    <section id="roadmap" className="py-20 lg:py-28 bg-[#F4F7FB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#0D2C54] border border-slate-200 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Milestone className="w-3.5 h-3.5 text-[#18A766]" />
            Arah Pengembangan & Transparansi Fitur
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2C54] tracking-tight">
            Roadmap Perjalanan TemuSewa.ID
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Sesuai komitmen profesional PT Garis Daya Digital, kami membedakan secara transparan fitur yang sudah dapat digunakan, yang sedang dirampungkan, dan rencana jangka panjang.
          </p>
        </div>

        {/* Vertical Linear Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-8 w-1 bg-gradient-to-b from-[#18A766] via-blue-500 to-amber-400 sm:-translate-x-1/2 rounded-full" />

          {/* Timeline Items */}
          <div className="space-y-12 relative">
            {siteConfig.roadmapPhases.map((phase, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex flex-col sm:flex-row items-start sm:items-center">
                  
                  {/* Timeline Center Node Pill */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#18A766] shadow-md flex items-center justify-center z-10">
                    <span className="w-2 h-2 rounded-full bg-[#18A766]" />
                  </div>

                  {/* Content Container (Alternating on Desktop) */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                    isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:ml-auto sm:text-left'
                  }`}>
                    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-soft hover:shadow-floating transition-all duration-300">
                      
                      {/* Phase Badge & Period */}
                      <div className={`flex flex-wrap items-center gap-2 mb-3 ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}>
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-slate-900 text-white">
                          {phase.phase}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          {phase.period}
                        </span>
                        {getStatusBadge(phase.statusType, phase.status)}
                      </div>

                      {/* Phase Title & Description */}
                      <h3 className="text-xl font-bold text-[#0D2C54]">
                        {phase.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                        {phase.description}
                      </p>

                      {/* Milestones Checklist */}
                      <div className={`mt-5 pt-4 border-t border-slate-100 space-y-2 text-left ${
                        isEven ? 'sm:text-left' : ''
                      }`}>
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          Poin Target Capaian:
                        </div>
                        {phase.milestones.map((item, mIdx) => (
                          <div key={mIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                              phase.statusType === 'live' ? 'text-[#18A766]' : 'text-slate-400'
                            }`} />
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
