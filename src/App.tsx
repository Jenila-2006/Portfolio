/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import OceanBackground from './components/OceanBackground';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Chatbot from './components/Chatbot';
import { WaveDivider } from './components/OceanIcons';
import { Compass, Sun, Moon } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = React.useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved === 'light') return 'light';
    }
    return 'dark';
  });

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="relative min-h-screen bg-ocean-dark text-pearl-white selection:bg-[#00f2fe]/30 selection:text-[#00f2fe] overflow-x-hidden transition-colors duration-500">
      {/* 1. Interactive Ocean Animated Atmosphere background */}
      <OceanBackground />

      {/* 2. Glassmorphism Navigation Deck */}
      <Navbar />

      {/* 3. Main Sections Layout Flow */}
      <main className="relative">
        {/* Hero Landing Stage */}
        <HeroSection />

        {/* Separator Waves */}
        <WaveDivider />

        {/* About Journey Deck */}
        <AboutSection />

        {/* Dynamic Skill Bubble Garden */}
        <SkillsSection />

        {/* Project Vault Chests */}
        <ProjectsSection />

        {/* Deep sea Experience Voyage */}
        <ExperienceSection />

        {/* Achievement Pearl Shells */}
        <CertificationsSection />

        {/* Extracurricular Achievements showcase */}
        <AchievementsSection />

        {/* Message Bottle Radio station */}
        <ContactSection />
      </main>

      {/* 4. Elegant Underwater Footer */}
      <footer className="relative bg-ocean-dark/95 border-t border-white/5 py-12 text-center text-gray-500 z-10 font-mono text-xs">
        <div className="container mx-auto px-6 space-y-4">
          <div className="flex items-center justify-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#06b6d4] to-white font-medium animate-pulse">
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>Exploring Endless Waves of Innovation</span>
          </div>

          <div className="flex justify-center gap-6 text-sm py-2">
            <a href="#about" className="hover:text-[#00f2fe] transition-colors">Journey</a>
            <a href="#skills" className="hover:text-[#00f2fe] transition-colors">Skill Ocean</a>
            <a href="#projects" className="hover:text-[#00f2fe] transition-colors">Treasures</a>
            <a href="#experience" className="hover:text-[#00f2fe] transition-colors">Voyage</a>
          </div>

          <p className="text-[11px] text-gray-600 mt-2">
            &copy; {new Date().getFullYear()} Voonna Jenila. Made with precision for ocean and digital exploration.
          </p>
        </div>
      </footer>

      {/* 5. Charming Floating Mermaid Companion AI */}
      <Chatbot />

      {/* 6. Theme Toggle Floating Captain Deck */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          id="theme-surface-toggle"
          onClick={toggleTheme}
          aria-label="Toggle Marine Atmosphere"
          className="group relative flex items-center justify-center p-3.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 hover:text-white hover:border-cyan-400/40 hover:bg-white/10 transition-all duration-300 shadow-[0_4px_20px_rgba(2,11,24,0.4)] backdrop-blur-md cursor-pointer hover:scale-110 active:scale-95"
        >
          {/* Pulsing sea ring */}
          <span className="absolute inset-0 rounded-full bg-cyan-400/10 pointer-events-none group-hover:scale-125 transition-transform duration-300" />
          
          <div className="relative w-6 h-6 flex items-center justify-center font-sans">
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-amber-400 transition-transform duration-500 rotate-0 group-hover:rotate-45" />
            ) : (
              <Moon className="w-5 h-5 text-cyan-600 transition-transform duration-500 rotate-0 group-hover:-rotate-12" />
            )}
          </div>
          
          {/* Tooltip badge */}
          <span className="absolute left-full ml-3 px-2 py-1 rounded bg-ocean-dark border border-white/10 text-[10px] font-mono text-gray-400 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-md">
            {theme === 'dark' ? 'Rise to Surface (Light Mode)' : 'Dive to Deep Ocean (Dark Mode)'}
          </span>
        </button>
      </div>
    </div>
  );
}

