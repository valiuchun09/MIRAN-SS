
import React, { useState, useEffect, useRef } from 'react';
import { Language, Message, TranslationDict } from '../types';
import { getAiResponse } from '../geminiService';
import confetti from 'canvas-confetti';

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  t: TranslationDict;
  isDarkMode: boolean;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, onClose, lang, t, isDarkMode }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const timer = setTimeout(() => {
        setMessages([{ role: 'model', text: t.aiWelcome }]);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, t.aiWelcome, messages.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSend = async (textOverride?: string) => {
    const messageText = textOverride || input;
    if (!messageText.trim() || isTyping) return;

    const userMessage: Message = { role: 'user', text: messageText };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    setIsTyping(true);
    const responseText = await getAiResponse([...messages, userMessage], lang);
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
  };

  const submitLead = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSuccess(true);
    confetti({ 
      particleCount: 150, 
      spread: 70, 
      origin: { y: 0.6 }, 
      colors: isDarkMode ? ['#00E5FF', '#007BFF'] : ['#28a745', '#007bff'], 
      zIndex: 100 
    });
    setTimeout(() => { 
      setShowLeadForm(false); 
      setIsSuccess(false); 
      onClose(); 
    }, 4500);
  };

  const quickReplies = lang === 'uz' 
    ? ["Sayt yaratish", "SMM xizmati", "Targeting", "Kompleks digital"]
    : ["Build Website", "SMM Service", "Targeting", "Full Digital"];

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 z-[65] w-[calc(100vw-3rem)] sm:w-[450px]">
      <div className={`rounded-[40px] shadow-2xl overflow-hidden flex flex-col h-[650px] border transition-all duration-500 animate-in slide-in-from-bottom-10 ${
        isDarkMode ? 'bg-[#0f0f0f] border-white/10' : 'bg-white border-slate-100'
      }`}>
        
        {/* Header */}
        <div className={`p-8 border-b flex justify-between items-center transition-colors ${
          isDarkMode ? 'bg-[#0a0a0a] border-white/5' : 'bg-slate-50 border-slate-100'
        }`}>
          <div className="flex items-center space-x-4">
            <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-2xl shadow-sm transition-all ${
              isDarkMode 
                ? 'bg-gradient-to-tr from-[#00E5FF]/20 to-[#007BFF]/20 border-[#00E5FF]/30 text-[#00E5FF]' 
                : 'bg-[#28a745]/10 border-[#28a745]/20 text-[#28a745]'
            }`}>
              <i className="fa-solid fa-robot"></i>
            </div>
            <div>
              <h3 className={`font-black text-sm tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{t.aiName}</h3>
              <div className="flex items-center space-x-1.5 mt-1">
                <span className={`w-2 h-2 rounded-full animate-pulse transition-all ${
                  isDarkMode ? 'bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]' : 'bg-[#28a745]'
                }`}></span>
                <p className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${
                  isDarkMode ? 'text-[#00E5FF]' : 'text-[#28a745]'
                }`}>Online</p>
              </div>
            </div>
          </div>
          <button onClick={onClose} className={`w-10 h-10 rounded-2xl border flex items-center justify-center transition-all ${
            isDarkMode ? 'bg-white/5 border-white/5 text-slate-500 hover:text-white' : 'bg-white border-slate-100 text-slate-400 hover:text-slate-900'
          }`}>
            <i className="fa-solid fa-chevron-down text-xs"></i>
          </button>
        </div>

        {/* Chat Body */}
        <div className={`flex-1 overflow-y-auto p-8 space-y-6 transition-colors ${
          isDarkMode ? 'bg-[#0a0a0a]/50' : 'bg-slate-50/30'
        }`} ref={scrollRef}>
          {messages.map((m, idx) => (
            <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-5 rounded-[28px] text-sm leading-relaxed font-semibold transition-all ${
                m.role === 'user' 
                  ? (isDarkMode ? 'bg-gradient-to-tr from-[#007BFF] to-[#00E5FF] text-white rounded-tr-none' : 'bg-gradient-to-tr from-blue-600 to-indigo-700 text-white rounded-tr-none')
                  : (isDarkMode ? 'bg-white/5 text-slate-200 border border-white/5 rounded-tl-none' : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none')
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className={`p-5 rounded-[28px] rounded-tl-none border transition-all ${
                isDarkMode ? 'bg-white/5 border-white/5' : 'bg-white border-slate-200'
              }`}>
                <div className="flex space-x-1.5">
                  <div className={`w-1.5 h-1.5 rounded-full animate-bounce transition-all ${isDarkMode ? 'bg-[#00E5FF]' : 'bg-[#28a745]'}`}></div>
                  <div className={`w-1.5 h-1.5 rounded-full animate-bounce [animation-delay:-.3s] transition-all ${isDarkMode ? 'bg-[#00E5FF]' : 'bg-[#28a745]'}`}></div>
                  <div className={`w-1.5 h-1.5 rounded-full animate-bounce [animation-delay:-.5s] transition-all ${isDarkMode ? 'bg-[#00E5FF]' : 'bg-[#28a745]'}`}></div>
                </div>
              </div>
            </div>
          )}

          {messages.length === 1 && !isTyping && (
            <div className="flex flex-wrap gap-2 animate-in fade-in slide-in-from-bottom-2 duration-500">
              {quickReplies.map((reply, i) => (
                <button 
                  key={i}
                  onClick={() => handleSend(reply)}
                  className={`px-5 py-2.5 border rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    isDarkMode 
                      ? 'bg-white/5 border-white/10 text-slate-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/50' 
                      : 'bg-white border-slate-200 text-slate-500 hover:text-[#28a745] hover:border-[#28a745]/50 shadow-sm'
                  }`}
                >
                  {reply}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Action Bar */}
        {!showLeadForm && !isSuccess && messages.length >= 2 && (
          <div className={`px-8 pt-2 pb-2 border-t transition-colors ${
            isDarkMode ? 'bg-[#0a0a0a]/80 border-white/5' : 'bg-white/80 backdrop-blur-md border-slate-100'
          }`}>
            <div className="flex gap-3">
              <button 
                onClick={() => setShowLeadForm(true)}
                className={`flex-1 py-4 border rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center space-x-2 ${
                  isDarkMode 
                    ? 'bg-[#00E5FF]/10 text-[#00E5FF] border-[#00E5FF]/20 hover:bg-[#00E5FF]/20' 
                    : 'bg-[#28a745]/10 text-[#28a745] border-[#28a745]/20 hover:bg-[#28a745]/20'
                }`}
              >
                <i className="fa-solid fa-paper-plane text-xs"></i>
                <span>{t.leadFormTitle}</span>
              </button>
            </div>
          </div>
        )}

        {/* Lead Form Overlay */}
        {showLeadForm && (
          <div className={`absolute inset-0 z-20 p-10 flex flex-col justify-center items-center text-center backdrop-blur-xl transition-all ${
            isDarkMode ? 'bg-[#0a0a0a]/98' : 'bg-white/98'
          }`}>
             {!isSuccess ? (
               <form onSubmit={submitLead} className="w-full space-y-8 animate-in fade-in zoom-in duration-500">
                 <div>
                    <h4 className={`text-3xl font-black transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{t.leadFormTitle}</h4>
                    <p className="text-sm text-slate-500 mt-4 font-bold">{t.leadFormSub}</p>
                 </div>
                 <div className="space-y-5">
                    <div className="text-left">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 block ml-1">{t.nameLabel}</label>
                      <input 
                        required 
                        type="text" 
                        className={`w-full px-7 py-5 border rounded-[28px] transition-all font-bold ${
                          isDarkMode 
                            ? 'bg-white/5 border-white/10 text-white focus:ring-2 focus:ring-[#00E5FF]/30' 
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:ring-2 focus:ring-[#28a745]/30'
                        }`} 
                        placeholder={t.nameLabel}
                      />
                    </div>
                    <div className="text-left">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 block ml-1">{t.phoneLabel}</label>
                      <input 
                        required 
                        type="tel" 
                        className={`w-full px-7 py-5 border rounded-[28px] transition-all font-bold ${
                          isDarkMode 
                            ? 'bg-white/5 border-white/10 text-white focus:ring-2 focus:ring-[#00E5FF]/30' 
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:ring-2 focus:ring-[#28a745]/30'
                        }`} 
                        placeholder="+998" 
                      />
                    </div>
                 </div>
                 <button type="submit" className={`w-full py-6 text-white rounded-[28px] font-black text-sm uppercase tracking-[0.2em] transition-all shadow-xl ${
                   isDarkMode ? 'bg-gradient-to-r from-blue-600 to-[#00E5FF]' : 'bg-gradient-to-r from-blue-600 to-indigo-700'
                 }`}>
                   {t.submitButton}
                 </button>
                 <button type="button" onClick={() => setShowLeadForm(false)} className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] hover:text-slate-600 pt-4 transition-colors">
                    Back to chat
                 </button>
               </form>
             ) : (
               <div className="flex flex-col items-center">
                  <div className={`w-24 h-24 rounded-[36px] flex items-center justify-center shadow-xl mb-10 transform rotate-12 transition-all ${
                    isDarkMode ? 'bg-[#00E5FF] text-black' : 'bg-[#28a745] text-white'
                  }`}>
                    <i className="fa-solid fa-check text-5xl"></i>
                  </div>
                  <h4 className={`text-3xl font-black transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{t.successMessage}</h4>
                  <p className="text-base text-slate-500 font-bold leading-relaxed">{t.successDiagnosticSub}</p>
               </div>
             )}
          </div>
        )}

        {/* Footer Input */}
        {!showLeadForm && (
          <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className={`p-8 border-t transition-colors ${
            isDarkMode ? 'bg-[#0a0a0a] border-white/5' : 'bg-white border-slate-100'
          }`}>
            <div className="relative flex items-center">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.chatPlaceholder}
                disabled={isTyping}
                className={`w-full px-8 py-5 rounded-[28px] pr-16 text-base font-bold transition-all outline-none ${
                  isDarkMode 
                    ? 'bg-white/5 border-none text-white focus:ring-1 focus:ring-[#00E5FF]/30' 
                    : 'bg-slate-50 border-slate-100 text-slate-900 focus:ring-1 focus:ring-[#28a745]/30'
                }`}
              />
              <button 
                type="submit" 
                className={`absolute right-2 p-4 text-white rounded-2xl transition-all shadow-md disabled:opacity-50 ${
                  isDarkMode 
                    ? 'bg-gradient-to-tr from-[#00E5FF] to-blue-600 text-white' 
                    : 'bg-gradient-to-tr from-[#28a745] to-emerald-500'
                }`} 
                disabled={!input.trim() || isTyping}
              >
                <i className="fa-solid fa-arrow-right text-sm"></i>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ChatWidget;
