import React, { useMemo } from 'react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { Play, Sparkles, Zap, Palette, Layers, MousePointer2 } from 'lucide-react';
import { useTheme } from '../../App';

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
        <div key={i} className="relative w-full rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 dark:border-white/5 bg-white dark:bg-charcoal group">
          <img src={src} alt="" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
             <span className="text-white text-[10px] font-black uppercase tracking-widest bg-brand px-3 py-1.5 rounded-full">Premium Creative</span>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
);

const Hero: React.FC = () => {
  const { openQuiz, theme } = useTheme();
  const { col1, col2, col3 } = useMemo(() => {
    const shuffled = [...ASSET_POOL].sort(() => Math.random() - 0.5);
    return {
      col1: shuffled.slice(0, 10),
      col2: shuffled.slice(10, 20),
      col3: shuffled.slice(20, 30)
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-navy-900 text-gray-900 dark:text-white pt-32 md:pt-48 pb-16 transition-colors duration-500">
      {/* Visual background elements - Removed rectangular glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="text-center lg:text-left relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-brand/5 dark:bg-white/5 border border-brand/20 dark:border-white/10 backdrop-blur-xl mb-8"
          >
             <Sparkles className="text-brand dark:text-brand-glow" size={16} />
             <span className="text-[10px] md:text-[11px] font-black text-brand dark:text-white tracking-[0.2em] md:tracking-[0.3em] uppercase">Built for ambitious founders</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black text-5xl md:text-7xl xl:text-[6rem] leading-[0.95] tracking-tighter mb-8 md:mb-10 text-gray-900 dark:text-white uppercase"
          >
            Creative <br className="hidden md:block" />
            <span className="text-brand dark:text-brand-glow italic font-serif lowercase tracking-normal">that</span> scales <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-light to-brand-glow dark:from-brand-glow dark:via-white dark:to-brand-glow">Without Limits.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 md:mb-14 leading-relaxed font-sans"
          >
            The execution-focused creative partner for founders. Get a dedicated squad of elite designers for a <span className="text-brand dark:text-white font-bold underline decoration-brand/30 decoration-4 underline-offset-8">flat monthly fee.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-8 mb-16 md:mb-24"
          >
            <button 
              onClick={openQuiz}
              className="w-full sm:w-auto text-[14px] md:text-[15px] px-12 md:px-14 py-6 md:py-7 bg-brand text-white font-black uppercase tracking-widest rounded-full shadow-2xl shadow-brand/20 hover:scale-105 transition-all hover:bg-brand-light"
            >
              Start 7-Day Trial
            </button>
            
            <Button 
              href="/portfolio" 
              variant={theme === 'dark' ? 'outline' : 'secondary'}
              className="w-full sm:w-auto text-[14px] md:text-[15px] px-10 md:px-12 py-6 md:py-7 transition-all border-gray-200 dark:border-white/10"
            >
              <span className="flex items-center gap-3">
                 <Play size={18} className="fill-brand text-brand dark:fill-brand-glow dark:text-brand-glow" />
                 Explore Work
              </span>
            </Button>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.6 }}
             className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-12 text-[9px] md:text-[11px] font-black text-gray-400 dark:text-white/50 uppercase tracking-[0.2em] md:tracking-[0.3em]"
          >
             <div className="flex items-center gap-2 md:gap-4 group">
                <div className="bg-brand/5 dark:bg-brand/10 p-2 rounded-lg text-brand dark:text-brand-glow"><Zap size={18} /></div>
                <span>Unlimited Requests</span>
             </div>
             <div className="flex items-center gap-2 md:gap-4 group">
                <div className="bg-brand/5 dark:bg-brand/10 p-2 rounded-lg text-brand dark:text-brand-glow"><Palette size={18} /></div>
                <span>Premium Quality</span>
             </div>
             <div className="flex items-center gap-2 md:gap-4 group">
                <div className="bg-brand/5 dark:bg-brand/10 p-2 rounded-lg text-brand dark:text-brand-glow"><Layers size={18} /></div>
                <span>Cancel Anytime</span>
             </div>
          </motion.div>
        </div>

        {/* Right Side Waterfall */}
        <div className="hidden lg:flex relative h-[800px] xl:h-[900px] gap-6 xl:gap-8 perspective-2000 -translate-y-16 scale-100">
          <ScrollingColumn items={col1} duration={40} className="w-1/3" />
          <ScrollingColumn items={col2} duration={30} className="w-1/3 mt-16" />
          <ScrollingColumn items={col3} duration={50} className="w-1/3 mt-8" />
          
          {/* Fades at top and bottom for smoother transitions - Removed the absolute top:0 white bar */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-navy-900 to-transparent z-10"></div>
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-16 z-30 bg-white dark:bg-navy-800 p-5 rounded-3xl shadow-2xl flex items-center gap-4 text-navy-900 dark:text-white border border-gray-100 dark:border-white/10"
          >
            <div className="bg-brand p-2 rounded-xl text-white"><MousePointer2 size={18} /></div>
            <div>
              <p className="font-black text-[13px] uppercase tracking-tighter leading-none">High ROI Design</p>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Verified Expert</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;