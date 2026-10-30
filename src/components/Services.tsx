import { motion } from 'framer-motion';
import { Layout, Globe2, Smartphone, ShoppingCart, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Globe2,
    title: 'Business Websites',
    description: 'High-performance, responsive websites built to establish a powerful and professional online presence.',
    delay: 0.1
  },
  {
    icon: Layout,
    title: 'Industry Platforms',
    description: 'Custom-tailored digital solutions for healthcare, automotive, real estate, and hospitality sectors.',
    delay: 0.2
  },
  {
    icon: Smartphone,
    title: 'Landing Pages',
    description: 'Laser-focused, conversion-optimized landing pages designed for high-impact campaigns and lead generation.',
    delay: 0.3
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce UI',
    description: 'Seamless product catalogs, dynamic filtering, and shopping cart interfaces that drive modern sales.',
    delay: 0.4
  }
];

export function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-20 lg:py-28 bg-[#EAEAEA] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
          className="mb-10 max-w-2xl relative"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-[1.15] text-primary">
            Digital experiences <br/>
            <span className="relative inline-block mt-1">
              <span className="relative z-10 text-primary">engineered for growth.</span>
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8, ease: "circOut" }}
                className="absolute bottom-1 left-0 h-3 bg-accent/80 -z-10 rounded-sm"
              ></motion.span>
            </span>
          </h2>
          <p className="text-sm lg:text-base text-secondary font-medium leading-relaxed max-w-xl">
            I specialize in building premium front-end architectures that combine beautiful aesthetics with flawless technical execution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.a 
                href="#contact"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: service.delay, type: "spring", bounce: 0.4 }}
                className="group relative p-8 rounded-3xl bg-white border border-border overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-border/80 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Decorative background icon */}
                <Icon className="absolute -bottom-6 -right-6 w-32 h-32 text-border/50 group-hover:text-accent/10 transition-colors duration-500 transform -rotate-12 group-hover:rotate-0" />

                <div className="relative z-10 flex flex-col flex-grow">
                  <div className="w-12 h-12 rounded-2xl bg-background border border-border/60 shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:border-accent transition-all duration-500 group-hover:-rotate-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-primary transition-colors leading-tight">{service.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  <span className="flex items-center text-sm font-bold text-primary group-hover:text-accent transition-colors duration-300 mt-auto">
                    Discuss Project
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </div>
              </motion.a>
            )
          })}
        </div>

      </div>
    </section>
  );
}
