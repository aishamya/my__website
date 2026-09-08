import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Github, Copy, Check, ExternalLink, Send } from 'lucide-react';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    onShowToast('Email address copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 mb-2">
          <span>09 // INITIATE CONNECTION</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Let's Build the Future
        </h2>

        {/* Subtitle */}
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed mb-12">
          Whether discussing quantitative algorithms, AI research collaborations, or technical
          opportunities, my inbox is always open.
        </p>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Email */}
          <div className="glass-panel hover:glass-panel-elevated rounded-xl p-6 transition-all duration-300 border border-sky-400/15 hover:border-sky-400/35 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span className="flex items-center gap-1.5 text-sky-300">
                  <Mail className="w-4 h-4 text-sky-400" />
                  Email ID
                </span>
                <span className="text-[11px] text-emerald-400 font-mono">PRIMARY</span>
              </div>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-sm sm:text-base font-mono text-slate-100 group-hover:text-sky-300 break-all transition-colors block mt-1"
              >
                {CONTACT_INFO.email}
              </a>
            </div>

            <div className="mt-6 pt-3 border-t border-sky-400/10 flex items-center justify-between">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-sky-200 transition-colors"
                id="btn-copy-email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Copy Email
                  </>
                )}
              </button>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="p-1 rounded text-slate-400 hover:text-sky-300 transition-colors"
                title="Open default email client"
              >
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: LinkedIn */}
          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel hover:glass-panel-elevated rounded-xl p-6 transition-all duration-300 border border-sky-400/15 hover:border-sky-400/35 flex flex-col justify-between group hover:-translate-y-0.5"
            id="link-linkedin"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span className="flex items-center gap-1.5 text-sky-300">
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  LinkedIn
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-300 transition-colors" />
              </div>
              <span className="text-xs sm:text-sm font-mono text-slate-300 group-hover:text-white break-all transition-colors block mt-1">
                {CONTACT_INFO.linkedin}
              </span>
            </div>

            <div className="mt-6 pt-3 border-t border-sky-400/10 text-xs font-mono text-sky-400 group-hover:text-sky-300 flex items-center justify-between">
              <span>CONNECT ON LINKEDIN</span>
              <span>↗</span>
            </div>
          </a>

          {/* Card 3: GitHub */}
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel hover:glass-panel-elevated rounded-xl p-6 transition-all duration-300 border border-sky-400/15 hover:border-sky-400/35 flex flex-col justify-between group hover:-translate-y-0.5"
            id="link-github"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span className="flex items-center gap-1.5 text-sky-300">
                  <Github className="w-4 h-4 text-sky-400" />
                  GitHub
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-300 transition-colors" />
              </div>
              <span className="text-xs sm:text-sm font-mono text-slate-300 group-hover:text-white break-all transition-colors block mt-1">
                {CONTACT_INFO.github}
              </span>
            </div>

            <div className="mt-6 pt-3 border-t border-sky-400/10 text-xs font-mono text-sky-400 group-hover:text-sky-300 flex items-center justify-between">
              <span>EXPLORE REPOSITORIES</span>
              <span>↗</span>
            </div>
          </a>

        </div>

        {/* Math formula watermark & terminal footer line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-sky-400/10 text-xs font-mono text-slate-400">
          <div className="text-slate-400">
            © 2025 Aishamya U. All rights reserved. Terminal v2.4.1
          </div>
          
          <div className="text-sky-400/60 font-mono tracking-widest text-sm select-none">
            θ = argmin L(W)
          </div>
        </div>

      </div>
    </section>
  );
};
