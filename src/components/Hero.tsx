import { useEffect, useState } from 'react';
import { createTimeline, stagger } from 'animejs';
import Terminal from './Terminal';
import AnimeGrid from './AnimeGrid';

export default function Hero() {
  const words = [
    'Software Engineer',
    'AI & Backend Developer',
    'LangGraph Orchestrator',
    'LeetCode Active Solver'
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [subtext, setSubtext] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect loop
  useEffect(() => {
    let timer: number;
    const currentWord = words[wordIndex % words.length];

    const type = () => {
      if (isDeleting) {
        setSubtext((prev) => currentWord.substring(0, prev.length - 1));
      } else {
        setSubtext((prev) => currentWord.substring(0, prev.length + 1));
      }

      let speed = 100;
      if (isDeleting) speed /= 2;

      if (!isDeleting && subtext === currentWord) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && subtext === '') {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
        timer = setTimeout(type, 500);
      } else {
        timer = setTimeout(type, speed);
      }
    };

    timer = setTimeout(type, 100);
    return () => clearTimeout(timer);
  }, [subtext, isDeleting, wordIndex]);

  // Anime.js v4 entrance timeline sequence
  useEffect(() => {
    const tl = createTimeline({
      defaults: {
        duration: 1000,
        ease: 'outExpo'
      }
    });

    tl.add('.logo-letter', {
      y: [80, 0],
      opacity: [0, 1],
      ease: 'outElastic(1, 0.7)',
      duration: 1200,
      delay: stagger(50)
    })
    .add('.hero-greeting', {
      x: [-40, 0],
      opacity: [0, 1],
      duration: 800
    }, '-=1000') // Overlaps with letter stagger
    .add('.hero-subtitle', {
      y: [20, 0],
      opacity: [0, 1],
      duration: 600
    }, '-=600')
    .add('.hero-desc', {
      y: [20, 0],
      opacity: [0, 1],
      duration: 600
    }, '-=400')
    .add('.hero-cta', {
      y: [20, 0],
      opacity: [0, 1],
      duration: 600
    }, '-=400');
  }, []);

  const nameLetters = "KEERTAN B.J.".split('');

  return (
    <section id="home" className="hero-section">
      {/* Anime.js Background Grid Backdrop */}
      <AnimeGrid />

      <div className="hero-content container">
        <div className="hero-text-area">
          <p className="hero-greeting" style={{ opacity: 0 }}>Hi, my name is</p>
          <h1 className="hero-name glitch" data-text="KEERTAN B.J.">
            {nameLetters.map((char, index) => (
              <span
                key={index}
                className="logo-letter"
                style={{ display: 'inline-block', opacity: 0 }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          <h2 className="hero-subtitle" style={{ opacity: 0 }}>
            I am a <span className="typing-text">{subtext}</span>
            <span className="type-cursor">|</span>
          </h2>
          <p className="hero-desc" style={{ opacity: 0 }}>
            A software engineer specializing in AI-native backend systems and production-grade web applications. I design scalable FastAPI microservices, construct multi-agent LangGraph pipelines, and architect high-performance, real-time architectures.
          </p>
          <div className="hero-cta" style={{ opacity: 0 }}>
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>

        <Terminal />
      </div>
      <div className="scroll-down-indicator">
        <a href="#about" aria-label="Scroll Down">
          <span className="mouse-icon">
            <span className="mouse-wheel"></span>
          </span>
          <span className="scroll-arrow"></span>
        </a>
      </div>
    </section>
  );
}
