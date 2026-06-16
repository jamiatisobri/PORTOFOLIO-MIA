import { motion } from 'motion/react';
import { Target, Lightbulb, TrendingUp, Sparkles, Award } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Lightbulb className="w-5 h-5 text-violet-600 dark:text-violet-400" />,
      title: 'Creativity',
      description: 'Engaging storytelling, high-performing content strategy, and distinct copywriting styles.'
    },
    {
      icon: <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      title: 'Strategy',
      description: 'Campaign formulation mapped precisely to audience segments and business goals.'
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: 'Analytics',
      description: 'Continuous assessment via performance monitoring and data-backed improvements.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      title: 'Communication',
      description: 'Building strong connections, community relations, and cross-team alignments.'
    }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-transparent text-slate-800 dark:text-slate-150 relative overflow-hidden"
    >
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-violet-400/10 dark:bg-violet-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs font-mono tracking-widest text-violet-600 dark:text-violet-400 uppercase bg-violet-50 dark:bg-violet-950/30 px-3.5 py-1.5 rounded-full"
          >
            My Story
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full mt-2"
          />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Vision Statement & Cards */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="p-6 md:p-8 rounded-3xl bg-white/70 dark:bg-[#0d0d0f] border border-slate-200/40 dark:border-white/5 shadow-md relative overflow-hidden group hover:border-violet-300 dark:hover:border-violet-900/50 transition-all font-sans"
            >
              {/* Abs/Pattern inside card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:bg-violet-500/10 transition-all" />

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white font-display mb-4 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-violet-500" />
                <span>Combining Creativity with Analytics</span>
              </h3>
              
              <div className="space-y-4 text-slate-600 dark:text-zinc-300 leading-relaxed font-sans text-sm md:text-base">
                <p>
                  I am a <strong className="text-violet-600 dark:text-violet-400 font-semibold">Digital Marketing Enthusiast</strong> with experience in social media management, content creation, digital advertising, business analysis, and business development.
                </p>
                <p>
                  I have successfully managed social media accounts for businesses, educational institutions, and communities by creating engaging content, increasing audience engagement, and implementing effective marketing strategies.
                </p>
                <p>
                  Passionate about digital trends, branding, customer engagement, and business growth, I enjoy combining creativity with analytical thinking to deliver measurable marketing results.
                </p>
              </div>
            </motion.div>

            {/* Quick Stats Grid Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-5 rounded-2xl bg-gradient-to-br from-violet-500/5 to-transparent dark:from-violet-955/20 border border-slate-200/30 dark:border-white/5">
                <p className="text-sm font-mono text-violet-600 dark:text-violet-400">Yogyakarta Base</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">Regional Impact</p>
              </div>
              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent dark:from-blue-955/20 border border-slate-200/30 dark:border-white/5">
                <p className="text-sm font-mono text-blue-600 dark:text-blue-400">Award Winning</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">LLDIKTI & Pemimpin.id</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Execution Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <h4 className="text-lg font-semibold tracking-wide text-slate-900 dark:text-white font-display mb-2 uppercase text-center lg:text-left">
              My Core Pillars of Execution
            </h4>
            
            <div className="space-y-4">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex p-4 rounded-2xl bg-slate-50/50 dark:bg-[#0d0d0f] border border-slate-200/20 dark:border-white/5 hover:bg-slate-100/80 dark:hover:bg-white/5 transition-all shadow-sm"
                  id={`pillar-${index}`}
                >
                  <div className="p-3 mr-4 rounded-xl bg-slate-100 dark:bg-[#141416] h-fit">
                    {pillar.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white text-base font-display">
                      {pillar.title}
                    </h5>
                    <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
