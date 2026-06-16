import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Components
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('jamiati_portfolio_dark_mode');
    // Default to dark mode is requested
    return saved ? saved === 'true' : true;
  });

  // Sync dark class on document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('jamiati_portfolio_dark_mode', String(darkMode));
  }, [darkMode]);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-[#fafafa] dark:bg-[#050505] text-slate-800 dark:text-slate-200 selection:bg-violet-500 selection:text-white transition-colors duration-300"
          >
            {/* Header / Sticky Navigation */}
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

            {/* Layout Main wraps all scrolling sections */}
            <main>
              {/* Home / Hero Section */}
              <Hero onNavigate={handleNavigate} onOpenCVModal={() => setCvModalOpen(true)} />

              {/* About Section */}
              <About />

              {/* Skills Area */}
              <Skills />

              {/* Projects Grid showcases */}
              <Projects />

              {/* Career & Academic Timeline */}
              <Experience />

              {/* Honours & Achievements */}
              <Achievements />

              {/* Contacts channels & Form */}
              <Contact />
            </main>

            {/* Layout Footer footer */}
            <Footer />

            {/* Dynamic Print CV Sheet Portal Popup */}
            <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
