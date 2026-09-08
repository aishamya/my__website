import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Brain, Wrench, ShieldAlert } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming':
        return <Code className="w-4 h-4 text-sky-400" />;
      case 'Machine Learning':
        return <Brain className="w-4 h-4 text-sky-400" />;
      case 'Tools & Systems':
        return <Wrench className="w-4 h-4 text-sky-400" />;
      case 'Core Competencies':
        return <ShieldAlert className="w-4 h-4 text-sky-400" />;
      default:
        return <Code className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 mb-2">
          <span>04 // CAPABILITIES</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-10">
          Technical Skills Matrix
        </h2>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="glass-panel hover:glass-panel-elevated rounded-xl p-6 transition-all duration-300 border border-sky-400/10 hover:border-sky-400/30 group flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-2.5 pb-4 mb-4 border-b border-sky-400/10">
                  {getCategoryIcon(cat.category)}
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {cat.category}
                  </h3>
                </div>

                {/* Skills Bullet List */}
                <ul className="space-y-3">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center space-x-2.5 text-sm text-slate-300 group-hover:text-slate-100 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400/80 group-hover:bg-sky-300" />
                      <span className="font-mono text-[13px]">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom tag */}
              <div className="mt-8 pt-3 border-t border-sky-400/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>MATRIX NODE</span>
                <span className="text-sky-400/60">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
