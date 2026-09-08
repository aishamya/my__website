import React from 'react';
import { EDUCATION_INFO } from '../data/portfolioData';
import { GraduationCap, Award, TrendingUp } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 mb-2">
          <span>{EDUCATION_INFO.sectionTag}</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-10">
          {EDUCATION_INFO.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Degree Card (Left) */}
          <div className="lg:col-span-6 glass-panel hover:glass-panel-elevated rounded-xl p-8 transition-all duration-300 border border-sky-400/15 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center space-x-2.5">
                  <GraduationCap className="w-5 h-5 text-sky-400" />
                  <span className="text-xs font-mono tracking-wider text-sky-300 uppercase">
                    UNDERGRADUATE PROGRAM
                  </span>
                </div>
                <span className="glass-pill px-3 py-1 rounded-full text-xs font-mono text-sky-200 border border-sky-400/25">
                  {EDUCATION_INFO.statusBadge}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                {EDUCATION_INFO.degree}
              </h3>

              <div className="text-sm font-medium text-sky-300 mb-4 flex items-center gap-1.5">
                <span>{EDUCATION_INFO.institution}</span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {EDUCATION_INFO.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-sky-400/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>SPECIALIZATION: QUANT & SYSTEMS</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ACADEMIC EXCELLENCE
              </span>
            </div>
          </div>

          {/* Performance Stats Cards (Right) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
            {EDUCATION_INFO.metrics.map((metric, idx) => (
              <div
                key={metric.label}
                className="glass-panel hover:glass-panel-elevated rounded-xl p-6 transition-all duration-300 border border-sky-400/15 flex flex-col items-center justify-center text-center group"
              >
                <div className="mb-2">
                  {idx === 0 && <Award className="w-5 h-5 text-sky-400 mx-auto opacity-70 group-hover:opacity-100 transition-opacity" />}
                  {idx === 1 && <TrendingUp className="w-5 h-5 text-emerald-400 mx-auto opacity-70 group-hover:opacity-100 transition-opacity" />}
                  {idx === 2 && <GraduationCap className="w-5 h-5 text-purple-400 mx-auto opacity-70 group-hover:opacity-100 transition-opacity" />}
                </div>

                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono mb-2 group-hover:text-sky-300 transition-colors drop-shadow-[0_0_15px_rgba(125,211,252,0.2)]">
                  {metric.value}
                </div>

                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  {metric.label}
                </div>

                <div className="mt-4 text-[10px] font-mono text-sky-400/60 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-400/10">
                  {idx === 0 ? 'Top 1% Percentile' : idx === 1 ? 'Near Perfect Score' : 'State Competitive Exam'}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
