import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Zap, Briefcase } from 'lucide-react';

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const item: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex flex-col justify-center pt-24 pb-4 overflow-hidden">
      
      {/* Animated Background Mesh/Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[40%] rounded-full bg-border/80 blur-[100px] mix-blend-multiply animate-pulse" style={{ animationDuration: '10s' }}></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >

            <motion.h1 variants={item} className="text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4 tracking-tight">
              Websites built <br/> with purpose. <br />
              <span className="text-secondary/80 font-semibold">Designed to make businesses </span>
              <span className="relative whitespace-nowrap inline-block mt-1">
                <span className="relative z-10 text-primary">stand out.</span>
                <motion.span 
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: '100%', opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: "circOut" }}
                  className="absolute bottom-1 left-0 h-3 bg-accent/80 -z-10 rounded-sm"
                ></motion.span>
              </span>
            </motion.h1>

            <motion.p variants={item} className="text-sm lg:text-base text-secondary mb-5 max-w-xl leading-relaxed font-medium">
              I design and develop modern, responsive websites for businesses that want a stronger online presence. Explore the concepts, see the details, and imagine what we could build for your business.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 mb-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#work" 
                className="btn-primary group py-2 px-5 text-sm shadow-xl shadow-primary/10 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Explore the Work
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="btn-secondary py-2 px-5 text-sm bg-white hover:bg-gray-50 shadow-sm"
              >
                Discuss a Project
              </motion.a>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-4 pt-4 border-t border-border/60">
              {[
                { icon: Smartphone, text: 'Responsive by Design' },
                { icon: Zap, text: 'Interaction Focused' },
                { icon: Briefcase, text: 'Built for Business' }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-1.5 text-[11px] font-bold text-primary/80 bg-white px-2.5 py-1 rounded-lg shadow-sm border border-border/50"
                >
                  <feature.icon className="w-3 h-3 text-accent fill-accent/20" />
                  {feature.text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Abstract Composition / Preview Graphic */}
          <div className="relative hidden lg:block h-[300px] xl:h-[350px] w-full perspective-1000">
            <motion.div 
              initial={{ opacity: 0, rotateY: 10, rotateX: 5, scale: 0.9 }}
              animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
              className="absolute inset-0 rounded-3xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full p-8">
                
                {/* Glowing orb behind graphics */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/20 rounded-full blur-3xl"></div>

                {/* Simulated browser windows with continuous floating */}
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: [-5, 5, -5], opacity: 1 }}
                  whileHover={{ scale: 1.05, rotate: -2, zIndex: 40 }}
                  transition={{ 
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 0.6, delay: 0.4 },
                    scale: { duration: 0.2 },
                    rotate: { duration: 0.2 }
                  }}
                  className="absolute top-0 left-0 w-[75%] h-44 bg-white/80 backdrop-blur-xl border border-white shadow-2xl rounded-2xl overflow-hidden z-10 cursor-pointer"
                >
                  <div className="h-8 bg-gray-50/50 border-b border-gray-100 flex items-center px-4 gap-2 backdrop-blur-md">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/90 shadow-inner"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/90 shadow-inner"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/90 shadow-inner"></div>
                  </div>
                  <div className="p-4 flex flex-col gap-3">
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1, duration: 1.5, ease: "circOut" }}
                      className="h-12 bg-gray-100 rounded-xl overflow-hidden relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                    </motion.div>
                    <div className="w-2/3 h-2 bg-gray-100 rounded-full"></div>
                    <div className="w-1/2 h-2 bg-gray-100 rounded-full"></div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: [5, -5, 5], opacity: 1 }}
                  whileHover={{ scale: 1.05, rotate: 2, zIndex: 40 }}
                  transition={{ 
                    y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                    opacity: { duration: 0.6, delay: 0.6 },
                    scale: { duration: 0.2 },
                    rotate: { duration: 0.2 }
                  }}
                  className="absolute bottom-0 -right-2 w-[65%] h-36 bg-dark/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-2xl overflow-hidden z-20 cursor-pointer"
                >
                  <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-inner"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-inner"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-inner"></div>
                  </div>
                  <div className="p-4 flex flex-col gap-3">
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                      className="w-1/3 h-4 bg-accent rounded-md origin-left shadow-[0_0_15px_rgba(199,243,107,0.3)]"
                    ></motion.div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full mt-1"></div>
                    <div className="w-4/5 h-1.5 bg-white/10 rounded-full"></div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full"></div>
                  </div>
                </motion.div>

                {/* Floating tags */}
                <motion.div 
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/4 -right-4 bg-accent text-primary px-4 py-2 rounded-xl font-bold text-xs shadow-xl shadow-accent/20 z-30 border border-white/40 backdrop-blur-md"
                >
                  React + Vite
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 left-6 bg-white text-primary px-3 py-1.5 rounded-lg font-bold text-[10px] shadow-xl z-30 border border-border flex items-center gap-1.5"
                >
                  <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
                  Performance First
                </motion.div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>

      {/* Global CSS for shimmer effect if not in tailwind */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
}
