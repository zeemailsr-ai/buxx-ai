
import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Check, Info, Lock, Rocket, BarChart3, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface PlanFeature {
  text: string;
  info?: boolean;
  locked?: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
  tag?: string;
  services: PlanFeature[];
  management: PlanFeature[];
  highlight?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Business",
    price: "499",
    description: "For SMB's & Startups looking for a creative extension of their team.",
    icon: <Rocket className="w-6 h-6" />,
    iconColor: "text-emerald-500",
    services: [
      { text: "Branding & logos" },
      { text: "Illustrations" },
      { text: "Email & Newsletters" },
      { text: "Product & packaging designs" },
      { text: "Print designs" },
      { text: "Social media content" },
      { text: "Additional design services", info: true },
    ],
    management: [
      { text: "1 project at a time", info: true },
      { text: "1 day delivery", info: true },
      { text: "Self managed", info: true },
      { text: "Quality control manager", locked: true, info: true },
      { text: "Art director", locked: true, info: true },
    ]
  },
  {
    name: "Marketing & Ads",
    price: "995",
    tag: "Best value",
    description: "For teams looking creative geniuses to power their marketing & advertising campaigns.",
    icon: <BarChart3 className="w-6 h-6" />,
    iconColor: "text-pink-500",
    highlight: true,
    services: [
      { text: "Everything in Business" },
      { text: "Canva templates" },
      { text: "Infographics" },
      { text: "Ad creatives", info: true },
      { text: "Hand-drawn illustrations" },
      { text: "Presentations & pitch decks" },
      { text: "Web design (Figma)" },
    ],
    management: [
      { text: "2 projects at a time", info: true },
      { text: "1 day delivery", info: true },
      { text: "Fully managed", info: true },
      { text: "Quality control manager", info: true },
      { text: "Art director", locked: true, info: true },
    ]
  },
  {
    name: "Agency",
    price: "1,497",
    description: "For Agencies looking to outsource client projects & expand their team.",
    icon: <Building2 className="w-6 h-6" />,
    iconColor: "text-indigo-400",
    services: [
      { text: "Everything in Marketing & Ads" },
      { text: "Animations" },
      { text: "Motion graphics" },
      { text: "Reels & Short form videos", info: true },
      { text: "Instagram/FB Reels", info: true },
      { text: "Tiktok & Youtube shorts", info: true },
      { text: "Video repurposing", info: true },
    ],
    management: [
      { text: "2 projects at a time", info: true },
      { text: "Same day delivery", info: true },
      { text: "Dedicated team", info: true },
      { text: "Quality control manager", info: true },
      { text: "Art director", info: true },
    ]
  }
];

const FeatureItem: React.FC<{ feature: PlanFeature }> = ({ feature }) => (
  <li className={`flex items-center gap-2 text-[14px] leading-relaxed font-medium ${feature.locked ? 'text-gray-300' : 'text-gray-700'}`}>
    <div className="shrink-0">
      {feature.locked ? (
        <Lock size={14} className="text-gray-300" />
      ) : (
        <Check size={18} className="text-brand stroke-[3]" />
      )}
    </div>
    <span className="flex-grow">{feature.text}</span>
    {feature.info && (
      <Info size={14} className="text-gray-400 cursor-help shrink-0" />
    )}
  </li>
);

const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => (
  <div className={`relative flex flex-col bg-white rounded-[20px] p-8 md:p-10 transition-all duration-300 ${plan.highlight ? 'ring-4 ring-brand/10 shadow-2xl scale-[1.02] z-10' : 'shadow-xl'}`}>
    {plan.tag && (
      <div className="absolute top-6 right-6">
        <span className="bg-emerald-500 text-white text-[12px] font-bold px-3 py-1 rounded-md">
          {plan.tag}
        </span>
      </div>
    )}

    <div className="flex items-center gap-2 mb-6">
      <div className={plan.iconColor}>{plan.icon}</div>
      <h3 className="text-[20px] font-bold text-gray-900">{plan.name}</h3>
    </div>

    <div className="flex items-baseline gap-1 mb-2">
      <span className="text-[44px] font-bold text-gray-900 leading-none tracking-tight">${plan.price}</span>
      <span className="text-gray-400 text-sm font-medium">/month</span>
    </div>

    <p className="text-gray-500 text-[15px] leading-relaxed mb-8 min-h-[4.5rem]">
      {plan.description}
    </p>

    <Button 
      href="https://calendly.com/zeemailsr/buxxai-demo-call" 
      variant="primary" 
      className="!bg-brand hover:!bg-brand-dark text-white font-bold text-[16px] rounded-lg py-3.5 mb-10 w-full tracking-normal capitalize"
    >
      Choose plan
    </Button>

    <div className="space-y-8">
      <div>
        <h4 className="text-gray-900 text-[13px] font-black uppercase tracking-[0.05em] mb-4">Services</h4>
        <ul className="space-y-3.5">
          {plan.services.map((f, i) => <FeatureItem key={i} feature={f} />)}
        </ul>
      </div>

      <div>
        <h4 className="text-gray-900 text-[13px] font-black uppercase tracking-[0.05em] mb-4">Management</h4>
        <ul className="space-y-3.5">
          {plan.management.map((f, i) => <FeatureItem key={i} feature={f} />)}
        </ul>
      </div>
    </div>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <Section id="pricing" variant="white" className="!bg-[#0D011D] !py-24 md:!py-32 relative">
      {/* Decorative Illustrations */}
      <div className="absolute left-4 top-24 md:left-10 md:top-40 w-32 md:w-56 opacity-80 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 80H160V120H40V80Z" fill="white" stroke="#333" strokeWidth="2" />
          <rect x="50" y="85" width="5" height="30" fill="#333" />
          <rect x="65" y="85" width="5" height="30" fill="#333" />
          <rect x="80" y="85" width="5" height="30" fill="#333" />
          <rect x="115" y="85" width="5" height="30" fill="#333" />
          <rect x="130" y="85" width="5" height="30" fill="#333" />
          <rect x="145" y="85" width="5" height="30" fill="#333" />
          <circle cx="100" cy="100" r="30" fill="#7d182e" stroke="#333" strokeWidth="3" />
          <circle cx="100" cy="100" r="12" fill="#F472B6" />
          <path d="M90 130L85 160M110 130L115 160" stroke="white" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      <div className="absolute right-4 bottom-20 md:right-10 md:bottom-40 w-24 md:w-48 opacity-80 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 30C20 40 10 70 30 110C40 130 80 140 110 120C130 100 140 60 120 30C100 10 60 20 40 30Z" fill="#7d182e" stroke="white" strokeWidth="3" />
          <circle cx="50" cy="60" r="6" fill="white" opacity="0.4" />
          <circle cx="80" cy="40" r="4" fill="white" opacity="0.4" />
          <circle cx="110" cy="70" r="8" fill="white" opacity="0.4" />
          <circle cx="70" cy="100" r="5" fill="white" opacity="0.4" />
          <circle cx="100" cy="110" r="7" fill="white" opacity="0.4" />
        </svg>
      </div>

      <div className="max-w-[1240px] mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="font-serif italic font-normal">Simple</span> pricing
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium">
            Subscribe and save thousands on graphic design services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PricingCard plan={plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
