
import React from 'react';
import { TranslationDict } from '../types';

interface PortfolioProps {
  t: TranslationDict;
}

const Portfolio: React.FC<PortfolioProps> = ({ t }) => {
  const cases = [
    { name: "Brand Launch", tag: "Strategy", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600" },
    { name: "Viral Campaign", tag: "Content", img: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=600" },
    { name: "Market Growth", tag: "Ads", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" },
    { name: "Digital Identity", tag: "Design", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600" },
  ];

  return (
    <div id="portfolio" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 space-y-6 md:space-y-0">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">{t.portfolio}</h2>
            <p className="text-slate-400 text-xl font-medium max-w-lg">Barcha muvaffaqiyatli keyslarimiz va real natijalarimiz bilan Telegram kanalimizda tanishing.</p>
          </div>
          <a 
            href="https://t.me/MiranSMM_Portfolio" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center space-x-3 text-[#39FF14] font-black text-xs uppercase tracking-widest group px-10 py-5 bg-white/5 rounded-[24px] border border-white/10 hover:border-[#39FF14]/50 transition-all hover:bg-white/[0.08]"
          >
            <span>Kanalga o'tish</span>
            <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-2"></i>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((c, idx) => (
            <a 
              key={idx} 
              href="https://t.me/MiranSMM_Portfolio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative group overflow-hidden rounded-[40px] aspect-[4/5] border border-white/5 bg-[#0a0a0a] shadow-2xl"
            >
              <img src={c.img} alt={c.name} className="absolute inset-0 w-full h-full object-cover opacity-50 transition-all duration-700 group-hover:scale-110 group-hover:opacity-80 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-black text-white mb-4 uppercase tracking-widest border border-white/10">{c.tag}</span>
                <h4 className="text-2xl font-black text-white">{c.name}</h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
