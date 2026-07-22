import React from 'react';
import { SLOGANS } from '../data/raziqnetData';
import { Sparkles, CheckCircle, Wifi } from 'lucide-react';

export const SloganTicker: React.FC = () => {
  // Concatenate array to ensure endless smooth scrolling loop
  const slogansList = [...SLOGANS, ...SLOGANS, ...SLOGANS];

  return (
    <section className="bg-gradient-to-r from-slate-900 via-sky-950 to-blue-950 text-white py-10 overflow-hidden relative border-y border-sky-800/50">
      {/* Fiber Light Streak Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-1 bg-gradient-to-r from-transparent via-[#2EA8FF] to-transparent opacity-80 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Side Edge Fade Masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-blue-950 via-blue-950/80 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <div className="inline-flex items-center gap-2 text-cyan-300 text-xs font-bold tracking-widest uppercase bg-cyan-950/80 px-3.5 py-1 rounded-full border border-cyan-800/60 mb-2">
          <Wifi className="w-3.5 h-3.5 text-[#2EA8FF]" /> Komitmen &amp; Slogan Raziqnet
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          Slogan &amp; Nilai Utama Layanan
        </h2>
      </div>

      {/* Infinite Horizontal Marquee Stream */}
      <div className="relative w-full overflow-hidden py-1">
        <div className="animate-marquee flex items-center space-x-4 sm:space-x-6 whitespace-nowrap">
          {slogansList.map((slogan, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-2xl border border-white/10 backdrop-blur-md shadow-md transition-all duration-200 shrink-0"
            >
              <span className="p-1.5 rounded-lg bg-[#2EA8FF]/20 text-[#2EA8FF]">
                <Sparkles className="w-4 h-4 text-cyan-300" />
              </span>
              <span className="text-sm sm:text-base font-bold text-slate-100">{slogan}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Static Highlights Grid for Mobile & Fast Scanning */}
      <div className="max-w-7xl mx-auto px-4 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs sm:text-sm">
        {SLOGANS.slice(0, 4).map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 bg-sky-900/30 border border-sky-800/40 p-3 rounded-xl backdrop-blur-xs">
            <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-slate-200 font-medium">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

