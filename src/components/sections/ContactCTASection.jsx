import React, { useState } from 'react';
import { MessageCircle, Calendar, Send, Sparkles, CheckCircle2, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import { siteConfig } from '../../config/siteConfig';

export default function ContactCTASection({ onOpenScheduleModal }) {
  const [selectedPersona, setSelectedPersona] = useState('mitra'); // 'mitra' | 'customer' | 'demo'
  const [customNotes, setCustomNotes] = useState('');

  const personas = [
    { id: 'mitra', label: 'Calon Mitra Rental', subtitle: 'Ingin bergabung & didampingi aplikasi' },
    { id: 'customer', label: 'Pelanggan Sewa', subtitle: 'Ingin tanya ketersediaan barang' },
    { id: 'demo', label: 'Ajukan Jadwal Demo', subtitle: 'Ingin melihat langsung demo sistem' }
  ];

  const getFullMessage = () => {
    let base = siteConfig.whatsappTemplates[selectedPersona] || siteConfig.whatsappTemplates.mitra;
    if (customNotes.trim()) {
      base += `\n\nCatatan tambahan: ${customNotes.trim()}`;
    }
    return base;
  };

  const handleSendWhatsApp = () => {
    const message = getFullMessage();
    const url = `https://wa.me/${siteConfig.company.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="kontak" className="py-20 lg:py-28 bg-[#F4F7FB] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#0D2C54]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#0D2C54] border border-slate-200 text-xs font-bold uppercase tracking-wider shadow-sm">
            <MessageCircle className="w-3.5 h-3.5 text-[#18A766]" />
            Jalur Komunikasi & Konsultasi
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2C54] tracking-tight">
            Mulai Terhubung Bersama TemuSewa.ID
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Punya pertanyaan mengenai cara kerja aplikasi, paket pendampingan mitra, atau ingin melihat demo langsung? Tim kami siap berdiskusi dengan Anda.
          </p>
        </div>

        {/* Dual-Action Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Box Kiri: WhatsApp Smart Trigger */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#18A766] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0D2C54]">Smart WhatsApp Trigger</h3>
                  <p className="text-xs text-slate-500">Pilih kebutuhan Anda untuk pesan instan siap kirim</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Respon Cepat
              </span>
            </div>

            {/* Persona Selector Chips */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">
                1. Pilih Kategori Anda:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {personas.map((p) => {
                  const isSelected = selectedPersona === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedPersona(p.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-[#18A766] bg-emerald-50/60 ring-1 ring-[#18A766]'
                          : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/70'
                      }`}
                    >
                      <div className={`text-xs font-bold ${isSelected ? 'text-[#18A766]' : 'text-slate-800'}`}>
                        {p.label}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        {p.subtitle}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Optional Custom Notes */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">
                2. Catatan Tambahan (Opsional):
              </label>
              <input
                type="text"
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                placeholder="Contoh: Usaha rental mobil di Surabaya, ada 8 unit..."
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#18A766] focus:ring-1 focus:ring-[#18A766] bg-slate-50/30"
              />
            </div>

            {/* Message Preview Box */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Pratinjau Pesan yang Akan Terkirim:
              </div>
              <p className="text-xs text-slate-700 font-mono bg-white p-3 rounded-xl border border-slate-200 leading-relaxed">
                "{getFullMessage()}"
              </p>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSendWhatsApp}
              className="w-full py-3.5 px-4 bg-[#18A766] hover:bg-[#138A53] text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 glow-green active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Buka Chat WhatsApp Sekarang</span>
            </button>
          </div>

          {/* Box Kanan: Formulir Janjian Temu / Demo Resmi */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-gradient-to-br from-[#0D2C54] to-[#1A457D] rounded-3xl p-6 sm:p-8 text-white shadow-xl space-y-5">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-300">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                  Konsultasi Langsung
                </span>
                <h3 className="text-xl font-bold mt-1">Jadwalkan Janjian Temu / Demo</h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Ingin penjelasan privat melalui video call atau tatap muka langsung? Isi formulir reservasi dan tim kami akan menghubungi Anda sesuai waktu luang Anda.
                </p>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Demo live antarmuka 3 platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Kalkulasi estimasi omzet & skema kemitraan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Konsultasi gratis tanpa komitmen apa pun</span>
                </div>
              </div>

              <button
                onClick={onOpenScheduleModal}
                className="w-full py-3 px-4 bg-white hover:bg-slate-100 text-[#0D2C54] font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <span>Buka Formulir Janjian Temu</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Direct Contact Credentials */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft space-y-3 text-xs text-slate-600">
              <div className="font-bold text-[#0D2C54] text-sm">Informasi Perusahaan:</div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#18A766]" />
                <span>{siteConfig.company.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#18A766]" />
                <span>{siteConfig.company.phone}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#18A766] mt-0.5 flex-shrink-0" />
                <span>{siteConfig.company.name} - {siteConfig.company.address}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
