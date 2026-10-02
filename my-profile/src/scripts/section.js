import profileImg from '../images/profile.jpeg';

const section = document.getElementById('section');

const STATS = [
  { value: '10+', label: 'Projects shipped' },
  { value: '8', label: 'Core technologies' },
  { value: '5+', label: 'Years building' },
];

const STACK = [
  'TypeScript',
  'Next.js',
  'React',
  'Node.js',
  'Python',
  'C#',
  'Vite',
  'PostgreSQL',
  'Tailwind',
  'MongoDB',
  'REST APIs',
  'Git',
];

const CODE_SNIPPET = `
<span class="tok-com">// the short version</span>
<span class="tok-key">const</span> <span class="tok-fn">developer</span> <span class="tok-key">=</span> <span class="tok-prop">Developer</span><span class="caret"></span> <span class="tok-key">from</span> <span class="tok-str">"uganda"</span><span class="tok-com">;</span>

<span class="tok-key">export const</span> <span class="tok-fn">yakan</span> <span class="tok-key">=</span> {
  <span class="tok-prop">name</span><span class="tok-key">:</span>     <span class="tok-str">"Yakan Frank"</span><span class="tok-com">,</span>
  <span class="tok-prop">role</span><span class="tok-key">:</span>     <span class="tok-str">"Full-Stack Developer"</span><span class="tok-com">,</span>
  <span class="tok-prop">basedIn</span><span class="tok-key">:</span>  <span class="tok-str">"Uganda"</span><span class="tok-com">,</span>
  <span class="tok-prop">school</span><span class="tok-key">:</span>   <span class="tok-str">"BYU"</span><span class="tok-com">,</span>

  <span class="tok-prop">stack</span><span class="tok-key">:</span> [
    <span class="tok-str">"TypeScript"</span>, <span class="tok-str">"Next.js"</span>, <span class="tok-str">"React"</span><span class="tok-com">,</span>
    <span class="tok-str">"Node.js"</span>, <span class="tok-str">"Python"</span>, <span class="tok-str">"C#"</span><span class="tok-com">,</span>
    <span class="tok-str">"Vite"</span>, <span class="tok-str">"SQL"</span>, <span class="tok-str">"Adobe"</span>, <span class="tok-str">"MS Office"</span><span class="tok-com">,</span>
  ],

  <span class="tok-prop">available</span><span class="tok-key">:</span> <span class="tok-num">true</span><span class="tok-com">,</span>
};
`;

if (section) {
  section.innerHTML = `
    <section id="home" class="relative min-h-[100svh] flex items-center overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16">
      <div class="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div class="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">

          <div class="text-center lg:text-left order-2 lg:order-1">
            <span class="badge animate-fade-up" style="animation-delay:0.05s">
              <span class="badge-dot"></span> Available for freelance &amp; full-time roles
            </span>

            <p class="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-blue-600 animate-fade-up" style="animation-delay:0.15s">
              Hello, I'm
            </p>

            <h1 class="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.06] animate-fade-up" style="animation-delay:0.25s">
              Yakan <span class="gradient-text">Frank</span>
            </h1>

            <h2 class="mt-4 text-lg sm:text-xl lg:text-2xl font-semibold text-slate-700 animate-fade-up" style="animation-delay:0.35s">
              Full-Stack Software Developer
              <span class="block text-base text-slate-500 font-normal mt-1">
                Web Development · Databases · Backend · Presentations
              </span>
            </h2>

            <p class="mt-6 max-w-xl mx-auto lg:mx-0 text-muted text-base sm:text-lg leading-relaxed animate-fade-up" style="animation-delay:0.45s">
              Ugandan software developer, educated at BYU. I design and build clean, responsive
              full-stack applications with TypeScript, Next.js, React, Node.js, Python and C# —
              from relational database design to polished, production-ready interfaces.
            </p>

            <div class="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3 animate-fade-up" style="animation-delay:0.55s">
              <a href="#projects" class="btn btn-primary">
                View My Work
                <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </a>
              <a href="#contact" class="btn btn-ghost">Contact Me</a>
              <a href="/pages/projects/index.html" class="btn btn-ghost">All Projects</a>
            </div>

            <dl class="mt-8 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0 animate-fade-up" style="animation-delay:0.65s">
              ${STATS.map(
                (stat) => `
                <div class="glass rounded-2xl px-3 py-4 text-center">
                  <dt class="sr-only">${stat.label}</dt>
                  <dd class="text-2xl sm:text-3xl font-bold text-slate-900">${stat.value}</dd>
                  <dd class="mt-1 text-[0.7rem] sm:text-xs text-slate-500 leading-tight">${stat.label}</dd>
                </div>`
              ).join('')}
            </dl>
          </div>

          <div class="order-1 lg:order-2 flex flex-col items-center gap-5 animate-fade-up" style="animation-delay:0.35s">

            <div class="glass-strong rounded-[2rem] p-3 sm:p-4 w-full max-w-sm">
              <div class="avatar-ring">
                <img src="${profileImg}" alt="Yakan Frank, software developer"
                  width="480" height="560" loading="eager" decoding="async"
                  class="h-64 w-full object-cover sm:h-80" />
              </div>
              <div class="mt-4 flex items-center justify-between gap-3 px-1">
                <div>
                  <p class="text-sm font-semibold text-slate-900 leading-tight">Yakan Frank</p>
                  <p class="text-xs text-slate-500 leading-tight">Software Developer · Uganda</p>
                </div>
                <span class="badge shrink-0">BYU</span>
              </div>
            </div>

            <div class="code-card w-full max-w-sm rounded-2xl overflow-hidden">
              <div class="flex items-center gap-2 px-4 py-3 border-b border-white/15 bg-white/5">
                <span class="code-dot bg-red-400"></span>
                <span class="code-dot bg-amber-400"></span>
                <span class="code-dot bg-emerald-400"></span>
                <span class="ml-2 text-xs font-medium text-white/80">yakan.ts</span>
              </div>
              <pre class="overflow-x-auto px-4 py-4"><code>${CODE_SNIPPET}</code></pre>
            </div>
          </div>
        </div>

        <div class="mt-10 sm:mt-12 animate-fade-in" style="animation-delay:0.9s">
          <p class="text-center text-xs uppercase tracking-[0.3em] text-slate-500">Tech I work with</p>
          <div class="relative mt-6 overflow-hidden mask-x">
            <div class="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
              ${[...STACK, ...STACK]
                .map((tech) => `<span class="glass rounded-full px-5 py-2 text-sm font-medium text-slate-700 whitespace-nowrap">${tech}</span>`)
                .join('')}
            </div>
          </div>
        </div>
      </div>

      <a href="#about" aria-label="Scroll to about" class="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-600 hover:text-blue-600 transition-colors">
        <svg class="h-6 w-6 animate-scroll-hint" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  `;
}

export default section;