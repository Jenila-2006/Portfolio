import React, { useMemo } from 'react';

export default function OceanBackground() {
  // Generate stable random bubbles so they don't flash on every state change
  const bubbles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => {
      const size = Math.random() * 12 + 4; // 4px to 16px
      const left = Math.random() * 100; // 0% to 100%
      const duration = Math.random() * 15 + 10; // 10s to 25s
      const delay = Math.random() * -20; // negative delay so some start mid-screen
      return { id: i, size, left, duration, delay };
    });
  }, []);

  // Generate stable fishes
  const fishes = useMemo(() => {
    return [
      { id: 1, top: 15, size: 45, duration: 25, delay: 0, dir: 'left', color: 'text-aqua-blue' },
      { id: 2, top: 40, size: 60, duration: 32, delay: -10, dir: 'right', color: 'text-treasure-gold' },
      { id: 3, top: 65, size: 35, duration: 20, delay: -5, dir: 'left', color: 'text-crystal-cyan' },
      { id: 4, top: 80, size: 50, duration: 28, delay: -15, dir: 'right', color: 'text-sea-green' },
      { id: 5, top: 30, size: 40, duration: 38, delay: -2, dir: 'right', color: 'text-blue-400' },
    ];
  }, []);

  // Generate 10 stable key-framed jellyfish structures with customizable sizes, delays, and paths
  const jellyfishes = useMemo(() => {
    return [
      { id: 1, left: 8, size: 75, duration: 28, delay: 0, color: 'text-cyan-400/25', animType: 'animate-jelly-right' },
      { id: 2, left: 24, size: 110, duration: 42, delay: -12, color: 'text-indigo-400/22', animType: 'animate-jelly-scurve' },
      { id: 3, left: 45, size: 60, duration: 34, delay: -5, color: 'text-emerald-400/20', animType: 'animate-jelly-left' },
      { id: 4, left: 62, size: 85, duration: 48, delay: -22, color: 'text-pink-400/20', animType: 'animate-jelly-scurve' },
      { id: 5, left: 80, size: 95, duration: 32, delay: -8, color: 'text-purple-400/25', animType: 'animate-jelly-left' },
      { id: 6, left: 16, size: 50, duration: 52, delay: -18, color: 'text-cyan-300/18', animType: 'animate-jelly-scurve' },
      { id: 7, left: 38, size: 80, duration: 36, delay: -28, color: 'text-blue-400/24', animType: 'animate-jelly-right' },
      { id: 8, left: 55, size: 100, duration: 46, delay: -35, color: 'text-violet-400/20', animType: 'animate-jelly-left' },
      { id: 9, left: 73, size: 70, duration: 30, delay: -15, color: 'text-magenta-400/20', animType: 'animate-jelly-scurve' },
      { id: 10, left: 90, size: 65, duration: 40, delay: -3, color: 'text-teal-400/22', animType: 'animate-jelly-right' },
    ];
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {/* Deep Ocean Blueprint Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02091c] via-[#031533] to-[#010816]" />

      {/* Underwater Light Rays Shimmer effect */}
      <div 
        className="absolute top-0 left-1/4 w-[120%] h-[150vh] origin-top bg-gradient-to-r from-transparent via-[#00f2fe]/5 to-transparent blur-3xl"
        style={{
          animation: 'light-rays 12s ease-in-out infinite',
          transform: 'rotate(-25deg) translateX(-10%)',
        }}
      />
      <div 
        className="absolute top-0 -left-1/10 w-[80%] h-[120vh] origin-top bg-gradient-to-r from-transparent via-[#06b6d4]/4 to-transparent blur-2xl"
        style={{
          animation: 'light-rays 16s ease-in-out infinite alternate',
          transform: 'rotate(-15deg)',
        }}
      />

      {/* Surface Wave Effects at the absolute top */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#00f2fe]/10 to-transparent opacity-80" />

      {/* Rising Bubbles Container */}
      <div className="absolute inset-0">
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: `${b.size * 1.5}px`, // Slightly larger for better 3D readability
              height: `${b.size * 1.5}px`,
              left: `${b.left}%`,
              bottom: '-50px',
              animation: `bubble-rise ${b.duration}s linear infinite`,
              animationDelay: `${b.delay}s`,
              background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.1) 35%, rgba(6, 182, 212, 0.15) 65%, rgba(59, 130, 246, 0.35) 100%)',
              border: '0.75px solid rgba(255, 255, 255, 0.55)',
              boxShadow: 'inset -2px -2px 5px rgba(0, 242, 254, 0.35), inset 1.5px 1.5px 4px rgba(255, 255, 255, 0.65), 0 4px 12px rgba(6, 182, 212, 0.22)',
            }}
          >
            {/* Glossy top-left highlight glare */}
            <div className="absolute top-[12%] left-[12%] w-[25%] h-[25%] rounded-full bg-white/60 pointer-events-none" />
            {/* Subtle bottom-right counter reflection */}
            <div className="absolute bottom-[15%] right-[15%] w-[18%] h-[18%] rounded-full bg-cyan-200/30 blur-[0.5px] pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Swimming Futuristic Hologram Fishes */}
      {fishes.map((fish) => {
        const isLeft = fish.dir === 'left';
        return (
          <div
            key={fish.id}
            className="absolute opacity-40 hover:opacity-100 transition-opacity duration-500"
            style={{
              top: `${fish.top}%`,
              width: `${fish.size}px`,
              height: `${fish.size / 2}px`,
              animation: `${isLeft ? 'fish-swim-left' : 'fish-swim-right'} ${fish.duration}s linear infinite`,
              animationDelay: `${fish.delay}s`,
            }}
          >
            {/* Elegant SVG Fish shape with inner glow */}
            <svg
              viewBox="0 0 100 50"
              className={`w-full h-full fill-current ${fish.color} drop-shadow-[0_0_8px_currentColor]`}
            >
              {/* Fish Body */}
              <path d="M 12 25 C 25 10, 65 5, 80 25 C 65 45, 25 40, 12 25" />
              {/* Fish Tail */}
              <path d="M 12 25 L 2 15 C 4 22, 4 28, 2 35 Z" />
              {/* Fins */}
              <path d="M 45 13 C 50 2, 58 5, 55 13" />
              <path d="M 45 37 C 50 48, 58 45, 55 37" />
              {/* Glowing Eye */}
              <circle cx="72" cy="20" r="2.5" className="fill-white" />
            </svg>
          </div>
        );
      })}

      {/* Swimming Futuristic Hologram Jellyfishes */}
      {jellyfishes.map((jelly) => (
        <div
          key={jelly.id}
          className={`absolute ${jelly.animType} pointer-events-none hover:opacity-100 transition-opacity duration-500`}
          style={{
            left: `${jelly.left}%`,
            bottom: '-120px',
            width: `${jelly.size}px`,
            height: `${jelly.size * 1.4}px`,
            animationDuration: `${jelly.duration}s`,
            animationDelay: `${jelly.delay}s`,
          }}
        >
          <div className="w-full h-full animate-jellyfish-pulse">
            <svg
              viewBox="0 0 100 130"
              className={`w-full h-full fill-current ${jelly.color} drop-shadow-[0_0_15px_currentColor]`}
            >
              {/* Jellyfish Cap */}
              <path d="M 15 60 C 15 20, 85 20, 85 60 C 72 72, 28 72, 15 60 Z" />
              {/* Internal organs detailing */}
              <path d="M 32 55 C 38 42, 62 42, 68 55" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
              <path d="M 40 58 C 43 48, 57 48, 60 58" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              {/* Long floating tentacles */}
              <path d="M 22 65 Q 12 90, 25 120 Q 30 90, 28 66" fill="currentColor" opacity="0.8" />
              <path d="M 35 68 Q 30 98, 40 125 Q 44 95, 39 68" fill="currentColor" opacity="0.9" />
              <path d="M 50 69 Q 54 102, 48 130 Q 44 98, 50 69" fill="currentColor" opacity="1.0" />
              <path d="M 65 68 Q 70 98, 60 125 Q 56 95, 59 68" fill="currentColor" opacity="0.9" />
              <path d="M 78 65 Q 88 90, 75 120 Q 70 90, 72 66" fill="currentColor" opacity="0.8" />
            </svg>
          </div>
        </div>
      ))}

      {/* Atmospheric Shipwreck Graphic in background */}
      <div className="absolute bottom-[-10px] left-[5%] opacity-15 w-80 h-48 text-[#0d2a4a] flex items-end">
        <svg viewBox="0 0 400 200" className="w-full fill-current">
          {/* Distant broken ship mast and hull */}
          <path d="M 20 180 C 40 130, 150 120, 200 150 C 230 135, 310 140, 360 170 C 380 180, 390 195, 390 200 L 10 200 Z" />
          <path d="M 120 135 L 120 60 L 180 90 Z" stroke="currentColor" strokeWidth="3" />
          <path d="M 240 142 L 240 30 L 290 60 L 240 80" stroke="currentColor" strokeWidth="3" />
          {/* Openings/Windows of shipwreck */}
          <circle cx="150" cy="165" r="6" />
          <circle cx="180" cy="168" r="6" />
          <circle cx="210" cy="170" r="6" />
          <circle cx="270" cy="175" r="5" />
        </svg>
      </div>

      {/* Underwater seaweed/corals swaying side-to-side */}
      <div className="absolute bottom-0 right-[4%] opacity-20 flex gap-4 items-end pointer-events-none">
        {/* Coral Stem 1 */}
        <div className="w-10 h-36 bg-gradient-to-t from-emerald-950 via-[#05b293]/40 to-transparent rounded-t-full pb-2 origin-bottom animate-sway">
          <svg viewBox="0 0 40 100" className="w-full h-full fill-[#05b293]">
            <path d="M 20 100 Q 10 80, 25 60 T 15 20 Q 25 10, 20 0 Q 35 15, 25 35 T 35 70 Q 20 90, 20 100" />
          </svg>
        </div>
        {/* Coral Stem 2 (staggered delay) */}
        <div 
          className="w-8 h-48 bg-gradient-to-t from-cyan-950 via-[#00f2fe]/40 to-transparent rounded-t-full pb-2 origin-bottom animate-sway"
          style={{ animationDelay: '-2s', animationDuration: '8s' }}
        >
          <svg viewBox="0 0 40 120" className="w-full h-full fill-cyan-400">
            <path d="M 20 120 Q 30 95, 15 70 T 30 30 Q 15 15, 20 0 Q 5 20, 20 50 T 10 90 Q 25 110, 20 120" />
          </svg>
        </div>
        {/* Coral Stem 3 */}
        <div 
          className="w-6 h-28 bg-gradient-to-t from-amber-950 via-amber-400/30 to-transparent rounded-t-full pb-2 origin-bottom animate-sway"
          style={{ animationDelay: '-4.5s', animationDuration: '5s' }}
        >
          <svg viewBox="0 0 30 80" className="w-full h-full fill-amber-400">
            <path d="M 15 80 Q 5 60, 20 40 T 10 15 Q 20 5, 15 0 Q 25 10, 15 30 T 25 55 Q 10 70, 15 80" />
          </svg>
        </div>
      </div>
    </div>
  );
}
