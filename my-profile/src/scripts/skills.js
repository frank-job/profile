import './main.js';

const skills = document.getElementById('skills');

const GROUPS = [
  {
    title: 'Web Development',
    blurb: 'Semantic, accessible interfaces that stay fast and responsive on every screen.',
    icon: 'M3 5h18v14H3zM3 9h18',
    items: [
      { name: 'JavaScript', level: 92 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Responsive UI', level: 90 },
    ],
  },
  {
    title: 'Full-Stack Frameworks',
    blurb: 'End-to-end products: routing, server rendering, state and deployment.',
    icon: 'M12 3l9 5-9 5-9-5 9-5zm-9 9l9 5 9-5m-18 5l9 5 9-5',
    items: [
      { name: 'Next.js', level: 86 },
      { name: 'React', level: 88 },
      { name: 'Node.js', level: 84 },
      { name: 'Express', level: 80 },
      { name: 'Vite', level: 82 },
    ],
  },
  {
    title: 'Languages & Backend',
    blurb: 'Server-side logic, APIs, automation and object-oriented design.',
    icon: 'M8 6l-5 6 5 6m8-12l5 6-5 6M14 4l-4 16',
    items: [
      { name: 'Python', level: 78 },
      { name: 'C#', level: 82 },
      { name: 'REST APIs', level: 85 },
      { name: 'Git & GitHub', level: 88 },
      { name: 'Auth & Security', level: 74 },
    ],
  },
  {
    title: 'Databases',
    blurb: 'Relational and NoSQL data modelling, indexing and queries.',
    icon: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zm0 0v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6',
    items: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 78 },
      { name: 'SQLite', level: 76 },
      { name: 'MongoDB', level: 82 },
      { name: 'Schema Design', level: 85 },
    ],
  },
  {
    title: 'Design & Productivity',
    blurb: 'Visual design and professional document, spreadsheet and presentation work.',
    icon: 'M4 5h16v14H4zM8 10l2.5 2.5L14 8l4 6',
    items: [
      { name: 'Adobe Photoshop', level: 72 },
      { name: 'Adobe Illustrator', level: 68 },
      { name: 'Adobe XD / Figma', level: 74 },
      { name: 'MS PowerPoint', level: 90 },
      { name: 'MS Excel & Word', level: 88 },
    ],
  },
];

if (skills) {
  skills.innerHTML = `
    <section id="skills" class="section bg-transparent relative reveal">
      <div class=" w-80 h-80 bottom-0 left-0 bg-transparent" style="animation-delay:-9s"></div>
      <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div class="max-w-2xl">
          <p class="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Skills</p>
          <h2 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
            A stack built for <span class="gradient-text">shipping</span>
          </h2>
          <p class="mt-5 text-muted leading-relaxed">
            From interface design to database architecture — and the presentation skills to pitch
            it properly afterwards.
          </p>
        </div>

        <div class="section-grid grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          ${GROUPS.map(
            (group) => `
            <article class="glass glass-hover rounded-3xl p-6 sm:p-7 flex flex-col">
              <div class="flex items-start gap-4">
                <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-500/15 to-sky-400/10 border-blue-100 text-blue-600">
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="${group.icon}" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-slate-900 leading-tight">${group.title}</h3>
                  <p class="mt-1 text-xs text-slate-600 leading-relaxed">${group.blurb}</p>
                </div>
              </div>

              <ul class="mt-6 space-y-4">
                ${group.items
                  .map(
                    (item) => `
                    <li>
                      <div class="flex items-center justify-between text-sm">
                        <span class="text-slate-700">${item.name}</span>
                        <span class="text-xs font-semibold text-blue-600">${item.level}%</span>
                      </div>
                      <div class="progress-track mt-2">
                        <div class="progress-fill" style="width:${item.level}%"></div>
                      </div>
                    </li>`
                  )
                  .join('')}
              </ul>
            </article>`
          ).join('')}
        </div>

        <div class="mt-8 glass rounded-3xl p-6 sm:p-8 text-center">
          <p class="text-sm text-slate-300">
            Currently deep in <span class="font-semibold text-slate-900">TypeScript</span>,
            <span class="font-semibold text-slate-900">Next.js</span> and
            <span class="font-semibold text-slate-900">PostgreSQL</span> — always learning something new.
          </p>
        </div>
      </div>
    </section>
  `;
}

export default skills;