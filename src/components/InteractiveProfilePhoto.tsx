import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Volume2, ShieldAlert } from 'lucide-react';

interface InteractiveProfilePhotoProps {
  onTouch: () => void;
  touchCount: number;
}

export default function InteractiveProfilePhoto({ onTouch, touchCount }: InteractiveProfilePhotoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [bubbleText, setBubbleText] = useState<string | null>(null);

  // Play a beautiful deep marine synthesized sound effect via Web Audio API 
  const playUnderwaterChime = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;

      // 1. Warm organic whale sound / synthesizer sweep
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gainNode = ctx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(220, now); // A3 frequency
      osc1.frequency.exponentialRampToValueAtTime(440, now + 0.6); // smooth slide upwards

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(110, now); // A2 fundamental bass
      osc2.frequency.exponentialRampToValueAtTime(220, now + 0.7);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(300, now);
      filter.frequency.exponentialRampToValueAtTime(1200, now + 0.5);

      gainNode.gain.setValueAtTime(0.18, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.95);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 1.0);
      osc2.stop(now + 1.0);

      // 2. High crystal frequency splash bubble Sound
      const splashOsc = ctx.createOscillator();
      const splashGain = ctx.createGain();
      splashOsc.type = 'sine';
      splashOsc.frequency.setValueAtTime(880, now);
      splashOsc.frequency.exponentialRampToValueAtTime(2200, now + 0.3);
      splashGain.gain.setValueAtTime(0.06, now);
      splashGain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      
      splashOsc.connect(splashGain);
      splashGain.connect(ctx.destination);
      splashOsc.start(now);
      splashOsc.stop(now + 0.35);

    } catch (e) {
      console.warn("Web Audio restrictions active. No worries, visual elements are pristine!", e);
    }
  };

  // Speaks welcome message using browser's SpeechSynthesis engine
  const speakGreeting = () => {
    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const speech = new SpeechSynthesisUtterance();
        speech.text = "Hello! I am Voonna Jenila. Welcome to my computer science and AI ML portfolio portal! Feel free to explore my deep ocean treasures!";
        speech.rate = 0.98;
        speech.pitch = 1.25; // Slightly higher pitches for clear friendly female acoustics
        
        const voices = window.speechSynthesis.getVoices();
        // Prioritize common premium female voices in English
        const femaleVoice = voices.find(v => 
          v.lang.toLowerCase().includes('en') && (
            v.name.toLowerCase().includes('female') || 
            v.name.toLowerCase().includes('zira') || 
            v.name.toLowerCase().includes('samantha') || 
            v.name.toLowerCase().includes('hazel') || 
            v.name.toLowerCase().includes('susan') || 
            v.name.toLowerCase().includes('victoria') || 
            v.name.toLowerCase().includes('moira') ||
            v.name.toLowerCase().includes('google us english')
          )
        ) || voices.find(v => v.lang.toLowerCase().includes('en'));

        if (femaleVoice) {
          speech.voice = femaleVoice;
        }
        window.speechSynthesis.speak(speech);
      } catch (err) {
        console.error("Speech Synthesis has been blocked or timed out on this device.", err);
      }
    }
  };

  const handleInteract = () => {
    if (isClicked) return;
    setIsClicked(true);
    onTouch();

    // Trigger beautiful multisensory audio outputs
    playUnderwaterChime();
    speakGreeting();

    // Set custom charming greeting sub-bubbles
    const selfGreetings = [
      "Hello! Welcome to my AI & Web portfolio! 🌊",
      "Swoosh! I'm Voonna Jenila. Excited to work together!",
      "Greeting, explorer! Let's build something brilliant! 🚀",
      "I hope you enjoy exploring my digital ocean! 🐚"
    ];
    setBubbleText(selfGreetings[Math.floor(Math.random() * selfGreetings.length)]);

    setTimeout(() => {
      setIsClicked(false);
    }, 1500);

    setTimeout(() => {
      setBubbleText(null);
    }, 4500);
  };

  return (
    <div className="relative flex flex-col items-center justify-center cursor-pointer select-none">
      
      {/* Floating Greeting Speech Bubble */}
      <AnimatePresence>
        {bubbleText && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12 }}
            className="absolute -top-16 px-4 py-2 bg-gradient-to-tr from-cyan-950 via-[#01142c] to-blue-950 border border-cyan-400/50 text-cyan-200 text-xs font-mono rounded-2xl shadow-[0_0_20px_rgba(6,182,212,0.55)] z-40 whitespace-nowrap flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-spin" />
            <span>{bubbleText}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Profile Photo Porthole Frame */}
      <motion.div
        id="interactive-profile-photo-container"
        onClick={handleInteract}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={isClicked ? {
          scale: [1, 1.1, 0.96, 1],
          y: [0, -18, 4, 0],
          boxShadow: [
            "0 0 15px rgba(34,211,238,0.3)",
            "0 0 35px rgba(34,211,238,0.7)",
            "0 0 15px rgba(34,211,238,0.3)"
          ]
        } : {
          y: [0, -6, 0]
        }}
        transition={isClicked ? {
          duration: 1.2,
          ease: "easeInOut"
        } : {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative w-56 h-56 rounded-full flex items-center justify-center p-3 z-10"
      >
        {/* Animated Cyber Nautilus Rotating Glow Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-450/45 animate-spin" style={{ animationDuration: '30s' }} />
        
        {/* Active glowing ring background */}
        <div className={`absolute inset-1.5 rounded-full border border-cyan-400 transition-all duration-700 ${isHovered ? 'shadow-[0_0_25px_rgba(0,242,254,0.65)] scale-102 bg-cyan-400/5' : 'shadow-[0_0_12px_rgba(0,242,254,0.25)]'}`} />
        
        {/* Undersea ambient gradient back of avatar */}
        <div className="absolute inset-3.5 rounded-full bg-gradient-to-tr from-[#020b18] via-cyan-950 to-blue-900 pointer-events-none" />

        {/* Floating Bubble-lets inside the porthole */}
        <span className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-white/20 blur-[0.5px] animate-ping" style={{ animationDuration: '3.5s' }} />
        <span className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 rounded-full bg-cyan-400/40 blur-[0.5px] animate-pulse" />

        {/* Real User Photo Container with custom referral rules */}
        <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 z-20 shadow-inner flex items-center justify-center bg-cyan-950/40">
          <img
            src="https://files.catbox.moe/yglt14.jpeg"
            alt="Voonna Jenila Portrait"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            onError={(e) => {
              // Fallback if avatar fails loading
              (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400";
            }}
          />

          {/* Holographic scanning horizontal scanner line */}
          <div className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_cyan] pointer-events-none opacity-40 animate-pulse" style={{ animation: 'holographic-scan 4s linear infinite' }} />
        </div>

        {/* Floating audio speaker icon */}
        <div className="absolute -bottom-1 -right-1 p-2 rounded-xl bg-cyan-950/90 border border-cyan-400/40 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.4)] z-30 opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all">
          <Volume2 className="w-3.5 h-3.5" />
        </div>

        {/* Diving Helmet Porthole Rivets SVG decor */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-cyan-400/30 pointer-events-none animate-pulse">
          {/* Circular frame rivets */}
          <circle cx="50" cy="5" r="1.5" fill="currentColor" />
          <circle cx="95" cy="50" r="1.5" fill="currentColor" />
          <circle cx="50" cy="95" r="1.5" fill="currentColor" />
          <circle cx="5" cy="50" r="1.5" fill="currentColor" />
          <circle cx="18" cy="18" r="1.5" fill="currentColor" />
          <circle cx="82" cy="18" r="1.5" fill="currentColor" />
          <circle cx="82" cy="82" r="1.5" fill="currentColor" />
          <circle cx="18" cy="82" r="1.5" fill="currentColor" />
        </svg>

      </motion.div>
    </div>
  );
}
