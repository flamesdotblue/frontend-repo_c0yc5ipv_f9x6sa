import React from 'react';

function HTMLIcon() {
  return (
    <svg viewBox="0 0 128 128" className="h-8 w-8">
      <path fill="#E44D26" d="M19 114L9 3h110l-10 111-45 12z"/>
      <path fill="#F16529" d="M64 117l36-10 8-92H64z"/>
      <path fill="#EBEBEB" d="M64 52H44l-1-12h21V28H30l4 46h30zM64 88l-.1.03L48 84l-1-12h-12l2 24 27 8 .1-.03z"/>
      <path fill="#fff" d="M64 52v12h17l-2 20L64 88v12l27-8 4-46H64z"/>
    </svg>
  );
}

function CSSIcon() {
  return (
    <svg viewBox="0 0 128 128" className="h-8 w-8">
      <path fill="#1572B6" d="M19 114L9 3h110l-10 111-45 12z"/>
      <path fill="#33A9DC" d="M64 117l36-10 8-92H64z"/>
      <path fill="#fff" d="M64 52H44l-1-12h21V28H30l4 46h30V62zM64 88l-.1.03L48 84l-1-12h-12l2 24 27 8 .1-.03z"/>
      <path fill="#EBEBEB" d="M64 52v10h17l-1 10L64 76v12l27-8 4-46H64v10z"/>
    </svg>
  );
}

function JSIcon() {
  return (
    <svg viewBox="0 0 128 128" className="h-8 w-8">
      <path fill="#F7DF1E" d="M2 2h124v124H2z"/>
      <path d="M86 108c-2 4-6 7-13 7-7 0-12-3-14-8l8-5c2 3 3 5 7 5s6-1 6-5V60h10v43c0 2 0 3-1 5zM54 108c-2 4-6 7-13 7-7 0-12-3-14-8l8-5c2 3 3 5 7 5s6-1 6-5V60h10v43c0 2 0 3-1 5z"/>
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg viewBox="0 0 128 128" className="h-8 w-8">
      <circle cx="64" cy="64" r="8" fill="#61DAFB" />
      <g fill="none" stroke="#61DAFB" strokeWidth="6">
        <ellipse cx="64" cy="64" rx="50" ry="20"/>
        <ellipse cx="64" cy="64" rx="50" ry="20" transform="rotate(60 64 64)"/>
        <ellipse cx="64" cy="64" rx="50" ry="20" transform="rotate(120 64 64)"/>
      </g>
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg viewBox="0 0 256 272" className="h-8 w-8">
      <path fill="#539E43" d="M128 0l128 74v124l-128 74L0 198V74z"/>
      <path fill="#fff" d="M128 34l96 56v92l-96 56-96-56V90z" opacity=".9"/>
      <path fill="#539E43" d="M167 174c-9 16-47 16-58 0-6-10-4-25 9-32 12-6 28-6 40 0 13 7 15 22 9 32z"/>
    </svg>
  );
}

function GitIcon() {
  return (
    <svg viewBox="0 0 97 97" className="h-8 w-8">
      <path fill="#F34F29" d="M92.71 44.41L52.6 4.3a5.34 5.34 0 0 0-7.56 0l-7.5 7.5 9.55 9.55c2.16-.73 4.67-.24 6.4 1.49 1.74 1.73 2.22 4.24 1.49 6.4l9.2 9.2c2.16-.74 4.67-.24 6.4 1.49 2.43 2.43 2.43 6.37 0 8.8-2.44 2.44-6.38 2.44-8.81 0-1.81-1.81-2.28-4.44-1.41-6.67l-8.58-8.58-.01 22.54c.59.29 1.14.67 1.62 1.15 2.43 2.43 2.43 6.37 0 8.8-2.44 2.44-6.38 2.44-8.81 0-2.43-2.43-2.43-6.37 0-8.8.59-.59 1.28-1.05 2.02-1.36V39.15c-.74-.31-1.43-.76-2.02-1.36-1.98-1.98-2.35-4.86-1.14-7.22l-9.36-9.36L4.29 44.41a5.34 5.34 0 0 0 0 7.56l40.11 40.11a5.34 5.34 0 0 0 7.56 0l40.75-40.75a5.34 5.34 0 0 0 0-7.56z"/>
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg viewBox="0 0 256 154" className="h-8 w-8">
      <path fill="#38BDF8" d="M128 0C96 0 80 16 72 32c16-12 32-8 40 0 8 8 8 24 24 32 16 8 40 4 56-16-8 32-32 48-56 48-32 0-48-16-56-32-16 12-32 8-40 0-8-8-8-24-24-32C0 24 0 48 0 64c8 32 32 48 56 48 32 0 48-16 56-32 16 12 32 8 40 0 8-8 8-24 24-32 16-8 40-4 56 16-8-32-32-48-56-48-32 0-48 16-56 32-16-12-32-8-40 0-8 8-8 24-24 32C32 88 8 72 0 40 8 16 32 0 56 0c32 0 48 16 56 32 16-12 32-8 40 0 8 8 8 24 24 32 16 8 40 4 56-16C224 16 200 0 176 0c-32 0-48 16-56 32z"/>
    </svg>
  );
}

function TSIcon() {
  return (
    <svg viewBox="0 0 256 256" className="h-8 w-8">
      <rect width="256" height="256" fill="#3178C6"/>
      <path fill="#fff" d="M144 120h64v16h-24v56h-16v-56h-24zm-64 0h72v16h-28v56h-16v-56H80z"/>
    </svg>
  );
}

export default function TechOrbit() {
  return (
    <section className="relative w-full bg-white py-24">
      <style>{`
        @keyframes orbitSpin10 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes orbitSpin16 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes orbitSpin24 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes counter { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
      `}</style>

      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto relative aspect-square w-[340px] sm:w-[420px] md:w-[560px]">
          {/* CENTRAL TITLE: icons revolve around this label */}
          <div className="absolute inset-0 grid place-items-center">
            <h2 className="z-10 rotate-[-2deg] border-4 border-black bg-amber-300 px-5 py-3 text-2xl md:text-3xl font-black shadow-[8px_8px_0_#000]">
              My Tech Stack
            </h2>
          </div>

          {/* Base outline */}
          <div className="absolute inset-0 rounded-full border-4 border-black" />

          {/* Orbit 1 (outer) */}
          <div className="absolute left-1/2 top-1/2 h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-black">
            <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 animate-[orbitSpin10_14s_linear_infinite]">
              <div className="absolute left-1/2 top-0 -ml-5 -mt-5 h-10 w-10">
                <div className="grid h-10 w-10 place-items-center rounded-full border-4 border-black bg-white shadow-[6px_6px_0_#000] animate-[counter_14s_linear_infinite]"><HTMLIcon /></div>
              </div>
              <div className="absolute left-0 top-1/2 -ml-5 -mt-5 h-10 w-10">
                <div className="grid h-10 w-10 place-items-center rounded-full border-4 border-black bg-white shadow-[6px_6px_0_#000] animate-[counter_14s_linear_infinite]"><CSSIcon /></div>
              </div>
              <div className="absolute left-1/2 bottom-0 -mb-5 -ml-5 h-10 w-10">
                <div className="grid h-10 w-10 place-items-center rounded-full border-4 border-black bg-white shadow-[6px_6px_0_#000] animate-[counter_14s_linear_infinite]"><JSIcon /></div>
              </div>
              <div className="absolute right-0 top-1/2 -mr-5 -mt-5 h-10 w-10">
                <div className="grid h-10 w-10 place-items-center rounded-full border-4 border-black bg-white shadow-[6px_6px_0_#000] animate-[counter_14s_linear_infinite]"><ReactIcon /></div>
              </div>
            </div>
          </div>

          {/* Orbit 2 */}
          <div className="absolute left-1/2 top-1/2 h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-black">
            <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 animate-[orbitSpin16_18s_linear_infinite]">
              <div className="absolute left-1/2 top-0 -ml-5 -mt-5 h-10 w-10">
                <div className="grid h-10 w-10 place-items-center rounded-full border-4 border-black bg-white shadow-[6px_6px_0_#000] animate-[counter_18s_linear_infinite]"><NodeIcon /></div>
              </div>
              <div className="absolute left-0 top-1/2 -ml-5 -mt-5 h-10 w-10">
                <div className="grid h-10 w-10 place-items-center rounded-full border-4 border-black bg-white shadow-[6px_6px_0_#000] animate-[counter_18s_linear_infinite]"><GitIcon /></div>
              </div>
              <div className="absolute left-1/2 bottom-0 -mb-5 -ml-5 h-10 w-10">
                <div className="grid h-10 w-10 place-items-center rounded-full border-4 border-black bg-white shadow-[6px_6px_0_#000] animate-[counter_18s_linear_infinite]"><TailwindIcon /></div>
              </div>
              <div className="absolute right-0 top-1/2 -mr-5 -mt-5 h-10 w-10">
                <div className="grid h-10 w-10 place-items-center rounded-full border-4 border-black bg-white shadow-[6px_6px_0_#000] animate-[counter_18s_linear_infinite]"><TSIcon /></div>
              </div>
            </div>
          </div>

          {/* Orbit 3 (inner, faster) */}
          <div className="absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-black">
            <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 animate-[orbitSpin24_10s_linear_infinite]">
              <div className="absolute left-1/2 top-0 -ml-4 -mt-4 h-8 w-8">
                <div className="grid h-8 w-8 place-items-center rounded-full border-4 border-black bg-white shadow-[5px_5px_0_#000] animate-[counter_10s_linear_infinite]"><span className="text-[10px] font-black">API</span></div>
              </div>
              <div className="absolute right-0 top-1/2 -mr-4 -mt-4 h-8 w-8">
                <div className="grid h-8 w-8 place-items-center rounded-full border-4 border-black bg-white shadow-[5px_5px_0_#000] animate-[counter_10s_linear_infinite]"><span className="text-[10px] font-black">UX</span></div>
              </div>
              <div className="absolute left-1/2 bottom-0 -mb-4 -ml-4 h-8 w-8">
                <div className="grid h-8 w-8 place-items-center rounded-full border-4 border-black bg-white shadow-[5px_5px_0_#000] animate-[counter_10s_linear_infinite]"><span className="text-[10px] font-black">A11y</span></div>
              </div>
              <div className="absolute left-0 top-1/2 -ml-4 -mt-4 h-8 w-8">
                <div className="grid h-8 w-8 place-items-center rounded-full border-4 border-black bg-white shadow-[5px_5px_0_#000] animate-[counter_10s_linear_infinite]"><span className="text-[10px] font-black">CI</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <p className="mx-auto mt-8 max-w-xl rotate-[-1deg] border-4 border-black bg-lime-300 p-4 text-center text-sm font-extrabold shadow-[6px_6px_0_#000]">
          The badges revolve around the title itself so the composition reads as one cohesive unit.
        </p>
      </div>
    </section>
  );
}
