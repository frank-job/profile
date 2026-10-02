import './main.js';
import { codeCard } from './codeSnippet.js';

const about = document.getElementById('about');

const FACTS = [
  {
    title: 'Education',
    body: 'Studied at BYU, building a strong academic foundation in computing, problem solving and professional engineering practice.',
    icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l-6.5 3.6M12 14v7',
  },
  {
    title: 'Based in Uganda',
    body: 'Proudly Ugandan, working with clients and teams across East Africa and beyond, delivering solutions that work on real-world networks and devices.',
    icon: 'M12 21s-7-5.2-7-10a7 7 0 1114 0c0 4.8-7 10-7 10zm0-8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
  },
  {
    title: 'Full-stack focus',
    body: 'From UI design to REST APIs and relational schema design — I own the whole build, not just a slice of it.',
    icon: 'M4 7h16M4 12h10M4 17h7M17 12l2 2-2 2m2-2h-4',
  },
];

const TIMELINE = [
  {
    year: 'Now',
    title: 'Building production web apps',
    body: 'Shipping full-stack products with TypeScript, Next.js, React and Node.js, backed by PostgreSQL and MongoDB.',
  },
  {
    year: 'BYU',
    title: 'Computer science foundations',
    body: 'Coursework and projects spanning algorithms, OOP, databases and software engineering practice.',
  },
  {
    year: 'Since',
    title: 'Hands-on developer',
    body: 'A steady stream of shipped projects — social platforms, streaming apps, dashboards, e-commerce and backend APIs.',
  },
];

if (about) {
  about.innerHTML = `
    <section id="about" class="section relative">
      <div class="glow-orb w-80 h-80 top-10 right-0 bg-blue-600/20 animate-drift"></div>
      <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div class="max-w-2xl">
          <p class="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600/90">About me</p>
          <h2 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
            A developer who cares about <span class="gradient-text">the details</span>
          </h2>
          <p class="mt-5 text-muted leading-relaxed">
            I'm Yakan Frank — a Ugandan software developer educated at BYU. I like problems that
            need equal parts logic and design: a database modelled properly, an interface that
            actually feels good on a phone, code another developer can pick up and maintain.
          </p>
        </div>

        <div class="section-grid grid gap-5 md:grid-cols-3">
          ${FACTS.map(
            (fact) => `
            <article class="glass glass-hover rounded-3xl p-6 sm:p-7">
              <div class="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-500/15 to-sky-400/10 border-blue-100 text-blue-600">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="${fact.icon}" />
                </svg>
              </div>
              <h3 class="mt-5 text-lg font-bold text-slate-900">${fact.title}</h3>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">${fact.body}</p>
            </article>`
          ).join('')}
        </div>

        <div class="section-grid grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div class="glass rounded-3xl p-6 sm:p-8">
            <h3 class="text-xl font-bold text-slate-900">How I work</h3>
            <ul class="mt-5 space-y-4 text-sm text-slate-700">
              ${[
                'Understand the problem before writing a single line of code.',
                'Design the data model first, then the API, then the interface.',
                'Write accessible, responsive markup that works before it looks clever.',
                'Ship, test, iterate — then ship again.',
              ]
                .map(
                  (item) => `
                  <li class="flex gap-3">
                    <svg class="mt-0.5 h-5 w-5 shrink-0 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>${item}</span>
                  </li>`
                )
                .join('')}
            </ul>
          </div>

          <div class="glass rounded-3xl p-6 sm:p-8">
            <h3 class="text-xl font-bold text-slate-900">Journey</h3>
            <ol class="mt-5 space-y-5">
              ${TIMELINE.map(
                (item) => `
                <li class="relative border-l border-slate-200 pl-6">
                  <span class="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-blue-600 ring-4 ring-blue-600/15"></span>
                  <p class="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">${item.year}</p>
                  <p class="mt-1 font-semibold text-slate-900">${item.title}</p>
                  <p class="mt-1 text-sm text-slate-600 leading-relaxed">${item.body}</p>
                </li>`
              ).join('')}
            </ol>
          </div>
        </div>

        <div class="section-grid grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">In short</p>
            <h3 class="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
              Me, in <span class="gradient-text">code</span>
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-600">
              If you'd rather read my CV than my paragraph — here it is in the format I actually
              write in. TypeScript, strict mode, and far too many things going on at once.
            </p>
            <div class="mt-5 flex flex-wrap gap-2">
              <span class="chip">Uganda</span>
              <span class="chip">BYU</span>
              <span class="chip">Full-Stack</span>
              <span class="chip">Open to work</span>
            </div>
          </div>

          ${codeCard()}
        </div>
      </div>
    </section>
  `;
}

export default about;