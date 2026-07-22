import React from 'react';
import { RaziqnetLogo } from './RaziqnetLogo';
import { REGISTRATION_URL, WHATSAPP_LINK, WHATSAPP_NUMBER } from '../data/raziqnetData';
import { PhoneCall, MapPin, ArrowUp, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 relative pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#beranda" className="inline-block">
              <RaziqnetLogo variant="dark" size="lg" />
            </a>

            <p className="text-cyan-300 font-bold text-sm tracking-wide">
              Internet Fiber Cepat • Stabil • Terpercaya
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Raziqnet adalah penyedia layanan internet serat optik (FTTH) terkemuka di wilayah Cikampek, Karawang &amp; sekitarnya. Berkomitmen menghadirkan koneksi tanpa FUP dengan harga paling terjangkau.
            </p>

            {/* Official WhatsApp Contact Button */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30 transition-all duration-200 text-xs font-bold"
                aria-label="WhatsApp Raziqnet"
                title="WhatsApp Raziqnet"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Layanan Customer Service WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-[#2EA8FF] pl-2.5">
              Menu Navigasi
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#beranda" className="hover:text-[#2EA8FF] transition-colors">
                  Beranda Utama
                </a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-[#2EA8FF] transition-colors">
                  Keunggulan Raziqnet
                </a>
              </li>
              <li>
                <a href="#paket" className="hover:text-[#2EA8FF] transition-colors">
                  Paket Internet Reguler &amp; Heboh
                </a>
              </li>
              <li>
                <a href="#cara-daftar" className="hover:text-[#2EA8FF] transition-colors">
                  Cara &amp; Langkah Berlangganan
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-[#2EA8FF] transition-colors">
                  Testimoni Pelanggan
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#2EA8FF] transition-colors">
                  Tanya Jawab (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-[#2EA8FF] pl-2.5">
              Hubungi Kami
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#2EA8FF] shrink-0 mt-0.5" />
                <span>Area Layanan: Cikampek, Dawuan, Kota Baru, Purwasari, Tirtamulya &amp; sekitarnya, Karawang - Jawa Barat.</span>
              </div>

              <div className="flex items-center gap-3">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <p className="text-[11px] text-slate-500">WhatsApp Official CS:</p>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold hover:text-emerald-400 transition-colors"
                  >
                    {WHATSAPP_NUMBER}
                  </a>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-2">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat CS via WhatsApp Sekarang</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Raziqnet. All rights reserved. Internet Fiber Cepat Cikampek.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 transition-colors"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Floating WhatsApp Widget Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-400 text-white p-3.5 sm:p-4 rounded-full shadow-2xl flex items-center gap-2.5 transition-all duration-300 hover:scale-110 group border-2 border-white/20"
        aria-label="Hubungi WhatsApp Raziqnet"
      >
        <MessageCircle className="w-6 h-6 animate-pulse" />
        <span className="hidden sm:inline font-bold text-xs pr-1">
          Chat WA ({WHATSAPP_NUMBER})
        </span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-ping" />
      </a>
    </footer>
  );
};
