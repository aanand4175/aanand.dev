import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Hide preloader after 2 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500); // Wait for fade out animation
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#020408] transition-opacity duration-500 ease-in-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated logo mark */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-green to-accent-cyan flex items-center justify-center mb-6 relative overflow-hidden animate-bounce">
          <span className="font-display font-black text-bg-primary text-2xl relative z-10">A</span>
          <div className="absolute inset-0 bg-white/30 animate-pulse" />
        </div>
        
        {/* Loading bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-accent-green to-accent-cyan w-full origin-left animate-scale-x" />
        </div>
        <p className="mt-4 font-mono text-white/40 text-xs tracking-[0.3em] uppercase animate-pulse">
          Initializing
        </p>
      </div>
    </div>
  );
}
