import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden border-t border-white/5">
      <div className="orb w-[500px] h-[500px] bg-accent-green left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 badge badge-green mb-8 reveal reveal-delay-0">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
          Available for new opportunities
        </div>

        {/* Heading */}
        <h2 className="font-display font-black text-white text-5xl sm:text-7xl tracking-tight mb-6 reveal reveal-delay-1">
          Let's Build <br />
          <span className="text-gradient-green">Something Great.</span>
        </h2>
        
        {/* Subtext */}
        <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed reveal reveal-delay-2">
          Whether you have a project in mind, need technical consultation, or just want to chat about code, my inbox is always open. I'd love to hear from you!
        </p>

        {/* Primary Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 reveal reveal-delay-3">
          <a href="mailto:aanand4175@gmail.com" className="btn-primary !text-base !py-4 !px-8 w-full sm:w-auto justify-center">
            <Mail size={18} />
            Say Hello
          </a>
          <a href="https://www.linkedin.com/in/aanand-kumar-1ab7a017b/" target="_blank" rel="noopener noreferrer" className="btn-outline !text-base !py-4 !px-8 w-full sm:w-auto justify-center">
            <Linkedin size={18} />
            Connect on LinkedIn
          </a>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 border-t border-white/5 reveal reveal-delay-2">
          <a href="mailto:aanand4175@gmail.com" className="glass glass-hover p-6 rounded-2xl flex flex-col items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-[rgba(0,255,135,0.08)] text-accent-green flex items-center justify-center group-hover:scale-110 group-hover:bg-[rgba(0,255,135,0.15)] transition-all">
              <Mail size={20} />
            </div>
            <div>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-1">Email</p>
              <span className="text-white/80 font-medium text-sm">aanand4175@gmail.com</span>
            </div>
          </a>
          
          <a href="tel:+918825314845" className="glass glass-hover p-6 rounded-2xl flex flex-col items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-[rgba(0,212,255,0.08)] text-accent-cyan flex items-center justify-center group-hover:scale-110 group-hover:bg-[rgba(0,212,255,0.15)] transition-all">
              <Phone size={20} />
            </div>
            <div>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-1">Phone</p>
              <span className="text-white/80 font-medium text-sm">+91 8825314845</span>
            </div>
          </a>

          <div className="glass glass-hover p-6 rounded-2xl flex flex-col items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-[rgba(167,139,250,0.08)] text-violet-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-[rgba(167,139,250,0.15)] transition-all">
              <MapPin size={20} />
            </div>
            <div>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-1">Location</p>
              <span className="text-white/80 font-medium text-sm">Patna, Bihar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
