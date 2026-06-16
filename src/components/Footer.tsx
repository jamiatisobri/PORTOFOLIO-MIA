import { Heart, Command, ArrowUp, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      id="portfolio-footer"
      className="bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-900 py-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-center md:text-left">
          
          {/* Logo & Brand text */}
          <div className="space-y-1.5 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 text-base font-bold bg-gradient-to-r from-violet-600 to-blue-600 dark:from-violet-400 dark:to-blue-400 bg-clip-text text-transparent font-display">
              <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              <span>Jamiati Sobri</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Digital Strategist • Analyst • Advertiser • Business Development
            </p>
          </div>

          {/* Copyright description */}
          <div className="text-xs text-slate-450 dark:text-zinc-500 font-sans space-y-1 md:text-right">
            <p>© 2026 Jamiati Sobri. All rights reserved.</p>
            <p className="flex items-center justify-center md:justify-end gap-1 text-[11px] text-slate-400 dark:text-slate-650">
              <span>Built with</span>
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
              <span>using React + Tailwind CSS</span>
            </p>
          </div>

          {/* Back to top indicator */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
            title="Back to top"
            id="back-to-top-button"
          >
            <ArrowUp className="w-4.5 h-4.5" />
          </button>

        </div>
      </div>
    </footer>
  );
}
