import React, { useMemo } from 'react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { CheckCircle2, Play, Sparkles, Zap, Palette, Layers, MousePointer2 } from 'lucide-react';

// Large pool of high-quality portfolio assets to ensure no visible repetition
const ASSET_POOL = [
  "11cFmW_mmHeDKaX2HkUhA_Lnqx03DXwtp", "1rrF4WBQ-CXRAZnE91mEtWrj0RJ_8vuHz", "1WTaGDpOLPWdVYSJ0WqrLuH5-bLG1roWx", 
  "15Mf1_WZaWdM_fBNjpKgWhidiML45w7BG", "10-Vkxm3MuBR8WYJx4fEEdoEU_kpR-8Go", "1TUJ3x8KxMBHXJpIbTPGjpVIEjB8gBNlg",
  "1mSZ6jWmKAsxr18_CNlxWtu241WVkx-kh", "1acD8kuNgfdK9-3gYoK009Jk35fa_ajD3", "1N6SSA22jhlGN8cZJizCLfEQOm5iP0rVH",
  "1qXG-WSCqFBdu35TK6deroOeJUQaCYr0G", "1gaQy3PPk1fgvQsK4ItloLkOns7kT-3BU", "1BpWeW0L8sYlyeLty9aXfu7xZZF8n2rxI",
  "1whKvGLkCYtKeEWOGzaOeHDuk5sVBkkEr", "1XoiLpx_uOxsCAChx16eT9vQb2861JqDk", "1wr9pq1Am0UjYhFJgN8sJzD8zbWAy7AVE",
  "1ne8JoTjCiQvFGywfbsQZtn21q1X4UHoK", "1rU3RoyvduHb3eQO4_1tWRS-HjV-ERVim", "10PG7mBoGuX9BwQL0Qme6qhrWL05imCMM",
  "15x7IHWwWxk2SluevHr-eXJ5du6YzTpjC", "1j8IlFmXLgycFKu87abDS7IwY577yyMro", "17gNsrDa1s-Q1WIv8Z3qro_Jl8pXGqOJp",
  "1ki5OqTOpdCqVoskDNc47k0ZV799lwwLc", "1VYdnuR9sGR9FbvMXpyyHZ484DvrrGXt8", "17eBX8jhL5k6dw7KvhqNaXbn2vvZguU1Z",
  "1Zu4Jrk9eCM5wjZpZ_1rXYqw2Xl2G1Ytv", "1hqgTtk1PpIFYMFSb2m5CWdjzlkI67k_P", "1U4Ja4GyQLChkHaNtc-3driQTOX32R0Ly",
  "1DLefeom72YINvOWa-DRAwdC575Be-UuQ", "1k1dlN9aW8awB4kXdBzt6iQpeRjKdjXsz", "1MBdEMG_qKYmZabKIA_KjGysJVw-fYe4Q"
].map(id => `https://lh3.googleusercontent.com/d/${id}`);

const ScrollingColumn = ({ items, duration, className = "" }: { items: string[], duration: number, className?: string }) => (
  <div className={`flex flex-col gap-8 ${className}`}>
    <motion.div
      initial={{ y: "0%" }}
      animate={{ y: "-50%" }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      className="flex flex-col gap-8"
    >
      {[...items, ...items].map((src, i) => (
        <div key={i} className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-charcoal group">
          <img src={src} alt="" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
             <span className="text-white text-xs font-black uppercase tracking-widest bg-brand px-3 py-1.5 rounded-full">Premium Creative</span>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
);

const Hero: React.FC = () => {
  // Memoize randomized column sets to prevent visible duplicates in the same frame
  const { col1, col2, col3 } = useMemo(() => {
    const shuffled = [...ASSET_POOL].sort(() => Math.random() - 0.5);
    return {
      col1: shuffled.slice(0, 10),
      col2: shuffled.slice(10, 20),
      col3: shuffled.slice(20, 30)
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-900 text-white pt-44 md:pt-56 pb-24">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-glow/5 blur-[200px] rounded-full pointer-events-none"></div>

      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-8 md:px-16 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Bold Messaging */}
        <div className="text-left relative">
          
          {/* Top Doodle: Curved Arrow */}
          <div className="absolute -top-16 -left-12 hidden xl:block opacity-30 text-brand-glow">
            <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
              <path d="M5 55C25 45 45 10 115 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 6"/>
              <path d="M108 12L115 5L108 -2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl mb-10"
          >
             <Sparkles className="text-brand-glow" size={16} />
             <span className="text-[11px] font-black text-white tracking-[0.3em] uppercase">Built for ambitious brands</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black text-6xl md:text-8xl xl:text-[7rem] leading-[0.85] tracking-tighter mb-10 text-white uppercase"
          >
            Creative <br/>
            <span className="text-brand-glow italic font-serif lowercase tracking-normal">that</span> scales <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-glow via-white to-brand-glow">Without Limits.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-xl mb-14 leading-relaxed font-sans font-medium"
          >
            The execution-focused creative partner for founders. Get a dedicated squad of elite designers for a <span className="text-white font-bold underline decoration-brand-glow/40 decoration-4 underline-offset-8">flat monthly fee.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-8 mb-24"
          >
            <Button 
              href="/pricing" 
              className="w-full sm:w-auto text-[15px] px-14 py-7 shadow-[0_25px_60px_-10px_rgba(125,24,46,0.5)] hover:scale-105 transition-all hover:bg-brand-light"
            >
              Start 7-Day Trial
            </Button>
            
            <Button 
              href="/portfolio" 
              variant="outline"
              className="w-full sm:w-auto text-[15px] px-12 py-7 backdrop-blur-md border-white/10 hover:border-brand-glow transition-all"
            >
              <span className="flex items-center gap-3">
                 <Play size={20} className="fill-brand-glow text-brand-glow" />
                 Explore Work
              </span>
            </Button>
          </motion.div>

          {/* Social Proof Badges with Professional Doodles */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.6 }}
             className="relative flex flex-wrap gap-12 text-[11px] font-black text-white/50 uppercase tracking-[0.3em]"
          >
             <div className="flex items-center gap-4 hover:text-white transition-colors cursor-default group">
                <div className="bg-brand/10 p-2 rounded-lg text-brand-glow"><Zap size={20} /></div>
                <span>Unlimited Requests</span>
             </div>
             <div className="flex items-center gap-4 hover:text-white transition-colors cursor-default group">
                <div className="bg-brand/10 p-2 rounded-lg text-brand-glow"><Palette size={20} /></div>
                <span>Premium Quality</span>
             </div>
             <div className="flex items-center gap-4 hover:text-white transition-colors cursor-default group">
                <div className="bg-brand/10 p-2 rounded-lg text-brand-glow"><Layers size={20} /></div>
                <span>Cancel Anytime</span>
             </div>

             {/* Bottom Doodle: Handdrawn circle around text */}
             <div className="absolute -bottom-16 right-0 opacity-20 pointer-events-none">
                <svg width="150" height="60" viewBox="0 0 150 60">
                   <path d="M10,30 C30,5 120,5 140,30 C130,55 20,55 10,30" stroke="white" strokeWidth="2" fill="none" strokeDasharray="3 5"/>
                </svg>
             </div>
          </motion.div>
        </div>

        {/* Right Side: Flowing Creative Waterfall (Top to Down) */}
        <div className="hidden lg:flex relative h-[1000px] gap-8 perspective-2000 -translate-y-24 rotate-[2deg] scale-110">
          
          <ScrollingColumn 
            items={col1} 
            duration={45} 
            className="w-1/3" 
          />
          <ScrollingColumn 
            items={col2} 
            duration={35} 
            className="w-1/3 mt-24" 
          />
          <ScrollingColumn 
            items={col3} 
            duration={55} 
            className="w-1/3 mt-12" 
          />

          {/* Gradient Masks for Seamless Waterfall Effect */}
          <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-navy-900 via-navy-900/40 to-transparent z-10"></div>
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent z-10"></div>
          
          {/* Floating UI Callouts with Doodles */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-16 z-30 bg-white p-5 rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.3)] flex items-center gap-4 text-navy-900 border border-white/20"
          >
            <div className="bg-brand p-2.5 rounded-xl text-white shadow-lg"><MousePointer2 size={20} /></div>
            <div>
              <p className="font-black text-[13px] uppercase tracking-tighter leading-none">High ROI Design</p>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Verified Expert</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: 1, ease: "easeInOut" }}
            className="absolute bottom-1/4 -right-12 z-30 bg-white p-5 rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.3)] flex items-center gap-4 text-navy-900 border border-white/20"
          >
            <div className="bg-emerald-500 p-2.5 rounded-xl text-white shadow-lg"><Zap size={20} /></div>
            <div>
              <p className="font-black text-[13px] uppercase tracking-tighter leading-none">Fast Turnaround</p>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Daily Delivery</p>
            </div>
          </motion.div>
          
          {/* Professional Doodle: Geometric Shape */}
          <div className="absolute -bottom-20 -left-20 w-48 h-48 border border-white/5 rounded-full animate-[spin_30s_linear_infinite] pointer-events-none">
             <div className="absolute top-0 left-1/2 w-2 h-2 bg-brand-glow rounded-full"></div>
          </div>
        </div>

      </div>

      {/* Side Decorative Accent */}
      <div className="absolute bottom-20 left-12 hidden xl:flex items-center gap-6 opacity-20 hover:opacity-100 transition-opacity">
        <div className="h-0.5 w-24 bg-white"></div>
        <span className="text-[10px] font-black uppercase tracking-[0.5em] vertical-text">Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;