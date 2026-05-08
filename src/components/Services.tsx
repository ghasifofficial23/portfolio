import { motion } from 'motion/react';
import { ArrowUpRight, Globe, Layout, Palette, Terminal } from 'lucide-react';
import TiltCard from './TiltCard';

const services = [
  { title: 'Full Stack Development', desc: 'End-to-end web applications built with modern frameworks and robust backends.', icon: <Terminal className="w-6 h-6" />, accent: 'text-primary', accentBg: 'bg-primary/10', num: '01' },
  { title: 'UI/UX Design', desc: 'Crafting intuitive and stunning interfaces that prioritize user needs and delight.', icon: <Palette className="w-6 h-6" />, accent: 'text-secondary', accentBg: 'bg-secondary/10', num: '02' },
  { title: 'Branding & Identity', desc: 'Defining a distinctive visual language that communicates your brand values powerfully.', icon: <Layout className="w-6 h-6" />, accent: 'text-accent', accentBg: 'bg-accent/10', num: '03' },
  { title: 'Performance & SEO', desc: 'Ensuring your website is blazing fast, fully accessible, and ranks well on search.', icon: <Globe className="w-6 h-6" />, accent: 'text-primary', accentBg: 'bg-primary/10', num: '04' },
];

export default function Services() {
  return (
    <section className="py-24 md:py-40 section-light relative overflow-hidden noise-overlay" id="about">
      <div className="absolute inset-0 grid-pattern-light opacity-40 pointer-events-none" />
      <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
            <span className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[0.3em] uppercase">
              <span className="status-dot" /> What I Do
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-black text-[#1A1A1A]">Expertise<span className="text-primary">.</span></h2>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-lg text-[#5a5852] max-w-md">
            Merging logic with creativity to deliver impactful digital products that drive results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <TiltCard className="h-full">
                <div className="h-full group glass-card rounded-2xl p-8 md:p-10 flex flex-col justify-between gap-8 hover:border-primary/30 transition-all duration-500 cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="relative z-10 flex justify-between items-start">
                    <div className="space-y-5">
                      <div className={`p-3 rounded-xl w-fit ${service.accentBg} ${service.accent}`}>{service.icon}</div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-[#1A1A1A] group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                      <p className="text-[#5a5852] max-w-xs leading-relaxed">{service.desc}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#5a5852] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                  <div className="relative z-10 text-xs font-bold tracking-[0.3em] text-[#5a5852]/30 group-hover:text-primary/30 transition-colors">{service.num}</div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
