
import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { translations } from './i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import DiagnosticModal from './components/DiagnosticModal';
import Expertise from './components/Expertise';
import AboutFounder from './components/AboutFounder';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('uz');
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  
  const t = translations[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen transition-colors duration-500 relative font-sans overflow-x-hidden ${
      isDarkMode 
        ? 'bg-[#050505] text-slate-300 selection:bg-[#00E5FF]/30 selection:text-white' 
        : 'bg-[#fdfdfd] text-slate-800 selection:bg-[#28a745]/30 selection:text-slate-900'
    }`}>
      <Header 
        currentLang={lang} 
        setLang={setLang} 
        t={t} 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
      
      <main>
        <Hero 
          t={t} 
          isDarkMode={isDarkMode} 
          onCtaClick={() => setIsQuizOpen(true)} 
        />
        
        <Services 
          t={t} 
          isDarkMode={isDarkMode} 
        />

        <Expertise 
          t={t} 
          isDarkMode={isDarkMode} 
          onCtaClick={() => setIsQuizOpen(true)} 
        />

        <AboutFounder 
          t={t} 
          isDarkMode={isDarkMode} 
        />

        <FAQ 
          t={t} 
          isDarkMode={isDarkMode} 
        />
      </main>

      <Footer 
        t={t} 
        isDarkMode={isDarkMode} 
      />

      {/* Floating Action Button for Assistant */}
      <button 
        onClick={() => setIsChatOpen(!isChatOpen)}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-[24px] shadow-2xl flex items-center justify-center text-2xl z-[70] hover:scale-110 transition-all active:scale-95 group ${
          isDarkMode 
            ? 'bg-white/5 backdrop-blur-md text-[#00E5FF] border border-[#00E5FF]/30 shadow-[#00E5FF]/20' 
            : 'bg-white border border-slate-200 text-[#28a745]'
        }`}
      >
        <i className={`fa-solid ${isChatOpen ? 'fa-xmark' : 'fa-headset'} transition-transform duration-300`}></i>
        {!isChatOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDarkMode ? 'bg-[#00E5FF]' : 'bg-[#28a745]'}`}></span>
            <span className={`relative inline-flex rounded-full h-4 w-4 ${isDarkMode ? 'bg-[#00E5FF]' : 'bg-[#28a745]'}`}></span>
          </span>
        )}
      </button>

      {/* Lead Generation Modals */}
      <DiagnosticModal 
        isOpen={isQuizOpen} 
        onClose={() => setIsQuizOpen(false)} 
        lang={lang} 
        t={t} 
        isDarkMode={isDarkMode}
      />

      <ChatWidget 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        lang={lang} 
        t={t} 
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default App;
