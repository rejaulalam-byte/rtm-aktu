// ------------------------------------------------------------------
// Shared listing setup for pages/result.html and pages/result-all.html:
// reads resultData (pages/result/result-data.js), sorts newest-created
// first, and renders the 7-column result table through the shared
// pages/listing-controls.js search + pagination. Both pages call
// initResultListing() - no status filtering, every record is shown.
//
// Program Name links to the record's PDF in a new tab; the Result Sheet
// download icon links to the same PDF with a `download` attribute.
// ------------------------------------------------------------------

// Admin-entered text is inserted into the table with template strings, so
// every field runs through this first - a `<` or `&` in a program name
// must print as text, never become markup, and a quote in pdfUrl must not
// break out of its href attribute. Same helper as escapeJobHtml().
function escapeResultHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function initResultListing() {
  const listEl = document.getElementById('resultTableBody');
  const controlsEl = document.getElementById('listingControls');
  const paginationEl = document.getElementById('listingPagination');
  if (!listEl || !controlsEl || !paginationEl || typeof resultData === 'undefined') return;

  const items = Object.entries(resultData)
    .map(([id, item]) => ({ id, ...item }))
    .sort((a, b) => b.createdOrder - a.createdOrder);

  initListingControls({
    listEl,
    controlsEl,
    paginationEl,
    items,
    getDate: (item) => item.publishedDateIso,
    getSemester: (item) => item.semester,
    getSearchText: (item) => `${item.program} ${item.batch}`,
    searchPlaceholder: 'Search by Month, Year, Semester, Program, Batch',
    pageSizeOptions: [15, 25, 50, { value: Infinity, label: 'All' }],
    pageSizeLabel: { before: 'Show', after: 'Per Page' },
    emptyMessage: 'No results match your search.',
    renderEmpty: (message) => `<tr><td colspan="7" class="listing-empty">${message}</td></tr>`,
    renderItem: (item) => `
      <tr>
        <td><span class="jc-table__badge">${String(item.slNo).padStart(2, '0')}</span></td>
        <td>${escapeResultHtml(item.year)}</td>
        <td>${escapeResultHtml(item.semester)}</td>
        <td><a href="${escapeResultHtml(item.pdfUrl)}" target="_blank" rel="noopener" class="rs-table__link">${escapeResultHtml(item.program)}</a></td>
        <td>${escapeResultHtml(item.batch)}</td>
        <td class="rs-table__date">${escapeResultHtml(formatPublishedDate(item.publishedDateIso))}</td>
        <td>
          <a href="${escapeResultHtml(item.pdfUrl)}" download class="rs-table__download" aria-label="Download result sheet - ${escapeResultHtml(`${item.program} ${item.semester} ${item.year}`)}">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 4v11m0 0-4-4m4 4 4-4M5 19h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>Download</span>
          </a>
        </td>
      </tr>
    `,
  });
}
