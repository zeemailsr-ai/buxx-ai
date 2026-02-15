
import React, { useMemo } from 'react';
import Section from '../ui/Section';
import { ArrowUpRight, Zap, Palette, Video, Layout, Shirt, Megaphone, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const categories = [
  { id: 'branding', label: 'Logo & Branding' },
  { id: 'web', label: 'Web Design' },
  { id: 'illustration', label: 'Illustrations' },
  { id: 'social', label: 'Social Media' },
  { id: 'merch', label: 'Merch' },
  { id: 'ads', label: 'Digital Ads' },
];

// --- Shared Data Source (Mirrors PortfolioPage) ---

const emailImages = [
  "11cFmW_mmHeDKaX2HkUhA_Lnqx03DXwtp",
  "1rrF4WBQ-CXRAZnE91mEtWrj0RJ_8vuHz",
  "1WTaGDpOLPWdVYSJ0WqrLuH5-bLG1roWx",
  "15Mf1_WZaWdM_fBNjpKgWhidiML45w7BG",
  "10-Vkxm3MuBR8WYJx4fEEdoEU_kpR-8Go",
].map(id => `https://lh3.googleusercontent.com/d/${id}`);

const brandingImages = [
  "1whKvGLkCYtKeEWOGzaOeHDuk5sVBkkEr",
  "1XoiLpx_uOxsCAChx16eT9vQb2861JqDk",
  "1wr9pq1Am0UjYhFJgN8sJzD8zbWAy7AVE",
  "1ne8JoTjCiQvFGywfbsQZtn21q1X4UHoK",
  "1rU3RoyvduHb3eQO4_1tWRS-HjV-ERVim",
  "10PG7mBoGuX9BwQL0Qme6qhrWL05imCMM",
  "15x7IHWwWxk2SluevHr-eXJ5du6YzTpjC",
  "1j8IlFmXLgycFKu87abDS7IwY577yyMro",
  "17gNsrDa1s-Q1WIv8Z3qro_Jl8pXGqOJp",
  "1ki5OqTOpdCqVoskDNc47k0ZV799lwwLc",
  "1VYdnuR9sGR9FbvMXpyyHZ484DvrrGXt8",
  "17eBX8jhL5k6dw7KvhqNaXbn2vvZguU1Z",
  "1nncRuoX0FsPLEYI7CTUFh4hP-qV8pUBf",
  "15VC8BD3Foeit2Uzmsl9FlEa_DUqkz0-U",
  "1mUT4zYbUkByhE8VGRh6onkOgBvMRMvcB",
  "1TBybfG0kSdrzcvoRusjJAhXqdb2KYzIu",
  "1UxhASi_LO1X0gif8F9EEsaUsi0fEaPYC",
  "1i9FTqDW_KN3cN3_v_XrS-oKZomBBC-hp",
  "1n_1iQHu5iH6ofyXpZqepCA1tu7MWzD7p",
  "1D64rgp5EsmDZwYsdwefxDGFoMay3PxJB",
  "1csRFzxLwD31x1-kOp6k8bqJYKh04BcHA", 
  "1mHedWhs6tMP_o-_BaL09TCSSVzMYO5pO", 
  "1qSei-_XzbJGuhpwzjc7Mf5XZ44LzGx2V", 
  "1OzrfIrrTR9RXv5r-Vbl7Ig3n9li1I1ar", 
  "https://images.unsplash.com/photo-1572044162444-ad60f128bde7?auto=format&fit=crop&w=800&q=80", 
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80", 
  "13NV8_vBvRJpKfppStW_y63npwdrcotfq", 
  "1HS-2YE-RmSECnEvBtbMXbHAEZ9E0mfJG", 
  "1_1yGcgO4TC0vFNhaAr_ksMHNQ-lC34xQ", 
  "1ZwVMtQ1MwlAoQ6bANhIko5XUR26tqNzY", 
  "1CqbfzzxL-L5l7ZDLnW-c_Tb1Xc7Tpn1H",
  "1gVbaalFGYLidru1FOuBrMrlAmMqWRXIm",
  "1Zu4Jrk9eCM5wjZpZ_1rXYqw2Xl2G1Ytv",
  "1hqgTtk1PpIFYMFSb2m5CWdjzlkI67k_P",
].map(id => id.startsWith('http') ? id : `https://lh3.googleusercontent.com/d/${id}`);

const webImages = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80',
];

const illustrationImages = [
  "15W-28JilDiVB6YRKoYjAMigPvHduWt1t",
  "1-nQds0u1vysN6a-Z-HpYeXNgXYEMhJkN",
  "1F2FZqrlf0e4DLHbRicNEu00-OBitV-4Z",
  "1jDUJemhqL5zaKmQ9QRo1JUvOQRlCvB3J",
  'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80',
].map(id => id.startsWith('http') ? id : `https://lh3.googleusercontent.com/d/${id}`);

const socialImages = [
  'https://lh3.googleusercontent.com/d/1aCC1t5ihkCy-_jRkQb3fKHzVGDLC1jK7',
  'https://lh3.googleusercontent.com/d/1l2XU5FPp080G8O7Px4P0QVUGO9Tz_cen',
  'https://lh3.googleusercontent.com/d/1qoNKa-7gw3zqirLxtilfqX_YMuPIr1iz',
  'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=600&q=80',
];

const merchImages = [
  "1ki5OqTOpdCqVoskDNc47k0ZV799lwwLc",
  "1wr9pq1Am0UjYhFJgN8sJzD8zbWAy7AVE",
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?auto=format&fit=crop&w=600&q=80',
].map(id => id.startsWith('http') ? id : `https://lh3.googleusercontent.com/d/${id}`);

const adsImages = [
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=600&q=80',
];

// Helper to generate items with linked categories
const generateItems = (baseId: number, categoryId: string, categoryLabel: string, titleBase: string, images: string[], count: number, icon: React.ReactNode, accent: string, bg: string) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: baseId + i,
    category: categoryLabel,
    title: `${titleBase} ${i + 1}`,
    subtitle: categoryId === 'email' ? 'Klaviyo Flow' : 'Visual Identity',
    image: images[i % images.length],
    icon,
    accent,
    bg,
    link: `/portfolio?category=${categoryId}`
  }));
};

const PortfolioCard: React.FC<{ item: any }> = ({ item }) => (
  <Link 
    to={item.link}
    className="group relative flex-shrink-0 w-[320px] h-[420px] md:w-[440px] md:h-[550px] rounded-[32px] overflow-hidden cursor-pointer mx-3 md:mx-4 border border-white/5 bg-charcoal shadow-2xl transition-transform duration-500 hover:-translate-y-2"
  >
    {/* Image Container */}
    <div className="absolute inset-0 z-0">
      <img 
        src={item.image} 
        alt={item.title} 
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      {/* Dynamic Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-90"></div>
    </div>

    {/* Top Badge Overlay */}
    <div className="absolute top-6 left-6 z-20">
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] backdrop-blur-xl border border-white/10 ${item.bg} ${item.accent} shadow-xl`}>
        {item.icon}
        {item.category}
      </div>
    </div>

    {/* Content Container (Bottom) */}
    <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 z-20">
      <div className="flex flex-col gap-1">
        <h3 className="text-white font-display text-2xl md:text-4xl font-black leading-tight tracking-tight group-hover:text-brand-glow transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm md:text-base font-bold uppercase tracking-widest opacity-80">
          {item.subtitle}
        </p>
      </div>
      
      {/* Interactive Indicator */}
      <div className="mt-6 flex items-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
         <div className="h-[2px] w-12 bg-brand-glow"></div>
         <span className="text-white text-xs font-black uppercase tracking-widest">View Project</span>
      </div>
    </div>
  </Link>
);

const Portfolio: React.FC = () => {
  const navigate = useNavigate();

  const allProjects = useMemo(() => {
    const items = [
      ...generateItems(100, 'branding', 'Branding', 'Brand Kit', brandingImages, brandingImages.length, <Palette size={14} />, "text-purple-400", "bg-purple-500/20"),
      ...generateItems(700, 'email', 'Email Design', 'Email Campaign', emailImages, 5, <Zap size={14} />, "text-blue-400", "bg-blue-500/20"),
      ...generateItems(200, 'web', 'Web Design', 'Web UI', webImages, 2, <Layout size={14} />, "text-cyan-400", "bg-cyan-500/20"),
      ...generateItems(400, 'social', 'Social Media', 'Social Creative', socialImages, socialImages.length, <Video size={14} />, "text-pink-400", "bg-pink-500/20"),
      ...generateItems(500, 'merch', 'Merch', 'Merch Item', merchImages, merchImages.length, <Shirt size={14} />, "text-yellow-400", "bg-yellow-500/20"),
      ...generateItems(600, 'ads', 'Digital Ads', 'Ad Creative', adsImages, 2, <Megaphone size={14} />, "text-red-400", "bg-red-500/20"),
      ...generateItems(300, 'illustration', 'Illustration', 'Art Piece', illustrationImages, illustrationImages.length, <PenTool size={14} />, "text-green-400", "bg-green-500/20"),
    ];
    // Shuffle for variety
    return items.sort(() => Math.random() - 0.5);
  }, []);

  return (
    <Section id="portfolio" variant="dark" className="!px-0 py-32 border-y border-white/5 bg-[#050505]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 mb-20 flex flex-col items-center text-center">
        <div>
          <span className="text-brand-glow font-black tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block opacity-80">Our Portfolio</span>
          <h2 className="font-display text-6xl md:text-8xl font-black text-white mb-12 tracking-tighter leading-none">
            Proven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-glow to-brand-light">results.</span>
          </h2>
        </div>
        
        {/* Category Navigation Pills */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 max-w-4xl">
          {categories.map((cat) => (
             <button
                key={cat.id}
                onClick={() => navigate(`/portfolio?category=${cat.id}`)}
                className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-gray-400 text-xs md:text-sm font-black uppercase tracking-widest hover:bg-white hover:text-charcoal hover:border-white transition-all duration-300"
             >
                {cat.label}
             </button>
          ))}
          <Link 
            to="/portfolio"
            className="px-8 py-3 rounded-full bg-brand text-white text-xs md:text-sm font-black uppercase tracking-widest hover:bg-brand-light transition-all duration-300 flex items-center gap-2 shadow-lg shadow-brand/20"
          >
             View All <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden py-10">
        <div className="flex">
          <motion.div 
            className="flex"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50, 
                ease: "linear",
              },
            }}
            whileHover={{ animationPlayState: "paused" }} 
            style={{ width: "max-content" }}
          >
            {[...allProjects, ...allProjects].map((item, index) => (
              <PortfolioCard key={`${item.id}-${index}`} item={item} />
            ))}
          </motion.div>
        </div>
        
        {/* Side Masks for better blending */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#050505] to-transparent z-30 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#050505] to-transparent z-30 pointer-events-none"></div>
      </div>
    </Section>
  );
};

export default Portfolio;
