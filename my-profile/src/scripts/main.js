import header from './header.js';

document.documentElement.classList.add('js');

if (!document.querySelector('.aurora')) {
  document.body.insertAdjacentHTML('afterbegin', '<div class="aurora" aria-hidden="true"></div>');
}

const BOUND = 'revealBound';

const initReveal = (root = document) => {
  const targets = [...root.querySelectorAll('.reveal')].filter(
    (el) => !el.dataset[BOUND] && !el.classList.contains('is-visible')
  );

  if (!targets.length) return;

  const show = (el) => {
    el.classList.add('is-visible');
    el.dataset[BOUND] = 'true';
  };

  if (!('IntersectionObserver' in window)) {
    targets.forEach(show);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        show(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((el) => {
    el.dataset[BOUND] = 'true';
    observer.observe(el);
  });
};

const scheduleReveal = () => requestAnimationFrame(() => initReveal());

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', scheduleReveal, { once: true });
} else {
  scheduleReveal();
}

export { header, initReveal };
export default header;