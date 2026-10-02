const escapeHtml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]
  );

const stars = (rating) =>
  Array.from({ length: 5 }, (_, i) =>
    `<span class="${i < rating ? 'text-amber-500' : 'text-slate-300'}">★</span>`
  ).join('');

export const projectCard = (project, { index = 0, delayStep = 0.06 } = {}) => {
  const delay = (0.1 + index * delayStep).toFixed(2);

  return `
    <article class="group glass glass-hover rounded-3xl overflow-hidden flex flex-col reveal" data-languages="${escapeHtml(
      project.languages.join(', ')
    )}" style="transition-delay:${delay}s">
      <div class="relative aspect-video overflow-hidden bg-slate-200/70">
          ${
            project.image
              ? `<img src="${project.image}" alt="${escapeHtml(project.name)}" loading="lazy" decoding="async"
                 class="card-media h-full w-full object-cover" />`
              : `<div class="grid h-full w-full place-items-center text-sm text-slate-500">No preview</div>`
          }
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          ${
            project.isSchoolProject
              ? `<span class="absolute left-4 top-4 rounded-full border border-white/40 bg-white/85 px-3 py-1 text-[0.7rem] font-semibold text-slate-700 backdrop-blur-md">School project</span>`
              : ''
          }
        <a href="${project.link}" target="_blank" rel="noopener noreferrer"
           class="btn btn-primary btn-sm absolute bottom-4 left-4 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 focus-visible:opacity-100">
          Live project
          <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      <div class="flex flex-1 flex-col p-6">
        <h3 class="text-lg font-bold text-slate-900">${escapeHtml(project.name)}</h3>
        <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-600">${escapeHtml(project.description)}</p>

        ${
          project.languages.length
            ? `<ul class="mt-4 flex flex-wrap gap-2">
                ${project.languages
                  .map(
                    (lang) =>
                      `<li class="chip">${escapeHtml(lang)}</li>`
                  )
                  .join('')}
               </ul>`
            : ''
        }

        <div class="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
          <span class="flex items-center gap-0.5 text-sm" aria-label="Rated ${project.rating} out of 5">${stars(project.rating)}</span>
          <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
            Visit site →
          </a>
        </div>
      </div>
    </article>
  `;
};

export default projectCard;