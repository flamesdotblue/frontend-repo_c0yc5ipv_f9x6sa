import React from 'react';

const projects = [
  {
    title: 'Orbit UI',
    description: 'Animated, physics-inspired UI components with a neo-brutal twist.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    color: 'bg-amber-300',
    link: '#',
  },
  {
    title: 'Boldfolio',
    description: 'A portfolio template that embraces heavy borders and big personality.',
    tags: ['Vite', 'CSS', 'Design'],
    color: 'bg-lime-300',
    link: '#',
  },
  {
    title: 'Spline Playground',
    description: 'Interactive 3D scenes embedded into modern web stacks.',
    tags: ['Spline', 'React', 'Web'],
    color: 'bg-pink-300',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-yellow-200 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 inline-block rotate-[-2deg] border-4 border-black bg-white px-4 py-2 text-3xl font-black shadow-[6px_6px_0_#000]">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              className={`group block rotate-[-1deg] border-4 border-black ${p.color} p-5 shadow-[8px_8px_0_#000] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[0_0_0_#000]`}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-black">{p.title}</h3>
                <span className="rounded-none border-2 border-black bg-white px-2 py-1 text-xs font-bold shadow-[3px_3px_0_#000]">
                  {i + 1}
                </span>
              </div>
              <p className="mt-3 text-sm font-medium text-black/80">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t, ti) => (
                  <span
                    key={ti}
                    className="rounded-none border-2 border-black bg-white px-2 py-1 text-xs font-bold shadow-[3px_3px_0_#000]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
