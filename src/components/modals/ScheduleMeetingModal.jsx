import React, { useState } from 'react';
import { Calendar, User, Phone, MapPin, Tag, Clock, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { siteConfig } from '../../config/siteConfig';

export default function ScheduleMeetingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    category: 'Kendaraan',
    datePreference: '',
    timeSlot: 'Pagi (09:00 - 12:00)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `*RESERVASI JANJIAN TEMU / DEMO TEMUSEWA.ID*
----------------------------------------
*Nama:* ${formData.name}
*No. WhatsApp:* ${formData.phone}
*Kota / Domisili:* ${formData.city}
*Kategori Rental:* ${formData.category}
*Preferensi Waktu:* ${formData.datePreference || 'Fleksibel'} (${formData.timeSlot})
*Catatan Kebutuhan:* ${formData.notes || '-'}
----------------------------------------
Mohon konfirmasi jadwal demo dari Tim TemuSewa.ID. Terima kasih.`;

    const url = `https://wa.me/${siteConfig.company.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title="Jadwalkan Janjian Temu / Demo"
      subtitle="Diskusikan digitalisasi bisnis rental Anda bersama tim ahli TemuSewa.ID & PT Garis Daya Digital"
    >
      {submitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#18A766] flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h4 className="text-2xl font-bold text-[#0D2C54]">Permintaan Terkirim!</h4>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Data Anda telah disiapkan dan diarahkan ke WhatsApp resmi kami. Tim kami akan segera merespons untuk memfinalisasi jadwal temu atau tautan demo online.
          </p>
          <div className="pt-4">
            <Button variant="primary" onClick={handleReset}>
              Kembali ke Landing Page
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Nama */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Contoh: Budi Pratama"
                  className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#18A766] focus:ring-1 focus:ring-[#18A766]"
                />
              </div>
            </div>

            {/* No WhatsApp */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Nomor WhatsApp Aktif <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="tel"
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0812xxxxxxx"
                  className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#18A766] focus:ring-1 focus:ring-[#18A766]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Kota / Lokasi */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Kota / Domisili Bisnis <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  required
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Contoh: Surabaya / Jakarta / Bali"
                  className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#18A766] focus:ring-1 focus:ring-[#18A766]"
                />
              </div>
            </div>

            {/* Kategori Rental */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Kategori Rental Utama
              </label>
              <div className="relative">
                <Tag className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#18A766] focus:ring-1 focus:ring-[#18A766] bg-white"
                >
                  <option value="Kendaraan">Kendaraan (Mobil/Motor)</option>
                  <option value="Properti">Properti / Ruang Usaha</option>
                  <option value="Alat & Elektronik">Alat & Elektronik (Kamera/Laptop)</option>
                  <option value="Alat Kerja & Teknik">Alat Kerja & Teknik (Genset/Las)</option>
                  <option value="Rumah Tangga">Rumah Tangga / Medis</option>
                  <option value="Event & Lainnya">Event, Panggung & Kostum</option>
                  <option value="Lainnya">Kategori Lainnya / Calon Investor</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Rencana Tanggal */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Preferensi Tanggal
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="date"
                  name="datePreference"
                  value={formData.datePreference}
                  onChange={handleChange}
                  className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#18A766] focus:ring-1 focus:ring-[#18A766]"
                />
              </div>
            </div>

            {/* Slot Waktu */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Preferensi Sesi
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <select
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#18A766] focus:ring-1 focus:ring-[#18A766] bg-white"
                >
                  <option value="Pagi (09:00 - 12:00)">Pagi (09:00 - 12:00 WIB)</option>
                  <option value="Siang (13:00 - 15:00)">Siang (13:00 - 15:00 WIB)</option>
                  <option value="Sore (15:30 - 17:30)">Sore (15:30 - 17:30 WIB)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Catatan / Kebutuhan */}
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              Pertanyaan atau Kebutuhan Khusus
            </label>
            <div className="relative">
              <MessageSquare className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <textarea
                name="notes"
                rows="3"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Misal: Ingin tahu skema pendampingan input 20 unit kendaraan..."
                className="w-full text-xs pl-9 pr-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#18A766] focus:ring-1 focus:ring-[#18A766]"
              />
            </div>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full"
              withArrow
            >
              Kirim Reservasi Jadwal Temu via WhatsApp
            </Button>
            <p className="text-[10px] text-center text-slate-400 mt-2">
              Data Anda terlindungi dan hanya digunakan oleh tim kami untuk konfirmasi sesi pertemuan.
            </p>
          </div>

        </form>
      )}
    </Modal>
  );
}
