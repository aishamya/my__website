import React from 'react';
import { CERTIFICATIONS, SOFT_SKILLS, VISION_STATEMENT } from '../data/portfolioData';
import { Award, Compass, Sparkles } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 mb-2">
          <span>08 // VALIDATION</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-10">
          Certifications & Achievements
        </h2>

        {/* Top 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className="glass-panel hover:glass-panel-elevated rounded-xl p-7 transition-all duration-300 border border-sky-400/10 hover:border-sky-400/30 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Issuer */}
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 group-hover:text-sky-300 transition-colors flex items-center justify-between">
                  <span>{cert.issuer}</span>
                  <Award className="w-4 h-4 text-sky-400/70" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {cert.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-sky-400/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>CREDENTIAL VALIDATED</span>
                <span className="text-emerald-400">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Split: Soft Skills & Where I'm Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Soft Skills */}
          <div className="lg:col-span-5 glass-panel rounded-xl p-7 border border-sky-400/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>SOFT SKILLS</span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {SOFT_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="glass-pill px-3.5 py-1.5 rounded-lg text-xs font-mono text-slate-200 border border-sky-400/20 hover:text-sky-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-sky-400/10 text-[11px] font-mono text-slate-400">
              LEADERSHIP & COLLABORATIVE RIGOR
            </div>
          </div>

          {/* Right: Where I'm Heading */}
          <div className="lg:col-span-7 glass-panel-elevated rounded-xl p-7 border border-sky-300/20 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-sky-400 mb-3">
                <Compass className="w-4 h-4 text-sky-400" />
                <span>WHERE I'M HEADING</span>
              </div>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                {VISION_STATEMENT}
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-4 border-t border-sky-400/10 flex items-center justify-between text-xs font-mono text-sky-400/80">
              <span>TARGET DOMAIN: HIGH-FREQUENCY QUANTITATIVE EXECUTION</span>
              <span className="text-emerald-400 font-semibold">HORIZON 2026-2029</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
