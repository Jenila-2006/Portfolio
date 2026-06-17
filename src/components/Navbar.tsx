import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, Anchor } from 'lucide-react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Dive Init' },
    { id: 'about', label: 'Our Journey' },
    { id: 'skills', label: 'Skill Ocean' },
    { id: 'projects', label: 'Project Treasures' },
    { id: 'experience', label: 'Experience Voyage' },
    { id: 'certifications', label: 'Achievement Pearls' },
    { id: 'contact', label: 'S.O.S Radio' },
  ];

  // Monitor Scroll for Glassmorphic blur triggers & Section Highlights
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 250;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-45 transition-all duration-300 ${
        isScrolled
          ? 'bg-ocean-dark/75 backdrop-blur-md border-b border-aqua-blue/15 py-3 shadow-[0_10px_30px_rgba(2,8,21,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Shield */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="p-2 bg-[#00f2fe]/10 border border-[#00f2fe]/40 rounded-lg text-[#00f2fe] group-hover:bg-[#00f2fe]/20 group-hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all">
            <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: '12s' }} />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-semibold tracking-wider text-base uppercase text-white group-hover:text-[#00f2fe] transition-colors">
              Voonna Jenila
            </span>
            <span className="font-mono text-[9px] text-[#05b293] tracking-widest uppercase -mt-0.5">
              Deep Sea Explorer v2.0
            </span>
          </div>
        </div>

        {/* Desktop Web Navigation Links */}
        <div className="hidden lg:flex items-center gap-1.5 bg-white/3 border border-white/5 rounded-full p-1.5">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                id={`nav-link-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono tracking-wide transition-all duration-350 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-aqua-blue to-cyan-500 text-ocean-dark font-medium shadow-[0_0_10px_rgba(0,242,254,0.25)]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Action Button: Live Sonar status indicator */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 bg-gradient-to-r from-[#0d2a4a] to-ocean-deep px-4 py-2 rounded-xl border border-white/5 text-xs font-mono text-gray-300">
            <span className="w-2 h-2 rounded-full bg-[#05b293] animate-pulse" />
            <span>Operational</span>
          </div>
        </div>

        {/* Hamburger Mobile Menu Toggle Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white bg-white/5 border border-white/5 rounded-lg hover:bg-white/10 transition-all outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Slide-Down menu overlay */}
      {isOpen && (
        <div className="lg:hidden fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-ocean-dark/95 backdrop-blur-xl border-t border-white/5 z-40 ease-in-out duration-300">
          <div className="flex flex-col p-6 space-y-3">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  id={`mobile-nav-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-5 py-4 rounded-xl text-sm font-mono tracking-wide transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-aqua-blue to-cyan-500 text-ocean-dark font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  <Anchor className="w-4 h-4 text-inherit" />
                </button>
              );
            })}

            <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#05b293] animate-pulse" />
                <span>Station Online</span>
              </div>
              <span className="opacity-55">STATION_DEEP_2026</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
