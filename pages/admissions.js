document.addEventListener('DOMContentLoaded', () => {
  initNewsCarousel();
  initFilterCarousel();
});

// ------------------------------------------------------------------
// Current News card (pages/admissions.html): the arrows cycle through
// the news items flagged `showOnAdmissions: true` in the shared
// pages/news/news-data.js (loaded before this file), swapping
// headline/excerpt/date/weekday/image together as one unit. The
// headline and the photo are the only two clickable elements, both
// linking to that item's News Details page. Flip the flag on a
// news-data.js entry (and give it an `excerpt`) to include it here —
// no HTML markup to duplicate.
// ------------------------------------------------------------------
const newsItems = Object.entries(newsData)
  .filter(([, item]) => item.showOnAdmissions)
  .map(([id, item]) => ({
    id,
    image: item.image,
    headline: item.headline,
    excerpt: item.excerpt,
    date: formatNewsDateShort(item.date),
    weekday: formatNewsWeekday(item.date),
  }));

function initNewsCarousel() {
  const card = document.getElementById('newsCard');
  const prevBtn = document.getElementById('newsPrev');
  const nextBtn = document.getElementById('newsNext');
  if (!card || !prevBtn || !nextBtn) return;

  const headline = document.getElementById('newsHeadline');
  const excerpt = document.getElementById('newsExcerpt');
  const date = document.getElementById('newsDate');
  const weekday = document.getElementById('newsWeekday');
  const imageWrap = document.getElementById('newsImageWrap');
  const image = document.getElementById('newsImage');

  let index = 0;

  const render = () => {
    const item = newsItems[index];
    const link = `news-details.html?id=${item.id}`;
    headline.textContent = item.headline;
    headline.href = link;
    excerpt.textContent = item.excerpt;
    date.textContent = item.date;
    weekday.textContent = item.weekday;
    imageWrap.classList.remove('img-ph--broken');
    imageWrap.href = link;
    image.src = item.image;
    image.alt = item.headline;
  };

  // Initial paint: the static markup matches newsItems[0], but the
  // headline/photo links still need their href set before any arrow click.
  render();

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + newsItems.length) % newsItems.length;
    render();
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % newsItems.length;
    render();
  });
}

// ------------------------------------------------------------------
// Filter tabs card (pages/admissions.html): "Current Events" is still a
// live in-page filter (data-category="events") - clicking it switches
// the card below and the prev/next arrows cycle through its items.
// "Notices" and "Result" are plain deferred links (href="#", no
// data-category) pending the real All Notices / Results pages, so they
// no longer drive this card - see initFilterCarousel()'s `tabs` query,
// which only wires up elements that still have data-category.
//
// The `results` and `others` entries below are unused now but kept as
// ready-made content for whenever "Notices"/"Result" get wired to real
// pages (or re-enabled as filter tabs) - re-add data-category="others"
// (Notices) / data-category="results" (Result) to bring one back.
// ------------------------------------------------------------------
const filterCategories = {
  events: [
    {
      image: '../images/admissions/event-1.jpg',
      headline: 'Orientation Day for New Undergraduate Students',
      excerpt: 'Join us for a full day of campus tours, faculty introductions, and academic advising ahead of the new semester.',
      date: 'Sep 02, 2026',
      link: 'View All Events &rarr;',
    },
    {
      image: '../images/admissions/event-2.jpg',
      headline: 'Annual Tech Fest 2026 Opens Registration for Student Teams',
      excerpt: 'Students from all departments can now register for this year\'s hackathon, robotics showcase, and innovation exhibits.',
      date: 'Sep 20, 2026',
      link: 'View All Events &rarr;',
    },
    {
      image: '../images/admissions/event-3.jpg',
      headline: 'Career Fair Brings Regional Employers to Campus',
      excerpt: 'Final-year students are invited to meet recruiters from partner companies for internship and job placement opportunities.',
      date: 'Oct 10, 2026',
      link: 'View All Events &rarr;',
    },
  ],
  results: [
    {
      image: '../images/admissions/result-1.jpg',
      headline: 'Fall 2025 Semester Results Published',
      excerpt: 'Final grades for all undergraduate and postgraduate programs are now available through the student portal.',
      date: 'Jan 12, 2026',
      link: 'View All Results &rarr;',
    },
    {
      image: '../images/admissions/result-2.jpg',
      headline: 'Best Thesis Award Winners Announced',
      excerpt: 'The academic council has recognized three outstanding postgraduate theses for excellence in research and impact.',
      date: 'Jan 28, 2026',
      link: 'View All Results &rarr;',
    },
    {
      image: '../images/admissions/result-3.jpg',
      headline: 'Board Examination Pass Rate Reaches Record High',
      excerpt: 'This year\'s cohort achieved the university\'s highest-ever pass rate across all affiliated departments.',
      date: 'Feb 15, 2026',
      link: 'View All Results &rarr;',
    },
  ],
  others: [
    {
      image: '../images/admissions/notice-1.jpg',
      headline: 'Campus Wi-Fi Upgrade Scheduled for Maintenance Window',
      excerpt: 'Network services will be briefly interrupted across campus buildings as part of a planned infrastructure upgrade.',
      date: 'Aug 30, 2026',
      link: 'View All Notices &rarr;',
    },
    {
      image: '../images/admissions/notice-2.jpg',
      headline: 'Library Extends Hours During Exam Season',
      excerpt: 'The central library will remain open until midnight on weekdays to support students preparing for upcoming exams.',
      date: 'Sep 10, 2026',
      link: 'View All Notices &rarr;',
    },
    {
      image: '../images/admissions/notice-3.jpg',
      headline: 'Updated Campus Shuttle Schedule Now in Effect',
      excerpt: 'A revised shuttle timetable connecting the main campus and hostel areas has been published for the new term.',
      date: 'Sep 18, 2026',
      link: 'View All Notices &rarr;',
    },
  ],
};

function initFilterCarousel() {
  const tabsWrap = document.getElementById('filterTabs');
  const prevBtn = document.getElementById('filterPrev');
  const nextBtn = document.getElementById('filterNext');
  if (!tabsWrap || !prevBtn || !nextBtn) return;

  const headline = document.getElementById('filterHeadline');
  const excerpt = document.getElementById('filterExcerpt');
  const date = document.getElementById('filterDate');
  const link = document.getElementById('filterLink');
  const imageWrap = document.getElementById('filterImageWrap');
  const image = document.getElementById('filterImage');
  const tabs = Array.from(tabsWrap.querySelectorAll('.adm-filter-tab[data-category]'));

  let category = 'events';
  let index = 0;

  const render = () => {
    const item = filterCategories[category][index];
    headline.textContent = item.headline;
    excerpt.textContent = item.excerpt;
    date.textContent = item.date;
    link.innerHTML = item.link;
    imageWrap.classList.remove('img-ph--broken');
    image.src = item.image;
    image.alt = item.headline;
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const next = tab.dataset.category;
      if (next === category) return;
      category = next;
      index = 0;
      tabs.forEach((t) => t.classList.toggle('is-active', t === tab));
      render();
    });
  });

  prevBtn.addEventListener('click', () => {
    const items = filterCategories[category];
    index = (index - 1 + items.length) % items.length;
    render();
  });

  nextBtn.addEventListener('click', () => {
    const items = filterCategories[category];
    index = (index + 1) % items.length;
    render();
  });
}
