import React, { useState, useEffect } from 'react';
import './_evidence.css';

export function Evidence() {
  const [inferenceState, setInferenceState] = useState<'idle' | 'running' | 'complete'>('idle');
  const [progress, setProgress] = useState(0);
  const [visibleBoxes, setVisibleBoxes] = useState<number[]>([]);
  const [logs, setLogs] = useState<string[]>([]);
  const [metrics, setMetrics] = useState({ trainAcc: 0, valAcc: 0 });

  const boxes = [
    { id: 1, x: '20%', y: '30%', w: '15%', h: '25%', label: 'SHIP', conf: '0.94', delay: 1000 },
    { id: 2, x: '60%', y: '15%', w: '12%', h: '20%', label: 'SHIP', conf: '0.87', delay: 2500 },
    { id: 3, x: '45%', y: '65%', w: '18%', h: '15%', label: 'SHIP', conf: '0.91', delay: 3800 },
    { id: 4, x: '75%', y: '50%', w: '10%', h: '18%', label: 'SHIP', conf: '0.89', delay: 5000 },
  ];

  useEffect(() => {
    // Start sequence
    setTimeout(() => {
      setInferenceState('running');
      setLogs(prev => [...prev, '> INITIALIZING YOLOv3 MODEL...', '> LOADING WEIGHTS...', '> STARTING INFERENCE ON SATELLITE FEED...']);
    }, 500);

    // Progress bar and logs simulation
    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      currentProgress += Math.random() * 5;
      if (currentProgress > 100) currentProgress = 100;
      setProgress(currentProgress);

      if (currentProgress > 20 && currentProgress < 25) setLogs(prev => [...prev, '> DETECTING FEATURES: LAYER 1-15...']);
      if (currentProgress > 45 && currentProgress < 50) setLogs(prev => [...prev, '> APPLYING NON-MAX SUPPRESSION...']);
      if (currentProgress > 70 && currentProgress < 75) setLogs(prev => [...prev, '> CALCULATING BOUNDING BOXES...']);
      if (currentProgress > 90 && currentProgress < 95) setLogs(prev => [...prev, '> FINALIZING CONFIDENCE SCORES...']);

      if (currentProgress === 100) {
        clearInterval(progressInterval);
        setInferenceState('complete');
        setLogs(prev => [...prev, '> INFERENCE COMPLETE. 4 TARGETS ACQUIRED.', '> READY.']);
        setMetrics({ trainAcc: 95, valAcc: 92 });
      }
    }, 200);

    // Box appearance simulation
    boxes.forEach(box => {
      setTimeout(() => {
        setVisibleBoxes(prev => [...prev, box.id]);
        setLogs(prev => [...prev, `> TARGET ACQUIRED AT [${box.x}, ${box.y}] CONF: ${box.conf}`]);
      }, box.delay + 500); // Add offset for the idle start
    });

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f14] text-slate-300 font-mono flex flex-col overflow-hidden selection:bg-green-900 selection:text-green-400">
      
      {/* Top minimal nav */}
      <nav className="fixed top-0 w-full p-4 flex justify-between items-center z-50 text-xs tracking-widest text-slate-500 opacity-60 hover:opacity-100 transition-opacity">
        <div className="flex gap-4">
          <span>SYS.OP.YASHWANTH</span>
          <span className="animate-pulse-fast text-green-500">● ONLINE</span>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/yashwanthbooram" target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors">GH</a>
          <a href="https://linkedin.com/in/yashwanthbooram" target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors">IN</a>
          <a href="mailto:booramyashwanth@gmail.com" className="hover:text-green-400 transition-colors">MAIL</a>
        </div>
      </nav>

      {/* Main content grid */}
      <main className="flex-1 flex flex-col lg:flex-row pt-16 lg:pt-0">
        
        {/* Left: Data Terminal Sidebar (30%) */}
        <div className="w-full lg:w-[30%] border-r border-slate-800/50 bg-[#0c1219] flex flex-col p-6 z-10 relative shadow-[10px_0_30px_rgba(0,0,0,0.5)]">
          {/* Decorative scanner line in sidebar */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>

          <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full space-y-8">
            
            {/* System Status Block */}
            <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-slate-800 pb-2">
                <h2 className="text-green-500 text-sm tracking-[0.2em] uppercase">System Status</h2>
                <span className={`text-xs ${inferenceState === 'complete' ? 'text-green-400' : 'text-amber-500 animate-blink'}`}>
                  {inferenceState === 'running' ? 'PROCESSING' : inferenceState === 'complete' ? 'STANDBY' : 'INIT'}
                </span>
              </div>
              
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">TASK</span>
                  <span className="text-slate-300 text-right">Ship Detection in Satellite Imagery</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">MODEL</span>
                  <span className="text-slate-300">YOLOv3 Deep Learning</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">LOCATION</span>
                  <span className="text-slate-300">India Sector</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="pt-2 space-y-1">
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>INFERENCE PROGRESS</span>
                  <span>{Math.floor(progress)}%</span>
                </div>
                <div className="h-1 bg-slate-800 w-full overflow-hidden">
                  <div 
                    className="h-full bg-green-500 transition-all duration-200 ease-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Metrics Block - Reveals on completion */}
            <div className={`space-y-4 transition-all duration-1000 ${inferenceState === 'complete' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="border-b border-slate-800 pb-2">
                <h2 className="text-amber-500 text-sm tracking-[0.2em] uppercase">Performance Metrics</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#111820] p-3 border border-slate-800/50">
                  <div className="text-[10px] text-slate-500 mb-1">TRAINING ACCURACY</div>
                  <div className="text-2xl text-green-400 font-light">~{metrics.trainAcc}%</div>
                </div>
                <div className="bg-[#111820] p-3 border border-slate-800/50">
                  <div className="text-[10px] text-slate-500 mb-1">VALIDATION ACCURACY</div>
                  <div className="text-2xl text-green-400 font-light">~{metrics.valAcc}%</div>
                </div>
              </div>
            </div>

            {/* Terminal Log Output */}
            <div className="flex-1 min-h-[150px] bg-[#080c10] border border-slate-800 p-3 font-mono text-[10px] text-slate-400 overflow-y-auto relative">
              <div className="absolute inset-0 bg-noise pointer-events-none"></div>
              <div className="space-y-1 relative z-10">
                {logs.map((log, i) => (
                  <div key={i} className={log.includes('TARGET ACQUIRED') ? 'text-green-400' : ''}>
                    {log}
                  </div>
                ))}
                {inferenceState === 'running' && <div className="animate-blink text-green-500">_</div>}
              </div>
            </div>

            {/* Identity Reveal Block - The payoff */}
            <div className={`pt-8 transition-all duration-1000 delay-500 ${inferenceState === 'complete' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="space-y-1 mb-6">
                <div className="text-[10px] text-amber-500 tracking-widest">OPERATOR IDENTITY</div>
                <h1 className="text-3xl font-sans font-medium text-white tracking-tight">Yashwanth Booram</h1>
                <p className="text-sm text-slate-400">Machine Learning / Full-Stack Engineer</p>
                <div className="inline-block mt-2 px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400 text-[10px] rounded-sm">
                  AVAILABLE FOR OPPORTUNITIES
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button className="w-full py-3 bg-green-500 hover:bg-green-400 text-black text-xs font-bold tracking-widest transition-colors flex items-center justify-center gap-2 group">
                  VIEW FULL PROJECT 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <button className="w-full py-3 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-400 text-xs font-bold tracking-widest transition-colors">
                  SEE ALL WORK
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Right: The Visualization Canvas (70%) */}
        <div className="flex-1 relative bg-[#05080b] overflow-hidden min-h-[50vh] lg:min-h-screen border-t lg:border-t-0 border-slate-800">
          
          {/* Fake Satellite Texture Background */}
          <div className="absolute inset-0 opacity-40 mix-blend-screen" style={{
            backgroundImage: `
              linear-gradient(rgba(17, 24, 39, 0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(17, 24, 39, 0.8) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
          
          <div className="absolute inset-0 bg-noise opacity-20"></div>

          {/* Large subtle geographical contours (abstract) */}
          <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
             <path d="M0,200 Q150,300 300,150 T600,200 T1000,100" fill="none" stroke="#22c55e" strokeWidth="1" />
             <path d="M-100,400 Q250,500 400,350 T800,400 T1200,300" fill="none" stroke="#22c55e" strokeWidth="0.5" />
          </svg>

          {/* Crosshairs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] border border-slate-800/30 rounded-full flex items-center justify-center">
            <div className="w-[80%] h-[80%] border border-slate-800/20 rounded-full flex items-center justify-center">
              <div className="w-px h-full bg-slate-800/40 absolute"></div>
              <div className="h-px w-full bg-slate-800/40 absolute"></div>
            </div>
          </div>

          {/* The Scanning Line */}
          {inferenceState === 'running' && (
            <div className="absolute top-0 left-0 w-full h-[2px] bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)] animate-scanline z-20">
              <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-green-500/10 to-transparent -translate-y-full"></div>
            </div>
          )}

          {/* Bounding Boxes Container */}
          <div className="absolute inset-0 z-30">
            {boxes.map(box => (
              visibleBoxes.includes(box.id) && (
                <div 
                  key={box.id} 
                  className="absolute animate-fade-up-in"
                  style={{ left: box.x, top: box.y, width: box.w, height: box.h }}
                >
                  {/* SVG for the drawn rectangle */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <rect 
                      x="0" y="0" width="100%" height="100%" 
                      fill="none" 
                      stroke="#22c55e" 
                      strokeWidth="2"
                      className="animate-draw-box"
                    />
                  </svg>
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-green-400"></div>
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-green-400"></div>
                  <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-green-400"></div>
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-green-400"></div>
                  
                  {/* Label */}
                  <div className="absolute -top-6 left-0 bg-amber-500/20 border border-amber-500/50 text-amber-400 text-[10px] px-1.5 py-0.5 whitespace-nowrap flex gap-2 animate-fade-up-in" style={{ animationDelay: '1.5s' }}>
                    <span className="font-bold">{box.label}</span>
                    <span>{box.conf}</span>
                  </div>
                  
                  {/* Target Center Dot */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-green-400 rounded-full opacity-50"></div>
                </div>
              )
            ))}
          </div>
          
          {/* Overlay Vingette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,8,11,0.8)_100%)] pointer-events-none z-40"></div>

          {/* HUD Coordinates (decorative) */}
          <div className="absolute top-4 right-4 text-[10px] text-slate-600 text-right z-40 space-y-1 font-mono">
            <div>LAT: 17.3850° N</div>
            <div>LON: 78.4867° E</div>
            <div>ALT: 500KM</div>
            <div className="text-green-900 animate-pulse-fast pt-2">REC O O</div>
          </div>
          
          <div className="absolute bottom-4 right-4 text-[10px] text-slate-600 z-40 font-mono">
            <div>YOLOv3_CORE // V.4.2.1</div>
          </div>

        </div>
      </main>
    </div>
  );
}
