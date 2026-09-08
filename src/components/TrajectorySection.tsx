import React from 'react';
import { TRAJECTORY_PHASES } from '../data/portfolioData';
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react';

export const TrajectorySection: React.FC = () => {
  const getPhaseBadge = (status: string) => {
    switch (status) {
      case 'active':
        return (
          <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-400/25">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            ACTIVE
          </span>
        );
      case 'in_progress':
        return (
          <span className="flex items-center gap-1.5 text-xs font-mono text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-400/25">
            <Clock className="w-3 h-3 text-sky-400" />
            IN PROGRESS
          </span>
        );
      case 'target':
        return (
          <span className="flex items-center gap-1.5 text-xs font-mono text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-400/25">
            <Target className="w-3 h-3 text-purple-400" />
            TARGET
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 mb-2">
          <span>05 // TRAJECTORY</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-10">
          Building Towards Quant
        </h2>

        {/* Phase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {TRAJECTORY_PHASES.map((item, idx) => (
            <div
              key={item.phase}
              className="glass-panel hover:glass-panel-elevated rounded-xl p-7 transition-all duration-300 border border-sky-400/10 hover:border-sky-400/30 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Phase Tag & Status */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-sky-400/10">
                  <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">
                    {item.phase}
                  </span>
                  {getPhaseBadge(item.status)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="mt-8 pt-4 border-t border-sky-400/10">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                  <span>STAGE COMPLETION</span>
                  <span className="text-sky-300">
                    {idx === 0 ? '95%' : idx === 1 ? '60%' : 'GOAL'}
                  </span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      idx === 0
                        ? 'w-[95%] bg-emerald-400'
                        : idx === 1
                        ? 'w-[60%] bg-sky-400'
                        : 'w-[15%] bg-purple-400'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
