import React from 'react';

const experiences = [
  {
    role: 'Frontend Engineer',
    company: 'PixelCraft Studio',
    period: '2023 — Present',
    bullets: [
      'Built interactive 3D web experiences with React and WebGL.',
      'Led a redesign using bold neo-brutal visuals and motion.',
    ],
    color: 'bg-pink-300',
  },
  {
    role: 'UI Developer',
    company: 'Neon Labs',
    period: '2021 — 2023',
    bullets: [
      'Shipped component libraries with accessibility baked-in.',
      'Drove performance improvements to achieve 95+ Lighthouse.',
    ],
    color: 'bg-cyan-300',
  },
  {
    role: 'Design Intern',
    company: 'BoldType',
    period: '2020 — 2021',
    bullets: [
      'Explored visual systems with high-contrast, chunky borders.',
      'Documented patterns that scale across products.',
    ],
    color: 'bg-lime-300',
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 inline-block rotate-[-2deg] border-4 border-black bg-yellow-200 px-4 py-2 text-3xl font-black shadow-[6px_6px_0_#000]">
          Timeline
        </h2>
        <div className="relative ml-6 border-l-4 border-black pl-6">
          {experiences.map((exp, i) => (
            <div key={i} className="relative mb-10">
              <span className="absolute -left-[42px] top-0 grid h-8 w-8 place-items-center border-4 border-black bg-white font-black shadow-[4px_4px_0_#000]">
                {i + 1}
              </span>
              <div className={`rotate-[-1deg] border-4 border-black ${exp.color} p-5 shadow-[8px_8px_0_#000]`}>
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-2xl font-black text-black">
                    {exp.role} <span className="text-black/60">@ {exp.company}</span>
                  </h3>
                  <span className="rounded-none border-2 border-black bg-white px-2 py-1 text-xs font-bold shadow-[3px_3px_0_#000]">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-3 list-disc pl-5 text-black">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="mb-1 text-sm font-medium">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
