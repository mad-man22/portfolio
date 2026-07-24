import { soundFX } from '../utils/audio';

export default function BeyondCode() {
  const animeFavorites = [
    { title: 'Attack on Titan', tag: 'Epic World-Building & Tactical Strategy', icon: '⚔️' },
    { title: 'Naruto', tag: 'Perseverance, Determination & High-Energy Battles', icon: '🍥' },
    { title: 'Death Note', tag: 'Mind Games, Logic & Tactical Analysis', icon: '📓' },
  ];

  const gamingFavorites = [
    { name: 'Valorant', role: 'Tactical 5v5 FPS • Agent Abilities & Teamplay', badge: 'Competitive FPS' },
    { name: 'BGMI (Battlegrounds Mobile India)', role: 'Battle Royale • Squad Strategy & Clutch Plays', badge: 'Battle Royale' },
  ];

  const hackathons = [
    {
      name: 'HAXLR8 2.0 National Hackathon',
      role: 'Participant & Builder',
      desc: 'Rapid prototyping of full-stack AI-integrated solutions within 24 hours under intense competition.',
      badge: 'National Level',
    },
    {
      name: 'Bug Hunt Blitz — FOSS Club',
      role: 'Event Organiser & Lead Judge',
      desc: 'Organized competitive code debugging and reverse-engineering challenges for 100+ student participants.',
      badge: 'Organiser & Lead',
    },
  ];

  return (
    <section id="beyond" className="section-padding beyond-section">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <span className="section-subtitle">BEYOND THE RESUME</span>
          <h2 className="section-title">
            Anime, Gaming & <span className="text-gradient">Hackathons</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="beyond-grid">
          {/* Anime & Gaming Column */}
          <div className="beyond-box glass-panel reveal-on-scroll">
            <div className="beyond-box-header">
              <span className="box-icon">🎬</span>
              <h3>Favorite Anime & Gaming</h3>
            </div>
            <p className="beyond-box-desc">
              Outside of building microservices and AI agent pipelines, I'm passionate about anime storytelling and tactical gaming!
            </p>

            <h4 className="beyond-sub-title">🔥 Anime Favorites</h4>
            <div className="anime-grid">
              {animeFavorites.map((anime, idx) => (
                <div
                  key={idx}
                  className="anime-card"
                  onClick={() => soundFX.playClick()}
                >
                  <h4><span className="anime-icon">{anime.icon}</span> {anime.title}</h4>
                  <span className="anime-tag">{anime.tag}</span>
                </div>
              ))}
            </div>

            <h4 className="beyond-sub-title" style={{ marginTop: '1.5rem' }}>🎮 Online Gaming</h4>
            <div className="anime-grid">
              {gamingFavorites.map((game, idx) => (
                <div
                  key={idx}
                  className="anime-card gaming-card"
                  onClick={() => soundFX.playClick()}
                >
                  <div className="game-card-header">
                    <h4>🎯 {game.name}</h4>
                    <span className="game-badge">{game.badge}</span>
                  </div>
                  <span className="anime-tag">{game.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons & Community Leadership */}
          <div className="beyond-box glass-panel reveal-on-scroll">
            <div className="beyond-box-header">
              <span className="box-icon">🏆</span>
              <h3>Hackathons & Leadership</h3>
            </div>
            <p className="beyond-box-desc">
              Organizing events and building under deadline pressure sharpens both technical execution and team collaboration.
            </p>

            <div className="hackathon-list">
              {hackathons.map((h, idx) => (
                <div key={idx} className="hackathon-item">
                  <div className="hackathon-header">
                    <h4>{h.name}</h4>
                    <span className="hackathon-badge">{h.badge}</span>
                  </div>
                  <p className="hackathon-role">Role: <strong>{h.role}</strong></p>
                  <p className="hackathon-desc">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
