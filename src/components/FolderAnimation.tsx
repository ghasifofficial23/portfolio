import { motion } from 'motion/react';
import { Folder, ArrowRight } from 'lucide-react';

interface FolderAnimationProps {
  onOpen: () => void;
}

export default function FolderAnimation({ onOpen }: FolderAnimationProps) {
  return (
    <section className="py-28 md:py-40 relative section-light overflow-hidden">
      {/* Background label */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
        <span className="text-[40vw] font-black font-display select-none tracking-tighter text-primary">WORK</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12 max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-full px-5 py-2.5"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">Full Archive</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-[7vw] font-black leading-[0.85] tracking-tighter uppercase text-[#1A1A1A]"
          >
            Curious? Open <br />
            <span className="italic font-light text-primary/60 flex items-center justify-center gap-4">
              The Archive
              <ArrowRight className="w-10 h-10 md:w-[5vw] md:h-[5vw] text-primary" />
            </span>
          </motion.h2>

          {/* Interactive Folder */}
          <motion.div
            whileHover={{ scale: 1.04, rotate: -1.5 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpen}
            className="relative cursor-pointer group"
          >
            <div className="relative w-72 h-56 md:w-[32rem] md:h-[24rem] transition-all duration-500 group-hover:translate-y-[-20px]">
              {/* Back flap */}
              <div className="absolute inset-0 bg-[#bab5af] rounded-[2rem] shadow-2xl overflow-hidden border border-[#b5b0aa]">
                <div className="absolute top-0 right-0 p-8 w-full h-full opacity-10 flex flex-wrap gap-4">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-10 h-10 bg-primary/20 rounded-lg" />
                  ))}
                </div>
              </div>

              {/* Paper sheets sticking out */}
              <motion.div
                animate={{ y: [0, -35, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-[90%] h-full bg-[#d5d0cb] rounded-[1.5rem] shadow-lg border border-[#b5b0aa] p-8 flex flex-col gap-4 overflow-hidden group-hover:top-[-55px] transition-all duration-500"
              >
                <div className="w-full h-4 bg-[#1A1A1A]/8 rounded-full" />
                <div className="w-2/3 h-4 bg-[#1A1A1A]/8 rounded-full" />
                <div className="w-1/2 h-4 bg-[#1A1A1A]/8 rounded-full" />
                <div className="mt-auto w-full h-28 bg-secondary/20 rounded-xl" />
              </motion.div>

              {/* Front flap */}
              <div className="absolute bottom-0 left-0 w-full h-[85%] bg-primary rounded-b-[2rem] rounded-tr-[2rem] shadow-xl flex items-center justify-center p-12 group-hover:bg-primary-light transition-colors duration-500">
                <div className="flex flex-col items-center gap-4 text-[#F5F5F0]">
                  <Folder className="w-14 h-14 md:w-16 md:h-16 opacity-40 group-hover:opacity-70 transition-opacity" />
                  <span className="text-xs font-bold tracking-[0.5em] uppercase">Open All Cases</span>
                </div>
              </div>
            </div>

            {/* Folder Tab */}
            <div className="absolute top-0 left-0 w-24 h-12 bg-primary rounded-t-xl -mt-4 ml-6 group-hover:bg-primary-light transition-colors duration-500" />

            {/* Hover glow */}
            <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ boxShadow: '0 0 80px #8B1A1030' }} />
          </motion.div>

          <p className="text-[#5a5852] text-xs font-bold tracking-[0.3em] uppercase">
            Click the folder to explore all projects
          </p>
        </div>
      </div>
    </section>
  );
}
