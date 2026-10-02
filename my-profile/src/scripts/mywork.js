import projects from '../data/projects.js';
import { projectCard } from './projectCard.js';

const workcards = document.getElementById('workcards');

if (workcards) {
  workcards.innerHTML = `
    <section id="projects" class="section relative">
      <div class="glow-orb w-80 h-80 top-20 left-1/4 bg-blue-600/20 animate-drift" style="animation-delay:-15s"></div>
      <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div class="max-w-2xl">
          <div class="flex flex-wrap items-center gap-3">
            <p class="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">My work</p>
            <span class="badge">${projects.length} projects</span>
          </div>
          <h2 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
            Projects I <span class="gradient-text">shipped</span>
          </h2>
          <p class="mt-4 text-muted leading-relaxed">
            Everything I've built — social platforms, streaming apps, dashboards, e-commerce
            storefronts, static sites and backend APIs.
          </p>
        </div>

        <div class="section-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          ${projects.map((project, index) => projectCard(project, { index, delayStep: 0.04 })).join('')}
        </div>
      </div>
    </section>
  `;
}

export default workcards;