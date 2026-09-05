document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initStickyHeader();
  initScrollSpy();
  initHeroSlider();
  renderGallery();
  initSlider({
    trackId: 'galleryTrack',
    prevId: 'galleryPrev',
    nextId: 'galleryNext',
    itemSelector: '.gallery__item',
  });
  initTestimonialSlider();
  initNewsletterForm();
  initCampusLifeVideo();
  initContactPageForm();
  initDateWeekdays();
});

// ------------------------------------------------------------------
// Mobile hamburger navigation
// ------------------------------------------------------------------
function initMobileNav() {
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');
  if (!navToggle || !primaryNav) return;

  const closeNav = () => {
    primaryNav.classList.remove('is-open');
    navToggle.classList.remove('is-active');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = primaryNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  primaryNav.querySelectorAll('.site-nav__link, .site-nav__cta').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('click', (e) => {
    if (primaryNav.classList.contains('is-open') &&
        !primaryNav.contains(e.target) &&
        !navToggle.contains(e.target)) {
      closeNav();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });
}

// ------------------------------------------------------------------
// Sticky header shadow on scroll
// ------------------------------------------------------------------
function initStickyHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  const toggleShadow = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
  };

  toggleShadow();
  window.addEventListener('scroll', toggleShadow, { passive: true });
}

// ------------------------------------------------------------------
// Scroll-spy: underline the nav link for the section in view
// ------------------------------------------------------------------
function initScrollSpy() {
  const navLinks = document.querySelectorAll('.site-nav__link');
  if (!navLinks.length) return;

  const sections = Array.from(navLinks)
    .filter((link) => link.getAttribute('href').startsWith('#'))
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = `#${entry.target.id}`;
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === id);
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach((section) => observer.observe(section));
}

// ------------------------------------------------------------------
// Hero: slides are generated from this list, so the hero can be
// changed just by editing this array — no HTML markup to duplicate.
//
// Each slide is entirely optional field-by-field (pillLabel, heading,
// subText, buttons, showSeal) — only what's present gets rendered.
// verticalPosition: 'top' | 'center' | 'bottom' — where the content
// block sits within the hero area; defaults to 'center' if omitted.
// 1 slide in the array = static hero (no rotation, no dots).
// 2+ slides = auto-rotating carousel with dot indicators.
// ------------------------------------------------------------------
const heroSlides = [
  {
    backgroundImage: 'images/hero/slide-1.jpg',
    pillLabel: 'SYLHET &middot; BANGLADESH &middot; EST. 2020',
    heading: [
      { text: 'Shaping The Future Through', color: 'white', breakAfter: true },
      { text: 'Education', color: 'gold' },
      { text: ' and ', color: 'white' },
      { text: 'Innovation', color: 'gold' },
    ],
    subText: "RTM Al-Kabir Technical University delivers world-class technical education through experienced faculty, modern learning facilities, and an industry-focused curriculum built for tomorrow's engineers and leaders.",
    showSeal: true,
    buttons: [
      { text: 'Explore Programs', style: 'primary', href: '#programs' },
      { text: 'Virtual Campus Tour', style: 'outline', href: '#campus-life' },
    ],
  },
  {
    backgroundImage: 'images/hero/slide-2.jpg',
    heading: [
      { text: 'Admissions Open for', color: 'white', breakAfter: true },
      { text: 'Fall 2026', color: 'gold' },
    ],
    showSeal: false,
    buttons: [
      { text: 'Apply Now', style: 'primary', href: 'pages/admissions.html' },
    ],
  },
  {
    backgroundImage: 'images/hero/slide-3.jpg',
    pillLabel: 'SCHOLARSHIPS &middot; FINANCIAL AID',
    heading: [
      { text: 'Merit Scholarships Up To', color: 'white', breakAfter: true },
      { text: '100% Tuition', color: 'gold' },
    ],
    subText: 'We reward academic excellence and support talented students from every background with need-based and merit scholarships across all faculties.',
    showSeal: true,
  },
];

function renderHeroSlide(slide, index) {
  const { backgroundImage, pillLabel, heading, subText, showSeal, buttons, verticalPosition } = slide;
  const position = verticalPosition || 'center';

  const pillHtml = pillLabel
    ? `<p class="pill pill--light"><img src="images/icons/student-cap.png" alt="" class="pill__icon">${pillLabel}</p>`
    : '';

  const headingHtml = heading && heading.length
    ? `<h1 class="hero__title">${heading
        .map(({ text, color, breakAfter }) => {
          const segment = color === 'gold' ? `<span class="text-gold">${text}</span>` : text;
          return breakAfter ? `${segment}<br>` : segment;
        })
        .join('')}</h1>`
    : '';

  const subTextHtml = subText ? `<p class="hero__subtitle">${subText}</p>` : '';

  const buttonsHtml = buttons && buttons.length
    ? `<div class="hero__actions">${buttons
        .map(({ text, style, href }) => {
          const cls = style === 'primary' ? 'btn btn-primary' : 'btn btn-outline btn-outline--light';
          return `<a href="${href}" class="${cls}">${text}</a>`;
        })
        .join('')}</div>`
    : '';

  const sealPathId = `sealCirclePath-${index}`;
  const sealHtml = showSeal
    ? `<div class="hero__seal" aria-hidden="true">
        <svg viewBox="0 0 210 210" class="hero__seal-rotate">
          <defs>
            <path id="${sealPathId}" d="M 105,105 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0" />
          </defs>
          <text fill="#FFFFFF" font-size="11" letter-spacing="2" font-family="Inter, sans-serif">
            <textPath href="#${sealPathId}">RTM AL-KABIR TECHNICAL UNIVERSITY &middot; SYLHET &middot; RTM AL-KABIR TECHNICAL UNIVERSITY &middot; SYLHET &middot;</textPath>
          </text>
        </svg>
        <img src="images/Logo-Seal.png" alt="" class="hero__seal-logo">
      </div>`
    : '';

  return `
    <div class="hero__slide" style="background-image: url('${backgroundImage}');">
      <div class="hero__overlay"></div>
      <div class="hero__inner">
        <div class="hero__content hero__content--${position}">
          ${pillHtml}
          ${headingHtml}
          ${subTextHtml}
          ${buttonsHtml}
        </div>
        ${sealHtml}
      </div>
    </div>`;
}

function initHeroSlider() {
  const slidesWrap = document.getElementById('heroSlides');
  const dotsWrap = document.getElementById('heroDots');
  const heroSection = document.getElementById('home');
  if (!slidesWrap || !dotsWrap || !heroSection || !heroSlides.length) return;

  slidesWrap.innerHTML = heroSlides.map(renderHeroSlide).join('');
  const slideEls = Array.from(slidesWrap.querySelectorAll('.hero__slide'));

  const isMultiSlide = heroSlides.length > 1;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const rotationEnabled = isMultiSlide && !prefersReducedMotion;

  let dots = [];
  if (isMultiSlide) {
    dotsWrap.innerHTML = heroSlides
      .map((_, i) => `<button type="button" class="hero__dot" role="tab" aria-label="Go to slide ${i + 1}"></button>`)
      .join('');
    dots = Array.from(dotsWrap.children);
  }

  let activeIndex = 0;
  let timer = null;

  const setActive = (index) => {
    activeIndex = index;
    slideEls.forEach((el, i) => el.classList.toggle('is-active', i === index));
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
  };

  const goTo = (index) => setActive((index + heroSlides.length) % heroSlides.length);

  const startTimer = () => {
    if (!rotationEnabled) return;
    timer = window.setInterval(() => goTo(activeIndex + 1), 7000);
  };

  const stopTimer = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goTo(i);
      stopTimer();
      startTimer();
    });
  });

  if (rotationEnabled) {
    heroSection.addEventListener('mouseenter', stopTimer);
    heroSection.addEventListener('mouseleave', startTimer);
  }

  setActive(0);
  startTimer();
}

// ------------------------------------------------------------------
// Photo Gallery: slides are generated from this list, so adding a
// new photo only needs a new entry here (plus the file in
// images/gallery/) — no HTML markup to duplicate.
// ------------------------------------------------------------------
const galleryImages = [
  { src: 'images/gallery/gallery-1.png', alt: 'Students on campus' },
  { src: 'images/gallery/gallery-2.png', alt: 'University library' },
  { src: 'images/gallery/gallery-3.png', alt: 'Engineering lab' },
  { src: 'images/gallery/gallery-4.png', alt: 'Graduation ceremony' },
];

function renderGallery() {
  const track = document.getElementById('galleryTrack');
  if (!track) return;

  track.innerHTML = galleryImages
    .map(({ src, alt }) => `
      <figure class="gallery__item"><img src="${src}" alt="${alt}" loading="lazy"></figure>
    `)
    .join('');
}

// ------------------------------------------------------------------
// Generic horizontal slider (used by Photo Gallery)
// ------------------------------------------------------------------
function initSlider({ trackId, prevId, nextId, itemSelector }) {
  const track = document.getElementById(trackId);
  const prevBtn = document.getElementById(prevId);
  const nextBtn = document.getElementById(nextId);
  if (!track || !prevBtn || !nextBtn) return;

  let index = 0;

  const visibleCount = () => {
    const width = window.innerWidth;
    if (width <= 560) return 1;
    if (width <= 860) return 2;
    return 3;
  };

  const update = () => {
    const items = track.querySelectorAll(itemSelector);
    const maxIndex = Math.max(0, items.length - visibleCount());
    index = Math.min(index, maxIndex);
    const itemWidth = items[0] ? items[0].getBoundingClientRect().width : 0;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    track.style.transform = `translateX(-${index * (itemWidth + gap)}px)`;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index >= maxIndex;
  };

  nextBtn.addEventListener('click', () => {
    const items = track.querySelectorAll(itemSelector);
    const maxIndex = Math.max(0, items.length - visibleCount());
    index = Math.min(index + 1, maxIndex);
    update();
  });

  prevBtn.addEventListener('click', () => {
    index = Math.max(index - 1, 0);
    update();
  });

  window.addEventListener('resize', update);
  update();
}

// ------------------------------------------------------------------
// Students Feedback: testimonial cards are generated from this list,
// so adding a new testimonial only needs a new entry here (plus the
// photo in images/testimonials/) — no HTML markup to duplicate.
// ------------------------------------------------------------------
const testimonials = [
  {
    photo: 'images/testimonials/student-1.jpg',
    name: 'Nusrat Jahan',
    department: 'Computer Science &amp; Engineering',
    rating: 5,
    quote: 'The hands-on labs and supportive faculty at RTM-AKTU gave me real confidence going into my career.',
  },
  {
    photo: 'images/testimonials/student-2.jpg',
    name: 'Rakibul Islam',
    department: 'Business Administration',
    rating: 5,
    quote: 'Small class sizes and a genuinely helpful administration made my transition to university easy.',
  },
  {
    photo: 'images/testimonials/student-3.jpg',
    name: 'Farzana Akter',
    department: 'Public Health',
    rating: 5,
    quote: 'The career support office helped me land an internship before I even graduated.',
  },
  {
    photo: 'images/testimonials/student-4.jpg',
    name: 'Farhana Akter',
    department: 'Computer Science and Engineering',
    rating: 5,
    quote: 'The faculty here genuinely care about your growth. The hands-on lab work gave me real confidence before my first internship.',
  },
  {
    photo: 'images/testimonials/student-5.jpg',
    name: 'Tanvir Ahmed',
    department: 'Electrical and Electronic Engineering',
    rating: 5,
    quote: 'From day one, RTM-AKTU felt like a place built for serious learners. The campus, the mentors, the opportunities — everything just clicked.',
  },
];

function renderTestimonials(track) {
  track.innerHTML = testimonials
    .map(({ photo, name, department, rating, quote }) => `
      <article class="testimonial-card">
        <img src="${photo}" alt="Photo of ${name}" class="testimonial-card__photo" loading="lazy">
        <div class="testimonial-card__stars" aria-label="${rating} out of 5 stars">${'&#9733;'.repeat(rating)}</div>
        <p class="testimonial-card__quote">"${quote}"</p>
        <p class="testimonial-card__name">${name}</p>
        <p class="testimonial-card__dept">${department}</p>
      </article>
    `)
    .join('');
}

// ------------------------------------------------------------------
// Students Feedback testimonial carousel with dots + active highlight
// ------------------------------------------------------------------
function initTestimonialSlider() {
  const track = document.getElementById('testimonialTrack');
  const prevBtn = document.getElementById('testimonialPrev');
  const nextBtn = document.getElementById('testimonialNext');
  const dotsWrap = document.getElementById('testimonialDots');
  if (!track || !prevBtn || !nextBtn || !dotsWrap) return;

  renderTestimonials(track);
  const cards = Array.from(track.querySelectorAll('.testimonial-card'));
  if (!cards.length) return;

  let activeIndex = 0;

  dotsWrap.innerHTML = '';
  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'testimonials__dot';
    dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
    dot.addEventListener('click', () => {
      activeIndex = i;
      update();
    });
    dotsWrap.appendChild(dot);
  });

  const dots = Array.from(dotsWrap.children);

  const visibleCount = () => {
    const width = window.innerWidth;
    if (width <= 560) return 1;
    if (width <= 860) return 2;
    return 3;
  };

  const update = () => {
    const visible = visibleCount();
    const maxScroll = Math.max(0, cards.length - visible);
    const scrollIndex = Math.min(Math.max(activeIndex - Math.floor((visible - 1) / 2), 0), maxScroll);

    const cardWidth = cards[0].getBoundingClientRect().width;
    const marginRight = parseFloat(getComputedStyle(cards[0]).marginRight) || 0;
    track.style.transform = `translateX(-${scrollIndex * (cardWidth + marginRight)}px)`;

    cards.forEach((card, i) => card.classList.toggle('is-active', i === activeIndex));
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === activeIndex));
  };

  nextBtn.addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % cards.length;
    update();
  });

  prevBtn.addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + cards.length) % cards.length;
    update();
  });

  window.addEventListener('resize', update);
  update();
}

// ------------------------------------------------------------------
// Newsletter signup (front-end only, no backend wired up)
// ------------------------------------------------------------------
function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  const status = document.getElementById('newsletterStatus');
  if (!form || !status) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = 'Thanks for subscribing! Check your inbox to confirm.';
    form.reset();
  });
}

// ------------------------------------------------------------------
// Contact page: "Send Us a Message" form (front-end only, no backend wired up)
// ------------------------------------------------------------------
function initContactPageForm() {
  const form = document.getElementById('contactPageForm');
  const status = document.getElementById('contactPageStatus');
  if (!form || !status) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = 'Thank you! Your message has been sent — our team will get back to you soon.';
    form.reset();
  });
}

// ------------------------------------------------------------------
// News & Notice date rows: the weekday label next to each date is
// computed from that item's data-date rather than hardcoded, so it
// can never drift out of sync if the date is edited later.
// ------------------------------------------------------------------
function initDateWeekdays() {
  document.querySelectorAll('.js-weekday').forEach((el) => {
    const dateValue = el.dataset.date;
    if (!dateValue) return;
    const date = new Date(`${dateValue}T00:00:00`);
    if (Number.isNaN(date.getTime())) return;
    el.textContent = date.toLocaleDateString('en-US', { weekday: 'long' });
  });
}

// ------------------------------------------------------------------
// Discover Campus Life: click-to-play video
// ------------------------------------------------------------------
function initCampusLifeVideo() {
  const wrapper = document.querySelector('.campus-life__video-wrapper');
  if (!wrapper) return;

  const video = wrapper.querySelector('.campus-life__video');
  const playBtn = wrapper.querySelector('.campus-life__play-btn');

  const startPlayback = () => {
    video.controls = true;
    video.play();
    playBtn.classList.add('is-hidden');
  };

  playBtn.addEventListener('click', startPlayback);
  video.addEventListener('click', () => {
    if (video.paused) startPlayback();
  });
}
