import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-yellow-200">
      <div className="mx-auto flex h-full max-w-7xl flex-col-reverse items-center gap-10 px-6 py-16 md:flex-row md:py-24">
        <div className="relative z-10 w-full md:w-1/2">
          <span className="inline-block rotate-[-2deg] border-4 border-black bg-white px-3 py-1 text-xs font-black uppercase tracking-widest shadow-[6px_6px_0_#000]">
            Portfolio • Neo-Brutal
          </span>
          <h1 className="mt-6 text-5xl font-black leading-tight text-black drop-shadow-[6px_6px_0_#000] sm:text-6xl">
            Anchal Gupta
          </h1>
          <p className="mt-4 max-w-prose rotate-[-1deg] border-4 border-black bg-white p-4 text-lg font-medium shadow-[6px_6px_0_#000]">
            Creative developer crafting playful, interactive web experiences. I design with bold shapes, heavy borders, and delightful motion.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-none border-4 border-black bg-lime-300 px-5 py-3 text-base font-extrabold shadow-[6px_6px_0_#000] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[0_0_0_#000]"
            >
              See Projects →
            </a>
            <a
              href="#timeline"
              className="inline-flex items-center gap-2 rounded-none border-4 border-black bg-white px-5 py-3 text-base font-extrabold shadow-[6px_6px_0_#000] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[0_0_0_#000]"
            >
              Experience
            </a>
          </div>
        </div>

        <div className="relative w-full md:w-1/2">
          <div className="h-[55vh] w-full rounded-lg border-4 border-black bg-white shadow-[10px_10px_0_#000] md:h-[70vh]">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-yellow-200/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-yellow-200" />
    </section>
  );
}
