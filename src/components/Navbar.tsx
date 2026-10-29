import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { siteConfig } from '../config/site';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
      setIsOpen(false);
    } else {
      setIsHidden(false);
    }
  });

  const links = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 }
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-4 md:top-6 left-0 right-0 z-50 mx-auto w-[calc(100%-2rem)] max-w-6xl"
    >
      <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl md:rounded-full px-4 sm:px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary text-background flex items-center justify-center rounded-full group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300 shadow-sm border border-primary">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base leading-tight tracking-tight text-primary">{siteConfig.brandLabel}</span>
            <span className="text-[10px] text-secondary font-medium tracking-wide uppercase">{siteConfig.statusLabel}</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center bg-background/50 p-1.5 rounded-full border border-white/60 shadow-inner">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-5 py-2 text-sm font-semibold text-secondary hover:text-primary transition-colors rounded-full hover:bg-white hover:shadow-sm"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="btn-primary py-2 px-6 text-sm shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all">
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm border border-border focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 8, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 md:hidden bg-white/90 backdrop-blur-xl border border-white/50 shadow-2xl rounded-2xl overflow-hidden mt-2 p-2"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-semibold text-primary px-4 py-3 rounded-xl hover:bg-background transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full mt-2 py-3 shadow-lg shadow-accent/20"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
