import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import Logo from '../common/Logo';
import { siteConfig } from '../../config/siteConfig';

export default function Footer({ onOpenScheduleModal }) {
  const openWhatsApp = (template = siteConfig.whatsappTemplates.mitra) => {
    const url = `https://wa.me/${siteConfig.company.whatsappNumber}?text=${encodeURIComponent(template)}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-[#0D2C54] text-white pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#18A766]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand & Corporate Description */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="dark" size="lg" />
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm pt-2">
              Ekosistem platform digital yang menghubungkan penyedia usaha rental di Indonesia dengan pelanggan melalui teknologi yang mudah, aman, dan terintegrasi.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#18A766]" />
                Dikembangkan oleh <strong className="text-white font-semibold">{siteConfig.company.name}</strong>
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Dokumen Konsep & Arsitektur {siteConfig.company.version}
            </p>
          </div>

          {/* Quick Nav: Ekosistem & Produk */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-slate-200 mb-4">
              Ekosistem Produk
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#ekosistem" className="hover:text-[#18A766] transition-colors flex items-center gap-1.5">
                  Aplikasi Mitra
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Beta</span>
                </a>
              </li>
              <li>
                <a href="#ekosistem" className="hover:text-[#18A766] transition-colors flex items-center gap-1.5">
                  Marketplace
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300">Dev</span>
                </a>
              </li>
              <li>
                <a href="#ekosistem" className="hover:text-[#18A766] transition-colors flex items-center gap-1.5">
                  Web Internal
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300">Pusat</span>
                </a>
              </li>
              <li>
                <a href="#pendampingan" className="hover:text-[#18A766] transition-colors">
                  Layanan Pendampingan
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Nav: Kategori & Informasi */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-slate-200 mb-4">
              Kategori Sewa
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><a href="#kategori" className="hover:text-[#18A766] transition-colors">Kendaraan</a></li>
              <li><a href="#kategori" className="hover:text-[#18A766] transition-colors">Elektronik</a></li>
              <li><a href="#kategori" className="hover:text-[#18A766] transition-colors">Lapangan Olahraga</a></li>
              <li><a href="#kategori" className="hover:text-[#18A766] transition-colors">Rumahtangga</a></li>
              <li><a href="#kategori" className="hover:text-[#18A766] transition-colors">Alat Kerja & Teknik</a></li>
              <li><a href="#kategori" className="hover:text-[#18A766] transition-colors">Event & Lainnya</a></li>
            </ul>
          </div>

          {/* Hubungi Kami / PT Garis Daya Digital */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-slate-200 mb-4">
              Kontak & Bantuan
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#18A766] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">{siteConfig.company.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#18A766] flex-shrink-0" />
                <a href={`mailto:${siteConfig.company.email}`} className="text-xs hover:underline text-slate-300">
                  {siteConfig.company.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#18A766] flex-shrink-0" />
                <span className="text-xs text-slate-300">{siteConfig.company.phone}</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => openWhatsApp(siteConfig.whatsappTemplates.mitra)}
                  className="w-full py-2.5 px-3 bg-[#18A766] hover:bg-[#138A53] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat WhatsApp Resmi
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.company.name}. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-200 cursor-pointer">Kebijakan Privasi</span>
            <span className="hover:text-slate-200 cursor-pointer">Syarat & Ketentuan Kemitraan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
