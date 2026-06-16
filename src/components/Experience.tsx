import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { experienceData, educationData } from '../data';
import { Briefcase, GraduationCap, ChevronDown, ChevronUp, Calendar, Trophy, BadgeAlert, Sparkles } from 'lucide-react';

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>('exp-jwwk'); // Default first expanded

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="experience"
      className="py-24 bg-transparent text-slate-800 dark:text-slate-150 relative overflow-hidden"
    >
      {/* Decorative items */}
      <div className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full bg-violet-500/5 dark:bg-violet-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-violet-600 dark:text-violet-400 uppercase bg-violet-50 dark:bg-violet-950/30 px-3.5 py-1.5 rounded-full"
          >
            Chronology
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white">
            Career & Education
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full mt-2" />
        </div>

        {/* Bento Grid layout: career on left (col-span-8), education on right (col-span-4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Professional Experience Timeline (Left) */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center space-x-2.5 mb-2 pl-2">
              <Briefcase className="w-5 h-5 text-violet-500" />
              <span>Career Journey</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l border-slate-200 dark:border-slate-800 space-y-8 ml-4">
              
              {experienceData.map((exp, index) => {
                const isExpanded = expandedId === exp.id;
                
                return (
                  <div key={exp.id} className="relative" id={`timeline-item-${index}`}>
                    
                    {/* Glowing Bullet anchor */}
                    <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      isExpanded 
                        ? 'bg-violet-600 border-violet-400 text-white shadow-[0_0_12px_rgba(124,58,237,0.4)] scale-110' 
                        : 'bg-white/80 dark:bg-white/5 border-slate-300 dark:border-white/5 text-slate-400'
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${isExpanded ? 'bg-white' : 'bg-slate-400 dark:bg-slate-500'}`} />
                    </div>

                    {/* Collapsible Card wrapper */}
                    <motion.div
                      layout
                      className={`p-5 rounded-2xl border transition-all ${
                        isExpanded
                          ? 'bg-white/90 dark:bg-[#0d0d0f] shadow-md border-violet-200/50 dark:border-violet-900/40'
                          : 'bg-white/70 dark:bg-white/5 shadow-sm border-slate-200/30 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 cursor-pointer'
                      }`}
                      onClick={() => toggleExpand(exp.id)}
                    >
                      {/* Accordion header brief info */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="space-y-1">
                          <h4 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white">
                            {exp.role}
                          </h4>
                          <span className="text-xs sm:text-sm font-medium text-violet-600 dark:text-violet-400">
                            {exp.company}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between sm:justify-end gap-3">
                          <span className="inline-flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{exp.duration}</span>
                          </span>
                          
                          <button className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-450 dark:text-slate-500 transition-colors">
                            {isExpanded ? <ChevronUp className="w-4 h-4 text-violet-500" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      {/* Accordion content responsibilities detail */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden mt-4 pt-4 border-t border-slate-200/50 dark:border-slate-800"
                          >
                            <p className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
                              Key Duties & Outcomes Completed
                            </p>
                            
                            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-350 leading-relaxed font-sans list-disc pl-4">
                              {exp.responsibilities.map((resp, rIdx) => (
                                <li key={rIdx} className="marker:text-violet-500">
                                  {resp}
                                </li>
                              ))}
                            </ul>

                            {/* Collapsed layout stats tags if present */}
                            {exp.metrics && (
                              <div className="flex flex-wrap gap-3.5 mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                                {exp.metrics.map((mtr) => (
                                  <div
                                    key={mtr.label}
                                    className="px-3 py-1.5 rounded-xl bg-violet-50 dark:bg-slate-950 border border-violet-100/40 dark:border-slate-800"
                                  >
                                    <span className="text-xs font-bold text-violet-700 dark:text-violet-400 font-display">
                                      {mtr.value}
                                    </span>
                                    <span className="text-[10px] text-slate-500 dark:text-slate-500 ml-1.5 uppercase tracking-wide">
                                      {mtr.label}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </motion.div>
                  </div>
                );
              })}

            </div>
          </div>

          {/* Academic/Education Card (Right - Desktop Sidebar) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center space-x-2.5 mb-2 pl-2">
              <GraduationCap className="w-5 h-5 text-blue-500" />
              <span>Academic Foundations</span>
            </h3>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl bg-white/70 dark:bg-[#0d0d0f] border border-slate-200/40 dark:border-white/5 shadow-md relative overflow-hidden"
              id="education-card"
            >
              {/* Graphic circle inside education card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10" />

              <div className="flex items-center space-x-2.5 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold uppercase rounded-md">
                  {educationData.period}
                </span>
                <span className="text-xs text-slate-400 font-mono">Completed</span>
              </div>

              <h4 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-1.5">
                {educationData.degree}
              </h4>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-6 font-display">
                {educationData.institution}
              </p>

              <div>
                <p className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
                  Core Specialization Areas
                </p>
                <div className="space-y-2">
                  {educationData.focus.map((item, idx) => (
                    <div
                      key={item}
                      className="flex items-center space-x-2.5 p-2 rounded-xl bg-slate-50/50 dark:bg-[#141416] border border-slate-200/20 dark:border-white/5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative University summary note */}
              <div className="mt-8 pt-4 border-t border-slate-200/50 dark:border-slate-800 text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                UTDI is renowned for blending direct digital application, technological stacks, and business environments.
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
