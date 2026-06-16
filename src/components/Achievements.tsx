import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Trophy, Star, Sparkles, Eye, X } from 'lucide-react';
import { achievementsData } from '../data';

export default function Achievements() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  
  const certBestRegion = '/cert_best_region.png';
  const certBestSocmed = '/cert_best_socmed.png';
  const certLldikti = '/cert_lldikti.png';

  return (
    <section
      id="achievements"
      className={`py-24 bg-transparent text-slate-800 dark:text-slate-100 relative overflow-hidden ${previewImage ? 'z-[60]' : 'z-10'}`}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-violet-400/5 dark:bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-violet-600 dark:text-violet-400 uppercase bg-violet-50 dark:bg-violet-950/30 px-3.5 py-1.5 rounded-full"
          >
            Accolades
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white">
            Honors & Achievements
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full mt-2" />
        </div>

        {/* Achievements Grid Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="achievements-container">
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="flex flex-col p-6 rounded-3xl bg-white/70 dark:bg-[#0d0d0f] border border-slate-200/40 dark:border-white/5 shadow-md hover:shadow-xl transition-all relative overflow-hidden group"
              id={`achievement-${item.id}`}
            >
              {/* Shine effect on hover */}
              <div className="absolute -inset-x-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-0 group-hover:translate-x-[350px] transition-transform duration-1000 hidden dark:block" />

              {/* Card visual anchor banner top background */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/5 dark:amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/10 dark:group-hover:bg-amber-500/15 transition-all" />

              {/* Trophy Gold Sphere Icon box */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/30 flex items-center justify-center text-amber-500 hover:scale-110 transition-transform">
                  <Trophy className="w-5 h-5 drop-shadow-[0_2px_4px_rgba(245,158,11,0.2)] animate-pulse" />
                </div>
                
                <span className="px-3 py-1 bg-amber-100/50 dark:bg-amber-950/20 text-amber-500 dark:text-amber-400 border border-amber-200/10 text-xs font-mono font-bold uppercase rounded-md shadow-inner">
                  {item.year}
                </span>
              </div>

              {/* Achievement title */}
              <div className="space-y-2 flex-grow">
                <p className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest font-mono">
                  {item.badge}
                </p>
                <h3 className="text-lg font-bold font-display text-slate-800 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {item.organization}
                </p>
                
                <p className="text-xs sm:text-sm text-slate-650 dark:text-zinc-400 leading-relaxed font-sans pt-2">
                  {item.description}
                </p>

                {/* View Certificate Link */}
                {(item.id === 'ach-lldikti' || item.id === 'ach-best-region' || item.id === 'ach-regional-project') && (
                  <button
                    onClick={() => {
                      if (item.id === 'ach-lldikti') setPreviewImage(certLldikti);
                      else if (item.id === 'ach-best-region') setPreviewImage(certBestRegion);
                      else setPreviewImage(certBestSocmed);
                    }}
                    className="mt-4 inline-flex items-center space-x-1.5 text-xs font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 cursor-pointer group/btn w-fit"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Lihat Sertifikat</span>
                  </button>
                )}
              </div>

              {/* Decorative Card border glowing outline bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

            </motion.div>
          ))}
        </div>

        {/* Custom Visual Banner at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-950/30 dark:to-indigo-950/20 border border-violet-100/10 dark:border-violet-900/40 text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
          id="achievements-highlight-banner"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))] pointer-events-none" />
          
          <div className="space-y-1.5 text-center md:text-left relative z-10">
            <h4 className="text-lg md:text-xl font-bold font-display flex items-center justify-center md:justify-start space-x-2">
              <Sparkles className="w-4.5 h-4.5 text-yellow-300" />
              <span>Proven Growth & Public Relations Excellence</span>
            </h4>
            <p className="text-xs md:text-sm text-violet-200 max-w-2xl">
              These regional and community-level awards validate my competence in designing engaging communications, aligning multi-stakeholder directives, and generating concrete visual metrics.
            </p>
          </div>

          <div className="relative z-10">
            <span className="inline-block px-5 py-2.5 rounded-2xl bg-white/10 dark:bg-slate-900 border border-white/20 text-xs font-bold font-mono uppercase tracking-wider text-white">
              ★ Recruiter-Ready Track
            </span>
          </div>
        </motion.div>

      </div>

      {/* Certificate Fullscreen View Portal/Modal */}
      <AnimatePresence>
        {previewImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewImage(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-zoom-out"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl bg-slate-950 border border-white/10 shadow-2xl z-10 flex flex-col"
            >
              <div className="absolute top-4 right-4 z-20 flex space-x-2">
                <button
                  onClick={() => setPreviewImage(null)}
                  className="p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <img
                src={previewImage}
                alt="Sertifikat Penghargaan Fullscreen"
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
