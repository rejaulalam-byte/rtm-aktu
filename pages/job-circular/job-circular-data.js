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
//
// `publishedDateIso` is the ISO form of `publishedDate`, used only to
// compute each record's weekday label on the details page via the
// sitewide initDateWeekdays()/.js-weekday pattern (script.js) - same
// approach `closingDate` already provides for Closing Date's weekday.
//
// `documentImage` is the record's own scanned circular, shown on its
// details page - one sub-folder per record under images/job-circular/
// (job-01, job-02, ...), matching this file's job order.
// ------------------------------------------------------------------
const jobCircularData = {
  'assistant-registrar': {
    slNo: 2,
    createdOrder: 2,
    position: 'Assistant Registrar',
    positionCount: '01',
    experience: 'At least 7 years.',
    closingDate: '2025-03-12',
    closingDateDisplay: 'March 12, 2025',
    publishedIn: 'RTM-AKTU Website & BD-Jobs',
    publishedDateIso: '2025-03-07',
    publishedDate: 'March 7, 2025',
    status: 'OPEN',
    documentImage: '../images/job-circular/job-02/document.jpg',
  },
  'finance-officer': {
    slNo: 1,
    createdOrder: 1,
    position: 'Finance Officer',
    positionCount: '01',
    experience: 'At least 3 years.',
    closingDate: '2024-05-02',
    closingDateDisplay: 'May 2, 2024',
    publishedIn: 'RTM-AKTU Website',
    publishedDateIso: '2024-04-21',
    publishedDate: 'April 21, 2024',
    status: 'OPEN',
    documentImage: '../images/job-circular/job-01/document.jpg',
  },
};
