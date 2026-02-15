
import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import CTA from '../sections/CTA';
import EmailScrollCard from '../ui/EmailScrollCard';
import { motion } from 'framer-motion';
import { Check, X, User, PenTool, BarChart3, Mail, Zap, Target, Layout, Users, Clock, ShieldCheck, ArrowDown } from 'lucide-react';

const CALENDLY_LINK = "https://calendly.com/zeemailsr/buxxai-demo-call";

const stats = [
  { label: "Trusted by", value: "400+", sub: "brands" },
  { label: "Average ROI", value: "22X", sub: "generated" },
  { label: "Email Revenue", value: "$105M", sub: "in 2024" },
];

const emailDesigns = [
  "11cFmW_mmHeDKaX2HkUhA_Lnqx03DXwtp",
  "1rrF4WBQ-CXRAZnE91mEtWrj0RJ_8vuHz",
  "1WTaGDpOLPWdVYSJ0WqrLuH5-bLG1roWx",
  "15Mf1_WZaWdM_fBNjpKgWhidiML45w7BG",
  "10-Vkxm3MuBR8WYJx4fEEdoEU_kpR-8Go",
  "1TUJ3x8KxMBHXJpIbTPGjpVIEjB8gBNlg",
  "1mSZ6jWmKAsxr18_CNlxWtu241WVkx-kh",
  "1acD8kuNgfdK9-3gYoK009Jk35fa_ajD3",
  "1N6SSA22jhlGN8cZJizCLfEQOm5iP0rVH",
  "1qXG-WSCqFBdu35TK6deroOeJUQaCYr0G",
  "1gaQy3PPk1fgvQsK4ItloLkOns7kT-3BU",
  "1BpWeW0L8sYlyeLty9aXfu7xZZF8n2rxI",
  "19iJm6IcRxbSRVmPv1UoEZn9BsZGWDG5u",
  "1yObFx67ETqR_PgS7WjqNBm6bBpU3yH86",
  "1hawK3DrQoKktIyp-UD20pI3nuTbnt9Ch",
  "1bRbKAJXpf5oa8u6taNM_OVElOIGrqs_V",
  "15jDd2OsJuKH5efgRy17bQIEEcLyg1Sa3",
  "1UUqEzfrnoPl1F1baJS3-mfSTc2j5EbrW",
  "1df7g5y_9uWY8z3rLM0Va4hdP0X1zPnk7",
  "1HsOggKIT8VTffPpiZ121VMhs1eg7D8rr",
  "15aIWlpKyc8f2VZTu1X5BzgnEM-rgVU9l",
  "1I1i6KfA7bGTqkZEKf7fGo3RcoPiUneKU",
  "1R9WlLuN-yhzm5hqucTnm8hgABv9Q9afA",
  "1nFDBIWZ6wRs2oJUuLPcycbEkEWlLCOUF",
  "1fsrkcAIQamKFUaqJ1fQDanmYzoIkCvss"
].map(id => `https://lh3.googleusercontent.com/d/${id}`);

const teamRoles = [
  {
    role: "Account Manager",
    desc: "The strategic lead on your account. They manage timelines, align goals, and ensure everything runs smoothly from kickoff to reporting.",
    color: "bg-brand/10 text-brand",
    icon: <User size={48} />
  },
  {
    role: "Copywriter",
    desc: "Responsible for crafting persuasive, on-brand messaging. From subject lines to automations, they drive conversions with words.",
    color: "bg-brand/10 text-brand",
    icon: <PenTool size={48} />
  },
  {
    role: "Designer",
    desc: "Creates visually compelling, trend-aware, and mobile-optimized emails that elevate your brand and guide the reader's eye.",
    color: "bg-brand/10 text-brand",
    icon: <Layout size={48} />
  },
  {
    role: "Technical Specialist",
    desc: "Handles the ESP setup, segmentations, deliverability monitoring, and ensures the tech stack is performing perfectly.",
    color: "bg-brand/10 text-brand",
    icon: <Zap size={48} />
  }
];

const DoneForYou: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 px-6 overflow-hidden bg-brand text-white">
        <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-brand-light opacity-30 blur-[180px] rounded-full animate-blob pointer-events-none"></div>

        <div className="relative z-10 max-w-[1800px] mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-8xl font-black leading-[1.05] mb-10 uppercase tracking-tighter"
          >
            DONE-FOR-YOU <br/>
            EMAIL MARKETING SERVICES, <br/>
            <span className="text-brand-glow">BUILT TO SCALE.</span>
          </motion.h1>
          
          <motion.p 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-2xl md:text-3xl text-gray-200 mb-16 max-w-4xl mx-auto leading-relaxed"
          >
            Turning email lists into loyal customers through precision strategy, world-class creative, and a tech stack built for performance.
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="flex justify-center gap-6 mb-24"
          >
             <Button href={CALENDLY_LINK} target="_blank" variant="white" className="shadow-xl shadow-brand-dark/20 text-xl px-12 py-6">
               Schedule a Conversation
             </Button>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white text-gray-900 p-10 rounded-2xl shadow-lg border-b-4 border-brand-light hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex flex-col items-center">
                   <span className="text-brand-vivid font-black text-6xl font-display mb-3 tracking-tighter">{stat.value}</span>
                   <span className="text-gray-900 font-black text-2xl uppercase tracking-widest">{stat.label}</span>
                   <span className="text-gray-500 text-sm uppercase tracking-[0.3em] font-black mt-2">{stat.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Visual Marquee */}
      <section className="py-24 bg-cream-50 dark:bg-navy-900 border-b border-gray-200 dark:border-navy-700 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
           <h3 className="text-4xl font-black text-brand dark:text-brand-glow font-display mb-2 uppercase tracking-tighter">Premium Designs</h3>
           <p className="text-gray-500 dark:text-gray-400 text-xl">Tap any design to watch it flow.</p>
        </motion.div>
        
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-10 animate-scroll w-max hover:[animation-play-state:paused] px-8">
            {[...emailDesigns, ...emailDesigns].map((src, i) => (
              <div key={i} className="inline-block w-[400px] h-[700px] flex-shrink-0">
                <EmailScrollCard 
                  src={src} 
                  alt={`Email Example ${i}`} 
                  className="w-full h-full shadow-lg"
                  aspectRatio="aspect-none"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Team Structure */}
      <Section variant="cream">
         <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="font-display text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 uppercase tracking-tighter"
            >
              Meet Your Dedicated <br/><span className="text-brand">Strategy Team</span>
            </motion.h2>
         </div>
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1700px] mx-auto">
            {teamRoles.map((role, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: i * 0.1 }}
                 className="bg-white dark:bg-navy-800 p-10 rounded-[2rem] border border-gray-100 dark:border-navy-700 text-center hover:shadow-xl transition-shadow"
               >
                  <div className={`w-28 h-28 mx-auto rounded-full flex items-center justify-center mb-10 ${role.color}`}>
                     {role.icon}
                  </div>
                  <h3 className="font-black font-display text-3xl mb-5 text-gray-900 dark:text-white uppercase tracking-tighter">{role.role}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">{role.desc}</p>
               </motion.div>
            ))}
         </div>
      </Section>
      
      <CTA />
    </div>
  );
};

export default DoneForYou;
