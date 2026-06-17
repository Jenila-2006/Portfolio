import React from 'react';
import { Submarine } from './OceanIcons';
import { Brain, Code2, Rocket, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      title: 'AI Explorer',
      description: 'Delving deep into machine vision algorithms, NLP classifiers, and predictive networks to decipher unstructured real-world dynamics.',
      icon: Brain,
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Developer',
      description: 'Building clean architectural code pipelines in Python, Java, and React. Focused on reliability, speed, and responsive system ergonomics.',
      icon: Code2,
      gradient: 'from-[#00f2fe] to-cyan-600',
    },
    {
      title: 'Innovator',
      description: 'Translating academic computational concepts into fully operational products like sign language translators and digital learning chests.',
      icon: Rocket,
      gradient: 'from-[#05b293] to-emerald-500',
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10 container mx-auto px-6 overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#00f2fe]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Layout containing sub content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Submarine Interactive Side */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
          {/* Drifting water circular fields */}
          <div className="absolute w-72 h-72 border border-[#00f2fe]/10 rounded-full animate-pulse" />
          <div className="absolute w-56 h-56 border border-[#05b293]/10 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
          
          <Submarine className="w-56 h-36 relative z-10 hover:brightness-125 transition-all cursor-crosshair" />
          
          <p className="text-center font-mono text-xs text-cyan-400 mt-6 tracking-widest uppercase">
            Active Sonar Depth: 250m
          </p>
          <div className="flex gap-1.5 mt-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] font-mono text-gray-400">Ping Signal Active</span>
          </div>
        </div>

        {/* Content Side: Ocean Glass Cards */}
        <div className="lg:col-span-8 space-y-8">
          <div className="glass-card rounded-2xl p-8 md:p-10 border border-white/10 shadow-[0_8px_32px_rgba(0,242,254,0.05)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#00f2fe] to-[#05b293]" />

            <h2 className="text-3xl md:text-5xl font-display font-semibold text-white tracking-tight mb-6">
              About My Journey
            </h2>

            <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-8 font-sans">
              I am Voonna Jenila, a Computer Science and Artificial Intelligence student passionate about creating intelligent applications and solving real-world problems. By marrying state-of-the-art machine algorithms with sturdy industrial software architectures, I explore the depths of technology to lift up solutions that are accessible, meaningful, and future-ready.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((p) => {
                const IconComponent = p.icon;
                return (
                  <div
                    id={`pillar-${p.title.toLowerCase().replace(/\s+/g, '-')}`}
                    key={p.title}
                    className="p-5 rounded-xl border border-white/5 bg-white/2 hover:bg-white/5 hover:border-[#00f2fe]/30 transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${p.gradient} p-2.5 text-ocean-dark font-bold mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <h3 className="font-display font-medium text-white text-base mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-gray-450 leading-relaxed font-sans">
                      {p.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
