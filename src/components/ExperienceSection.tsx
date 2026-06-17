import React from 'react';
import { experiences } from '../data/portfolioData';
import { Compass, Calendar, Building2, Anchor } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative z-10 container mx-auto px-6">
      {/* Glow Backing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-700/5 rounded-full blur-3xl pointer-events-none" />

      {/* Title */}
      <div className="flex flex-col items-center text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white">
          Experience Voyage
        </h2>
        <p className="text-gray-400 font-sans max-w-xl text-sm md:text-base mt-3">
          Chronological logs marking my voyages through professional laboratories and team environments.
        </p>
      </div>

      {/* Timeline Sea Current Map */}
      <div className="relative max-w-4xl mx-auto">
        {/* Center line (Represents submarine anchor chain) */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#00f2fe] via-[#05b293] to-cyan-950 rounded-full" />

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                id={`experience-log-${index}`}
                key={exp.role}
                className={`relative flex flex-col md:flex-row items-stretch md:justify-between ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Node Anchor Indicator */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-4 w-5 h-5 rounded-full bg-ocean-dark border-3 border-cyan-400 shadow-[0_0_12px_#00f2fe] z-20 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] animate-ping" />
                </div>

                {/* Card Container */}
                <div className="w-full md:w-[45%] ml-12 md:ml-0">
                  <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/5 hover:border-cyan-400/30 transition-all duration-300 relative group">
                    {/* Corner depth counter indicator */}
                    <span className="absolute top-4 right-4 font-mono text-[9px] text-gray-500 bg-white/5 px-2.5 py-1 rounded">
                      DIV_LOG_0{index + 1}
                    </span>

                    {/* Role Title */}
                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-2">
                      <Anchor className="w-3.5 h-3.5 shrink-0" />
                      <span>{exp.period}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-display font-medium text-white mb-2">
                      {exp.role}
                    </h3>

                    {/* Company info */}
                    <div className="flex items-center gap-1.5 text-sm text-gray-400 mb-4 font-sans">
                      <Building2 className="w-4 h-4 text-[#05b293]" />
                      <span className="font-medium text-gray-300">{exp.company}</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed font-sans mb-5">
                      {exp.description}
                    </p>

                    {/* Tasks or milestones */}
                    {exp.milestones && exp.milestones.length > 0 && (
                      <div className="space-y-2 border-t border-white/5 pt-4">
                        <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-2">
                          Core Log Entries:
                        </span>
                        {exp.milestones.map((m, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#05b293] mt-1.5 shrink-0" />
                            <span className="font-sans">{m}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty visual spacing drawer on opposite desktop grid items */}
                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
