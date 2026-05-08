import { motion } from 'motion/react';
import { ArrowUpRight, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-dark relative overflow-hidden border-t border-[#2A2A2A]/30">
      <div className="container mx-auto px-6 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black leading-[0.95] text-[#F5F5F0]">
              Let's build <br />
              <span className="italic font-light text-secondary">something</span> <br />
              <span className="text-gradient">special.</span>
            </h2>
            <motion.a href="mailto:ghasifofficial248@gmail.com" whileHover={{ x: 10 }} className="inline-flex items-center gap-3 text-xl md:text-3xl font-display font-medium text-[#F5F5F0] hover:text-primary transition-colors duration-300 cursor-pointer group">
              ghasifofficial248@gmail.com
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>
          <div className="space-y-12 md:pt-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Social</p>
                <div className="flex flex-col gap-3 text-sm">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#8A8A80] hover:text-[#F5F5F0] transition-colors cursor-pointer">GitHub</a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#8A8A80] hover:text-[#F5F5F0] transition-colors cursor-pointer">LinkedIn</a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#8A8A80] hover:text-[#F5F5F0] transition-colors cursor-pointer">Twitter / X</a>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Location</p>
                <p className="text-sm text-[#8A8A80] leading-relaxed">Sahiwal, Punjab<br />Pakistan</p>
              </div>
            </div>
            <div className="pt-8 border-t border-[#2A2A2A]/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-display font-bold text-[#F5F5F0]">Ghasif</span>
                <span className="status-dot" />
              </div>
              <div className="text-[10px] font-bold tracking-[0.3em] text-[#8A8A80]/40">© {currentYear} ALL RIGHTS RESERVED</div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative py-8 md:py-12 px-6 overflow-hidden">
        <motion.h3 initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-[15vw] font-black font-display text-center leading-none tracking-tighter text-[#F5F5F0]/3">
          GHASIF
        </motion.h3>
      </div>
      <div className="border-t border-[#2A2A2A]/20 py-4 text-center">
        <p className="text-xs text-[#8A8A80]/40 flex items-center justify-center gap-1.5">Crafted with <Heart className="w-3 h-3 text-primary" /> by Ghasif</p>
      </div>
    </footer>
  );
}
