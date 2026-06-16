import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skillsData } from '../data';
import { ThumbsUp, Users, BarChart3, Star, CheckCircle } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'digital-marketing' | 'community-campaign' | 'analytics'>('all');

  const categories = [
    { id: 'all', label: 'All Expertise', icon: <Star className="w-4 h-4" /> },
    { id: 'digital-marketing', label: 'Digital Marketing', icon: <ThumbsUp className="w-4 h-4" /> },
    { id: 'community-campaign', label: 'Community & Campaign', icon: <Users className="w-4 h-4" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-4 h-4" /> }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-24 bg-transparent text-slate-800 dark:text-slate-100 relative overflow-hidden"
    >
      {/* Dynamic graphic sphere background */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-violet-600 dark:text-violet-400 uppercase bg-violet-50 dark:bg-violet-950/30 px-3.5 py-1.5 rounded-full"
          >
            My Expertise
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white">
            Professional Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full mt-2" />
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center flex-wrap gap-2 md:gap-3 mb-12" id="skill-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white border-transparent shadow-md shadow-violet-500/10'
                  : 'bg-white/80 dark:bg-white/5 text-slate-600 dark:text-slate-300 border-slate-200/50 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="skills-cards-container"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.35 }}
                className="p-5 rounded-2xl bg-white/70 dark:bg-[#0d0d0f] border border-slate-200/40 dark:border-white/5 shadow-sm hover:shadow-md hover:border-violet-400/50 dark:hover:border-violet-500/30 transition-all group relative overflow-hidden"
              >
                {/* Visual Glow Indicator */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-violet-500 to-blue-500 rounded-l-full" />

                <div className="flex justify-between items-center mb-3.5 pl-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4.5 h-4.5 text-violet-500 dark:text-violet-400 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-slate-900 dark:text-white text-base font-display">
                      {skill.name}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-semibold text-violet-600 dark:text-violet-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar Container */}
                <div className="w-full bg-slate-200/40 dark:bg-white/5 h-1.5 rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut', delay: index * 0.05 }}
                    className="h-full bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 rounded-full"
                  />
                </div>

                {/* Nice helper label depending on proficiency */}
                <div className="flex justify-between text-[11px] text-slate-400 dark:text-slate-500 mt-2.5 pl-2 font-medium">
                  <span className="uppercase tracking-wider text-[9px] font-mono">
                    {skill.category.replace('-', ' ')}
                  </span>
                  <span>
                    {skill.level >= 90 ? 'Advanced' : 'Intermediate'}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Decorative badge summary block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-2xl mx-auto p-6 bg-white/70 dark:bg-[#0d0d0f] border border-slate-200/40 dark:border-white/5 rounded-2xl shadow-md text-slate-600 dark:text-zinc-400 text-sm leading-relaxed"
          id="skills-footer-summary"
        >
          <strong className="text-slate-900 dark:text-white font-semibold">Continuous Growth:</strong> I actively track changing social media algorithms (Meta, TikTok), digital advertising tactics, copy trends, and audience engagement statistics to maintain top-tier performance on all strategic campaigns.
        </motion.div>

      </div>
    </section>
  );
}
