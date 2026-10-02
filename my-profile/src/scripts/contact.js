import './main.js';

const contact = document.getElementById('contact');

const CHANNELS = [
  {
    label: 'Email',
    value: 'hello@yakanspace.dev',
    href: 'mailto:hello@yakanspace.dev',
    icon: 'M4 6h16v12H4zM4 7l8 6 8-6',
  },
  {
    label: 'GitHub',
    value: 'github.com/frank-job',
    href: 'https://github.com/frank-job',
    icon: 'M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z',
  },
  {
    label: 'Location',
    value: 'Uganda',
    href: null,
    icon: 'M12 21s-7-5.2-7-10a7 7 0 1114 0c0 4.8-7 10-7 10zm0-8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
  },
];

const SERVICES_INTEREST = [
  'Web Development',
  'UI/UX & Web Design',
  'Database & Backend',
  'Office & Presentations',
  'Adobe Creative Suite',
  'Teaching & Support',
];

if (contact) {
  contact.innerHTML = `
    <section id="contact" class="section relative">
      <div class="glow-orb w-96 h-96 top-10 left-1/2 -translate-x-1/2 bg-blue-600/25 animate-drift"></div>
      <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div class="glass-strong rounded-[2rem] p-6 sm:p-10 lg:p-14">
          <div class="grid gap-8 lg:gap-10 lg:grid-cols-[0.9fr_1.1fr]">

            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Contact</p>
              <h2 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                Let's build <span class="gradient-text">something good</span>
              </h2>
              <p class="mt-5 text-muted leading-relaxed">
                Have a project, a role, or just a question? Send a message and I'll reply within
                24 hours. Currently open to freelance work, contract work and full-time roles.
              </p>

              <ul class="mt-8 space-y-3">
                ${CHANNELS.map(
                  (channel) => `
                  <li>
                    ${
                      channel.href
                        ? `<a href="${channel.href}" ${channel.href.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}
                            class="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 px-4 py-3.5 transition-colors hover:bg-blue-50">
                            <span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                              <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="${channel.icon}" /></svg>
                            </span>
                            <span class="min-w-0">
                              <span class="block text-xs uppercase tracking-[0.18em] text-slate-600">${channel.label}</span>
                              <span class="block truncate text-sm font-semibold text-slate-900">${channel.value}</span>
                            </span>
                          </a>`
                        : `<div class="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 px-4 py-3.5">
                            <span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                              <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="${channel.icon}" /></svg>
                            </span>
                            <span>
                              <span class="block text-xs uppercase tracking-[0.18em] text-slate-600">${channel.label}</span>
                              <span class="block text-sm font-semibold text-slate-900">${channel.value}</span>
                            </span>
                          </div>`
                    }
                  </li>`
                ).join('')}
              </ul>
            </div>

            <form id="contact-form" class="grid gap-4 content-start" novalidate>
              <div class="grid gap-4 sm:grid-cols-2">
                <label class="grid gap-2">
                  <span class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">Name</span>
                  <input name="name" type="text" required placeholder="Your name" autocomplete="name"
                    class="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-blue-500 focus:bg-white" />
                </label>
                <label class="grid gap-2">
                  <span class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">Email</span>
                  <input name="email" type="email" required placeholder="you@example.com" autocomplete="email"
                    class="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-blue-500 focus:bg-white" />
                </label>
              </div>

              <label class="grid gap-2">
                <span class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">Service needed</span>
                <select name="service"
                  class="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500">
                  <option value="">Select a service</option>
                  ${SERVICES_INTEREST.map((service) => `<option value="${service}">${service}</option>`).join('')}
                </select>
              </label>

              <label class="grid gap-2">
                <span class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">Message</span>
                <textarea name="message" rows="5" required placeholder="Tell me about your project, timeline and budget..."
                  class="resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-blue-500 focus:bg-white"></textarea>
              </label>

              <button type="submit" class="btn btn-primary w-full">Send message</button>
              <p id="contact-status" role="status" class="text-sm text-center text-slate-600"></p>
            </form>
          </div>
        </div>

        <footer class="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-600 sm:flex-row">
          <p>&copy; <span id="year"></span> Yakan Frank. Built with Vite &amp; Tailwind CSS.</p>
          <nav class="flex flex-wrap items-center justify-center gap-5" aria-label="Footer">
            <a href="/#home" class="transition-colors hover:text-slate-900">Home</a>
            <a href="/#about" class="transition-colors hover:text-slate-900">About</a>
            <a href="/#skills" class="transition-colors hover:text-slate-900">Skills</a>
            <a href="/#projects" class="transition-colors hover:text-slate-900">Projects</a>
            <a href="/pages/contact/index.html" class="transition-colors hover:text-slate-900">Contact</a>
          </nav>
        </footer>
      </div>
    </section>
  `;

  document.getElementById('year').textContent = new Date().getFullYear();

  const form = document.getElementById('contact-form');
  const status = document.getElementById('contact-status');

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();

    if (!name || !data.get('email') || !data.get('message')) {
      status.textContent = 'Please fill in your name, email and message.';
      status.className = 'text-sm text-center text-amber-700';
      return;
    }

    status.textContent = `Thanks${name ? `, ${name}` : ''}! Your message has been noted — I'll reply within 24 hours.`;
    status.className = 'text-sm text-center text-emerald-700';
    form.reset();
  });
}

export default contact;