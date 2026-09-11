// ------------------------------------------------------------------
// Shared pagination + rows-per-page + year/semester search for the
// listing pages built on the shared "cm-" template (pages/notice-updates.html,
// pages/university-news.html, pages/current-events.html). Purely
// client-side - filters/sorts the array each page already loads from
// its own <page>-data.js, then hands the current page's slice to that
// page's own renderItem() to build the same markup it already built
// before pagination existed. This file only owns pagination/search
// state and the controls/list re-render loop, not the item markup -
// each page keeps its own template string.
//
// Usage (see pages/university-news.html's inline script for a full
// example):
//   initListingControls({
//     listEl, controlsEl, paginationEl,
//     items: Object.entries(someData).map(([id, item]) => ({ id, ...item })),
//     getDate: (item) => item.date,       // ISO 'YYYY-MM-DD'
//     getSemester: (item) => item.semester || null,  // optional
//     renderItem: (item, index) => `...html for one row...`,
//   });
// ------------------------------------------------------------------
function initListingControls({
  listEl,
  controlsEl,
  paginationEl,
  items,
  renderItem,
  getDate,
  getSemester,
  pageSizeOptions = [15, 25, 50],
  defaultPageSize,
  emptyMessage = 'No entries match your search.',
}) {
  defaultPageSize = defaultPageSize || pageSizeOptions[0];
  getSemester = getSemester || (() => null);

  const hasSemester = items.some((item) => getSemester(item));

  let query = '';
  let pageSize = defaultPageSize;
  let page = 1;

  function itemYear(item) {
    return String(new Date(`${getDate(item)}T00:00:00`).getFullYear());
  }

  function matchesQuery(item) {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    const semester = getSemester(item);
    return itemYear(item).includes(q) || (!!semester && semester.toLowerCase().includes(q));
  }

  function getFiltered() {
    return items.filter(matchesQuery);
  }

  function renderControls() {
    controlsEl.innerHTML = `
      <div class="listing-controls__search">
        <svg class="listing-controls__search-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.8"/><path d="m20 20-3.5-3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        <input type="search" id="listingSearchInput" class="listing-controls__search-input" placeholder="${hasSemester ? 'Search by year or semester' : 'Search by year'}" value="${query}">
      </div>
      <label class="listing-controls__page-size">
        Show
        <select id="listingPageSizeSelect" class="listing-controls__page-size-select">
          ${pageSizeOptions.map((n) => `<option value="${n}" ${n === pageSize ? 'selected' : ''}>${n}</option>`).join('')}
        </select>
        per page
      </label>
    `;

    controlsEl.querySelector('#listingSearchInput').addEventListener('input', (event) => {
      query = event.target.value;
      page = 1;
      renderAll();
    });

    controlsEl.querySelector('#listingPageSizeSelect').addEventListener('change', (event) => {
      pageSize = Number(event.target.value);
      page = 1;
      renderAll();
    });
  }

  function renderList() {
    const filtered = getFiltered();
    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    page = Math.min(page, totalPages);
    const start = (page - 1) * pageSize;
    const pageItems = filtered.slice(start, start + pageSize);

    listEl.innerHTML = pageItems.length
      ? pageItems.map((item, i) => renderItem(item, start + i)).join('')
      : `<p class="text-section__text listing-empty">${emptyMessage}</p>`;
  }

  function renderPagination() {
    const filtered = getFiltered();
    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

    if (totalPages <= 1) {
      paginationEl.innerHTML = `
        <div class="listing-pagination__pages">
          <button type="button" class="listing-pagination__btn is-active" disabled>1</button>
        </div>
      `;
      return;
    }

    paginationEl.innerHTML = `
      <button type="button" class="listing-pagination__nav" id="listingPagePrev" ${page === 1 ? 'disabled' : ''} aria-label="Previous page">&lsaquo;</button>
      <div class="listing-pagination__pages">
        ${getPageNumbers(page, totalPages)
          .map((n) => (
            n === '...'
              ? '<span class="listing-pagination__ellipsis">&hellip;</span>'
              : `<button type="button" class="listing-pagination__btn ${n === page ? 'is-active' : ''}" data-page="${n}">${n}</button>`
          ))
          .join('')}
      </div>
      <button type="button" class="listing-pagination__nav" id="listingPageNext" ${page === totalPages ? 'disabled' : ''} aria-label="Next page">&rsaquo;</button>
    `;

    paginationEl.querySelectorAll('[data-page]').forEach((btn) => {
      btn.addEventListener('click', () => {
        page = Number(btn.dataset.page);
        renderAll();
        listEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    const prevBtn = paginationEl.querySelector('#listingPagePrev');
    const nextBtn = paginationEl.querySelector('#listingPageNext');
    if (prevBtn) prevBtn.addEventListener('click', () => { page -= 1; renderAll(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { page += 1; renderAll(); });
  }

  function renderAll() {
    renderList();
    renderPagination();
  }

  renderControls();
  renderAll();
}

// "Page: 1 2 3 ... N" number list: always shows the first page, the
// last page, and one page on either side of the current page,
// collapsing any gap behind a single ellipsis so a large page count
// doesn't blow out the control's width.
function getPageNumbers(current, total) {
  const delta = 1;
  const range = [];
  for (let i = 1; i <= total; i += 1) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i);
    }
  }

  const withEllipsis = [];
  let previous;
  range.forEach((n) => {
    if (previous !== undefined && n - previous > 1) withEllipsis.push('...');
    withEllipsis.push(n);
    previous = n;
  });
  return withEllipsis;
}
