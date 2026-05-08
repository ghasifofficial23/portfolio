import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import TiltCard from './TiltCard';

const projects = [
  { title: 'Lumina Dental Studio', category: 'Healthcare • Dashboard', description: 'Exceptional aesthetic dental care dashboard and smile transformations patient management system.', tech: ['React', 'Supabase', 'TailwindCSS'], color: 'from-secondary/20 to-secondary/5', url: 'https://dentist-brown-chi.vercel.app/' },
  { title: 'German Fitness & Sports', category: 'Fitness • E-Commerce', description: 'Elite fitness training center platform featuring membership registration and supplements store.', tech: ['React', 'Node.js', 'Vercel'], color: 'from-primary/20 to-primary/5', url: 'https://german-fitness.vercel.app/' },
  { title: 'BENNY™ Fitness', category: 'Landing Page • Health', description: 'Premium gym landing page with modern typography, smooth animations, and a high-end visual aesthetic.', tech: ['React', 'TailwindCSS', 'Motion'], color: 'from-accent/20 to-accent/5', url: 'https://gym-landing-page-puce-gamma.vercel.app/' },
];

export default function WorkFolder() {
  return (
    <section className="py-24 md:py-40 section-dark relative overflow-hidden" id="work">
      <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
      <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[0.3em] uppercase mb-6">
            <span className="status-dot" /> Selected Work
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl sm:text-5xl md:text-7xl font-display font-black leading-tight text-[#F5F5F0]">
            Projects I'm <span className="italic font-light text-[#8A8A80]">proud</span> <span className="text-gradient">of.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="h-full">
              <TiltCard className="h-full">
                <div
                  className="group rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 cursor-pointer flex flex-col h-full"
                  style={{ background: 'rgba(20,20,20,0.7)', backdropFilter: 'blur(24px)', border: '1px solid rgba(42,42,42,0.6)' }}
                >
                  <div className={`relative h-48 md:h-56 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                    {project.url ? (
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <iframe 
                          src={project.url} 
                          className="w-[400%] h-[400%] origin-top-left border-none" 
                          style={{ transform: 'scale(0.25)' }}
                          title={project.title} 
                          tabIndex={-1} 
                          scrolling="no"
                        />
                      </div>
                    ) : (
                      <div className="grid grid-cols-3 gap-2 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                        {[...Array(9)].map((_, j) => (<div key={j} className="w-12 h-8 bg-[#F5F5F0]/20 rounded-lg" />))}
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-display font-black text-[#F5F5F0]/10 group-hover:text-[#F5F5F0]/20 transition-colors">0{i + 1}</span>
                    </div>
                    <div className="absolute inset-0 bg-[#0A0A0A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                      {project.url ? (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-3 rounded-full text-[#F5F5F0] hover:text-primary transition-colors cursor-pointer" style={{ background: 'rgba(20,20,20,0.7)', border: '1px solid rgba(42,42,42,0.6)' }} aria-label="View live site"><ExternalLink className="w-5 h-5" /></a>
                      ) : (
                        <button className="p-3 rounded-full text-[#F5F5F0] hover:text-primary transition-colors cursor-pointer" style={{ background: 'rgba(20,20,20,0.7)', border: '1px solid rgba(42,42,42,0.6)' }} aria-label="View live site"><ExternalLink className="w-5 h-5" /></button>
                      )}
                      <button onClick={(e) => e.stopPropagation()} className="p-3 rounded-full text-[#F5F5F0] hover:text-primary transition-colors cursor-pointer" style={{ background: 'rgba(20,20,20,0.7)', border: '1px solid rgba(42,42,42,0.6)' }} aria-label="View source code"><Github className="w-5 h-5" /></button>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-3">{project.category}</span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-[#F5F5F0] mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-[#8A8A80] text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (<span key={t} className="text-[10px] font-bold tracking-wider px-3 py-1 rounded-full bg-[#1E1E1E] text-[#8A8A80]">{t}</span>))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
