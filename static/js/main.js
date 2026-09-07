const body = document.body;
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.querySelector('.theme-toggle');

menuButton?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
navLinks?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

themeToggle?.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  themeToggle.textContent = body.classList.contains('light-mode') ? '☼' : '◐';
});

const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const countObserver = new IntersectionObserver((entries, observer) => entries.forEach((entry) => {
  if (!entry.isIntersecting) return;
  const number = entry.target;
  const target = Number(number.dataset.count);
  const decimals = String(target).includes('.') ? 1 : 0;
  let current = 0;
  const step = target / 45;
  const tick = () => {
    current = Math.min(target, current + step);
    number.firstChild.textContent = current.toFixed(decimals);
    if (current < target) requestAnimationFrame(tick);
  };
  tick();
  observer.unobserve(number);
}), { threshold: 0.8 });
document.querySelectorAll('[data-count]').forEach((number) => countObserver.observe(number));

document.querySelectorAll('details').forEach((detail) => detail.addEventListener('toggle', () => {
  if (detail.open) document.querySelectorAll('details[open]').forEach((other) => { if (other !== detail) other.removeAttribute('open'); });
}));

document.querySelectorAll('[data-billing]').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('[data-billing]').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  const type = button.dataset.billing;
  document.querySelectorAll('[data-monthly]').forEach((price) => { price.firstChild.textContent = `$${price.dataset[type]}`; });
}));

let testimonialIndex = 0;
const testimonials = [...document.querySelectorAll('.testimonial')];
const showTestimonial = (index) => testimonials.forEach((card, cardIndex) => card.classList.toggle('active', cardIndex === index));
document.querySelector('[data-next]')?.addEventListener('click', () => { testimonialIndex = (testimonialIndex + 1) % testimonials.length; showTestimonial(testimonialIndex); });
document.querySelector('[data-prev]')?.addEventListener('click', () => { testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length; showTestimonial(testimonialIndex); });

const modal = document.querySelector('.modal');
document.querySelector('[data-modal-open]')?.addEventListener('click', () => modal.classList.add('open'));
document.querySelectorAll('[data-modal-close]').forEach((button) => button.addEventListener('click', () => modal.classList.remove('open')));
modal?.addEventListener('click', (event) => { if (event.target === modal) modal.classList.remove('open'); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') modal?.classList.remove('open'); });

document.querySelector('.newsletter')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = event.currentTarget.querySelector('input');
  const message = document.querySelector('.form-message');
  if (!email.validity.valid) { message.textContent = 'Please enter a valid email.'; return; }
  message.textContent = 'You are on the list. Welcome to NOVA.';
  email.value = '';
});

const backTop = document.querySelector('.back-top');
window.addEventListener('scroll', () => backTop.classList.toggle('visible', window.scrollY > 600));
backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
