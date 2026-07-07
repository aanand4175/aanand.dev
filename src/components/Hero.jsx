import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, MapPin, Smartphone, Globe } from 'lucide-react';

const techPillars = [
  'React Native', 'Node.js', 'Express', 'MongoDB', 'Firebase',
  'Redux', 'WebRTC', 'TensorFlow Lite', 'iOS / Android', 'MERN Stack',
  'React Native', 'Node.js', 'Express', 'MongoDB', 'Firebase',
  'Redux', 'WebRTC', 'TensorFlow Lite', 'iOS / Android', 'MERN Stack',
];

const roles = [
  "Full-Stack MERN Developer",
  "React Native Engineer",
  "UI/UX Enthusiast",
  "AI Integrations Expert"
];

export default function Hero() {
  const [roleText, setRoleText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIdx];
    const typeSpeed = isDeleting ? 40 : 80;
    
    const timer = setTimeout(() => {
      if (!isDeleting && roleText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && roleText === '') {
        setIsDeleting(false);
        setRoleIdx((prev) => (prev + 1) % roles.length);
      } else {
        setRoleText(currentRole.substring(0, roleText.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [roleText, isDeleting, roleIdx]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Ambient BG Orbs */}
      <div className="orb w-[600px] h-[600px] bg-accent-green top-0 right-[10%]" style={{ animationDelay: '0s' }} />
      <div className="orb w-[400px] h-[400px] bg-accent-purple bottom-[20%] left-0" style={{ animationDelay: '3s' }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="space-y-8">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 badge badge-green">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
              Crafting Digital Experiences
            </div>

            {/* Main heading */}
            <div className="space-y-2">
              <h1 className="font-display font-black text-white leading-none tracking-tight"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}>
                Aanand
                <br />
                <span className="text-gradient-green">Kumar</span>
              </h1>
              <p className="font-mono text-white/40 text-[11px] sm:text-sm tracking-widest uppercase min-h-[40px] sm:min-h-[24px] flex flex-wrap items-center">
                {roleText}
                <span className="inline-block w-1.5 h-3.5 sm:h-4 ml-1 bg-accent-green animate-pulse" />
              </p>
            </div>

            {/* Description */}
            <p className="text-white/60 text-base leading-relaxed max-w-md reveal reveal-delay-1">
              I craft high-performance <span className="text-white">Android & iOS</span> mobile applications and full-stack <span className="text-white">MERN</span> web platforms. 4+ years of delivering enterprise-grade solutions for government, fintech & agritech sectors.
            </p>

            {/* Quick meta */}
            <div className="flex flex-wrap gap-4 text-sm text-white/40">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-accent-green" /> Patna, Bihar, India
              </span>
              <span className="flex items-center gap-1.5">
                <Smartphone size={14} className="text-accent-green" /> 16+ Mobile Apps
              </span>
              <span className="flex items-center gap-1.5">
                <Globe size={14} className="text-accent-green" /> 4+ Web Platforms
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 reveal reveal-delay-2">
              <a href="/resume.pdf" download="Aanand_Kumar_Resume.pdf" className="btn-primary">
                Download CV
                <Download size={16} />
              </a>
              <a href="#projects" className="btn-outline">
                View My Work
              </a>
            </div>

            {/* Experience line */}
            <div className="flex items-center gap-6 pt-4 border-t border-white/5 reveal reveal-delay-3">
              {[
                { num: '4+', label: 'Years Exp.' },
                { num: '20+', label: 'Apps Built' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display font-black text-2xl text-white">{s.num}</p>
                  <p className="text-white/30 text-xs font-mono uppercase tracking-wider mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN: Terminal / Code Block ── */}
          <div className="relative reveal reveal-delay-2">
            {/* Large card */}
            <div className="glass rounded-2xl p-1 glow-green">
              {/* Terminal header bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="font-mono text-white/20 text-xs ml-2">~/aanand/profile.json</span>
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed">
                <div className="space-y-1">
                  <p className="text-white/20">{'{'}</p>
                  <p className="pl-6"><span className="text-accent-cyan">"name"</span><span className="text-white/30">: </span><span className="text-accent-green">"Aanand Kumar"</span><span className="text-white/20">,</span></p>
                  <p className="pl-6"><span className="text-accent-cyan">"role"</span><span className="text-white/30">: </span><span className="text-accent-green">"React Native + MERN Developer"</span><span className="text-white/20">,</span></p>
                  <p className="pl-6"><span className="text-accent-cyan">"experience"</span><span className="text-white/30">: </span><span className="text-white/70">"4+ years"</span><span className="text-white/20">,</span></p>
                  <p className="pl-6"><span className="text-accent-cyan">"mobile_apps"</span><span className="text-white/30">: </span><span className="text-white/70">16</span><span className="text-white/20">,</span></p>
                  <p className="pl-6"><span className="text-accent-cyan">"web_platforms"</span><span className="text-white/30">: </span><span className="text-white/70">4</span><span className="text-white/20">,</span></p>
                  <p className="pl-6 space-x-1">
                    <span className="text-accent-cyan">"stack"</span><span className="text-white/30">:</span>
                    <span className="text-white/20">[</span>
                  </p>
                  {['React Native', 'Node.js', 'MongoDB', 'Express', 'Firebase', 'Redux'].map((t, i, arr) => (
                    <p key={t} className="pl-12 text-accent-green">
                      "{t}"{i < arr.length - 1 ? <span className="text-white/20">,</span> : ''}
                    </p>
                  ))}
                  <p className="pl-6 text-white/20">]<span className="text-white/20">,</span></p>
                  <p className="pl-6"><span className="text-accent-cyan">"ai_tools"</span><span className="text-white/30">: </span><span className="text-accent-green">"Azure AI, TensorFlow Lite, ML Kit"</span><span className="text-white/20">,</span></p>
                  <p className="pl-6"><span className="text-accent-cyan">"available"</span><span className="text-white/30">: </span><span className="text-white/70">true</span></p>
                  <p className="text-white/20">{'}'}</p>
                  {/* blinking cursor */}
                  <p className="mt-2 text-accent-green">
                    <span className="inline-block w-2 h-4 bg-accent-green align-middle animate-pulse" />
                  </p>
                </div>
              </div>
            </div>

            {/* Floating decorative cards */}
            <div className="absolute -bottom-6 -left-6 glass px-4 py-3 rounded-xl border border-accent-green/20 shadow-lg">
              <p className="font-mono text-[10px] text-accent-green uppercase tracking-wider">Play Store</p>
              <p className="font-display font-bold text-white text-lg">16 Apps Live</p>
            </div>
            <div className="absolute -top-4 -right-4 glass px-4 py-3 rounded-xl border border-accent-cyan/20 shadow-lg hidden sm:block">
              <p className="font-mono text-[10px] text-accent-cyan uppercase tracking-wider">Tech Stack</p>
              <p className="font-display font-bold text-white text-sm">MERN + Native</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── MARQUEE TECH STRIP ── */}
      <div className="relative z-10 border-t border-white/5 overflow-hidden py-5">
        <div className="flex overflow-hidden gap-10">
          <div className="marquee-track">
            {techPillars.map((t, i) => (
              <span key={i} className="flex items-center gap-3 text-white/25 font-mono text-sm whitespace-nowrap">
                <span className="w-1 h-1 rounded-full bg-accent-green/60 inline-block" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
