import React from 'react';
import { ENGINEERING_PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 mb-2">
          <span>06 // FEATURED WORK</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-10">
          Engineering Projects
        </h2>

        {/* 2x2 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {ENGINEERING_PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="glass-panel hover:glass-panel-elevated rounded-xl p-7 sm:p-8 transition-all duration-300 border border-sky-400/15 hover:border-sky-400/35 group cursor-pointer flex flex-col justify-between hover:-translate-y-1 relative shadow-[0_0_30px_rgba(125,211,252,0.03)]"
            >
              <div>
                {/* Category & Arrow Outward */}
                <div className="flex items-center justify-between pb-3 mb-2">
                  <span className="text-xs font-mono tracking-widest text-slate-400 group-hover:text-sky-300 transition-colors uppercase">
                    {project.category}
                  </span>
                  <div className="flex items-center space-x-1 text-slate-400 group-hover:text-sky-300 transition-colors">
                    <span className="text-xs font-mono hidden sm:inline-block">arrow_outward</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-sky-200 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed font-normal mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tags Row */}
              <div className="pt-4 border-t border-sky-400/10 flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="glass-pill px-3 py-1 rounded text-xs font-mono text-slate-300 group-hover:text-sky-200 border border-sky-400/15 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
