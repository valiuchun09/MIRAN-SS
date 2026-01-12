
import React from 'react';
import { TranslationDict } from '../types';

interface ServicesProps {
  t: TranslationDict;
  isDarkMode: boolean;
}

const Services: React.FC<ServicesProps> = ({ t, isDarkMode }) => {
  const services = [
    { title: t.service6, desc: t.service6Desc, icon: "fa-money-bill-trend-up", color: isDarkMode ? "text-[#00E5FF]" : "text-amber-500", bg: isDarkMode ? "bg-white/5" : "bg-amber-50/30" },
    { title: t.service1, desc: t.service1Desc, icon: "fa-bullseye", color: isDarkMode ? "text-blue-400" : "text-blue-500", bg: isDarkMode ? "bg-white/5" : "bg-blue-50/30" },
    { title: t.service2, desc: t.service2Desc, icon: "fa-camera-retro", color: isDarkMode ? "text-[#00E5FF]" : "text-[#28a745]", bg: isDarkMode ? "bg-white/5" : "bg-emerald-50/30" },
    { title: t.service3, desc: t.service3Desc, icon: "fa-chess", color: isDarkMode ? "text-[#007BFF]" : "text-indigo-500", bg: isDarkMode ? "bg-white/5" : "bg-indigo-50/30" },
    { title: t.service5, desc: t.service5Desc, icon: "fa-laptop-code", color: isDarkMode ? "text-cyan-400" : "text-orange-500", bg: isDarkMode ? "bg-white/5" : "bg-orange-50/30" },
    { title: t.service4, desc: t.service4Desc, icon: "fa-rocket", color: isDarkMode ? "text-blue-300" : "text-emerald-500", bg: isDarkMode ? "bg-white/5" : "bg-emerald-50/30" },
  ];

  return (
    <div id="services" className={`py-32 transition-colors duration-500 ${isDarkMode ? 'bg-[#080808]' : 'bg-[#fafbfc]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className={`text-4xl md:text-6xl font-black mb-6 tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{t.servicesTitle}</h2>
          <div className={`w-24 h-1.5 mx-auto rounded-full transition-all ${
            isDarkMode ? 'bg-gradient-to-r from-[#00E5FF] to-[#007BFF]' : 'bg-gradient-to-r from-blue-500 to-[#28a745]'
          }`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, idx) => (
            <div key={idx} className={`group p-10 rounded-[40px] border transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-start ${
              isDarkMode 
                ? 'bg-white/[0.03] border-white/5 hover:border-[#00E5FF]/30 hover:bg-white/[0.06]' 
                : 'bg-white border-slate-100 hover:border-[#28a745]/20 hover:shadow-2xl hover:shadow-slate-200'
            }`}>
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-10 text-3xl transition-all group-hover:scale-110 ${s.bg} ${s.color}`}>
                <i className={`fa-solid ${s.icon}`}></i>
              </div>
              <h3 className={`text-2xl font-black mb-5 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{s.title}</h3>
              <p className={`text-base leading-relaxed font-medium transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
