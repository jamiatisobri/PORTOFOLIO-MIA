import { motion } from 'motion/react';
import { FileDown, ArrowRight, Sparkles, MessageSquare, Briefcase, TrendingUp, Users, Share2, Linkedin, Mail, Trophy } from 'lucide-react';

interface HeroProps {
  onNavigate: (id: string) => void;
  onOpenCVModal: () => void;
}

export default function Hero({ onNavigate, onOpenCVModal }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-transparent text-slate-800 dark:text-slate-100"
    >
      {/* Background radial soft lights */}
      <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-violet-100/40 dark:from-violet-950/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Neon spheres for gradient accent glow */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-indigo-400/20 dark:bg-indigo-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 translate-x-1/2 w-96 h-96 rounded-full bg-violet-400/20 dark:bg-purple-600/10 blur-[130px] pointer-events-none" />

      {/* Decorative floating grids */}
      <div className="absolute top-20 right-10 w-72 h-72 opacity-20 dark:opacity-10 pointer-events-none">
        <div className="w-full h-full border border-slate-300 dark:border-slate-700 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] flex flex-wrap">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1/4 h-1/4 border-b border-r border-slate-300 dark:border-slate-700" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left: Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-violet-100 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800 text-xs font-semibold text-violet-700 dark:text-violet-400"
              id="hero-badge"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-violet-600 dark:text-violet-400" />
              <span>Available for Freelance & Full-time Roles</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display mb-1">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="block text-slate-800 dark:text-slate-300 font-light text-3xl sm:text-4xl md:text-5xl"
              >
                Hi, I'm
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block bg-gradient-to-r from-violet-600 via-purple-650 to-blue-600 dark:from-violet-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent py-2.5 mt-1 font-display"
              >
                Mia!
              </motion.span>
            </h1>

            {/* Subtitles as animated tags list / single block */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl font-medium tracking-wide text-slate-700 dark:text-slate-200"
            >
              <span className="text-violet-600 dark:text-violet-400">Social Media Strategist</span>
              <span className="mx-2 text-slate-400 dark:text-slate-600">|</span>
              <span className="text-purple-600 dark:text-purple-400">Digital Advertiser</span>
              <span className="hidden sm:inline mx-2 text-slate-400 dark:text-slate-600">|</span>
              <br className="sm:hidden" />
              <span className="text-indigo-600 dark:text-indigo-400">Business Analyst</span>
              <span className="mx-2 text-slate-400 dark:text-slate-600">|</span>
              <span className="text-blue-600 dark:text-blue-400">Business Dev</span>
            </motion.h2>

            {/* Short Bio */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed"
            >
              I help businesses grow through strategic social media management, digital marketing, data-driven business analysis, and impactful marketing communication.
            </motion.p>

            {/* Hero Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 w-full sm:w-auto"
              id="hero-ctas"
            >
              <button
                onClick={() => onNavigate('projects')}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-violet-500/20 hover:scale-[1.02] transform transition-all cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCVModal}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-850 font-semibold border border-slate-200 dark:border-slate-800 hover:scale-[1.02] transform transition-all cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span>Download CV</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-transparent text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-semibold transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-slate-400" />
                <span>Let's Connect</span>
              </button>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center space-x-6 pt-6"
              id="hero-socials"
            >
              <a
                href="https://www.linkedin.com/in/jamiati-sobri"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center p-3 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:scale-110 active:scale-95 transition-all shadow-sm"
                title="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:jamiatisobri@gmail.com"
                className="group flex items-center justify-center p-3 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:scale-110 active:scale-95 transition-all shadow-sm"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              
              {/* Decorative detail line */}
              <div className="h-px w-20 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-800" />
              <span className="text-xs font-mono text-slate-400 dark:text-slate-600 tracking-wider">CONNECT WITH ME</span>
            </motion.div>

          </div>

          {/* Hero Right: Professional Profile Photo with Floating Analytics Badges */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-72 sm:w-80 aspect-[3/4] rounded-3xl overflow-visible shadow-[0_20px_50px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-slate-200/50 dark:border-white/10 group"
              id="hero-profile-card"
            >
              {/* Outer glowing border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl -z-10" />

              {/* Main Profile Image */}
              <div className="w-full h-full rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-250 dark:border-slate-800">
                <img 
                  src="/profile.png" 
                  alt="Jamiati Sobri Profile" 
                  className="w-full h-full object-cover object-top transform group-hover:scale-[1.02] transition-transform duration-500 animate-fade-in"
                />
              </div>


              {/* Decorative background blurs */}
              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-500 opacity-20 blur-xl -z-20" />
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-3xl bg-blue-500 opacity-10 blur-2xl -z-20" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
