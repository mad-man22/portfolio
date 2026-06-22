export default function About() {
  return (
    <section id="about" className="about-section section-padding reveal-on-scroll">
      <div className="container">
        <h2 className="section-title">
          <span>01.</span> About Me
        </h2>
        <div className="about-grid">
          <div className="about-text">
            <p className="reveal-item">
              I am a final-year Information Science and Engineering student at{' '}
              <strong>PES College of Engineering, Mandya</strong> (graduating in 2026) with a passion for designing and building highly scalable backend architectures and AI-native applications.{' '}
            </p>
            <p className="reveal-item reveal-delay-1">
              My experience spans across backend microservices (FastAPI, Node.js), event-driven sync (WebSockets, Socket.io), and multi-agent systems using LangChain and LangGraph. I thrive on solving complex algorithmic problems, actively maintaining a presence on{' '}
              <a
                href="https://leetcode.com/u/Keertan004"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                LeetCode
              </a>
              , and writing clean, maintainable, and well-tested code.
            </p>
            <p className="reveal-item reveal-delay-2">
              Whether it's designing normalized relational databases, optimizing SQL query performance, or building zero-human-intervention data collection pipelines, I aim to create robust software systems that deliver real-world business value.
            </p>

            <div className="stats-grid">
              <div className="stat-card reveal-item reveal-delay-1">
                <span className="stat-number">4+</span>
                <span className="stat-label">Months Intern Experience</span>
              </div>
              <div className="stat-card reveal-item reveal-delay-2">
                <span className="stat-number">5+</span>
                <span className="stat-label">Production & SaaS Projects</span>
              </div>
              <div className="stat-card reveal-item reveal-delay-3">
                <span className="stat-number">Active</span>
                <span className="stat-label">LeetCode Problem Solver</span>
              </div>
              <div className="stat-card reveal-item reveal-delay-4">
                <span className="stat-number">7.4</span>
                <span className="stat-label">B.E. CGPA (PESCE Mandya)</span>
              </div>
            </div>
          </div>

          <div className="about-image-wrapper reveal-item reveal-delay-2">
            <div className="about-image-frame">
              {/* SVG Avatar Representative */}
              <svg viewBox="0 0 200 200" className="svg-avatar" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="avatar-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f2fe" />
                    <stop offset="100%" stopColor="#4facfe" />
                  </linearGradient>
                  <linearGradient id="glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4facfe" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00f2fe" stopOpacity="0.2" />
                  </linearGradient>
                  <clipPath id="circle-clip">
                    <circle cx="100" cy="100" r="85" />
                  </clipPath>
                </defs>
                {/* Background Glow */}
                <circle
                  cx="100"
                  cy="100"
                  r="95"
                  fill="none"
                  stroke="url(#glow-grad)"
                  strokeWidth="4"
                  strokeDasharray="10 5"
                  className="rotating-ring"
                />
                <circle cx="100" cy="100" r="88" fill="#0f172a" stroke="url(#avatar-grad)" strokeWidth="2" />

                {/* SVG Avatar Face Graphic */}
                <g clipPath="url(#circle-clip)">
                  <circle cx="100" cy="90" r="40" fill="#1e293b" />
                  <rect
                    x="75"
                    y="80"
                    width="22"
                    height="15"
                    rx="3"
                    fill="none"
                    stroke="url(#avatar-grad)"
                    strokeWidth="3"
                  />
                  <rect
                    x="103"
                    y="80"
                    width="22"
                    height="15"
                    rx="3"
                    fill="none"
                    stroke="url(#avatar-grad)"
                    strokeWidth="3"
                  />
                  <line x1="97" y1="87" x2="103" y2="87" stroke="url(#avatar-grad)" strokeWidth="3" />
                  <rect x="52" y="75" width="12" height="30" rx="6" fill="url(#avatar-grad)" />
                  <rect x="136" y="75" width="12" height="30" rx="6" fill="url(#avatar-grad)" />
                  <path d="M 58 75 A 45 45 0 0 1 142 75" fill="none" stroke="url(#avatar-grad)" strokeWidth="4" />
                  <path d="M 50 160 C 50 130, 80 120, 100 120 C 120 120, 150 130, 150 160 Z" fill="#334155" />
                  <path d="M 80 135 L 100 155 L 120 135" fill="none" stroke="url(#avatar-grad)" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
