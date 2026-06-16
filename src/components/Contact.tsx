import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Send, CheckCircle, ExternalLink, Sparkles, MessageSquare, Trash2 } from 'lucide-react';

interface Submission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [showRecipientInbox, setShowRecipientInbox] = useState(false);

  // Load existing inbox messages inside localStorage (interactive component)
  useEffect(() => {
    const existing = localStorage.getItem('jamiati_portfolio_messages');
    if (existing) {
      setSubmissions(JSON.parse(existing));
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    setTimeout(() => {
      const newSubmission: Submission = {
        id: crypto.randomUUID(),
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'General Inquiry',
        message: formData.message,
        date: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      const updated = [newSubmission, ...submissions];
      setSubmissions(updated);
      localStorage.setItem('jamiati_portfolio_messages', JSON.stringify(updated));

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Auto-reset success toast
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  const clearInbox = () => {
    setSubmissions([]);
    localStorage.removeItem('jamiati_portfolio_messages');
  };

  return (
    <section
      id="contact"
      className="py-24 bg-transparent text-slate-800 dark:text-slate-100 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-violet-500/5 dark:bg-violet-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-violet-600 dark:text-violet-400 uppercase bg-violet-50 dark:bg-violet-950/30 px-3.5 py-1.5 rounded-full"
          >
            Get In Touch
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white">
            Let's Connect
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full mt-2" />
          <p className="text-slate-600 dark:text-zinc-400 max-w-lg mt-4 h-auto text-sm sm:text-base leading-relaxed">
            Interested in working together? Feel free to reach out for collaborations, projects, or professional opportunities.
          </p>
        </div>

        {/* Form & Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Quick Contact Info Cards (Left - col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2 pl-2">
              Contact Channels
            </h3>

            {/* Email Card clickable */}
            <a
              href="mailto:jamiatisobri@gmail.com"
              className="group block p-6 rounded-3xl bg-white/70 dark:bg-[#0d0d0f] border border-slate-200/40 dark:border-white/5 hover:border-violet-300 dark:hover:border-violet-900/40 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
              id="contact-email-link"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/5 rounded-full blur-2xl group-hover:bg-violet-500/10 transition-colors" />
              
              <div className="flex items-center space-x-4">
                <div className="p-3.5 rounded-2xl bg-violet-50 dark:bg-violet-950/40 border border-violet-100 dark:border-violet-900/30 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5.5 h-5.5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Direct Inbox</span>
                  <span className="text-base font-bold font-display text-slate-900 dark:text-white mt-0.5 block">jamiatisobri@gmail.com</span>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between text-xs text-violet-600 dark:text-violet-400 font-semibold border-t border-slate-200/40 dark:border-slate-800/60 pt-3">
                <span>Send direct email</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* LinkedIn Card clickable */}
            <a
              href="https://www.linkedin.com/in/jamiati-sobri"
              target="_blank"
              rel="noreferrer"
              className="group block p-6 rounded-3xl bg-white/70 dark:bg-[#0d0d0f] border border-slate-200/40 dark:border-white/5 hover:border-blue-300 dark:hover:border-blue-900/40 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
              id="contact-linkedin-link"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors" />
              
              <div className="flex items-center space-x-4">
                <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5.5 h-5.5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">LinkedIn Network</span>
                  <span className="text-base font-bold font-display text-slate-900 dark:text-white mt-0.5 block">jamiati-sobri</span>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between text-xs text-blue-600 dark:text-blue-400 font-semibold border-t border-slate-200/40 dark:border-slate-800/60 pt-3">
                <span>View LinkedIn profile</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* Simulated Live Recruiter Inbox trigger (adds dynamic interaction so they can test their sent messages immediately!) */}
            {submissions.length > 0 && (
              <div className="p-4 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white/70 dark:bg-[#0d0d0f]">
                <button
                  onClick={() => setShowRecipientInbox(!showRecipientInbox)}
                  className="w-full flex items-center justify-between text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest"
                >
                  <span>Recruiter Inbox Simulator ({submissions.length})</span>
                  <span className="text-violet-500 underline">{showRecipientInbox ? 'Hide' : 'Inspect'}</span>
                </button>
                
                <AnimatePresence>
                  {showRecipientInbox && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-slate-200/50 dark:border-slate-800 space-y-3"
                    >
                      <div className="flex justify-between items-center text-[10px] text-slate-400 pb-1">
                        <span>Messages saved locally</span>
                        <button onClick={clearInbox} className="text-red-500 flex items-center gap-1 hover:underline">
                          <Trash2 className="w-3 h-3" /> Clear Inbox
                        </button>
                      </div>
                      
                      <div className="max-h-48 overflow-y-auto space-y-2 pr-1.5 scrollbar-thin">
                        {submissions.map((sub) => (
                          <div key={sub.id} className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200/50 dark:border-slate-850 text-xs">
                            <div className="flex justify-between font-bold text-slate-800 dark:text-slate-200 mb-1">
                              <span className="font-display">{sub.name} ({sub.email})</span>
                              <span className="font-mono text-[9px] text-slate-400 font-normal">{sub.date}</span>
                            </div>
                            <p className="font-semibold text-violet-600 dark:text-violet-400 mb-1">{sub.subject}</p>
                            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed font-sans">{sub.message}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Form Composer (Right - col-span-7) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className="p-6 md:p-8 rounded-3xl bg-white/70 dark:bg-[#0d0d0f] border border-slate-200/40 dark:border-white/5 shadow-md relative"
              id="contact-form-container"
            >
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-6 flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-violet-500 pr-0.5" />
                <span>Write a Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4" id="consultation-contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono">Your Name *</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-sm"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono">Your Email *</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-sm"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono">Your Message *</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Jamiati, I'd love to chat about a social media strategy for our brand..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-sm resize-none"
                  />
                </div>

                {/* Action button & states */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting' || status === 'success'}
                    className={`w-full py-3.5 rounded-xl font-bold font-display text-sm tracking-wide flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                      status === 'success'
                        ? 'bg-emerald-600 text-white shadow-lg'
                        : 'bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white shadow-lg hover:shadow-violet-500/10'
                    }`}
                  >
                    {status === 'idle' && (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                    {status === 'submitting' && (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    )}
                    {status === 'success' && (
                      <>
                        <span>Message Sent Successfully!</span>
                        <CheckCircle className="w-4.5 h-4.5 text-white" />
                      </>
                    )}
                  </button>
                </div>

                {/* Success Feedback notification pop */}
                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-center text-emerald-600 dark:text-emerald-400 font-medium font-sans animate-bounce mt-3"
                  >
                    ★ Awesome! Your message has been saved in the simulated Recruiter Inbox model.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
