import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project, ProjectCategory } from '../lib/types';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailsModal } from './ProjectDetailsModal';

const categories: ('All' | ProjectCategory)[] = [
  'All',
  'Automotive',
  'Medical & Healthcare',
  'Food & Hospitality',
  'Interior Design',
  'Real Estate',
  'E-commerce'
];

export function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState<'All' | ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="work" className="pt-12 pb-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
          className="mb-12 max-w-2xl relative"
        >
          {/* <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border shadow-sm text-primary text-[10px] font-bold tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            Featured Work
          </span> */}
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-5 tracking-tight leading-[1.15]">
            Diverse concepts. <br/>
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-primary">Uncompromising quality.</span>
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8, ease: "circOut" }}
                className="absolute bottom-1 left-0 h-3 bg-accent/80 -z-10 rounded-sm"
              ></motion.span>
            </span>
          </h2>
          <p className="text-base lg:text-lg text-secondary font-medium leading-relaxed">
            Explore premium frontend website concepts crafted to demonstrate how high-performing businesses elevate their online presence and capture their audience.
          </p>
        </motion.div>

        {/* Filters */}
        <div 
          className="flex justify-start mb-8 w-full overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="inline-flex bg-border/30 p-1.5 rounded-full border border-border/50 gap-1 min-w-max relative shadow-inner">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300 z-10 ${
                    isActive ? 'text-primary' : 'text-secondary hover:text-primary'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm border border-border/60"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {category}
                </button>
              )
            })}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onOpenDetails={setSelectedProject} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 bg-white border border-border rounded-2xl">
            <p className="text-xl font-medium text-secondary mb-2">No projects found</p>
            <p className="text-sm text-secondary/70">Try adjusting your filters or search query.</p>
            <button 
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-6 text-sm font-semibold text-primary underline underline-offset-4"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsModal 
            project={projects.find((p) => p.id === selectedProject.id) || selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
