import React from 'react';
import { REGISTRATION_URL, WHATSAPP_LINK, WHATSAPP_NUMBER } from '../data/raziqnetData';
import { ArrowRight, PhoneCall, Wifi, Sparkles, CheckCircle } from 'lucide-react';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-sky-600 via-[#2EA8FF] to-blue-700 text-white relative overflow-hidden">
      {/* Visual Ambient Light Layers */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider shadow-inner">
          <Sparkles className="w-4 h-4 text-cyan-200 animate-spin" style={{ animationDuration: '5s' }} />
          <span>Internet Fiber Pilihan Keluarga Cikampek</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Siap Menikmati Internet Cepat?
        </h2>

        {/* Description */}
        <p className="text-sky-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
          Daftar sekarang dan nikmati layanan internet fiber Raziqnet dengan koneksi stabil, harga terjangkau, serta pelayanan terbaik.
        </p>

        {/* Benefit Highlights */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-white/90 pt-2">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-cyan-200" /> Tanpa Kuota / FUP
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-cyan-200" /> Gratis Modem Router
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-cyan-200" /> Pemasangan Cepat 1x24 Jam
          </span>
        </div>

        {/* Primary CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-blue-700 hover:bg-sky-50 font-extrabold text-base shadow-2xl hover:scale-105 transition-all duration-200"
          >
            <span>Daftar Sekarang</span>
            <ArrowRight className="w-5 h-5 text-blue-700" />
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-xl hover:scale-105 transition-all duration-200 border border-emerald-400/30"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Hubungi WhatsApp ({WHATSAPP_NUMBER})</span>
          </a>
        </div>

      </div>
    </section>
  );
};
