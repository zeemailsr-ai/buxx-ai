
import React from 'react';
import Section from '../ui/Section';
import { Star, CheckCircle, ArrowUpRight, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const FIVERR_LINK = "https://www.fiverr.com/s/YRA1DKl";
const UPWORK_LINK = "https://www.upwork.com/freelancers/~0179303185f2a7fe3d?mp_source=share";
const PORTFOLIO_LINK = "https://zeecreatives.netlify.app/";

const reviews = [
  {
    name: "Jessica Stowers",
    role: "Content Creator",
    text: "Not only did they provide me with the presentation I needed for our pitch competition, they also provided us with an entire social media asset library.",
    avatar: "https://i.pravatar.cc/150?u=jessica",
    link: UPWORK_LINK
  },
  {
    name: "Madelyn Francisco",
    role: "Marketing Manager",
    text: "buXXai has proven to be a talented and reliable partner several times over. The team's design work remains innovative and always on point for our brand.",
    avatar: "https://i.pravatar.cc/150?u=madelyn",
    link: FIVERR_LINK
  },
  {
    name: "Alex Boyd",
    role: "Founder",
    text: "buXXai has undoubtedly grown into one of the best online graphic design firms. Eliezer has an impressive portfolio and provided a seamless experience.",
    avatar: "https://i.pravatar.cc/150?u=alex",
    link: UPWORK_LINK
  },
  {
    name: "Eliska Mechlova",
    role: "Brand Strategist",
    text: "Client communication is just excellent! Their responsiveness is extremely impressive. Didn't matter what time you needed support, they were there.",
    avatar: "https://i.pravatar.cc/150?u=eliska",
    link: FIVERR_LINK
  },
  {
    name: "Adam Filistein",
    role: "Agency Owner",
    text: "buXXai established a seamless workflow through clear and open communication. The team provides quality services that are cost-effective for us.",
    avatar: "https://i.pravatar.cc/150?u=adam",
    link: UPWORK_LINK
  },
  {
    name: "Jake Coughlin",
    role: "Ecom Owner",
    text: "buXXai completed and delivered the project, which pleased the client's internal stakeholders. They were communicative and met all milestones.",
    avatar: "https://i.pravatar.cc/150?u=jake",
    link: UPWORK_LINK
  },
  {
    name: "Theodore Williams",
    role: "SaaS Founder",
    text: "I have been working with the buXXai team for nearly 2 years now and it has been an amazing relationship since the beginning.",
    avatar: "https://i.pravatar.cc/150?u=theo",
    link: FIVERR_LINK
  },
  {
    name: "Alina Iliescu",
    role: "Apparel Design",
    text: "Been working with buXXai the past year and could not be happier! They handled everything for me, website was straightforward.",
    avatar: "https://i.pravatar.cc/150?u=alina",
    link: UPWORK_LINK
  }
];

const TrustBadge: React.FC<{ name: string; rating: string; link: string; isPortfolio?: boolean }> = ({ name, rating, link, isPortfolio }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex flex-col items-center gap-1 hover:scale-105 transition-transform"
  >
    <div className="h-8 flex items-center justify-center">
      {name === 'Google' && (
        <div className="flex items-center gap-1">
          <span className="text-blue-500 font-bold text-xl">G</span>
          <span className="text-red-500 font-bold text-xl">o</span>
          <span className="text-yellow-500 font-bold text-xl">o</span>
          <span className="text-blue-500 font-bold text-xl">g</span>
          <span className="text-green-500 font-bold text-xl">l</span>
          <span className="text-red-500 font-bold text-xl">e</span>
        </div>
      )}
      {name === 'Fiverr' && (
        <span className="text-[#1dbf73] font-black text-2xl tracking-tighter">fiverr<span className="text-gray-900">.</span></span>
      )}
      {name === 'Upwork' && (
        <span className="text-[#14a800] font-black text-2xl tracking-tighter">upwork</span>
      )}
      {isPortfolio && (
        <div className="flex items-center gap-1 text-gray-900 font-bold text-xl">
           <ExternalLink size={18} className="text-brand" />
           <span>Portfolio</span>
        </div>
      )}
    </div>
    <div className="flex items-center gap-1.5">
      <span className="text-gray-900 font-black text-[16px]">{rating}</span>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={13} className="fill-[#FFBB54] text-[#FFBB54]" />
        ))}
      </div>
    </div>
  </a>
);

const ReviewCard: React.FC<{ review: any }> = ({ review }) => (
  <div className="bg-white min-w-[320px] md:min-w-[400px] p-6 md:p-8 rounded-[24px] border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all flex flex-col h-full mx-3">
    <div className="flex items-center gap-4 mb-5">
      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 shrink-0">
        <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-bold text-gray-900 text-[16px] leading-tight">{review.name}</h4>
        <div className="flex items-center gap-1 mt-1">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className="fill-[#FFBB54] text-[#FFBB54]" />
            ))}
          </div>
          <span className="text-[13px] font-bold text-gray-400 ml-1">5/5</span>
        </div>
      </div>
    </div>
    
    <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow italic">
      "{review.text}"
    </p>
    
    <a 
      href={review.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-brand font-bold text-[14px] hover:underline transition-all"
    >
      Read more 
      <ArrowUpRight size={14} />
    </a>
  </div>
);

const SocialProof: React.FC = () => {
  return (
    <Section variant="cream" className="!py-24 md:!py-32 bg-[#FDFBF7] dark:bg-navy-950 !px-0">
      <div className="max-w-[1400px] mx-auto px-6 mb-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-10">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tight">
              “How did we survive <br className="hidden md:block"/> without buXXai before?”
            </h2>
            <div className="relative mt-2 hidden md:block">
               <div className="bg-[#6333FF] p-2 rounded-xl rotate-12 shadow-lg">
                  <CheckCircle size={32} className="text-white" />
               </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-20">
            <TrustBadge name="Google" rating="4.7" link="https://www.google.com/search?q=buxxai+reviews" />
            <TrustBadge name="Fiverr" rating="5.0" link={FIVERR_LINK} />
            <TrustBadge name="Upwork" rating="5.0" link={UPWORK_LINK} />
            <TrustBadge name="Portfolio" rating="Check Work" link={PORTFOLIO_LINK} isPortfolio />
          </div>
        </div>
      </div>

      <div className="relative w-full space-y-8 overflow-hidden">
        {/* Top Row: Slides Left */}
        <div className="flex whitespace-nowrap">
          <motion.div 
            className="flex"
            animate={{ x: [0, "-50%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {[...reviews, ...reviews].map((review, i) => (
              <ReviewCard key={`top-${i}`} review={review} />
            ))}
          </motion.div>
        </div>

        {/* Bottom Row: Slides Right */}
        <div className="flex whitespace-nowrap">
          <motion.div 
            className="flex"
            animate={{ x: ["-50%", 0] }}
            transition={{
              duration: 45,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {[...reviews.slice().reverse(), ...reviews.slice().reverse()].map((review, i) => (
              <ReviewCard key={`bottom-${i}`} review={review} />
            ))}
          </motion.div>
        </div>

        {/* Side Gradients for fading edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FDFBF7] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FDFBF7] to-transparent z-10 pointer-events-none"></div>
      </div>

      <div className="flex justify-center mt-16">
        <a 
          href={UPWORK_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-3.5 bg-white border border-gray-200 rounded-xl font-bold text-gray-900 hover:bg-gray-50 transition-all shadow-sm group"
        >
          See more on Upwork <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </Section>
  );
};

export default SocialProof;
