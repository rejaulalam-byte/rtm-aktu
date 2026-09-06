// ------------------------------------------------------------------
// Shared by every faculty profile page (pages/faculty/*.html). The
// master list of possible tab fields (and their display order) lives
// here, once, as the canonical source of truth - matches the Figma
// template (node 1769:218). Each page defines its own data object
// keyed by these same field names, filling in only the ones it has
// content for; renderProfileTabs() looks up each field from this list
// against that object, so a page's own key order never matters. Only
// fields that actually have content render as a tab - a field left
// empty/undefined is skipped entirely, not shown greyed out. The
// first available tab is active by default; clicking a tab button
// shows its panel and hides the rest.
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

function renderProfileTabs(tabsData) {
  const tabsList = document.getElementById('facultyProfileTabs');
  const tabPanels = document.getElementById('facultyProfileTabPanels');
  if (!tabsList || !tabPanels) return;

  const entries = FACULTY_PROFILE_TAB_FIELDS
    .map((label) => [label, tabsData[label]])
    .filter(([, content]) => content && content.trim());
  if (entries.length === 0) return;

  tabsList.innerHTML = entries
    .map(([label], i) => `
      <button type="button" class="fpr-tabs__btn${i === 0 ? ' is-active' : ''}" data-tab="${label}">${label}</button>
    `)
    .join('');

  tabPanels.innerHTML = entries
    .map(([label, content], i) => `
      <div class="fpr-tabs__panel${i === 0 ? ' is-active' : ''}" data-tab-panel="${label}">
        <h3 class="fpr-tabs__panel-title">${label.toUpperCase()}</h3>
        <p class="fpr-tabs__panel-text">${content}</p>
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
