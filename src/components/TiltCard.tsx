import React, { useRef, useState } from "react";
import { motion } from "motion/react";

export default function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate percentage from center (-1 to 1)
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    
    setPosition({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }}
      animate={{
        rotateX: isHovered ? position.y * -10 : 0,
        rotateY: isHovered ? position.x * 10 : 0,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.5,
      }}
      style={{
        transformPerspective: 1200,
      }}
      className={`relative w-full ${className}`}
    >
      {children}
    </motion.div>
  );
}
