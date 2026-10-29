import { motion } from 'framer-motion';
import { ShieldCheck, MonitorSmartphone, Zap, Code2 } from 'lucide-react';

const standards = [
  { 
    icon: <Zap className="w-8 h-8" />, 
    title: 'Lightning Fast Performance', 
    description: 'Optimized assets, lazy loading, and modern frameworks ensure your site loads instantly and keeps users engaged. Speed is a feature.' 
  },
  { 
    icon: <MonitorSmartphone className="w-8 h-8" />, 
    title: 'Flawless Responsiveness', 
    description: 'Every layout is meticulously crafted to adapt perfectly to any screen size, ensuring a premium experience on mobile, tablet, and desktop.' 
  },
  { 
    icon: <ShieldCheck className="w-8 h-8" />, 
    title: 'Accessible by Design', 
    description: 'Built with ARIA standards, proper semantic HTML, and rigorous color contrast checks so your digital presence is usable by everyone.' 
  },
  { 
    icon: <Code2 className="w-8 h-8" />, 
    title: 'Clean Architecture', 
    description: 'Modular, maintainable codebases that are easy to scale, update, and hand off to other developers in the future. No spaghetti code.' 
  }
];

export function QualityStandards() {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column - Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border shadow-sm text-primary text-[10px] font-bold tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                Development Standards
              </span>
              
              <h2 className="text-4xl lg:text-5xl lg:leading-[1.15] font-extrabold mb-6 tracking-tight text-primary">
                Good design is more than a <span className="relative inline-block mt-2">
                  <span className="relative z-10">pretty face.</span>
                  <motion.span 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "circOut" }}
                    className="absolute bottom-1 left-0 h-3 bg-accent/80 -z-10 rounded-sm"
                  ></motion.span>
                </span>
              </h2>
              
              <p className="text-base lg:text-lg text-secondary font-medium leading-relaxed mb-8">
                I don't just build websites that look good on my screen. I engineer robust digital products focused on code quality, smooth interactions, and flawless cross-device performance.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Compact 2x2 Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 lg:gap-6">
            {standards.map((std, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
                className="group bg-white rounded-3xl p-6 lg:p-8 border border-border shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden flex flex-col h-full"
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col flex-grow">
                  <div className="w-12 h-12 rounded-2xl bg-background border border-border/80 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:border-accent transition-all duration-500 group-hover:-rotate-3 shadow-sm">
                    {std.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 text-primary group-hover:text-primary transition-colors leading-tight">
                    {std.title}
                  </h3>
                  <p className="text-secondary text-[13px] leading-relaxed flex-grow">
                    {std.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
