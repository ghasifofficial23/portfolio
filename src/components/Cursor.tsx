import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function Cursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 200 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
      const target = e.target as HTMLElement;
      const isClickable = window.getComputedStyle(target).cursor === 'pointer' || !!target.closest('a, button, [role="button"]');
      setIsPointer(!!isClickable);
    };
    const hideCursor = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', hideCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', hideCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      animate={{
        scale: isPointer ? 2.5 : 1,
        opacity: isVisible ? 1 : 0,
        backgroundColor: isPointer ? 'rgba(139, 26, 16, 0.3)' : 'rgba(245, 245, 240, 0.8)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />
  );
}
