import { useState, FormEvent, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Send, CheckCircle, Mail, User, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:ghasifofficial248@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const sectionScale = useTransform(scrollYProgress, [0.1, 0.8], [0.8, 1]);
  const sectionOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const sectionY = useTransform(scrollYProgress, [0.1, 0.8], [150, 0]);

  return (
    <section ref={containerRef} className="py-24 md:py-40 section-light relative overflow-hidden" id="contact">
      <div className="absolute inset-0 grid-pattern-light opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <motion.div 
        style={{ scale: sectionScale, opacity: sectionOpacity, y: sectionY }} 
        className="w-full max-w-[1920px] mx-auto px-6 lg:px-16 xl:px-20 2xl:px-24 relative z-10 origin-bottom"
      >
        <div className="max-w-6xl 2xl:max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 2xl:gap-32">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[0.3em] uppercase">
                <span className="status-dot" /> Get In Touch
              </span>
              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-display font-black leading-none text-[#1A1A1A] uppercase tracking-tighter">
                Are you <br />
                <span className="text-gradient">ready?</span>
              </h2>
            </div>
            <p className="text-lg text-[#5a5852] leading-relaxed max-w-md">
              Have a project in mind or just want to chat? Fill out the form and I'll get back to you within 24 hours.
            </p>
            <div className="space-y-4 pt-4">
              <a href="mailto:ghasifofficial248@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-[#F5F5F0] transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-wider text-[#5a5852] uppercase">Email</p>
                  <p className="text-[#1A1A1A] font-medium group-hover:text-primary transition-colors">ghasifofficial248@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-wider text-[#5a5852] uppercase">Location</p>
                  <p className="text-[#1A1A1A] font-medium">Sahiwal, Punjab, Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-card rounded-2xl p-10 md:p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px] gap-6">
                <div className="p-4 rounded-full bg-primary/10"><CheckCircle className="w-12 h-12 text-primary" /></div>
                <h3 className="text-2xl font-display font-bold text-[#1A1A1A]">Message Sent!</h3>
                <p className="text-[#5a5852] max-w-xs">Thank you for reaching out. I'll review your message and get back to you soon.</p>
                <button onClick={() => setSubmitted(false)} className="mt-4 text-sm font-bold text-primary hover:text-secondary transition-colors cursor-pointer">Send another message →</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 md:p-10 space-y-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#5a5852] uppercase"><User className="w-3.5 h-3.5" /> Your Name</label>
                  <input id="contact-name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className="w-full bg-[#c4bfba]/50 border border-[#b5b0aa] rounded-xl px-5 py-3.5 text-[#1A1A1A] placeholder-[#8A8A80]/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-200" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#5a5852] uppercase"><Mail className="w-3.5 h-3.5" /> Your Email</label>
                  <input id="contact-email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" className="w-full bg-[#c4bfba]/50 border border-[#b5b0aa] rounded-xl px-5 py-3.5 text-[#1A1A1A] placeholder-[#8A8A80]/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-200" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#5a5852] uppercase"><MessageSquare className="w-3.5 h-3.5" /> Project Details</label>
                  <textarea id="contact-message" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell me about your project, budget, and timeline..." className="w-full bg-[#c4bfba]/50 border border-[#b5b0aa] rounded-xl px-5 py-3.5 text-[#1A1A1A] placeholder-[#8A8A80]/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-200 resize-none" />
                </div>
                <button type="submit" disabled={sending} className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary-light text-[#F5F5F0] font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_#8B1A1040] disabled:opacity-50 cursor-pointer text-sm tracking-wide uppercase">
                  {sending ? (<><div className="w-4 h-4 border-2 border-[#F5F5F0]/30 border-t-[#F5F5F0] rounded-full animate-spin" /> SENDING...</>) : (<>SEND MESSAGE <Send className="w-4 h-4" /></>)}
                </button>
                <p className="text-center text-xs text-[#5a5852]/60">Your message will open in your email client for sending.</p>
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
