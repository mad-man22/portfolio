import { useState, useRef, useEffect } from 'react';
import { soundFX } from '../utils/audio';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <div>
          <p className="term-green">KEERTAN.DEV INTERACTIVE NEURAL SHELL v3.0</p>
          <p className="term-dim">
            Type <span className="term-cyan">'help'</span> or click any suggestion chip below to execute commands.
          </p>
        </div>
      ),
    },
  ]);

  const terminalBodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const runCommand = (cmdStr: string) => {
    const cmd = cmdStr.trim().toLowerCase();
    soundFX.playClick();
    if (!cmd) return;

    let output: React.ReactNode;

    switch (cmd) {
      case 'help':
        output = (
          <div className="term-help-grid">
            <p><span className="term-cyan">whoami</span> - Display developer biography</p>
            <p><span className="term-pink">photo</span> - Render Keertan's portrait image in CLI</p>
            <p><span className="term-yellow">projects</span> - List all 5 repositories & apps</p>
            <p><span className="term-green">skills</span> - Output full-stack & AI technology matrix</p>
            <p><span className="term-purple">contact</span> - Display email, phone & social profiles</p>
            <p><span className="term-cyan">sudo hire</span> - Executive hiring protocol</p>
            <p><span className="term-red">clear</span> - Clear terminal buffer</p>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div>
            <p><strong>KEERTAN B.J.</strong> — Software Engineer (AI & Backend)</p>
            <p>B.E. Information Science & Engineering (2022-2026), PES College of Engineering, Mandya.</p>
            <p>4-month Backend AI Engineering Intern at <strong>Talencia Global</strong> (FastAPI, LangChain, LangGraph, AWS).</p>
            <p>Creator of <strong>MuseFlow AI</strong> (200+ active Android downloads in 1st week).</p>
          </div>
        );
        break;

      case 'photo':
        output = (
          <div className="term-photo-output">
            <img src="/keertan-photo.jpg" alt="Keertan B.J." className="term-img" />
            <p className="term-cyan">[KEERTAN_BJ_PORTRAIT.JPG] Loaded into Neural Buffer.</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="term-projects-list">
            <p className="term-pink">1. MuseFlow — AI Music Streaming App (Web + Android) [200+ Downloads]</p>
            <p className="term-cyan">2. PES Insyt — AI Placement Analytics Dashboard (Live)</p>
            <p className="term-green">3. Restaurant SaaS — Contactless Ordering Platform (Live Multi-Tenant)</p>
            <p className="term-yellow">4. Django Homestay Booking — Dynamic Pricing Reservation System</p>
            <p className="term-purple">5. Next.js Attendance System — Automated QR Tracking</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div>
            <p><span className="term-cyan">Languages:</span> Python, TypeScript, JavaScript, Java, SQL, C, C++, C#</p>
            <p><span className="term-pink">Frontend:</span> React.js, Next.js, React Native (Expo), Tailwind CSS, WebSockets</p>
            <p><span className="term-green">Backend:</span> FastAPI, Node.js, Express, Django, REST APIs, Microservices, Pydantic</p>
            <p><span className="term-yellow">AI/ML:</span> LangChain, LangGraph, RAG, Gemini API, Ollama, Groq</p>
            <p><span className="term-purple">Cloud/DevOps:</span> AWS (EC2, VPC, IAM), Docker, Docker Compose, Jenkins CI/CD, Vercel</p>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div>
            <p>Email: <a href="mailto:keertan004@gmail.com" className="term-cyan">keertan004@gmail.com</a></p>
            <p>Phone: <span className="term-green">+91 93538 46678</span></p>
            <p>GitHub: <a href="https://github.com/mad-man22" target="_blank" rel="noreferrer" className="term-pink">github.com/mad-man22</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/keertan-b-j-816aa1214" target="_blank" rel="noreferrer" className="term-yellow">linkedin.com/in/keertan-b-j-816aa1214</a></p>
          </div>
        );
        break;

      case 'sudo hire':
      case 'sudo hire-keertan':
        soundFX.playWarp();
        output = (
          <div className="term-hired">
            <p className="term-green">========================================================</p>
            <p className="term-green">&gt;&gt;&gt; ACCESS GRANTED: CANDIDATE KEERTAN B.J. SELECTED!</p>
            <p className="term-cyan">Full-Stack & AI Microservices Expertise Unlocked.</p>
            <p className="term-yellow">Email: keertan004@gmail.com | Phone: +91 93538 46678</p>
            <p className="term-green">========================================================</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        output = (
          <p className="term-red">
            Command not recognized: '{cmd}'. Type <span className="term-cyan">'help'</span> for valid commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output }]);
    setInput('');
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCommand(input);
  };

  return (
    <section id="terminal" className="section-padding terminal-section">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <span className="section-subtitle">COMMAND LINE INTERACTION</span>
          <h2 className="section-title">
            Interactive <span className="text-gradient">Terminal Shell</span>
          </h2>
          <div className="section-line"></div>
        </div>

        {/* Quick Suggestion Chips Bar */}
        <div className="terminal-quick-chips reveal-on-scroll">
          <span className="chips-label">⚡ Quick Run:</span>
          <button className="term-chip" onClick={() => runCommand('sudo hire')}>
            🚀 sudo hire
          </button>
          <button className="term-chip" onClick={() => runCommand('projects')}>
            💻 projects
          </button>
          <button className="term-chip" onClick={() => runCommand('skills')}>
            ⚡ skills
          </button>
          <button className="term-chip" onClick={() => runCommand('photo')}>
            📷 photo
          </button>
          <button className="term-chip" onClick={() => runCommand('whoami')}>
            👤 whoami
          </button>
          <button className="term-chip" onClick={() => runCommand('contact')}>
            📧 contact
          </button>
          <button className="term-chip chip-clear" onClick={() => runCommand('clear')}>
            🧹 clear
          </button>
        </div>

        <div className="terminal-window glass-panel reveal-on-scroll">
          {/* Top Window Title Bar */}
          <div className="terminal-topbar">
            <div className="terminal-buttons">
              <span className="btn-dot close"></span>
              <span className="btn-dot minimize"></span>
              <span className="btn-dot maximize"></span>
            </div>
            <div className="terminal-title">keertan@dev-machine:~ (zsh)</div>
          </div>

          {/* Terminal History Output */}
          <div className="terminal-body" ref={terminalBodyRef}>
            {history.map((item, index) => (
              <div key={index} className="history-entry">
                <div className="prompt-line">
                  <span className="prompt-user">keertan@dev-portal</span>
                  <span className="prompt-separator">:</span>
                  <span className="prompt-dir">~</span>
                  <span className="prompt-char">$</span>
                  <span className="entered-command">{item.command}</span>
                </div>
                <div className="command-output">{item.output}</div>
              </div>
            ))}

            {/* Live Input Form */}
            <form onSubmit={handleCommandSubmit} className="prompt-line live-input-line">
              <span className="prompt-user">keertan@dev-portal</span>
              <span className="prompt-separator">:</span>
              <span className="prompt-dir">~</span>
              <span className="prompt-char">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type 'help', 'photo', 'projects'..."
                className="terminal-input-field"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
