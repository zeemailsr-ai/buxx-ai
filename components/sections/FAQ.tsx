
import React, { useState } from 'react';
import Section from '../ui/Section';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "Is it really unlimited?",
    answer: "Yes. You can add as many requests to your queue as you want. We work through them one by one (or two at a time on the Pro plan) every single business day."
  },
  {
    question: "Who is this for?",
    answer: "Startups, e-commerce brands, and agencies who need consistent, high-quality design and email work without the overhead of a full-time employee."
  },
  {
    question: "How fast is delivery?",
    answer: "Most simple requests are completed in 24-48 hours. Complex projects like full branding or long video edits may take 3-4 days, but we provide daily updates."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. There are no contracts. You can pause or cancel your subscription at any time before the next renewal date."
  },
  {
    question: "Do you handle ESP integrations?",
    answer: "Yes, on our higher tier plans. We work directly inside Klaviyo, Omnisend, or your preferred ESP to build templates and flows as part of our ",
    linkText: "Done For You service.",
    linkHref: "/done-for-you"
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" variant="white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-gray-200 dark:border-navy-700 rounded-xl overflow-hidden transition-colors"
          >
            <button
              className="w-full flex justify-between items-center p-6 text-left bg-gray-50 dark:bg-navy-800 hover:bg-gray-100 dark:hover:bg-navy-700 transition-colors"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-bold text-xl text-gray-900 dark:text-gray-100">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-6 bg-white dark:bg-navy-900 border-t border-gray-100 dark:border-navy-700">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                  {faq.linkText && faq.linkHref && (
                    <Link to={faq.linkHref} className="text-brand dark:text-brand-glow font-bold hover:underline">
                      {faq.linkText}
                    </Link>
                  )}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FAQ;
