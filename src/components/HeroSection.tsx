import React, { useState } from 'react';
import TypingText from './TypingText';
import InteractiveProfilePhoto from './InteractiveProfilePhoto';
import { ArrowDown, FileDown, Rocket, Mail, HelpCircle, Check, X } from 'lucide-react';

export default function HeroSection() {
  const [isRayActive, setIsRayActive] = useState(false);
  const [rayTouches, setRayTouches] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const downloadTxtResume = () => {
    const textContent = `========================================================================
                      VOONNA JENILA - RESUME
========================================================================
Contact: jenilavoonna@gmail.com
LinkedIn: linkedin.com/in/jenila-voonna-7251482b8/
GitHub: github.com/Jenila-2006
Operational Base: 12°N Latitude

------------------------------------------------------------------------
PROFESSIONAL SUMMARY
------------------------------------------------------------------------
B.Tech Computer Science & Artificial Intelligence student. Deeply passionate
about exploring and building innovative solutions in Machine Learning, Deep 
Learning, Computer Vision, and modular Full-Stack web development.

------------------------------------------------------------------------
EDUCATION
------------------------------------------------------------------------
B.Tech in Computer Science & Artificial Intelligence
Key Focus: Machine Learning, Neural Networks, Database Systems, Web Architectures

------------------------------------------------------------------------
TECHNICAL SKILLS
------------------------------------------------------------------------
* Languages: Python, Java, JavaScript, HTML5, CSS3, SQL
* Core AI & ML: Machine Learning, Deep Learning Basics, Computer Vision
* Databases: MySQL
* Developer Tools: Git, GitHub, VS Code, Jupyter Notebook, Spring Boot
* Coding Achievements: LeetCode (200+ Solved), CodeChef, HackerRank

------------------------------------------------------------------------
EXPERIENCE VOYAGES
------------------------------------------------------------------------
1. AI/ML Internship @ Datavalley (05/2025 – 07/2025)
   - Trained high-accuracy classification models.
   - Refined Computer Vision gesture analysis matrices.
   - Configured automated dataset preprocessing workflows.

2. AI/ML Internship @ NDV Tech Sys (06/2025 – 08/2025)
   - Refactored index metrics and query operations to improve page speed by 30%.
   - Built custom reusable interactive React interface elements and AI wrappers.
   - Collaborated closely in Scrum cycles on full-stack web architectures.

------------------------------------------------------------------------
TREASURE PROJECTS
------------------------------------------------------------------------
1. AI Sign Language Translator
   Real-time Computer Vision tool tracking hand gesture classification.
   GitHub: https://github.com/Jenila-2006/ai-sign-language-translator
   Tech Stack: Python, OpenCV, Machine Learning, MediaPipe

2. Career Recommendation Platform
   Predictive models mapping students to government exams and career roads.
   GitHub: https://github.com/Jenila-2006/career-recommendation-platform
   Tech Stack: React, Python, Machine Learning, Tailwind CSS

3. Academic Toolbox
   Central resource sharing app with Spring Boot backend.
   GitHub: https://github.com/Jenila-2006/academic-toolbox
   Tech Stack: Java, Spring Boot, React, MySQL

------------------------------------------------------------------------
ACHIEVEMENTS & LEADERSHIP
------------------------------------------------------------------------
* CRT Coordinator (Campus Recruitment Training): Elected coordinator mentored 120+ peer developers.
* Coding Club Member: Spearheaded university coding contests and study groups.
* Hackathon National Finalist: Represented college with the AI Sign Language translation prototype.

========================================================================
Let's build a wave of innovation. Contact: jenilavoonna@gmail.com
========================================================================`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Voonna_Jenila_Resume_ATS.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const downloadHtmlResume = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume - Voonna Jenila</title>
    <style>
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            color: #1f2937;
            background: #f9fafb;
            margin: 0;
            padding: 40px 20px;
            line-height: 1.5;
        }
        .resume-container {
            max-width: 800px;
            background: #ffffff;
            margin: 0 auto;
            padding: 40px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
            border-radius: 8px;
            border-top: 8px solid #06b6d4;
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #e5e7eb;
            padding-bottom: 24px;
            margin-bottom: 24px;
        }
        .header h1 {
            color: #111827;
            margin: 0 0 8px 0;
            font-size: 32px;
            font-weight: 700;
            letter-spacing: -0.025em;
        }
        .header p {
            color: #0891b2;
            margin: 0 0 12px 0;
            font-size: 18px;
            font-weight: 500;
        }
        .contact-info {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
            font-size: 14px;
            color: #4b5563;
        }
        .contact-info a {
            color: #0891b2;
            text-decoration: none;
        }
        .section {
            margin-bottom: 28px;
        }
        .section-title {
            font-size: 18px;
            font-weight: 600;
            color: #0f172a;
            border-left: 4px solid #06b6d4;
            padding-left: 10px;
            margin: 0 0 16px 0;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        .job, .project {
            margin-bottom: 16px;
        }
        .job-header, .project-header {
            display: flex;
            justify-content: space-between;
            font-weight: 600;
            color: #111827;
            margin-bottom: 4px;
        }
        .job-sub, .project-sub {
            color: #0891b2;
            font-size: 14px;
            margin-bottom: 8px;
        }
        .bullets {
            margin: 0;
            padding-left: 20px;
            font-size: 14px;
            color: #374151;
        }
        .bullets li {
            margin-bottom: 4px;
        }
        .skills-list {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin: 0;
            padding: 0;
            list-style: none;
        }
        .skill-badge {
            background: #ecfeff;
            color: #0891b2;
            border: 1px solid #cffafe;
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 13px;
            font-weight: 500;
        }
        .print-tip {
            text-align: center;
            background: #fffbeb;
            border: 1px solid #fef3c7;
            padding: 12px;
            border-radius: 6px;
            color: #b45309;
            font-size: 13px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        @media print {
            body {
                background: none;
                padding: 0;
            }
            .resume-container {
                box-shadow: none;
                padding: 0;
                margin: 0;
            }
            .print-tip {
                display: none;
            }
        }
    </style>
</head>
<body>
    <div class="print-tip">
        💡 <strong>Pro Tip:</strong> Press <strong>Ctrl + P</strong> (or <strong>Cmd + P</strong> on Mac) in your browser to save this customized resume as a professional, perfectly formatted <strong>PDF</strong>!
    </div>
    
    <div class="resume-container">
        <div class="header">
            <h1>Voonna Jenila</h1>
            <p>Computer Science & Artificial Intelligence Student</p>
            <div class="contact-info">
                <span>📧 <a href="mailto:jenilavoonna@gmail.com">jenilavoonna@gmail.com</a></span>
                <span>🔗 <a href="https://github.com/Jenila-2006" target="_blank">github.com/Jenila-2006</a></span>
                <span>📍 Operational Base: 12°N Latitude</span>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Professional Summary</h2>
            <p style="margin: 0; font-size: 14px; color: #374151;">
                B.Tech Computer Science & Artificial Intelligence student. Deeply passionate about exploring and building innovative solutions in Machine Learning, Deep Learning, Computer Vision, and modular Full-Stack web development. Hand-on experience creating high-precision sign translation models and highly optimized web interfaces.
            </p>
        </div>

        <div class="section">
            <h2 class="section-title">Education</h2>
            <div class="job-header">
                <span>B.Tech in Computer Science & Artificial Intelligence</span>
                <span style="color: #6b7280; font-size: 14px;">Expected 2026</span>
            </div>
            <div class="job-sub">Computer Science & Artificial Intelligence</div>
        </div>

        <div class="section">
            <h2 class="section-title">Technical Expertise</h2>
            <ul class="skills-list">
                <li class="skill-badge">Python</li>
                <li class="skill-badge">Java</li>
                <li class="skill-badge">JavaScript</li>
                <li class="skill-badge">HTML5 / CSS3</li>
                <li class="skill-badge">Tailwind CSS</li>
                <li class="skill-badge">MySQL</li>
                <li class="skill-badge">Machine Learning</li>
                <li class="skill-badge">Deep Learning</li>
                <li class="skill-badge">Computer Vision</li>
                <li class="skill-badge">React</li>
                <li class="skill-badge">Spring Boot</li>
                <li class="skill-badge">Git & GitHub</li>
            </ul>
        </div>

        <div class="section">
            <h2 class="section-title">Work Experience</h2>
            
            <div class="job">
                <div class="job-header">
                    <span>AI / ML Intern</span>
                    <span style="color: #6b7280; font-size: 14px;">05/2025 – 07/2025</span>
                </div>
                <div class="job-sub">Datavalley</div>
                <ul class="bullets">
                    <li>Trained high-accuracy sequence classification models on temporal landmarks datasets.</li>
                    <li>Refined Computer Vision hand tracking models and gesture analyses frames.</li>
                    <li>Configured automated robust image-preprocessing data streams.</li>
                </ul>
            </div>

            <div class="job">
                <div class="job-header">
                    <span>AI/ML Intern</span>
                    <span style="color: #6b7280; font-size: 14px;">06/2025 – 08/2025</span>
                </div>
                <div class="job-sub">NDV Tech Sys</div>
                <ul class="bullets">
                    <li>Refactored legacy database index structures, bringing a 30% reduction in query latency.</li>
                    <li>Developed responsive interface configurations using React, Tailwind, and custom state hooks.</li>
                    <li>Collaborated tightly in active Scrum cycles for production-ready AI full-stack applications.</li>
                </ul>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Selected Projects</h2>
            
            <div class="project">
                <div class="project-header">
                    <span>AI Sign Language Translator</span>
                    <span>Python & Computer Vision</span>
                </div>
                <p style="margin: 0 0 6px 0; font-size: 14px; color: #374151;">
                    Conversational gesture translation tool recognizing hand positions in real-time. Created smart prediction frameworks matching gestures to word groups.
                </p>
            </div>

            <div class="project">
                <div class="project-header">
                    <span>Career Recommendation Platform</span>
                    <span>React, Python & ML</span>
                </div>
                <p style="margin: 0 0 6px 0; font-size: 14px; color: #374151;">
                    Adaptive software identifying fitting professional avenues and government exams based on personality and technical assessments.
                </p>
            </div>

            <div class="project">
                <div class="project-header">
                    <span>Academic Toolbox</span>
                    <span>Java, Spring Boot & React</span>
                </div>
                <p style="margin: 0 0 6px 0; font-size: 14px; color: #374151;">
                    Central repository offering previous exams database and interview preparation cheatsheets using dynamic queries.
                </p>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Honors & Extracurriculars</h2>
            <ul class="bullets">
                <li><strong>CRT Student Coordinator:</strong> Chosen lead managing placement preparatory drives and resume review workshops for 120+ peer developers.</li>
                <li><strong>University Coding Club:</strong> Conducted weekly problem solving challenges, explaining dynamic programming patterns to 50+ members.</li>
                <li><strong>Hackathon Representation Finalist:</strong> Earned national distinction reviews representing collegiate AI prototype showcase.</li>
            </ul>
        </div>
    </div>

    <script>
        window.addEventListener('load', () => {
            setTimeout(() => {
                window.print();
            }, 600);
        });
    </script>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Voonna_Jenila_Resume_Premium.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleRayTouch = () => {
    setIsRayActive(true);
    setRayTouches((c) => c + 1);
    setTimeout(() => setIsRayActive(false), 2000);
  };

  const jumpToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-32 pb-24 overflow-hidden z-10"
    >
      {/* Absolute floating ocean layers */}
      <div className="absolute top-[30%] right-[10%] w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Grid Content */}
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
        
        {/* Left Side: Voonna Intro Narrative */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
          
          {/* Tag anchor */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-cyan-400">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span>Operational Base: 12°N Latitude</span>
          </div>

          <div className="space-y-4">
            {/* Title display */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-semibold tracking-tight text-white leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-blue via-crystal-cyan to-white animate-pulse-glow">
                Voonna Jenila
              </span>
            </h1>

            {/* Alternating Subtitle specialties */}
            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-2 h-10">
              <span className="font-mono text-gray-400 text-sm md:text-base">Target Operations:</span>
              <TypingText
                phrases={[
                  'ML Development',
                  'Web Development',
                ]}
              />
            </div>

            {/* Recruiter Description */}
            <p className="text-gray-300 font-sans max-w-xl text-sm md:text-lg leading-relaxed mx-auto lg:mx-0">
              Exploring the depths of Artificial Intelligence, Machine Learning, and Software Development to create innovative, scalable solutions. Currently diving into deep learning landmarks and high-performance full stack structures.
            </p>
          </div>

          {/* Call to actions button array */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              id="hero-explore-work"
              onClick={() => jumpToSection('projects')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-aqua-blue to-cyan-500 hover:from-cyan-400 hover:to-blue-600 font-display font-medium text-ocean-dark transition-all duration-300 shadow-[0_0_15px_rgba(0,242,254,0.3)] hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] transform hover:-translate-y-0.5 active:scale-95"
            >
              <Rocket className="w-4 h-4 text-ocean-dark animate-bounce" />
              <span>Explore My Work</span>
            </button>

            <button
              id="hero-download-cv"
              onClick={() => setShowAlert(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-aqua-blue/40 font-display font-medium text-white transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </button>

            <button
              id="hero-contact-me"
              onClick={() => jumpToSection('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/2 border border-transparent hover:border-white/5 font-mono text-xs text-gray-400 hover:text-white transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </button>
          </div>
        </div>

        {/* Right Side: Floating Interactive Profile Photo */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          
          {/* Ripples around the porthole */}
          <div className="absolute w-80 h-80 rounded-full border border-cyan-500/10 animate-pulse" />
          <div className="absolute w-64 h-64 rounded-full border border-cyan-400/20 animate-ping" style={{ animationDuration: '4s' }} />

          <div className="relative group p-4">
            <InteractiveProfilePhoto
              onTouch={handleRayTouch}
              touchCount={rayTouches}
            />
            
            {/* Guide balloon indicator */}
            {!isRayActive && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-xl bg-ocean-deep border border-cyan-400/40 text-cyan-400 text-[10px] font-mono whitespace-nowrap animate-bounce flex items-center gap-1.5 shadow-[0_0_12px_rgba(34,211,238,0.25)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Touch Photo to Say Hello!</span>
              </div>
            )}
          </div>

          {/* Touch statistics */}
          <div className="text-center mt-4">
            <p className="font-mono text-xs text-cyan-400/80 uppercase tracking-widest">
              Biometric Cyber-Porthole
            </p>
            {rayTouches > 0 ? (
              <p className="text-[11px] font-mono text-cyan-300 mt-1">
                Acoustic wave greeting initiated {rayTouches} time{rayTouches > 1 ? 's' : ''}! 🪐
              </p>
            ) : (
              <p className="text-[11px] font-mono text-gray-500 mt-1">
                Touch base inside the porthole template to initiate voice
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Down arrow marker at bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer" onClick={() => jumpToSection('about')}>
        <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">
          Descent
        </span>
        <ArrowDown className="w-4 h-4 text-cyan-400 animate-bounce" />
      </div>

      {/* SLEEK RESUME MODAL / PRINT SHEET */}
      {showAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="absolute inset-0" onClick={() => setShowAlert(false)} />
          
          <div className="relative w-full max-w-lg glass-card border border-[#00f2fe] rounded-2xl p-6 md:p-8 z-10 shadow-[0_0_50px_rgba(0,242,254,0.15)] animate-sway">
            <button
              id="resume-modal-close"
              onClick={() => setShowAlert(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 hover:bg-white/5 rounded-full transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-400 mx-auto flex items-center justify-center text-[#00f2fe] mb-2 animate-pulse">
                <FileDown className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-display font-medium text-white">
                Voonna Jenila's Resume
              </h3>
              
              <p className="text-gray-300 font-sans text-sm leading-relaxed text-left bg-black/30 p-4 rounded-xl border border-white/5">
                💼 <strong>Voonna Jenila</strong> <br />
                🎓 B.Tech - Computer Science & Artificial Intelligence <br />
                🛠️ <strong>Key Expertise:</strong> Python, Java, Machine Learning, Deep Learning, Computer Vision, React, MySQL, GitHub <br />
                ⭐ <strong>Experience:</strong> AI/ML Internship at AI Research Lab, AI/ML Internship at NDV Tech Sys <br />
                🔗 <strong>Email:</strong> jenilavoonna@gmail.com
              </p>

              <div className="pt-2 flex flex-col gap-3">
                <button
                  id="cv-modal-download-html"
                  onClick={() => {
                    downloadHtmlResume();
                    setShowAlert(false);
                  }}
                  className="w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-aqua-blue to-cyan-500 hover:from-cyan-400 hover:to-blue-600 text-ocean-dark font-medium text-xs uppercase font-mono tracking-wider transition-all shadow-[0_0_15px_rgba(0,242,254,0.25)] flex items-center justify-center gap-2"
                >
                  <FileDown className="w-4 h-4 cursor-pointer" />
                  <span>Download Premium Resume (HTML/PDF)</span>
                </button>
                
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <button
                    id="cv-modal-download-txt"
                    onClick={() => {
                      downloadTxtResume();
                      setShowAlert(false);
                    }}
                    className="flex-1 px-3 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs uppercase font-mono tracking-wider transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Download ATS TXT</span>
                  </button>

                  <button
                    id="cv-modal-print"
                    onClick={() => {
                      window.print();
                      setShowAlert(false);
                    }}
                    className="flex-1 px-3 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs uppercase font-mono tracking-wider border border-white/10 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Print Directly</span>
                  </button>
                </div>

                <a
                  id="cv-modal-direct"
                  href="mailto:jenilavoonna@gmail.com?subject=Inquiry for Resume - Voonna Jenila"
                  className="w-full py-2 rounded-lg bg-transparent hover:bg-white/5 text-gray-400 hover:text-white text-[11px] font-mono tracking-wide transition-all text-center block"
                >
                  ✉️ Or request doc directly via Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
