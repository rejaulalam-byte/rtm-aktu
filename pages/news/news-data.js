// ------------------------------------------------------------------
// Central data source for the University News listing
// (pages/university-news.html), the Admissions "Current News" carousel
// (pages/admissions.html + admissions.js), and the News Details template
// (pages/news-details.html?id=<key>). One record per news item, keyed by
// id - no HTML markup to duplicate across pages.
//
// `showOnAdmissions: true` marks an item as one of the items the
// Admissions page's "Current News" carousel cycles through. This is the
// hand-maintained stand-in for the per-item "show on Admissions" toggle
// the future admin panel will expose - flip this flag instead of adding
// a new hardcoded carousel entry once that panel exists.
//
// `excerpt` is only shown on the Admissions carousel card, so it's only
// filled in for showOnAdmissions items.
//
// `body` holds placeholder paragraph copy (from the Figma News Details
// design) reused across every item until real per-item article text is
// written - same handling as the faculty-profile boilerplate blocks.
//
// Paths below are relative to pages/ (university-news.html, admissions.html
// and news-details.html all live at that same depth).
// ------------------------------------------------------------------
const newsPlaceholderBody = [
  "Choosing a university is an important decision that shapes a student’s academic journey, personal development, and future career. RTM Al-Kabir Technical University (RTM-AKTU) is committed to providing a modern, inclusive, and career-focused learning environment where students can develop the knowledge, skills, creativity, and confidence needed to succeed in a rapidly changing world. With a strong emphasis on quality education, experienced faculty members, practical learning, research and innovation, and professional development, RTM-AKTU seeks to bridge the gap between academic knowledge and real-world requirements.",
  "The university encourages students to think critically, explore new ideas, engage in meaningful research, and gain practical experience beyond the traditional classroom. A contemporary campus environment, dedicated and knowledgeable faculty, opportunities for research and innovation, and strong career-oriented support together create an educational experience designed to prepare graduates for higher studies, professional careers, entrepreneurship, and meaningful contributions to society. At RTM-AKTU, students are not simply prepared to earn a degree—they are encouraged to build the competence, character, and confidence to shape their own future.",
];

const newsData = {
  'rtm-aktu-hosts-international-research-conference-2026': {
    headline: 'RTM-AKTU Hosts International Research Conference 2026',
    date: '2026-08-28',
    image: '../images/university-news/news-01.jpg',
    showOnAdmissions: false,
    body: newsPlaceholderBody,
  },
  'new-academic-programs-introduced-this-semester': {
    headline: 'New Academic Programs Introduced This Semester.',
    date: '2026-08-26',
    image: '../images/university-news/news-02.jpg',
    showOnAdmissions: false,
    body: newsPlaceholderBody,
  },
  'students-achieve-outstanding-results-in-national-competitions': {
    headline: 'Students Achieve Outstanding Results in National Competitions',
    date: '2026-08-26',
    image: '../images/university-news/news-03.jpg',
    showOnAdmissions: false,
    body: newsPlaceholderBody,
  },
  'ugc-member-inaugurates-laboratories': {
    headline: "Professor Dr. Anwar Hossain, Honorable Member of the UGC, officially inaugurated the laboratories during his visit to RTM-AKTU on Sept. 20, 2025.",
    date: '2026-08-26',
    image: '../images/university-news/news-04.jpg',
    showOnAdmissions: false,
    body: newsPlaceholderBody,
  },
  'rtm-aktu-opens-admission-window-for-upcoming-academic-session': {
    headline: 'RTM-AKTU Opens Admission Window for Upcoming Academic Session',
    date: '2026-08-18',
    image: '../images/admissions/news-1.jpg',
    showOnAdmissions: true,
    excerpt: 'Prospective students can now begin the application process for undergraduate and postgraduate programs across all faculties.',
    body: newsPlaceholderBody,
  },
  'new-scholarship-fund-launched-for-first-generation-university-students': {
    headline: 'New Scholarship Fund Launched for First-Generation University Students',
    date: '2026-08-25',
    image: '../images/admissions/news-2.jpg',
    showOnAdmissions: true,
    excerpt: 'The scholarship office has opened applications for a new needs-based fund supporting students who are the first in their family to attend university.',
    body: newsPlaceholderBody,
  },
  'department-of-cse-signs-research-partnership-with-regional-tech-firm': {
    headline: 'Department of CSE Signs Research Partnership with Regional Tech Firm',
    date: '2026-09-05',
    image: '../images/admissions/news-3.jpg',
    showOnAdmissions: true,
    excerpt: 'The partnership will fund joint research projects and create new internship placements for undergraduate students starting next semester.',
    body: newsPlaceholderBody,
  },
};

// Shared date helpers so the listing, the carousel and the details page
// all format the same ISO `date` value the same way.
function formatNewsDateLong(isoDate) {
  const date = new Date(`${isoDate}T00:00:00`);
  return date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
}

function formatNewsDateShort(isoDate) {
  const date = new Date(`${isoDate}T00:00:00`);
  return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
}

function formatNewsWeekday(isoDate) {
  const date = new Date(`${isoDate}T00:00:00`);
  return date.toLocaleDateString('en-US', { weekday: 'long' });
}
