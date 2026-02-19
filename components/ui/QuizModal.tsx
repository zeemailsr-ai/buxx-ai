import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, CheckCircle2, Sparkles, Send, Rocket, PhoneCall } from 'lucide-react';
import Logo from './Logo';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CALENDLY_URL = process.env.VITE_CALENDLY_URL || "https://calendly.com/zeemailsr/buxxai-demo-call";
const FORM_NAME = process.env.VITE_FORM_NAME || "buxxai-leads";

const questions = [
  { id: 1, type: 'text', label: 'What is your First & Last Name?', key: 'full-name', placeholder: 'John Doe' },
  { id: 2, type: 'text', label: 'Best Business Email?', key: 'email', placeholder: 'john@company.com' },
  { id: 3, type: 'text', label: 'Company / Brand Name', key: 'company', placeholder: 'Brand Inc.' },
  { id: 4, type: 'text', label: 'Current Website URL (if any)', key: 'website', placeholder: 'https://brand.com' },
  { 
    id: 5, 
    type: 'choice', 
    label: 'Which partnership tier are you interested in?', 
    key: 'tier',
    options: ['Design Only', 'Email Growth', 'The Ultra Bundle', 'One-Time Project'] 
  },
  { id: 6, type: 'textarea', label: 'What is the #1 thing you need us to execute right now?', key: 'message', placeholder: 'Tell us about your biggest design bottleneck...' },
  { 
    id: 7, 
    type: 'choice', 
    label: 'Do you have existing brand assets (Logo, Fonts, Colors)?', 
    key: 'assets-status',
    options: ['Yes, I have a brand guide ready.', 'I have some assets, but they need polish.', 'No, I need you to build this from scratch.'] 
  },
  { 
    id: 8, 
    type: 'choice', 
    label: 'buXXai operates on an Async (No-Meeting) Workflow. Are you comfortable communicating via Trello & Loom videos?', 
    key: 'workflow-comfort',
    options: ['Yes, I prefer speed over meetings.', "I'm not sure (Tell me more)."] 
  },
  { 
    id: 9, 
    type: 'choice', 
    label: 'How do you want to proceed?', 
    key: 'next-steps',
    options: ['🚀 Fast Track: I\'m ready to start. Send me the invoice.', '📞 Strategy Call: I have questions. Book a 15-min chat.'] 
  }
];

const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentStep(0);
      setIsSubmitted(false);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleNext = (updatedData?: Record<string, string>) => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      submitForm(updatedData);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChoice = (val: string) => {
    const newData = { ...formData, [questions[currentStep].key]: val };
    setFormData(newData);
    setTimeout(() => handleNext(newData), 300);
  };

  const submitForm = (finalData?: Record<string, string>) => {
    const dataToSubmit = finalData || formData;
    setIsSubmitting(true);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": FORM_NAME, ...dataToSubmit })
    })
    .then(() => {
      setIsSubmitted(true);
      if (dataToSubmit['next-steps']?.includes('Strategy Call')) {
          setTimeout(() => {
              window.location.href = CALENDLY_URL;
          }, 2000);
      }
    })
    .catch(error => {
        console.error("Submission error:", error);
        // Fallback for non-Netlify environments (like basic Vercel without a backend handler)
        setIsSubmitted(true); 
    })
    .finally(() => setIsSubmitting(false));
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-900/95 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white dark:bg-navy-900 rounded-3xl md:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col min-h-[550px] max-h-[95vh]"
          >
            {/* Header */}
            <div className="px-6 md:px-8 pt-6 md:pt-8 pb-4 flex justify-between items-center border-b border-gray-50 dark:border-navy-800">
              <Logo className="h-6 md:h-8" />
              <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-navy-800 rounded-full transition-colors">
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            {/* Progress Bar */}
            {!isSubmitted && (
              <div className="w-full h-1 bg-gray-100 dark:bg-navy-800">
                <motion.div 
                  className="h-full bg-brand dark:bg-brand-glow" 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
            )}

            <div className="flex-grow flex flex-col p-6 md:p-12 overflow-y-auto custom-scrollbar">
              {!isSubmitted ? (
                <form 
                  name={FORM_NAME} 
                  data-netlify="true" 
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col h-full"
                >
                  <input type="hidden" name="form-name" value={FORM_NAME} />
                  
                  <div className="mb-6 md:mb-10">
                    <span className="text-brand dark:text-brand-glow font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mb-3 block">Question {currentStep + 1} of {questions.length}</span>
                    <h2 className="text-xl md:text-3xl font-black text-gray-900 dark:text-white leading-tight">
                      {questions[currentStep].label}
                    </h2>
                  </div>

                  <div className="flex-grow">
                    {questions[currentStep].type === 'text' && (
                      <input
                        autoFocus
                        type="text"
                        name={questions[currentStep].key}
                        value={formData[questions[currentStep].key] || ''}
                        onChange={(e) => setFormData({ ...formData, [questions[currentStep].key]: e.target.value })}
                        onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                        placeholder={questions[currentStep].placeholder}
                        className="w-full text-lg md:text-2xl font-bold border-b-2 border-gray-200 dark:border-navy-700 focus:border-brand dark:focus:border-brand-glow outline-none pb-4 transition-colors placeholder:text-gray-200 dark:placeholder:text-navy-800 text-gray-900 dark:text-white bg-transparent"
                        required
                      />
                    )}

                    {questions[currentStep].type === 'textarea' && (
                      <textarea
                        autoFocus
                        rows={4}
                        name={questions[currentStep].key}
                        value={formData[questions[currentStep].key] || ''}
                        onChange={(e) => setFormData({ ...formData, [questions[currentStep].key]: e.target.value })}
                        placeholder={questions[currentStep].placeholder}
                        className="w-full text-base md:text-xl font-medium border-2 border-gray-100 dark:border-navy-800 p-4 md:p-6 rounded-2xl focus:border-brand dark:focus:border-brand-glow outline-none transition-colors placeholder:text-gray-200 dark:placeholder:text-navy-800 text-gray-900 dark:text-white bg-transparent resize-none"
                        required
                      />
                    )}

                    {questions[currentStep].type === 'choice' && (
                      <div className="grid gap-2 md:gap-3">
                        <input 
                          type="hidden" 
                          name={questions[currentStep].key} 
                          value={formData[questions[currentStep].key] || ''} 
                        />
                        {questions[currentStep].options?.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleChoice(opt)}
                            className={`w-full text-left p-4 md:p-5 rounded-xl md:rounded-2xl border-2 transition-all font-bold text-sm md:text-lg flex items-center justify-between group
                              ${formData[questions[currentStep].key] === opt 
                                ? 'border-brand dark:border-brand-glow bg-brand/5 dark:bg-brand-glow/10 text-brand dark:text-brand-glow' 
                                : 'border-gray-100 dark:border-navy-800 hover:border-brand/40 dark:hover:border-brand-glow/40 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-navy-800'
                              }`}
                          >
                            <span className="max-w-[85%]">{opt}</span>
                            <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center transition-colors shrink-0
                              ${formData[questions[currentStep].key] === opt ? 'border-brand dark:border-brand-glow bg-brand dark:bg-brand-glow text-white' : 'border-gray-200 dark:border-navy-700'}
                            `}>
                              {formData[questions[currentStep].key] === opt && <CheckCircle2 size={14} />}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-8 md:mt-12 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={handlePrev}
                      disabled={currentStep === 0}
                      className={`flex items-center gap-2 font-black uppercase text-[10px] md:text-xs tracking-widest transition-opacity ${currentStep === 0 ? 'opacity-0' : 'opacity-40 hover:opacity-100 dark:text-white'}`}
                    >
                      <ChevronLeft size={16} /> Back
                    </button>
                    
                    {questions[currentStep].type !== 'choice' && (
                      <button
                        type="button"
                        onClick={() => handleNext()}
                        disabled={isSubmitting}
                        className="bg-brand dark:bg-brand-glow text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-black uppercase text-xs md:text-sm tracking-widest flex items-center gap-3 hover:brightness-110 transition-all shadow-lg shadow-brand/20 active:scale-95 disabled:opacity-50"
                      >
                        {isSubmitting ? 'Processing...' : currentStep === questions.length - 1 ? 'Submit' : 'Next'} <ChevronRight size={16} />
                      </button>
                    )}
                  </div>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center text-center py-6 md:py-10"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-brand/10 dark:bg-brand-glow/20 rounded-full flex items-center justify-center text-brand dark:text-brand-glow mb-6 md:mb-8 animate-bounce">
                    <Sparkles size={40} className="md:w-12 md:h-12" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tighter">Application Received!</h2>
                  <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-sm mb-8 md:mb-10 leading-relaxed">
                    We help ambitious brands scale. Our team is reviewing your details right now.
                  </p>
                  
                  {formData['next-steps']?.includes('Strategy Call') ? (
                    <div className="flex flex-col items-center gap-4">
                       <div className="flex items-center gap-3 text-brand dark:text-brand-glow font-black uppercase tracking-widest bg-brand/5 dark:bg-brand-glow/10 px-6 py-3 rounded-full text-sm">
                          <PhoneCall size={18} /> Redirecting to Calendar...
                       </div>
                    </div>
                  ) : (
                    <button
                      onClick={onClose}
                      className="bg-brand dark:bg-brand-glow text-white px-10 md:px-12 py-4 md:py-5 rounded-full font-black uppercase text-base md:text-lg tracking-widest hover:brightness-110 transition-all"
                    >
                      Close
                    </button>
                  )}
                </motion.div>
              )}
            </div>

            {/* Footer Form Info */}
            {!isSubmitted && (
               <div className="px-6 md:px-12 pb-6 md:pb-8 text-center">
                  <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 dark:text-navy-700">buXXai Partner Application • We help ambitious brands scale.</p>
               </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuizModal;