import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationList = [
  {
    id: 1,
    degree: 'B. Tech (Computer Science & Engineering)',
    institution: 'Shivalik College of Engineering (UTU)',
    period: '2018 – 2022',
    location: 'Dehradun, Uttarakhand',
    score: 'Percentage: 79.9%',
    description: 'Specialized in Computer Science, focusing on software engineering, algorithms, and application development.',
  }
];

export default function Education() {
  return (
    <section id="education" className="py-28 relative overflow-hidden border-t border-white/5">
      <div className="orb w-[400px] h-[400px] bg-accent-cyan left-0 top-1/4 opacity-[0.05]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-accent-green text-xs tracking-widest uppercase mb-3">Academic Background</p>
          <h2 className="font-display font-black text-white text-4xl sm:text-5xl tracking-tight">
            My <span className="text-gradient-cyan">Education</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg text-base">
            My academic journey and qualifications that built my foundational knowledge in computer science.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationList.map((edu, idx) => (
            <div 
              key={edu.id} 
              className={`glass glass-hover rounded-2xl p-6 sm:p-8 border border-white/5 reveal reveal-delay-${idx % 4} md:col-span-2 max-w-4xl mx-auto w-full`}
            >
              {/* Icon & Year */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.2)]">
                  <GraduationCap size={24} className="text-accent-cyan" />
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="flex items-center gap-1.5 font-mono text-xs text-white/40 bg-white/5 px-3 py-1 rounded-full">
                    <Calendar size={12} className="text-accent-cyan" />
                    {edu.period}
                  </span>
                </div>
              </div>

              {/* Details */}
              <h3 className="font-display font-bold text-white text-xl mb-1">{edu.degree}</h3>
              <p className="text-accent-cyan/80 font-medium text-sm mb-4">{edu.institution}</p>
              
              <div className="flex flex-wrap items-center gap-4 mb-4 font-mono text-xs text-white/30">
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} />
                  {edu.location}
                </span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-accent-green">{edu.score}</span>
              </div>

              <p className="text-sm text-white/50 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
