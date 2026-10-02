import '../css/style.css';

const header = document.getElementById('header');

const NAV = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Services', href: '/#services' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
];

if (header) {
  const path = window.location.pathname;

  header.innerHTML = `
    <header id="site-header" class="fixed top-0 inset-x-0 z-50 transition-all duration-500">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mt-3 sm:mt-4 glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4">

          <a href="/#home" class="flex items-center gap-3 shrink-0 group">
            <span class="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-700 to-sky-500 text-white text-sm font-bold tracking-tight shadow-lg shadow-blue-600/25 transition-transform duration-300 group-hover:scale-105">
              YF
            </span>
            <span class="leading-tight">
              <span class="block text-base sm:text-lg font-bold text-slate-900 tracking-tight">Yakan Frank</span>
              <span class="block text-[0.65rem] sm:text-xs text-slate-500 tracking-[0.18em] uppercase">Software Developer</span>
            </span>
          </a>

          <nav class="hidden lg:flex items-center gap-7" aria-label="Primary">
            ${NAV.map(
              (item) => `
              <a href="${item.href}" data-nav="${item.label}" class="nav-link text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors">
                ${item.label}
              </a>`
            ).join('')}
          </nav>

          <div class="flex items-center gap-2">
            <a href="/pages/contact/index.html" class="btn btn-primary btn-sm hidden sm:inline-flex">Hire Me</a>
            <a href="https://github.com/frank-job" target="_blank" rel="noopener noreferrer"
               class="btn btn-ghost btn-sm hidden md:inline-flex" aria-label="GitHub profile">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>
              <span>GitHub</span>
            </a>
            <button id="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu"
              class="lg:hidden grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 hover:text-blue-700 transition-colors">
              <svg id="icon-open" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
              <svg id="icon-close" class="h-5 w-5 hidden" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
              <span class="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>

        <div id="mobile-menu" class="menu-open lg:hidden mt-2 glass rounded-2xl">
          <nav class="flex flex-col p-3 gap-1" aria-label="Mobile">
            ${NAV.map(
              (item) => `
              <a href="${item.href}" class="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                ${item.label}
              </a>`
            ).join('')}
            <a href="/pages/contact/index.html" class="mt-1 btn btn-primary btn-sm">Hire Me</a>
          </nav>
        </div>
      </div>
    </header>
  `;

  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');

  toggle?.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    iconOpen.classList.toggle('hidden', open);
    iconClose.classList.toggle('hidden', !open);
  });

  menu?.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
    })
  );

  const slug = path.replace(/^\/|\/index\.html$|\/$/g, '');
  const label = slug === '' ? 'Home' : slug.charAt(0).toUpperCase() + slug.slice(1);
  const active = NAV.find((item) => item.label === label);

  if (active) {
    header.querySelector(`[data-nav="${active.label}"]`)?.setAttribute('aria-current', 'page');
  }

  const siteHeader = document.getElementById('site-header');
  const onScroll = () => {
    const scrolled = window.scrollY > 24;
    siteHeader.classList.toggle('site-header-scrolled', scrolled);
    siteHeader.classList.toggle('shadow-lg', scrolled);
    siteHeader.classList.toggle('shadow-blue-900/5', scrolled);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

export default header;