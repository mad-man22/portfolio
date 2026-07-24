import { useState, useEffect } from 'react';
import { soundFX } from '../utils/audio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundFX.enabled = next;
    if (next) soundFX.playClick();
  };

  const navTo = (id: string) => {
    soundFX.playClick();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      {/* Top Scroll Progress Line */}
      <div className="top-scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <div className="container navbar-container">
        {/* Brand Logo */}
        <div className="navbar-brand" onClick={() => navTo('hero')}>
          <div className="brand-photo-badge">
            <img src="/keertan-photo.jpg" alt="Keertan B.J." className="brand-img" />
          </div>
          <span className="brand-text">
            KEERTAN<span className="brand-dot">.DEV</span>
          </span>
        </div>

        {/* Desktop Links */}
        <nav className="desktop-nav">
          <button onClick={() => navTo('about')} className="nav-link">
            About
          </button>
          <button onClick={() => navTo('experience')} className="nav-link">
            Experience
          </button>
          <button onClick={() => navTo('projects')} className="nav-link">
            Projects
          </button>
          <button onClick={() => navTo('skills')} className="nav-link">
            Skills
          </button>
          <button onClick={() => navTo('beyond')} className="nav-link">
            Beyond Code
          </button>
          <button onClick={() => navTo('terminal')} className="nav-link">
            Terminal
          </button>
          <button onClick={() => navTo('certifications')} className="nav-link">
            Certs
          </button>
          <button onClick={() => navTo('contact')} className="nav-link nav-btn-cta">
            Contact
          </button>
        </nav>

        {/* Right Controls: SFX Button & Mobile Menu Toggle */}
        <div className="navbar-controls">
          <button
            className={`sound-toggle-btn ${soundEnabled ? 'active' : 'muted'}`}
            onClick={toggleSound}
            title={soundEnabled ? 'Mute Sci-Fi Audio' : 'Enable Sci-Fi Audio'}
          >
            <span className="sfx-icon">{soundEnabled ? '🔊' : '🔇'}</span>
            <span className="sfx-text">{soundEnabled ? 'SFX ON' : 'SFX OFF'}</span>
          </button>

          <button
            className="mobile-burger-btn"
            onClick={() => {
              soundFX.playClick();
              setMenuOpen(!menuOpen);
            }}
            aria-label="Toggle Navigation Menu"
          >
            {menuOpen ? (
              <span className="close-x-icon">✕</span>
            ) : (
              <>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu UI */}
      {menuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <div className="navbar-brand" onClick={() => navTo('hero')}>
                <div className="brand-photo-badge">
                  <img src="/keertan-photo.jpg" alt="Keertan B.J." className="brand-img" />
                </div>
                <span className="brand-text">KEERTAN<span className="brand-dot">.DEV</span></span>
              </div>
              <button className="menu-close-btn" onClick={() => setMenuOpen(false)}>
                ✕
              </button>
            </div>

            <div className="mobile-menu-links">
              <button onClick={() => navTo('about')} className="mobile-nav-item">
                <span className="nav-num">01.</span> About Biography
              </button>
              <button onClick={() => navTo('experience')} className="mobile-nav-item">
                <span className="nav-num">02.</span> Experience & Timeline
              </button>
              <button onClick={() => navTo('projects')} className="mobile-nav-item">
                <span className="nav-num">03.</span> Featured Projects
              </button>
              <button onClick={() => navTo('skills')} className="mobile-nav-item">
                <span className="nav-num">04.</span> Tech Skills Matrix
              </button>
              <button onClick={() => navTo('beyond')} className="mobile-nav-item">
                <span className="nav-num">05.</span> Anime, Gaming & Culture
              </button>
              <button onClick={() => navTo('terminal')} className="mobile-nav-item">
                <span className="nav-num">06.</span> Interactive Terminal
              </button>
              <button onClick={() => navTo('certifications')} className="mobile-nav-item">
                <span className="nav-num">07.</span> Certifications & Badges
              </button>

              <button onClick={() => navTo('contact')} className="mobile-cta-btn">
                <span>GET IN TOUCH</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
