import { useState, useEffect } from 'react';
import CanvasBg from './components/CanvasBg';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import BeyondCode from './components/BeyondCode';
import Terminal from './components/Terminal';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Toast, { type ToastMessage } from './components/Toast';
import JarvisLoader from './components/JarvisLoader';
import { soundFX } from './utils/audio';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const addToast = (message: string, type: 'success' | 'error') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleLoaderComplete = () => {
    window.scrollTo(0, 0);
    setIsLoading(false);
  };

  const scrollToTop = () => {
    soundFX.playWarp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll position listener for back to top button & reveal observer
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reveal IntersectionObserver setup
  useEffect(() => {
    if (isLoading) return;
    window.scrollTo(0, 0);

    const reveals = document.querySelectorAll('.reveal-on-scroll');

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <JarvisLoader onComplete={handleLoaderComplete} />
      ) : (
        <>
          <CanvasBg />
          <CustomCursor />
          <Navbar />

          <main>
            <Hero />
            <About />
            <Timeline />
            <Projects />
            <Skills />
            <BeyondCode />
            <Terminal />
            <Certifications />
            <Contact onToast={addToast} />
          </main>

          <Toast toasts={toasts} onClose={removeToast} />

          {/* Floating Back to Top Cyber Rocket Button */}
          {showBackToTop && (
            <button
              className="back-to-top-btn"
              onClick={scrollToTop}
              title="Return to Neural Control"
              aria-label="Back to top"
            >
              🚀
            </button>
          )}

          <footer className="footer-section">
            <div className="container footer-content">
              <div className="footer-left">
                <p>&copy; {new Date().getFullYear()} Keertan B.J. All rights reserved.</p>
                <p className="footer-sub">Software Engineer — Full-Stack, Backend & AI Applications</p>
              </div>
              <div className="footer-right">
                <p>Designed with Electric Neon Cyberpunk Aesthetics.</p>
                <p className="footer-tech">Built with React 19, TypeScript, Vite & WebGL Canvas.</p>
              </div>
            </div>
          </footer>
        </>
      )}
    </>
  );
}
