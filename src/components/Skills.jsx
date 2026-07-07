import React, { useState } from 'react';

const categories = [
  {
    id: 'mobile',
    label: 'Mobile Core',
    accent: '#00ff87',
    skills: [
      { name: 'React Native (Cross-Platform)', pct: 95 },
      { name: 'JavaScript ES6+ & TypeScript', pct: 90 },
      { name: 'Android Native Bridge (Java/Kotlin)', pct: 76 },
      { name: 'iOS Build & App Store Connect', pct: 72 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & MERN',
    accent: '#00d4ff',
    skills: [
      { name: 'Node.js & Express.js API', pct: 85 },
      { name: 'MongoDB & Mongoose', pct: 82 },
      { name: 'REST APIs & WebSocket', pct: 95 },
      { name: 'Redux Toolkit / Zustand', pct: 90 },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Cloud Services',
    accent: '#8b5cf6',
    skills: [
      { name: 'Firebase (FCM, Auth, Firestore)', pct: 90 },
      { name: 'TensorFlow Lite & Google ML Kit', pct: 85 },
      { name: 'Azure Form Recognizer AI OCR', pct: 80 },
      { name: 'CCAvenue & Payment Gateways', pct: 85 },
    ],
  },
  {
    id: 'tools',
    label: 'DevOps & Tools',
    accent: '#f59e0b',
    skills: [
      { name: 'Git, GitHub & CI/CD', pct: 92 },
      { name: 'Android Studio & Xcode', pct: 88 },
      { name: 'Postman & API Testing', pct: 90 },
      { name: 'SonarQube & Code Quality', pct: 78 },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState('mobile');
  const current = categories.find(c => c.id === active);

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-accent-cyan left-1/2 top-0 opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-accent-green text-xs tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="font-display font-black text-white text-4xl sm:text-5xl tracking-tight">
            Technical <span className="text-gradient-green">Skill Set</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg text-base">
            A breakdown of my technical proficiencies across mobile engineering, full-stack web, AI integrations, and release infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Category tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`relative flex-shrink-0 lg:flex-shrink text-left px-5 py-4 rounded-xl transition-all duration-300 border font-medium text-sm cursor-pointer ${
                  active === cat.id
                    ? 'text-white'
                    : 'glass text-white/40 hover:text-white/70 border-white/5'
                }`}
                style={active === cat.id ? {
                  background: `${cat.accent}10`,
                  borderColor: `${cat.accent}30`,
                  color: cat.accent,
                } : {}}
              >
                {active === cat.id && (
                  <span className="absolute left-0 top-1/4 bottom-1/4 w-0.5 rounded-full"
                    style={{ background: cat.accent }} />
                )}
                <span className="pl-3 lg:pl-0">{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Skill bars panel */}
          <div className="lg:col-span-8 glass rounded-2xl p-8 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-display font-bold text-white text-xl">{current.label}</h3>
              <span className="font-mono text-[11px] uppercase tracking-widest"
                style={{ color: current.accent }}>
                {current.skills.length} skills
              </span>
            </div>

            {current.skills.map((skill, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm font-medium">{skill.name}</span>
                  <span className="font-mono text-xs font-bold" style={{ color: current.accent }}>
                    {skill.pct}%
                  </span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill transition-all duration-700"
                    style={{
                      width: `${skill.pct}%`,
                      background: `linear-gradient(90deg, ${current.accent}80, ${current.accent})`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech grid pills */}
        <div className="mt-16 pt-10 border-t border-white/5">
          <p className="font-mono text-white/20 text-xs uppercase tracking-widest mb-6">All technologies</p>
          <div className="flex flex-wrap gap-2">
            {[
              'React Native', 'React.js (Vite)', 'Node.js', 'Express.js', 'MongoDB',
              'Firebase', 'Redux Toolkit', 'TypeScript', 'WebRTC', 'WebSocket',
              'TensorFlow Lite', 'Azure Form Recognizer', 'ML Kit', 'SQLite', 'Supabase',
              'Google Maps API', 'Geofencing', 'Bluetooth BLE', 'CCAvenue', 'Razorpay',
              'Xcode', 'Android Studio', 'Tailwind CSS', 'Git & GitHub', 'Postman',
            ].map(tech => (
              <span key={tech}
                className="px-3 py-1.5 rounded-lg glass text-white/40 text-xs font-mono border border-white/5 hover:text-white/70 hover:border-white/10 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
