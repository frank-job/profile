import './main.js';

const services = document.getElementById('services');

const CARDS = [
  {
    title: 'Web Development',
    tag: 'Full-Stack',
    accent: 'from-blue-500/14 to-sky-400/8',
    icon: 'M3 5h18v14H3zM3 9h18M7 12.5h3',
    body: 'Production-ready web apps built with React, Next.js and TypeScript — server-rendered where it matters, fast everywhere else, and clean under the hood.',
    points: ['React & Next.js', 'TypeScript', 'API integration', 'Performance'],
  },
  {
    title: 'UI/UX & Web Design',
    tag: 'Design',
    accent: 'from-indigo-500/14 to-purple-400/8',
    icon: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
    body: 'Interfaces designed in Adobe XD and Figma, then handed over as clean, responsive, accessible builds. Layouts that hold up from a 320px phone to a wide desktop.',
    points: ['Wireframes', 'Design systems', 'Responsive layouts', 'Accessibility'],
  },
  {
    title: 'Database & Backend',
    tag: 'Data',
    accent: 'from-emerald-500/14 to-teal-400/8',
    icon: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zm0 0v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6',
    body: 'Relational and NoSQL data modelling with PostgreSQL, MySQL and MongoDB, plus secure Node.js and Python backends with proper auth and validation.',
    points: ['Schema design', 'REST APIs', 'Auth & security', 'Query tuning'],
  },
  {
    title: 'Office & Presentations',
    tag: 'Productivity',
    accent: 'from-amber-500/14 to-orange-400/8',
    icon: 'M4 5h16v11H4zM9 20h6M12 16v4M8 12l2.5-3 2 2.5L15 8',
    body: 'Polished slide decks and reports that communicate clearly — PowerPoint, Excel and Word work built to support a product, a pitch or a report.',
    points: ['Slide decks', 'Excel reporting', 'Technical docs', 'Data visuals'],
  },
  {
    title: 'Adobe Creative Suite',
    tag: 'Creative',
    accent: 'from-fuchsia-500/14 to-pink-400/8',
    icon: 'M12 3l8 4.5-8 4.5-8-4.5L12 3zm-8 9l8 4.5 8-4.5M4 16.5l8 4.5 8-4.5',
    body: 'Photoshop and Illustrator work for web and brand assets: hero imagery, icons, banners and social graphics that match the product design.',
    points: ['Photo editing', 'Logos & icons', 'Web banners', 'Retouching'],
  },
  {
    title: 'Teaching & Support',
    tag: 'Mentoring',
    accent: 'from-cyan-500/14 to-blue-400/8',
    icon: 'M12 14l9-5-9-5-9 5 9 5zm-6 3v3.5c0 1 2.7 2 6 2s6-1 6-2V17',
    body: 'Patient, practical guidance for junior developers and students — breaking down web fundamentals, tooling and debugging so they can build on their own.',
    points: ['Code review', 'Pair programming', 'Curriculum help', 'Debugging'],
  },
];

if (services) {
  services.innerHTML = `
    <section id="services" class="section relative">
      <div class="glow-orb w-96 h-96 top-1/4 -right-24 bg-sky-500/20 animate-drift" style="animation-delay:-4s"></div>
      <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div class="max-w-2xl">
          <p class="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Services</p>
          <h2 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
            What I can do <span class="gradient-text">for you</span>
          </h2>
          <p class="mt-5 text-muted leading-relaxed">
            End-to-end help — from the first wireframe to the deployed, documented, presentation-ready
            product.
          </p>
        </div>

        <div class="section-grid grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          ${CARDS.map(
            (card) => `
            <article class="glass glass-hover rounded-3xl p-6 sm:p-7 flex flex-col">
              <div class="flex items-start justify-between gap-4">
                <div class="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${card.accent} border border-blue-100 text-slate-800">
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="${card.icon}" />
                  </svg>
                </div>
                <span class="badge">${card.tag}</span>
              </div>

              <h3 class="mt-5 text-lg font-bold text-slate-900">${card.title}</h3>
              <p class="mt-2 text-sm leading-relaxed text-slate-600 flex-1">${card.body}</p>

              <ul class="mt-5 flex flex-wrap gap-2">
                ${card.points
                  .map(
                    (point) => `
                    <li class="chip">
                      ${point}
                    </li>`
                  )
                  .join('')}
              </ul>

              <a href="/pages/contact/index.html" class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                Request this service
                <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </article>`
          ).join('')}
        </div>
      </div>
    </section>
  `;
}

export default services;