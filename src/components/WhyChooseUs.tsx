import React, { useState } from 'react';
import { WHY_CHOOSE_US } from '../data/raziqnetData';
import { Zap, Activity, Gauge, Tag, Home, Headphones, CheckCircle2, Cpu, Wifi } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap':
        return <Zap className="w-7 h-7 text-[#2EA8FF]" />;
      case 'Activity':
        return <Activity className="w-7 h-7 text-[#2EA8FF]" />;
      case 'Gauge':
        return <Gauge className="w-7 h-7 text-[#2EA8FF]" />;
      case 'Tag':
        return <Tag className="w-7 h-7 text-[#2EA8FF]" />;
      case 'Home':
        return <Home className="w-7 h-7 text-[#2EA8FF]" />;
      case 'Headphones':
        return <Headphones className="w-7 h-7 text-[#2EA8FF]" />;
      default:
        return <CheckCircle2 className="w-7 h-7 text-[#2EA8FF]" />;
    }
  };

  const useCases = [
    {
      title: 'Gaming Anti Lag',
      desc: 'Ping stabil di angka belasan milidetik, bebas dari masalah latency naik turun saat ranked match.',
      img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Streaming 4K Tanpa Buffering',
      desc: 'Nonton YouTube 4K, Netflix, & Vidio dengan kecepatan tinggi secara bersamaan di banyak TV.',
      img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Kerja & Belajar dari Rumah',
      desc: 'Meeting Zoom jernih, kirim email/file besar kilat, tanpa takut koneksi putus tiba-tiba.',
      img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Koneksi Toko & Operasional',
      desc: 'Mendukung perangkat kasir POS, mesin EDC, CCTV 24 jam, dan live streaming jualan produk.',
      img: 'https://images.unsplash.com/photo-1556742049-0a67d5171e3d?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <section id="keunggulan" className="py-16 lg:py-24 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-[#2EA8FF] text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-4 h-4" /> Keunggulan Utama Raziqnet
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kenapa Memilih Raziqnet?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Kami hadir memberikan standar baru layanan internet fiber optic yang cepat, stabil, dan ramah di kantong masyarakat Cikampek &amp; sekitarnya.
          </p>
        </div>

        {/* 6 Core Icon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2EA8FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-sky-50 rounded-2xl group-hover:bg-[#2EA8FF] group-hover:text-white transition-colors duration-300 shrink-0">
                  {getIcon(item.iconName)}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#2EA8FF] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <span className="inline-block text-[11px] font-semibold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                    {item.highlight}
                  </span>
                  <p className="text-slate-600 text-sm leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Use Case Visual Gallery (Gaming, Streaming, WFH, Usaha) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">
              Satu Jaringan Internet untuk Semua Aktivitas
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Dirancang untuk memberikan kenyamanan koneksi tanpa lag bagi seluruh anggota keluarga dan kebutuhan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 group hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="relative h-40 overflow-hidden bg-slate-800">
                  {!failedImages[i] ? (
                    <img
                      src={uc.img}
                      alt={uc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={() => handleImageError(i)}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-sky-900 flex flex-col items-center justify-center text-white p-3 text-center">
                      <Wifi className="w-8 h-8 text-[#2EA8FF] mb-1" />
                      <p className="text-xs font-bold">{uc.title}</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                  <span className="absolute bottom-2.5 left-3 text-white font-bold text-sm drop-shadow-sm">
                    {uc.title}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

