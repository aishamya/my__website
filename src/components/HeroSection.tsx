import React, { useState, useEffect } from 'react';
import { Terminal, Activity, Zap, Play, Pause } from 'lucide-react';
import { HERO_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  // Telemetry equalizer state
  const [bars, setBars] = useState<number[]>([
    45, 62, 78, 52, 88, 70, 94, 82, 98, 65, 84, 76, 92,
  ]);
  const [isStreaming, setIsStreaming] = useState(true);
  const [streamSpeed, setStreamSpeed] = useState<'1x' | '2x'>('1x');
  const [currentPacket, setCurrentPacket] = useState(14820);
  const [currentTime, setCurrentTime] = useState('09:30:00');

  // Real-time telemetry generator
  useEffect(() => {
    if (!isStreaming) return;

    const intervalMs = streamSpeed === '2x' ? 300 : 600;
    const timer = setInterval(() => {
      setBars((prev) =>
        prev.map(() => {
          // Generate realistic varying quant telemetry bar heights between 30% and 98%
          return Math.floor(35 + Math.random() * 63);
        })
      );
      setCurrentPacket((p) => p + 1);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isStreaming, streamSpeed]);

  // Clock simulator starting from market opening T0: 09:30:00
  useEffect(() => {
    const start = new Date();
    const clockTimer = setInterval(() => {
      const now = new Date();
      const diffSec = Math.floor((now.getTime() - start.getTime()) / 1000);
      const h = String(9 + Math.floor(diffSec / 3600)).padStart(2, '0');
      const m = String(30 + Math.floor((diffSec % 3600) / 60)).padStart(2, '0');
      const s = String(diffSec % 60).padStart(2, '0');
      setCurrentTime(`${h}:${m}:${s}`);
    }, 1000);

    return () => clearInterval(clockTimer);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Terminal pill */}
            <div className="inline-flex items-center space-x-2.5 px-3 py-1 rounded-full glass-panel border border-sky-400/20 w-fit">
              <span className="flex items-center gap-1.5 text-xs font-mono text-sky-400 font-semibold tracking-wider">
                <Terminal className="w-3.5 h-3.5 text-sky-400" />
                terminal
              </span>
              <span className="text-slate-600 font-mono text-xs">|</span>
              <span className="text-[11px] font-mono tracking-widest text-slate-300 font-medium uppercase">
                {HERO_INFO.badge}
              </span>
            </div>

            {/* Massive Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(125,211,252,0.15)]">
              {HERO_INFO.name}
            </h1>

            {/* Subtitle description */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              {HERO_INFO.headline}
            </p>

            {/* Metadata metrics row */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2 pb-2 border-y border-sky-400/10 py-4">
              {HERO_INFO.metadata.map((item) => (
                <div key={item.label} className="flex flex-col space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    {item.label}
                  </span>
                  <div className="flex items-center space-x-1.5">
                    {item.isStatus && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    )}
                    <span
                      className={`text-xs sm:text-[13px] font-medium ${
                        item.isStatus ? 'text-emerald-400' : 'text-slate-200'
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {HERO_INFO.skills.map((skill) => (
                <span
                  key={skill}
                  className="glass-pill px-3 py-1 rounded-md text-xs font-mono text-sky-200 border border-sky-400/15 transition-all hover:scale-105 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Hero Graphic: Signal Telemetry // Q-NET */}
          <div className="lg:col-span-5">
            <div className="glass-panel-elevated rounded-2xl p-6 relative group border border-sky-300/20 shadow-[0_0_40px_rgba(125,211,252,0.06)] hover:border-sky-300/40 transition-all duration-300">
              
              {/* Telemetry Header */}
              <div className="flex items-center justify-between pb-6 border-b border-sky-400/10">
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
                    COMPUTATIONAL SIGNAL // Q-NET
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono text-sky-300 font-semibold bg-sky-500/10 px-2.5 py-0.5 rounded border border-sky-400/20 tracking-wider">
                    AIML → QUANT
                  </span>
                </div>
              </div>

              {/* Bar Equalizer / Streaming waveform */}
              <div className="py-8 px-2">
                <div className="h-44 flex items-end justify-between gap-1.5 sm:gap-2">
                  {bars.map((height, idx) => (
                    <div
                      key={idx}
                      className="flex-1 flex flex-col items-center group/bar relative"
                    >
                      {/* Bar fill with ice-blue gradient */}
                      <div
                        style={{ height: `${height}%` }}
                        className="w-full rounded-t-sm transition-all duration-300 bg-gradient-to-t from-sky-600/30 via-sky-400/50 to-sky-200 group-hover/bar:brightness-125 group-hover/bar:shadow-[0_0_12px_#7dd3fc]"
                      />
                      
                      {/* Tooltip on hover */}
                      <div className="opacity-0 group-hover/bar:opacity-100 absolute -top-7 pointer-events-none transition-opacity bg-slate-900 border border-sky-400/40 px-1.5 py-0.5 rounded text-[10px] font-mono text-sky-300 whitespace-nowrap shadow-md z-20">
                        {height}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Telemetry Footer Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-sky-400/10 text-xs font-mono text-slate-400">
                <div className="flex items-center space-x-2">
                  <span>T0: {currentTime}</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-[11px] text-slate-500">
                    PKT #{currentPacket}
                  </span>
                </div>

                <div className="flex items-center space-x-2.5">
                  <button
                    onClick={() => setIsStreaming(!isStreaming)}
                    className="p-1 rounded hover:bg-sky-400/10 text-slate-400 hover:text-sky-300 transition-colors"
                    title={isStreaming ? 'Pause Telemetry' : 'Resume Telemetry'}
                    aria-label="Toggle live telemetry stream"
                  >
                    {isStreaming ? (
                      <Pause className="w-3.5 h-3.5" />
                    ) : (
                      <Play className="w-3.5 h-3.5" />
                    )}
                  </button>

                  <button
                    onClick={() => setStreamSpeed(streamSpeed === '1x' ? '2x' : '1x')}
                    className="text-[10px] px-1.5 py-0.5 rounded bg-sky-400/10 text-sky-300 hover:bg-sky-400/20 transition-colors"
                    title="Toggle sampling frequency"
                  >
                    {streamSpeed}
                  </button>

                  <div className="flex items-center space-x-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-medium tracking-wider uppercase">
                      {isStreaming ? 'STREAM: ACTIVE' : 'STREAM: PAUSED'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
