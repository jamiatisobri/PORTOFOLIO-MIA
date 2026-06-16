import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
  key?: string;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const tags = [
    'Social Media Management',
    'Digital Advertising',
    'Business Analysis',
    'Business Development',
    'Marketing Communication'
  ];

  useEffect(() => {
    const textTimer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % tags.length);
    }, 800);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          clearInterval(textTimer);
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        // Increment at slightly varied rates to look realistic
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => {
      clearInterval(progressTimer);
      clearInterval(textTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: 'easeInOut' } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-slate-100 font-sans"
        id="loading-screen"
      >
        {/* Abstract subtle animated grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] opacity-40" />

        <div className="relative flex flex-col items-center px-4 max-w-md w-full">
          {/* Logo / Sparkle element */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-600 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.3)] mb-8"
          >
            <Sparkles className="w-8 h-8 text-white animate-pulse" />
          </motion.div>

          {/* Name Header */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2 text-center"
          >
            Jamiati Sobri
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-slate-400 font-mono tracking-wider uppercase mb-8"
          >
            Portfolio Showcase
          </motion.p>

          {/* Progress Section */}
          <div className="w-full bg-slate-900 border border-slate-800 rounded-full h-1.5 overflow-hidden mb-4 relative shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 rounded-full shadow-[0_0_8px_rgba(139,92,246,0.5)]"
            />
          </div>

          <div className="flex justify-between w-full px-1 text-xs font-mono text-slate-500 mb-12">
            <span className="text-violet-400 font-medium">Strategizing Growth</span>
            <span>{progress}%</span>
          </div>

          {/* Dynamic rotating highlight tag text */}
          <div className="h-6 overflow-hidden flex items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={textIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-sm font-medium text-slate-300 font-sans"
              >
                {tags[textIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
