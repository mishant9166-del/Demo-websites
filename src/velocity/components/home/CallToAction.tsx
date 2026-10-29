import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="relative py-28 bg-[#080A0B] border-t border-white/10 text-[#F5F7F7] overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=80"
          alt="Sports car silhouette"
          className="w-full h-full object-cover filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080A0B] via-[#080A0B]/80 to-[#080A0B]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Lime Accent Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-[#C8FF45] mx-auto mb-8 rounded-full"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6"
        >
          Your next drive starts here.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base sm:text-lg text-[#A0A7AC] max-w-xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Explore the collection and find a vehicle that fits your style.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/velocity/inventory"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-sm bg-[#C8FF45] text-[#080A0B] text-xs font-bold uppercase tracking-widest hover:bg-[#b5eb3b] hover:shadow-[0_0_30px_rgba(200,255,69,0.35)] transition-all duration-300 group"
          >
            <span>Browse Inventory</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            to="/velocity/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-[#171B1E] border border-white/20 text-[#F5F7F7] text-xs font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4 text-[#C8FF45]" />
            <span>Contact the Team</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
