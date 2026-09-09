document.addEventListener('DOMContentLoaded', () => {
  renderFacultyGrid();
  populateSearchFilters();

  const form = document.getElementById('facultySearchForm');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      applyFacultySearch();
    });
  }
});

// ------------------------------------------------------------------
// All Faculty Members listing (pages/faculty-members.html): cards are
// generated from this list, so adding a new faculty member only needs
// a new entry here - no HTML markup to duplicate. Individual faculty
// detail pages don't exist yet (an admin panel will manage these
// eventually), so every card links to "#" for now.
//
// Paths below are relative to pages/faculty-members.html, since that
// is the only page this file renders onto.
// ------------------------------------------------------------------
const facultyMembers = [
  {
    photo: '../images/faculty-members/abdullah-rajib.png',
    name: 'Abdullah Rajib',
    role: 'Assistant professor',
    department: 'Department of Computer Science and Engineering (CSE)',
    link: '#',
  },
  {
    photo: '../images/faculty-members/abu-syeed-muhammed-abdullah.png',
    name: 'Abu Syeed Muhammed Abdullah',
    role: 'Associate Professor and Head, &<br>Exam Controller',
    department: 'Department of Business Administration',
    link: '#',
  },
  {
    photo: '../images/faculty-members/adiba-sabiha.png',
    name: 'Adiba Sabiha',
    role: 'Lecturer',
    department: 'Department of Business Administration',
    link: 'faculty/profile.html?id=adiba-sabiha',
  },
  {
    photo: '../images/faculty-members/ananda-chakraborty.png',
    name: 'Ananda Chakraborty',
    role: 'Faculty Member',
    department: 'Department of Computer Science and Engineering (CSE)',
    link: 'faculty/profile.html?id=ananda-chakraborty',
  },
  {
    photo: '../images/faculty-members/dilara-ahmed-choudhury.png',
    name: 'Dilara Ahmed Choudhury',
    role: 'Assistant Professor',
    department: 'Department of Applied Health and Nutrition',
    link: 'faculty/profile.html?id=dilara-ahmed-choudhury',
  },
  {
    photo: '../images/faculty-members/fahmid-ahmed-chowdhury.png',
    name: 'Fahmid Ahmed Chowdhury',
    role: 'Lecturer',
    department: 'Department of Business Administration',
    link: '#',
  },
  {
    photo: '../images/faculty-members/jamal-ahmed.png',
    name: 'Jamal Ahmed',
    role: 'MPH Program Coordinator',
    department: 'Department of Applied Health and Nutrition',
    link: '#',
  },
  {
    photo: '../images/faculty-members/jannatul-nayem-novera.png',
    name: 'Jannatul Nayem Novera',
    role: 'Lecturer',
    department: 'Department of Electrical and Electronic Engineering (EEE)',
    link: '#',
  },
  {
    photo: '../images/faculty-members/jerin-akter.png',
    name: 'Jerin Akter',
    role: 'Lecturer',
    department: 'Department of Business Administration',
    link: '#',
  },
  {
    photo: '../images/faculty-members/mahmuda-shatu-rethe.png',
    name: 'Mahmuda Shatu Rethe',
    role: 'Lecturer',
    department: 'Department of Technology',
    link: '#',
  },
  {
    photo: '../images/faculty-members/md-abdul-awal-ansary.png',
    name: 'Md. Abdul Awal Ansary',
    role: 'Associate Professor and Head',
    department: 'Department of Computer Science and Engineering (CSE)',
    link: '#',
  },
  {
    photo: '../images/faculty-members/md-eyakub-ali.png',
    name: 'Md. Eyakub Ali',
    role: 'Lecturer',
    department: 'Department of Electrical and Electronic Engineering (EEE)',
    link: '#',
  },
  {
    photo: '../images/faculty-members/md-mizanur-rahman.png',
    name: 'Md. Mizanur Rahman',
    role: 'Lecturer',
    department: 'Department of Technology',
    link: '#',
  },
  {
    photo: '../images/faculty-members/md-nazrul-islam.png',
    name: 'Md. Nazrul Islam',
    role: 'Adjunct Faculty',
    department: 'Department of Applied Health and Nutrition',
    link: '#',
  },
  {
    photo: '../images/faculty-members/md-ruhul-amin.png',
    name: 'Md. Ruhul Amin',
    role: 'Lecturer',
    department: 'Department of Electrical and Electronic Engineering (EEE)',
    link: '#',
  },
  {
    photo: '../images/faculty-members/md-samiul-alim.png',
    name: 'Md. Samiul Alim',
    role: 'Lecturer',
    department: 'Department of Computer Science and Engineering (CSE)',
    link: '#',
  },
  {
    photo: '../images/faculty-members/mohammad-mahmudul-alam-mia.png',
    name: 'Mohammad Mahmudul Alam Mia',
    role: 'Associate Professor and Head',
    department: 'Department of Electrical and Electronic Engineering (EEE)',
    link: '#',
  },
  {
    photo: '../images/faculty-members/nujhat-sadia-hafiz.png',
    name: 'Nujhat Sadia Hafiz',
    role: 'Senior Lecturer',
    department: 'Department of Technology',
    link: '#',
  },
  {
    photo: '../images/faculty-members/nusrat-rikza.png',
    name: 'Nusrat Rikza, Ph.D',
    role: 'Associate Professor and Head',
    department: 'Department of Education',
    link: '#',
  },
  {
    photo: '../images/faculty-members/rasa-iffat-helmi.png',
    name: 'Rasa Iffat Helmi',
    role: 'Assistant Professor',
    department: 'Department of Computer Science and Engineering (CSE)',
    link: '#',
  },
  {
    photo: '../images/faculty-members/sam-thahmid.png',
    name: 'S.A.M. Thahmid',
    role: 'Faculty Member',
    department: 'Department of Education',
    link: '#',
  },
  {
    photo: '../images/faculty-members/sayed-shifat-ahmed.png',
    name: 'Sayed Shifat Ahmed',
    role: 'Lecturer',
    department: 'Department of Electrical and Electronic Engineering (EEE)',
    link: '#',
  },
  {
    photo: '../images/faculty-members/shahnaz-jasmeen-keya.png',
    name: 'Shahnaz Jasmeen Keya',
    role: 'Language Instructor in English',
    department: 'Department of Education',
    link: '#',
  },
  {
    photo: '../images/faculty-members/shanta-yeasmin.png',
    name: 'Shanta Yeasmin',
    role: 'Lecturer and Acting Head',
    department: 'Department of Technology',
    link: '#',
  },
  {
    photo: '../images/faculty-members/tarana-hasan.png',
    name: 'Tarana Hasan',
    role: 'Lecturer',
    department: 'Department of Business Administration',
    link: '#',
  },
];

// A member's role can carry a literal "<br>" for card display (e.g. Abu
// Syeed Muhammed Abdullah's two-line title) - the search dropdown and the
// filter match both need the plain-text version instead.
function plainRole(role) {
  return role.replace(/<br\s*\/?>/gi, ' ').trim();
}

// Dropdown options are derived straight from the dataset (not a separate
// hardcoded list) so they can never drift out of sync with it. Designation
// strings are shown exactly as entered - no normalizing "Assistant
// professor" and "Assistant Professor" into one, since that's a
// data-modeling call for whenever an admin panel manages this list.
function populateSearchFilters() {
  const deptSelect = document.getElementById('facultySearchDept');
  const roleSelect = document.getElementById('facultySearchRole');
  if (!deptSelect || !roleSelect) return;

  const departments = [...new Set(facultyMembers.map((m) => m.department))];
  departments.forEach((department) => {
    const option = document.createElement('option');
    option.value = department;
    option.textContent = department;
    deptSelect.appendChild(option);
  });

  const roles = [...new Set(facultyMembers.map((m) => plainRole(m.role)))];
  roles.forEach((role) => {
    const option = document.createElement('option');
    option.value = role;
    option.textContent = role;
    roleSelect.appendChild(option);
  });
}

// Name/email search: only a name field exists in the current dataset, so
// this matches on name alone for now.
function applyFacultySearch() {
  const nameQuery = document.getElementById('facultySearchName').value.trim().toLowerCase();
  const deptFilter = document.getElementById('facultySearchDept').value;
  const roleFilter = document.getElementById('facultySearchRole').value;

  const filtered = facultyMembers.filter((m) => {
    const matchesName = !nameQuery || m.name.toLowerCase().includes(nameQuery);
    const matchesDept = !deptFilter || m.department === deptFilter;
    const matchesRole = !roleFilter || plainRole(m.role) === roleFilter;
    return matchesName && matchesDept && matchesRole;
  });

  renderFacultyGrid(filtered);
}

function renderFacultyGrid(members = facultyMembers) {
  const grid = document.getElementById('facultyMembersGrid');
  if (!grid) return;

  grid.innerHTML = members
    .map(({ photo, name, role, department, link }) => `
      <article class="fmp-card">
        <a href="${link}" class="fmp-card__link">
          <img src="${photo}" alt="Portrait of ${name}" class="fmp-card__photo" loading="lazy">
          <h3 class="fmp-card__name">${name}</h3>
        </a>
        <p class="fmp-card__role">${role}</p>
        <p class="fmp-card__dept">${department}</p>
      </article>
    `)
    .join('');
}
