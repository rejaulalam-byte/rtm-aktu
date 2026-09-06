// ------------------------------------------------------------------
// Shared by every faculty profile page (pages/faculty/*.html). The
// master list of possible tab fields (and their display order) lives
// here, once, as the canonical source of truth - matches the Figma
// template (node 1769:218). Each page defines its own data object
// keyed by these same field names, filling in only the ones it has
// content for; renderProfileTabs() looks up each field from this list
// against that object, so a page's own key order never matters. Only
// fields that actually have content render as a tab - a field left
// empty/undefined is skipped entirely, not shown greyed out. No tab is
// active on page load; clicking a tab button activates it and shows
// its panel, hiding whichever other panel was showing.
// ------------------------------------------------------------------
const FACULTY_PROFILE_TAB_FIELDS = [
  'Research Interest',
  'Academic Information',
  'Courses Taught',
  'Areas of Expertise',
  'Experience',
  'Teaching and Academic Contributions',
  'Publications & Research',
  'Seminars/Workshops Participation',
  'Contact',
];

// A tab field's value can be either:
//  - a plain string -> rendered as a single paragraph (e.g. Research Interest)
//  - an array of sections -> each section is { heading?, items? } for a
//    bullet list, or { heading?, lines? } for stacked plain-text lines
//    (e.g. Contact). `heading` is optional on any section - omit it for
//    a plain bullet list with no sub-group label. Item/line strings may
//    contain inline HTML (e.g. an <a> tag) since they're inserted as-is.
function hasTabContent(content) {
  if (!content) return false;
  if (typeof content === 'string') return content.trim().length > 0;
  if (Array.isArray(content)) return content.length > 0;
  return false;
}

function renderProfileTabBody(content) {
  if (typeof content === 'string') {
    return `<p class="fpr-tabs__panel-text">${content}</p>`;
  }

  return content
    .map((section) => {
      const heading = section.heading
        ? `<h4 class="text-section__subheading cm-content__heading">${section.heading}</h4>`
        : '';
      if (section.items) {
        const items = section.items.map((item) => `<li>${item}</li>`).join('');
        return `${heading}<ul class="text-section__list">${items}</ul>`;
      }
      if (section.lines) {
        const lines = section.lines.map((line) => `<p class="fpr-tabs__panel-text">${line}</p>`).join('');
        return `${heading}${lines}`;
      }
      return heading;
    })
    .join('');
}

function renderProfileTabs(tabsData) {
  const tabsList = document.getElementById('facultyProfileTabs');
  const tabPanels = document.getElementById('facultyProfileTabPanels');
  if (!tabsList || !tabPanels) return;

  const entries = FACULTY_PROFILE_TAB_FIELDS
    .map((label) => [label, tabsData[label]])
    .filter(([, content]) => hasTabContent(content));
  if (entries.length === 0) return;

  tabsList.innerHTML = entries
    .map(([label]) => `
      <button type="button" class="fpr-tabs__btn" data-tab="${label}">${label}</button>
    `)
    .join('');

  tabPanels.innerHTML = entries
    .map(([label, content]) => `
      <div class="fpr-tabs__panel" data-tab-panel="${label}">
        <h3 class="fpr-tabs__panel-title">${label.toUpperCase()}</h3>
        ${renderProfileTabBody(content)}
      </div>
    `)
    .join('');

  tabsList.querySelectorAll('.fpr-tabs__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      tabsList.querySelectorAll('.fpr-tabs__btn').forEach((b) => b.classList.remove('is-active'));
      tabPanels.querySelectorAll('.fpr-tabs__panel').forEach((p) => p.classList.remove('is-active'));
      btn.classList.add('is-active');
      tabPanels.querySelector(`[data-tab-panel="${btn.dataset.tab}"]`).classList.add('is-active');
    });
  });
}
