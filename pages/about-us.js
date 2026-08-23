document.addEventListener('DOMContentLoaded', () => {
  initFaqAccordion();
  initAboutContactForm();
});

// ------------------------------------------------------------------
// FAQ accordion: one panel open at a time
// ------------------------------------------------------------------
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach((item) => {
    const question = item.querySelector('.faq-item__question');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      items.forEach((other) => {
        other.classList.remove('is-open');
        other.querySelector('.faq-item__question').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('is-open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ------------------------------------------------------------------
// Contact form (front-end only, no backend wired up)
// ------------------------------------------------------------------
function initAboutContactForm() {
  const form = document.getElementById('aboutContactForm');
  const status = document.getElementById('aboutContactStatus');
  if (!form || !status) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = 'Thank you! Our admissions team will get back to you shortly.';
    form.reset();
  });
}
