import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  percentage: string;
}

interface SkillGroup {
  category: string;
  items: Skill[];
}

const skillsData: SkillGroup[] = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', percentage: '90%' },
      { name: 'TypeScript / JS', percentage: '85%' },
      { name: 'SQL', percentage: '80%' },
      { name: 'Java / C++', percentage: '75%' }
    ]
  },
  {
    category: 'Frameworks & Backends',
    items: [
      { name: 'FastAPI / Express', percentage: '88%' },
      { name: 'Next.js / React', percentage: '80%' },
      { name: 'Django / Flask', percentage: '75%' },
      { name: 'PostgreSQL / MySQL / Redis', percentage: '82%' }
    ]
  },
  {
    category: 'AI, DevOps & CS Core',
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
      { threshold: 0.15 }
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

        <div className="skills-container">
          {skillsData.map((group, idx) => (
            <div
              key={idx}
              className={`skills-group glass-card reveal-item reveal-delay-${idx + 1}`}
            >
              <h3>{group.category}</h3>
              <div className="skills-list">
                {group.items.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.percentage}</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{
                          width: animate ? skill.percentage : '0%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
