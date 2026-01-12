
import React from 'react';
import { TranslationDict } from '../types';

interface HeroProps {
  t: TranslationDict;
  isDarkMode: boolean;
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ t, isDarkMode, onCtaClick }) => {
  const highlightWords = [
    'miran', 'smm', 'qanotsiz', 'qushdir', 'wings', 'bird', 'крыльев', 'птица'
  ];

  return (
    <section className={`relative pt-32 pb-20 md:pt-60 md:pb-52 overflow-hidden transition-colors duration-500 ${
      isDarkMode ? 'bg-[#050505]' : 'bg-white'
    }`}>
      {/* Background Decor */}
      <div className={`absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[1200px] h-[1200px] rounded-full blur-[200px] pointer-events-none ${
        isDarkMode ? 'bg-blue-600/[0.06]' : 'bg-blue-500/[0.03]'
      }`}></div>
      <div className={`absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[1000px] h-[1000px] rounded-full blur-[200px] pointer-events-none ${
        isDarkMode ? 'bg-[#00E5FF]/[0.06]' : 'bg-[#28a745]/[0.03]'
      }`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="text-center lg:text-left">
            <div className={`inline-flex items-center space-x-3 px-6 py-2.5 rounded-full border text-[11px] font-black mb-12 tracking-[0.3em] uppercase transition-all ${
              isDarkMode 
                ? 'bg-white/5 border-white/10 text-[#00E5FF]' 
                : 'bg-slate-50 border-slate-100 text-[#28a745]'
            }`}>
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDarkMode ? 'bg-[#00E5FF]' : 'bg-[#28a745]'}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isDarkMode ? 'bg-[#00E5FF]' : 'bg-[#28a745]'}`}></span>
              </span>
              <span>{t.appSlogan}</span>
            </div>
            
            <h1 className={`text-6xl md:text-[85px] font-black leading-[0.95] mb-12 tracking-tighter transition-colors ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              {t.heroTitle.split(' ').map((word, i) => {
                const cleanWord = word.toLowerCase().replace(/['".,!]/g, '');
                const shouldHighlight = highlightWords.some(h => cleanWord.includes(h));
                const highlightGradient = isDarkMode ? 'from-[#00E5FF] to-[#007BFF]' : 'from-[#28a745] to-blue-600';
                return (
                  <span key={i} className={shouldHighlight ? `bg-gradient-to-r ${highlightGradient} bg-clip-text text-transparent` : ''}>
                    {word}{' '}
                  </span>
                );
              })}
            </h1>
            
            <p className={`text-xl md:text-2xl mb-16 leading-relaxed max-w-xl mx-auto lg:mx-0 font-bold border-l-4 pl-6 transition-all ${
              isDarkMode ? 'text-slate-400 border-[#00E5FF]' : 'text-slate-600 border-[#28a745]'
            }`}>
              {t.heroSub}
            </p>

            <div className="space-y-10">
              <button 
                onClick={onCtaClick}
                className={`w-full sm:w-auto px-14 py-7 rounded-[28px] font-black text-sm uppercase tracking-[0.2em] transition-all flex items-center justify-center space-x-3 group ${
                  isDarkMode 
                    ? 'bg-gradient-to-tr from-[#00E5FF] to-[#007BFF] text-white shadow-[0_20px_80px_rgba(0,123,255,0.3)]' 
                    : 'bg-gradient-to-tr from-[#28a745] to-emerald-500 text-white shadow-[0_20px_60px_rgba(40,167,69,0.2)]'
                } hover:scale-105 active:scale-95`}
              >
                <i className="fa-solid fa-chart-line group-hover:rotate-12 transition-transform"></i>
                <span>{t.ctaStart}</span>
              </button>

              <div className="space-y-6">
                <p className={`text-[10px] uppercase tracking-[0.4em] font-black text-center lg:text-left ml-1 transition-colors ${
                  isDarkMode ? 'text-slate-600' : 'text-slate-400'
                }`}>
                  {t.contactSpecialist}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
                  <a 
                    href="https://t.me/Artikzada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-10 py-6 border rounded-[24px] font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center space-x-4 backdrop-blur-md group shadow-xl ${
                      isDarkMode 
                        ? 'bg-white/5 border-white/10 text-white hover:border-[#00E5FF]/50 hover:bg-[#00E5FF]/5' 
                        : 'bg-slate-50 border-slate-100 text-slate-800 hover:border-[#28a745]/50 hover:bg-[#28a745]/5'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 ${
                      isDarkMode ? 'bg-white/5 text-[#00E5FF]' : 'bg-white border border-slate-100 text-[#28a745]'
                    }`}>
                      <i className="fa-brands fa-telegram text-xl"></i>
                    </div>
                    <span>{t.viaTelegram}</span>
                  </a>
                  
                  <a 
                    href="tel:+998934456475"
                    className={`px-10 py-6 border rounded-[24px] font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center space-x-4 backdrop-blur-md group shadow-xl ${
                      isDarkMode 
                        ? 'bg-white/5 border-white/10 text-white hover:border-blue-500/50 hover:bg-blue-500/5' 
                        : 'bg-slate-50 border-slate-100 text-slate-800 hover:border-blue-500/50 hover:bg-blue-500/5'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 ${
                      isDarkMode ? 'bg-white/5 text-blue-400' : 'bg-white border border-slate-100 text-blue-500'
                    }`}>
                      <i className="fa-solid fa-phone text-lg"></i>
                    </div>
                    <span>{t.viaPhone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10 animate-float">
               <div className={`p-[1px] rounded-[70px] bg-gradient-to-br transition-all ${
                 isDarkMode 
                   ? 'from-[#00E5FF]/40 via-blue-500/40 to-[#007BFF]/40 shadow-2xl shadow-[#00E5FF]/10' 
                   : 'from-[#28a745]/40 via-blue-500/40 to-emerald-400/40 shadow-2xl'
               }`}>
                 <div className={`rounded-[69px] overflow-hidden relative transition-colors duration-500 ${
                   isDarkMode ? 'bg-[#0a0a0a]' : 'bg-white'
                 }`}>
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000" 
                    alt="Sherali Ortikzoda - MIRAN SMM Founder" 
                    className={`w-full h-[650px] object-cover transition-all duration-1000 ${
                      isDarkMode ? 'opacity-80 hover:opacity-100' : 'opacity-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t transition-colors ${
                    isDarkMode ? 'from-[#0a0a0a] via-transparent to-transparent' : 'from-white/20 via-transparent to-transparent'
                  }`}></div>
                  
                  <div className="absolute bottom-16 left-12 right-12">
                    <div className={`backdrop-blur-3xl p-10 rounded-[45px] border shadow-xl transition-all ${
                      isDarkMode 
                        ? 'bg-white/5 border-white/10' 
                        : 'bg-white/80 border-slate-100'
                    }`}>
                       <div className="flex items-center justify-between mb-8">
                         <div className="flex items-center space-x-6">
                           <div className={`w-16 h-16 rounded-3xl flex items-center justify-center text-3xl transition-all ${
                             isDarkMode ? 'bg-[#00E5FF]/10 text-[#00E5FF]' : 'bg-[#28a745]/10 text-[#28a745]'
                           }`}>
                             <i className="fa-solid fa-chart-pie"></i>
                           </div>
                           <div>
                             <h4 className={`font-black text-xl transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>MIRAN SMM</h4>
                             <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Digital Strategiya</p>
                           </div>
                         </div>
                         <div className={`text-xl font-black tracking-tight transition-colors ${isDarkMode ? 'text-[#00E5FF]' : 'text-[#28a745]'}`}>Kafolatlangan Sifat</div>
                       </div>
                       <p className={`text-sm font-bold leading-relaxed transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                         "{t.heroTitle.split(' — ')[1]}"
                       </p>
                    </div>
                  </div>
                 </div>
               </div>
               
               <div className={`absolute -bottom-10 -right-10 glass-card p-8 rounded-[40px] border shadow-2xl transition-all ${
                 isDarkMode ? 'border-[#00E5FF]/30 bg-black/50 backdrop-blur-xl' : 'border-[#28a745]/10 bg-white/80 backdrop-blur-xl'
               }`}>
                 <div className="flex items-center space-x-5">
                   <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all ${
                     isDarkMode ? 'bg-[#00E5FF]/10 text-[#00E5FF]' : 'bg-[#28a745]/10 text-[#28a745]'
                   }`}>
                     <i className="fa-solid fa-award"></i>
                   </div>
                   <div>
                     <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Bizning maqsadimiz</p>
                     <p className={`text-xl font-black tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Maksimal Natija</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
