import React from 'react';
import Section from '../ui/Section';
import { ArrowRight, PenTool, LayoutTemplate, Smartphone, Brush, Shirt, Files, Book, Package, Layout, PieChart, Share2, Presentation, StickyNote, BookOpen, Newspaper, Grid, Mic, Smile, Crop, Video, Film, Type, FileImage, GraduationCap, Ghost, MessageSquare, Scissors, Layers, MonitorPlay, Clapperboard, Zap, FormInput, Sparkles, Image as ImageIcon, Mail } from 'lucide-react';
import { MailIcon, PaletteIcon, VideoIcon } from '../ui/Illustrations';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const coreServices = [
  {
    icon: <MailIcon className="w-full h-full text-blue-900 dark:text-blue-300" accent="#3B82F6" />,
    title: "Email Design & Systems",
    description: "Turn your list into a revenue engine with high-converting designs.",
    items: ["Campaign designs", "Flow automation setup", "Klaviyo integration", "Conversion layouts"],
    link: "/done-for-you",
    linkText: "View Done-For-You Service"
  },
  {
    icon: <PaletteIcon className="w-full h-full text-purple-900 dark:text-purple-300" accent="#9333EA" />,
    title: "Branding & Design",
    description: "Cohesive visual identity that builds trust across all touchpoints.",
    items: ["Logo refinements", "Brand kits", "Social creatives", "Digital ads"],
    link: "#",
    linkText: "View Examples"
  },
  {
    icon: <VideoIcon className="w-full h-full text-orange-900 dark:text-orange-300" accent="#EA580C" />,
    title: "AI Content Production",
    description: "Scale your organic reach with unlimited short-form video assets.",
    items: ["Reels & Shorts", "YouTube Thumbnails", "AI Image Gen", "Motion Graphics"],
    link: "#",
    linkText: "View Examples"
  }
];

const capabilities = [
  { name: "Branding & Logo", icon: PenTool },
  { name: "Email Design", icon: Mail },
  { name: "Web UI", icon: LayoutTemplate },
  { name: "Mobile App UI", icon: Smartphone },
  { name: "Artworks", icon: Brush },
  { name: "T-shirt Design", icon: Shirt },
  { name: "Stationery", icon: Files },
  { name: "E-Book & Cover", icon: Book },
  { name: "Packaging", icon: Package },
  { name: "Banner Ad", icon: Layout },
  { name: "Infographic", icon: PieChart },
  { name: "Social Media", icon: Share2 },
  { name: "Pitchdeck", icon: Presentation },
  { name: "Flyer & Poster", icon: StickyNote },
  { name: "Brochure", icon: BookOpen },
  { name: "Newsletter", icon: Newspaper },
  { name: "Icon Pack", icon: Grid },
  { name: "Podcast Cover", icon: Mic },
  { name: "Mascot", icon: Smile },
  { name: "Photo Retouching", icon: Crop },
  { name: "Explainer Videos", icon: Video },
  { name: "Logo Animation", icon: Film },
  { name: "Typography Videos", icon: Type },
  { name: "Gif Animations", icon: FileImage },
  { name: "E-Learning Videos", icon: GraduationCap },
  { name: "Character Animation", icon: Ghost },
  { name: "Testimonial Videos", icon: MessageSquare },
  { name: "Video Editing", icon: Scissors },
  { name: "UI Animation", icon: Layers },
  { name: "Tutorial Videos", icon: MonitorPlay },
  { name: "Text Overlays", icon: Type },
  { name: "Reels & Videos", icon: Clapperboard },
  { name: "Klaviyo Setup", icon: Zap },
  { name: "Sign-up Forms", icon: FormInput },
  { name: "AI Image Gen", icon: Sparkles },
  { name: "Video Thumbnails", icon: ImageIcon },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Services: React.FC = () => {
  return (
    <Section id="services" variant="white" maxWidth="full">
      <div className="text-center mb-20">
        <motion.span variants={itemVariants} className="text-brand dark:text-brand-glow font-bold tracking-wider uppercase text-sm mb-4 block">Our Expertise</motion.span>
        <motion.h2 variants={itemVariants} className="font-display text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
          Everything you need to <br/> look like a <span className="relative inline-block">
            <span className="relative z-10">market leader</span>
            <span className="absolute bottom-2 left-0 right-0 h-4 bg-brand/10 dark:bg-brand/40 -rotate-1"></span>
          </span>
        </motion.h2>
      </div>

      {/* Core Services Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-32">
        {coreServices.map((service, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="group relative bg-white dark:bg-navy-800 rounded-3xl p-1 border border-gray-100 dark:border-navy-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="h-full bg-white dark:bg-navy-800 rounded-2xl p-10 flex flex-col">
              {/* Custom Illustration Container */}
              <div className="w-24 h-24 mb-8 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                {service.description}
              </p>
              
              <div className="space-y-4 mb-10 flex-1">
                {service.items.map((item, i) => (
                  <div key={i} className="flex items-center text-base text-gray-700 dark:text-gray-300 font-medium">
                    <div className="w-2 h-2 rounded-full bg-brand/40 dark:bg-brand-glow/40 mr-4"></div>
                    {item}
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-gray-100 dark:border-navy-700 mt-auto">
                 {service.link.startsWith('/') ? (
                    <Link to={service.link} className="flex items-center text-brand dark:text-brand-glow font-bold text-base group-hover:gap-3 gap-1 transition-all">
                       {service.linkText} <ArrowRight size={20} />
                    </Link>
                 ) : (
                    <button className="flex items-center text-brand dark:text-brand-glow font-bold text-base group-hover:gap-3 gap-1 transition-all">
                      {service.linkText} <ArrowRight size={20} />
                    </button>
                 )}
              </div>
            </div>
            
            {/* Hover Gradient Border Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand/20 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity -z-10 blur-xl"></div>
          </motion.div>
        ))}
      </div>

      {/* Full Capabilities Grid */}
      <div className="w-full">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h3 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4">Full Scope of Capabilities</h3>
          <p className="text-gray-500 dark:text-gray-400 text-lg">Over 35+ design and content categories included in your subscription.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="flex items-center p-6 bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-700 rounded-xl hover:shadow-lg hover:border-brand/20 dark:hover:border-brand-glow/30 transition-all duration-200 group cursor-default"
              >
                <div className="text-gray-400 dark:text-gray-500 group-hover:text-brand dark:group-hover:text-brand-glow transition-colors mr-4 shrink-0">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <span className="text-base font-bold text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white">{cap.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Services;