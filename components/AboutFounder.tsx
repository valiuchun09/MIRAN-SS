
import React from 'react';
import { TranslationDict } from '../types';

interface AboutFounderProps {
  t: TranslationDict;
  isDarkMode: boolean;
}

const AboutFounder: React.FC<AboutFounderProps> = ({ t, isDarkMode }) => {
  return (
    <section className={`py-32 relative overflow-hidden border-t transition-colors duration-500 ${
      isDarkMode ? 'bg-[#050505] border-white/5' : 'bg-white border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`border rounded-[60px] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-20 transition-all ${
          isDarkMode ? 'bg-white/[0.02] border-white/5' : 'bg-slate-50 border-slate-100 shadow-sm'
        }`}>
          <div className="w-full lg:w-1/3">
            <div className="relative">
              <div className={`absolute inset-0 blur-3xl opacity-20 transition-all ${
                isDarkMode ? 'bg-gradient-to-tr from-[#00E5FF] to-[#007BFF]' : 'bg-gradient-to-tr from-[#28a745] to-blue-500'
              }`}></div>
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" 
                alt="Sherali Ortikzoda - Strategiya ustasi" 
                className={`relative z-10 w-full h-[500px] object-cover rounded-[45px] border shadow-xl transition-all duration-700 ${
                  isDarkMode ? 'border-white/10 opacity-90 hover:opacity-100' : 'border-white shadow-slate-200'
                }`}
              />
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <h2 className={`text-4xl md:text-6xl font-black mb-10 tracking-tighter transition-colors ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Sherali Ortikzoda: <span className={isDarkMode ? 'text-[#00E5FF]' : 'text-[#28a745]'}>{t.stat2} {t.stat2Sub.toLowerCase()}</span>
            </h2>
            <div className={`space-y-8 text-xl font-medium leading-relaxed transition-colors ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <p>
                "{t.founderQuote}"
              </p>
              <p>
                {t.founderSub}
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className={`border-b md:border-b-0 md:border-r pb-6 md:pb-0 transition-colors ${isDarkMode ? 'border-white/10' : 'border-slate-200'}`}>
                <p className={`text-3xl font-black mb-2 tracking-tighter uppercase transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{t.stat1}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">{t.stat1Sub}</p>
              </div>
              <div className={`border-b md:border-b-0 md:border-r pb-6 md:pb-0 transition-colors ${isDarkMode ? 'border-white/10' : 'border-slate-200'}`}>
                <p className={`text-3xl font-black mb-2 tracking-tighter uppercase transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{t.stat2}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">{t.stat2Sub}</p>
              </div>
              <div>
                <p className={`text-3xl font-black mb-2 tracking-tighter uppercase transition-colors ${isDarkMode ? 'text-[#00E5FF]' : 'text-[#28a745]'}`}>{t.stat3}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">{t.stat3Sub}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
