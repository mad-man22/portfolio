export default function Timeline() {
  return (
    <section id="experience" className="timeline-section section-padding reveal-on-scroll">
      <div className="container">
        <h2 className="section-title">
          <span>02.</span> Experience & Education
        </h2>
        <div className="timeline">
          
          {/* Experience Card */}
          <div className="timeline-item left reveal-item reveal-delay-1">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-card">
              <span className="timeline-date">Jan 2026 – Apr 2026</span>
              <h3 className="timeline-role">Software Engineering Intern — AI & Backend</h3>
              <h4 className="timeline-company">
                Talencia Global <span className="badge">Remote</span>
              </h4>
              <ul className="timeline-details">
                <li>Designed and implemented scalable FastAPI microservices with Pydantic validation, retry policies, and automated test coverage.</li>
                <li>Architected LangChain + LangGraph multi-agent systems for autonomous structured data extraction, removing human intervention steps.</li>
                <li>Maintained Jenkins CI/CD pipelines, containerized service layers with Docker, and integrated secure REST API boundaries.</li>
                <li>Collaborated on SQL schema structures, optimized complex database queries, and enhanced database reliability for production-level traffic.</li>
              </ul>
            </div>
          </div>

          {/* Education Card */}
          <div className="timeline-item right reveal-item reveal-delay-2">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-card">
              <span className="timeline-date">2022 – 2026</span>
              <h3 className="timeline-role">B.E. in Information Science and Engineering</h3>
              <h4 className="timeline-company">PES College of Engineering, Mandya</h4>
              <p className="timeline-gpa">
                <strong>CGPA:</strong> 7.4 / 10
              </p>
              <p className="timeline-desc">
                Acquired a strong foundation in core Computer Science subjects including OOP, Operating Systems, Computer Networks, Cryptography, and Advanced Data Structures & Algorithms.
              </p>
            </div>
          </div>

          {/* Activities / Competitions Card */}
          <div className="timeline-item left reveal-item reveal-delay-3">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-card">
              <span className="timeline-date">Extra-Curricular / Competitive</span>
              <h3 className="timeline-role">Hackathons & Community Activities</h3>
              <h4 className="timeline-company">Developer Community</h4>
              <ul className="timeline-details">
                <li>
                  <strong>HAXLR8 2.0 National Hackathon:</strong> Active participant, designing and prototyping full-stack projects in high-pressure team settings.
                </li>
                <li>
                  <strong>Bug Hunt Blitz:</strong> Main organizer representing the FOSS Club, PES College of Engineering, overseeing challenges and coordinating event platforms.
                </li>
                <li>
                  <strong>LeetCode Competitor:</strong> Persistent problem solver in languages like Python3, C++, and Java, training on data structures, dynamic programming, and system optimization.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
