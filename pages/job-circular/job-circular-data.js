// ------------------------------------------------------------------
// Central data source for the Job Circular listing (pages/job-circular.html)
// and the Job Circular Details template (pages/job-circular-details.html?id=<key>) -
// same data-driven pattern as pages/news/news-data.js and
// pages/notices/notices-data.js.
//
// `slNo` is assigned once, in creation order, and never changes - it is
// the record's permanent serial number. The table itself always renders
// newest-first (sorted by `createdOrder` descending in job-circular.html's
// own script), so a new record with a higher createdOrder appears at the
// top while keeping whatever slNo it was given at creation.
//
// Paths are relative to pages/ (job-circular.html and
// job-circular-details.html both live at that same depth).
// ------------------------------------------------------------------
const jobCircularData = {
  'assistant-registrar': {
    slNo: 2,
    createdOrder: 2,
    position: 'Assistant Registrar',
    positionCount: 'Position 01',
    experience: 'At least 7 years.',
    closingDate: '2025-03-12',
    closingDateDisplay: '12 March 2025',
    publishedIn: 'RTM-AKTU Website & BD-Jobs',
    publishedDate: 'March 7, 2025',
    status: 'OPEN',
  },
  'finance-officer': {
    slNo: 1,
    createdOrder: 1,
    position: 'Finance Officer',
    positionCount: 'Position 01',
    experience: 'At least 3 years.',
    closingDate: '2024-05-02',
    closingDateDisplay: '2 May 2024',
    publishedIn: 'RTM-AKTU Website',
    publishedDate: 'April 25, 2024',
    status: 'OPEN',
  },
};
