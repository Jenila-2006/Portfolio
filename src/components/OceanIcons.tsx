import React from 'react';

// Animated floating glass bottle containing a message scroll
export function MessageBottle({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <div className={`relative animate-bounce ${className}`} style={{ animationDuration: '4s' }}>
      <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-[0_8px_20px_rgba(0,242,254,0.3)]">
        {/* Cork */}
        <path d="M46 12 L54 12 L52 20 L48 20 Z" fill="#8d5b4c" />
        {/* Neck */}
        <path d="M42 20 L58 20 L56 36 L44 36 Z" fill="rgba(6, 182, 212, 0.4)" stroke="#00f2fe" strokeWidth="2" />
        {/* Bottle Body */}
        <path d="M25 50 C25 36, 32 36, 44 36 L56 36 C68 36, 75 36, 75 50 L75 100 C75 110, 65 118, 50 118 C35 118, 25 110, 25 100 Z" fill="rgba(0, 242, 254, 0.15)" stroke="#00f2fe" strokeWidth="2.5" />
        {/* Highlight Reflection */}
        <path d="M32 50 C32 44, 38 42, 45 42" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M29 60 L29 95" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="3" strokeLinecap="round" />
        {/* Scroll inside the bottle */}
        <g transform="translate(38, 55)">
          <rect x="0" y="0" width="24" height="42" rx="4" fill="#fef3c7" stroke="#fbbf24" strokeWidth="1.5" transform="rotate(10)" />
          {/* Scroll ribbon */}
          <rect x="2" y="18" width="22" height="4" fill="#ef4444" transform="rotate(10)" />
          {/* Scroll lines */}
          <line x1="4" y1="8" x2="18" y2="8" stroke="#d97706" strokeWidth="1.5" transform="rotate(10)" />
          <line x1="4" y1="14" x2="14" y2="14" stroke="#d97706" strokeWidth="1.5" transform="rotate(10)" />
          <line x1="4" y1="26" x2="20" y2="26" stroke="#d97706" strokeWidth="1.5" transform="rotate(10)" />
          <line x1="4" y1="32" x2="16" y2="32" stroke="#d97706" strokeWidth="1.5" transform="rotate(10)" />
        </g>
        {/* Ocean waves around the bottle base */}
        <path d="M15 102 C 30 98, 40 106, 50 102 C 60 98, 70 106, 85 102" fill="none" stroke="rgba(0, 242, 254, 0.6)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// Glowing pearl inside a metallic ocean shell
export function PearlShell({ className = "w-16 h-16", glowColor = "rgba(0, 242, 254, 0.6)" }: { className?: string; glowColor?: string }) {
  return (
    <div className={`relative group ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_4px_12px_rgba(255,255,255,0.15)]">
        {/* Bottom Shell half */}
        <path d="M50 85 C15 85, 10 50, 50 45 C90 50, 85 85, 50 85 Z" fill="#1e293b" stroke="#e2e8f0" strokeWidth="2" />
        {/* Top Shell half (slightly open) */}
        <path d="M50 45 C15 45, 10 10, 50 5 C90 10, 85 45, 50 45 Z" fill="#334155" stroke="#cbd5e1" strokeWidth="2" className="origin-[50px_45px] transition-transform duration-500 group-hover:rotate-x-12" />
        {/* Internal shell ridges */}
        <path d="M50 45 L50 15 M50 45 L30 18 M50 45 L70 18 M50 45 L18 30 M50 45 L82 30" stroke="#475569" strokeWidth="1.5" />
        {/* Soft shell silk background */}
        <ellipse cx="50" cy="55" rx="35" ry="25" fill="rgba(241, 245, 249, 0.05)" />
        {/* Internal bottom ridges */}
        <path d="M50 85 L50 60 M50 85 L28 70 M50 85 L72 70 M50 85 L18 80 M50 85 L82 80" stroke="#334155" strokeWidth="1" />
        {/* Pearl reflection background glow */}
        <circle cx="50" cy="58" r="16" fill={glowColor} className="blur-md animate-pulse" />
        {/* The Pearl */}
        <circle cx="50" cy="58" r="9" fill="url(#pearlGradient)" stroke="#ffffff" strokeWidth="1" className="drop-shadow-[0_0_12px_#ffffff]" />
        
        {/* Gradients */}
        <defs>
          <radialGradient id="pearlGradient" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#94a3b8" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

// Submarine navigating depth
export function Submarine({ className = "w-24 h-16" }: { className?: string }) {
  return (
    <div className={`relative ${className} animate-[bounce_5s_ease-in-out_infinite]`}>
      <svg viewBox="0 0 120 80" className="w-full h-full drop-shadow-[0_10px_15px_rgba(0,242,254,0.25)]">
        {/* Propeller Rotation */}
        <g className="origin-[10px_42px] animate-[spin_1.5s_linear_infinite]">
          <path d="M10 32 L4 52" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
          <path d="M10 52 L4 32" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
        </g>
        {/* Propeller shaft */}
        <rect x="10" y="40" width="8" height="4" fill="#94a3b8" />
        
        {/* Submarine Yellow-Cyan Pod */}
        <path d="M18 42 C18 25, 35 20, 75 20 C100 20, 115 32, 115 42 C115 52, 100 64, 75 64 C35 64, 18 59, 18 42 Z" fill="#0c4a6e" stroke="#00f2fe" strokeWidth="3" />
        
        {/* Conning tower / Hatch */}
        <path d="M50 20 L50 8 L66 8 L66 20 Z" fill="#0284c7" stroke="#00f2fe" strokeWidth="2.5" />
        
        {/* Periscope */}
        <path d="M56 8 L56 3 L68 3" fill="none" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
        <circle cx="68" cy="3" r="1.5" fill="#000000" />
        
        {/* Port windows / Lights */}
        <circle cx="38" cy="42" r="6" fill="#00f2fe" stroke="#ffffff" strokeWidth="1.5" className="animate-pulse" />
        <circle cx="62" cy="42" r="6" fill="#00f2fe" stroke="#ffffff" strokeWidth="1.5" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <circle cx="86" cy="42" r="6" fill="#00f2fe" stroke="#ffffff" strokeWidth="1.5" className="animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Sonar Beacon on upper front */}
        <circle cx="110" cy="28" r="2.5" fill="#ef4444" className="animate-ping" style={{ animationDuration: '2s' }} />
        
        {/* Fin / stabilizer */}
        <path d="M78 64 L86 74 L94 64 Z" fill="#0284c7" stroke="#00f2fe" strokeWidth="2" />
      </svg>
    </div>
  );
}

// Gorgeous glowing golden treasure chest that sparkles
export function TreasureChest({ className = "w-20 h-20", isOpen = false, onClick }: { className?: string; isOpen?: boolean; onClick?: () => void }) {
  return (
    <div 
      onClick={onClick} 
      className={`relative cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95 ${className}`}
    >
      {/* Background Sparkles / Pulse Glow */}
      <div className="absolute inset-2 bg-amber-500/15 rounded-full blur-xl animate-pulse" />
      
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_12px_24px_rgba(251,191,36,0.3)]">
        {/* Chest Shadows */}
        <ellipse cx="50" cy="85" rx="36" ry="6" fill="rgba(0,0,0,0.5)" />

        {/* Chest Base */}
        <path d="M18 52 L18 80 C18 84, 22 88, 28 88 L72 88 C78 88, 82 84, 82 80 L82 52 Z" fill="#78350f" stroke="#fbbf24" strokeWidth="2.5" />
        {/* Metallic corner braces on base */}
        <path d="M18 52 L26 52 L26 80 L18 80 Z" fill="#d97706" />
        <path d="M74 52 L82 52 L82 80 L74 80 Z" fill="#d97706" />
        <rect x="36" y="82" width="28" height="6" fill="#b45309" stroke="#fbbf24" strokeWidth="1.5" />

        {/* Jewels showing when slightly open or open */}
        {isOpen ? (
          <g>
            {/* Glowing gold coins and gem contents */}
            <ellipse cx="50" cy="48" rx="28" ry="8" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
            <circle cx="34" cy="48" r="4.5" fill="#f43f5e" className="animate-pulse" />
            <circle cx="66" cy="47" r="4" fill="#3b82f6" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
            <circle cx="50" cy="45" r="5" fill="#10b981" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
            <polygon points="44,48 48,44 52,48 48,52" fill="#a855f7" />
          </g>
        ) : (
          <path d="M18 52 L82 52" stroke="#d97706" strokeWidth="3" />
        )}

        {/* Lid Top */}
        {isOpen ? (
          /* Curved lid shifted up & folded back */
          <path d="M18 42 C18 20, 24 10, 50 10 C76 10, 82 20, 82 42 L82 46 L18 46 Z" fill="#92400e" stroke="#fbbf24" strokeWidth="2.5" className="origin-[center_46px] -translate-y-10 -rotate-12 transition-transform duration-500" />
        ) : (
          /* Curved lid resting on base */
          <path d="M18 52 C18 34, 24 24, 50 24 C76 24, 82 34, 82 52 Z" fill="#78350f" stroke="#fbbf24" strokeWidth="2.5" className="transition-transform duration-500" />
        )}

        {/* Metal bands on lid */}
        {!isOpen && (
          <g>
            <path d="M28 30 C32 30, 36 34, 38 52" fill="none" stroke="#fbbf24" strokeWidth="2" />
            <path d="M72 30 C68 30, 64 34, 62 52" fill="none" stroke="#fbbf24" strokeWidth="2" />
          </g>
        )}

        {/* Keyhole / Hasp lock */}
        <g transform={isOpen ? 'translate(0, -10)' : 'translate(0, 0)'} className="transition-transform duration-500">
          <rect x="44" y="46" width="12" height="15" rx="3" fill="#d97706" stroke="#fbbf24" strokeWidth="1.5" />
          <circle cx="50" cy="51" r="2.5" fill="#000000" />
          <line x1="50" y1="53.5" x2="50" y2="58.5" stroke="#000000" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

// Decorative water wave separator line
export function WaveDivider() {
  return (
    <div className="w-full overflow-hidden leading-[0] fill-ocean-dark">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] transform rotate-180 text-ocean-dark">
        <path d="M0,0 C150,90 350,110 500,90 C650,70 850,90 1000,105 C1100,110 1150,100 1200,85 L1200,120 L0,120 Z" fill="currentColor"></path>
      </svg>
    </div>
  );
}
