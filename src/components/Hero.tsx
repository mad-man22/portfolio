import { useEffect, useState } from 'react';
import { soundFX } from '../utils/audio';

export default function Hero() {
  const [roleText, setRoleText] = useState('');
  const roles = [
    'AI & Full-Stack Software Engineer',
    'Creator of MuseFlow AI (200+ Downloads)',
    'FastAPI, LangGraph & React Native Architect',
    'Microservices & AWS Cloud Specialist',
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for developer titles
  useEffect(() => {
    const currentFull = roles[roleIndex];
    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentFull.length) {
      speed = 2200; // Pause at full string
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      speed = 400;
    }

    const timer = setTimeout(() => {
      setRoleText(
        isDeleting
          ? currentFull.substring(0, charIndex - 1)
          : currentFull.substring(0, charIndex + 1)
      );

      if (!isDeleting && charIndex < currentFull.length) {
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === currentFull.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    soundFX.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Text Column */}
          <div className="hero-content">
            <div className="hero-badge reveal-on-scroll">
              <span className="live-status-pulse"></span>
              <span className="hero-badge-text">Available for Full-Stack & AI Roles</span>
            </div>

            <h1 className="hero-title reveal-on-scroll">
              Hi, I'm <span className="hero-name-highlight">KEERTAN B.J.</span>
            </h1>

            <div className="hero-typing-box reveal-on-scroll">
              <span className="typing-prompt">&gt;&nbsp;</span>
              <span className="typing-text">{roleText}</span>
              <span className="typing-cursor">|</span>
            </div>

            <p className="hero-description reveal-on-scroll">
              Information Science Engineer specializing in end-to-end full-stack architectures,
              agentic AI pipelines with LangChain & LangGraph, and high-performance microservices.
              Creator of <strong>MuseFlow AI</strong> — an AI music app reaching 200+ Android downloads in its first week.
            </p>

            {/* Glowing CTA Buttons */}
            <div className="hero-actions reveal-on-scroll">
              <button
                className="btn btn-cyber-primary"
                onClick={() => scrollToSection('projects')}
              >
                <span>EXPLORE PROJECTS</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <button
                className="btn btn-cyber-secondary"
                onClick={() => scrollToSection('terminal')}
              >
                <span>LAUNCH TERMINAL</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" y1="19" x2="20" y2="19" />
                </svg>
              </button>

              <button
                className="btn btn-cyber-outline"
                onClick={() => scrollToSection('contact')}
              >
                <span>CONTACT ME</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="hero-metrics reveal-on-scroll">
              <div className="metric-item">
                <span className="metric-num">200+</span>
                <span className="metric-label">App Downloads</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-item">
                <span className="metric-num">23+</span>
                <span className="metric-label">Public Repos</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-item">
                <span className="metric-num">3</span>
                <span className="metric-label">Deployed Apps</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-item">
                <span className="metric-num">7.4</span>
                <span className="metric-label">CGPA (B.E.)</span>
              </div>
            </div>
          </div>

          {/* Right Holographic Profile Photo Frame */}
          <div className="hero-avatar-wrapper reveal-on-scroll">
            <div className="hologram-card">
              {/* Outer Rotating HUD Cyber Rings */}
              <div className="holo-ring ring-1"></div>
              <div className="holo-ring ring-2"></div>
              <div className="holo-ring ring-3"></div>

              {/* Photo Frame Container */}
              <div className="holo-photo-container">
                <img
                  src="/keertan-photo.jpg"
                  alt="Keertan BJ (Keertan B.J.) - Software Engineer & AI Architect"
                  className="holo-photo"
                />
                <div className="holo-overlay-scanline"></div>
                <div className="holo-glare"></div>
              </div>

              {/* Holographic Status Badges */}
              <div className="holo-tag holo-tag-top">
                <span className="tag-icon">⚡</span> AI & Backend Engineer
              </div>
              <div className="holo-tag holo-tag-bottom">
                <span className="tag-icon">📍</span> Bengaluru, India
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
