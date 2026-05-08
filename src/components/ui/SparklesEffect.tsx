import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function SparklesEffect({ className = '' }: { className?: string }) {
  const [sparkles, setSparkles] = useState<any[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      return Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100 + '%',
        y: Math.random() * 100 + '%',
        size: Math.random() * 2 + 1 + 'px',
        duration: Math.random() * 2 + 1.5,
        delay: Math.random() * 2,
        color: Math.random() > 0.5 ? '#8B1A10' : '#D1BFA5',
      }));
    };
    setSparkles(generateSparkles());
  }, []);

  return (
    <div className={`w-full relative flex flex-col items-center justify-center h-16 ${className}`}>
      {/* Core glowing line */}
      <div className="absolute inset-x-0 mx-auto top-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-primary to-transparent h-[2px] w-[80%] md:w-[60%] blur-sm" />
      <div className="absolute inset-x-0 mx-auto top-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-primary to-transparent h-px w-[80%] md:w-[60%]" />
      
      {/* Bright center line */}
      <div className="absolute inset-x-0 mx-auto top-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#D1BFA5] to-transparent h-[4px] w-[40%] md:w-[30%] blur-sm" />
      <div className="absolute inset-x-0 mx-auto top-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white to-transparent h-px w-[40%] md:w-[30%]" />

      {/* Scattered animated sparkles */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10 mask-image:linear-gradient(to_bottom,transparent,black,transparent)">
        {sparkles.map((s) => (
          <motion.div
            key={s.id}
            className="absolute rounded-full"
            style={{ 
              left: s.x, 
              top: s.y, 
              width: s.size, 
              height: s.size,
              background: s.color,
              boxShadow: `0 0 10px ${s.color}, 0 0 20px ${s.color}`
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              delay: s.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
