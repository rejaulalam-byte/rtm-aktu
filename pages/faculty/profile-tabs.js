// ------------------------------------------------------------------
// Shared by every faculty profile page (pages/faculty/*.html): each
// page defines its own small data object of possible tab fields
// (Research Interest, Academic Information, Courses Taught, etc.) and
// calls renderProfileTabs() with it. Only fields that actually have
// content render as a tab - a field left empty/undefined is skipped
// entirely, not shown greyed out. The first available tab is active
// by default; clicking a tab button shows its panel and hides the rest.
// ------------------------------------------------------------------
function renderProfileTabs(tabsData) {
  const tabsList = document.getElementById('facultyProfileTabs');
  const tabPanels = document.getElementById('facultyProfileTabPanels');
  if (!tabsList || !tabPanels) return;

  const entries = Object.entries(tabsData).filter(([, content]) => content && content.trim());
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
