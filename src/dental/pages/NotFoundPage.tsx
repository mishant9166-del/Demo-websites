import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Sparkles, Calendar, HelpCircle } from 'lucide-react';
import { ToothIcon } from '../components/common/ToothIcon';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        {/* Animated Tooth Icon badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative inline-block mb-8"
        >
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-[#E6F6F2] to-[#F0F8F6] border border-[#0D9488]/20 flex items-center justify-center text-[#0D9488] shadow-lg shadow-[#0D9488]/10 mx-auto">
            <ToothIcon className="w-12 h-12" />
          </div>
          <span className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-[#0D9488] text-white text-xs font-black tracking-wider shadow">
            404
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-extrabold text-[#152B32] tracking-tight mb-3"
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base text-[#687A80] mb-8 leading-relaxed"
        >
          We couldn't locate the clinical page or resource you were looking for. It may have been moved, renamed, or is temporarily unavailable.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            to="/dental"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0D9488] text-white text-sm font-semibold hover:bg-[#115E59] shadow-md shadow-[#0D9488]/20 transition-all cursor-pointer"
          >
            <Home className="w-4 h-4" />
            Back to Dental Home
          </Link>
          <Link
            to="/dental/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-[#152B32] text-sm font-semibold hover:text-[#0D9488] border border-[#E3ECE9] transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#0D9488]" />
            Explore Services
          </Link>
        </motion.div>

        {/* Secondary Helpful Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-[#E3ECE9] flex items-center justify-center gap-6 text-xs text-[#687A80]"
        >
          <Link to="/dental/appointment" className="hover:text-[#0D9488] transition-colors inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" /> Book Consultation
          </Link>
          <span>•</span>
          <Link to="/dental/faq" className="hover:text-[#0D9488] transition-colors inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" /> Clinical FAQs
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
