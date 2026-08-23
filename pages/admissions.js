document.addEventListener('DOMContentLoaded', () => {
  initNewsCarousel();
  initFilterCarousel();
});

// ------------------------------------------------------------------
// Current News card (pages/admissions.html): the arrows cycle through
// this list, swapping headline/excerpt/date/image together as one
// unit. Add a new entry here (plus the photo in images/admissions/)
// to include another news item — no HTML markup to duplicate.
// ------------------------------------------------------------------
const newsItems = [
  {
    image: '../images/admissions/news-1.jpg',
    headline: 'RTM-AKTU Opens Admission Window for Upcoming Academic Session',
    excerpt: 'Prospective students can now begin the application process for undergraduate and postgraduate programs across all faculties.',
    date: 'Aug 18, 2026',
  },
  {
    image: '../images/admissions/news-2.jpg',
    headline: 'New Scholarship Fund Launched for First-Generation University Students',
    excerpt: 'The scholarship office has opened applications for a new needs-based fund supporting students who are the first in their family to attend university.',
    date: 'Aug 25, 2026',
  },
  {
    image: '../images/admissions/news-3.jpg',
    headline: 'Department of CSE Signs Research Partnership with Regional Tech Firm',
    excerpt: 'The partnership will fund joint research projects and create new internship placements for undergraduate students starting next semester.',
    date: 'Sep 05, 2026',
  },
];

function initNewsCarousel() {
  const card = document.getElementById('newsCard');
  const prevBtn = document.getElementById('newsPrev');
  const nextBtn = document.getElementById('newsNext');
  if (!card || !prevBtn || !nextBtn) return;

  const headline = document.getElementById('newsHeadline');
  const excerpt = document.getElementById('newsExcerpt');
  const date = document.getElementById('newsDate');
  const imageWrap = document.getElementById('newsImageWrap');
  const image = document.getElementById('newsImage');

  let index = 0;

  const render = () => {
    const item = newsItems[index];
    headline.textContent = item.headline;
    excerpt.textContent = item.excerpt;
    date.textContent = item.date;
    imageWrap.classList.remove('img-ph--broken');
    image.src = item.image;
    image.alt = item.headline;
  };

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
// Filter tabs card (pages/admissions.html): "Current Events" / "Results"
// / "Others" each hold their own small list of items. Clicking a tab
// switches the active data source and resets the carousel to item 1;
// the prev/next arrows then cycle through that tab's items, looping
// at both ends — same pattern as the Current News carousel above.
// Add or edit entries in the arrays below (plus photos in
// images/admissions/) to change what each tab shows.
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
  const tabs = Array.from(tabsWrap.querySelectorAll('.adm-filter-tab'));

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
