import { useEffect, useState, useRef } from 'react';
import { animate } from 'animejs';
import { soundFX } from '../utils/audio';

interface JarvisLoaderProps {
  onComplete: () => void;
}

export default function JarvisLoader({ onComplete }: JarvisLoaderProps) {
  const [percent, setPercent] = useState(0);
  const [logMsg, setLogMsg] = useState('SYSTEM INIT: ENGAGING QUANTUM REACTOR...');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Matrix Digital Rain Background Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '010101010101KEERTAN0101FASTAPI0101LANGGRAPH0101MUSEFLOW0101AI';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    let animationId: number;

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(5, 5, 12, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00f2fe';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Alternate glowing green/cyan/magenta text for matrix rain
        if (i % 3 === 0) {
          ctx.fillStyle = '#ff007f';
        } else if (i % 5 === 0) {
          ctx.fillStyle = '#39ff14';
        } else {
          ctx.fillStyle = '#00f2fe';
        }

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(drawMatrix);
    };

    drawMatrix();

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Loading Progress Logic
  useEffect(() => {
    let currentPercent = 0;
    const duration = 3000;
    const intervalTime = 30;
    const totalSteps = duration / intervalTime;
    const stepIncrement = 100 / totalSteps;

    const logs = [
      { pct: 0, msg: '> BOOT SEQUENCE: INITIALIZING NEURAL CORE V3.0...' },
      { pct: 15, msg: '> LOADING MICROSERVICES GATEWAY & FASTAPI ENDPOINTS...' },
      { pct: 30, msg: '> SYNCING LANGCHAIN & LANGGRAPH AI MULTI-AGENTS...' },
      { pct: 50, msg: '> MOUNTING MUSEFLOW WEBRTC P2P JAM ROOMS & AUDIO STREAM...' },
      { pct: 70, msg: '> INJECTING HIGH-SPEED CANVAS PARTICLES & NEON SHADERS...' },
      { pct: 85, msg: '> VERIFYING SECURE WEBSOCKET MATRIX PROTOCOLS...' },
      { pct: 98, msg: '> HYPER-DRIVE ENGAGED. WELCOME TO KEERTAN.DEV PORTAL...' },
    ];

    const timer = setInterval(() => {
      currentPercent += stepIncrement;
      const displayPercent = Math.min(100, Math.floor(currentPercent));
      setPercent(displayPercent);

      soundFX.playTick(400 + displayPercent * 5);

      const foundLog = [...logs].reverse().find((l) => displayPercent >= l.pct);
      if (foundLog) {
        setLogMsg(foundLog.msg);
      }

      if (currentPercent >= 100) {
        clearInterval(timer);
        soundFX.playWarp();

        // Warp out animation
        animate('.quantum-loader-overlay', {
          opacity: 0,
          scale: 1.3,
          duration: 700,
          ease: 'easeOutExpo',
          complete: () => {
            onComplete();
          },
        });
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="quantum-loader-overlay">
      <canvas ref={canvasRef} className="quantum-matrix-canvas" />

      <div className="quantum-hud-center">
        {/* Glowing Reactor Core SVG */}
        <svg className="quantum-hud-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="neon-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff007f" />
              <stop offset="50%" stopColor="#00f2fe" />
              <stop offset="100%" stopColor="#39ff14" />
            </linearGradient>
          </defs>

          {/* Outer Laser Ring */}
          <circle
            cx="200"
            cy="200"
            r="180"
            stroke="url(#gradient1)"
            strokeWidth="3"
            strokeDasharray="20 10 40 10"
            fill="none"
            className="spin-cw-fast"
            filter="url(#neon-glow)"
          />

          {/* Concentric Neon Tech Rings */}
          <circle
            cx="200"
            cy="200"
            r="160"
            stroke="#ff007f"
            strokeWidth="2"
            strokeDasharray="140 90"
            fill="none"
            className="spin-ccw"
            filter="url(#neon-glow)"
          />

          <circle
            cx="200"
            cy="200"
            r="140"
            stroke="#00f2fe"
            strokeWidth="2"
            strokeDasharray="60 120 30 80"
            fill="none"
            className="spin-cw"
            filter="url(#neon-glow)"
          />

          <circle
            cx="200"
            cy="200"
            r="120"
            stroke="#39ff14"
            strokeWidth="1.5"
            strokeDasharray="200 40"
            fill="none"
            className="spin-ccw-fast"
            filter="url(#neon-glow)"
          />

          {/* Hexagonal Core Shield */}
          <polygon
            points="200,100 270,140 270,220 200,260 130,220 130,140"
            stroke="#7928ca"
            strokeWidth="3"
            fill="rgba(121, 40, 202, 0.15)"
            filter="url(#neon-glow)"
            className="pulse-glow"
          />

          {/* Core Energy Waveform */}
          <circle
            cx="200"
            cy="200"
            r="60"
            fill="rgba(0, 242, 254, 0.2)"
            stroke="#00f2fe"
            strokeWidth="3"
            className="pulse-scale"
            filter="url(#neon-glow)"
          />
        </svg>

        {/* Center Percentage Display */}
        <div className="quantum-status-box">
          <div className="quantum-percent-glitch" data-text={`${percent}%`}>
            {percent}%
          </div>
          <div className="quantum-sub-tag">QUANTUM DRIVE</div>
        </div>

        {/* Terminal Diagnostic Message Log */}
        <div className="quantum-terminal-log">
          <span className="quantum-blink-dot"></span>
          <p className="quantum-log-text">{logMsg}</p>
        </div>
      </div>
    </div>
  );
}
