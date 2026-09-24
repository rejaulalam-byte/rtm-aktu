document.addEventListener('DOMContentLoaded', () => {
  initNewsCarousel();
  initFilterCarousel();
  initNoticeCarousel();
});

// ------------------------------------------------------------------
// Current News card (pages/admissions.html): the arrows cycle through
// the news items flagged `showOnAdmissions: true` in the shared
// pages/news/news-data.js (loaded before this file), swapping
// headline/excerpt/date/weekday/image together as one unit. The
// headline and the photo are the only two clickable elements, both
// linking to that item's News Details page. Flip the flag on a
// news-data.js entry (and give it an `excerpt`) to include it here —
// no HTML markup to duplicate. Sorted by createdOrder descending so the
// newest-added item is the first one shown, same convention as the
// university-news.html listing and job-circular.html.
// ------------------------------------------------------------------
const newsItems = Object.entries(newsData)
  .filter(([, item]) => item.showOnAdmissions)
  .sort(([, a], [, b]) => b.createdOrder - a.createdOrder)
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
// Filter tabs card (pages/admissions.html): "Current Events"
// (data-category="events") and "Notices" (data-category="notices") are
// live in-page tabs. "Result" is a plain link to result.html (no
// data-category), so it doesn't drive this card - see
// initFilterCarousel()'s `tabs` query, which only wires up elements that
// have data-category. "Notices" swaps #filterCard out for its own
// #filterCardNotice (a .notice-card, not the image card), driven by
// initNoticeCarousel() below.
//
// `events` is now sourced from the shared pages/events/events-data.js
// (loaded before this file) instead of its own inline array - same
// migration already done for the Admissions "Current News" card onto
// pages/news/news-data.js. Only items flagged `showOnAdmissions: true`
// appear here; flip that flag on an events-data.js entry to include it.
//
// The `results` and `others` entries below are unused (Notices now
// reads pages/notices/notices-data.js instead of `others`) but kept as
// ready-made content - re-add data-category="results" to the "Result"
// tab to bring that one back.
// ------------------------------------------------------------------
const filterCategories = {
  events: Object.values(eventsData)
    .filter((item) => item.showOnAdmissions)
    .sort((a, b) => b.createdOrder - a.createdOrder)
    .map((item) => ({
      image: item.image,
      headline: item.headline,
      excerpt: item.excerpt,
      date: formatEventDateShort(item.date),
      link: 'View All Events &rarr;',
    })),
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
  const filterCard = document.getElementById('filterCard');
  const noticeCard = document.getElementById('filterCardNotice');
  const noticeFooter = document.getElementById('filterCardNoticeFooter');

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

      const showNotices = category === 'notices';
      if (filterCard) filterCard.hidden = showNotices;
      if (noticeCard) noticeCard.hidden = !showNotices;
      if (noticeFooter) noticeFooter.hidden = !showNotices;
      if (!showNotices) render();
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

// ------------------------------------------------------------------
// "Notices" filter tab card (#filterCardNotice): the arrows cycle
// through the notices flagged `showOnAdmissions: true` in the shared
// pages/notices/notices-data.js (loaded before this file), newest-added
// first (createdOrder descending) - same convention as the Current News
// and Current Events cards. Both fields are written by the admin panel's
// notice export (self-bhalani/notice-lib.php) and are read defensively
// (`?? false` / `?? 0`) so hand-written entries without them still load.
// With no flagged notices the card shows a short empty message linking
// to notice-updates.html instead of a blank card.
// ------------------------------------------------------------------
const noticeItems = Object.entries(typeof noticesData === 'undefined' ? {} : noticesData)
  .filter(([, item]) => item.showOnAdmissions ?? false)
  .sort(([, a], [, b]) => (b.createdOrder ?? 0) - (a.createdOrder ?? 0))
  .map(([id, item]) => ({
    id,
    text: item.text,
    date: formatNoticeDateLong(item.date),
    weekday: formatNoticeWeekday(item.date),
  }));

function initNoticeCarousel() {
  const card = document.getElementById('filterCardNotice');
  const prevBtn = document.getElementById('filterNoticePrev');
  const nextBtn = document.getElementById('filterNoticeNext');
  const linkCard = document.getElementById('filterNoticeLinkCard');
  if (!card || !prevBtn || !nextBtn || !linkCard) return;

  const badge = document.getElementById('filterNoticeBadge');
  const text = document.getElementById('filterNoticeText');
  const date = document.getElementById('filterNoticeDate');
  const weekday = document.getElementById('filterNoticeWeekday');
  const dateMeta = linkCard.querySelector('.date-meta');
  const detailsLink = linkCard.querySelector('.adm-notice-card__details-link');

  if (!noticeItems.length) {
    linkCard.href = 'notice-updates.html';
    text.textContent = 'No notices are featured here right now. See all notices on the Notice & Updates page.';
    [badge, dateMeta, detailsLink, prevBtn, nextBtn].forEach((el) => {
      if (el) el.hidden = true;
    });
    return;
  }

  // A single notice has nothing to cycle through.
  if (noticeItems.length === 1) {
    prevBtn.style.visibility = 'hidden';
    nextBtn.style.visibility = 'hidden';
  }

  let index = 0;

  const render = () => {
    const item = noticeItems[index];
    linkCard.href = `notice-details.html?id=${encodeURIComponent(item.id)}`;
    badge.textContent = String(index + 1).padStart(2, '0');
    text.textContent = item.text;
    date.textContent = item.date;
    weekday.textContent = item.weekday;
  };

  render();

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + noticeItems.length) % noticeItems.length;
    render();
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % noticeItems.length;
    render();
  });
}
