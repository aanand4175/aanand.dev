import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Work', href: '#experience' },
  { name: 'Awards', href: '#awards' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['home', 'skills', 'experience', 'awards', 'education', 'projects', 'contact'];
      const scrollPos = window.scrollY + 160;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 glass border-b border-white/5' : 'py-5 bg-transparent border-b border-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-green to-accent-cyan flex items-center justify-center text-bg-primary font-display font-black text-sm">
              A
            </div>
            <span className="font-display font-bold text-white text-lg tracking-tight">
              aanand<span className="text-gradient-green">.</span>dev
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => {
              const id = link.href.replace('#', '');
              const active = activeSection === id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    active ? 'text-white' : 'text-white/40 hover:text-white/80'
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 bg-white/5 rounded-lg border border-white/8" />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right: Socials + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com/aanand4175/" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition-colors">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/aanand-kumar-1ab7a017b/" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition-colors">
              <Linkedin size={16} />
            </a>
            <div className="w-px h-4 bg-white/10" />
            <a href="#contact"
              className="btn-outline !py-2 !px-4 !text-xs">
              Let's Connect
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg glass text-white">
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 pt-20 glass md:hidden" onClick={() => setIsOpen(false)}>
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-2" onClick={e => e.stopPropagation()}>
            {navLinks.map(link => (
              <a key={link.name} href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 px-4 text-white/70 hover:text-white font-medium text-lg rounded-xl hover:bg-white/5 transition-all">
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex gap-4">
              <a href="https://github.com/aanand4175/" target="_blank" className="text-white/40 hover:text-white"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/aanand-kumar-1ab7a017b/" target="_blank" className="text-white/40 hover:text-white"><Linkedin size={20} /></a>
              <a href="mailto:aanand4175@gmail.com" className="text-white/40 hover:text-white"><Mail size={20} /></a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
