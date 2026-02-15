
import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: "Shopify", color: "text-green-500" },
  { name: "Klaviyo", color: "text-blue-400" },
  { name: "Meta", color: "text-blue-600" },
  { name: "Google", color: "text-gray-400" },
  { name: "Stripe", color: "text-indigo-500" },
  { name: "Amazon", color: "text-orange-400" },
  { name: "TikTok", color: "text-pink-500" },
  { name: "Attentive", color: "text-purple-400" },
  { name: "Postscript", color: "text-emerald-400" },
  { name: "Omnisend", color: "text-cyan-400" },
  { name: "Recharge", color: "text-indigo-400" },
  { name: "Gorgias", color: "text-blue-500" },
];

const ClientLogos: React.FC = () => {
  return (
    <section className="bg-[#050505] py-16 border-y border-white/5 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-gradient from-brand/5 to-transparent pointer-events-none"></div>

      <div className="max-w-[1800px] mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-[0.3em]">
            Trusted by the world's most ambitious brands
          </p>
        </div>

        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

          <div className="flex overflow-hidden">
            <motion.div 
              className="flex items-center gap-12 md:gap-24 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* Double the array for seamless loop */}
              {[...brands, ...brands].map((brand, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 group cursor-default"
                >
                  <span className={`text-2xl md:text-4xl font-display font-black tracking-tighter ${brand.color}`}>
                    {brand.name}
                  </span>
                  <div className="h-1 w-1 rounded-full bg-white/20 group-hover:bg-brand-glow transition-colors"></div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
