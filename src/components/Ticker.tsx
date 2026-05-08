import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const items = ['Web Development', 'UI/UX Design', 'React & Next.js', 'Full Stack', 'E-Commerce', 'Branding', 'SEO'];

export default function Ticker() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const x1 = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section ref={containerRef} className="py-20 md:py-28 overflow-hidden section-dark border-y border-border/30 relative">
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="flex flex-col gap-8 relative z-10">
        <motion.div style={{ x: x1 }} className="flex whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center">
              {items.map((item, j) => (
                <span key={`${i}-${j}`} className="flex items-center gap-6 mr-6">
                  <span className="text-4xl sm:text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter text-[#F5F5F0]/8 hover:text-[#F5F5F0]/20 transition-colors duration-500">{item}</span>
                  <span className="w-3 h-3 bg-primary/30 rounded-full shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </motion.div>

        <div className="container mx-auto px-6 lg:px-16 xl:px-20 2xl:px-24 text-center max-w-[1920px] py-20 relative">
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-left" />
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-[7.5rem] 2xl:leading-[1.05] max-w-[95%] mx-auto font-display font-black leading-[1.1] text-[#F5F5F0]">
            Turning complex <span className="text-primary">ideas</span> into seamless{' '}
            <span className="italic text-secondary">digital experiences</span> that users love.
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-right" />
        </div>

        <motion.div style={{ x: x2 }} className="flex whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center">
              {items.map((item, j) => (
                <span key={`${i}-${j}`} className="flex items-center gap-6 mr-6">
                  <span className="text-4xl sm:text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter text-[#F5F5F0]/4">{item}</span>
                  <span className="w-2 h-2 bg-secondary/20 rounded-full shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
