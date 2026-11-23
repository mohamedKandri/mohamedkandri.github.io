// Project details
document.querySelectorAll('.project-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.project');
    const open = !card.classList.contains('open');
    document.querySelectorAll('.project.open').forEach(c => {
      c.classList.remove('open');
      c.querySelector('.project-toggle').setAttribute('aria-expanded', 'false');
    });
    if (open) {
      card.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// Close the mobile menu after picking a link
const menu = document.querySelector('.menu');
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.removeAttribute('open')));

// Highlight the section in view
const links = document.querySelectorAll('.nav-link');
const spy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section').forEach(s => spy.observe(s));

// Contact form opens a prefilled email, since the page has no server
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const f = this.elements;
  const name = f.name.value.trim();
  const email = f.email.value.trim();
  const message = f.message.value.trim();
  const subject = encodeURIComponent('Portfolio contact from ' + name);
  const body = encodeURIComponent(message + '\n\n' + name + ' · ' + email);
  window.location.href = 'mailto:Skandri30@gmail.com?subject=' + subject + '&body=' + body;
  document.getElementById('formNote').textContent = 'Your email app should open now. If it does not, write to Skandri30@gmail.com';
});
