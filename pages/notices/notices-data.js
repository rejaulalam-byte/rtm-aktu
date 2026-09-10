// ------------------------------------------------------------------
// Central data source for pages/notice-updates.html and
// pages/notice-details.html?id=<key>, one record per notice keyed by
// id - same data-driven pattern as pages/news/news-data.js.
//
// Entries 1-4 are the Figma design's own placeholder text (fixed the
// mockup's "dut to" typo to "due to") for every notice until real
// per-notice copy is written - same handling as the News Details
// placeholder body text.
//
// Entries 5-6 are copied in from the Home page's existing Notice Board
// (index.html) - that section is untouched; this is additive.
//
// `body` and `document` are shared placeholders (Figma's own intro
// paragraph and sample notice document) reused across every record for
// now, pending real per-notice copy and scanned documents - same
// handling as the News Details placeholder body/photo.
// ------------------------------------------------------------------
const noticePlaceholderBody = 'Choosing a university is an important decision that shapes a student’s academic journey, personal development, and future career. RTM Al-Kabir Technical University (RTM-AKTU) is committed to providing a modern, inclusive, and career-focused learning environment where students can develop the knowledge, skills, creativity, and confidence needed to succeed in a rapidly changing world. With a strong emphasis on quality education, experienced faculty members, practical learning, research and innovation, and professional development, RTM-AKTU seeks to bridge the gap between academic knowledge and real-world requirements.';

const noticePlaceholderDocument = '../images/notices/notice-document-placeholder.jpg';

const noticesData = {
  'university-closed-for-eid-ul-fitar-1': {
    text: 'University will remain close due to Eid-ul-Fitar from 22-Aug.-2026 to 24-Aug.-2026',
    date: '2026-08-22',
    body: noticePlaceholderBody,
    document: noticePlaceholderDocument,
  },
  'university-closed-for-eid-ul-fitar-2': {
    text: 'University will remain close due to Eid-ul-Fitar from 22-Aug.-2026 to 24-Aug.-2026',
    date: '2026-08-22',
    body: noticePlaceholderBody,
    document: noticePlaceholderDocument,
  },
  'university-closed-for-eid-ul-fitar-3': {
    text: 'University will remain close due to Eid-ul-Fitar from 22-Aug.-2026 to 24-Aug.-2026',
    date: '2026-08-22',
    body: noticePlaceholderBody,
    document: noticePlaceholderDocument,
  },
  'university-closed-for-eid-ul-fitar-4': {
    text: 'University will remain close due to Eid-ul-Fitar from 22-Aug.-2026 to 24-Aug.-2026',
    date: '2026-08-22',
    body: noticePlaceholderBody,
    document: noticePlaceholderDocument,
  },
  'admission-circular-for-spring-2026-session-published': {
    text: 'Admission Circular for Spring 2026 Session Published',
    date: '2026-08-10',
    body: noticePlaceholderBody,
    document: noticePlaceholderDocument,
  },
  'semester-fee-payment-deadline-august-30-2026': {
    text: 'Semester Fee Payment Deadline: August 30, 2026',
    date: '2026-08-05',
    body: noticePlaceholderBody,
    document: noticePlaceholderDocument,
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
