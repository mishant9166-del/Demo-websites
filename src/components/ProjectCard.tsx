import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, LayoutTemplate } from 'lucide-react';
import type { Project } from '../lib/types';

interface ProjectCardProps {
  project: Project;
  onOpenDetails?: (project: Project) => void;
}

export function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  const cardInner = (
    <>
      {/* Image / Placeholder Area */}
      <div className="relative h-48 w-full bg-gray-50 overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]"></div>
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-tr from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        {project.previewImage ? (
          <img 
            src={project.previewImage} 
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-secondary relative z-10">
            <motion.div 
              whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
              className="bg-white p-3 rounded-2xl shadow-sm border border-border/50 group-hover:shadow-md transition-all group-hover:-translate-y-1"
            >
              <LayoutTemplate className="w-6 h-6 text-primary/30 group-hover:text-primary transition-colors" />
            </motion.div>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow bg-white text-left">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold tracking-widest text-secondary uppercase">
            {project.category}
          </span>
          {project.isResponsive && (
            <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-1 bg-gray-50 border border-border/40 rounded-md text-secondary">
              Responsive
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-tight text-primary">
          {project.name}
        </h3>
        
        <p className="text-xs text-secondary mb-4 flex-grow line-clamp-4 leading-normal opacity-90">
          {project.description}
        </p>

        <div className="pt-4 border-t border-border/60 flex items-center justify-between mt-auto">
          <div className="w-full">
            {project.demoUrl ? (
              <div className="flex items-center justify-between w-full text-xs font-bold text-primary group-hover:text-accent transition-colors">
                <span>View Live Demo</span>
                <div className="w-8 h-8 rounded-full bg-gray-50 border border-border/40 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-primary transition-all">
                  <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-300" />
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between w-full text-xs font-bold text-secondary/50">
                <span>Demo Coming Soon</span>
                <div className="w-8 h-8 rounded-full bg-gray-50 border border-border/40 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );

  const cardClasses = `group relative bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-border/80 transition-all duration-300 flex flex-col h-full block text-left no-underline select-none`;

  if (project.demoUrl) {
    return (
      <motion.div 
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        <Link to={project.demoUrl} className={cardClasses}>
          {cardInner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onClick={() => onOpenDetails?.(project)}
      className={`${cardClasses} cursor-pointer`}
    >
      {cardInner}
    </motion.div>
  );
}
