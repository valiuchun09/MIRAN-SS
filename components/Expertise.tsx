
import React from 'react';
import { TranslationDict } from '../types';

interface ExpertiseProps {
  t: TranslationDict;
  isDarkMode: boolean;
  onCtaClick: () => void;
}

const Expertise: React.FC<ExpertiseProps> = ({ t, isDarkMode, onCtaClick }) => {
  const cardStyles = [
    { color: isDarkMode ? "from-[#00E5FF]/20 to-[#007BFF]/20" : "from-[#28a745]/10 to-blue-500/10", iconColor: isDarkMode ? "text-[#00E5FF]" : "text-[#28a745]" },
    { color: isDarkMode ? "bg-white/5" : "bg-slate-50", iconColor: isDarkMode ? "text-[#00E5FF]" : "text-blue-500" },
    { color: isDarkMode ? "bg-white/5" : "bg-slate-50", iconColor: isDarkMode ? "text-purple-400" : "text-purple-500" },
    { color: isDarkMode ? "from-blue-500/10 to-[#00E5FF]/10" : "from-blue-500/10 to-indigo-500/10", iconColor: isDarkMode ? "text-blue-400" : "text-blue-500" },
    { color: isDarkMode ? "bg-white/5" : "bg-slate-50", iconColor: isDarkMode ? "text-[#007BFF]" : "text-orange-500" }
  ];

  return (
    <section className={`py-32 relative overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-[#050505]' : 'bg-white'}`}>
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-full blur-[150px] pointer-events-none rounded-full ${
        isDarkMode ? 'bg-[#00E5FF]/[0.02]' : 'bg-[#28a745]/[0.01]'
      }`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className={`text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-tight transition-colors ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            {t.whyUs.split('MIRAN')[0]} <span className={isDarkMode ? 'text-[#00E5FF]' : 'text-[#28a745]'}>MIRAN SMM?</span>
          </h2>
          <p className={`text-xl font-medium max-w-2xl mx-auto leading-relaxed transition-colors ${
            isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {t.whyUsSub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {t.expertiseCards.map((card, idx) => {
            const style = cardStyles[idx % cardStyles.length];
            return (
              <div 
                key={idx} 
                className={`group relative p-8 rounded-[40px] border transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-end min-h-[280px] overflow-hidden ${
                  isDarkMode 
                    ? 'border-white/5 hover:border-[#00E5FF]/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]' 
                    : 'border-slate-100 hover:border-[#28a745]/30 hover:shadow-xl hover:shadow-slate-200'
                } ${style.color.includes('from') ? `bg-gradient-to-tr ${style.color}` : style.color}`}
              >
                <div className={`absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ${
                  isDarkMode ? 'bg-gradient-to-tr from-white/0 via-[#00E5FF]/[0.05] to-white/0' : 'bg-gradient-to-tr from-[#28a745]/0 via-[#28a745]/[0.02] to-[#28a745]/0'
                }`}></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-all shadow-inner ${
                    isDarkMode ? 'bg-white/5' : 'bg-white border border-slate-100 shadow-sm'
                  } ${style.iconColor}`}>
                    <i className={`fa-solid ${card.icon}`}></i>
                  </div>
                  <h4 className={`font-black text-xl mb-3 tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{card.title}</h4>
                  <p className={`text-xs font-bold leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-24 border rounded-[50px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 transition-all ${
          isDarkMode 
            ? 'bg-white/[0.02] border-white/5' 
            : 'bg-slate-50 border-slate-100 shadow-sm'
        }`}>
          <div className="max-w-xl">
             <h3 className={`text-3xl font-black mb-4 italic transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>"{t.heroTitle.split(' — ')[1]}"</h3>
             <p className={`font-bold transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Bizning har bir "Power Card" xizmatimiz sizning biznesingizga yangi qanotlar berish uchun yaratilgan.</p>
          </div>
          <button 
            onClick={onCtaClick}
            className={`px-12 py-6 rounded-[25px] font-black text-xs uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-xl ${
              isDarkMode 
                ? 'bg-[#007BFF] text-white shadow-[#007BFF]/20' 
                : 'bg-[#28a745] text-white shadow-emerald-100'
            }`}
          >
            {t.ctaStart}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
