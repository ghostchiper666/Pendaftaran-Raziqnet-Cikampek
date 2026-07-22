import React, { useState } from 'react';
import { FAQS } from '../data/raziqnetData';
import { HelpCircle, ChevronDown, ChevronUp, PhoneCall } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1'); // First question open by default

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-[#2EA8FF] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-[#2EA8FF]" /> Pertanyaan Umum
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sering Ditanyakan (FAQ)
          </h2>
          <p className="text-slate-600 text-base">
            Temukan jawaban lengkap mengenai layanan internet fiber optic Raziqnet.
          </p>
        </div>

        {/* Accordion Questions */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-white border-[#2EA8FF] shadow-lg ring-2 ring-sky-100'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className={`p-2 rounded-xl transition-colors shrink-0 ${
                      isOpen ? 'bg-sky-100 text-[#2EA8FF]' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100/80">
                    <p>{faq.answer}</p>
                    <div className="mt-3 inline-block text-[11px] font-semibold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-lg">
                      Kategori: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Unanswered Questions Callout */}
        <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <p className="text-sm font-bold text-slate-800">
            Punya Pertanyaan Lain yang Belum Terjawab?
          </p>
          <p className="text-xs text-slate-500">
            Tim Layanan Pelanggan Raziqnet siap menjawab pertanyaan Anda via WhatsApp 24 jam.
          </p>
          <a
            href="https://wa.me/6281318766270?text=Halo%20Raziqnet,%20saya%20punya%20pertanyaan%20mengenai%20layanan%20pemasangan%20internet."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Chat Langsung dengan CS (081318766270)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
