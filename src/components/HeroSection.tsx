import React, { useState } from 'react';
import { REGISTRATION_URL, WHATSAPP_LINK, WHATSAPP_NUMBER } from '../data/raziqnetData';
import { Wifi, ArrowRight, ShieldCheck, Zap, CheckCircle2, PhoneCall, Sparkles, Activity, Router, Award } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="beranda" className="relative overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-blue-50/30 pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Subtle Mesh Accents */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute top-1/2 left-0 -z-10 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-[#2EA8FF] text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
              <Sparkles className="w-4 h-4 text-[#2EA8FF] animate-spin" style={{ animationDuration: '6s' }} />
              <span>Provider Internet Fiber Terpercaya di Cikampek</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Internet Cepat, Stabil, dan Terjangkau untuk <span className="bg-gradient-to-r from-[#2EA8FF] via-sky-500 to-blue-600 bg-clip-text text-transparent">Rumah &amp; Bisnis</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Nikmati koneksi internet fiber terbaik dengan harga hemat, kecepatan stabil, dan layanan pelanggan yang siap membantu setiap hari.
            </p>

            {/* Key Value Pill Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2.5 text-xs sm:text-sm font-semibold text-slate-700 py-1">
              <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>100% Fiber Optic FTTH</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Tanpa FUP (Unlimited)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Mulai Rp100rb/Bulan</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#2EA8FF] via-sky-500 to-blue-600 hover:from-blue-500 hover:to-sky-500 rounded-2xl shadow-lg shadow-sky-200/80 hover:shadow-sky-300/80 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Daftar Sekarang</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm sm:text-base font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/90 border border-emerald-300/80 rounded-2xl transition-all duration-200 shadow-xs"
              >
                <PhoneCall className="w-5 h-5 text-emerald-600" />
                <span>Hubungi WhatsApp</span>
              </a>
            </div>

            {/* Phone badge */}
            <div className="text-xs text-slate-500 pt-1 flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Layanan Pendaftaran &amp; Informasi WA CS: <strong className="text-slate-800 font-semibold">{WHATSAPP_NUMBER}</strong></span>
            </div>
          </div>

          {/* Right Visual Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Visual Frame */}
            <div className="relative rounded-3xl bg-white/95 p-5 sm:p-6 shadow-2xl border border-sky-100 backdrop-blur-md space-y-4">
              
              {/* Image banner inside frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-sm group">
                {!imgError ? (
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
                    alt="Keluarga menikmati internet cepat Raziqnet"
                    className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={() => setImgError(true)}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-56 sm:h-64 bg-gradient-to-br from-slate-900 to-sky-900 flex flex-col items-center justify-center text-white p-6 text-center">
                    <Wifi className="w-12 h-12 text-[#2EA8FF] mb-2" />
                    <p className="font-extrabold text-lg">RAZIQNET FIBER BROADBAND</p>
                    <p className="text-xs text-sky-200">Internet Cepat &amp; Tanpa Batas Kuota</p>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-extrabold text-slate-800 flex items-center gap-1.5 shadow-md">
                  <Wifi className="w-4 h-4 text-[#2EA8FF]" />
                  <span>Wi-Fi Fiber Optic Super Cepat</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs text-sky-300 font-medium">Layanan Utama Cikampek &amp; Sekitarnya</p>
                  <p className="text-sm font-bold">Koneksi Lancar untuk Gaming, Streaming &amp; Kerja</p>
                </div>
              </div>

              {/* Feature Showcase Grid inside right box */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-100 text-[#2EA8FF] shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Tanpa FUP</p>
                    <p className="text-[11px] text-slate-500">Kuota Sepuasnya</p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-600 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">100% Fiber FTTH</p>
                    <p className="text-[11px] text-slate-500">Serat Optik Murni</p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-100 text-amber-600 shrink-0">
                    <Router className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Gratis Router</p>
                    <p className="text-[11px] text-slate-500">Sewa Modem Wi-Fi</p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-100 text-purple-600 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Respon Cepat</p>
                    <p className="text-[11px] text-slate-500">Teknisi Standby</p>
                  </div>
                </div>
              </div>

              {/* Bottom Trust Stat */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5 font-medium">
                  <Activity className="w-4 h-4 text-emerald-500 animate-pulse" />
                  Jaringan Fiber Status: <strong className="text-emerald-700">Online 99.9%</strong>
                </span>
                <span className="font-bold text-[#2EA8FF] bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-100">
                  Cikampek Ready
                </span>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
                <div className="p-2.5 bg-sky-100 rounded-xl text-[#2EA8FF]">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Latency Rendah</p>
                  <p className="text-[11px] text-slate-500">Anti Lag untuk Gaming</p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
                <div className="p-2.5 bg-emerald-100 rounded-xl text-emerald-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">99.9% Uptime</p>
                  <p className="text-[11px] text-slate-500">Koneksi Fiber Stabil</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

