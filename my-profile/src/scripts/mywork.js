import { featuredProjects } from '../data/projects.js';
import { projectCard } from './projectCard.js';

const workcards = document.getElementById('workcards');

if (workcards) {
  workcards.innerHTML = `
    <section id="projects" class="relative py-14 sm:py-20">
      <div class="glow-orb w-80 h-80 top-20 left-1/4 bg-blue-600/20 animate-drift" style="animation-delay:-15s"></div>
      <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div class="max-w-2xl">
            <p class="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Featured work</p>
            <h2 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Projects I'm <span class="gradient-text">proud of</span>
            </h2>
            <p class="mt-5 text-muted leading-relaxed">
              A few of the products I've designed, built and shipped — from social platforms to
              streaming apps and backend APIs.
            </p>
          </div>

          <a href="/pages/projects/index.html" class="btn btn-ghost shrink-0 self-start sm:self-auto">
            View all projects
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div class="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          ${featuredProjects.map((project, index) => projectCard(project, { index })).join('')}
        </div>
      </div>
    </section>
  `;
}

export default workcards;