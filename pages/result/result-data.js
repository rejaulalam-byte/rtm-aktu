// ------------------------------------------------------------------
// Central data source for the Academic Result listing (pages/result.html)
// and the "View All Published RESULT" archive (pages/result-all.html), both
// rendered by pages/result/result-table.js.
//
// `slNo` is assigned once, in creation order, and never changes - it is
// the record's permanent serial number. The table always renders
// newest-first (sorted by `createdOrder` descending in result.html's own
// script), so a new record with a higher createdOrder appears at the top
// while keeping whatever slNo it was given at creation.
//
// `examDateIso` (YYYY-MM-DD) drives the Year column and the month / month-
// year search; `examDate` is the label shown in the Exam Date column.
//
// `pdfUrl` is the record's result PDF (Program Name link + download icon). No files exist
// yet, so it is '#' until each real sheet is added.
// ------------------------------------------------------------------
const resultData = {
  'bba-spring-2026': {
    slNo: 2,
    createdOrder: 2,
    year: '2026',
    semester: 'Spring',
    program: 'BBA',
    examDate: '12 April',
    examDateIso: '2026-04-12',
    pdfUrl: '#',
  },
  'cse-summer-2026': {
    slNo: 1,
    createdOrder: 1,
    year: '2026',
    semester: 'Summer',
    program: 'CSE',
    examDate: '25 September',
    examDateIso: '2026-09-25',
    pdfUrl: '#',
  },
};
