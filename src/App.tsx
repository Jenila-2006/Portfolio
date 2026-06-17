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
import { Compass } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#020815] text-white selection:bg-[#00f2fe]/30 selection:text-[#00f2fe] overflow-x-hidden">
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
      <footer className="relative bg-[#010610] border-t border-white/5 py-12 text-center text-gray-500 z-10 font-mono text-xs">
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
    </div>
  );
}

