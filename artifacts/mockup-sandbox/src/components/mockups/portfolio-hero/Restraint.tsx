import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import "./_restraint.css";

export function Restraint() {
  return (
    <div className="relative min-h-[100dvh] w-full bg-[#0a0a0a] text-zinc-100 overflow-hidden flex flex-col items-center justify-center font-sans selection:bg-zinc-800 selection:text-zinc-100">
      
      {/* Background Texture - Barely visible grid + subtle radial gradient */}
      <div className="absolute inset-0 z-0 bg-subtle-grid pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl px-6 sm:px-12">
        
        {/* Name - Extraordinary Typography */}
        <h1 className="font-['Playfair_Display'] text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[1.1] text-center animate-slow-fade-1 text-zinc-100 font-light">
          Yashwanth<br />
          <span className="italic opacity-80 pl-8 sm:pl-16">Booram</span>
        </h1>

        {/* Precise Sentence */}
        <p className="mt-12 md:mt-16 text-sm sm:text-base tracking-[0.2em] uppercase text-zinc-400 font-light animate-slow-fade-2 text-center">
          Machine learning + full-stack engineering.
        </p>
      </div>

      {/* Navigation item - subtle corner placement */}
      <div className="absolute top-8 left-8 sm:top-12 sm:left-12 animate-slow-fade-2">
        <span className="text-xs tracking-widest text-zinc-500 uppercase font-light">01 / available</span>
      </div>

      {/* Tiny icon links - bottom right */}
      <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 flex flex-col gap-6 animate-slow-fade-3">
        <a 
          href="https://github.com/yashwanthbooram" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-zinc-600 hover:text-zinc-200 transition-colors duration-500"
          aria-label="GitHub"
        >
          <Github strokeWidth={1.5} className="w-4 h-4" />
        </a>
        <a 
          href="https://linkedin.com/in/yashwanthbooram" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-zinc-600 hover:text-zinc-200 transition-colors duration-500"
          aria-label="LinkedIn"
        >
          <Linkedin strokeWidth={1.5} className="w-4 h-4" />
        </a>
        <a 
          href="mailto:booramyashwanth@gmail.com" 
          className="text-zinc-600 hover:text-zinc-200 transition-colors duration-500"
          aria-label="Email"
        >
          <Mail strokeWidth={1.5} className="w-4 h-4" />
        </a>
      </div>

      {/* Scroll indicator - bottom center */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-slow-fade-3">
        <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-600">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-600 to-transparent" />
      </div>

    </div>
  );
}
