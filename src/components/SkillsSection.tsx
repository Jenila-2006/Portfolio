import React, { useState } from 'react';
import { initialSkills } from '../data/portfolioData';
import { Award, Terminal, LayoutDashboard, Brain, HardDrive, Cpu, Compass } from 'lucide-react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Languages' | 'Frontend' | 'Database' | 'AI' | 'Tools' | 'Coding-Platforms'>('All');

  const categories = [
    { key: 'All', label: 'Entire Ocean', icon: Compass },
    { key: 'Languages', label: 'Code Dialects', icon: Terminal },
    { key: 'Frontend', label: 'Visual Interface', icon: LayoutDashboard },
    { key: 'Database', label: 'Deep Storage', icon: HardDrive },
    { key: 'AI', label: 'AI & Vision Labs', icon: Brain },
    { key: 'Tools', label: 'Naval Tools', icon: Cpu },
    { key: 'Coding-Platforms', label: 'Drill Platforms', icon: Award }
  ];

  const filteredSkills = initialSkills.filter((s) => {
    if (activeCategory === 'All') return true;
    return s.category === activeCategory;
  });

  return (
    <section id="skills" className="py-24 relative z-10 container mx-auto px-6">
      {/* Background glow highlights */}
      <div className="absolute top-1/3 left-1/10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-aqua-blue via-crystal-cyan to-white">
          My Skill Ocean
        </h2>
        <p className="text-gray-450 font-sans max-w-2xl text-sm md:text-base mt-3">
          Venture into specialized zones of training. Skills are packaged inside buoyant micro-capsules fitted with dynamic fluid metrics representing mastery depth.
        </p>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 max-w-4xl">
          {categories.map((c) => {
            const IconComponent = c.icon;
            const isActive = activeCategory === c.key;
            return (
              <button
                id={`skill-tab-${c.key}`}
                key={c.key}
                onClick={() => setActiveCategory(c.key as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono border transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-aqua-blue to-cyan-500 text-ocean-dark border-[#00f2fe] shadow-[0_0_15px_rgba(0,242,254,0.3)] font-semibold'
                    : 'bg-ocean-deep/50 text-gray-400 border-white/5 hover:border-aqua-blue/40 hover:text-white'
                }`}
              >
                <IconComponent className="w-3.5 h-3.5" />
                <span>{c.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Floating Pearl Fish Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filteredSkills.map((skill, index) => {
          // Identify custom badge and coloring
          let themeClasses = 'from-cyan-500/20 to-blue-600/10 border-cyan-400/30 text-cyan-300';
          let fluidBg = 'bg-cyan-400/30';

          if (skill.category === 'AI') {
            themeClasses = 'from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-300';
            fluidBg = 'bg-purple-500/30';
          } else if (skill.category === 'Languages') {
            themeClasses = 'from-yellow-400/20 to-amber-600/10 border-amber-400/30 text-amber-300';
            fluidBg = 'bg-amber-500/30';
          } else if (skill.category === 'Database') {
            themeClasses = 'from-teal-500/20 to-emerald-600/10 border-teal-500/30 text-teal-300';
            fluidBg = 'bg-emerald-500/30';
          } else if (skill.category === 'Coding-Platforms') {
            themeClasses = 'from-rose-500/20 to-orange-600/10 border-rose-500/30 text-rose-300';
            fluidBg = 'bg-rose-500/30';
          }

          return (
            <div
              id={`skill-pearlfish-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
              key={skill.name}
              className={`relative rounded-2xl flex flex-col items-center justify-between p-4 py-6 text-center border bg-gradient-to-b ${themeClasses} shadow-[inset_0_4px_16px_rgba(255,255,255,0.05),0_6px_20px_0_rgba(0,0,0,0.35)] hover:scale-105 hover:-translate-y-1 transition-all duration-300 group cursor-default overflow-hidden`}
              style={{
                // Staggered sea sway representation
                animation: 'underwater-sway 6s ease-in-out infinite',
                animationDelay: `${index * -0.5}s`,
              }}
            >
              {/* High-fidelity elegant Pearl Fish contour swimming behind the content (reduced size) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg viewBox="0 0 120 100" className="w-14 h-14 text-current opacity-15 group-hover:opacity-25 transition-all duration-500 transform -rotate-12 group-hover:rotate-0 group-hover:scale-110">
                  {/* Bioluminescent swimming fish pattern */}
                  <path
                    d="M10 50 C25 25, 65 25, 85 50 C65 75, 25 75, 10 50 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    opacity="0.8"
                  />
                  {/* Dorsal Fin */}
                  <path
                    d="M45 34 C55 12, 70 20, 68 34"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  {/* Ventral Fin */}
                  <path
                    d="M40 66 C50 84, 62 78, 60 66"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  {/* Detailed Tail Fin with fan rays */}
                  <path
                    d="M85 50 Q105 32, 110 25 Q104 42, 100 50 T110 75 Q105 68, 85 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path d="M88 50 L104 35" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4" strokeDasharray="2,2" />
                  <path d="M90 50 L98 50" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4" strokeDasharray="2,2" />
                  <path d="M88 50 L104 65" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4" strokeDasharray="2,2" />

                  {/* Sparkling gills/scales lines inside */}
                  <path d="M22 45 Q26 40, 24 50 T22 55" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                  <path d="M27 45 Q31 40, 29 50 T27 55" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25" />

                  {/* Glowing bubbles escaping in front of the mouth */}
                  <circle cx="5" cy="45" r="1" fill="currentColor" opacity="0.7" />
                  <circle cx="2" cy="40" r="1.5" fill="currentColor" opacity="0.4" />
                </svg>
              </div>

              {/* Glowing micro-plankton particle trigger */}
              <div className="absolute top-[12%] left-[12%] w-[25%] h-[25%] rounded-full bg-white/5 blur-[2px] pointer-events-none" />

              {/* Skill Icon Category Indicator */}
              <span className="text-[9px] uppercase tracking-widest font-mono text-gray-400 opacity-60 z-10 block mb-1">
                {skill.category}
              </span>

              {/* Skill Name */}
              <div className="z-10 px-1">
                <h3 className="font-display font-semibold text-xs md:text-sm text-white group-hover:text-cyan-200 transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>

              {/* Fluid gauge bar representing skill depth */}
              <div className="relative mt-3 flex flex-col items-center justify-center z-10 w-full">
                <div className="w-full max-w-[50px] bg-black/45 rounded-full h-1 overflow-hidden border border-white/5 relative">
                  <div 
                    className={`h-full ${fluidBg} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {/* Level Tag percentage */}
                <span className="text-[10px] font-mono mt-1 text-cyan-200/80 font-medium group-hover:text-white transition-colors">
                  {skill.level}% depth
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
