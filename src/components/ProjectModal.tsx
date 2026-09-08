import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { X, ExternalLink, Github, Code, Check, Play, Activity } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'code' | 'simulation'>('overview');
  const [copiedCode, setCopiedCode] = useState(false);

  // Simulation states
  const [simRunning, setSimRunning] = useState(false);
  const [simMetric, setSimMetric] = useState(94.8);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const handleRunSimulation = () => {
    setSimRunning(true);
    setTimeout(() => {
      setSimMetric(Number((92 + Math.random() * 7).toFixed(1)));
      setSimRunning(false);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0e1a]/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel-elevated rounded-2xl border border-sky-300/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-sky-400/15">
          <div>
            <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white glass-pill"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-2 my-5 border-b border-sky-400/10 pb-3">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeTab === 'overview'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            SYSTEM OVERVIEW
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeTab === 'code'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            SOURCE LOGIC
          </button>
          <button
            onClick={() => setActiveTab('simulation')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeTab === 'simulation'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            LIVE TELEMETRY DEMO
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-6 text-slate-300 text-sm">
            <p className="leading-relaxed">{project.systemOverview}</p>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="glass-panel p-3.5 rounded-xl border border-sky-400/15 text-center"
                >
                  <div className="text-xl font-bold font-mono text-sky-300">
                    {m.value}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Key Architectural Features */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">
                Core Architectural Deliverables
              </h4>
              <ul className="space-y-2">
                {project.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-sky-400 font-mono mt-0.5">▸</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="glass-pill px-3 py-1 rounded text-xs font-mono text-sky-200 border border-sky-400/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Code Snippet */}
        {activeTab === 'code' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Core Algorithmic Routine
              </span>
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 text-xs font-mono text-sky-300 glass-pill px-2.5 py-1 rounded"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                  </>
                ) : (
                  <>
                    <Code className="w-3.5 h-3.5" /> Copy Code
                  </>
                )}
              </button>
            </div>

            <pre className="p-4 rounded-xl bg-[#070b14] border border-sky-400/20 overflow-x-auto text-xs font-mono text-sky-200/90 leading-relaxed shadow-inner">
              <code>{project.codeSnippet}</code>
            </pre>
          </div>
        )}

        {/* Tab 3: Simulation */}
        {activeTab === 'simulation' && (
          <div className="space-y-6 text-sm text-slate-300">
            <div className="glass-panel p-5 rounded-xl border border-sky-400/20 text-center">
              <Activity className="w-8 h-8 text-sky-400 mx-auto mb-2 animate-pulse" />
              <h4 className="text-base font-bold text-white mb-1">
                Interactive Model Benchmark
              </h4>
              <p className="text-xs text-slate-400 max-w-md mx-auto mb-4">
                Execute algorithmic pass across synthesized batch data to observe latency convergence and classification index.
              </p>

              <div className="inline-flex items-center gap-4 bg-[#070b14] px-4 py-2 rounded-xl border border-sky-400/20 mb-4">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block">CURRENT CONVERGENCE</span>
                  <span className="text-lg font-mono font-bold text-sky-300">{simMetric}%</span>
                </div>
                <div className="h-6 w-px bg-slate-700" />
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block">STATUS</span>
                  <span className="text-xs font-mono text-emerald-400">NOMINAL</span>
                </div>
              </div>

              <div>
                <button
                  onClick={handleRunSimulation}
                  disabled={simRunning}
                  className="glass-pill px-5 py-2 rounded-lg text-xs font-mono text-sky-300 hover:text-white border border-sky-400/30 inline-flex items-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 text-sky-400" />
                  {simRunning ? 'Executing Pipeline Pass...' : 'Run Pipeline Inference Pass'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-sky-400/15 flex items-center justify-between">
          <a
            href={project.githubUrl || 'https://github.com/aishamya'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-sky-300 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>View Source Repository</span>
            <ExternalLink className="w-3 h-3 text-sky-400/70" />
          </a>

          <button
            onClick={onClose}
            className="glass-pill px-4 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
