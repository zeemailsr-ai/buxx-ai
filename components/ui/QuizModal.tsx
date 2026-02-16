import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, CheckCircle2, Sparkles, Send, Rocket, PhoneCall } from 'lucide-react';
import Logo from './Logo';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      submitForm();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChoice = (val: string) => {
    setFormData({ ...formData, [questions[currentStep].key]: val });
    setTimeout(() => handleNext(), 300);
  };

  const submitForm = () => {
    console.log('Form Submitted:', formData);
    
    // Netlify submission
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "buxxai-leads", ...formData })
    })
    .then(() => {
      setIsSubmitted(true);
      if (formData['next-steps']?.includes('Strategy Call')) {
          setTimeout(() => {
              window.location.href = "https://calendly.com/zeemailsr/buxxai-demo-call";
          }, 2000);
      }
    })
    .catch(error => {
        console.error("Submission error:", error);
        alert("There was an error submitting your form. Please try again.");
    });
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-900/90 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col min-h-[500px]"
          >
            {/* Header */}
            <div className="px-8 pt-8 pb-4 flex justify-between items-center border-b border-gray-50">
              <Logo className="h-8" />
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} className="text-gray-400" />
              </button>
            </div>

            {/* Progress Bar */}
            {!isSubmitted && (
              <div className="w-full h-1 bg-gray-100">
                <motion.div 
                  className="h-full bg-brand" 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
            )}

            <div className="flex-grow flex flex-col p-8 md:p-12 overflow-y-auto">
              {!isSubmitted ? (
                <form 
                  name="buxxai-leads" 
                  data-netlify="true" 
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col h-full"
                >
                  {/* Honeypot/Netlify hidden inputs */}
                  <input type="hidden" name="form-name" value="buxxai-leads" />
                  
                  <div className="mb-10">
                    <span className="text-brand font-black text-xs uppercase tracking-[0.2em] mb-3 block">Question {currentStep + 1} of {questions.length}</span>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
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
                        className="w-full text-xl md:text-2xl font-bold border-b-2 border-gray-200 focus:border-brand outline-none pb-4 transition-colors placeholder:text-gray-200 text-gray-900"
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
                        className="w-full text-lg md:text-xl font-medium border-2 border-gray-100 p-6 rounded-2xl focus:border-brand outline-none transition-colors placeholder:text-gray-200 text-gray-900 resize-none"
                        required
                      />
                    )}

                    {questions[currentStep].type === 'choice' && (
                      <div className="grid gap-3">
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
                            className={`w-full text-left p-5 rounded-2xl border-2 transition-all font-bold text-lg flex items-center justify-between group
                              ${formData[questions[currentStep].key] === opt 
                                ? 'border-brand bg-brand/5 text-brand' 
                                : 'border-gray-100 hover:border-brand/40 text-gray-600 hover:bg-gray-50'
                              }`}
                          >
                            {opt}
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                              ${formData[questions[currentStep].key] === opt ? 'border-brand bg-brand text-white' : 'border-gray-200'}
                            `}>
                              {formData[questions[currentStep].key] === opt && <CheckCircle2 size={14} />}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-12 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={handlePrev}
                      disabled={currentStep === 0}
                      className={`flex items-center gap-2 font-black uppercase text-xs tracking-widest transition-opacity ${currentStep === 0 ? 'opacity-0' : 'opacity-40 hover:opacity-100'}`}
                    >
                      <ChevronLeft size={18} /> Back
                    </button>
                    
                    {questions[currentStep].type !== 'choice' && (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="bg-brand text-white px-10 py-4 rounded-full font-black uppercase text-sm tracking-widest flex items-center gap-3 hover:bg-brand-dark transition-all shadow-lg shadow-brand/20 active:scale-95"
                      >
                        {currentStep === questions.length - 1 ? 'Submit' : 'Next'} <ChevronRight size={18} />
                      </button>
                    )}
                  </div>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-24 h-24 bg-brand/10 rounded-full flex items-center justify-center text-brand mb-8 animate-bounce">
                    <Sparkles size={48} />
                  </div>
                  <h2 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Application Received!</h2>
                  <p className="text-xl text-gray-500 max-w-sm mb-10 leading-relaxed">
                    We help ambitious brands scale. Our team is reviewing your details right now.
                  </p>
                  
                  {formData['next-steps']?.includes('Strategy Call') ? (
                    <div className="flex flex-col items-center gap-4">
                       <div className="flex items-center gap-3 text-brand font-black uppercase tracking-widest bg-brand/5 px-6 py-3 rounded-full">
                          <PhoneCall size={18} /> Redirecting to Calendar...
                       </div>
                    </div>
                  ) : (
                    <button
                      onClick={onClose}
                      className="bg-brand text-white px-12 py-5 rounded-full font-black uppercase text-lg tracking-widest hover:bg-brand-dark transition-all"
                    >
                      Close
                    </button>
                  )}
                </motion.div>
              )}
            </div>

            {/* Footer Form Info */}
            {!isSubmitted && (
               <div className="px-12 pb-8 text-center">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-300">buXXai Partner Application • We help ambitious brands scale.</p>
               </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuizModal;