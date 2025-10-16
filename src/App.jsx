import React from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import TechOrbit from './components/TechOrbit';
import CreativeSection from './components/CreativeSection';

export default function App() {
  return (
    <div className="min-h-screen bg-yellow-200 text-black">
      <header className="sticky top-0 z-50 w-full border-b-4 border-black bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="rotate-[-2deg] border-4 border-black bg-yellow-200 px-3 py-1 text-sm font-black shadow-[5px_5px_0_#000]">
            AG
          </a>
          <nav className="flex items-center gap-3">
            <a href="#timeline" className="rounded-none border-2 border-black bg-white px-2 py-1 text-xs font-extrabold shadow-[3px_3px_0_#000]">Timeline</a>
            <a href="#projects" className="rounded-none border-2 border-black bg-white px-2 py-1 text-xs font-extrabold shadow-[3px_3px_0_#000]">Projects</a>
            <a href="#tech" className="rounded-none border-2 border-black bg-white px-2 py-1 text-xs font-extrabold shadow-[3px_3px_0_#000]">Tech</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Timeline />
        <Projects />
        <div id="tech">
          <TechOrbit />
        </div>
        <CreativeSection />
      </main>

      <footer className="border-t-4 border-black bg-white py-8">
        <div className="mx-auto max-w-7xl px-6">
          <p className="rotate-[-1deg] border-4 border-black bg-lime-300 px-4 py-2 text-sm font-black shadow-[5px_5px_0_#000]">
            © {new Date().getFullYear()} Anchal Gupta — Built with love, motion, and chunky borders.
          </p>
        </div>
      </footer>
    </div>
  );
}
