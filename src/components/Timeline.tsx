import { soundFX } from '../utils/audio';

export default function Timeline() {
  const experiences = [
    {
      type: 'work',
      category: '🏢 SOFTWARE ENGINEERING INTERNSHIP',
      icon: '💼',
      date: 'Jan 2026 – Apr 2026',
      title: 'Software Engineering Intern — AI & Backend',
      company: 'Talencia Global',
      location: 'Remote',
      badge: '⚡ 4-Month Full-Time Internship',
      highlights: [
        'Built & deployed FastAPI microservices with Pydantic schema validation, retry policies, and automated test coverage.',
        'Architected multi-agent pipelines with LangChain and LangGraph to automate structured-data extraction, eliminating manual review overhead.',
        'Configured Jenkins CI/CD pipelines and containerized microservice layers using Docker; enforced strict API contracts across boundaries.',
        'Optimized SQL queries and relational data schemas for production traffic; supported AWS cloud deployment (EC2, VPC, IAM).',
      ],
      skills: ['FastAPI', 'LangChain', 'LangGraph', 'Docker', 'AWS (EC2, VPC)', 'Jenkins', 'Python', 'SQL', 'REST Microservices'],
    },
    {
      type: 'education',
      category: '🎓 ACADEMIC ENGINEERING DEGREE',
      icon: '🎓',
      date: '2022 – 2026',
      title: 'B.E. Information Science & Engineering',
      company: 'PES College of Engineering, Mandya',
      cgpa: 'CGPA: 7.4 / 10',
      badge: '🏆 FOSS Club & Event Organiser',
      highlights: [
        'Solid grounding in CS fundamentals: Data Structures & Algorithms, Operating Systems, Computer Networks (TCP/IP, DNS, HTTP/S), and DBMS.',
        'Organiser for Bug Hunt Blitz & active member of FOSS Club promoting open-source software engineering across campus.',
      ],
      skills: ['Data Structures & Algorithms', 'System Design', 'DBMS & SQL', 'Computer Networks', 'Operating Systems', 'OOP (Java/C++)'],
    },
  ];

  return (
    <section id="experience" className="section-padding timeline-section">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <span className="section-subtitle">CAREER & EDUCATION</span>
          <h2 className="section-title">
            Experience & <span className="text-gradient">Timeline</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="timeline-tree-wrapper">
          {/* Animated Central Laser Spine Line */}
          <div className="timeline-central-spine"></div>

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="timeline-tree-node glass-panel reveal-on-scroll"
              onMouseEnter={() => soundFX.playClick()}
            >
              {/* Outer Glowing Icon Circle */}
              <div className="node-icon-badge">
                <span className="node-emoji">{exp.icon}</span>
                <span className="node-pulse-ring"></span>
              </div>

              {/* Node Top Header Meta Row */}
              <div className="node-meta-bar">
                <span className="node-category-tag">{exp.category}</span>
                <div className="node-pills-group">
                  <span className="node-date-pill">{exp.date}</span>
                  {exp.location && <span className="node-location-pill">{exp.location}</span>}
                  {exp.cgpa && <span className="node-cgpa-pill">{exp.cgpa}</span>}
                </div>
              </div>

              {/* Main Title & Organization */}
              <div className="node-title-box">
                <h3 className="node-title">{exp.title}</h3>
                <h4 className="node-company">
                  {exp.company} <span className="node-highlight-badge">{exp.badge}</span>
                </h4>
              </div>

              {/* Achievement Bullets */}
              <ul className="node-bullet-list">
                {exp.highlights.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <span className="bullet-bolt">⚡</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Key Skills Pill Matrix */}
              <div className="node-tech-matrix">
                <span className="matrix-label">Technologies & Concepts:</span>
                <div className="matrix-tags">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="node-tech-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
