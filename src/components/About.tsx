import { useState } from 'react';
import { soundFX } from '../utils/audio';

export default function About() {
  const [activeTab, setActiveTab] = useState<'mindset' | 'setup' | 'philosophy' | 'languages'>('mindset');
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleTabChange = (tab: 'mindset' | 'setup' | 'philosophy' | 'languages') => {
    soundFX.playClick();
    setActiveTab(tab);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({ x: -(y / 35), y: x / 35 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <span className="section-subtitle">BIOGRAPHY & CORE STACK</span>
          <h2 className="section-title">
            About <span className="text-gradient">Keertan B.J.</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="about-grid">
          {/* Left Column: Interactive 3D Tilt Portrait Photo & Quick Info Card */}
          <div className="about-left reveal-on-scroll">
            <div
              className="about-card-photo-wrapper reactive-tilt-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: tilt.x === 0 ? 'transform 0.5s ease' : 'none',
              }}
            >
              <div className="about-photo-frame">
                <img
                  src="/keertan-photo.jpg"
                  alt="Keertan B.J. Portrait"
                  className="about-profile-img"
                />
                <div className="photo-pulse-ring"></div>
              </div>

              <div className="about-quick-info">
                <h3>Keertan B.J.</h3>
                <p className="about-degree">B.E. Information Science & Engineering (2022 – 2026)</p>
                <p className="about-college">PES College of Engineering, Mandya (CGPA: 7.4 / 10)</p>

                <div className="about-contact-links">
                  <a href="mailto:keertan004@gmail.com" className="about-link" onClick={() => soundFX.playClick()}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    keertan004@gmail.com
                  </a>
                  <a href="https://github.com/mad-man22" target="_blank" rel="noreferrer" className="about-link" onClick={() => soundFX.playClick()}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    github.com/mad-man22
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Personality & Workstation Tabs */}
          <div className="about-right reveal-on-scroll">
            <div className="about-tabs-header">
              <button
                className={`tab-btn ${activeTab === 'mindset' ? 'active' : ''}`}
                onClick={() => handleTabChange('mindset')}
              >
                🧠 Engineering Mindset
              </button>
              <button
                className={`tab-btn ${activeTab === 'setup' ? 'active' : ''}`}
                onClick={() => handleTabChange('setup')}
              >
                💻 Workstation & Tools
              </button>
              <button
                className={`tab-btn ${activeTab === 'philosophy' ? 'active' : ''}`}
                onClick={() => handleTabChange('philosophy')}
              >
                ⚡ Code Philosophy
              </button>
              <button
                className={`tab-btn ${activeTab === 'languages' ? 'active' : ''}`}
                onClick={() => handleTabChange('languages')}
              >
                🌐 Languages & Culture
              </button>
            </div>

            <div className="about-tab-content glass-panel">
              {activeTab === 'mindset' && (
                <div className="tab-pane fade-in">
                  <h3 className="tab-pane-title">Full-Stack, AI & Systems Engineering</h3>
                  <p>
                    I specialize in building production-ready applications that combine smooth modern React/Next.js UIs
                    with robust backend microservices in <strong>FastAPI, Node.js, and Express</strong>.
                  </p>
                  <p>
                    During my 4-month backend engineering internship at <strong>Talencia Global</strong> (Jan 2026 – Apr 2026),
                    I built multi-agent AI data pipelines with <strong>LangChain and LangGraph</strong> to automate complex data extraction,
                    reducing manual processing overhead. I also containerized services with Docker, configured Jenkins CI/CD pipelines,
                    and supported AWS EC2/VPC infrastructure.
                  </p>
                  <div className="mindset-tags">
                    <span className="glow-tag">Multi-Agent AI</span>
                    <span className="glow-tag">Microservices</span>
                    <span className="glow-tag">AWS & Docker</span>
                    <span className="glow-tag">WebSockets</span>
                    <span className="glow-tag">WebRTC Jam Rooms</span>
                  </div>
                </div>
              )}

              {activeTab === 'setup' && (
                <div className="tab-pane fade-in">
                  <h3 className="tab-pane-title">Developer Environment & Stack</h3>
                  <p>
                    My workflow is optimized for speed, code clarity, and autonomous AI-assisted software engineering.
                  </p>
                  <div className="setup-grid">
                    <div className="setup-item">
                      <span className="setup-label">IDEs & Editors:</span>
                      <span className="setup-value">VS Code, Cursor AI, PyCharm</span>
                    </div>
                    <div className="setup-item">
                      <span className="setup-label">OS & Terminal:</span>
                      <span className="setup-value">Windows 11, WSL2 / Linux, PowerShell</span>
                    </div>
                    <div className="setup-item">
                      <span className="setup-label">Container & CI/CD:</span>
                      <span className="setup-value">Docker, Docker Compose, Jenkins CI</span>
                    </div>
                    <div className="setup-item">
                      <span className="setup-label">API Testing:</span>
                      <span className="setup-value">Postman, Swagger UI, FastAPI Redoc</span>
                    </div>
                    <div className="setup-item">
                      <span className="setup-label">AI Agent Stack:</span>
                      <span className="setup-value">LangChain, LangGraph, Ollama, Groq, Gemini API</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'philosophy' && (
                <div className="tab-pane fade-in">
                  <h3 className="tab-pane-title">Build to Scale. Design to Thrill.</h3>
                  <ul className="philosophy-list">
                    <li>
                      <strong>Zero Latency Compromise:</strong> Utilize Redis caching, optimized SQL query indexing, and WebSocket stream sockets for real-time synchronization.
                    </li>
                    <li>
                      <strong>Strict Schema Contracts:</strong> Enforce Pydantic types across microservices boundaries to detect integration issues before deployment.
                    </li>
                    <li>
                      <strong>User-Centric Visuals:</strong> Believe that backend power should always be paired with a futuristic, responsive, and visually mesmerizing UI.
                    </li>
                    <li>
                      <strong>Resilient Multi-Agent Workflows:</strong> Design AI systems with automated retries, validation layers, and fallback handlers.
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'languages' && (
                <div className="tab-pane fade-in">
                  <h3 className="tab-pane-title">Spoken Languages & Community Involvement</h3>
                  <p>
                    Communicating effectively across teams and contributing to developer communities:
                  </p>
                  <div className="lang-pills">
                    <div className="lang-pill">
                      <span className="lang-flag">🇬🇧</span>
                      <span className="lang-name">English</span>
                      <span className="lang-level">Full Professional</span>
                    </div>
                    <div className="lang-pill">
                      <span className="lang-flag">🇮🇳</span>
                      <span className="lang-name">Kannada</span>
                      <span className="lang-level">Native / Fluent</span>
                    </div>
                    <div className="lang-pill">
                      <span className="lang-flag">🇮🇳</span>
                      <span className="lang-name">Hindi</span>
                      <span className="lang-level">Conversational</span>
                    </div>
                  </div>

                  <h4 className="community-heading">Activities & Leadership</h4>
                  <ul className="community-list">
                    <li><strong>HAXLR8 2.0 Hackathon:</strong> Active participant building rapid prototype solutions.</li>
                    <li><strong>Bug Hunt Blitz Organiser:</strong> Led software debugging competitions for FOSS Club, PES College of Engineering.</li>
                    <li><strong>FOSS Club Active Member:</strong> Promoting open-source software and Linux tools.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
