import React, { useState, useMemo } from 'react';
import { projectsData } from '../data/projects';
import { Search, ExternalLink, ArrowUpRight, HelpCircle } from 'lucide-react';

const ACCENT_COLORS = {
  emerald: { text: '#00ff87', bg: 'rgba(0,255,135,0.06)', border: 'rgba(0,255,135,0.15)' },
  cyan:    { text: '#00d4ff', bg: 'rgba(0,212,255,0.06)', border: 'rgba(0,212,255,0.15)' },
  indigo:  { text: '#818cf8', bg: 'rgba(129,140,248,0.06)', border: 'rgba(129,140,248,0.15)' },
  amber:   { text: '#fbbf24', bg: 'rgba(251,191,36,0.06)', border: 'rgba(251,191,36,0.15)' },
  blue:    { text: '#60a5fa', bg: 'rgba(96,165,250,0.06)', border: 'rgba(96,165,250,0.15)' },
  sky:     { text: '#38bdf8', bg: 'rgba(56,189,248,0.06)', border: 'rgba(56,189,248,0.15)' },
  red:     { text: '#f87171', bg: 'rgba(248,113,113,0.06)', border: 'rgba(248,113,113,0.15)' },
  orange:  { text: '#fb923c', bg: 'rgba(251,146,60,0.06)', border: 'rgba(251,146,60,0.15)' },
  purple:  { text: '#c084fc', bg: 'rgba(192,132,252,0.06)', border: 'rgba(192,132,252,0.15)' },
  rose:    { text: '#fb7185', bg: 'rgba(251,113,133,0.06)', border: 'rgba(251,113,133,0.15)' },
  teal:    { text: '#2dd4bf', bg: 'rgba(45,212,191,0.06)', border: 'rgba(45,212,191,0.15)' },
  violet:  { text: '#a78bfa', bg: 'rgba(167,139,250,0.06)', border: 'rgba(167,139,250,0.15)' },
  lime:    { text: '#a3e635', bg: 'rgba(163,230,53,0.06)', border: 'rgba(163,230,53,0.15)' },
  yellow:  { text: '#facc15', bg: 'rgba(250,204,21,0.06)', border: 'rgba(250,204,21,0.15)' },
};

const FILTERS = [
  { id: 'all',        label: 'All Projects' },
  { id: 'fullstack',  label: 'Full-Stack MERN' },
  { id: 'codebucket', label: 'Codebucket' },
  { id: 'cfcs',       label: 'CFCS Cloud' },
  { id: 'live',       label: '🟢 Live' },
  { id: 'dev',        label: '🔨 In Dev' },
];

export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return projectsData.filter(p => {
      const matchFilter =
        filter === 'all' ||
        (filter === 'codebucket' && p.company.toLowerCase().includes('codebucket')) ||
        (filter === 'cfcs' && p.company.toLowerCase().includes('cfcs')) ||
        (filter === 'fullstack' && p.category.toLowerCase().includes('full stack')) ||
        (filter === 'live' && p.status.toLowerCase().includes('live')) ||
        (filter === 'dev' && p.status.toLowerCase().includes('development'));

      const q = query.toLowerCase().trim();
      const matchSearch = !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.tech.some(t => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q);

      return matchFilter && matchSearch;
    });
  }, [filter, query]);

  const handleMouseMove = (e) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <section id="projects" className="py-28 relative overflow-hidden border-t border-white/5">
      <div className="orb w-[500px] h-[500px] bg-accent-green right-0 bottom-0 opacity-[0.07]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-accent-green text-xs tracking-widest uppercase mb-3">Portfolio</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h2 className="font-display font-black text-white text-4xl sm:text-5xl tracking-tight">
                Built by <span className="text-gradient-green">Me</span>
              </h2>
              <p className="text-white/40 mt-3 max-w-md text-base">
                Click any card to explore the full case study, tech decisions, and implementation details.
              </p>
            </div>
            {/* Search */}
            <div className="relative w-full sm:w-72 shrink-0">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search (e.g. Firebase, E2EE...)"
                className="form-input pl-9 !py-2.5 text-sm w-full"
              />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer border ${
                filter === f.id
                  ? 'bg-accent-green text-bg-primary border-transparent font-bold shadow-lg shadow-accent-green/20'
                  : 'glass text-white/40 border-white/5 hover:text-white/70 hover:border-white/10'
              }`}
              style={filter === f.id ? { background: 'linear-gradient(135deg,#00ff87,#00d4ff)', color: '#020408' } : {}}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto self-center font-mono text-xs text-white/20">
            {filtered.length}/{projectsData.length} showing
          </span>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map(project => {
              const color = ACCENT_COLORS[project.accentColor] || ACCENT_COLORS.cyan;
              return (
                <article
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="project-card glass glass-hover rounded-2xl p-6 flex flex-col gap-4 cursor-pointer group border border-white/5 tilt-card reveal reveal-delay-1"
                  style={{ 
                    '--accent': color.text,
                    transition: 'transform 0.1s ease-out, box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      <span
                        className="badge text-[10px]"
                        style={{ background: color.bg, color: color.text, borderColor: color.border }}
                      >
                        {project.category}
                      </span>
                      <span
                        className={`badge text-[10px] ${
                          project.status.toLowerCase().includes('live')
                            ? 'badge-green'
                            : 'badge-amber'
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>

                  {/* Title & summary */}
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-white text-lg mb-2 leading-snug group-hover:text-gradient-green transition-all line-clamp-2"
                      style={{ '--tw-gradient-from': color.text }}>
                      {project.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed line-clamp-2">
                      {project.summary}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="space-y-3 pt-3 border-t border-white/5">
                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="px-2 py-0.5 rounded-md text-[10px] font-mono text-white/30 border border-white/5 glass">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono border"
                          style={{ color: color.text, borderColor: color.border, background: color.bg }}>
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Bottom action row */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-white/20">{project.platform}</span>
                      {project.playStore && (
                        <a
                          href={project.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="flex items-center gap-1 font-medium transition-colors"
                          style={{ color: color.text }}
                        >
                          View Live <ExternalLink size={11} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="glass rounded-2xl py-20 px-6 text-center border border-white/5">
            <HelpCircle size={40} className="text-white/15 mx-auto mb-4" />
            <h3 className="font-display font-bold text-white text-xl mb-2">No results found</h3>
            <p className="text-white/30 text-sm mb-6">Try adjusting your search or filter selection.</p>
            <button onClick={() => { setQuery(''); setFilter('all'); }}
              className="btn-outline !text-xs">
              Reset
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
