import React from 'react';
import { certifications } from '../data/portfolioData';
import { PearlShell } from './OceanIcons';
import { Award, ShieldAlert, Calendar } from 'lucide-react';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative z-10 container mx-auto px-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white mb-3">
          Achievement Pearls
        </h2>
        <p className="text-gray-400 font-sans max-w-xl text-sm md:text-base">
          Academic validations extracted like valuable pearls from deep computational modules.
        </p>
      </div>

      {/* Pearls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {certifications.map((cert) => {
          // Detect glow color for Pearl mapping
          let glowValue = 'rgba(6, 182, 212, 0.4)';
          if (cert.glowingBadgeColor.includes('gold')) {
            glowValue = 'rgba(251, 191, 36, 0.4)';
          } else if (cert.glowingBadgeColor.includes('sea-green')) {
            glowValue = 'rgba(16, 185, 129, 0.4)';
          } else if (cert.glowingBadgeColor.includes('crystal-cyan')) {
            glowValue = 'rgba(6, 182, 212, 0.4)';
          }

          return (
            <div
              id={`certification-card-${cert.title.toLowerCase().replace(/\s+/g, '-')}`}
              key={cert.title}
              className="pearl-card rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 relative group overflow-hidden"
            >
              {/* Dynamic Pearl Clam shell aligned on top */}
              <div className="mb-6 scale-115 group-hover:scale-125 transition-transform duration-300">
                <PearlShell glowColor={glowValue} className="w-20 h-20" />
              </div>

              {/* Title of Certificate */}
              <h3 className="text-lg font-display font-medium text-white mb-2 leading-snug group-hover:text-aqua-blue transition-colors duration-200">
                {cert.title}
              </h3>

              {/* Issuer & Metadata */}
              <p className="text-gray-400 text-xs mb-4 font-mono font-medium">
                {cert.issuer}
              </p>

              {/* Tag indicator on base */}
              <div className="mt-auto pt-4 w-full border-t border-white/5 flex items-center justify-between text-xs text-gray-500 font-mono">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-cyan-400" />
                  <span>{cert.year}</span>
                </span>
                <span className="text-[#05b293] uppercase font-semibold text-[10px] tracking-wider">
                  Verified Pearl
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
