import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky styles
      setIsScrolled(window.scrollY > 50);

      // Scroll Progress Bar calculation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Scroll Spy highlighting logic
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset threshold

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set active states
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileOpen((prev) => !prev);
  };

  const closeMobileNav = () => {
    setIsMobileOpen(false);
  };

  return (
    <header>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav className={`glass-nav ${isScrolled ? 'scrolled' : ''}`} id="main-nav">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={closeMobileNav}>
            <span className="logo-bracket">&lt;</span>Keertan
            <span className="logo-accent">.dev</span>
            <span className="logo-bracket">/&gt;</span>
          </a>
          
          <div className={`nav-links ${isMobileOpen ? 'active' : ''}`} id="nav-links">
            <a
              href="#about"
              className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
              onClick={closeMobileNav}
            >
              <span>01.</span>About
            </a>
            <a
              href="#experience"
              className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={closeMobileNav}
            >
              <span>02.</span>Timeline
            </a>
            <a
              href="#projects"
              className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={closeMobileNav}
            >
              <span>03.</span>Projects
            </a>
            <a
              href="#skills"
              className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={closeMobileNav}
            >
              <span>04.</span>Skills
            </a>
            <a
              href="#certifications"
              className={`nav-item ${activeSection === 'certifications' ? 'active' : ''}`}
              onClick={closeMobileNav}
            >
              <span>05.</span>Certificates
            </a>
            <a
              href="#contact"
              className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={closeMobileNav}
            >
              <span>06.</span>Contact
            </a>
            <a
              href="#terminal-section"
              className="nav-item btn-terminal-nav"
              onClick={closeMobileNav}
            >
              Console
            </a>
          </div>

          <button
            className={`mobile-nav-toggle ${isMobileOpen ? 'active' : ''}`}
            id="mobile-toggle"
            onClick={toggleMobileNav}
            aria-label="Toggle Navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
