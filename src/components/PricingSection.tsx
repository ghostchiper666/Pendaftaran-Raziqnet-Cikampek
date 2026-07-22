import React, { useState } from 'react';
import { REGULAR_PACKAGES, HEBOH_PACKAGES, REGISTRATION_URL, WHATSAPP_FULL } from '../data/raziqnetData';
import { PackagePlan } from '../types';
import { Check, Sparkles, Flame, Zap, ArrowRight, ShieldCheck, Wifi, Award, PhoneCall, Info, X, Laptop, Clock, Server } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const PricingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'reguler' | 'heboh'>('all');
  const [selectedPackage, setSelectedPackage] = useState<PackagePlan | null>(null);

  const getBadgeStyle = (color?: string) => {
    switch (color) {
      case 'popular':
        return 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-amber-200';
      case 'luxury':
        return 'bg-gradient-to-r from-[#2EA8FF] to-blue-600 text-white shadow-sky-200';
      case 'value':
        return 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-emerald-200';
      case 'business':
        return 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-purple-200';
      default:
        return 'bg-sky-500 text-white';
    }
  };

  const createWhatsAppPackageLink = (pkg: PackagePlan) => {
    const text = `Halo Raziqnet, saya berminat mendaftar Paket ${pkg.name} (${pkg.speed}) - ${pkg.price}${pkg.period}. Mohon informasi pendaftaran dan cek lokasi saya.`;
    return `https://wa.me/${WHATSAPP_FULL}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="paket" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-[#2EA8FF] text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4 text-[#2EA8FF]" /> Pilihan Paket Berlangganan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Paket Internet Fiber Raziqnet
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Klik pada paket manapun untuk melihat rincian spesifikasi lengkap &amp; rekomendasi penggunaan!
          </p>
        </div>

        {/* Tab Toggle Switcher */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua Paket
            </button>
            <button
              onClick={() => setActiveTab('reguler')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-1.5 ${
                activeTab === 'reguler'
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Award className="w-4 h-4 text-[#2EA8FF]" />
              <span>Paket Utama</span>
            </button>
            <button
              onClick={() => setActiveTab('heboh')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-1.5 ${
                activeTab === 'heboh'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Flame className="w-4 h-4 fill-amber-300 text-amber-200 animate-bounce" />
              <span>Paket Heboh</span>
            </button>
          </div>
        </div>

        {/* REGULAR PACKAGES SECTION */}
        {(activeTab === 'all' || activeTab === 'reguler') && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-100">
              <span className="p-2 rounded-xl bg-sky-100 text-[#2EA8FF]">
                <Wifi className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Paket Berlangganan Utama</h3>
                <p className="text-xs text-slate-500">Koneksi fiber dedicated untuk keluarga &amp; kebutuhan harian</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {REGULAR_PACKAGES.map((pkg) => {
                const isPopular = pkg.badgeColor === 'popular';
                return (
                  <motion.div
                    key={pkg.id}
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onClick={() => setSelectedPackage(pkg)}
                    className={`rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between relative bg-white cursor-pointer group ${
                      isPopular
                        ? 'border-2 border-[#2EA8FF] shadow-xl hover:shadow-2xl z-10'
                        : 'border border-slate-200 shadow-xs hover:shadow-xl hover:border-sky-300'
                    }`}
                  >
                    {/* Badge */}
                    {pkg.badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span
                          className={`px-4 py-1 rounded-full text-xs font-black shadow-md uppercase tracking-wider flex items-center gap-1 ${getBadgeStyle(
                            pkg.badgeColor
                          )}`}
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          {pkg.badge}
                        </span>
                      </div>
                    )}

                    <div>
                      {/* Package Title & Speed */}
                      <div className="text-center pb-5 border-b border-slate-100">
                        <h4 className="text-sm font-black text-slate-500 tracking-wider uppercase group-hover:text-[#2EA8FF] transition-colors">
                          {pkg.name}
                        </h4>
                        <div className="mt-2 inline-block px-3.5 py-1 rounded-full bg-sky-50 text-[#2EA8FF] font-black text-lg">
                          {pkg.speed}
                        </div>
                        <div className="mt-4">
                          <span className="text-3xl font-black text-slate-900">{pkg.price}</span>
                          <span className="text-xs font-semibold text-slate-500">{pkg.period}</span>
                        </div>
                        <p className="text-[11px] text-slate-600 mt-2 font-medium bg-slate-50 py-1.5 px-2 rounded-lg">
                          🎯 {pkg.recommendedFor}
                        </p>
                      </div>

                      {/* Feature List */}
                      <ul className="py-5 space-y-3 text-xs text-slate-700">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="p-0.5 bg-emerald-100 text-emerald-600 rounded-full shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5" />
                            </span>
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 space-y-2 border-t border-slate-100" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={REGISTRATION_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all duration-200 ${
                          isPopular
                            ? 'bg-gradient-to-r from-[#2EA8FF] to-blue-600 text-white hover:from-blue-600 hover:to-sky-500'
                            : 'bg-slate-900 text-white hover:bg-[#2EA8FF]'
                        }`}
                      >
                        <span>Daftar Paket Ini</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={() => setSelectedPackage(pkg)}
                        className="w-full py-2 px-3 rounded-xl font-bold text-xs text-[#2EA8FF] bg-sky-50 hover:bg-sky-100 flex items-center justify-center gap-1.5 transition-colors border border-sky-100"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Detail &amp; Spesifikasi</span>
                      </button>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* HEBOH PACKAGES SECTION */}
        {(activeTab === 'all' || activeTab === 'heboh') && (
          <div>
            <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-100">
              <span className="p-2 rounded-xl bg-amber-100 text-amber-600">
                <Flame className="w-5 h-5 fill-amber-500" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Paket Heboh Super Promo</h3>
                <p className="text-xs text-slate-500">Harga ekonomis dengan kecepatan ekstra untuk pelajar &amp; bisnis lokal</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {HEBOH_PACKAGES.map((pkg) => {
                const isBestValue = pkg.badgeColor === 'value';
                return (
                  <motion.div
                    key={pkg.id}
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onClick={() => setSelectedPackage(pkg)}
                    className={`rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between relative bg-gradient-to-b from-amber-50/40 via-white to-white cursor-pointer group ${
                      isBestValue
                        ? 'border-2 border-amber-500 shadow-xl hover:shadow-2xl z-10'
                        : 'border border-amber-200/80 shadow-xs hover:shadow-xl hover:border-amber-400'
                    }`}
                  >
                    {/* Badge */}
                    {pkg.badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span
                          className={`px-4 py-1 rounded-full text-xs font-black shadow-md uppercase tracking-wider flex items-center gap-1 ${getBadgeStyle(
                            pkg.badgeColor
                          )}`}
                        >
                          <Flame className="w-3.5 h-3.5 fill-current" />
                          {pkg.badge}
                        </span>
                      </div>
                    )}

                    <div>
                      {/* Package Title & Speed */}
                      <div className="text-center pb-5 border-b border-amber-100">
                        <h4 className="text-sm font-black text-amber-700 tracking-wider uppercase group-hover:text-amber-600 transition-colors">
                          PAKET HEBOH • {pkg.name}
                        </h4>
                        <div className="mt-2 inline-block px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 font-black text-lg">
                          {pkg.speed}
                        </div>
                        <div className="mt-4">
                          <span className="text-3xl font-black text-slate-900">{pkg.price}</span>
                          <span className="text-xs font-semibold text-slate-500">{pkg.period}</span>
                        </div>
                        <p className="text-[11px] text-amber-900 mt-2 font-medium bg-amber-100/60 py-1.5 px-2 rounded-lg">
                          💡 {pkg.recommendedFor}
                        </p>
                      </div>

                      {/* Feature List */}
                      <ul className="py-5 space-y-3 text-xs text-slate-700">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="p-0.5 bg-amber-200 text-amber-800 rounded-full shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5" />
                            </span>
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 space-y-2 border-t border-amber-100" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={REGISTRATION_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-md bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all duration-200"
                      >
                        <span>Daftar Paket Heboh</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={() => setSelectedPackage(pkg)}
                        className="w-full py-2 px-3 rounded-xl font-bold text-xs text-amber-700 bg-amber-100/70 hover:bg-amber-100 flex items-center justify-center gap-1.5 transition-colors border border-amber-200/60"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Detail &amp; Spesifikasi</span>
                      </button>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Guaranteed Features Banner below pricing */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-sky-950 to-blue-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-6 h-6 text-[#2EA8FF]" /> Semua Paket Sudah Termasuk
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Gratis sewa modem Wi-Fi Router, Tanpa Kuota FUP, Jaringan Serat Optik 100%, &amp; Dukungan Layanan 24 Jam.
            </p>
          </div>

          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-[#2EA8FF] hover:bg-sky-400 text-white font-bold text-sm shadow-lg shrink-0 flex items-center gap-2 transition-transform duration-200 hover:scale-105"
          >
            <span>Daftar Sekarang Juga</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Detail & Specification Modal */}
      <AnimatePresence>
        {selectedPackage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedPackage(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-5">
                {/* Modal Title */}
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-sky-100 rounded-2xl text-[#2EA8FF]">
                    <Wifi className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#2EA8FF]">
                      Rincian Spesifikasi Paket
                    </span>
                    <h3 className="text-2xl font-black text-slate-900">
                      Paket {selectedPackage.name}
                    </h3>
                  </div>
                </div>

                {/* Price & Speed Box */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Kecepatan Internet</p>
                    <p className="text-xl font-extrabold text-[#2EA8FF]">{selectedPackage.speed}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500 font-medium">Biaya Berlangganan</p>
                    <p className="text-xl font-black text-slate-900">{selectedPackage.price}<span className="text-xs font-normal text-slate-500">{selectedPackage.period}</span></p>
                  </div>
                </div>

                {/* Specification Grid */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2.5">
                    <Laptop className="w-4 h-4 text-[#2EA8FF] shrink-0" />
                    <div>
                      <p className="text-slate-400 font-medium">Kapasitas Perangkat</p>
                      <p className="font-bold text-slate-800">{selectedPackage.idealDevices || '3 - 8 Perangkat'}</p>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2.5">
                    <Server className="w-4 h-4 text-emerald-500 shrink-0" />
                    <div>
                      <p className="text-slate-400 font-medium">Kuota Pemakaian</p>
                      <p className="font-bold text-emerald-700">Tanpa FUP (Unlimited)</p>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2.5 col-span-2">
                    <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                    <div>
                      <p className="text-slate-400 font-medium">Rekomendasi Penggunaan</p>
                      <p className="font-bold text-slate-800">{selectedPackage.recommendedFor}</p>
                    </div>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Fasilitas &amp; Fitur Layanan
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {selectedPackage.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 bg-slate-50/80 p-2 rounded-lg border border-slate-100">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons in Modal */}
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={REGISTRATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-xs text-center text-white bg-gradient-to-r from-[#2EA8FF] to-blue-600 hover:from-blue-600 hover:to-sky-500 shadow-md flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Daftar via Web</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={createWhatsAppPackageLink(selectedPackage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-xs text-center text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 flex items-center justify-center gap-2 transition-all"
                  >
                    <PhoneCall className="w-4 h-4 text-emerald-600" />
                    <span>Daftar via WA CS</span>
                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

