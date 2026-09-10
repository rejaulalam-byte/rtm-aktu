// ------------------------------------------------------------------
// Central data source for pages/notice-updates.html, one record per
// notice keyed by id - same data-driven pattern as
// pages/news/news-data.js.
//
// Entries 1-4 are the Figma design's own placeholder text (fixed the
// mockup's "dut to" typo to "due to") for every notice until real
// per-notice copy is written - same handling as the News Details
// placeholder body text.
//
// Entries 5-6 are copied in from the Home page's existing Notice Board
// (index.html) - that section is untouched; this is additive.
// ------------------------------------------------------------------
const noticesData = {
  'university-closed-for-eid-ul-fitar-1': {
    text: 'University will remain close due to Eid-ul-Fitar from 22-Aug.-2026 to 24-Aug.-2026',
    date: '2026-08-22',
  },
  'university-closed-for-eid-ul-fitar-2': {
    text: 'University will remain close due to Eid-ul-Fitar from 22-Aug.-2026 to 24-Aug.-2026',
    date: '2026-08-22',
  },
  'university-closed-for-eid-ul-fitar-3': {
    text: 'University will remain close due to Eid-ul-Fitar from 22-Aug.-2026 to 24-Aug.-2026',
    date: '2026-08-22',
  },
  'university-closed-for-eid-ul-fitar-4': {
    text: 'University will remain close due to Eid-ul-Fitar from 22-Aug.-2026 to 24-Aug.-2026',
    date: '2026-08-22',
  },
  'admission-circular-for-spring-2026-session-published': {
    text: 'Admission Circular for Spring 2026 Session Published',
    date: '2026-08-10',
  },
  'semester-fee-payment-deadline-august-30-2026': {
    text: 'Semester Fee Payment Deadline: August 30, 2026',
    date: '2026-08-05',
  },
};

function formatNoticeDateLong(isoDate) {
  const date = new Date(`${isoDate}T00:00:00`);
  return date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
}

function formatNoticeWeekday(isoDate) {
  const date = new Date(`${isoDate}T00:00:00`);
  return date.toLocaleDateString('en-US', { weekday: 'long' });
}
