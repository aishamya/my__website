import React from 'react';
import { EXTRACURRICULARS } from '../data/portfolioData';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="achievements" className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 mb-2">
          <span>07 // LEADERSHIP & EXTRACURRICULARS</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-10">
          Beyond Code
        </h2>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXTRACURRICULARS.map((item) => (
            <div
              key={item.title}
              className="glass-panel hover:glass-panel-elevated rounded-xl p-6 transition-all duration-300 border border-sky-400/10 hover:border-sky-400/30 group flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Tag */}
                <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 group-hover:text-sky-300 transition-colors">
                  {item.tag}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom line */}
              <div className="mt-6 pt-3 border-t border-sky-400/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>COMMUNITY</span>
                <span className="text-sky-400/60">ACTIVE</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
