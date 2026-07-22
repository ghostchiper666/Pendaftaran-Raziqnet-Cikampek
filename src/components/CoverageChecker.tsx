import React, { useState } from 'react';
import { COVERAGE_AREAS, REGISTRATION_URL, WHATSAPP_FULL } from '../data/raziqnetData';
import { MapPin, Search, CheckCircle, Wifi, ArrowRight, Building2, PhoneCall } from 'lucide-react';

export const CoverageChecker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVillage, setSelectedVillage] = useState<string | null>(null);

  const allVillages = COVERAGE_AREAS.flatMap((area) =>
    area.villages.map((v) => ({ village: v, district: area.district, status: area.status }))
  );

  const filteredVillages = searchTerm.trim()
    ? allVillages.filter(
        (item) =>
          item.village.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.district.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allVillages;

  const createVillageWaLink = (villageName: string, districtName: string) => {
    const text = `Halo Raziqnet, saya ingin mengecek jangkauan tiang fiber optic di lokasi: ${villageName}, Kec. ${districtName}. Mohon info promo pasang baru.`;
    return `https://wa.me/${WHATSAPP_FULL}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="cek-area" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-[#2EA8FF] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-[#2EA8FF]" /> Cakupan Jaringan Fiber
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cek Area Pemasangan Raziqnet
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Cari desa/kelurahan Anda di area Cikampek dan sekitarnya untuk memastikan jaringan serat optik Raziqnet siap dipasang.
          </p>
        </div>

        {/* Search Input Box */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama desa/kelurahan/kecamatan (contoh: Cikampek Barat, Dawuan, Kotabaru...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-300 focus:border-[#2EA8FF] focus:ring-4 focus:ring-sky-100 bg-white text-slate-900 text-sm sm:text-base font-medium shadow-md transition-all outline-none"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg"
              >
                Hapus
              </button>
            )}
          </div>
        </div>

        {/* District Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {COVERAGE_AREAS.map((area) => (
            <div
              key={area.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#2EA8FF]" />
                  <h3 className="font-bold text-slate-900 text-base">Kec. {area.district}</h3>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {area.status}
                </span>
              </div>

              <div className="space-y-1.5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Desa / Kelurahan:</p>
                <div className="flex flex-wrap gap-1.5">
                  {area.villages.map((v, idx) => (
                    <span
                      key={idx}
                      onClick={() => setSelectedVillage(v)}
                      className={`text-xs px-2.5 py-1 rounded-lg font-medium cursor-pointer transition-colors ${
                        selectedVillage === v
                          ? 'bg-[#2EA8FF] text-white font-bold'
                          : 'bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-[#2EA8FF]'
                      }`}
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_FULL}?text=${encodeURIComponent(`Halo Raziqnet, apakah daerah Kec. ${area.district} sudah tercover tiang fiber optic? Saya ingin mendaftar.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-sky-50 hover:bg-sky-100 text-[#2EA8FF] font-semibold text-xs flex items-center justify-center gap-1 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Tanya Tiang {area.district}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Live Search Result Notice */}
        {searchTerm.trim() && (
          <div className="bg-white rounded-2xl p-6 border border-sky-200 shadow-lg max-w-2xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full font-bold text-xs">
              <CheckCircle className="w-4 h-4" /> Hasil Pencarian Area ({filteredVillages.length} ditemukan)
            </div>
            
            {filteredVillages.length > 0 ? (
              <div className="space-y-2">
                <p className="text-sm font-bold text-slate-800">
                  Kabar Baik! Area Anda sudah terjangkau jaringan Fiber Optic Raziqnet.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {filteredVillages.map((item, idx) => (
                    <a
                      key={idx}
                      href={createVillageWaLink(item.village, item.district)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold bg-sky-50 hover:bg-[#2EA8FF] text-[#2EA8FF] hover:text-white px-3 py-1.5 rounded-xl border border-sky-200 transition-colors"
                    >
                      <span>{item.village} ({item.district})</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <p className="text-sm text-slate-600">
                  Lokasi "{searchTerm}" belum muncul di list otomatis? Jangan khawatir! Tim teknisi kami terus memperluas jaringan tiang fiber optic.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_FULL}?text=${encodeURIComponent(`Halo Raziqnet, mohon bantu cek ketersediaan tiang fiber di alamat saya: ${searchTerm}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Cek Alamat Langsung via WhatsApp</span>
                </a>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
