import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  percentage: string;
}

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  items: Skill[];
}

// Helper to render high-tech segmented progress
function SegmentedProgress({ percentage, active }: { percentage: number; active: boolean }) {
  const totalTicks = 8;
  const activeTicks = Math.round((percentage / 100) * totalTicks);
  
  return (
    <div className="segmented-bar">
      {[...Array(totalTicks)].map((_, idx) => (
        <div
          key={idx}
          className={`bar-tick ${active && idx < activeTicks ? 'active' : ''}`}
          style={{
            transitionDelay: active ? `${idx * 80}ms` : '0ms'
          }}
        />
      ))}
    </div>
  );
}

// Inline SVGs for all technical skills to ensure premium custom look without external assets
const techIcons: { [key: string]: React.ReactNode } = {
  'Python': (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.12 1A6.12 6.12 0 0 0 6 7.12v2.33h6.12a1 1 0 0 1 1 1v2.4h2.23a3.63 3.63 0 0 0 3.63-3.63V5.63A4.63 4.63 0 0 0 14.35 1H12.12z" opacity="0.8"/>
      <path d="M11.88 23A6.12 6.12 0 0 0 18 16.88v-2.33h-6.12a1 1 0 0 1-1-1v-2.4H8.65a3.63 3.63 0 0 0-3.63 3.63v3.59A4.63 4.63 0 0 0 9.65 23h2.23z" />
    </svg>
  ),
  'TypeScript / JS': (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 2h20v20H2V2zm12 11.5c0-.8-.7-1.5-1.5-1.5H10v1h2.5c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5H9v1h3.5c.8 0 1.5-.7 1.5-1.5v-1.5zm6-3v6h-1.5v-4.5H17V17h-1.5V10h4z" />
    </svg>
  ),
  'SQL': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  ),
  'Java / C++': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="10" y1="21" x2="14" y2="3" />
    </svg>
  ),
  'FastAPI / Express': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  'Next.js / React': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="12" rx="10" ry="4.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),
  'Django / Flask': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12l-2 5H8L6 3z" />
      <path d="M8 8v10a3 3 0 0 0 6 0V8" />
      <circle cx="12" cy="13" r="1.5" fill="currentColor" />
    </svg>
  ),
  'PostgreSQL / MySQL / Redis': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="6" rx="2" />
      <rect x="2" y="9" width="20" height="6" rx="2" />
      <rect x="2" y="16" width="20" height="6" rx="2" />
      <circle cx="6" cy="5" r="1" fill="currentColor" />
      <circle cx="6" cy="12" r="1" fill="currentColor" />
      <circle cx="6" cy="19" r="1" fill="currentColor" />
    </svg>
  ),
  'LangChain / LangGraph': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <line x1="8.7" y1="10.8" x2="15.3" y2="7.2" />
      <line x1="8.7" y1="13.2" x2="15.3" y2="16.8" />
    </svg>
  ),
  'Gemini / OpenAI / Groq': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
    </svg>
  ),
  'Docker / Compose': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="3" width="6" height="4" rx="1" />
      <rect x="13" y="3" width="6" height="4" rx="1" />
      <rect x="5" y="9" width="6" height="4" rx="1" />
      <rect x="13" y="9" width="6" height="4" rx="1" />
      <path d="M2 17h20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
    </svg>
  ),
  'CS Core (DSA, OS, networks)': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
    </svg>
  )
};

const skillsData: SkillGroup[] = [
  {
    category: 'Languages',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
    items: [
      { name: 'Python', percentage: '90%' },
      { name: 'TypeScript / JS', percentage: '85%' },
      { name: 'SQL', percentage: '80%' },
      { name: 'Java / C++', percentage: '75%' }
    ]
  },
  {
    category: 'Frameworks & Backends',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    items: [
      { name: 'FastAPI / Express', percentage: '88%' },
      { name: 'Next.js / React', percentage: '80%' },
      { name: 'Django / Flask', percentage: '75%' },
      { name: 'PostgreSQL / MySQL / Redis', percentage: '82%' }
    ]
  },
  {
    category: 'AI, DevOps & CS Core',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
    items: [
      { name: 'LangChain / LangGraph', percentage: '85%' },
      { name: 'Gemini / OpenAI / Groq', percentage: '88%' },
      { name: 'Docker / Compose', percentage: '80%' },
      { name: 'CS Core (DSA, OS, networks)', percentage: '85%' }
    ]
  }
];

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`skills-section section-padding reveal-on-scroll ${
        animate ? 'active' : ''
      }`}
    >
      <div className="container">
        <h2 className="section-title">
          <span>04.</span> Technical Skills
        </h2>

        <div className="skills-container-new">
          {skillsData.map((group, idx) => (
            <div
              key={idx}
              className={`skills-group-new glass-card reveal-item reveal-delay-${idx + 1}`}
            >
              <div className="skills-group-header">
                <div className="skills-group-icon">
                  {group.icon}
                </div>
                <h3>{group.category}</h3>
              </div>
              
              <div className="skills-grid-sub">
                {group.items.map((skill, sIdx) => {
                  const numPercent = parseInt(skill.percentage);
                  return (
                    <div key={sIdx} className="skill-card">
                      <div className="skill-card-body">
                        <div className="skill-icon-container">
                          {techIcons[skill.name] || (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                          )}
                        </div>
                        <div className="skill-card-details">
                          <span className="skill-card-name">{skill.name}</span>
                          <span className="skill-card-value">{skill.percentage}</span>
                        </div>
                      </div>
                      <SegmentedProgress percentage={numPercent} active={animate} />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
