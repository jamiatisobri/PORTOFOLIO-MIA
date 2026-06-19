import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, ExternalLink, Linkedin, Briefcase, GraduationCap, Award, MessageSquare } from 'lucide-react';

interface LinkedInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

export default function LinkedInModal({ isOpen, onClose, onNavigate }: LinkedInModalProps) {
  const [copied, setCopied] = useState(false);
  const profileUrl = 'https://www.linkedin.com/in/jamiati-sobri';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profileUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleContactClick = () => {
    onClose();
    // Wait for modal animation to close
    setTimeout(() => {
      onNavigate('contact');
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 overflow-y-auto w-full h-full">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="relative bg-white dark:bg-[#0c0c0e] border border-slate-200 dark:border-white/10 rounded-3xl w-full max-w-lg shadow-2xl z-10 overflow-hidden text-slate-800 dark:text-slate-200 font-sans"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* LinkedIn Background Banner */}
            <div className="h-32 bg-gradient-to-r from-blue-705 via-indigo-700 to-blue-800 relative">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute bottom-2 right-4 text-white/40 text-[9px] font-mono select-none">
                LINKEDIN PROFILE QUICK VIEW
              </div>
            </div>

            {/* Profile Info Section */}
            <div className="px-6 pb-6 relative font-sans">
              {/* Profile Photo Overlap */}
              <div className="relative -mt-16 mb-4">
                <div className="w-28 h-28 rounded-full border-4 border-white dark:border-[#0c0c0e] overflow-hidden bg-slate-100 shadow-md">
                  <img
                    src="/profile.png"
                    alt="Mia Profile"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* LinkedIn Icon Badge */}
                <div className="absolute bottom-0 left-20 p-1.5 rounded-full bg-blue-600 border-2 border-white dark:border-[#0c0c0e] text-white">
                  <Linkedin className="w-4 h-4 fill-white text-white" />
                </div>
              </div>

              {/* Name & Headline */}
              <div className="space-y-1">
                <div className="flex items-baseline space-x-2">
                  <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Jamiati Sobri</h3>
                  <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 font-display">(Mia)</span>
                </div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-350 leading-normal">
                  Social Media Strategist • Digital Advertiser • Business Analyst • Business Development
                </p>
                <div className="flex items-center space-x-1.5 text-xs text-slate-455 dark:text-slate-500 pt-1">
                  <GraduationCap className="w-3.5 h-3.5 text-violet-500" />
                  <span>Yogyakarta, Indonesia</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-200/60 dark:bg-white/5 my-5" />

              {/* Quick Summary Info */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Ringkasan Profil Professional
                </h4>
                
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="flex items-start space-x-3 p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5">
                    <Briefcase className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800 dark:text-slate-200 block text-xs font-display">Keahlian Utama</span>
                      <p className="text-xs text-slate-605 dark:text-slate-400 mt-0.5 font-sans leading-relaxed">
                        Social Media Management, Digital Marketing, Business Analysis, Marketing Communication.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5">
                    <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800 dark:text-slate-200 block text-xs font-display">Penghargaan Utama</span>
                      <p className="text-xs text-slate-605 dark:text-slate-400 mt-0.5 font-sans leading-relaxed">
                        Juara Harapan 1 Humas LLDIKTI V (Lembaga Layanan Pendidikan Tinggi Wilayah V).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-200/60 dark:bg-white/5 my-5" />

              {/* Action Buttons */}
              <div className="space-y-3">
                {/* Info Text */}
                <p className="text-[11px] text-center text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mx-auto">
                  Gunakan tombol di bawah untuk menyalin tautan (agar bisa dibuka langsung di aplikasi LinkedIn) atau hubungi langsung via web.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {/* Copy Link Button */}
                  <button
                    onClick={handleCopy}
                    className="flex items-center justify-center space-x-2 py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 font-semibold text-xs border border-slate-200 dark:border-white/5 transition-all active:scale-95 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-500 font-bold" />
                        <span className="text-green-600 dark:text-green-400 font-bold">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-500 dark:text-slate-405" />
                        <span>Salin Link Profil</span>
                      </>
                    )}
                  </button>

                  {/* Go to LinkedIn Button */}
                  <a
                    href={profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-2 py-3 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-all active:scale-95 cursor-pointer shadow-md shadow-blue-500/10"
                  >
                    <span>Buka LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Send Direct Message button */}
                <button
                  onClick={handleContactClick}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-2xl bg-gradient-to-r from-violet-650 to-blue-600 hover:from-violet-750 hover:to-blue-750 text-white font-semibold text-xs transition-all active:scale-95 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Kirim Pesan Langsung (Tanpa LinkedIn)</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
