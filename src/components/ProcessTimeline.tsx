import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Understand',
    description: 'We dive deep into your business, audience, goals, and required website features.'
  },
  {
    number: '02',
    title: 'Design',
    description: 'Establishing visual direction, page structure, typography, colors, and hierarchy.'
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Building a responsive frontend with reusable components and fluid interactions.'
  },
  {
    number: '04',
    title: 'Refine',
    description: 'Testing layouts, improving responsiveness, checking interactions, and delivery.'
  }
];

export function ProcessTimeline() {
  return (
    <section id="process" className="relative min-h-[600px] flex flex-col justify-center py-24 bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[30%] left-[-10%] w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
          className="mb-16 max-w-2xl relative"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background border border-border shadow-sm text-primary text-[10px] font-bold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            How I Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-[1.15] text-primary">
            A clear process, <br/>
            <span className="relative inline-block mt-1">
              <span className="relative z-10">from idea to finish.</span>
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8, ease: "circOut" }}
                className="absolute bottom-1 left-0 h-3 bg-accent/80 -z-10 rounded-sm"
              ></motion.span>
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[50px] left-0 w-full h-[2px] bg-border/60 z-0" />
          
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15, type: "spring", bounce: 0.4 }}
                className="group relative p-8 rounded-3xl bg-background border border-border overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                {/* Connecting Line (Mobile) */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-border/60" />
                )}
                
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Large watermark number */}
                <div className="absolute -bottom-4 -right-2 text-[120px] font-black text-border/40 group-hover:text-accent/20 transition-colors duration-500 leading-none select-none">
                  {step.number}
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-border/60 shadow-sm flex items-center justify-center text-primary font-extrabold text-lg mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:border-accent transition-all duration-500 group-hover:-rotate-3">
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-primary transition-colors leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed mb-2 relative z-10">
                    {step.description}
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
