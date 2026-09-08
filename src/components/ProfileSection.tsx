import React from 'react';
import { PROFILE_INFO } from '../data/portfolioData';
import profilePhoto from '../assets/images/profile_aishamya_1788840868454.jpg';
import { Code2, Compass, Cpu, Sparkles } from 'lucide-react';

export const ProfileSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 mb-2">
          <span>{PROFILE_INFO.sectionTag}</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-10">
          {PROFILE_INFO.title}
        </h2>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Portrait Photo with frosted glass frame */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative group max-w-xs w-full">
              {/* Subtle ambient backglow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-400/20 via-sky-300/10 to-purple-400/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Glass frame */}
              <div className="relative glass-panel-elevated rounded-2xl p-3 border border-sky-300/20 shadow-2xl overflow-hidden">
                <div className="relative rounded-xl overflow-hidden aspect-square bg-[#0e1628]">
                  <img
                    src={profilePhoto}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/profile_aishamya.jpg';
                    }}
                    alt="Aishamya U - Profile Portrait"
                    className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle terminal scanline overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Overlay tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                    <span className="bg-[#0a0e1a]/80 text-sky-300 px-2 py-1 rounded backdrop-blur-md border border-sky-400/30">
                      ID: AU-2025.QUANT
                    </span>
                    <span className="bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded backdrop-blur-md border border-emerald-400/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      REVA '29
                    </span>
                  </div>
                </div>

                {/* Sub info below photo */}
                <div className="mt-3 px-1 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1 text-slate-300">
                    <Cpu className="w-3.5 h-3.5 text-sky-400" />
                    B.Tech AIML
                  </span>
                  <span className="text-sky-300/80">Bengaluru, IN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative paragraphs matching screenshot */}
          <div className="lg:col-span-8 flex flex-col space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            <p className="border-l-2 border-sky-400/40 pl-5">
              I am an Artificial Intelligence and Machine Learning undergraduate at{' '}
              <strong className="text-white font-semibold">REVA University, Bengaluru</strong>
              , driven by an intense fascination with computational finance, statistical arbitrage,
              and scalable system architecture.
            </p>

            <p className="border-l-2 border-sky-400/20 pl-5">
              My trajectory bridges theoretical machine learning with rigorous quantitative development.
              Whether building automated campus security command centers or modeling behavioral patterns
              through algorithmic logic, I focus on clean execution, mathematical soundness, and
              high-performance throughput.
            </p>

            {/* Micro Highlights Pill Row */}
            <div className="pt-2 flex flex-wrap gap-3 text-xs font-mono">
              <span className="glass-panel px-3 py-1.5 rounded-lg text-slate-200 border border-sky-400/15 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-sky-400" />
                Algorithm Engineering
              </span>
              <span className="glass-panel px-3 py-1.5 rounded-lg text-slate-200 border border-sky-400/15 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                Statistical Modeling
              </span>
              <span className="glass-panel px-3 py-1.5 rounded-lg text-slate-200 border border-sky-400/15 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-sky-400" />
                Low-Latency Telemetry
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
