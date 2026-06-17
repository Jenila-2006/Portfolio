import React from 'react';
import { achievements } from '../data/portfolioData';
import { Trophy, Users, Award, Code2, Sparkles } from 'lucide-react';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 relative z-10 container mx-auto px-6">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">
          <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '8s' }} />
          <span>Extracurricular Vault</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white mb-3">
          Ocean of Achievements
        </h2>
        <p className="text-gray-400 font-sans max-w-xl text-sm md:text-base">
          Academic milestones, leadership responsibilities, and coding ecosystem contributions.
        </p>
      </div>

      {/* Achievements Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievements.map((ach) => {
          // Map appropriate cards style and icon based on category
          let Icon = Award;
          let accent = 'border-amber-500/20 shadow-amber-500/5 hover:border-amber-500/50 hover:shadow-amber-500/10 text-amber-400';
          let catBg = 'bg-amber-400/10 text-amber-300';

          if (ach.category === 'Leadership') {
            Icon = Users;
            accent = 'border-purple-500/20 shadow-purple-500/5 hover:border-purple-500/50 hover:shadow-purple-500/10 text-purple-400';
            catBg = 'bg-purple-400/10 text-purple-300';
          } else if (ach.category === 'Coding') {
            Icon = Code2;
            accent = 'border-cyan-500/20 shadow-cyan-500/5 hover:border-cyan-500/50 hover:shadow-cyan-500/10 text-cyan-400';
            catBg = 'bg-cyan-400/10 text-cyan-300';
          }

          return (
            <div
              id={`achievement-card-${ach.title.toLowerCase().replace(/\s+/g, '-')}`}
              key={ach.title}
              className={`rounded-2xl border bg-ocean-deep/40 p-6 md:p-8 flex flex-col justify-between transition-all duration-300 ${accent} group hover:-translate-y-1`}
            >
              <div>
                {/* Category tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-[10px] uppercase tracking-wider font-mono px-2.5 py-1 rounded-md ${catBg}`}>
                    {ach.category}
                  </span>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-inherit group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                </div>

                {/* Milestone Detail */}
                <h3 className="text-xl font-display font-medium text-white mb-3">
                  {ach.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-sans">
                  {ach.description}
                </p>
              </div>

              {/* Bottom Stamp Badge */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-gray-400">ROLE VALUE</span>
                <span className="text-xs font-mono text-white/50 border border-white/10 px-2 py-0.5 rounded bg-white/2">
                  {ach.badgeText}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
