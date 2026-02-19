import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, CheckCircle2, Sparkles, PhoneCall } from 'lucide-react';
import Logo from './Logo';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Environment Variables defined for Vercel visibility
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
    label: 'How do you want to proceed?', 
    key: 'next-steps',
    options: ['🚀 Fast Track: I\'m ready to start.', '📞 Strategy Call: I have questions.'] 
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
    
    // Simulating Netlify/Vercel form handling
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": FORM_NAME, ...dataToSubmit })
    })
    .finally(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      if (dataToSubmit['next-steps']?.includes('Strategy Call')) {
          setTimeout(() => {
              window.location.href = CALENDLY_URL;
          }, 1500);
      }
    });
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-900/90 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white dark:bg-navy-800 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col min-h-[500px]"
          >
            {/* Header */}
            <div className="px-8 pt-8 pb-4 flex justify-between items-center border-b border-gray-100 dark:border-white/5">
              <Logo className="h-8" />
              <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors">
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            {/* Progress */}
            {!isSubmitted && (
              <div className="w-full h-1 bg-gray-100 dark:bg-navy-900">
                <motion.div className="h-full bg-brand dark:bg-brand-glow" animate={{ width: `${progress}%` }} />
              </div>
            )}

            <div className="flex-grow p-8 md:p-12">
              {!isSubmitted ? (
                <div className="flex flex-col h-full">
                  <div className="mb-10">
                    <span className="text-brand dark:text-brand-glow font-black text-xs uppercase tracking-[0.2em] mb-3 block opacity-60">Step {currentStep + 1}</span>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white leading-tight uppercase tracking-tight">
                      {questions[currentStep].label}
                    </h2>
                  </div>

                  <div className="flex-grow">
                    {questions[currentStep].type === 'text' && (
                      <input
                        autoFocus
                        type="text"
                        value={formData[questions[currentStep].key] || ''}
                        onChange={(e) => setFormData({ ...formData, [questions[currentStep].key]: e.target.value })}
                        onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                        placeholder={questions[currentStep].placeholder}
                        className="w-full text-2xl font-bold border-b-2 border-gray-200 dark:border-white/10 focus:border-brand dark:focus:border-brand-glow outline-none pb-4 bg-transparent text-gray-900 dark:text-white"
                      />
                    )}

                    {questions[currentStep].type === 'choice' && (
                      <div className="grid gap-3">
                        {questions[currentStep].options?.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleChoice(opt)}
                            className="w-full text-left p-5 rounded-2xl border-2 border-gray-100 dark:border-white/10 hover:border-brand dark:hover:border-brand-glow hover:bg-brand/5 transition-all font-bold text-gray-700 dark:text-gray-300 flex items-center justify-between group"
                          >
                            {opt}
                            <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-all" />
                          </button>
                        ))}
                      </div>
                    )}

                    {questions[currentStep].type === 'textarea' && (
                      <textarea
                        autoFocus
                        rows={4}
                        value={formData[questions[currentStep].key] || ''}
                        onChange={(e) => setFormData({ ...formData, [questions[currentStep].key]: e.target.value })}
                        placeholder={questions[currentStep].placeholder}
                        className="w-full text-lg border-2 border-gray-100 dark:border-white/10 p-5 rounded-2xl focus:border-brand outline-none bg-transparent text-gray-900 dark:text-white"
                      />
                    )}
                  </div>

                  <div className="mt-10 flex justify-between items-center">
                    <button
                      onClick={handlePrev}
                      className={`text-xs font-black uppercase tracking-widest text-gray-400 hover:text-brand transition-colors ${currentStep === 0 ? 'invisible' : ''}`}
                    >
                      Back
                    </button>
                    {questions[currentStep].type !== 'choice' && (
                      <button
                        onClick={() => handleNext()}
                        className="bg-brand text-white px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest shadow-xl shadow-brand/20 active:scale-95 transition-all"
                      >
                        Next <ChevronRight size={14} className="inline ml-2" />
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-10 h-full">
                  <div className="w-20 h-20 bg-brand/10 dark:bg-brand-glow/20 rounded-full flex items-center justify-center text-brand dark:text-brand-glow mb-8 animate-bounce">
                    <Sparkles size={40} />
                  </div>
                  <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tighter">Application Sent!</h2>
                  <p className="text-lg text-gray-500 dark:text-gray-400 max-w-sm mb-10 leading-relaxed">
                    Our team is reviewing your profile. We'll reach out within 24 hours.
                  </p>
                  <button onClick={onClose} className="bg-brand text-white px-12 py-5 rounded-full font-black uppercase text-sm tracking-widest transition-all">
                    Back to Home
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuizModal;