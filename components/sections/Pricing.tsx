import React from 'react';
import Section from '../ui/Section';
import { Check, Info, Lock, Rocket, BarChart3, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../App';

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
    icon: <Rocket className="w-5 h-5" />,
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
    icon: <BarChart3 className="w-5 h-5" />,
    iconColor: "text-brand dark:text-brand-glow",
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
    icon: <Building2 className="w-5 h-5" />,
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
  <li className={`flex items-start gap-2 text-[13px] md:text-[14px] leading-relaxed font-medium ${feature.locked ? 'text-gray-300 dark:text-navy-600' : 'text-gray-700 dark:text-gray-300'}`}>
    <div className="shrink-0 mt-1">
      {feature.locked ? (
        <Lock size={12} className="text-gray-300 dark:text-navy-600" />
      ) : (
        <Check size={16} className="text-brand dark:text-brand-glow stroke-[3]" />
      )}
    </div>
    <span className="flex-grow">{feature.text}</span>
    {feature.info && (
      <Info size={12} className="text-gray-400 dark:text-navy-500 cursor-help shrink-0 mt-1" />
    )}
  </li>
);

const PricingCard: React.FC<{ plan: PricingPlan; onTrigger: () => void }> = ({ plan, onTrigger }) => (
  <div className={`relative flex flex-col h-full bg-white dark:bg-navy-800 rounded-[2rem] p-8 md:p-10 transition-all duration-300 border border-gray-100 dark:border-navy-700 ${plan.highlight ? 'ring-4 ring-brand/10 dark:ring-brand-glow/10 shadow-2xl scale-[1.02] z-10' : 'shadow-xl hover:shadow-2xl'}`}>
    {plan.tag && (
      <div className="absolute top-6 right-8">
        <span className="bg-brand dark:bg-brand-glow text-white text-[11px] font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
          {plan.tag}
        </span>
      </div>
    )}

    <div className="flex items-center gap-3 mb-8">
      <div className={`p-2.5 rounded-xl bg-gray-50 dark:bg-navy-900 ${plan.iconColor}`}>
        {plan.icon}
      </div>
      <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight">{plan.name}</h3>
    </div>

    <div className="flex items-baseline gap-1 mb-4">
      <span className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white leading-none tracking-tighter">${plan.price}</span>
      <span className="text-gray-400 dark:text-gray-500 text-sm font-black uppercase tracking-widest">/mo</span>
    </div>

    <p className="text-gray-500 dark:text-gray-400 text-[14px] md:text-[15px] leading-relaxed mb-10 min-h-[4.5rem] font-medium">
      {plan.description}
    </p>

    <button 
      onClick={onTrigger}
      className="bg-brand hover:bg-brand-dark text-white font-black text-[15px] rounded-full py-5 mb-12 w-full uppercase tracking-widest shadow-xl shadow-brand/20 transition-all active:scale-95"
    >
      Get Started
    </button>

    <div className="space-y-10">
      <div>
        <h4 className="text-gray-900 dark:text-white text-[11px] font-black uppercase tracking-[0.2em] mb-6 opacity-40">What's included</h4>
        <ul className="space-y-4">
          {plan.services.map((f, i) => <FeatureItem key={i} feature={f} />)}
        </ul>
      </div>

      <div>
        <h4 className="text-gray-900 dark:text-white text-[11px] font-black uppercase tracking-[0.2em] mb-6 opacity-40">Management</h4>
        <ul className="space-y-4">
          {plan.management.map((f, i) => <FeatureItem key={i} feature={f} />)}
        </ul>
      </div>
    </div>
  </div>
);

const Pricing: React.FC = () => {
  const { openQuiz } = useTheme();

  return (
    <Section id="pricing" variant="cream" className="!py-24 md:!py-40 relative">
      <div className="max-w-[1300px] mx-auto relative z-10 px-4 md:px-0">
        <div className="text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand dark:text-brand-glow font-black text-xs uppercase tracking-[0.4em] mb-6 block"
          >
            Flexible Plans
          </motion.span>
          <h2 className="text-gray-900 dark:text-white text-5xl md:text-8xl font-black tracking-tight mb-8 uppercase leading-none">
            <span className="font-serif italic font-normal lowercase tracking-normal text-brand dark:text-brand-glow">Simple</span> pricing
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-2xl font-medium max-w-2xl mx-auto">
            Start your 7-day free trial on any plan today. <br className="hidden md:block" /> Cancel anytime with one click.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <PricingCard plan={plan} onTrigger={openQuiz} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Pricing;