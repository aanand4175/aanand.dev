import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-green to-accent-cyan flex items-center justify-center text-bg-primary font-display font-black text-xs">
            A
          </div>
          <span className="font-display font-bold text-white/60 text-sm">
            aanand<span className="text-accent-green">.</span>dev
          </span>
        </div>

        <p className="font-mono text-white/20 text-xs text-center">
          © {new Date().getFullYear()} Aanand Kumar · Built with React & Tailwind v4
        </p>

        <div className="flex items-center gap-4">
          <a href="https://github.com/aanand4175/" target="_blank" rel="noopener noreferrer"
            className="text-white/25 hover:text-white transition-colors"><Github size={16} /></a>
          <a href="https://www.linkedin.com/in/aanand-kumar-1ab7a017b/" target="_blank" rel="noopener noreferrer"
            className="text-white/25 hover:text-white transition-colors"><Linkedin size={16} /></a>
          <a href="mailto:aanand4175@gmail.com"
            className="text-white/25 hover:text-white transition-colors"><Mail size={16} /></a>
        </div>
      </div>
    </footer>
  );
}
