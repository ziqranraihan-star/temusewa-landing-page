import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Smartphone, 
  Tablet, 
  Monitor, 
  CheckCircle2, 
  Search, 
  MapPin, 
  Star, 
  Calendar, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  Car, 
  Camera, 
  Zap, 
  Building2, 
  Check, 
  SlidersHorizontal,
  ChevronRight,
  Shield,
  Layers
} from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { siteConfig } from '../../config/siteConfig';

export default function HeroSection({ onOpenScheduleModal }) {
  const [activeTab, setActiveTab] = useState('customer'); // 'customer' | 'mitra' | 'internal'
  
  // Rotating word in headline
  const rotatingWords = [
    { text: "Lebih Dekat", color: "text-[#18A766]" },
    { text: "Lebih Mudah", color: "text-blue-600" },
    { text: "Lebih Aman", color: "text-emerald-500" },
    { text: "Lebih Praktis", color: "text-teal-600" }
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  // Interactive Live Search simulator in Hero
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  const quickSearchTags = [
    { label: "Sewa Avanza / Innova", category: "Kendaraan" },
    { label: "Sony Alpha 7 IV", category: "Elektronik" },
    { label: "Genset Silent 5kVA", category: "Alat Kerja & Teknik" },
    { label: "Lapangan Futsal / Mini Soccer", category: "Lapangan Olahraga" }
  ];

  const sampleResults = [
    {
      name: "Toyota Innova Reborn 2023",
      category: "Kendaraan",
      price: "Rp 450.000 / hari",
      rating: "4.9",
      distance: "1.2 km",
      status: "Tersedia"
    },
    {
      name: "Sony Alpha 7 IV + Lensa 24-70mm GM",
      category: "Alat & Elektronik",
      price: "Rp 350.000 / hari",
      rating: "5.0",
      distance: "0.8 km",
      status: "Tersedia"
    },
    {
      name: "Genset Honda Silent 5000 Watt",
      category: "Alat Kerja",
      price: "Rp 275.000 / hari",
      rating: "4.8",
      distance: "2.1 km",
      status: "Tersedia"
    }
  ];

  const filteredResults = searchQuery.trim()
    ? sampleResults.filter(r => r.name.toLowerCase().includes(searchQuery.toLowerCase()) || r.category.toLowerCase().includes(searchQuery.toLowerCase()))
    : sampleResults;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#F4F7FB] via-white to-[#F4F7FB]">
      
      {/* Dynamic Animated Ambient Glowing Orbs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-emerald-200/40 via-blue-200/30 to-teal-100/40 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-36 right-[-80px] w-80 h-80 bg-[#18A766]/15 rounded-full blur-3xl pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute top-48 left-[-80px] w-80 h-80 bg-[#0D2C54]/10 rounded-full blur-3xl pointer-events-none -z-10 animate-float-reverse" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Floating Interactive Micro-Cards (Desktop) */}
        {/* Card 1: Rental Mobil (Top Left) */}
        <div className="hidden xl:flex items-center gap-3 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-slate-200/90 shadow-floating absolute top-8 left-0 animate-float-slow z-20 hover:scale-105 transition-transform duration-200 cursor-pointer"
             onClick={() => scrollToSection('kategori')}>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#18A766] flex items-center justify-center font-bold">
            <Car className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#0D2C54]">Rental Mobil Terdekat</div>
            <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              14 Unit Siap Jalan
            </div>
          </div>
        </div>

        {/* Card 2: Kamera & Review (Top Right) */}
        <div className="hidden xl:flex items-center gap-3 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-slate-200/90 shadow-floating absolute top-8 right-0 animate-float-reverse z-20 hover:scale-105 transition-transform duration-200 cursor-pointer"
             onClick={() => scrollToSection('kategori')}>
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <Camera className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#0D2C54]">Kamera & Perlengkapan</div>
            <div className="text-[10px] text-amber-600 font-semibold flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              4.9 (120+ Review Pelanggan)
            </div>
          </div>
        </div>

        {/* Card 3: Alat Kerja (Mid Left) */}
        <div className="hidden xl:flex items-center gap-3 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-slate-200/90 shadow-floating absolute top-64 -left-6 animate-float-reverse z-20 hover:scale-105 transition-transform duration-200 cursor-pointer"
             onClick={() => scrollToSection('pendampingan')}>
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5 text-[#18A766]" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#0D2C54]">Pendampingan 100%</div>
            <div className="text-[10px] text-slate-500 font-medium">Setup unit sampai go-live</div>
          </div>
        </div>

        {/* Card 4: Status Integrasi (Mid Right) */}
        <div className="hidden xl:flex items-center gap-3 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-slate-200/90 shadow-floating absolute top-64 -right-6 animate-float-slow z-20 hover:scale-105 transition-transform duration-200 cursor-pointer"
             onClick={() => scrollToSection('ekosistem')}>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#18A766] flex items-center justify-center font-bold">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#0D2C54]">Sinkronisasi Realtime</div>
            <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              App Mitra ⟷ Customer
            </div>
          </div>
        </div>

        {/* Top Hero Text Content */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Eyebrow Badge with Pulse Radar */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-emerald-200/90 shadow-sm text-xs sm:text-sm font-semibold text-[#0D2C54] hover:shadow-md transition-shadow">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#18A766] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#18A766]"></span>
            </span>
            <span>Ekosistem Rental Terintegrasi #1</span>
            <span className="text-slate-300">|</span>
            <span className="text-[#18A766] font-bold">PT Garis Daya Digital</span>
          </div>

          {/* Dynamic Headline with Smooth Cycling Word */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D2C54] tracking-tight leading-[1.15]">
            Semua Rental, <br className="hidden sm:inline" />
            <span className="relative inline-block transition-all duration-300">
              <span className={`${rotatingWords[currentWordIndex].color} drop-shadow-sm`}>
                {rotatingWords[currentWordIndex].text}
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#18A766]/30 animate-pulse" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C50 1.5 150 1.5 199 5.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Value Proposition Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            {siteConfig.heroSubtitle}
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Button
              variant="primary"
              size="lg"
              withArrow
              onClick={onOpenScheduleModal}
              className="w-full sm:w-auto shadow-lg hover:shadow-emerald-600/30 font-semibold transform hover:-translate-y-0.5 transition-transform"
            >
              Kenali TemuSewa
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('ekosistem')}
              className="w-full sm:w-auto transform hover:-translate-y-0.5 transition-transform"
            >
              Lihat Produk & Ekosistem
            </Button>
          </div>

          {/* Interactive Live Quick-Search Simulator in Hero */}
          <div className="pt-4 max-w-xl mx-auto relative">
            <div className="bg-white rounded-2xl p-2 border border-slate-200/90 shadow-md flex items-center gap-2 transition-all focus-within:ring-2 focus-within:ring-[#18A766] focus-within:border-transparent">
              <div className="pl-2 text-slate-400">
                <Search className="w-4 h-4 text-[#18A766]" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchResults(true);
                }}
                onFocus={() => setShowSearchResults(true)}
                placeholder="Cari rental: mobil, kamera, genset, studio..."
                className="w-full text-xs sm:text-sm text-slate-800 focus:outline-none placeholder:text-slate-400 bg-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-slate-400 hover:text-slate-600 px-2"
                >
                  ✕
                </button>
              )}
              <button
                onClick={() => setShowSearchResults(!showSearchResults)}
                className="bg-[#18A766] hover:bg-[#138A53] text-white px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors flex items-center gap-1 flex-shrink-0"
              >
                <span>Cari</span>
              </button>
            </div>

            {/* Quick Suggested Tags */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2.5">
              <span className="text-[11px] text-slate-400 font-medium">Contoh pencarian:</span>
              {quickSearchTags.map((tag, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSearchQuery(tag.label);
                    setShowSearchResults(true);
                  }}
                  className="text-[10px] sm:text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white hover:bg-emerald-50 text-slate-600 hover:text-[#18A766] border border-slate-200/80 transition-all hover:scale-105"
                >
                  {tag.label}
                </button>
              ))}
            </div>

            {/* Simulated Live Results Dropdown */}
            {showSearchResults && (
              <div className="absolute top-14 left-0 right-0 bg-white rounded-2xl border border-slate-200 shadow-2xl p-3 z-30 text-left animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-xs font-bold text-[#0D2C54]">
                  <span>Hasil Pencarian Terdekat (Simulasi):</span>
                  <button
                    onClick={() => setShowSearchResults(false)}
                    className="text-slate-400 hover:text-slate-700 text-xs"
                  >
                    Tutup
                  </button>
                </div>
                <div className="space-y-2 max-h-56 overflow-y-auto">
                  {filteredResults.length > 0 ? (
                    filteredResults.map((item, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          setShowSearchResults(false);
                          onOpenScheduleModal();
                        }}
                        className="p-2.5 rounded-xl hover:bg-emerald-50/60 border border-transparent hover:border-emerald-200 transition-all flex items-center justify-between cursor-pointer group"
                      >
                        <div>
                          <div className="text-xs font-bold text-slate-800 group-hover:text-[#18A766]">
                            {item.name}
                          </div>
                          <div className="text-[10px] text-slate-500 flex items-center gap-2 mt-0.5">
                            <span>📍 {item.distance}</span>
                            <span>•</span>
                            <span className="flex items-center text-amber-500 font-bold">
                              <Star className="w-2.5 h-2.5 fill-amber-400 mr-0.5" /> {item.rating}
                            </span>
                            <span>•</span>
                            <span className="text-emerald-600 font-semibold">{item.category}</span>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0 ml-2">
                          <div className="text-xs font-bold text-[#0D2C54]">{item.price}</div>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-100 text-[#18A766] font-bold">
                            {item.status}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-4 text-xs text-slate-400">
                      Tidak ada unit yang cocok. Coba kata kunci lain atau daftarkan unit Anda!
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Quick Stats Pills with Hover Pulse */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 max-w-3xl mx-auto">
            {siteConfig.stats.map((st, i) => (
              <div 
                key={i} 
                className="bg-white/85 backdrop-blur-sm border border-slate-200/90 rounded-2xl p-3 shadow-soft text-center hover:border-emerald-400 hover:shadow-floating transition-all duration-200 group transform hover:-translate-y-1"
              >
                <div className="text-xl sm:text-2xl font-extrabold text-[#0D2C54] group-hover:text-[#18A766] transition-colors">
                  {st.value}
                </div>
                <div className="text-[11px] font-semibold text-slate-700">{st.label}</div>
                <div className="text-[10px] text-slate-400">{st.sub}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Interactive Device Mockup Showcase with Tab Switcher */}
        <div className="mt-14 lg:mt-16 max-w-5xl mx-auto relative">
          
          {/* Tab Selector Buttons with Glow */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-6 p-1.5 bg-slate-200/80 backdrop-blur-sm rounded-2xl max-w-md mx-auto shadow-inner">
            <button
              onClick={() => setActiveTab('customer')}
              className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'customer'
                  ? 'bg-white text-[#0D2C54] shadow-md font-bold scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-4 h-4 text-[#18A766]" />
              <span>Marketplace</span>
            </button>
            <button
              onClick={() => setActiveTab('mitra')}
              className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'mitra'
                  ? 'bg-white text-[#0D2C54] shadow-md font-bold scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Tablet className="w-4 h-4 text-[#0D2C54]" />
              <span>App Mitra</span>
            </button>
            <button
              onClick={() => setActiveTab('internal')}
              className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'internal'
                  ? 'bg-white text-[#0D2C54] shadow-md font-bold scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Monitor className="w-4 h-4 text-blue-600" />
              <span>Web Internal</span>
            </button>
          </div>

          {/* Mockup Frame Container with Layered Gradient */}
          <div className="relative rounded-3xl bg-gradient-to-b from-slate-950 via-slate-900 to-[#0D2C54] p-3 sm:p-5 shadow-2xl border-4 border-slate-800 transition-all duration-300">
            
            {/* Top Device Bar */}
            <div className="flex items-center justify-between pb-3 px-3 text-xs text-slate-400 border-b border-slate-700/60 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 font-mono text-[11px] text-slate-300">
                  {activeTab === 'customer' && 'marketplace.temusewa.id'}
                  {activeTab === 'mitra' && 'mitra.temusewa.id / operational-tablet'}
                  {activeTab === 'internal' && 'admin-command.garisdaya.digital'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold flex items-center gap-1 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Synchronized
                </span>
              </div>
            </div>

            {/* SCREEN 1: APP CUSTOMER */}
            {activeTab === 'customer' && (
              <div className="bg-[#F8FAFC] rounded-2xl p-4 sm:p-6 text-slate-800 animate-in fade-in zoom-in-95 duration-200">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Left Smartphone Preview */}
                  <div className="md:col-span-5 max-w-xs mx-auto w-full bg-white rounded-3xl border-4 border-slate-800 shadow-xl overflow-hidden p-3.5 space-y-3">
                    {/* App Header */}
                    <div className="flex items-center justify-between text-xs pb-1 border-b border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#18A766]" />
                        <span className="font-bold text-slate-800">Jakarta Selatan</span>
                      </div>
                      <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">GPS Aktif</span>
                    </div>

                    {/* App Search Bar */}
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                      <input
                        type="text"
                        readOnly
                        value="Sewa kamera & genset terdekat..."
                        className="w-full bg-slate-100 text-[11px] rounded-xl pl-8 pr-3 py-1.5 text-slate-600 border-none pointer-events-none"
                      />
                    </div>

                    {/* App Categories Row */}
                    <div className="grid grid-cols-4 gap-1.5 text-center">
                      <div className="bg-emerald-50 p-2 rounded-xl text-center hover:bg-emerald-100 transition-colors">
                        <div className="text-xs">🚗</div>
                        <div className="text-[9px] font-bold text-slate-700 mt-0.5">Mobil</div>
                      </div>
                      <div className="bg-emerald-50 p-2 rounded-xl text-center hover:bg-emerald-100 transition-colors">
                        <div className="text-xs">📷</div>
                        <div className="text-[9px] font-bold text-slate-700 mt-0.5">Kamera</div>
                      </div>
                      <div className="bg-emerald-50 p-2 rounded-xl text-center hover:bg-emerald-100 transition-colors">
                        <div className="text-xs">⚡</div>
                        <div className="text-[9px] font-bold text-slate-700 mt-0.5">Genset</div>
                      </div>
                      <div className="bg-emerald-50 p-2 rounded-xl text-center hover:bg-emerald-100 transition-colors">
                        <div className="text-xs">🏢</div>
                        <div className="text-[9px] font-bold text-slate-700 mt-0.5">Ruko</div>
                      </div>
                    </div>

                    {/* Sample Unit Card */}
                    <div className="border border-slate-200 rounded-xl p-2.5 bg-white shadow-sm space-y-1.5">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-[10px] font-semibold text-emerald-600">Alat & Elektronik</div>
                          <div className="text-xs font-bold text-slate-800">Sony Alpha 7 IV + Lensa</div>
                        </div>
                        <div className="flex items-center text-[10px] text-amber-500 font-bold">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400 mr-0.5" /> 4.9
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-100">
                        <span>📍 1.2 km dari Anda</span>
                        <span className="font-bold text-[#0D2C54] text-xs">Rp 350.000 /hr</span>
                      </div>
                      <button 
                        onClick={onOpenScheduleModal}
                        className="w-full py-1.5 bg-[#18A766] hover:bg-[#138A53] text-white text-[10px] font-bold rounded-lg shadow-sm transition-colors"
                      >
                        Sewa Sekarang
                      </button>
                    </div>

                  </div>

                  {/* Right Description */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
                      Marketplace TemuSewa
                    </div>
                    <h3 className="text-2xl font-bold text-[#0D2C54]">
                      Kemudahan Menemukan Kebutuhan Sewa & Lapangan Olahraga
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Customer dapat mencari rental kendaraan, alat, barang, dan sewa lapangan olahraga terdekat secara transparan, melihat foto unit asli, memverifikasi ketersediaan jadwal, serta menyewa dengan aman.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#18A766]" />
                        Pencarian lokasi presisi berdasarkan radius GPS
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#18A766]" />
                        Status ketersediaan unit sewa secara real-time
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#18A766]" />
                        Harga transparan tanpa biaya tersembunyi
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            )}

            {/* SCREEN 2: APP MITRA */}
            {activeTab === 'mitra' && (
              <div className="bg-[#F8FAFC] rounded-2xl p-4 sm:p-6 text-slate-800 animate-in fade-in zoom-in-95 duration-200">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Tablet Interface Mockup */}
                  <div className="md:col-span-6 bg-white rounded-2xl border-2 border-slate-200 p-4 shadow-lg space-y-4">
                    <div className="flex items-center justify-between border-b pb-3">
                      <div>
                        <div className="text-xs text-slate-500 font-medium">Dashboard Mitra</div>
                        <div className="text-sm font-bold text-[#0D2C54]">Berkah Rental Sejahtera</div>
                      </div>
                      <Badge variant="green" size="xs">Mitra Terverifikasi</Badge>
                    </div>

                    {/* Operational KPI Grid */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-emerald-50 p-2.5 rounded-xl border border-emerald-100 text-center">
                        <div className="text-xs text-slate-600">Unit Aktif</div>
                        <div className="text-base font-extrabold text-[#18A766]">18 Unit</div>
                      </div>
                      <div className="bg-blue-50 p-2.5 rounded-xl border border-blue-100 text-center">
                        <div className="text-xs text-slate-600">Tersewa</div>
                        <div className="text-base font-extrabold text-blue-700">14 Unit</div>
                      </div>
                      <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-100 text-center">
                        <div className="text-xs text-slate-600">Booking Baru</div>
                        <div className="text-base font-extrabold text-amber-700">4 Order</div>
                      </div>
                    </div>

                    {/* Calendar Schedule Item */}
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-2">
                      <div className="text-xs font-bold text-slate-800 flex items-center justify-between">
                        <span>Jadwal Pengembalian Hari Ini:</span>
                        <span className="text-[10px] text-emerald-600 font-bold">3 Unit Siap Cek</span>
                      </div>
                      <div className="text-[11px] text-slate-600 flex items-center justify-between bg-white p-2 rounded-lg border">
                        <span>Innova Reborn (B 1928 SG)</span>
                        <span className="text-xs font-semibold text-slate-700">16:00 WIB</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button 
                        onClick={onOpenScheduleModal}
                        className="flex-1 py-2 bg-[#18A766] hover:bg-[#138A53] text-white text-xs font-bold rounded-xl shadow-sm transition-colors"
                      >
                        + Tambah Unit / Listing
                      </button>
                      <button 
                        onClick={() => scrollToSection('ekosistem')}
                        className="px-3 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl transition-colors"
                      >
                        Kalender Sewa
                      </button>
                    </div>
                  </div>

                  {/* Mitra Description */}
                  <div className="md:col-span-6 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#18A766] text-xs font-bold">
                      Aplikasi Manajemen Operasional Mitra
                    </div>
                    <h3 className="text-2xl font-bold text-[#0D2C54]">
                      Bisnis Rental Terkelola Otomatis, Stok Terpantau 24 Jam
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Tinggalkan pencatatan manual di buku atau spreadsheet yang rentan bentrok jadwal dan hilang barang. Aplikasi Mitra TemuSewa memberikan kemudahan kendali penuh.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#18A766]" />
                        Kalender booking interaktif anti-bentrok
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#18A766]" />
                        Didampingi input produk & training hingga mahir
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#18A766]" />
                        Laporan omzet & status deposit transparan
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            )}

            {/* SCREEN 3: WEB INTERNAL PT GARIS DAYA DIGITAL */}
            {activeTab === 'internal' && (
              <div className="bg-[#F8FAFC] rounded-2xl p-4 sm:p-6 text-slate-800 animate-in fade-in zoom-in-95 duration-200">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Web Command Center Mockup */}
                  <div className="md:col-span-7 bg-white rounded-2xl border-2 border-slate-200 p-4 shadow-lg space-y-4">
                    <div className="flex items-center justify-between border-b pb-3">
                      <div>
                        <div className="text-xs text-slate-500 font-medium">PT Garis Daya Digital Command Hub</div>
                        <div className="text-sm font-bold text-[#0D2C54]">TemuSewa.ID Central Intelligence</div>
                      </div>
                      <span className="text-[10px] bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full font-bold">
                        Internal Control
                      </span>
                    </div>

                    {/* High-level Metrics */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                        <div className="text-[11px] text-slate-500">Mitra Terdaftar</div>
                        <div className="text-lg font-bold text-[#0D2C54]">142 Mitra</div>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                        <div className="text-[11px] text-slate-500">Pendampingan Aktif</div>
                        <div className="text-lg font-bold text-[#18A766]">28 Sesi</div>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                        <div className="text-[11px] text-slate-500">Katalog Listing</div>
                        <div className="text-lg font-bold text-blue-700">1,240 Unit</div>
                      </div>
                    </div>

                    {/* Realtime Audit Activity */}
                    <div className="text-xs space-y-2">
                      <div className="text-[11px] font-bold text-slate-700">Aktivitas Ekosistem Terkini:</div>
                      <div className="bg-emerald-50/70 p-2 rounded-lg border border-emerald-100 flex items-center justify-between text-[11px]">
                        <span>Mitra Baru: <strong>Rental Kamera Senayan</strong> telah selesai pendampingan setup</span>
                        <span className="text-[10px] text-emerald-700 font-semibold">10m lalu</span>
                      </div>
                      <div className="bg-blue-50/70 p-2 rounded-lg border border-blue-100 flex items-center justify-between text-[11px]">
                        <span>Sinkronisasi stok: 12 unit kendaraan rental Surabaya live di marketplace</span>
                        <span className="text-[10px] text-blue-700 font-semibold">24m lalu</span>
                      </div>
                    </div>
                  </div>

                  {/* Web Internal Description */}
                  <div className="md:col-span-5 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold">
                      Web Internal PT Garis Daya Digital
                    </div>
                    <h3 className="text-2xl font-bold text-[#0D2C54]">
                      Infrastruktur Pengawas & Pendukung Mitra Secara Nyata
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Platform kontrol pusat untuk memastikan standar kualitas setiap mitra, mendistribusikan layanan pendampingan, serta mengawal ekosistem berjalan sehat dan aman.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#18A766]" />
                        Verifikasi kurasi unit dan legalitas mitra
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#18A766]" />
                        Pelacakan proses onboarding & kepuasan mitra
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#18A766]" />
                        Analytics ekosistem untuk arah pengembangan fitur
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            )}

          </div>

          {/* Bottom Caption */}
          <div className="text-center pt-4">
            <span className="text-xs text-slate-500 font-medium inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#18A766]" />
              Klik tab di atas untuk melihat preview visual antarmuka ketiga platform ekosistem TemuSewa.ID
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
