import { useState, useEffect } from 'react';
import CanvasBg from './components/CanvasBg';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Toast, { type ToastMessage } from './components/Toast';
import JarvisLoader from './components/JarvisLoader';
import Certifications from './components/Certifications';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (message: string, type: 'success' | 'error') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Scroll reveal IntersectionObserver setup
  useEffect(() => {
    if (isLoading) return; // Do not observe before load completes

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
        <JarvisLoader onComplete={() => setIsLoading(false)} />
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
            <Certifications />
            <Contact onToast={addToast} />
          </main>

          <Toast toasts={toasts} onClose={removeToast} />

          <footer>
            <div className="container footer-content">
              <div className="footer-left">
                <p>&copy; {new Date().getFullYear()} Keertan B.J. All rights reserved.</p>
              </div>
              <div className="footer-right">
                <p>Built with React, TypeScript & Vite.</p>
              </div>
            </div>
          </footer>
        </>
      )}
    </>
  );
}
