import React, { useState } from 'react';

interface Project {
  title: string;
  desc: string;
  category: 'ai-backend' | 'full-stack';
  github?: string;
  live?: string;
  tags: string[];
}

const projectsData: Project[] = [
  {
    title: 'Multi-Agent Corporate Data Pipeline',
    desc: 'Engineered an automated multi-agent LangGraph system that extracts, validates, and aggregates over 160 corporate data points per target firm. Incorporates agent retry logic, validator nodes, and robust parsing structures to prevent data corruption from LLM hallucination.',
    category: 'ai-backend',
    github: 'https://github.com/mad-man22/lang-chain-data-generation',
    tags: ['Python', 'LangGraph', 'LangChain', 'Gemini API', 'Groq']
  },
  {
    title: 'MuseFlow Music Streaming',
    desc: 'A microservice-based music streaming platform featuring multi-device real-time sync. Decomposed system into specialized backend layers with FastAPI, Node.js, and WebSockets. Added Redis for high-speed session caching and Gemini AI for natural language playlist building.',
    category: 'full-stack',
    github: 'https://github.com/mad-man22/museflow_opensource_music_app',
    tags: ['Next.js 15', 'FastAPI', 'WebSockets', 'PostgreSQL', 'Redis', 'Docker']
  },
  {
    title: 'PES Insyt Placement Dashboard',
    desc: 'A placement analytics dashboard built with React and TypeScript. Integrates a custom Gemini AI skill gap analyzer that parses user resumes against job descriptions, identifying key competency gaps and delivering targeted learning path recommendations.',
    category: 'full-stack',
    live: 'http://pes-insyt.talenciaglobal.com',
    tags: ['React', 'TypeScript', 'Supabase', 'Gemini API', 'Vercel']
  },
  {
    title: 'Restaurant SaaS Platform',
    desc: 'A multi-tenant restaurant order manager featuring event-driven architectures. Relies on Socket.io for immediate sync between order stations, kitchen screens, and waiter applications. Normalized MySQL relational structure ensures transaction isolation.',
    category: 'full-stack',
    live: 'https://restaurant-saas-appliaction.vercel.app',
    tags: ['Next.js', 'Node.js', 'Socket.io', 'MySQL', 'Vercel']
  },
  {
    title: 'Homestay Booking Platform',
    desc: 'A full-stack MVC application incorporating property listings, user reviews, reservation booking systems, and a fully functional Razorpay payment gateway integration. Deployed with Docker containers for portability and simple host server setup.',
    category: 'ai-backend',
    github: 'https://github.com/mad-man22/Homestay-Booking-application',
    tags: ['Python', 'Django', 'Docker', 'Razorpay', 'PostgreSQL']
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'ai-backend' | 'full-stack'>('all');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  const filteredProjects = projectsData.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <section id="projects" className="projects-section section-padding reveal-on-scroll">
      <div className="container">
        <h2 className="section-title">
          <span>03.</span> Featured Projects
        </h2>

        {/* Category Filters */}
        <div className="project-filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === 'ai-backend' ? 'active' : ''}`}
            onClick={() => setFilter('ai-backend')}
          >
            AI & Backend
          </button>
          <button
            className={`filter-btn ${filter === 'full-stack' ? 'active' : ''}`}
            onClick={() => setFilter('full-stack')}
          >
            Full-Stack / Web
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((p, idx) => (
            <div
              key={idx}
              className={`project-card glass-card reveal-item reveal-delay-${(idx % 3) + 1}`}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="project-card-header">
                <div className="project-folder-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="folder-svg"
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="project-links">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="link-svg"
                  >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo Link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="link-svg"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"></path>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <div className="project-card-body">
                <h3 className="project-title">
                  {p.github || p.live ? (
                    <a
                      href={p.github || p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {p.title}
                    </a>
                  ) : (
                    p.title
                  )}
                </h3>
                <p className="project-desc">{p.desc}</p>
              </div>
              <div className="project-card-footer">
                {p.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
