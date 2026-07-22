import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/raziqnetData';
import { Star, Quote, MapPin, User } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [failedAvatars, setFailedAvatars] = useState<Record<string, boolean>>({});

  const handleAvatarError = (id: string) => {
    setFailedAvatars((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="testimoni" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-[#2EA8FF] text-xs font-bold uppercase tracking-wider">
            <Quote className="w-4 h-4 text-[#2EA8FF]" /> Cerita Pelanggan Setia
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Apa Kata Pengguna Raziqnet?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Pengalaman nyata dari keluarga, pelaku UMKM, dan pecinta gaming di Cikampek yang telah menikmati koneksi internet fiber Raziqnet.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50/80 rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/60 mt-6 flex items-center gap-3">
                {!failedAvatars[t.id] ? (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    onError={() => handleAvatarError(t.id)}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#2EA8FF] shrink-0 shadow-xs"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-sky-100 border-2 border-[#2EA8FF] flex items-center justify-center text-[#2EA8FF] font-black text-xs shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                )}

                <div className="overflow-hidden">
                  <h3 className="font-bold text-slate-900 text-sm truncate group-hover:text-[#2EA8FF] transition-colors">
                    {t.name}
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 truncate">
                    <MapPin className="w-3 h-3 text-[#2EA8FF] shrink-0" />
                    <span>{t.location}</span>
                  </div>
                  <span className="inline-block text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold border border-emerald-100 mt-1">
                    {t.planUsed}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
