import { useEffect, useRef, useState } from 'react';

interface Certificate {
  title: string;
  issuer: string;
  url: string;
  id?: string;
  tags: string[];
}

const certsData: Certificate[] = [
  {
    title: 'SQL (Basic)',
    issuer: 'HackerRank',
    url: 'https://www.hackerrank.com/certificates/iframe/d3db5174c412',
    id: 'd3db5174c412',
    tags: ['SQL', 'Query Optimization', 'Relational Databases']
  },
  {
    title: 'Introduction to Software Engineering',
    issuer: 'Coursera (IBM)',
    url: 'https://coursera.org/share/56e735032e6fe25c501ed0a2dc190bf1',
    tags: ['Agile Metodology', 'SDLC', 'Git / GitHub']
  },
  {
    title: 'Foundations of Information Systems for Business',
    issuer: 'Coursera (University of London)',
    url: 'https://coursera.org/share/bd5b963ca58a0f4e84502b177b5597e2',
    tags: ['Information Security', 'Business Tech', 'Database Systems']
  },
  {
    title: 'Understanding Research Methods',
    issuer: 'Coursera (University of London)',
    url: 'https://coursera.org/share/c88728cda7f8b33f5a6ec89d76d3cabe',
    tags: ['Research Methods', 'Data Analysis', 'Systematic Literature Review']
  },
  {
    title: 'Industry 4.0 and its impact on Manufacturing Sector',
    issuer: 'Coursera (UCI)',
    url: 'https://coursera.org/share/12fcad5435cf0eee43761b1cc6b9361d',
    tags: ['IoT Protocols', 'Cyber-Physical Systems', 'Smart Manufacturing']
  }
];

export default function Certifications() {
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
      id="certifications"
      ref={sectionRef}
      className={`certifications-section section-padding reveal-on-scroll ${
        animate ? 'active' : ''
      }`}
    >
      <div className="container">
        <h2 className="section-title">
          <span>05.</span> Certifications
        </h2>

        <div className="certs-grid">
          {certsData.map((c, idx) => (
            <div
              key={idx}
              className={`cert-card glass-card reveal-item reveal-delay-${(idx % 3) + 1}`}
            >
              <div className="cert-card-header">
                <div className="cert-badge-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="award-svg"
                  >
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <div className="cert-verify-link">
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Verify Credential"
                    className="verify-btn"
                  >
                    Verify
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="link-arrow-svg"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"></path>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="cert-card-body">
                <h3 className="cert-title">{c.title}</h3>
                <h4 className="cert-issuer">{c.issuer}</h4>
                {c.id && (
                  <p className="cert-id-tag">
                    Credential ID: <code>{c.id}</code>
                  </p>
                )}
              </div>

              <div className="cert-card-footer">
                {c.tags.map((tag, tIdx) => (
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
