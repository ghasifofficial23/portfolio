import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav className="fixed top-4 left-4 right-4 z-[110] nav-glass rounded-2xl px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-1.5 group cursor-pointer">
          <span className="text-xl font-display font-bold tracking-tight">{theme === 'dark' ? <span className="text-[#F5F5F0]">Ghasif</span> : <span className="text-[#1A1A1A]">Ghasif</span>}</span>
          <span className="status-dot group-hover:scale-150 transition-transform duration-300" />
          <span className="text-xl font-display font-bold tracking-tight text-muted group-hover:text-primary transition-colors">Dev</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted hover:text-primary transition-colors duration-200 cursor-pointer">
                {link.label}
              </a>
            ))}
          </div>
          <div className="w-px h-4 bg-border" />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl hover:bg-primary/10 transition-colors duration-200 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-secondary hover:text-accent transition-colors" />
            ) : (
              <Moon className="w-4 h-4 text-primary hover:text-primary-light transition-colors" />
            )}
          </button>

          <a href="mailto:ghasifofficial248@gmail.com" className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-secondary hover:text-primary transition-colors cursor-pointer">
            LET'S TALK <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button onClick={toggleTheme} className="p-2 cursor-pointer" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun className="w-4 h-4 text-secondary" /> : <Moon className="w-4 h-4 text-primary" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-muted hover:text-primary transition-colors cursor-pointer" aria-label="Toggle menu">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[105] flex flex-col items-center justify-center"
            style={{ background: theme === 'dark' ? '#0A0A0A' : '#F5F5F0' }}
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.a key={link.label} href={link.href} onClick={() => setIsOpen(false)} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-4xl font-display font-bold hover:text-primary transition-colors cursor-pointer">
                  {link.label}
                </motion.a>
              ))}
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-12 flex gap-6 text-xs font-bold tracking-[0.3em] text-muted">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors cursor-pointer">GITHUB</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors cursor-pointer">LINKEDIN</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors cursor-pointer">TWITTER</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
