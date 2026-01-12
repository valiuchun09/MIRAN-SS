
import React from 'react';
import { TranslationDict } from '../types';

interface FooterProps {
  t: TranslationDict;
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ t, isDarkMode }) => {
  const accentColor = isDarkMode ? 'text-[#00E5FF]' : 'text-[#28a745]';

  return (
    <footer className={`py-32 border-t transition-colors duration-500 ${
      isDarkMode ? 'bg-[#050505] border-white/5 text-white' : 'bg-white border-slate-100 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-10">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md transition-all ${
                isDarkMode ? 'bg-gradient-to-tr from-[#00E5FF] to-[#007BFF] text-white' : 'bg-gradient-to-tr from-[#28a745] to-blue-500 text-white'
              }`}>
                <i className="fa-solid fa-bolt-lightning text-2xl"></i>
              </div>
              <span className={`text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r transition-all ${
                isDarkMode ? 'from-white to-[#00E5FF]' : 'from-slate-900 to-[#28a745]'
              }`}>
                MIRAN SMM
              </span>
            </div>
            <p className={`max-w-sm leading-relaxed mb-12 text-lg font-medium italic transition-colors ${
              isDarkMode ? 'text-slate-500' : 'text-slate-500'
            }`}>
              "{t.heroTitle.split(' — ')[1]}"
            </p>
            
            <div className="space-y-6">
              <h4 className={`font-black uppercase tracking-[0.3em] text-xs transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-400'}`}>{t.socialLabel}</h4>
              <div className="flex space-x-6">
                <a 
                  href="https://www.instagram.com/miran_smm?igsh=d2Z1ZnAyaTF0bWhr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`w-24 h-24 rounded-[35px] flex items-center justify-center transition-all hover:scale-110 shadow-sm group border ${
                    isDarkMode 
                      ? 'bg-white/5 border-white/5 text-slate-400 hover:text-[#00E5FF] hover:bg-white/10' 
                      : 'bg-slate-50 border-slate-100 text-slate-400 hover:text-[#28a745] hover:bg-slate-100'
                  }`}
                >
                  <i className="fa-brands fa-instagram text-5xl group-hover:rotate-6 transition-transform"></i>
                </a>
                <a 
                  href="https://t.me/MiranSMM" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`w-24 h-24 rounded-[35px] flex items-center justify-center transition-all hover:scale-110 shadow-sm group border ${
                    isDarkMode 
                      ? 'bg-white/5 border-white/5 text-slate-400 hover:text-[#00E5FF] hover:bg-white/10' 
                      : 'bg-slate-50 border-slate-100 text-slate-400 hover:text-[#28a745] hover:bg-slate-100'
                  }`}
                >
                  <i className="fa-brands fa-telegram text-5xl group-hover:-rotate-6 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-10 md:pt-0">
            <h4 className={`font-black mb-12 uppercase tracking-[0.2em] text-[11px] ${accentColor}`}>{t.servicesLabel}</h4>
            <ul className={`space-y-6 text-base font-bold transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              <li><a href="#services" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>{t.service1}</a></li>
              <li><a href="#services" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>{t.service3}</a></li>
              <li><a href="#services" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>{t.service5}</a></li>
              <li><a href="#services" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>{t.service6}</a></li>
            </ul>
          </div>

          <div className="pt-10 md:pt-0">
            <h4 className={`font-black mb-12 uppercase tracking-[0.2em] text-[11px] ${accentColor}`}>{t.contactUs}</h4>
            <div className="space-y-4">
              <a 
                href="https://t.me/Artikzada"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full px-6 py-4 rounded-2xl flex items-center space-x-4 transition-all group border ${
                  isDarkMode 
                    ? 'bg-white/5 border-white/10 hover:border-[#00E5FF]/50' 
                    : 'bg-slate-50 border-slate-100 hover:border-[#28a745]/50'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                  isDarkMode ? 'bg-white/5 text-[#00E5FF]' : 'bg-white border border-slate-200 text-[#28a745]'
                }`}>
                  <i className="fa-brands fa-telegram text-sm"></i>
                </div>
                <span className={`text-sm font-bold group-hover:transition-colors ${
                  isDarkMode ? 'text-slate-400 group-hover:text-white' : 'text-slate-500 group-hover:text-slate-900'
                }`}>@Artikzada (Admin)</span>
              </a>
              
              <a 
                href="tel:+998934456475"
                className={`w-full px-6 py-4 rounded-2xl flex items-center space-x-4 transition-all group border ${
                  isDarkMode 
                    ? 'bg-white/5 border-white/10 hover:border-blue-500/50' 
                    : 'bg-slate-50 border-slate-100 hover:border-blue-500/50'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                  isDarkMode ? 'bg-white/5 text-blue-400' : 'bg-white border border-slate-200 text-blue-500'
                }`}>
                  <i className="fa-solid fa-phone text-xs"></i>
                </div>
                <span className={`text-sm font-bold group-hover:transition-colors ${
                  isDarkMode ? 'text-slate-400 group-hover:text-white' : 'text-slate-500 group-hover:text-slate-900'
                }`}>{t.phoneContact}</span>
              </a>
            </div>
          </div>
        </div>

        <div className={`pt-12 border-t flex flex-col md:flex-row justify-between items-center text-[11px] font-black uppercase tracking-[0.4em] space-y-6 md:space-y-0 transition-colors ${
          isDarkMode ? 'border-white/5 text-slate-600' : 'border-slate-100 text-slate-400'
        }`}>
          <p>© {new Date().getFullYear()} MIRAN SMM AGENTLIGI.</p>
          <div className="flex space-x-12">
            <a href="#" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>{t.privacyPolicy}</a>
            <a href="#" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>{t.termsOfUse}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
