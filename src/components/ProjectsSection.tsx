import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { initialProjects } from '../data/portfolioData';
import { FolderGit, Github, ExternalLink, Plus, X, Tag, Code, CheckSquare } from 'lucide-react';
import { TreasureChest } from './OceanIcons';

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('ocean_portfolio_projects');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse portfolio projects from localStorage', e);
      }
    }
    return initialProjects;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterTech, setFilterTech] = useState('All');

  // Form Fields
  const [projName, setProjName] = useState('');
  const [projDesc, setProjDesc] = useState('');
  const [projTech, setProjTech] = useState('');
  const [projFeatures, setProjFeatures] = useState('');
  const [projGitHub, setProjGitHub] = useState('');
  const [projDemo, setProjDemo] = useState('');
  const [projCardColor, setProjCardColor] = useState('crystal'); // crystal, gold, emerald, bronze

  // Save to LocalStorage whenever projects change
  useEffect(() => {
    localStorage.setItem('ocean_portfolio_projects', JSON.stringify(projects));
  }, [projects]);

  // Handle Form Submission
  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projName.trim() || !projDesc.trim()) return;

    const techArray = projTech
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const featureArray = projFeatures
      .split('\n')
      .map((f) => f.trim())
      .filter((f) => f.length > 0);

    const newProj: Project = {
      id: Date.now().toString(),
      name: projName.trim(),
      description: projDesc.trim(),
      technologies: techArray.length > 0 ? techArray : ['General Technology'],
      features: featureArray.length > 0 ? featureArray : ['Custom user feature integration'],
      gitHubUrl: projGitHub.trim() || 'https://github.com',
      demoUrl: projDemo.trim() || undefined,
      imageUrl: projCardColor
    };

    setProjects((prev) => [newProj, ...prev]);
    setIsModalOpen(false);

    // Reset Form
    setProjName('');
    setProjDesc('');
    setProjTech('');
    setProjFeatures('');
    setProjGitHub('');
    setProjDemo('');
    setProjCardColor('crystal');
  };

  // Extract all unique technologies to populate an interactive filter bar
  const allTechs = ['All', ...Array.from(new Set(projects.flatMap((p) => p.technologies)))];

  const filteredProjects = projects.filter((p) => {
    if (filterTech === 'All') return true;
    return p.technologies.some((tech) => tech.toLowerCase() === filterTech.toLowerCase());
  });

  return (
    <section id="projects" className="py-24 relative z-10 container mx-auto px-6">
      {/* Glow highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-3 mb-3">
          <TreasureChest className="w-14 h-14" isOpen={true} />
          <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-treasure-gold via-yellow-200 to-amber-400">
            Treasure of Projects
          </h2>
        </div>
        <p className="text-gray-400 max-w-2xl text-sm md:text-base font-sans mt-2">
          Submerge into Voonna's repository of technological creations. Select any treasure chest project to view high-performance code pipelines and real-world system features.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 max-w-3xl">
          {allTechs.slice(0, 8).map((tech) => (
            <button
              id={`filter-btn-${tech}`}
              key={tech}
              onClick={() => setFilterTech(tech)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono border transition-all duration-300 ${
                filterTech === tech
                  ? 'bg-gradient-to-r from-treasure-gold to-amber-550 text-ocean-dark border-treasure-gold shadow-[0_0_12px_rgba(251,191,36,0.3)] font-semibold'
                  : 'bg-ocean-deep/60 text-gray-300 border-white/10 hover:border-treasure-gold/50'
              }`}
            >
              {tech}
            </button>
          ))}
          {allTechs.length > 8 && (
            <span className="text-gray-500 text-xs font-mono px-2">+{allTechs.length - 8} more filters</span>
          )}
        </div>
      </div>

      {/* Grid Canvas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((p) => {
          // Detect theme colors based on p.imageUrl representation
          let accentBorder = 'border-white/10';
          let glowAccent = 'hover:shadow-[0_10px_35px_rgba(255,255,255,0.05)]';
          let nameColor = 'text-white';
          let tagBadgeColor = 'bg-white/5 text-slate-300';

          if (p.imageUrl === 'gold' || p.id === '1') {
            accentBorder = 'border-treasure-gold/30';
            nameColor = 'text-transparent bg-clip-text bg-gradient-to-r from-treasure-gold to-yellow-100';
            glowAccent = 'hover:shadow-[0_10px_35px_rgba(251,191,36,0.2)] hover:border-treasure-gold/60';
            tagBadgeColor = 'bg-treasure-gold/10 text-treasure-gold border-treasure-gold/20';
          } else if (p.imageUrl === 'emerald' || p.id === '2') {
            accentBorder = 'border-sea-green/30';
            nameColor = 'text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#6ee7b7]';
            glowAccent = 'hover:shadow-[0_10px_35px_rgba(16,185,129,0.2)] hover:border-[#10b981]/60';
            tagBadgeColor = 'bg-[#10b981]/10 text-[#6ee7b7] border-[#10b981]/20';
          } else if (p.imageUrl === 'crystal' || p.id === '3') {
            accentBorder = 'border-aqua-blue/30';
            nameColor = 'text-transparent bg-clip-text bg-gradient-to-r from-aqua-blue to-[#ffffff]';
            glowAccent = 'hover:shadow-[0_10px_35px_rgba(0,242,254,0.25)] hover:border-aqua-blue/60';
            tagBadgeColor = 'bg-aqua-blue/10 text-aqua-blue border-aqua-blue/20';
          }

          return (
            <div
              id={`project-card-${p.id}`}
              key={p.id}
              className={`relative rounded-2xl glass-card p-6 flex flex-col justify-between transition-all duration-300 ${accentBorder} ${glowAccent} group overflow-hidden`}
            >
              {/* Subtle tech grid backing pattern inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/2 to-transparent pointer-events-none" />

              <div>
                {/* Card Icon & Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-cyan-500/10 group-hover:text-[#00f2fe] transition-colors duration-300">
                    <FolderGit className="w-6 h-6" />
                  </div>
                  {/* Glowing bubble anchor decoration */}
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400/80 shadow-[0_0_8px_#00f2fe] animate-pulse" />
                </div>

                {/* Project Title */}
                <h3 className={`text-xl font-display font-medium mb-3 tracking-tight ${nameColor}`}>
                  {p.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-5 font-sans">
                  {p.description}
                </p>

                {/* Bullet features */}
                {p.features && p.features.length > 0 && (
                  <div className="mb-5 bg-black/20 rounded-xl p-3 border border-white/5">
                    <span className="text-[10px] font-mono tracking-widest text-[#00f2fe]/80 block mb-2 uppercase">
                      Core Operations
                    </span>
                    <ul className="space-y-1.5">
                      {p.features.slice(0, 4).map((f, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-gray-350">
                          <CheckSquare className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Technologies list */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {p.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`text-[10px] font-mono px-2.5 py-1 rounded-md border ${tagBadgeColor}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links Footer inside Project card */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <a
                    id={`project-git-${p.id}`}
                    href={p.gitHubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono rounded-lg bg-[#ffffff]/5 hover:bg-[#ffffff]/10 border border-[#ffffff]/10 hover:border-cyan-400/50 transition-all text-white"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                  {p.demoUrl ? (
                    <a
                      id={`project-demo-${p.id}`}
                      href={p.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono rounded-lg bg-gradient-to-r from-aqua-blue to-cyan-500 hover:from-cyan-400 hover:to-blue-500 text-ocean-dark font-medium transition-all shadow-[0_0_10px_rgba(0,242,254,0.1)] hover:shadow-[0_0_15px_rgba(0,242,254,0.3)]"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Launch</span>
                    </a>
                  ) : (
                    <span className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono text-gray-500 bg-white/2 rounded-lg border border-white/2 cursor-default select-none">
                      <Code className="w-3.5 h-3.5" />
                      <span>Deep Sea</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Button to Trigger Creation Modal */}
      <div className="flex justify-center mt-12">
        <button
          id="discover-treasure-btn"
          onClick={() => setIsModalOpen(true)}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-treasure-gold to-amber-500 font-display font-medium text-ocean-dark transition-all duration-300 hover:shadow-[0_0_25px_rgba(251,191,36,0.5)] transform hover:-translate-y-1 active:scale-95"
        >
          {/* Animated sparkles element */}
          <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Plus className="w-5 h-5 stroke-[2.5px] animate-spin" style={{ animationDuration: '6s' }} />
          <span>+ Discover New Treasure</span>
        </button>
      </div>

      {/* MODAL FOR NEW PROJECT SUBMISSION */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          {/* Backdrop Closer */}
          <div className="absolute inset-0" onClick={() => setIsModalOpen(false)} />

          {/* Modal Container */}
          <div className="relative w-full max-w-lg glass-card rounded-2xl border border-treasure-gold p-6 md:p-8 z-10 shadow-[0_0_50px_rgba(251,191,36,0.15)] animate-sway" style={{ animationDuration: '10s' }}>
            <button
              id="close-modal-btn"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 hover:bg-white/5 rounded-full transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <TreasureChest className="w-12 h-12" isOpen={false} />
              <div>
                <h3 className="text-xl md:text-2xl font-display font-semibold text-treasure-gold">
                  Forge Project Treasure
                </h3>
                <p className="text-xs text-gray-400">Add custom projects to your ocean expedition display</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleAddProject} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1.5">Project Title *</label>
                <input
                  id="form-project-name"
                  type="text"
                  required
                  placeholder="e.g. Smart Coral Health Monitor"
                  value={projName}
                  onChange={(e) => setProjName(e.target.value)}
                  className="w-full bg-ocean-dark/80 border border-white/15 focus:border-[#fbbf24] focus:ring-1 focus:ring-[#fbbf24] text-white rounded-lg px-3 py-2 text-sm placeholder:text-gray-600 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1.5">Description (Recruiter pitch) *</label>
                <textarea
                  id="form-project-desc"
                  required
                  rows={3}
                  placeholder="Explain what the technology accomplishes, who it helps, and key technical feats..."
                  value={projDesc}
                  onChange={(e) => setProjDesc(e.target.value)}
                  className="w-full bg-ocean-dark/80 border border-white/15 focus:border-[#fbbf24] focus:ring-1 focus:ring-[#fbbf24] text-white rounded-lg px-3 py-2 text-sm placeholder:text-gray-600 outline-none transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1.5">
                  Technologies (Comma separated)
                </label>
                <input
                  id="form-project-tags"
                  type="text"
                  placeholder="e.g. Python, TensorFlow, OpenCV, FastAPI"
                  value={projTech}
                  onChange={(e) => setProjTech(e.target.value)}
                  className="w-full bg-ocean-dark/80 border border-white/15 focus:border-[#fbbf24] focus:ring-1 focus:ring-[#fbbf24] text-white rounded-lg px-3 py-2 text-sm placeholder:text-gray-600 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1.5">
                  Core Features (One per line)
                </label>
                <textarea
                  id="form-project-features"
                  rows={2}
                  placeholder="Real-time optical evaluation&#10;Automatic coral segmentation"
                  value={projFeatures}
                  onChange={(e) => setProjFeatures(e.target.value)}
                  className="w-full bg-ocean-dark/80 border border-white/15 focus:border-[#fbbf24] focus:ring-1 focus:ring-[#fbbf24] text-white rounded-lg px-3 py-2 text-sm placeholder:text-gray-600 outline-none transition-all resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1.5">GitHub URL</label>
                  <input
                    id="form-project-github"
                    type="url"
                    placeholder="https://github.com/..."
                    value={projGitHub}
                    onChange={(e) => setProjGitHub(e.target.value)}
                    className="w-full bg-ocean-dark/80 border border-white/15 focus:border-[#fbbf24] focus:ring-1 focus:ring-[#fbbf24] text-white rounded-lg px-3 py-2 text-sm placeholder:text-gray-600 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1.5">Live Demo URL</label>
                  <input
                    id="form-project-demo"
                    type="url"
                    placeholder="https://test.io/..."
                    value={projDemo}
                    onChange={(e) => setProjDemo(e.target.value)}
                    className="w-full bg-ocean-dark/80 border border-white/15 focus:border-[#fbbf24] focus:ring-1 focus:ring-[#fbbf24] text-white rounded-lg px-3 py-2 text-sm placeholder:text-gray-600 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Aesthetic Card Tint Selector */}
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-2">Aesthetic Aura Tint</label>
                <div className="flex gap-4 items-center">
                  {[
                    { val: 'crystal', label: 'Crystal Cyan', bg: 'bg-[#00f2fe]' },
                    { val: 'gold', label: 'Treasure Gold', bg: 'bg-[#fbbf24]' },
                    { val: 'emerald', label: 'Sea Green', bg: 'bg-[#10b981]' }
                  ].map((aura) => (
                    <button
                      id={`form-aura-btn-${aura.val}`}
                      key={aura.val}
                      type="button"
                      onClick={() => setProjCardColor(aura.val)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs transition-all ${
                        projCardColor === aura.val
                          ? 'border-white text-white bg-white/10 font-medium'
                          : 'border-white/10 text-gray-400 bg-white/2 hover:border-white/20'
                      }`}
                    >
                      <span className={`w-2.5 h-2.5 rounded-full ${aura.bg}`} />
                      <span>{aura.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10 justify-end">
                <button
                  id="form-cancel-btn"
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-mono text-gray-400 hover:text-white transition-all hover:bg-white/5 rounded-lg"
                >
                  Submerge Back
                </button>
                <button
                  id="form-submit-btn"
                  type="submit"
                  className="px-5 py-2 text-xs font-mono text-ocean-dark font-medium bg-treasure-bold hover:bg-yellow-405 rounded-lg transition-all shadow-[0_0_15px_rgba(251,191,36,0.3)] hover:shadow-[0_0_20px_rgba(251,191,36,0.5)]"
                >
                  Cast Into Deep
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
