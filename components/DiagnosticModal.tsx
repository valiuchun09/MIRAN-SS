
import React, { useState } from 'react';
import { Language, TranslationDict } from '../types';
import confetti from 'canvas-confetti';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  t: TranslationDict;
  isDarkMode: boolean;
}

const DiagnosticModal: React.FC<DiagnosticModalProps> = ({ isOpen, onClose, lang, t, isDarkMode }) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const questions = lang === 'uz' ? [
    {
      id: 'niche',
      q: "Sizning biznesingiz qaysi sohada?",
      options: ["Ishlab chiqarish", "Xizmat ko'rsatish", "Savdo (E-commerce)", "Shaxsiy brend", "Boshqa"]
    },
    {
      id: 'goal',
      q: "Asosiy maqsadingiz nima?",
      options: ["Sotuvlarni oshirish", "Obunachilar yig'ish", "Brend tanilishini oshirish", "Mijozlar bilan ishonch o'rnatish"]
    },
    {
      id: 'budget',
      q: "Marketing uchun oylik byudjetingiz (taxminan)?",
      options: ["$200 - $500", "$500 - $1500", "$1500+", "Hali aniq emas"]
    }
  ] : lang === 'ru' ? [
    {
      id: 'niche',
      q: "В какой сфере ваш бизнес?",
      options: ["Производство", "Услуги", "Торговля (E-commerce)", "Личный бренд", "Другое"]
    },
    {
      id: 'goal',
      q: "Какова ваша основная цель?",
      options: ["Увеличить продажи", "Набрать подписчиков", "Узнаваемость бренда", "Доверие клиентов"]
    },
    {
      id: 'budget',
      q: "Ваш ежемесячный бюджет на маркетинг (примерно)?",
      options: ["$200 - $500", "$500 - $1500", "$1500+", "Пока не решено"]
    }
  ] : [
    {
      id: 'niche',
      q: "What is your business niche?",
      options: ["Production", "Services", "E-commerce", "Personal Brand", "Other"]
    },
    {
      id: 'goal',
      q: "What is your primary goal?",
      options: ["Increase Sales", "Get Followers", "Brand Awareness", "Build Trust"]
    },
    {
      id: 'budget',
      q: "Monthly marketing budget?",
      options: ["$200 - $500", "$500 - $1500", "$1500+", "Not decided"]
    }
  ];

  const handleOption = (id: string, option: string) => {
    setAnswers({ ...answers, [id]: option });
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      setStep(step + 1);
    }
  };

  const handleFinalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSuccess(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: isDarkMode ? ['#00E5FF', '#007BFF'] : ['#28a745', '#007bff']
    });
    setTimeout(() => {
      onClose();
      setStep(1);
      setIsSuccess(false);
      setAnswers({});
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className={`absolute inset-0 backdrop-blur-xl transition-all ${
        isDarkMode ? 'bg-black/60' : 'bg-white/60'
      }`} onClick={onClose}></div>
      
      <div className={`relative w-full max-w-2xl rounded-[50px] shadow-2xl border overflow-hidden animate-in zoom-in duration-300 transition-all ${
        isDarkMode ? 'bg-[#0f0f0f] border-white/10' : 'bg-white border-slate-100'
      }`}>
        <button onClick={onClose} className={`absolute top-8 right-8 w-12 h-12 rounded-2xl border flex items-center justify-center transition-all z-10 ${
          isDarkMode ? 'bg-white/5 border-white/5 text-slate-500 hover:text-white' : 'bg-slate-50 border-slate-100 text-slate-400 hover:text-slate-900'
        }`}>
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="p-10 md:p-16">
          {!isSuccess ? (
            <>
              {step <= questions.length ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center space-x-4 mb-10">
                    <span className={`text-[10px] font-black uppercase tracking-[0.4em] transition-colors ${
                      isDarkMode ? 'text-[#00E5FF]' : 'text-[#28a745]'
                    }`}>{t.stepLabel} {step} {t.ofLabel} {questions.length}</span>
                    <div className={`flex-1 h-1 rounded-full overflow-hidden transition-colors ${isDarkMode ? 'bg-white/10' : 'bg-slate-100'}`}>
                      <div 
                        className={`h-full transition-all duration-500 ${isDarkMode ? 'bg-[#00E5FF]' : 'bg-[#28a745]'}`} 
                        style={{ width: `${(step / questions.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <h3 className={`text-3xl md:text-4xl font-black mb-12 leading-tight transition-colors ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {questions[step - 1].q}
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {questions[step - 1].options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleOption(questions[step - 1].id, opt)}
                        className={`w-full p-6 text-left rounded-[24px] border transition-all font-bold group flex justify-between items-center ${
                          isDarkMode 
                            ? 'bg-white/5 border-white/5 hover:border-[#00E5FF]/30 hover:bg-white/10 text-slate-300' 
                            : 'bg-slate-50 border-slate-100 hover:border-[#28a745]/30 hover:bg-white hover:shadow-xl text-slate-700'
                        }`}
                      >
                        <span>{opt}</span>
                        <i className={`fa-solid fa-chevron-right text-[10px] transition-colors ${
                          isDarkMode ? 'text-slate-600 group-hover:text-[#00E5FF]' : 'text-slate-300 group-hover:text-[#28a745]'
                        }`}></i>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFinalSubmit} className="animate-in fade-in zoom-in duration-500 text-center">
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-10 text-3xl transition-all ${
                    isDarkMode ? 'bg-[#00E5FF]/10 text-[#00E5FF]' : 'bg-[#28a745]/10 text-[#28a745]'
                  }`}>
                    <i className="fa-solid fa-clipboard-check"></i>
                  </div>
                  <h3 className={`text-4xl font-black mb-6 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{t.leadFormTitle}</h3>
                  <p className="text-slate-500 mb-12 font-bold leading-relaxed">{t.leadFormSub}</p>
                  
                  <div className="space-y-6 mb-12">
                    <input 
                      required 
                      type="text" 
                      placeholder={t.nameLabel}
                      className={`w-full px-8 py-6 border rounded-[28px] focus:ring-2 focus:outline-none text-lg font-bold transition-all ${
                        isDarkMode 
                          ? 'bg-white/5 border-white/10 text-white focus:ring-[#00E5FF]/30' 
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:ring-[#28a745]/30'
                      }`}
                    />
                    <input 
                      required 
                      type="tel" 
                      placeholder={t.phoneLabel}
                      className={`w-full px-8 py-6 border rounded-[28px] focus:ring-2 focus:outline-none text-lg font-bold transition-all ${
                        isDarkMode 
                          ? 'bg-white/5 border-white/10 text-white focus:ring-[#00E5FF]/30' 
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:ring-[#28a745]/30'
                      }`}
                    />
                  </div>
                  
                  <button type="submit" className={`w-full py-7 text-white rounded-[28px] font-black text-sm uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-95 transition-all ${
                    isDarkMode ? 'bg-gradient-to-r from-blue-600 to-[#00E5FF]' : 'bg-gradient-to-r from-blue-600 to-indigo-700'
                  }`}>
                    {t.submitButton}
                  </button>
                </form>
              )}
            </>
          ) : (
            <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
              <div className={`w-24 h-24 rounded-[40px] flex items-center justify-center mx-auto mb-10 shadow-2xl transform rotate-12 transition-all ${
                isDarkMode ? 'bg-[#00E5FF] text-black shadow-[#00E5FF]/30' : 'bg-[#28a745] text-white'
              }`}>
                <i className="fa-solid fa-check text-5xl"></i>
              </div>
              <h3 className={`text-4xl font-black mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{t.successMessage}</h3>
              <p className="text-xl text-slate-500 font-bold leading-relaxed">
                {t.successDiagnosticSub}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticModal;
