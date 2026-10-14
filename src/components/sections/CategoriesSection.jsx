import React, { useState } from 'react';
import { 
  Car, 
  Trophy, 
  Camera, 
  Wrench, 
  Home, 
  PartyPopper, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Search,
  MessageCircle 
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export default function CategoriesSection({ onOpenScheduleModal }) {
  const [selectedCat, setSelectedCat] = useState('kendaraan');

  const categoryIcons = {
    kendaraan: Car,
    elektronik: Camera,
    'lapangan-olahraga': Trophy,
    rumahtangga: Home,
    'alat-kerja': Wrench,
    'event-lainnya': PartyPopper,
    // backward-compatible keys
    properti: Trophy,
    'alat-elektronik': Camera,
    'rumah-tangga': Home,
    event: PartyPopper
  };

  const activeCategory = siteConfig.categories.find(c => c.id === selectedCat) || siteConfig.categories[0];

  const handleInquiryCategory = (categoryName) => {
    const text = `Halo Tim TemuSewa.ID, saya ingin menanyakan informasi rental untuk kategori *${categoryName}*.`;
    const url = `https://wa.me/${siteConfig.company.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="kategori" className="py-20 lg:py-28 bg-[#F4F7FB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#0D2C54] border border-slate-200 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#18A766]" />
            Multi-Kategori Rental Terpadu
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2C54] tracking-tight">
            Kategori Rental yang Didukung
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Dari kendaraan harian, peralatan elektronik, lapangan olahraga, rumahtangga, hingga alat teknik dan event. TemuSewa.ID menaungi seluruh kebutuhan sewa dalam satu pintu.
          </p>
        </div>

        {/* 6 Category Pills / Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-10">
          {siteConfig.categories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Car;
            const isSelected = selectedCat === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`p-4 rounded-2xl border text-center transition-all duration-200 flex flex-col items-center justify-center gap-2.5 ${
                  isSelected
                    ? 'bg-white border-2 border-[#18A766] shadow-floating -translate-y-1'
                    : 'bg-white/80 border-slate-200/80 hover:bg-white hover:border-slate-300 shadow-soft'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                  isSelected ? 'bg-[#18A766] text-white shadow-sm' : 'bg-slate-100 text-slate-600'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className={`text-xs sm:text-sm font-bold ${
                  isSelected ? 'text-[#0D2C54]' : 'text-slate-700'
                }`}>
                  {cat.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Highlight Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-soft p-6 sm:p-10 max-w-4xl mx-auto transition-all animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#18A766] text-xs font-bold border border-emerald-200">
                <span>Kategori Terpilih: <strong>{activeCategory.name}</strong></span>
              </div>
              <h3 className="text-2xl font-bold text-[#0D2C54]">
                Solusi Sewa {activeCategory.name} Terlengkap & Terverifikasi
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {activeCategory.description}
              </p>

              {/* Popular Items Chips */}
              <div className="pt-2">
                <div className="text-xs font-bold text-slate-700 mb-2.5">
                  Contoh Unit Populer yang Siap Disewa / Dilisting:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeCategory.popularItems.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700"
                    >
                      <Check className="w-3.5 h-3.5 text-[#18A766]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="md:col-span-5 bg-[#F4F7FB] border border-slate-200 rounded-2xl p-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#18A766] flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0D2C54]">Punya Usaha {activeCategory.name}?</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Daftarkan unit rental Anda sekarang dan nikmati pendampingan gratis sampai tayang di marketplace.
                </p>
              </div>
              <div className="space-y-2 pt-2">
                <button
                  onClick={onOpenScheduleModal}
                  className="w-full py-2.5 px-4 bg-[#18A766] hover:bg-[#138A53] text-white text-xs font-bold rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span>Daftarkan Unit Saya</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleInquiryCategory(activeCategory.name)}
                  className="w-full py-2.5 px-4 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#18A766]" />
                  <span>Tanya Info Harga Sewa</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
