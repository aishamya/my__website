import React from 'react';
import { QUANT_PILLARS } from '../data/portfolioData';

export const QuantMindsetSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 mb-2">
          <span>02 // CORE PRINCIPLES</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-10">
          The Quant Mindset
        </h2>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUANT_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="glass-panel hover:glass-panel-elevated rounded-xl p-6 transition-all duration-300 group border border-sky-400/10 hover:border-sky-400/30 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Number Badge */}
                <div className="text-2xl font-bold font-mono text-sky-400 mb-4 group-hover:text-sky-300 transition-colors">
                  {pillar.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom subtle accent line */}
              <div className="mt-6 pt-3 border-t border-sky-400/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="tracking-widest uppercase">PILLAR // {pillar.title.slice(0, 4)}</span>
                <span className="text-sky-400/50 group-hover:text-sky-400 transition-colors">0{pillar.number}/04</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
