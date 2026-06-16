import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data';
import { Check, Star, ExternalLink, Sparkles, MessageCircle, Heart, Trophy, Share2, ZoomIn, X, TrendingUp } from 'lucide-react';
import { Project } from '../types';

const certBestRegion = '/cert_best_region.png';
const certBestSocmed = '/cert_best_socmed.png';
const certLldikti = '/cert_lldikti.png';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const getGradientClass = (imgPlaceholder: string) => {
    switch (imgPlaceholder) {
      case 'from-css-gradient-1':
        return 'from-pink-500 via-purple-500 to-indigo-500';
      case 'from-css-gradient-2':
        return 'from-violet-600 via-indigo-600 to-blue-500';
      case 'from-css-gradient-3':
        return 'from-blue-600 via-cyan-600 to-teal-500';
      case 'from-css-gradient-4':
        return 'from-violet-600 via-purple-650 to-emerald-500';
      default:
        return 'from-slate-600 to-slate-900';
    }
  };

  const getIconForProject = (imgPlaceholder: string) => {
    switch (imgPlaceholder) {
      case 'from-css-gradient-1':
        return (
          <div className="flex flex-col items-center justify-center h-full text-white relative">
            <div className="absolute top-4 left-4 text-xs font-mono tracking-wider bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>LIVE RETREATIVE COMMERCE</span>
            </div>
            {/* Visual Social Frame mock */}
            <div className="w-56 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/25 shadow-2xl space-y-3 transform -rotate-2 hover:rotate-0 transition-transform">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-pink-500 border border-white flex items-center justify-center text-[10px] font-bold">JWWK</div>
                <div>
                  <h6 className="text-xs font-bold text-white">JWWK Textile Retail</h6>
                  <p className="text-[9px] text-white/70">Instagram Live</p>
                </div>
              </div>
              <div className="h-20 bg-slate-950/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                <span className="text-xs font-semibold text-white/90">Closing Fabric Leads</span>
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-[8pt] text-white/60">
                  <span className="flex items-center space-x-1"><Heart className="w-2.5 h-2.5 text-rose-500 fill-rose-500" /> <span>340 Likes</span></span>
                  <span>1.2k Viewers</span>
                </div>
              </div>
              <p className="text-[10px] text-white/90 line-clamp-2 italic">"Super dynamic fabrics and premium threads!"</p>
            </div>
          </div>
        );
      case 'from-css-gradient-2':
        return (
          <div className="flex items-center justify-center h-full w-full relative px-6 overflow-hidden">
            <div className="absolute top-4 left-4 text-xs font-mono tracking-wider bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center space-x-1 z-10">
              <Trophy className="w-3.5 h-3.5 text-yellow-400" />
              <span>CERTIFICATES AWARDED</span>
            </div>
            <div className="relative w-full h-36 flex items-center justify-center mt-6">
              {/* Left Certificate Card (Best Region) */}
              <div 
                onClick={(e) => { e.stopPropagation(); setPreviewImage(certBestRegion); }}
                className="absolute w-40 aspect-[4/3] rounded-lg overflow-hidden border border-white/20 shadow-xl transform -rotate-8 -translate-x-10 hover:-rotate-2 hover:-translate-y-2 transition-all duration-300 bg-slate-900 cursor-zoom-in z-0 hover:z-20 group/cert1"
              >
                <img 
                  src={certBestRegion} 
                  alt="Sertifikat Best Region" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover/cert1:bg-black/0 transition-colors" />
              </div>
              {/* Right Certificate Card (Best Social Media) */}
              <div 
                onClick={(e) => { e.stopPropagation(); setPreviewImage(certBestSocmed); }}
                className="absolute w-40 aspect-[4/3] rounded-lg overflow-hidden border border-white/20 shadow-xl transform rotate-8 translate-x-10 hover:rotate-2 hover:-translate-y-2 transition-all duration-300 bg-slate-900 cursor-zoom-in z-10 hover:z-20 group/cert2"
              >
                <img 
                  src={certBestSocmed} 
                  alt="Sertifikat Best Social Media" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover/cert2:bg-black/0 transition-colors" />
              </div>
            </div>
          </div>
        );
      case 'from-css-gradient-3':
        return (
          <div className="flex items-center justify-center h-full w-full relative px-6 overflow-hidden">
            <div className="absolute top-4 left-4 text-xs font-mono tracking-wider bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center space-x-1 z-10">
              <Trophy className="w-3.5 h-3.5 text-yellow-400" />
              <span>CERTIFICATE AWARDED</span>
            </div>
            <div className="relative w-full h-36 flex items-center justify-center mt-6">
              {/* Left Dashboard Mockup Card */}
              <div className="absolute w-36 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl space-y-2.5 transform -rotate-6 -translate-x-12 z-0">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-sm bg-blue-500 flex items-center justify-center text-[8px] font-bold">UTDI</div>
                  <span className="text-[10px] font-bold text-white font-display">@utdi_official</span>
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 w-full bg-white/20 rounded" />
                  <div className="h-1.5 w-5/6 bg-white/20 rounded" />
                </div>
              </div>
              
              {/* Right Certificate Card */}
              <div 
                onClick={(e) => { e.stopPropagation(); setPreviewImage(certLldikti); }}
                className="absolute w-40 aspect-[4/3] rounded-lg overflow-hidden border border-white/20 shadow-xl transform rotate-6 translate-x-10 hover:rotate-2 hover:-translate-y-2 transition-all duration-300 bg-slate-900 cursor-zoom-in z-10 hover:z-20 group/cert3"
              >
                <img 
                  src={certLldikti} 
                  alt="Sertifikat LLDIKTI" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover/cert3:bg-black/0 transition-colors" />
              </div>
            </div>
          </div>
        );
      case 'from-css-gradient-4':
        return (
          <div className="flex items-center justify-center h-full w-full relative px-6 overflow-hidden">
            <div className="absolute top-4 left-4 text-xs font-mono tracking-wider bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center space-x-1 z-10">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>META ADS CAMPAIGN</span>
            </div>
            <div className="relative w-full h-36 flex items-center justify-center mt-6">
              {/* Profile Card Mockup style, but with Meta Ads preview */}
              <div 
                onClick={(e) => { e.stopPropagation(); setPreviewImage('/meta_ads_content.png'); }}
                className="absolute w-44 aspect-[16/10] rounded-lg overflow-hidden border border-white/20 shadow-xl transform hover:scale-105 transition-all duration-300 bg-slate-900 cursor-zoom-in group/ads"
              >
                <img 
                  src="/meta_ads_content.png" 
                  alt="Meta Ads Performance Graph" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover/ads:bg-black/0 transition-colors" />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="projects"
      className={`py-24 bg-transparent text-slate-800 dark:text-slate-100 relative overflow-hidden ${selectedProject ? 'z-[60]' : 'z-10'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-violet-600 dark:text-violet-400 uppercase bg-violet-50 dark:bg-violet-950/30 px-3.5 py-1.5 rounded-full"
          >
            My Work
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full mt-2" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="flex flex-col rounded-3xl bg-white/70 dark:bg-[#0d0d0f] border border-slate-200/40 dark:border-white/5 shadow-md hover:shadow-xl transition-all overflow-hidden h-full group"
            >
              
              {/* Core Graphic Visual Placeholder */}
              <div className={`h-60 bg-gradient-to-br ${getGradientClass(project.imageUrl)} relative overflow-hidden border-b border-slate-200/40 dark:border-white/5`}>
                
                {/* Abstract overlay graphics patterns */}
                <div className="absolute inset-0 bg-slate-950/10 mix-blend-multiply" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(255,255,255,0.15),rgba(0,0,0,0.15))]" />
                
                {/* Dynamic responsive visuals specific to Jamiati's role */}
                {getIconForProject(project.imageUrl)}
              </div>

              {/* Text Area */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-6">
                <div className="space-y-4">
                  
                  {/* Category badgeline */}
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400 bg-violet-100/60 dark:bg-violet-955/40 px-2.5 py-1 rounded-full">
                      {project.category}
                    </span>
                    {project.id === 'community-media' && (
                      <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-955/20 px-2 py-0.5 rounded border border-amber-200/20 flex items-center gap-1 shrink-0">
                        <Trophy className="w-3.5 h-3.5 text-amber-500" />
                        2 Sertifikat
                      </span>
                    )}
                    {project.id === 'university-branding' && (
                      <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-955/20 px-2 py-0.5 rounded border border-amber-200/20 flex items-center gap-1 shrink-0">
                        <Trophy className="w-3.5 h-3.5 text-amber-500" />
                        1 Sertifikat
                      </span>
                    )}
                    {project.id === 'meta-ads-utdi' && (
                      <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-955/20 px-2 py-0.5 rounded border border-amber-200/20 flex items-center gap-1 shrink-0">
                        <Trophy className="w-3.5 h-3.5 text-amber-500" />
                        3 Lampiran
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-zinc-450 leading-relaxed font-sans line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights section list */}
                  <div className="pt-2">
                    <p className="text-xs font-mono font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2.5">
                      KEY DELIVERABLES
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((hlt) => (
                        <span
                          key={hlt}
                          className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-orange-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                          <span>{hlt}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Performance stats summary & View Details button */}
                <div className="border-t border-slate-200/60 dark:border-slate-850 pt-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 uppercase">Impact Metric</span>
                    {project.stats && (
                      <span className="text-sm font-bold font-display text-emerald-600 dark:text-emerald-400">
                        {project.stats[0].value} {project.stats[0].label.split(' ')[0]}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center space-x-1 text-xs font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 cursor-pointer group/btn"
                  >
                    <span>View Breakdown</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
              
              {/* Backdrop popup overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm cursor-pointer"
              />

              {/* Modal Card Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-white/95 dark:bg-[#0d0d0f]/95 backdrop-blur-md border border-slate-200/50 dark:border-white/10 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl z-10 flex flex-col text-slate-800 dark:text-slate-100 max-h-[90vh]"
              >
                {/* Visual Header Gradient banner */}
                <div className={`h-40 bg-gradient-to-r ${getGradientClass(selectedProject.imageUrl)} relative flex items-end p-6`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <span className="relative text-xs font-mono font-bold text-white tracking-widest uppercase bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full mb-1">
                    {selectedProject.category}
                  </span>
                  
                  {/* Close button inside modal inside banner */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors cursor-pointer"
                  >
                    <span className="sr-only">Close</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Content body of modal */}
                <div className="p-6 md:p-8 space-y-6 overflow-y-auto flex-grow scrollbar-thin">
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold font-display text-slate-900 dark:text-white">
                      {selectedProject.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-zinc-300 mt-3 leading-relaxed font-sans">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2">
                    <p className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                      Highlights & Strategical Core
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                      {selectedProject.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800"
                        >
                          <div className="p-1 rounded-full bg-violet-100 dark:bg-violet-950/80 text-violet-600 dark:text-violet-400 shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact Stats summary */}
                  {selectedProject.stats && (
                    <div className="space-y-3">
                      <p className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                        Measurable Growth Results
                      </p>
                      
                      <div className="grid grid-cols-3 gap-3">
                        {selectedProject.stats.map((stat) => (
                          <div
                            key={stat.label}
                            className="p-3.5 text-center rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50/50 dark:from-slate-950 dark:to-slate-950/60 border border-slate-100 dark:border-slate-800"
                          >
                            <span className="block text-lg md:text-xl font-bold text-violet-600 dark:text-violet-400 font-display">
                              {stat.value}
                            </span>
                            <span className="block text-[10px] text-slate-500 dark:text-slate-400 mt-1 font-sans line-clamp-1">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Proof of Certificate for Community Media */}
                  {selectedProject.id === 'community-media' && (
                    <div className="space-y-3">
                      <p className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                        <Trophy className="w-3.5 h-3.5 text-yellow-500" />
                        Bukti Sertifikat Penghargaan (Pemimpin.id Community)
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div 
                          onClick={() => setPreviewImage(certBestRegion)}
                          className="group/img relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 shadow-sm hover:shadow-md transition-all cursor-zoom-in"
                        >
                          <div className="aspect-[4/3] w-full overflow-hidden relative">
                            <img
                              src={certBestRegion}
                              alt="Sertifikat Best Region in Social Media"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover transform group-hover/img:scale-[1.03] transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity">
                              <ZoomIn className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <div className="p-2.5 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300 text-center">
                            Best Region in Social Media (Juara 1)
                          </div>
                        </div>

                        <div 
                          onClick={() => setPreviewImage(certBestSocmed)}
                          className="group/img relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 shadow-sm hover:shadow-md transition-all cursor-zoom-in"
                        >
                          <div className="aspect-[4/3] w-full overflow-hidden relative">
                            <img
                              src={certBestSocmed}
                              alt="Sertifikat Best Social Media Juara 2"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover transform group-hover/img:scale-[1.03] transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity">
                              <ZoomIn className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <div className="p-2.5 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300 text-center">
                            Best Social Media Regional Project (Juara 2)
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Proof of Certificate for University Branding */}
                  {selectedProject.id === 'university-branding' && (
                    <div className="space-y-3">
                      <p className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                        <Trophy className="w-3.5 h-3.5 text-yellow-500" />
                        Bukti Sertifikat Penghargaan (LLDIKTI Region V)
                      </p>
                      
                      <div className="max-w-md mx-auto">
                        <div 
                          onClick={() => setPreviewImage(certLldikti)}
                          className="group/img relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 shadow-sm hover:shadow-md transition-all cursor-zoom-in"
                        >
                          <div className="aspect-[4/3] w-full overflow-hidden relative">
                            <img
                              src={certLldikti}
                              alt="Sertifikat Harapan 1 Kategori Media Sosial LLDIKTI Wilayah V"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover transform group-hover/img:scale-[1.03] transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity">
                              <ZoomIn className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <div className="p-2.5 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300 text-center">
                            Harapan 1 Media Sosial Humas PTS LLDIKTI Wilayah V
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Proof of Performance for Meta Ads UTDI */}
                  {selectedProject.id === 'meta-ads-utdi' && (
                    <div className="space-y-4">
                      <p className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                        <Trophy className="w-3.5 h-3.5 text-emerald-500" />
                        Lampiran Hasil Kinerja Kampanye (Meta Ads Manager)
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {/* Image 1: Overview */}
                        <div 
                          onClick={() => setPreviewImage('/meta_ads_overview.png')}
                          className="group/img relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 shadow-sm hover:shadow-md transition-all cursor-zoom-in"
                        >
                          <div className="aspect-[16/10] w-full overflow-hidden relative">
                            <img
                              src="/meta_ads_overview.png"
                              alt="Meta Ads Awareness & Engagement Overview"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover transform group-hover/img:scale-[1.03] transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity">
                              <ZoomIn className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <div className="p-2 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-[10px] font-medium text-slate-700 dark:text-slate-300 text-center line-clamp-1">
                            Awareness & Engagement
                          </div>
                        </div>

                        {/* Image 2: Creative */}
                        <div 
                          onClick={() => setPreviewImage('/meta_ads_creative.png')}
                          className="group/img relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 shadow-sm hover:shadow-md transition-all cursor-zoom-in"
                        >
                          <div className="aspect-[16/10] w-full overflow-hidden relative">
                            <img
                              src="/meta_ads_creative.png"
                              alt="Meta Ads Creative Performance"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover transform group-hover/img:scale-[1.03] transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity">
                              <ZoomIn className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <div className="p-2 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-[10px] font-medium text-slate-700 dark:text-slate-300 text-center line-clamp-1">
                            Creative Performance
                          </div>
                        </div>

                        {/* Image 3: Content */}
                        <div 
                          onClick={() => setPreviewImage('/meta_ads_content.png')}
                          className="group/img relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 shadow-sm hover:shadow-md transition-all cursor-zoom-in"
                        >
                          <div className="aspect-[16/10] w-full overflow-hidden relative">
                            <img
                              src="/meta_ads_content.png"
                              alt="Meta Ads Content Reach"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover transform group-hover/img:scale-[1.03] transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity">
                              <ZoomIn className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <div className="p-2 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-[10px] font-medium text-slate-700 dark:text-slate-300 text-center line-clamp-1">
                            Organic vs Paid Reach
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Footer CTAs of details popover */}
                  <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800 flex justify-end">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-xl text-xs transition-colors cursor-pointer"
                    >
                      Close Breakdown
                    </button>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

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

      </div>
    </section>
  );
}
