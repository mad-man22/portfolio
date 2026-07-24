import { soundFX } from '../utils/audio';

export default function Certifications() {
  const certs = [
    {
      title: 'Microsoft Learn — Azure Cloud Concepts, Architecture & Governance',
      issuer: 'Microsoft',
      badge: '3 Trophies | 12 Badges',
      desc: 'Mastery of Azure core services, cloud governance policies, security standards, and scalable cloud architectures.',
      icon: '☁️',
      color: '#00f2fe',
    },
    {
      title: 'Data Science — NPTEL Elite Certification',
      issuer: 'NPTEL (IIT)',
      badge: 'Credential: NPTEL25CS101S641400180',
      date: 'Jun 2025',
      desc: 'In-depth statistical modeling, data visualization, predictive analytics, and machine learning principles.',
      icon: '📊',
      color: '#10b981',
    },
    {
      title: 'SQL (Basic) — HackerRank Verified',
      issuer: 'HackerRank',
      badge: 'Verified Skill',
      desc: 'Validated proficiency in relational query writing, join operations, aggregation functions, and filtering.',
      icon: '🛢️',
      color: '#f59e0b',
    },
    {
      title: 'Introduction to Software Engineering',
      issuer: 'Coursera',
      badge: 'Verified Certificate',
      desc: 'Software development life cycle, Agile methodologies, version control practices, and architectural patterns.',
      icon: '🎓',
      color: '#6366f1',
    },
  ];

  return (
    <section id="certifications" className="section-padding certs-section">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <span className="section-subtitle">ACHIEVEMENTS & CREDENTIALS</span>
          <h2 className="section-title">
            Certifications & <span className="text-gradient">Badges</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="certs-grid">
          {certs.map((cert, idx) => (
            <div
              key={idx}
              className="cert-card glass-panel"
              onClick={() => soundFX.playClick()}
            >
              <div className="cert-icon-box" style={{ borderColor: cert.color }}>
                <span className="cert-emoji">{cert.icon}</span>
              </div>
              <div className="cert-body">
                <span className="cert-issuer">{cert.issuer}</span>
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-badge-tag" style={{ background: `${cert.color}15`, color: cert.color, borderColor: cert.color }}>
                  {cert.badge} {cert.date ? `• ${cert.date}` : ''}
                </div>
                <p className="cert-desc">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
