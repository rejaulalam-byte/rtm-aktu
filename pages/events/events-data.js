// ------------------------------------------------------------------
// Central data source for the Current Events listing
// (pages/current-events.html), the Admissions "Current Events" filter
// card (pages/admissions.html + admissions.js), and the Event Details
// template (pages/event-details.html?id=<key>). One record per event,
// keyed by id - same data-driven pattern as pages/news/news-data.js.
//
// The first 3 entries are migrated as-is from the inline
// `filterCategories.events` array that used to live in admissions.js -
// same headline/excerpt/date/image content, just moved here so the
// listing/detail pages and the Admissions card share one source
// instead of duplicating these items.
//
// `showOnAdmissions: true` marks an item as one of the items the
// Admissions page's "Current Events" filter card cycles through - same
// hand-maintained stand-in for the future admin panel's per-item
// toggle as newsData's showOnAdmissions flag.
//
// `excerpt` is only shown on the Admissions card, so it's only filled
// in for showOnAdmissions items.
//
// `body` holds the same placeholder paragraph copy used across
// News/Notices until real per-event article text is written.
//
// Paths below are relative to pages/ (current-events.html, admissions.html
// and event-details.html all live at that same depth).
// ------------------------------------------------------------------
const eventsPlaceholderBody = [
  "Choosing a university is an important decision that shapes a student’s academic journey, personal development, and future career. RTM Al-Kabir Technical University (RTM-AKTU) is committed to providing a modern, inclusive, and career-focused learning environment where students can develop the knowledge, skills, creativity, and confidence needed to succeed in a rapidly changing world. With a strong emphasis on quality education, experienced faculty members, practical learning, research and innovation, and professional development, RTM-AKTU seeks to bridge the gap between academic knowledge and real-world requirements.",
  "The university encourages students to think critically, explore new ideas, engage in meaningful research, and gain practical experience beyond the traditional classroom. A contemporary campus environment, dedicated and knowledgeable faculty, opportunities for research and innovation, and strong career-oriented support together create an educational experience designed to prepare graduates for higher studies, professional careers, entrepreneurship, and meaningful contributions to society. At RTM-AKTU, students are not simply prepared to earn a degree—they are encouraged to build the competence, character, and confidence to shape their own future.",
];

const eventsData = {
  'orientation-day-for-new-undergraduate-students': {
    headline: 'Orientation Day for New Undergraduate Students',
    date: '2026-09-02',
    image: '../images/current-events/event-01.jpg',
    showOnAdmissions: true,
    excerpt: 'Join us for a full day of campus tours, faculty introductions, and academic advising ahead of the new semester.',
    body: eventsPlaceholderBody,
  },
  'annual-tech-fest-2026-opens-registration-for-student-teams': {
    headline: 'Annual Tech Fest 2026 Opens Registration for Student Teams',
    date: '2026-09-20',
    image: '../images/current-events/event-02.jpg',
    showOnAdmissions: true,
    excerpt: 'Students from all departments can now register for this year\'s hackathon, robotics showcase, and innovation exhibits.',
    body: eventsPlaceholderBody,
  },
  'career-fair-brings-regional-employers-to-campus': {
    headline: 'Career Fair Brings Regional Employers to Campus',
    date: '2026-10-10',
    image: '../images/current-events/event-03.jpg',
    showOnAdmissions: true,
    excerpt: 'Final-year students are invited to meet recruiters from partner companies for internship and job placement opportunities.',
    body: eventsPlaceholderBody,
  },
};

// Shared date helpers so the listing, the Admissions card, and the
// details page all format the same ISO `date` value the same way -
// same helpers as formatNewsDateLong/Short/Weekday in news-data.js.
function formatEventDateLong(isoDate) {
  const date = new Date(`${isoDate}T00:00:00`);
  return date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
}

function formatEventDateShort(isoDate) {
  const date = new Date(`${isoDate}T00:00:00`);
  return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
}

function formatEventWeekday(isoDate) {
  const date = new Date(`${isoDate}T00:00:00`);
  return date.toLocaleDateString('en-US', { weekday: 'long' });
}
