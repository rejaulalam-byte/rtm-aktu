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
// `publishedDateIso` (YYYY-MM-DD) drives the Year column and the month / month-
// year search, and is also what the Published Date column displays, formatted by
// formatPublishedDate() below (e.g. 2026-04-12 -> 12-Apr-2026).
//
// `batch` is the student batch the result is for (shown right after Program Name
// and searchable), a plain number.
//
// `pdfUrl` is the record's result PDF (Program Name link + download icon). No files exist
// yet, so it is '#' until each real sheet is added.
// ------------------------------------------------------------------
// @admin-export-start resultData
const resultData = {
  'bba-spring-2026': {
    slNo: 2,
    createdOrder: 2,
    year: '2026',
    semester: 'Spring',
    program: 'BBA',
    batch: '15',
    publishedDateIso: '2026-04-12',
    pdfUrl: '#',
  },
  'cse-summer-2026': {
    slNo: 1,
    createdOrder: 1,
    year: '2026',
    semester: 'Summer',
    program: 'CSE',
    batch: '12',
    publishedDateIso: '2026-09-25',
    pdfUrl: '#',
  },
};
// @admin-export-end resultData

// 'YYYY-MM-DD' -> 'DD-Mon-YYYY' (2-digit day, 3-letter month, year), e.g. 12-Apr-2026 or 05-Apr-2026.
// Shared by result.html and result-all.html via result-table.js.
function formatPublishedDate(iso) {
  const [year, month, day] = iso.split('-').map(Number);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${String(day).padStart(2, '0')}-${months[month - 1]}-${year}`;
}
