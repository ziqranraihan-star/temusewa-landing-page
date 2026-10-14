import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import Logo from '../common/Logo';
import Button from '../common/Button';
import { siteConfig } from '../../config/siteConfig';

export default function Navbar({ onOpenScheduleModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('solusi');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      // Simple active section detection
      const sections = ['solusi', 'ekosistem', 'audiens', 'kategori', 'pendampingan', 'perusahaan'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${siteConfig.company.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappTemplates.mitra)}`;
    window.open(url, '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5' 
        : 'bg-white/85 backdrop-blur-sm border-b border-slate-100/80 py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* 1. Left: Brand Logo (Always protected width, never collides) */}
          <a href="#beranda" className="flex items-center flex-shrink-0 group py-1">
            <Logo size={isScrolled ? "sm" : "md"} />
          </a>

          {/* 2. Center: Sleek Capsule Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center bg-slate-100/90 hover:bg-slate-100/95 p-1 rounded-full border border-slate-200/70 shadow-sm transition-colors">
            {siteConfig.navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-[#0D2C54] shadow-sm font-bold'
                      : 'text-slate-600 hover:text-[#0D2C54] hover:bg-white/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* 3. Right: Action Buttons & WhatsApp Smart Trigger */}
          <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-emerald-50 hover:text-[#18A766] border border-slate-200 rounded-xl transition-all shadow-sm group"
              title="Chat WhatsApp Resmi"
            >
              <span className="w-2 h-2 rounded-full bg-[#18A766] group-hover:animate-ping" />
              <MessageCircle className="w-3.5 h-3.5 text-[#18A766]" />
              <span>WhatsApp</span>
            </button>

            <Button
              variant="primary"
              size="sm"
              icon={Calendar}
              onClick={onOpenScheduleModal}
              className="shadow-sm"
            >
              Janjian Temu
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              onClick={onOpenScheduleModal}
              className="md:hidden px-3 py-1.5 text-xs font-bold text-white bg-[#18A766] rounded-xl flex items-center gap-1 shadow-sm"
              aria-label="Jadwalkan Janjian Temu"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Janjian</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0D2C54] hover:bg-slate-100 rounded-xl transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu (Smooth dropdown) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col space-y-1">
            {siteConfig.mobileNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:text-[#18A766] hover:bg-emerald-50 rounded-xl transition-all flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            ))}
            
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2 mt-2">
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                icon={Calendar}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenScheduleModal();
                }}
              >
                Jadwalkan Janjian Temu / Demo
              </Button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp();
                }}
                className="w-full py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-emerald-50 hover:text-[#18A766] rounded-xl flex items-center justify-center gap-2 border border-slate-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#18A766]" />
                Hubungi via WhatsApp Resmi
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
