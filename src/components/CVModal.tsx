import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Linkedin, Printer, Sparkles, MapPin, Award, CheckCircle, Download } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/CV_Jamiati_Sobri.pdf';
    link.download = 'CV_Jamiati_Sobri.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="relative bg-white/95 dark:bg-[#0d0d0f]/95 backdrop-blur-md border border-slate-200/50 dark:border-white/10 rounded-3xl w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl z-10 flex flex-col text-slate-800 dark:text-slate-200 font-sans print:absolute print:inset-0 print:max-h-none print:shadow-none print:border-none print:bg-white print:text-black"
            id="cv-modal-sheet"
          >
            {/* Action Bar (Not visible in Print) */}
            <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-white/5 p-4 sticky top-0 bg-white/95 dark:bg-[#0d0d0f]/95 backdrop-blur-md z-20 print:hidden">
              <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center space-x-1.5 pl-2">
                <Sparkles className="w-3.5 h-3.5 text-violet-500" />
                <span>Interactive Curriculum Vitae</span>
              </span>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleDownloadPDF}
                  className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-md shadow-blue-500/10"
                  title="Download PDF directly"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-violet-50 hover:bg-violet-100 dark:bg-violet-950/50 dark:hover:bg-violet-900/60 text-violet-600 dark:text-violet-400 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  title="Print or Save PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print & Download</span>
                </button>
                
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Sheet Body styled like the original paper CV */}
            <div className="cv-print-body p-6 md:p-12 bg-white text-black font-sans leading-relaxed text-sm shadow-inner max-w-4xl mx-auto w-full select-text print:p-0">
              
              {/* Center aligned header */}
              <div className="text-center space-y-1.5 pb-2">
                <h1 className="text-2xl font-bold font-sans tracking-normal text-[#0b2985] print:text-xl">
                  Jamiati Sobri
                </h1>
                <p className="text-xs sm:text-sm font-bold text-[#0b2985] tracking-normal">
                  Social Media Strategist – Digital Marketing - Undergraduate Student
                </p>
                <div className="text-[10px] sm:text-xs text-[#0b2985] font-normal flex flex-wrap justify-center gap-1.5 items-center">
                  <span>Yogyakarta, Indonesia</span>
                  <span>|</span>
                  <a href="mailto:jamiatisobri@gmail.com" className="hover:underline">jamiatisobri@gmail.com</a>
                  <span>|</span>
                  <span>089688478010</span>
                  <span>|</span>
                  <a href="https://www.linkedin.com/in/jamiati-sobri" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
                  <span>|</span>
                  <span className="hover:underline cursor-pointer">Portfolio</span>
                </div>
              </div>

              {/* Header Divider matching paper format */}
              <div className="border-t border-[#0b2985] my-4 pt-4" />

              {/* TENTANG SAYA */}
              <div className="space-y-3 mb-6 print-avoid-break">
                <div className="text-center">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0b2985] tracking-wider uppercase inline-block border-b-2 border-[#0b2985] pb-0.5">
                    TENTANG SAYA
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 text-justify leading-relaxed">
                  A Digital Business student (Class of 2024) at Universitas Teknologi Digital Indonesia (UTDI) with experience as part of the marketing team in managing campus social media platforms, including Instagram, TikTok, YouTube, and Facebook. Currently pursuing a Bachelor’s degree in Digital Business to develop skills in digital marketing, social media management, and branding, and to apply them professionally. Highly motivated to contribute effectively in the dynamic creative and technology industries.
                </p>
              </div>

              {/* PENGALAMAN BEKERJA */}
              <div className="space-y-4 mb-6">
                <div className="text-center">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0b2985] tracking-wider uppercase inline-block border-b-2 border-[#0b2985] pb-0.5">
                    PENGALAMAN BEKERJA
                  </h3>
                </div>
                
                <div className="space-y-5">
                  {/* Job 1 */}
                  <div className="space-y-1.5 print-avoid-break">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-baseline font-bold text-xs sm:text-sm text-black">
                      <span>Jogja Wisata Kain Kiloan (Textile)</span>
                      <span>Jan 2022 - Oct 2024</span>
                    </div>
                    <p className="text-xs text-slate-500 italic">
                      A company specializing in the textile industry, focusing on selling fabrics and textile materials.
                    </p>
                    
                    {/* Sub-role: Social Media Specialist */}
                    <div className="pt-1">
                      <p className="text-xs sm:text-sm font-medium italic text-black">Social Media Specialist</p>
                      <ul className="list-disc pl-5 text-xs text-slate-800 space-y-0.5 mt-1">
                        <li>Managed and grew social media presence on Instagram and Facebook.</li>
                        <li>Administered Shopee marketplace account and facilitated online purchases.</li>
                        <li>Increased social media engagement by 60% through interactive content strategies.</li>
                        <li>Coordinated daily live-streaming sessions, each lasting 2-3 hours.</li>
                        <li>Provided responsive customer service, assisting ~15 customers per day via social media.</li>
                      </ul>
                    </div>

                    {/* Sub-role: Personal Assistant */}
                    <div className="pt-2">
                      <p className="text-xs sm:text-sm font-medium italic text-black">Personal Assistant</p>
                      <ul className="list-disc pl-5 text-xs text-slate-800 space-y-0.5 mt-1">
                        <li>Manage purchasing for personal and business needs, handling budgets ranging from IDR 500K to 25 million.</li>
                        <li>Design and distribute hiring flyers for multiple store branches.</li>
                        <li>Handle recruitment communications, responding to -+70 job inquiries daily.</li>
                        <li>Provide trusted assistance for coordination, purchasing, and operational support.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Job 2 */}
                  <div className="space-y-1.5 print-avoid-break">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-baseline font-bold text-xs sm:text-sm text-black">
                      <span>Universitas Teknologi Digital Indonesia (UTDI)</span>
                      <span>Sept 2024 - saat ini</span>
                    </div>
                    <p className="text-xs text-slate-500 italic">
                      A private university focused on digital technology, business, and creative industries, located in Yogyakarta.
                    </p>
                    
                    <div className="pt-1">
                      <p className="text-xs sm:text-sm font-medium italic text-black">Social Media Strategist</p>
                      <ul className="list-disc pl-5 text-xs text-slate-800 space-y-0.5 mt-1">
                        <li>Manage Social media management & content strategy</li>
                        <li>Content planning & calendar development</li>
                        <li>Engagement rate & performance analysis</li>
                        <li>Digital marketing support (PMB campaign)</li>
                        <li>Branding & audience growth</li>
                        <li>Reporting & insight optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* PENDIDIKAN */}
              <div className="space-y-3 mb-6 print-avoid-break">
                <div className="text-center">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0b2985] tracking-wider uppercase inline-block border-b-2 border-[#0b2985] pb-0.5">
                    PENDIDIKAN
                  </h3>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline font-bold text-xs sm:text-sm text-black">
                  <span>Universitas Teknologi Digital Indonesia</span>
                  <span>2024 - 2028</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800">
                  S1: Bisnis Digital
                </p>
              </div>

              {/* KEAHLIAN */}
              <div className="space-y-3 mb-6 print-avoid-break">
                <div className="text-center">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0b2985] tracking-wider uppercase inline-block border-b-2 border-[#0b2985] pb-0.5">
                    KEAHLIAN
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-y-1.5 gap-x-4 text-xs sm:text-sm text-slate-800 py-1 pl-1">
                  <div>CRM</div>
                  <div>Online Marketplace</div>
                  <div>Communication</div>
                  
                  <div>Problem Solving</div>
                  <div>Bussiness Development</div>
                  <div>Canva</div>
                  
                  <div>SEO</div>
                  <div>Google Workspace</div>
                  <div>Capcut</div>
                  
                  <div>Office Administration</div>
                  <div>Adaptif</div>
                  <div>Leadership</div>
                </div>
              </div>

              {/* LISENSI & SERTIFIKAT */}
              <div className="space-y-3 print-avoid-break">
                <div className="text-center">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0b2985] tracking-wider uppercase inline-block border-b-2 border-[#0b2985] pb-0.5">
                    LISENSI & SERTIFIKAT
                  </h3>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline font-bold text-xs sm:text-sm text-black">
                  <span>Practical Office Advance – Lembaga Sertivikasi Profesi</span>
                  <span>2022</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
