import React from 'react';
import { Award, ExternalLink, Star } from 'lucide-react';

export default function Awards() {
  return (
    <section id="awards" className="py-28 relative overflow-hidden border-t border-white/5">
      <div className="orb w-[300px] h-[300px] bg-accent-orange right-0 top-1/4 opacity-[0.06]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-accent-green text-xs tracking-widest uppercase mb-3">Recognition</p>
          <h2 className="font-display font-black text-white text-4xl sm:text-5xl tracking-tight">
            Awards & <span className="text-gradient-orange" style={{ background: 'linear-gradient(135deg, #ff6b35, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Achievements</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg text-base">
            Recognitions received for outstanding performance and contributions.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass glass-hover rounded-2xl p-6 sm:p-8 border border-white/5 reveal reveal-delay-0 group">
            {/* Top Row */}
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[rgba(255,107,53,0.08)] border border-[rgba(255,107,53,0.2)]">
                <Award size={24} className="text-accent-orange" style={{ color: '#ff6b35' }} />
              </div>
              <span className="flex items-center gap-1.5 font-mono text-xs text-white/40 bg-white/5 px-3 py-1 rounded-full">
                <Star size={12} className="text-accent-orange" style={{ color: '#ff6b35' }} />
                Codebucket
              </span>
            </div>

            {/* Content */}
            <h3 className="font-display font-bold text-white text-xl mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#ff6b35] group-hover:to-[#f59e0b] transition-all">
              Employee of the Month
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Recognized as <strong className="text-white">"The Developer Everyone Can Count On"</strong> for November 2025! 👏
              Awarded for team excellence, dedication, and consistently delivering high-quality production code.
            </p>

            {/* Action */}
            <a
              href="https://www.linkedin.com/posts/codebucket_codebucket-employeeofthemonth-teamexcellence-activity-7404465865041059841-9PK4?utm_source=share&utm_medium=member_desktop&rcm=ACoAACqnLxMBr6rstvkvPwFYKJdQHUp-0qVtVJI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors"
            >
              View LinkedIn Post <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
