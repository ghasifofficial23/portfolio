import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ExternalLink, Github, Code, Layout, Globe, Terminal, Palette, Smartphone, Menu, X } from 'lucide-react';

const allProjects = [
  {
    id: 1,
    title: 'Lumina Dental Studio',
    category: 'Healthcare • Dashboard',
    year: '2026',
    description: 'A comprehensive patient management system and dental studio landing page featuring appointment scheduling, clinical history tracking, and an admin dashboard.',
    tech: ['React', 'Supabase', 'TailwindCSS', 'TypeScript'],
    features: ['Patient intake forms', 'Appointment calendar', 'Clinical records', 'Admin dashboard'],
    icon: <Layout className="w-5 h-5" />,
    color: 'from-secondary/20 to-secondary/5',
    url: 'https://dentist-brown-chi.vercel.app/'
  },
  {
    id: 2,
    title: 'German Fitness & Sports',
    category: 'Fitness • E-Commerce',
    year: '2026',
    description: 'An elite fitness training center platform featuring membership registration, a supplements store, fitness blogs, and an admin control panel.',
    tech: ['React', 'Node.js', 'Vercel', 'TailwindCSS'],
    features: ['Membership portal', 'E-commerce store', 'Fitness blog', 'Admin panel'],
    icon: <Globe className="w-5 h-5" />,
    color: 'from-primary/20 to-primary/5',
    url: 'https://german-fitness.vercel.app/'
  },
  {
    id: 3,
    title: 'BENNY™ Fitness',
    category: 'Landing Page • Health',
    year: '2026',
    description: 'A premium gym landing page with modern typography, smooth animations, and a high-end visual aesthetic designed to boost conversions.',
    tech: ['React', 'TailwindCSS', 'Vite', 'Framer Motion'],
    features: ['Modern typography', 'Smooth animations', 'High-end UI/UX', 'Responsive design'],
    icon: <Palette className="w-5 h-5" />,
    color: 'from-accent/20 to-accent/5',
    url: 'https://gym-landing-page-puce-gamma.vercel.app/'
  },
  {
    id: 4,
    title: 'Developer Blog',
    category: 'Full Stack',
    year: '2025',
    description: 'A markdown-powered developer blog with syntax highlighting, tag filtering, reading time estimates, dark mode, and an integrated newsletter system.',
    tech: ['Next.js', 'MDX', 'TailwindCSS', 'Vercel'],
    features: ['MDX articles', 'Code highlighting', 'Tag system', 'RSS feed'],
    icon: <Code className="w-5 h-5" />,
    color: 'from-accent/15 to-secondary/10',
  },
  {
    id: 5,
    title: 'Mobile Banking App',
    category: 'UI/UX Design',
    year: '2024',
    description: 'A fintech mobile application design with biometric login, transaction tracking, budget analysis, and a clean minimal interface optimized for usability.',
    tech: ['Figma', 'React Native', 'TypeScript', 'Firebase'],
    features: ['Biometric auth', 'Transaction history', 'Budget tools', 'Dark mode'],
    icon: <Smartphone className="w-5 h-5" />,
    color: 'from-secondary/15 to-primary/10',
  },
  {
    id: 6,
    title: 'SaaS Landing Page',
    category: 'Landing Page',
    year: '2024',
    description: 'A high-conversion landing page for a SaaS product with animated feature showcases, pricing tiers, testimonial carousels, and newsletter integration.',
    tech: ['Next.js', 'TailwindCSS', 'Framer Motion', 'Resend'],
    features: ['A/B tested CTAs', 'Animated sections', 'Pricing tables', 'Email capture'],
    icon: <Terminal className="w-5 h-5" />,
    color: 'from-primary/15 to-accent/10',
  },
];

interface ProjectsPageProps {
  onClose: () => void;
}

export default function ProjectsPage({ onClose }: ProjectsPageProps) {
  const [selected, setSelected] = useState(allProjects[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-dark"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-border/30">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-sm font-bold text-muted hover:text-light transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back to Home</span>
        </button>
        <span className="hidden md:inline text-sm font-display font-bold text-light">
          All Projects <span className="text-primary">({allProjects.length})</span>
        </span>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center p-2 -mr-2 text-muted hover:text-light transition-colors cursor-pointer"
          aria-label="Toggle projects menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className="flex flex-col md:flex-row h-[calc(100vh-65px)] relative overflow-hidden">
        {/* === LEFT SIDEBAR: Project List === */}
        <div className={`
          absolute md:relative z-50 w-full md:w-[380px] lg:w-[420px] h-full bg-[#0A0A0A] border-r border-border/30 overflow-y-auto shrink-0
          transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          {allProjects.map((project) => (
            <motion.button
              key={project.id}
              onClick={() => {
                setSelected(project);
                setIsMobileMenuOpen(false);
              }}
              whileHover={{ x: 4 }}
              className={`w-full text-left px-6 py-5 border-b border-border/20 flex items-center gap-4 transition-all duration-200 cursor-pointer ${
                selected.id === project.id
                  ? 'bg-primary/10 border-l-2 border-l-primary'
                  : 'hover:bg-dark-card border-l-2 border-l-transparent'
              }`}
            >
              <div className={`p-2.5 rounded-xl shrink-0 ${
                selected.id === project.id ? 'bg-primary text-light' : 'bg-dark-elevated text-muted'
              } transition-colors`}>
                {project.icon}
              </div>
              <div className="min-w-0">
                <h3 className={`font-display font-bold text-sm truncate ${
                  selected.id === project.id ? 'text-light' : 'text-light/70'
                } transition-colors`}>
                  {project.title}
                </h3>
                <p className="text-[10px] font-bold tracking-wider text-muted uppercase mt-0.5">
                  {project.category} • {project.year}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* === RIGHT: Preview === */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl"
            >
              {/* Preview image area */}
              <div className={`w-full aspect-video rounded-2xl bg-gradient-to-br ${selected.color} mb-8 flex items-center justify-center overflow-hidden relative border border-border/20`}>
                {selected.url ? (
                  <>
                    <div className="absolute inset-0 bg-transparent z-10 hidden sm:block pointer-events-auto group-hover:pointer-events-none" />
                    <iframe 
                      src={selected.url} 
                      className="w-full h-full border-none pointer-events-none" 
                      title={selected.title} 
                      tabIndex={-1} 
                      scrolling="no"
                    />
                    {/* Add a button overlay to click through to the live site since iframe is non-interactive */}
                    <a href={selected.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-dark/60 backdrop-blur-sm cursor-pointer">
                      <span className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-light font-bold text-sm">
                        <ExternalLink className="w-4 h-4" /> Open Live Site
                      </span>
                    </a>
                  </>
                ) : (
                  <div className="w-[85%] h-[75%] bg-dark-card/60 rounded-xl p-6 backdrop-blur-sm border border-border/30">
                    <div className="flex gap-2 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-secondary/40" />
                      <div className="w-2.5 h-2.5 rounded-full bg-muted/30" />
                    </div>
                    <div className="space-y-3">
                      <div className="w-3/4 h-3 bg-light/5 rounded-full" />
                      <div className="w-1/2 h-3 bg-light/5 rounded-full" />
                      <div className="w-full h-20 bg-light/3 rounded-xl mt-4" />
                    </div>
                  </div>
                )}
                
                <div className="absolute bottom-4 right-4 text-6xl font-display font-black text-light/20 drop-shadow-md mix-blend-overlay pointer-events-none">
                  0{selected.id}
                </div>
              </div>

              {/* Title & category */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">{selected.category} • {selected.year}</span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-light mt-2">{selected.title}</h2>
                </div>
                <div className="flex gap-3 shrink-0">
                  {selected.url && (
                    <a href={selected.url} target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-xl text-muted hover:text-primary hover:border-primary/30 transition-all cursor-pointer" aria-label="View live site">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  <button className="p-3 glass-card rounded-xl text-muted hover:text-primary hover:border-primary/30 transition-all cursor-pointer" aria-label="View source code">
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted text-base md:text-lg leading-relaxed mb-8">
                {selected.description}
              </p>

              {/* Tech stack */}
              <div className="mb-8">
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-secondary mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((t) => (
                    <span key={t} className="glass-card px-4 py-2 rounded-xl text-xs font-bold tracking-wider text-light/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-secondary mb-4">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selected.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 glass-card rounded-xl px-4 py-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      <span className="text-sm text-light/70 font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
