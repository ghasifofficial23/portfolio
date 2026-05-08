import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SmoothScroll from './components/SmoothScroll';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Services from './components/Services';
import WorkFolder from './components/WorkFolder';
import FolderAnimation from './components/FolderAnimation';
import ProjectsPage from './components/ProjectsPage';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Cursor />

      {/* === Preloader === */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            exit={{ y: '-100%' }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[2000] gradient-bg flex flex-col items-center justify-center gap-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'backOut' }}
              className="relative"
            >
              <h2 className="text-5xl md:text-7xl font-display font-bold text-[#F5F5F0] tracking-tight">
                Ghasif<span className="text-primary">.</span>
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
                className="h-0.5 bg-gradient-to-r from-primary via-secondary to-accent origin-left mt-3"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 1 }}
              className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#8A8A80]"
            >
              Crafting Digital Excellence
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === Full Projects Page Overlay === */}
      <AnimatePresence>
        {showProjects && <ProjectsPage onClose={() => setShowProjects(false)} />}
      </AnimatePresence>

      {/* === Main Content === */}
      <SmoothScroll>
        <Navbar />
        <main className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
          {/* LIGHT */}
          <Hero />
          {/* DARK */}
          <Ticker />
          {/* LIGHT */}
          <Services />
          {/* DARK */}
          <WorkFolder />
          {/* LIGHT */}
          <FolderAnimation onOpen={() => setShowProjects(true)} />

          {/* DARK — Philosophy Section */}
          <section className="py-24 md:py-40 section-dark relative overflow-hidden noise-overlay">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent" />
            <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-5xl mx-auto space-y-20">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <span className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[0.3em] uppercase mb-6">
                    <span className="status-dot" /> Philosophy
                  </span>
                  <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-[1.05] text-[#F5F5F0]">
                    Good design <br />
                    <span className="italic font-light text-[#8A8A80] group-hover:text-[#F5F5F0] transition-colors duration-500">takes time</span> <br />
                    <span className="text-gradient">and working with me saves it.</span>
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <p className="text-lg md:text-xl text-[#8A8A80] leading-relaxed">
                      Companies partner with me because of my unique perspective, sharp technical instincts, and relentless attention to detail.
                    </p>
                    <div className="h-px w-20 bg-gradient-to-r from-primary to-transparent" />
                  </motion.div>
                  <ul className="space-y-6">
                    {[
                      "Premium visual direction that stands out.",
                      "Craftsmanship from concept to final product.",
                      "Scalable design systems for consistency.",
                      "Aligned goals with technical experience."
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-4 items-start group/item"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 shrink-0 group-hover/item:shadow-[0_0_8px_#8B1A10] transition-shadow" />
                        <span className="text-lg font-medium text-[#F5F5F0]/70 group-hover/item:text-[#F5F5F0] transition-colors">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* LIGHT */}
          <ContactForm />
          {/* DARK */}
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
