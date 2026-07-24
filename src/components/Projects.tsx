import { useState } from 'react';
import { soundFX } from '../utils/audio';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'all' | 'ai' | 'fullstack' | 'mobile';
  badge?: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  live?: string;
  isResume: boolean;
}

// Subtle, Smooth Cursor-Reactive Project Card
function ProjectCard({ project }: { project: Project }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0, spotlightX: 50, spotlightY: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Very gentle tilt sensitivity (divided by 35 for subtle ~3 deg max tilt)
    const rotateX = -((y - centerY) / 35);
    const rotateY = (x - centerX) / 35;

    setTilt({
      x: rotateX,
      y: rotateY,
      spotlightX: (x / rect.width) * 100,
      spotlightY: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, spotlightX: 50, spotlightY: 50 });
  };

  return (
    <div
      className={`project-card glass-panel cursor-reactive-card ${
        !project.isResume ? 'non-resume-card' : ''
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${
          tilt.x !== 0 ? 1.01 : 1
        }, ${tilt.x !== 0 ? 1.01 : 1}, 1)`,
        transition: tilt.x === 0 ? 'transform 0.5s ease' : 'none',
      }}
    >
      {/* Subtle Cursor Spotlight Glare Overlay */}
      <div
        className="cursor-spotlight-overlay"
        style={{
          background: `radial-gradient(circle at ${tilt.spotlightX}% ${tilt.spotlightY}%, rgba(0, 242, 254, 0.08), transparent 60%)`,
        }}
      />

      {/* Clean Top Window Header */}
      <div className="project-card-top-bar">
        <div className="window-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <span className="category-pill">
          {project.category === 'mobile' && '📱 Mobile App'}
          {project.category === 'ai' && '🤖 AI Agentic'}
          {project.category === 'fullstack' && '⚡ Microservices'}
        </span>
      </div>

      {/* Card Body Details */}
      <div className="project-card-body">
        <div className="project-header-info">
          <h3 className="project-title">{project.title}</h3>
          {project.badge && <span className="project-badge-pill">{project.badge}</span>}
        </div>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-desc">{project.description}</p>

        <div className="project-highlights">
          <h4>Key Highlights:</h4>
          <ul>
            {project.highlights.map((h, idx) => (
              <li key={idx}>{h}</li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="project-tech-tags">
          {project.tech.map((t) => (
            <span key={t} className="tech-pill">
              {t}
            </span>
          ))}
        </div>

        {/* Card Action Links */}
        <div className="project-card-footer">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-card-action"
              onClick={() => soundFX.playClick()}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              Code Repo
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn-card-action btn-live"
              onClick={() => soundFX.playClick()}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'ai' | 'fullstack' | 'mobile'>('all');

  const projects: Project[] = [
    {
      id: 'museflow',
      title: 'MuseFlow',
      subtitle: 'Cross-Platform AI Music Streaming App (Web + Android)',
      category: 'mobile',
      badge: '🔥 200+ Downloads First Week',
      isResume: true,
      description:
        'A full-featured AI music streaming ecosystem featuring a React Native Expo Android app, Next.js web client, FastAPI gateway, Node.js audio-stream service, Redis caching, and PostgreSQL database deployed on AWS.',
      highlights: [
        'Built background audio playback, lock-screen controls & P2P "Jam Room" over WebRTC for synchronized group listening.',
        'Integrated Gemini AI for natural-language playlist generation & real-time synced lyrics using WebSockets.',
        'Reached 200+ active Android downloads in its launch week.',
      ],
      tech: ['Next.js', 'React Native (Expo)', 'FastAPI', 'Node.js', 'PostgreSQL', 'Redis', 'WebRTC', 'Gemini AI', 'Docker'],
      github: 'https://github.com/mad-man22/museflow_opensource_music_app',
    },
    {
      id: 'pes-insyt',
      title: 'PES Insyt',
      subtitle: 'AI-Driven Placement Analytics Dashboard',
      category: 'ai',
      badge: '🚀 Live Production',
      isResume: true,
      description:
        'A comprehensive analytics web dashboard tracking campus hiring drives, company comparisons, and application deadlines for students with Gemini AI integration.',
      highlights: [
        'Resume-to-JD skill-gap analyzer scoring candidate fit and generating personalized learning recommendations.',
        'Type-safe TypeScript UI powered by Supabase backend and Gemini AI API.',
      ],
      tech: ['React', 'TypeScript', 'Supabase', 'Gemini API', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/mad-man22/Pes-placementportal',
      live: 'https://pes-insyt.talenciaglobal.com',
    },
    {
      id: 'restaurant-saas',
      title: 'Restaurant SaaS',
      subtitle: 'Contactless Multi-Tenant Ordering Platform',
      category: 'fullstack',
      badge: '🌐 Live Multi-Tenant',
      isResume: true,
      description:
        'A QR-code-based multi-tenant ordering platform allowing customers to scan table QR codes and order live without waiter intervention.',
      highlights: [
        'Real-time Socket.io dashboards for kitchen coordination and order status updates.',
        'Normalized MySQL schemas and containerized Docker architecture for multi-restaurant deployments.',
      ],
      tech: ['Next.js', 'Node.js', 'Socket.io', 'MySQL', 'Docker', 'Vercel'],
      github: 'https://github.com/mad-man22/Restaurant_saas_appliaction',
      live: 'https://restaurant-saas-appliaction.vercel.app',
    },
    {
      id: 'django-homestay',
      title: 'Django Homestay Booking',
      subtitle: 'Full-Stack Property & Reservation System',
      category: 'fullstack',
      badge: '⭐ GitHub Featured (Non-Resume)',
      isResume: false,
      description:
        'A feature-rich Django web application for homestay booking, property management, guest review ratings, and calendar availability tracking.',
      highlights: [
        'Dynamic room pricing algorithm based on weekend demand and seasonal availability.',
        'Integrated guest review scoring, host administration dashboards, and mock payment gateway integration.',
      ],
      tech: ['Django', 'Python', 'SQLite / PostgreSQL', 'Bootstrap', 'HTML5/CSS3'],
      github: 'https://github.com/mad-man22',
    },
    {
      id: 'next-attendance',
      title: 'Next.js Attendance Management',
      subtitle: 'Automated QR Student Tracking System',
      category: 'fullstack',
      badge: '⚡ GitHub Featured (Non-Resume)',
      isResume: false,
      description:
        'An automated student attendance management platform featuring instant QR scanning, faculty attendance logs, and real-time absence alert reports.',
      highlights: [
        'Role-based authorization for students, faculty, and department heads.',
        'Interactive analytics charts depicting attendance trends and automated email notifications.',
      ],
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
      github: 'https://github.com/mad-man22',
    },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  const handleFilterClick = (cat: 'all' | 'ai' | 'fullstack' | 'mobile') => {
    soundFX.playClick();
    setFilter(cat);
  };

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <span className="section-subtitle">PORTFOLIO SHOWCASE</span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="section-line"></div>
        </div>

        {/* Filter Bar */}
        <div className="project-filters reveal-on-scroll">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
          >
            All Repositories ({projects.length})
          </button>
          <button
            className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
            onClick={() => handleFilterClick('mobile')}
          >
            📱 Mobile Apps
          </button>
          <button
            className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
            onClick={() => handleFilterClick('ai')}
          >
            🤖 AI & Agentic
          </button>
          <button
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => handleFilterClick('fullstack')}
          >
            💻 Full-Stack & Microservices
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
