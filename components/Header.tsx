
import React from 'react';
import { Language, TranslationDict } from '../types';

interface HeaderProps {
  currentLang: Language;
  setLang: (l: Language) => void;
  t: TranslationDict;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentLang, setLang, t, isDarkMode, toggleDarkMode }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b transition-all duration-500 ${
      isDarkMode 
        ? 'bg-[#050505]/80 border-white/5' 
        : 'bg-white/90 border-slate-100 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${
              isDarkMode 
                ? 'border-[#00E5FF]/30 text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.2)]' 
                : 'border-[#28a745]/20 text-[#28a745]'
            }`}>
              <i className="fa-solid fa-bolt-lightning"></i>
            </div>
            <span className={`text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r transition-all ${
              isDarkMode ? 'from-[#00E5FF] to-[#007BFF]' : 'from-[#28a745] to-blue-600'
            }`}>
              MIRAN SMM
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className={`text-xs font-bold transition-colors uppercase tracking-widest ${
              isDarkMode ? 'text-slate-400 hover:text-[#00E5FF]' : 'text-slate-500 hover:text-[#28a745]'
            }`}>{t.servicesTitle}</a>
            <a href="#faq" className={`text-xs font-bold transition-colors uppercase tracking-widest ${
              isDarkMode ? 'text-slate-400 hover:text-[#00E5FF]' : 'text-slate-500 hover:text-[#28a745]'
            }`}>FAQ</a>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className={`w-10 h-10 rounded-xl border transition-all flex items-center justify-center ${
                isDarkMode 
                  ? 'border-white/10 bg-white/5 text-yellow-400 hover:bg-white/10' 
                  : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>

            <div className={`flex p-1 rounded-xl border transition-all ${
              isDarkMode ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-100'
            }`}>
              {(['uz', 'ru', 'en'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                    currentLang === l 
                      ? (isDarkMode ? 'bg-[#00E5FF]/10 text-[#00E5FF]' : 'bg-white text-[#28a745] shadow-sm ring-1 ring-slate-100')
                      : (isDarkMode ? 'text-slate-500 hover:text-slate-300' : 'text-slate-500 hover:text-slate-800')
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
