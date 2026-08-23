document.addEventListener('DOMContentLoaded', () => {
  renderFacultyGrid();
});

// ------------------------------------------------------------------
// All Faculty Members listing (pages/faculty-members.html): cards are
// generated from this list, so adding a new faculty member only needs
// a new entry here (plus their photo in images/academics/faculty/ and
// their profile page in pages/faculty/) — no HTML markup to duplicate.
//
// Paths below are relative to pages/faculty-members.html, since that
// is the only page this file renders onto.
// ------------------------------------------------------------------
const facultyMembers = [
  {
    photo: '../images/academics/faculty/faculty-1.jpg',
    name: 'Md. Samiul Alim',
    title: 'Lecturer',
    department: 'Department of CSE',
    link: 'faculty/md-samiul-alim.html',
  },
  {
    photo: '../images/academics/faculty/faculty-2.jpg',
    name: 'Ananda Chakraborty',
    title: 'Faculty Member',
    department: 'Department of CSE',
    link: 'faculty/ananda-chakraborty.html',
  },
  {
    photo: '../images/academics/faculty/faculty-3.jpg',
    name: 'S.A.M. Thahmid',
    title: 'Faculty Member',
    department: 'Department of Education',
    link: 'faculty/sam-thahmid.html',
  },
  {
    photo: '../images/academics/faculty/faculty-4.jpg',
    name: 'Jerin Akter',
    title: 'Lecturer',
    department: 'Department of Business Administration',
    link: 'faculty/jerin-akter.html',
  },
  {
    photo: '../images/academics/faculty/faculty-5.jpg',
    name: 'Faculty Member 5',
    title: 'Faculty Member',
    department: 'Department Name',
    link: 'faculty/faculty-member-5.html',
  },
  {
    photo: '../images/academics/faculty/faculty-6.jpg',
    name: 'Faculty Member 6',
    title: 'Faculty Member',
    department: 'Department Name',
    link: 'faculty/faculty-member-6.html',
  },
];

function renderFacultyGrid() {
  const grid = document.getElementById('facultyMembersGrid');
  if (!grid) return;

  grid.innerHTML = facultyMembers
    .map(({ photo, name, title, department, link }) => `
      <article class="fm-card">
        <a href="${link}" class="fm-card__link">
          <div class="img-ph fm-card__photo">
            <img src="${photo}" alt="Portrait of ${name}" loading="lazy" onerror="this.closest('.img-ph').classList.add('img-ph--broken')">
            <div class="img-ph__fallback" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.6"/><circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" stroke-width="1.6"/><path d="m4 17 5-5 3 3 3-3.5L21 15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <span>Image Coming Soon</span>
            </div>
          </div>
          <h3 class="fm-card__name">${name}</h3>
        </a>
        <p class="fm-card__role">${title}</p>
        <p class="fm-card__dept">${department}</p>
      </article>
    `)
    .join('');
}
