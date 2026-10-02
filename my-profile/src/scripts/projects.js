import './main.js';
import projects from '../data/projects.js';
import { projectCard } from './projectCard.js';

const container = document.getElementById('projects-page');

const techFilter = [...new Set(projects.flatMap((project) => project.languages))].sort();

if (container) {
  container.innerHTML = `
    <section class="relative py-14 sm:py-20">
      <div class="glow-orb w-96 h-96 top-10 -left-24 bg-blue-600/25 animate-drift"></div>
      <div class="glow-orb w-80 h-80 top-40 right-0 bg-sky-500/20 animate-drift" style="animation-delay:-8s"></div>

      <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl">
          <span class="badge animate-fade-up"><span class="badge-dot"></span> ${projects.length} projects shipped</span>
          <h1 class="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] animate-fade-up" style="animation-delay:0.1s">
            My <span class="gradient-text">Projects</span>
          </h1>
          <p class="mt-5 text-muted text-base sm:text-lg leading-relaxed animate-fade-up" style="animation-delay:0.2s">
            Everything I've built so far — web apps, dashboards, APIs and static sites. Filter by
            the technology used.
          </p>
        </div>

        <div class="mt-10 flex flex-wrap gap-2" id="project-filters" role="group" aria-label="Filter projects by technology">
          <button type="button" data-filter="all" class="btn btn-primary btn-sm">All</button>
          ${techFilter
            .map(
              (tech) =>
                `<button type="button" data-filter="${tech}" class="btn btn-ghost btn-sm">${tech}</button>`
            )
            .join('')}
        </div>

        <div id="project-grid" class="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          ${projects.map((project, index) => projectCard(project, { index, delayStep: 0.05 })).join('')}
        </div>

        <p id="project-empty" class="hidden mt-12 text-center text-slate-600">No projects match that filter yet.</p>
      </div>
    </section>
  `;

  const filters = document.getElementById('project-filters');
  const grid = document.getElementById('project-grid');
  const empty = document.getElementById('project-empty');

  filters?.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;

    const filter = button.dataset.filter;
    filters.querySelectorAll('button').forEach((el) => {
      el.classList.toggle('btn-primary', el === button);
      el.classList.toggle('btn-ghost', el !== button);
    });

    const cards = [...grid.querySelectorAll('article')];
    let visible = 0;

    cards.forEach((card) => {
      const languages = (card.dataset.languages || '').toLowerCase();
      const match = filter === 'all' || languages.includes(filter.toLowerCase());
      card.classList.toggle('hidden', !match);
      if (match) visible += 1;
    });

    empty?.classList.toggle('hidden', visible > 0);
  });
}

export default projects;