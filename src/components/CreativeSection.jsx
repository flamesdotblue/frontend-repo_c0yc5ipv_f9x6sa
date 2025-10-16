import React from 'react';

export default function CreativeSection() {
  return (
    <section className="relative w-full bg-yellow-200 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="inline-block rotate-[-2deg] border-4 border-black bg-white px-4 py-2 text-3xl font-black shadow-[6px_6px_0_#000]">
            Studio Notes
          </h2>
          <a
            href="#"
            className="rotate-[-2deg] border-4 border-black bg-lime-300 px-4 py-2 text-sm font-extrabold shadow-[6px_6px_0_#000] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[0_0_0_#000]"
          >
            Get in touch →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rotate-[-1deg] border-4 border-black bg-white p-5 shadow-[8px_8px_0_#000]">
            <h3 className="text-xl font-black">Design Principles</h3>
            <ul className="mt-3 list-disc pl-5 text-sm font-medium">
              <li>Big type, big contrast.</li>
              <li>Motion with purpose.</li>
              <li>Accessible by default.</li>
            </ul>
          </div>
          <div className="rotate-[1deg] border-4 border-black bg-amber-300 p-5 shadow-[8px_8px_0_#000]">
            <h3 className="text-xl font-black">Services</h3>
            <ul className="mt-3 list-disc pl-5 text-sm font-medium">
              <li>Interactive websites & apps</li>
              <li>Design systems</li>
              <li>3D & motion on the web</li>
            </ul>
          </div>
          <div className="rotate-[-1deg] border-4 border-black bg-lime-300 p-5 shadow-[8px_8px_0_#000]">
            <h3 className="text-xl font-black">Contact</h3>
            <p className="mt-3 text-sm font-medium">Open for collaborations and freelance work.</p>
            <a href="mailto:hello@anchal.dev" className="mt-4 inline-block border-4 border-black bg-white px-3 py-2 text-xs font-extrabold shadow-[5px_5px_0_#000]">
              hello@anchal.dev
            </a>
          </div>
        </div>

        <div className="mt-10 overflow-hidden border-4 border-black bg-white py-3 shadow-[8px_8px_0_#000]">
          <div className="animate-[marquee_18s_linear_infinite] whitespace-nowrap text-sm font-black">
            <span className="mx-6 inline-block">⚡ Fast by default</span>
            <span className="mx-6 inline-block">🎨 Playful aesthetics</span>
            <span className="mx-6 inline-block">🧩 Systems thinking</span>
            <span className="mx-6 inline-block">🛰️ 3D & motion on web</span>
            <span className="mx-6 inline-block">✅ Accessible UX</span>
            <span className="mx-6 inline-block">🔧 Clean architecture</span>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
}
