import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import React, { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { SparklesEffect } from './ui/SparklesEffect';

const techBadges = [
  { label: 'React', delay: 0 },
  { label: 'Next.js', delay: 0.5 },
  { label: 'TypeScript', delay: 1 },
  { label: 'Node.js', delay: 1.5 },
  { label: 'Tailwind', delay: 2 },
  { label: 'Supabase', delay: 2.5 },
];

export default function Hero() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Mouse tracking for parallax background text
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const springConfig = { damping: 25, stiffness: 100 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const textX = useTransform(smoothMouseX, [-1, 1], [40, -40]);
  const textY = useTransform(smoothMouseY, [-1, 1], [40, -40]);

  return (
    <section className={`relative min-h-screen w-full flex items-center overflow-x-hidden noise-overlay ${isLight ? 'bg-[#F5F5F0]' : 'bg-[#0A0A0A]'}`}>
      
      {/* Interactive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <motion.div
          style={{ x: textX, y: textY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2
            className={`text-[25vw] md:text-[22vw] font-display font-black tracking-tighter leading-none uppercase whitespace-nowrap ${
              isLight ? 'text-primary/[0.03]' : 'text-white/[0.02]'
            }`}
          >
            GHASIF
          </h2>
        </motion.div>
      </div>

      {/* Animated Aurora Brand Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-20 dark:opacity-30 mix-blend-screen">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary rounded-full filter blur-[100px] md:blur-[150px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#C9A96E] rounded-full filter blur-[100px] md:blur-[150px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-[#8B1A10] rounded-full filter blur-[100px] md:blur-[150px] animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="w-full relative z-10 pt-24 pb-8 md:pt-36 md:pb-16">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-0">

            {/* === LEFT: Minimalist Text Content === */}
            <div className="w-full lg:w-[55%] space-y-5 lg:space-y-10 text-center lg:text-left order-2 lg:order-1 relative z-30">
              
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="text-[3.5rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[7.5rem] xl:text-[9.5rem] 2xl:text-[11.5rem] font-display font-black leading-[0.85] uppercase tracking-tighter"
              >
                <span className={`block ${isLight ? 'text-[#1A1A1A]' : 'text-[#F5F5F0]'}`}>Creative</span>
                <span className="block text-primary">Developer</span>
              </motion.h1>

              {/* Sparkles Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="w-full lg:w-[90%] xl:w-[80%]"
              >
                <SparklesEffect className="mt-2 mb-2 lg:-ml-6" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className={`text-lg md:text-2xl 2xl:text-3xl max-w-2xl 2xl:max-w-4xl mx-auto lg:mx-0 font-medium leading-snug md:leading-relaxed ${isLight ? 'text-[#6B6B60]' : 'text-muted'}`}
              >
                Hi, I'm <span className={`font-bold ${isLight ? 'text-[#1A1A1A]' : 'text-white'}`}>Ghasif</span>. I craft bold, minimalist, and high-performance digital experiences that make brands unforgettable.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-4"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 bg-primary text-white font-bold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_#8B1A1040] cursor-pointer text-sm tracking-widest uppercase"
                >
                  Start a Project
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <div className="flex items-center gap-3 justify-center text-sm font-bold tracking-widest uppercase text-primary">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  Available for work
                </div>
              </motion.div>
            </div>

            {/* === RIGHT: Minimalist Portrait with Brand Circle === */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full lg:w-[45%] relative flex items-center justify-center order-1 lg:order-2 h-[340px] sm:h-[500px] lg:h-[650px] 2xl:h-[750px] mt-6 lg:mt-0"
            >
              {/* Container perfectly sized to the circle */}
              <div className="relative w-[260px] h-[260px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px] 2xl:w-[580px] 2xl:h-[580px] flex items-center justify-center mt-10 lg:mt-0">
                
                {/* 1. Solid geometric circle background - Z-0 */}
                <div className="absolute inset-0 bg-primary rounded-full z-0 shadow-[0_0_80px_#8B1A1020]"></div>

                {/* 2. Base Image - Clipped perfectly to the circle (handles the curved bottom) - Z-10 */}
                <div className="absolute inset-0 rounded-full overflow-hidden z-10 flex items-end justify-center pointer-events-none">
                  <img
                    src="/ChatGPT Image May 9, 2026, 03_02_44 AM.png"
                    alt="Ghasif"
                    className="w-auto h-[120%] object-contain object-bottom"
                  />
                </div>

                {/* 3. Orbiting Elements - Z-20 */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                  {techBadges.map((badge, i) => (
                    <div
                      key={badge.label}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.0 + badge.delay * 0.2 }}
                        className="orbit-badge"
                        style={{
                          '--dur': `${20 + i * 2}s`,
                          animationDelay: `${-i * 3}s`,
                        } as React.CSSProperties}
                      >
                        <span className={`px-5 py-2.5 rounded-full text-[11px] font-bold tracking-widest uppercase whitespace-nowrap shadow-xl backdrop-blur-md border ${
                          isLight 
                            ? 'bg-white/80 text-primary border-primary/10' 
                            : 'bg-[#1A1A1A]/80 text-white border-white/10'
                        }`}>
                          {badge.label}
                        </span>
                      </motion.div>
                    </div>
                  ))}
                </div>

                {/* 4. Pop-out Image - Escapes the top, but cropped at the bottom to let the base image handle the curve - Z-30 */}
                <div 
                  className="absolute inset-0 z-30 flex items-end justify-center pointer-events-none"
                  style={{ clipPath: 'inset(-50% -50% 30% -50%)' }}
                >
                  <img
                    src="/ChatGPT Image May 9, 2026, 03_02_44 AM.png"
                    alt="Ghasif"
                    className="w-auto h-[120%] object-contain object-bottom drop-shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mt-8 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-30"
          >
            {[
              { num: '3+', label: 'Years Experience' },
              { num: '50+', label: 'Projects Delivered' },
              { num: '30+', label: 'Happy Clients' },
              { num: '100%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 md:p-6 text-center group hover:border-primary/30 transition-all duration-300 cursor-pointer">
                <p className="text-2xl md:text-3xl font-display font-black text-primary group-hover:text-secondary transition-colors">{stat.num}</p>
                <p className="text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
