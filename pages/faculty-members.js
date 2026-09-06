document.addEventListener('DOMContentLoaded', () => {
  renderFacultyGrid();
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
    link: '#',
  },
  {
    photo: '../images/faculty-members/ananda-chakraborty.png',
    name: 'Ananda Chakraborty',
    role: 'Faculty Member',
    department: 'Department of Computer Science and Engineering (CSE)',
    link: '#',
  },
  {
    photo: '../images/faculty-members/dilara-ahmed-choudhury.png',
    name: 'Dilara Ahmed Choudhury',
    role: 'Assistant Professor',
    department: 'Department of Applied Health and Nutrition',
    link: '#',
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

function renderFacultyGrid() {
  const grid = document.getElementById('facultyMembersGrid');
  if (!grid) return;

  grid.innerHTML = facultyMembers
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
