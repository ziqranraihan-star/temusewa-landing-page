import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ProblemSolutionSection from './components/sections/ProblemSolutionSection';
import AudiencePillarsSection from './components/sections/AudiencePillarsSection';
import EcosystemShowcaseSection from './components/sections/EcosystemShowcaseSection';
import CategoriesSection from './components/sections/CategoriesSection';
import MentoringServiceSection from './components/sections/MentoringServiceSection';
import LinearRoadmapSection from './components/sections/LinearRoadmapSection';
import CompanyProfileSection from './components/sections/CompanyProfileSection';
import ContactCTASection from './components/sections/ContactCTASection';
import ScheduleMeetingModal from './components/modals/ScheduleMeetingModal';
import FeatureDetailModal from './components/modals/FeatureDetailModal';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedPlatformId, setSelectedPlatformId] = useState('mitra-app');

  const handleOpenDetailModal = (platformId) => {
    setSelectedPlatformId(platformId);
    setDetailModalOpen(true);
  };

  const openFloatingWhatsApp = () => {
    const url = `https://wa.me/${siteConfig.company.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappTemplates.mitra)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] selection:bg-[#18A766] selection:text-white relative">
      
      {/* Sticky Navigation Header */}
      <Navbar 
        onOpenScheduleModal={() => setScheduleModalOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection 
          onOpenScheduleModal={() => setScheduleModalOpen(true)} 
        />

        {/* 2. Latar Belakang & Solusi */}
        <ProblemSolutionSection 
          onOpenScheduleModal={() => setScheduleModalOpen(true)} 
        />

        {/* 3. 3 Pilar Nilai Audiens (Mitra, Pelanggan, Investor) */}
        <AudiencePillarsSection 
          onOpenScheduleModal={() => setScheduleModalOpen(true)} 
        />

        {/* 4. Ekosistem 3 Platform TemuSewa */}
        <EcosystemShowcaseSection 
          onOpenDetailModal={handleOpenDetailModal}
          onOpenScheduleModal={() => setScheduleModalOpen(true)}
        />

        {/* 5. 6 Kategori Rental Didukung */}
        <CategoriesSection 
          onOpenScheduleModal={() => setScheduleModalOpen(true)} 
        />

        {/* 6. Layanan & Pendampingan Mitra */}
        <MentoringServiceSection 
          onOpenScheduleModal={() => setScheduleModalOpen(true)} 
        />

        {/* 7. Timeline Rilis Linier Vertikal */}
        <LinearRoadmapSection 
          onOpenScheduleModal={() => setScheduleModalOpen(true)} 
        />

        {/* 8. Profil PT Garis Daya Digital */}
        <CompanyProfileSection 
          onOpenScheduleModal={() => setScheduleModalOpen(true)} 
        />

        {/* 9. Kontak & Smart WhatsApp Trigger */}
        <ContactCTASection 
          onOpenScheduleModal={() => setScheduleModalOpen(true)} 
        />
      </main>

      {/* Structured Footer */}
      <Footer 
        onOpenScheduleModal={() => setScheduleModalOpen(true)} 
      />

      {/* Floating WhatsApp Quick Action Button */}
      <div className="fixed bottom-6 right-6 z-40 group">
        <button
          onClick={openFloatingWhatsApp}
          className="w-14 h-14 bg-[#18A766] hover:bg-[#138A53] text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 glow-green relative"
          aria-label="Chat WhatsApp TemuSewa.ID"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full" />
        </button>
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#0D2C54] text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          Tanya Kami via WhatsApp
        </span>
      </div>

      {/* Modals */}
      <ScheduleMeetingModal 
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
      />

      <FeatureDetailModal
        selectedPlatformId={selectedPlatformId}
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        onOpenScheduleModal={() => setScheduleModalOpen(true)}
      />

    </div>
  );
}
