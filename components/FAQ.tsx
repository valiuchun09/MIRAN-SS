
import React, { useState } from 'react';
import { TranslationDict } from '../types';

interface FAQProps {
  t: TranslationDict;
  isDarkMode: boolean;
}

const FAQ: React.FC<FAQProps> = ({ t, isDarkMode }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className={`py-32 px-4 transition-colors duration-500 ${isDarkMode ? 'bg-[#050505]' : 'bg-[#fafbfc]'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className={`text-5xl md:text-7xl font-black mb-8 tracking-tighter transition-colors ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>{t.faqTitle}</h2>
          <div className={`w-24 h-2 mx-auto rounded-full shadow-sm transition-all ${
            isDarkMode ? 'bg-gradient-to-r from-[#00E5FF] to-[#007BFF]' : 'bg-gradient-to-r from-blue-500 to-[#28a745]'
          }`}></div>
        </div>

        <div className="space-y-8">
          {t.faqItems.map((item, idx) => (
            <div key={idx} className={`rounded-[35px] border overflow-hidden transition-all duration-500 ${
              isDarkMode 
                ? 'bg-white/[0.03] border-white/5 hover:border-[#00E5FF]/20' 
                : 'bg-white border-slate-100 hover:shadow-lg hover:border-[#28a745]/20'
            }`}>
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full px-10 py-10 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`font-black text-xl md:text-2xl pr-8 leading-tight transition-colors ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>{item.q}</span>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  activeIndex === idx 
                    ? (isDarkMode ? 'bg-[#00E5FF] text-black shadow-[0_0_20px_rgba(0,229,255,0.4)]' : 'bg-[#28a745] text-white shadow-md') 
                    : (isDarkMode ? 'bg-white/5 text-slate-500' : 'bg-slate-50 text-slate-400')
                } ${activeIndex === idx ? 'rotate-180' : ''}`}>
                  <i className="fa-solid fa-chevron-down text-sm"></i>
                </div>
              </button>
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${activeIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className={`px-10 pb-12 pt-2 text-lg md:text-xl leading-relaxed font-medium transition-colors ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
