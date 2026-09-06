import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import './_terminal.css';

type Command = {
  cmd: string;
  output: React.ReactNode;
};

const commands: Command[] = [
  {
    cmd: 'whoami',
    output: (
      <div className="mb-4">
        <div>Name: Yashwanth Booram</div>
        <div>Title: Machine Learning / Full-Stack Engineer</div>
        <div>Location: Hyderabad, Telangana</div>
        <div>Status: Available for opportunities</div>
      </div>
    ),
  },
  {
    cmd: 'cat skills.json',
    output: (
      <div className="mb-4 whitespace-pre">
{`{
  "languages": ["Python", "JavaScript", "TypeScript", "C++"],
  "machine_learning": ["TensorFlow", "PyTorch", "Scikit-Learn", "NLP", "Computer Vision"],
  "frontend": ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  "backend": ["Node.js", "Express", "Django", "FastAPI"],
  "databases": ["PostgreSQL", "MongoDB", "Redis"],
  "tools": ["Git", "Docker", "AWS", "Linux"]
}`}
      </div>
    ),
  },
  {
    cmd: 'ls projects/',
    output: (
      <div className="mb-4 space-y-2">
        <div>
          <span className="text-[#00ff41] font-bold">nlp-sentiment-engine/</span>
          <p className="text-gray-400 pl-4 mt-1 text-sm border-l border-gray-700 ml-1">
            Real-time sentiment analysis API using fine-tuned BERT models. Handles 10k+ req/sec.
          </p>
        </div>
        <div>
          <span className="text-[#00ff41] font-bold">distributed-task-queue/</span>
          <p className="text-gray-400 pl-4 mt-1 text-sm border-l border-gray-700 ml-1">
            High-performance Redis-backed job queue built in Go with React monitoring dashboard.
          </p>
        </div>
        <div>
          <span className="text-[#00ff41] font-bold">personal-portfolio/</span>
          <p className="text-gray-400 pl-4 mt-1 text-sm border-l border-gray-700 ml-1">
            Terminal-themed interactive resume. You're looking at it.
          </p>
        </div>
      </div>
    ),
  }
];

export function Terminal() {
  const [history, setHistory] = useState<{ cmd: string; output?: React.ReactNode }[]>([]);
  const [currentCmdIndex, setCurrentCmdIndex] = useState(0);
  const [currentTypedCmd, setCurrentTypedCmd] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sequenceComplete, setSequenceComplete] = useState(false);
  
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom whenever history or typed command changes
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, currentTypedCmd]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const runSequence = () => {
      if (currentCmdIndex >= commands.length) {
        setSequenceComplete(true);
        setIsTyping(false);
        return;
      }

      const targetCmd = commands[currentCmdIndex].cmd;
      setIsTyping(true);

      const typeChar = (charIndex: number) => {
        if (charIndex < targetCmd.length) {
          setCurrentTypedCmd(targetCmd.substring(0, charIndex + 1));
          // Randomize typing speed for realism (50-150ms per char)
          const typingDelay = Math.random() * 100 + 50;
          timeoutId = setTimeout(() => typeChar(charIndex + 1), typingDelay);
        } else {
          // Finished typing command, wait a moment before showing output
          timeoutId = setTimeout(() => {
            setHistory(prev => [
              ...prev,
              { cmd: targetCmd, output: commands[currentCmdIndex].output }
            ]);
            setCurrentTypedCmd('');
            setCurrentCmdIndex(prev => prev + 1);
            
            // Wait before starting next command
            timeoutId = setTimeout(runSequence, 1000);
          }, 400); // 400ms pause after pressing "enter"
        }
      };

      // Initial pause before typing starts
      timeoutId = setTimeout(() => typeChar(0), currentCmdIndex === 0 ? 1500 : 500);
    };

    runSequence();

    return () => clearTimeout(timeoutId);
  }, [currentCmdIndex]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#00ff41] font-mono selection:bg-[#00ff41] selection:text-black flex flex-col relative overflow-hidden crt-effect">
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[#00ff41] opacity-[0.02] pointer-events-none"></div>

      {/* Header / Nav */}
      <header className="p-6 flex justify-between items-center z-10">
        <div className="text-xl font-bold tracking-tighter border border-[#00ff41] p-2 hover:bg-[#00ff41] hover:text-black transition-colors cursor-default">
          YB
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/yashwanthbooram" target="_blank" rel="noreferrer" className="text-[#00ff41]/70 hover:text-[#00ff41] transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/yashwanthbooram" target="_blank" rel="noreferrer" className="text-[#00ff41]/70 hover:text-[#00ff41] transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:booramyashwanth@gmail.com" className="text-[#00ff41]/70 hover:text-[#00ff41] transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 z-10">
        
        {/* Terminal Window */}
        <div className="w-full max-w-4xl bg-[#111] rounded-lg shadow-2xl shadow-[#00ff41]/10 border border-gray-800 flex flex-col h-[60vh] max-h-[600px] overflow-hidden">
          
          {/* Mac/Linux Chrome */}
          <div className="h-8 bg-[#1a1a1a] border-b border-gray-800 flex items-center px-4 relative">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-xs text-gray-500 font-sans">yashwanth@macbook-pro:~</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div 
            ref={terminalRef}
            className="flex-1 p-4 sm:p-6 overflow-y-auto text-sm sm:text-base scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent"
          >
            <div className="mb-4 text-[#00ff41]/80">
              Last login: {new Date().toDateString()} on ttys001<br/>
              Type 'help' for a list of available commands.
            </div>

            {/* History */}
            {history.map((item, i) => (
              <div key={i} className="mb-2">
                <div className="flex">
                  <span className="text-blue-400 mr-2">~/portfolio</span>
                  <span className="text-gray-400 mr-2">$</span>
                  <span>{item.cmd}</span>
                </div>
                {item.output && (
                  <div className="mt-2 text-gray-300">
                    {item.output}
                  </div>
                )}
              </div>
            ))}

            {/* Current typing line */}
            {!sequenceComplete && (
              <div className="flex items-center">
                <span className="text-blue-400 mr-2">~/portfolio</span>
                <span className="text-gray-400 mr-2">$</span>
                <span>{currentTypedCmd}</span>
                {isTyping && <span className="terminal-cursor"></span>}
              </div>
            )}

            {/* Final blinking cursor when done */}
            {sequenceComplete && (
              <div className="flex items-center">
                <span className="text-blue-400 mr-2">~/portfolio</span>
                <span className="text-gray-400 mr-2">$</span>
                <span className="terminal-cursor"></span>
              </div>
            )}
          </div>
        </div>

      </main>

      {/* Scroll indicator */}
      <div className={`p-8 flex justify-center z-10 transition-opacity duration-1000 ${sequenceComplete ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center text-gray-500 animate-bounce">
          <span className="text-xs uppercase tracking-widest mb-2">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
