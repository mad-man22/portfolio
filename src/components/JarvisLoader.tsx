import { useEffect, useState } from 'react';
import { animate } from 'animejs';

interface JarvisLoaderProps {
  onComplete: () => void;
}

export default function JarvisLoader({ onComplete }: JarvisLoaderProps) {
  const [percent, setPercent] = useState(0);
  const [logMsg, setLogMsg] = useState('INITIALIZING BOOT SEQUENCE...');

  useEffect(() => {
    let currentPercent = 0;
    const duration = 2800; // ~2.8 seconds loading screen time
    const intervalTime = 30; // 30ms step updates
    const totalSteps = duration / intervalTime;
    const stepIncrement = 100 / totalSteps;

    const timer = setInterval(() => {
      currentPercent += stepIncrement;
      const displayPercent = Math.min(100, Math.floor(currentPercent));
      setPercent(displayPercent);

      // Log messages based on percentage thresholds
      if (displayPercent < 20) {
        setLogMsg('> LOADING JARVIS KERNEL SCHEMAS...');
      } else if (displayPercent < 40) {
        setLogMsg('> [OK] KERNEL LOADED. ASSEMBLING FastAPI microservices...');
      } else if (displayPercent < 60) {
        setLogMsg('> [OK] BACKEND APIS COMPILED. COMPILING LANGGRAPH COORDINATION...');
      } else if (displayPercent < 80) {
        setLogMsg('> [OK] AGENTIC RETRY SYSTEM ACTIVE. COMPILING SKILL ANALYZER...');
      } else if (displayPercent < 95) {
        setLogMsg('> [OK] ALL PORTAL HANDLERS READY. VERIFYING SECURE PROTOCOLS...');
      } else {
        setLogMsg('> SYSTEM ONLINE. LOADING KEERTAN.DEV PORTAL...');
      }

      if (currentPercent >= 100) {
        clearInterval(timer);
        
        // Execute exit slide/zoom animation on overlay
        animate('.jarvis-loader-overlay', {
          opacity: 0,
          scale: 1.15,
          duration: 600,
          ease: 'outExpo',
          complete: () => {
            onComplete();
          }
        });
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Generate horizontal lines for the hexagon scan area
  const scanLines = [];
  for (let y = 95; y <= 205; y += 3) {
    scanLines.push(
      <line
        key={y}
        x1={90}
        y1={y}
        x2={210}
        y2={y}
        stroke="#ff5f56"
        strokeWidth={1}
        opacity={0.35}
        className="scanning-line"
      />
    );
  }

  return (
    <div className="jarvis-loader-overlay">
      <div className="jarvis-hud-container">
        <svg className="jarvis-hud" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Neon Glow Filter */}
            <filter id="hud-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            
            {/* Hexagon Area Clip Path */}
            <clipPath id="hex-clip">
              <polygon points="150,95 197.6,122.5 197.6,177.5 150,205 102.4,177.5 102.4,122.5" />
            </clipPath>
          </defs>

          {/* Outer Segmented Ring (6 Color Zones) */}
          <g filter="url(#hud-glow)">
            {/* Red Arc */}
            <circle cx="150" cy="150" r="130" stroke="#ff5f56" strokeWidth="4" strokeDasharray="115 700" fill="none" transform="rotate(0 150 150)" />
            {/* Orange Arc */}
            <circle cx="150" cy="150" r="130" stroke="#ffbd2e" strokeWidth="4" strokeDasharray="115 700" fill="none" transform="rotate(60 150 150)" />
            {/* Green Arc */}
            <circle cx="150" cy="150" r="130" stroke="#27c93f" strokeWidth="4" strokeDasharray="115 700" fill="none" transform="rotate(120 150 150)" />
            {/* Cyan Arc */}
            <circle cx="150" cy="150" r="130" stroke="#00f2fe" strokeWidth="4" strokeDasharray="115 700" fill="none" transform="rotate(180 150 150)" />
            {/* Blue Arc */}
            <circle cx="150" cy="150" r="130" stroke="#4facfe" strokeWidth="4" strokeDasharray="115 700" fill="none" transform="rotate(240 150 150)" />
            {/* Purple Arc */}
            <circle cx="150" cy="150" r="130" stroke="#a855f7" strokeWidth="4" strokeDasharray="115 700" fill="none" transform="rotate(300 150 150)" />
          </g>

          {/* Middle Dials & Ticks */}
          <circle cx="150" cy="150" r="118" stroke="rgba(255,255,255,0.06)" strokeWidth="6" strokeDasharray="2 4" fill="none" />
          <circle cx="150" cy="150" r="112" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" />

          {/* Rotating Dials */}
          <circle
            cx="150"
            cy="150"
            r="102"
            stroke="#00f2fe"
            strokeWidth="2"
            strokeDasharray="80 300"
            fill="none"
            className="spin-cw"
            style={{ transformOrigin: 'center' }}
            filter="url(#hud-glow)"
          />
          <circle
            cx="150"
            cy="150"
            r="96"
            stroke="#ffbd2e"
            strokeWidth="1.5"
            strokeDasharray="140 200"
            fill="none"
            className="spin-ccw"
            style={{ transformOrigin: 'center' }}
            filter="url(#hud-glow)"
          />
          <circle
            cx="150"
            cy="150"
            r="90"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            strokeDasharray="30 40 15 35"
            fill="none"
            className="spin-cw"
            style={{ transformOrigin: 'center' }}
          />

          {/* Center Hexagonal Scanning Grid */}
          <g clipPath="url(#hex-clip)">
            {/* Pulsating Hexagon Background Scanlines */}
            {scanLines}
          </g>
          {/* Hexagon Border Outline */}
          <polygon
            points="150,95 197.6,122.5 197.6,177.5 150,205 102.4,177.5 102.4,122.5"
            stroke="rgba(255, 95, 86, 0.4)"
            strokeWidth="2"
            fill="none"
          />

          {/* Red HUD Scan Chart Waveform Curve (Dotted Path) */}
          <path
            d="M 105,190 Q 120,130 150,122 T 195,120"
            fill="none"
            stroke="#ff5f56"
            strokeWidth="4"
            strokeDasharray="1 6"
            strokeLinecap="round"
            filter="url(#hud-glow)"
            className="hud-chart-path"
          />
        </svg>

        {/* HUD Data Output Labels */}
        <div className="jarvis-progress-label">
          <span className="jarvis-glitch">{percent}%</span>
        </div>
        <div className="jarvis-log-console">
          <p className="jarvis-log-msg">{logMsg}</p>
        </div>
      </div>
    </div>
  );
}
