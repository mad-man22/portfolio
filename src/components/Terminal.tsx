import React, { useState, useEffect, useRef } from 'react';

interface OutputLine {
  text: string;
  type?: 'system' | 'prompt' | 'error' | 'success' | 'default';
  cmdEcho?: string;
}

export default function Terminal() {
  const [history, setHistory] = useState<OutputLine[]>([
    { text: "Initializing secure session with host keertan.dev...", type: "system" },
    { text: "Connection established. Type 'help' for a list of available commands.", type: "system" },
    { text: `Last login: ${new Date().toString().slice(0, 21)} on ttys001`, type: "default" }
  ]);
  const [inputVal, setInputVal] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const commandsList: Record<string, string> = {
    'help': 'Display list of available instructions.',
    'whoami': 'Information summary and professional summary.',
    'skills': 'Print core technical skills and tools.',
    'projects': 'Provide highlights and repositories of major projects.',
    'experience': 'Details on internship experience at Talencia Global.',
    'contact': 'List direct email, phone, location and social profiles.',
    'clear': 'Flush terminal console history.',
    'sudo': 'Access superuser privileges (restricted).'
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const val = inputVal.trim().toLowerCase();
      setInputVal("");
      executeCommand(val);
    }
  };

  const executeCommand = (cmd: string) => {
    const newHistory = [...history, { text: cmd, type: "prompt" as const }];

    if (!cmd) {
      setHistory(newHistory);
      return;
    }

    switch (cmd) {
      case 'help':
        let helpStr = 'Available Commands:<br>';
        for (const [name, desc] of Object.entries(commandsList)) {
          helpStr += `  <span class="term-highlight">${name.padEnd(12)}</span> - ${desc}<br>`;
        }
        setHistory([...newHistory, { text: helpStr, type: "default" }]);
        break;

      case 'whoami':
        setHistory([
          ...newHistory,
          {
            text: `<strong>KEERTAN B.J.</strong> - Software Engineer<br>` +
                  `Mandya, Karnataka, India<br><br>` +
                  `AI-native developer who thrives in building API backends, complex agentic LLM flows (LangGraph), ` +
                  `and highly responsive interfaces. Active LeetCode problem solver in Python, Java, and C++.`,
            type: "default"
          }
        ]);
        break;

      case 'skills':
        setHistory([
          ...newHistory,
          {
            text: `<strong>Core Technical Skills:</strong><br>` +
                  `- <span class="term-highlight">Languages:</span> Python, TypeScript, SQL, Java, C++, C#<br>` +
                  `- <span class="term-highlight">AI/ML:</span> LangChain, LangGraph, Gemini, OpenAI, Groq, Prompt Engineering<br>` +
                  `- <span class="term-highlight">Frameworks:</span> FastAPI, Node.js, Express, Django, Next.js, React<br>` +
                  `- <span class="term-highlight">Databases:</span> PostgreSQL, MySQL, Redis, Supabase<br>` +
                  `- <span class="term-highlight">DevOps:</span> Docker, Compose, AWS, Jenkins CI/CD, Git, Vercel`,
            type: "default"
          }
        ]);
        break;

      case 'projects':
        setHistory([
          ...newHistory,
          {
            text: `<strong>Highlighted Projects:</strong><br>` +
                  `- <span class="term-highlight">Multi-Agent Data Pipeline</span> | Python, LangGraph, Gemini<br>` +
                  `  Engineered autonomous agents for structured parsing and retry validators.<br>` +
                  `  URL: github.com/mad-man22/lang-chain-data-generation<br>` +
                  `- <span class="term-highlight">MuseFlow Streaming Platform</span> | Next.js, FastAPI, WebSockets, Redis<br>` +
                  `  Real-time multi-device sync, service decomposition, and AI playlist building.<br>` +
                  `  URL: github.com/mad-man22/museflow_opensource_music_app<br>` +
                  `- <span class="term-highlight">PES Insyt Placement Analytics</span> | React, Supabase, Gemini API<br>` +
                  `  Resume skill-gap analytics tool.<br>` +
                  `  URL: pes-insyt.talenciaglobal.com`,
            type: "default"
          }
        ]);
        break;

      case 'experience':
        setHistory([
          ...newHistory,
          {
            text: `<strong>Talencia Global (Jan 2026 - Apr 2026)</strong><br>` +
                  `Role: Software Engineering Intern — AI & Backend (Remote)<br>` +
                  `- Shipped FastAPI microservices with schema validation and test suites.<br>` +
                  `- Developed multi-agent orchestration pipelines using LangGraph and LangChain.<br>` +
                  `- Managed Jenkins automation, containerized layers with Docker, and SQL structures.`,
            type: "default"
          }
        ]);
        break;

      case 'contact':
        setHistory([
          ...newHistory,
          {
            text: `<strong>Direct Contact Details:</strong><br>` +
                  `- <span class="term-highlight">Email:</span> keertan004@gmail.com<br>` +
                  `- <span class="term-highlight">Phone:</span> +91 96322 08332<br>` +
                  `- <span class="term-highlight">GitHub:</span> github.com/mad-man22<br>` +
                  `- <span class="term-highlight">LinkedIn:</span> linkedin.com/in/keertan-b-j-816aa1214<br>` +
                  `- <span class="term-highlight">LeetCode:</span> leetcode.com/u/Keertan004<br>` +
                  `- <span class="term-highlight">HackerRank:</span> hackerrank.com/profile/keertan004`,
            type: "default"
          }
        ]);
        break;

      case 'clear':
        setHistory([]);
        break;

      case 'sudo':
        setHistory([
          ...newHistory,
          {
            text: `Permission denied: user does not have superuser privileges.<br>` +
                  `<span class="text-muted">Nice try! Sudo access is locked to administrative roles.</span>`,
            type: "error"
          }
        ]);
        break;

      default:
        setHistory([
          ...newHistory,
          {
            text: `bash: command not found: ${cmd}. Type <span class="term-highlight">'help'</span> for instructions.`,
            type: "error"
          }
        ]);
    }
  };

  return (
    <div className="hero-terminal-area" id="terminal-section" onClick={focusInput}>
      <div className="terminal-window">
        <div className="terminal-bar">
          <div className="terminal-buttons">
            <span className="btn-term close"></span>
            <span className="btn-term minimize"></span>
            <span className="btn-term expand"></span>
          </div>
          <div className="terminal-title">keertan@server:~</div>
          <div className="terminal-status">
            <span className="pulse-indicator"></span> online
          </div>
        </div>
        <div className="terminal-body" ref={bodyRef}>
          <div className="terminal-output">
            {history.map((line, idx) => {
              if (line.type === 'prompt') {
                return (
                  <div key={idx} className="output-line">
                    <span className="terminal-prompt">keertan@dev:~$</span> {line.text}
                  </div>
                );
              }
              const className =
                line.type === 'system'
                  ? 'system-msg'
                  : line.type === 'error'
                  ? 'error-text'
                  : '';
              return (
                <div
                  key={idx}
                  className={`output-line ${className}`}
                  dangerouslySetInnerHTML={{ __html: line.text }}
                />
              );
            })}
          </div>
          <div className="terminal-input-row">
            <span className="terminal-prompt">keertan@dev:~$</span>
            <input
              type="text"
              id="terminal-input"
              ref={inputRef}
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              placeholder="Type command here..."
              aria-label="Terminal command input"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
