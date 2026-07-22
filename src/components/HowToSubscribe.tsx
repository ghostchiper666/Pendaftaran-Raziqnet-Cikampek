import React from 'react';
import { HOW_TO_SUBSCRIBE, REGISTRATION_URL, WHATSAPP_LINK } from '../data/raziqnetData';
import { CheckSquare, FileText, PhoneCall, Calendar, Wifi, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

export const HowToSubscribe: React.FC = () => {
  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <CheckSquare className="w-6 h-6 text-white" />;
      case 2:
        return <FileText className="w-6 h-6 text-white" />;
      case 3:
        return <PhoneCall className="w-6 h-6 text-white" />;
      case 4:
        return <Calendar className="w-6 h-6 text-white" />;
      case 5:
        return <Wifi className="w-6 h-6 text-white" />;
      default:
        return <CheckSquare className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="cara-daftar" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Fiber Glows */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#2EA8FF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Clock className="w-4 h-4 text-[#2EA8FF]" /> Pemasangan Mudah &amp; Cepat
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cara Berlangganan Raziqnet
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Hanya butuh 5 langkah praktis sampai rumah Anda terhubung dengan internet fiber super cepat.
          </p>
        </div>

        {/* Timeline Grid (Desktop & Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative mb-14">
          
          {/* Connector Line on Desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-gradient-to-r from-sky-500 via-[#2EA8FF] to-emerald-400 z-0" />

          {HOW_TO_SUBSCRIBE.map((item) => (
            <div
              key={item.step}
              className="relative z-10 bg-slate-800/90 rounded-2xl p-6 border border-slate-700/80 shadow-xl flex flex-col items-center text-center group hover:bg-slate-800 hover:border-[#2EA8FF] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Step Number Circle */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2EA8FF] to-blue-700 flex items-center justify-center shadow-lg shadow-sky-500/30 mb-4 group-hover:scale-110 transition-transform">
                {getStepIcon(item.step)}
              </div>

              <span className="text-[11px] font-black uppercase text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-800 mb-2">
                Langkah 0{item.step}
              </span>

              <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>

        {/* Quick Action Footer */}
        <div className="bg-gradient-to-r from-sky-900/60 via-blue-900/60 to-slate-800/60 p-6 sm:p-8 rounded-3xl border border-sky-800/60 text-center max-w-3xl mx-auto space-y-4 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" /> Tanpa Ribet &amp; Langsung Diproses
          </div>
          <h3 className="text-2xl font-bold text-white">
            Siap Mendaftar Pasang Baru Hari Ini?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Isi formulir online sekarang dan tim teknisi Raziqnet akan segera menjadwalkan penarikan kabel ke lokasi Anda.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2EA8FF] hover:bg-sky-400 text-white font-bold text-sm shadow-lg transition-all"
            >
              <span>Isi Formulir Pendaftaran Online</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Daftar via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
