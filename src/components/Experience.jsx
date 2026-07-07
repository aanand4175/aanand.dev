import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const timeline = [
  {
    id: 1,
    role: 'React Native Developer',
    company: 'Codebucket Solutions Pvt. Ltd.',
    period: 'Feb 2024 – Present',
    location: 'Patna, Bihar',
    type: 'current',
    bullets: [
      'Leading development of BICTA ERP – a large-scale Bihar government platform with offline face recognition attendance using TensorFlow Lite & ML Kit.',
      'Built Vartalap – a pure E2EE WhatsApp-like messaging & voice/video call app powered by WebRTC and Firebase.',
      'Developed an AR navigation module for government campus facility guidance.',
      'Achieved 30% performance improvement through render optimization and memory profiling.',
      'Spearheaded iOS deployment for Xley — resolved code signing, CocoaPods, and App Store Connect workflows.',
    ],
    projects: ['BICTA ERP', 'Vartalap', 'Xley', 'Rajaswa Karmchari', 'BIADA', 'Illaj Doot', 'PrepCA', 'SC-ST Welfare'],
  },
  {
    id: 2,
    role: 'React Native Developer',
    company: 'CFCS Cloud Solutions Pvt. Ltd.',
    period: 'Feb 2022 – Feb 2024',
    location: 'Noida, India',
    type: 'previous',
    bullets: [
      'Built and deployed 7+ production-grade mobile apps across fintech, HRMS, and enterprise verticals.',
      'Integrated CCAvenue Payment Gateway with biometric login for Bharat Bank fintech app.',
      'Implemented Microsoft Azure Form Recognizer AI OCR for Kard Blink business card scanner.',
      'Designed geo-fenced attendance system with Google Maps API for Omada eHRMS.',
      'Reduced app bundle size and data fetching costs by 25% using Redux query optimization.',
    ],
    projects: ['Bharat Bank', 'Omada eHRMS', 'Kard Blink', 'Fuji CSMS', 'Gangotri Business', 'Komax Engineer', 'Komax Customer'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden border-t border-white/5">
      <div className="orb w-[400px] h-[400px] bg-accent-purple right-0 top-1/4 opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-accent-green text-xs tracking-widest uppercase mb-3">Career</p>
          <h2 className="font-display font-black text-white text-4xl sm:text-5xl tracking-tight">
            Work <span className="text-gradient-green">Experience</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg text-base">
            4+ years of professional engineering experience across government digital transformation, fintech, and enterprise platforms.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-6 bottom-0 w-px bg-gradient-to-b from-accent-green/50 via-accent-green/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {timeline.map((exp, idx) => (
              <div key={exp.id} className="relative group">
                <div className="flex gap-8 items-start">
                  {/* Dot */}
                  <div className="relative hidden md:flex flex-col items-center pt-1 shrink-0">
                    <div className={`timeline-dot relative z-10 ${idx === 0 ? 'animate-pulse' : ''}`} />
                  </div>

                  {/* Card */}
                  <div className="flex-1 glass glass-hover rounded-2xl p-6 sm:p-8 border border-white/5 group-hover:border-accent-green/15 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {idx === 0 && (
                            <span className="badge badge-green text-[10px]">
                              <span className="w-1 h-1 rounded-full bg-accent-green animate-ping" />
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="font-display font-black text-white text-xl sm:text-2xl">{exp.role}</h3>
                        <p className="text-accent-green/70 font-medium text-sm mt-0.5">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                        <span className="flex items-center gap-1.5 font-mono text-xs text-white/40">
                          <Calendar size={12} className="text-accent-cyan" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 font-mono text-xs text-white/30">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2.5 mb-6">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-white/55 leading-relaxed">
                          <span className="mt-2 w-1 h-1 rounded-full bg-accent-green/60 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Projects badge row */}
                    <div className="pt-4 border-t border-white/5">
                      <p className="font-mono text-[10px] text-white/20 uppercase tracking-widest mb-3">Projects</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.projects.map(p => (
                          <span key={p} className="px-2.5 py-1 rounded-lg glass text-xs text-white/50 border border-white/5 font-medium">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
