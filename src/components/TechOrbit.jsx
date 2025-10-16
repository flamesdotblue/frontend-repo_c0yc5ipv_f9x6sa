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

export default function TechOrbit() {
  return (
    <section className="relative w-full bg-white py-24">
      <style>{`
        @keyframes spinOrbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes counter { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
      `}</style>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <div>
          <h2 className="inline-block rotate-[-2deg] border-4 border-black bg-yellow-200 px-4 py-2 text-3xl font-black shadow-[6px_6px_0_#000]">
            My Tech Stack
          </h2>
          <p className="mt-4 max-w-prose rotate-[-1deg] border-4 border-black bg-lime-300 p-4 text-base font-medium shadow-[6px_6px_0_#000]">
            Tools I use to craft fast, expressive, and interactive web apps. These orbit around ideas and ship as bold, joyful experiences.
          </p>
        </div>
        <div className="relative mx-auto aspect-square w-[340px] sm:w-[420px] md:w-[480px]">
          <div className="absolute inset-0 grid place-items-center">
            <div className="z-10 rotate-[-2deg] border-4 border-black bg-amber-300 px-4 py-3 text-xl font-black shadow-[8px_8px_0_#000]">
              My Tech Stack
            </div>
          </div>

          <div className="absolute inset-0 rounded-full border-4 border-black" />

          <div className="absolute inset-8 animate-[spinOrbit_18s_linear_infinite] rounded-full border-4 border-black" />
          <div className="absolute inset-16 animate-[spinOrbit_26s_linear_infinite] rounded-full border-4 border-black" />

          <div className="absolute left-1/2 top-0 -ml-5 -mt-5 grid h-10 w-10 place-items-center rounded-full border-4 border-black bg-white shadow-[6px_6px_0_#000]">
            <div className="animate-[counter_18s_linear_infinite]"><HTMLIcon /></div>
          </div>
          <div className="absolute right-0 top-1/2 -mr-5 -mt-5 grid h-10 w-10 place-items-center rounded-full border-4 border-black bg-white shadow-[6px_6px_0_#000]">
            <div className="animate-[counter_26s_linear_infinite]"><CSSIcon /></div>
          </div>
          <div className="absolute left-1/2 bottom-0 -ml-5 -mb-5 grid h-10 w-10 place-items-center rounded-full border-4 border-black bg-white shadow-[6px_6px_0_#000]">
            <div className="animate-[counter_26s_linear_infinite]"><JSIcon /></div>
          </div>
          <div className="absolute left-0 top-1/2 -ml-5 -mt-5 grid h-10 w-10 place-items-center rounded-full border-4 border-black bg-white shadow-[6px_6px_0_#000]">
            <div className="animate-[counter_18s_linear_infinite]"><ReactIcon /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
