import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <div className="glass-panel-elevated px-4 py-2.5 rounded-xl border border-sky-400/40 text-slate-100 text-xs font-mono flex items-center gap-2 shadow-[0_0_25px_rgba(125,211,252,0.25)]">
        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
        <span>{message}</span>
      </div>
    </div>
  );
};
