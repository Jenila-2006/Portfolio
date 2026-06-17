import { Project, Skill, Experience, Certification, Achievement } from '../types';

export const initialProjects: Project[] = [
  {
    id: '1',
    name: 'AI Sign Language Translator',
    description: 'An Artificial Intelligence based application that recognizes sign language gestures and converts them into meaningful text using Machine Learning and Computer Vision.',
    technologies: ['Python', 'Machine Learning', 'AI', 'Computer Vision'],
    features: [
      'Real-time translation',
      'Advanced hand landmark gesture detection',
      'High-precision sign recognition',
      'Smart sentence-building prediction'
    ],
    gitHubUrl: 'https://github.com/jenilavoonna/ai-sign-language-translator',
    imageUrl: 'sign_language_translator' // custom placeholder name or we can render beautifully themed icons/styles!
  },
  {
    id: '2',
    name: 'Career Recommendation Platform',
    description: 'Smart recommendation platform matching students with optimized career paths, custom roadmap suggestions, and detailed government examination information based on skills and surveys.',
    technologies: ['React', 'Python', 'Machine Learning', 'Tailwind CSS'],
    features: [
      'Persona assessment questionnaires',
      'Predictive career matching models',
      'Interactive roadmaps',
      'Centralized resources'
    ],
    gitHubUrl: 'https://github.com/jenilavoonna/career-recommendation-platform',
    imageUrl: 'career_recommendation'
  },
  {
    id: '3',
    name: 'Academic Toolbox',
    description: 'An all-in-one educational web platform providing students with academic resources, previous papers, structured course guides, and key technical interview preparation files.',
    technologies: ['Java', 'React', 'MySQL', 'Spring Boot'],
    features: [
      'Resource sharing system',
      'Advanced search & tag filtering',
      'Interactive coding practice cheatsheets',
      'Year-wise previous question vault'
    ],
    gitHubUrl: 'https://github.com/jenilavoonna/academic-toolbox',
    imageUrl: 'academic_toolbox'
  }
];

export const initialSkills: Skill[] = [
  // Programming Languages
  { name: 'Python', level: 90, category: 'Languages' },
  { name: 'Java', level: 85, category: 'Languages' },

  // Frontend
  { name: 'HTML5', level: 92, category: 'Frontend' },
  { name: 'CSS3 / Tailwind', level: 88, category: 'Frontend' },
  { name: 'JavaScript', level: 85, category: 'Frontend' },

  // Database
  { name: 'MySQL', level: 80, category: 'Database' },

  // Artificial Intelligence
  { name: 'Machine Learning', level: 85, category: 'AI' },
  { name: 'Deep Learning Basics', level: 75, category: 'AI' },
  { name: 'Computer Vision', level: 80, category: 'AI' },

  // Tools
  { name: 'Git', level: 88, category: 'Tools' },
  { name: 'GitHub', level: 90, category: 'Tools' },
  { name: 'VS Code', level: 95, category: 'Tools' },
  { name: 'Jupyter Notebook', level: 90, category: 'Tools' },

  // Coding Platforms
  { name: 'LeetCode', level: 82, category: 'Coding-Platforms' },
  { name: 'CodeChef', level: 78, category: 'Coding-Platforms' },
  { name: 'HackerRank', level: 85, category: 'Coding-Platforms' }
];

export const experiences: Experience[] = [
  {
    role: 'AI/ML Internship',
    company: 'Artificial Intelligence Research Lab',
    period: '2025 - Present',
    description: 'Working hands-on with Machine Learning pipelines and state-of-the-art AI foundations. Built real-world models for sequence prediction and data refinement layers.',
    milestones: [
      'Trained high-accuracy classification models',
      'Refined Computer Vision gesture analysis matrices',
      'Configured automated dataset preprocessing workflows'
    ]
  },
  {
    role: 'AI/ML Internship',
    company: 'NDV Tech Sys',
    period: 'Summer 2024 (3 Months)',
    description: 'Developed and optimized production-grade AI/ML pipelines and web features. Integrated custom predictive modeling layers in Java/Spring Boot and crafted interactive React dashboards to display model predictions and evaluation statistics.',
    milestones: [
      'Refactored analytical query indexes to optimize AI model input loading, reducing server query latency by 30%',
      'Trained and refined classification models in Python, embedding them with Spring Boot Rest APIs',
      'Created custom, responsive React visual interfaces displaying model prediction metrics, confusion matrices, and confidence levels',
      'Participated in active Scrum methodology workflows alongside senior engineering leads'
    ]
  }
];

export const certifications: Certification[] = [
  {
    title: 'Python for Data Science',
    issuer: 'IBM Academic Alliance',
    year: '2024',
    glowingBadgeColor: 'shadow-aqua-blue/40 border-aqua-blue/50 text-aqua-blue'
  },
  {
    title: 'Java Programming Suite',
    issuer: 'Oracle Academy',
    year: '2024',
    glowingBadgeColor: 'shadow-treasure-gold/40 border-treasure-gold/50 text-treasure-gold'
  },
  {
    title: 'AI Fundamentals & Ethics',
    issuer: 'Google Cloud Platform',
    year: '2025',
    glowingBadgeColor: 'shadow-crystal-cyan/40 border-crystal-cyan/50 text-crystal-cyan'
  },
  {
    title: 'Full Stack Development Certification',
    issuer: 'Infosys Springboard',
    year: '2024',
    glowingBadgeColor: 'shadow-sea-green/40 border-sea-green/50 text-sea-green'
  }
];

export const achievements: Achievement[] = [
  {
    title: 'CRT Coordinator',
    category: 'Leadership',
    description: 'Elected student coordinator for Campus Recruitment Training (CRT). Spearheading peer mentoring, scheduling mock tests, and organizing resume reviews for 120+ computer science colleagues.',
    badgeText: 'Lead Advocate'
  },
  {
    title: 'Coding Club Member',
    category: 'Coding',
    description: 'Active orchestrator of weekly hackathons, conceptualized contest structures, and held algorithms study groups helping junior students strengthen problem-solving logic.',
    badgeText: 'Orchestrating Member'
  },
  {
    title: 'Hackathon Finalist & Presenter',
    category: 'College',
    description: 'Secured national round finalist position in college representation showcase with the AI Sign Language translation prototype, demonstrating smart prediction frameworks to panel judges.',
    badgeText: 'Distinction Awards'
  }
];
