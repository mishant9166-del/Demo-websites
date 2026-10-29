import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X, ArrowRight, LayoutTemplate, RotateCcw } from 'lucide-react';
import type { Project } from '../lib/types';
import { qualityChecklist } from '../data/checklist';
import { useProjectChecklist } from '../hooks/useProjectChecklist';
import { determineProjectStatus } from '../lib/projectStatus';

interface ProjectDetailsModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetailsModal({ project, onClose }: ProjectDetailsModalProps) {
  const { state, toggleItem, resetChecklist, percentage, completedCount, totalCount } = useProjectChecklist(project.id);
  const currentStatus = determineProjectStatus(project, state);

  // Prevent background scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-5xl max-h-[90vh] bg-background rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-primary hover:bg-white transition-colors border border-border"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Details */}
        <div className="w-full md:w-1/2 overflow-y-auto border-r border-border bg-white">
          <div className="p-8 sm:p-10">
            <div className="aspect-[4/3] bg-background rounded-xl overflow-hidden mb-8 border border-border">
              {project.previewImage ? (
                <img src={project.previewImage} alt={project.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-secondary">
                  <LayoutTemplate className="w-16 h-16 mb-4 opacity-50" />
                  <span className="text-sm font-medium">Concept Preview</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-widest text-secondary uppercase">
                {String(project.id).padStart(2, '0')} — {project.category}
              </span>
            </div>
            
            <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
            <p className="text-secondary leading-relaxed mb-8">{project.description}</p>

            <div className="grid grid-cols-2 gap-6 mb-8 p-6 bg-background rounded-xl border border-border">
              <div>
                <span className="block text-xs font-semibold text-secondary uppercase mb-2">Status</span>
                <span className="font-medium text-primary">{currentStatus}</span>
              </div>
              <div>
                <span className="block text-xs font-semibold text-secondary uppercase mb-2">Responsive</span>
                <span className="font-medium text-primary">{project.isResponsive ? 'Yes' : 'No'}</span>
              </div>
              <div className="col-span-2">
                <span className="block text-xs font-semibold text-secondary uppercase mb-2">Tech Stack</span>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2.5 py-1 bg-white border border-border rounded text-xs font-medium">React</span>
                  <span className="px-2.5 py-1 bg-white border border-border rounded text-xs font-medium">Vite</span>
                  <span className="px-2.5 py-1 bg-white border border-border rounded text-xs font-medium">Tailwind CSS</span>
                </div>
              </div>
            </div>

            {project.demoUrl ? (
              <Link 
                to={project.demoUrl}
                onClick={onClose}
                className="btn-primary w-full group cursor-pointer flex items-center justify-center text-center no-underline"
              >
                <span>Open Demo Website</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <button disabled className="btn-secondary w-full cursor-not-allowed opacity-50">
                Demo URL Not Configured
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Checklist */}
        <div className="w-full md:w-1/2 overflow-y-auto bg-background p-8 sm:p-10">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold mb-1">Development Quality</h3>
              <p className="text-sm text-secondary">Checklist progress</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-bold text-primary">{percentage}%</span>
              <span className="block text-xs text-secondary font-medium uppercase tracking-wider">{completedCount}/{totalCount} Items</span>
            </div>
          </div>

          <div className="w-full h-2 bg-border rounded-full mb-10 overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              className={`h-full ${percentage === 100 ? 'bg-accent' : 'bg-primary'}`}
            />
          </div>

          <div className="space-y-4 mb-10">
            {qualityChecklist.map((item) => (
              <label 
                key={item.id}
                className="flex items-start gap-4 p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-primary transition-colors group"
              >
                <div className="relative flex items-center justify-center pt-0.5">
                  <input 
                    type="checkbox"
                    checked={!!state[item.id]}
                    onChange={() => toggleItem(item.id)}
                    className="w-5 h-5 appearance-none border-2 border-border rounded transition-all checked:bg-primary checked:border-primary"
                  />
                  {state[item.id] && (
                    <motion.svg 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute w-3 h-3 text-white pointer-events-none" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="4" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </motion.svg>
                  )}
                </div>
                <span className={`text-sm font-medium transition-colors ${state[item.id] ? 'text-secondary line-through' : 'text-primary'}`}>
                  {item.description}
                </span>
              </label>
            ))}
          </div>

          <button 
            onClick={() => {
              if(confirm('Are you sure you want to reset this checklist?')) {
                resetChecklist();
              }
            }}
            className="flex items-center text-sm font-semibold text-secondary hover:text-primary transition-colors"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset Checklist
          </button>
        </div>
      </motion.div>
    </div>
  );
}
