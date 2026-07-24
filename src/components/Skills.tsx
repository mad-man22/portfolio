import { useState } from 'react';
import { soundFX } from '../utils/audio';

interface SkillItem {
  name: string;
  level: number;
  iconUrl?: string;
  emojiIcon?: string;
  highlight?: boolean;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: SkillItem[];
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categories: SkillCategory[] = [
    {
      title: 'Languages & Core',
      icon: '⚡',
      skills: [
        {
          name: 'Python',
          level: 92,
          highlight: true,
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        },
        {
          name: 'TypeScript',
          level: 90,
          highlight: true,
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        },
        {
          name: 'JavaScript (ES6+)',
          level: 94,
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        },
        {
          name: 'SQL / PostgreSQL',
          level: 88,
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        },
        {
          name: 'C / C++',
          level: 82,
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
        },
        {
          name: 'Java & C#',
          level: 80,
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
      ],
    },
    {
      title: 'AI & Multi-Agent Frameworks',
      icon: '🤖',
      skills: [
        {
          name: 'LangChain & LangGraph',
          level: 92,
          highlight: true,
          emojiIcon: '🦜🔗',
        },
        {
          name: 'Gemini API & Prompt Engineering',
          level: 95,
          highlight: true,
          emojiIcon: '✨',
        },
        {
          name: 'Ollama & Groq LLMs',
          level: 88,
          emojiIcon: '🦙',
        },
        {
          name: 'RAG & Vector Retrieval',
          level: 86,
          emojiIcon: '🎯',
        },
        {
          name: 'Pydantic Data Schemas',
          level: 90,
          emojiIcon: '🛡️',
        },
      ],
    },
    {
      title: 'Frontend & Mobile',
      icon: '💻',
      skills: [
        {
          name: 'React.js & Next.js',
          level: 92,
          highlight: true,
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
          name: 'React Native (Expo Mobile)',
          level: 88,
          highlight: true,
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
          name: 'Tailwind CSS & Glassmorphism',
          level: 94,
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        },
        {
          name: 'WebSockets & WebRTC',
          level: 85,
          emojiIcon: '🌐',
        },
        {
          name: 'HTML5 / Modern CSS Animations',
          level: 95,
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        },
      ],
    },
    {
      title: 'Backend & Databases',
      icon: '⚙️',
      skills: [
        {
          name: 'FastAPI Microservices',
          level: 94,
          highlight: true,
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
        },
        {
          name: 'Node.js & Express.js',
          level: 90,
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        },
        {
          name: 'Django Framework',
          level: 84,
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
        },
        {
          name: 'Redis Caching',
          level: 88,
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
        },
        {
          name: 'PostgreSQL / MySQL / Supabase',
          level: 89,
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        },
      ],
    },
    {
      title: 'Cloud, DevOps & Tools',
      icon: '☁️',
      skills: [
        {
          name: 'AWS (EC2, VPC, IAM, NAT Gateway)',
          level: 86,
          highlight: true,
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
        },
        {
          name: 'Docker & Docker Compose',
          level: 90,
          highlight: true,
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        },
        {
          name: 'Jenkins CI/CD Pipelines',
          level: 84,
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
        },
        {
          name: 'Git / GitHub Workflows',
          level: 94,
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        },
        {
          name: 'Vercel Deployment',
          level: 92,
          emojiIcon: '▲',
        },
      ],
    },
    {
      title: 'CS Fundamentals',
      icon: '🧠',
      skills: [
        { name: 'Data Structures & Algorithms', level: 90, emojiIcon: '🧩' },
        { name: 'Object-Oriented Programming (OOP)', level: 92, emojiIcon: '🏗️' },
        { name: 'Operating Systems & Threading', level: 86, emojiIcon: '💻' },
        { name: 'Computer Networks (TCP/IP, DNS, HTTP/S)', level: 88, emojiIcon: '📡' },
        { name: 'Database Management Systems (DBMS)', level: 89, emojiIcon: '🛢️' },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <span className="section-subtitle">TECHNICAL PROFICIENCY</span>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Tech Matrix</span>
          </h2>
          <div className="section-line"></div>
        </div>

        {/* Skill Category Selector Tabs */}
        <div className="skills-tab-bar reveal-on-scroll">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`skill-tab-btn ${activeCategory === idx ? 'active' : ''}`}
              onClick={() => {
                soundFX.playClick();
                setActiveCategory(idx);
              }}
            >
              <span className="tab-icon">{cat.icon}</span>
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Skill Category Card Grid */}
        <div className="skills-content-panel glass-panel reveal-on-scroll">
          <div className="skills-panel-header">
            <h3>
              {categories[activeCategory].icon} {categories[activeCategory].title}
            </h3>
            <span className="panel-count">
              {categories[activeCategory].skills.length} core technologies
            </span>
          </div>

          <div className="skills-meters-grid">
            {categories[activeCategory].skills.map((skill, idx) => (
              <div key={idx} className="skill-meter-card">
                <div className="skill-meter-header">
                  <div className="skill-logo-name">
                    {/* Tech Logo Image or Emoji Badge */}
                    <div className="skill-icon-badge">
                      {skill.iconUrl ? (
                        <img
                          src={skill.iconUrl}
                          alt={skill.name}
                          className="skill-tech-logo"
                          onError={(e) => {
                            // Fallback if image load fails
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        <span className="skill-emoji-logo">{skill.emojiIcon || '⚡'}</span>
                      )}
                    </div>
                    <span className="skill-name">
                      {skill.name} {skill.highlight && <span className="highlight-star">★</span>}
                    </span>
                  </div>
                  <span className="skill-pct">{skill.level}%</span>
                </div>

                <div className="skill-bar-track">
                  <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}>
                    <div className="bar-glow-head"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
