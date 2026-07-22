import React, { useState, useEffect } from 'react';
import { RaziqnetLogo } from './RaziqnetLogo';
import { Menu, X, PhoneCall, ArrowRight, ShieldCheck, Wifi } from 'lucide-react';
import { REGISTRATION_URL, WHATSAPP_LINK, WHATSAPP_NUMBER } from '../data/raziqnetData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Paket Internet', href: '#paket' },
    { name: 'Cara Daftar', href: '#cara-daftar' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-sky-600 via-[#2EA8FF] to-blue-700 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2 shadow-inner">
        <span className="inline-flex items-center gap-1.5 bg-white/20 px-2 py-0.5 rounded-full text-xs font-semibold backdrop-blur-sm">
          <Wifi className="w-3.5 h-3.5 animate-pulse text-cyan-200" /> PROMO CIKAMPEK
        </span>
        <span>Pasang Baru Internet Fiber Raziqnet Tanpa FUP &amp; Gratis Sewa Router!</span>
        <a
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold hover:text-cyan-200 hidden md:inline-flex items-center gap-1 ml-2 transition-colors"
        >
          Klaim Promo <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-sky-100'
            : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-2 group focus:outline-none">
            <RaziqnetLogo size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-[#2EA8FF] font-medium text-sm transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2EA8FF] transition-all duration-200 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-xl transition-all duration-200 shadow-xs"
              title="Hubungi WhatsApp Raziqnet"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600 animate-bounce" />
              <span>{WHATSAPP_NUMBER}</span>
            </a>

            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#2EA8FF] to-blue-600 hover:from-blue-500 hover:to-sky-500 rounded-xl shadow-md hover:shadow-sky-200/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Daftar Sekarang</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-sky-50 hover:text-[#2EA8FF] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-sky-100 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-slate-800 hover:bg-sky-50 hover:text-[#2EA8FF] font-medium text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-emerald-700 bg-emerald-50 border border-emerald-200 font-semibold text-sm"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <span>Hubungi WA ({WHATSAPP_NUMBER})</span>
              </a>

              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-bold bg-gradient-to-r from-[#2EA8FF] to-blue-600 shadow-md text-sm"
              >
                <span>Daftar Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
