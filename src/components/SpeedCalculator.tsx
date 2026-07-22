import React, { useState } from 'react';
import { REGULAR_PACKAGES, HEBOH_PACKAGES, REGISTRATION_URL, WHATSAPP_FULL } from '../data/raziqnetData';
import { PackagePlan } from '../types';
import { Calculator, Smartphone, Laptop, Tv, Gamepad2, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

export const SpeedCalculator: React.FC = () => {
  const [phones, setPhones] = useState(2);
  const [laptops, setLaptops] = useState(1);
  const [tvs, setTvs] = useState(1);
  const [isGaming, setIsGaming] = useState(true);

  // Calculate total bandwidth score
  const totalScore = phones * 3 + laptops * 5 + tvs * 10 + (isGaming ? 15 : 0);

  let recommendedPackage: PackagePlan = REGULAR_PACKAGES[2]; // Default Premium

  if (totalScore <= 12) {
    recommendedPackage = REGULAR_PACKAGES[0]; // BIASA 15 Mbps
  } else if (totalScore <= 22) {
    recommendedPackage = REGULAR_PACKAGES[1]; // SEDERHANA 20 Mbps
  } else if (totalScore <= 40) {
    recommendedPackage = REGULAR_PACKAGES[2]; // PREMIUM 30+30 Mbps
  } else {
    recommendedPackage = REGULAR_PACKAGES[3]; // LUXURY 50+50 Mbps
  }

  const createWaText = () => {
    const text = `Halo Raziqnet, dari hasil Kalkulator Kecepatan, paket yang direkomendasikan untuk rumah saya adalah Paket ${recommendedPackage.name} (${recommendedPackage.speed}). Saya ingin bertanya syarat pendaftarannya.`;
    return `https://wa.me/${WHATSAPP_FULL}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-14 bg-gradient-to-b from-sky-50/50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sky-100 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

          {/* Title Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-[#2EA8FF] text-xs font-bold uppercase tracking-wide">
              <Calculator className="w-3.5 h-3.5" /> Hitung Kebutuhan Internet
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Bingung Pilih Paket? Rekomendasi Instan
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Geser jumlah perangkat yang terhubung di rumah Anda, sistem akan merekomendasikan paket paling pas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-5 bg-slate-50/80 p-5 rounded-2xl border border-slate-100">
              
              {/* Smartphones */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-1.5">
                  <span className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-[#2EA8FF]" /> Smartphone &amp; Tablet
                  </span>
                  <span className="bg-sky-100 text-[#2EA8FF] px-2.5 py-0.5 rounded-md font-mono">
                    {phones} HP
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={phones}
                  onChange={(e) => setPhones(Number(e.target.value))}
                  className="w-full accent-[#2EA8FF] cursor-pointer"
                />
              </div>

              {/* Laptops */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-1.5">
                  <span className="flex items-center gap-2">
                    <Laptop className="w-4 h-4 text-[#2EA8FF]" /> Laptop &amp; Komputer
                  </span>
                  <span className="bg-sky-100 text-[#2EA8FF] px-2.5 py-0.5 rounded-md font-mono">
                    {laptops} Perangkat
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="6"
                  value={laptops}
                  onChange={(e) => setLaptops(Number(e.target.value))}
                  className="w-full accent-[#2EA8FF] cursor-pointer"
                />
              </div>

              {/* Smart TVs */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-1.5">
                  <span className="flex items-center gap-2">
                    <Tv className="w-4 h-4 text-[#2EA8FF]" /> Smart TV / Streaming Box
                  </span>
                  <span className="bg-sky-100 text-[#2EA8FF] px-2.5 py-0.5 rounded-md font-mono">
                    {tvs} TV
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5"
                  value={tvs}
                  onChange={(e) => setTvs(Number(e.target.value))}
                  className="w-full accent-[#2EA8FF] cursor-pointer"
                />
              </div>

              {/* Gaming Toggle */}
              <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between">
                <span className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <Gamepad2 className="w-4 h-4 text-purple-600" /> Ada Aktivitas Online Gaming / Live Stream?
                </span>
                <button
                  onClick={() => setIsGaming(!isGaming)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isGaming
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {isGaming ? 'Ya, Ada' : 'Tidak Ada'}
                </button>
              </div>

            </div>

            {/* Recommendation Result Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-sky-950 to-blue-900 text-white p-6 rounded-2xl shadow-xl space-y-4 text-center lg:text-left relative">
              <div className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-300 uppercase bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-800/60">
                <Sparkles className="w-3 h-3 text-[#2EA8FF]" /> Rekomendasi Terbaik
              </div>

              <div>
                <p className="text-xs text-sky-200 font-medium">Paket Raziqnet yang Cocok:</p>
                <h4 className="text-2xl font-black text-white mt-1">
                  PAKET {recommendedPackage.name}
                </h4>
                <div className="inline-block px-3 py-1 bg-[#2EA8FF] text-white font-black text-lg rounded-xl mt-2 shadow-md">
                  {recommendedPackage.speed}
                </div>
                <p className="text-xl font-bold text-emerald-400 mt-2">
                  {recommendedPackage.price} <span className="text-xs text-slate-300 font-normal">/bulan</span>
                </p>
              </div>

              <div className="text-xs text-slate-300 bg-white/10 p-3 rounded-xl backdrop-blur-xs text-left space-y-1">
                <div className="flex items-center gap-1.5 text-slate-100 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Koneksi lancar untuk ~{phones + laptops + tvs} perangkat</span>
                </div>
                <p className="text-[11px] text-slate-300 pl-5">
                  {recommendedPackage.recommendedFor}
                </p>
              </div>

              <div className="pt-2 space-y-2">
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-[#2EA8FF] hover:bg-sky-400 text-white flex items-center justify-center gap-1.5 shadow-md transition-colors"
                >
                  <span>Daftar Paket {recommendedPackage.name} Sekarang</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={createWaText()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl font-medium text-xs text-sky-200 hover:text-white bg-white/10 hover:bg-white/20 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Konsultasi Paket via WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
