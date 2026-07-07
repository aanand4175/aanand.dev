import React, { useEffect } from 'react';
import { X, ExternalLink, Cpu, Layers, BookOpen, Building2 } from 'lucide-react';

const ACCENT_COLORS = {
  emerald: '#00ff87', cyan: '#00d4ff', indigo: '#818cf8', amber: '#fbbf24',
  blue: '#60a5fa', sky: '#38bdf8', red: '#f87171', orange: '#fb923c',
  purple: '#c084fc', rose: '#fb7185', teal: '#2dd4bf', violet: '#a78bfa',
  lime: '#a3e635', yellow: '#facc15',
};

export default function ProjectModal({ project, onClose }) {
  const accent = ACCENT_COLORS[project?.accentColor] || '#00ff87';

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const esc = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', esc);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', esc); };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />

      {/* Drawer panel */}
      <div className="relative w-full sm:max-w-3xl max-h-[90vh] sm:max-h-[85vh] bg-[#060a12] border border-white/8 rounded-t-3xl sm:rounded-2xl overflow-y-auto z-10 flex flex-col"
        style={{ borderTop: `1px solid ${accent}20` }}>

        {/* Sticky header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-white/5"
          style={{ background: 'rgba(6,10,18,0.95)', backdropFilter: 'blur(20px)' }}>
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full" style={{ background: accent, boxShadow: `0 0 10px ${accent}60` }} />
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: accent }}>
              {project.category}
            </span>
          </div>
          <button onClick={onClose}
            className="w-8 h-8 glass rounded-lg flex items-center justify-center text-white/40 hover:text-white transition-colors cursor-pointer">
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8 flex-1">
          {/* Title block */}
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <span className={`badge ${project.status.toLowerCase().includes('live') ? 'badge-green' : 'badge-amber'}`}>
                {project.status}
              </span>
              <span className="badge" style={{
                background: `${accent}10`, color: accent, borderColor: `${accent}30`
              }}>
                {project.platform}
              </span>
            </div>
            <h2 className="font-display font-black text-white text-2xl sm:text-3xl leading-tight">
              {project.title}
            </h2>
            <div className="flex items-center gap-2 text-sm text-white/30">
              <Building2 size={14} />
              <span>{project.company}</span>
              <span className="text-white/10">•</span>
              <span className="text-white/40">{project.role}</span>
            </div>
          </div>

          {/* 2-col grid on larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
            {/* Left: Description + Features */}
            <div className="sm:col-span-8 space-y-6">
              <div>
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/20 mb-3">
                  <BookOpen size={12} /> Overview
                </p>
                <p className="text-white/60 text-sm leading-relaxed">{project.detailedDescription}</p>
              </div>

              <div>
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/20 mb-4">
                  <Layers size={12} /> Key Contributions
                </p>
                <ul className="space-y-3">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/50 leading-relaxed">
                      <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Tech + Links */}
            <div className="sm:col-span-4 space-y-5">
              {/* Tech stack */}
              <div className="glass rounded-xl p-5 space-y-3">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/20">
                  <Cpu size={12} /> Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-white/50 glass border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              {project.playStore ? (
                <a
                  href={project.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                  style={{ background: `linear-gradient(135deg, ${accent}, ${accent}99)` }}
                >
                  <ExternalLink size={15} />
                  {project.platform === 'Web Application' ? 'Visit Website' : 'View on Play Store'}
                </a>
              ) : (
                <div className="glass rounded-xl p-4 text-center border border-white/5">
                  <p className="text-white/25 text-xs font-mono">🔒 Private / In Development</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
