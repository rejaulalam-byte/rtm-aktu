// ------------------------------------------------------------------
// Central data source for pages/faculty/profile.html, one record per
// faculty member keyed by id (the value passed as ?id= in the URL).
// Each record's `tabs` object should use the same field names as
// FACULTY_PROFILE_TAB_FIELDS in profile-tabs.js - only fields with
// real content need a non-empty value, the rest can be left as ''.
// ------------------------------------------------------------------
const facultyProfiles = {
  'adiba-sabiha': {
    name: 'Adiba Sabiha',
    role: 'Lecturer',
    department: 'Department of Business Administration',
    photo: '../../images/faculty-members/adiba-sabiha.png',
    address: [
      'RTM Al-Kabir Technical University',
      'RTM Point, East Shahi Eidgah',
      'TB Gate, Sylhet-3100, Bangladesh',
    ],
    phone: '01731605254',
    phoneHref: 'tel:+8801731605254',
    email: 'adiba@rtm-aktu.ac.bd',
    bio: [
      "Ms. Adiba Sabiha is currently serving as a Lecturer in the Department of Business Administration at RTM Al-Kabir Technical University (RTM-AKTU) from August 01, 2021. Prior to this, she worked with Johns Hopkins University Center for Communication Programs (JHUCCP) as a Research Monitor.",
      "Ms. Adiba pursued her Bachelor of Social Science in Anthropology from Shahjalal University of Science and Technology, Sylhet, Bangladesh. During her academic journey, she gained various research experiences in both qualitative and quantitative research. She also worked in several research projects as a Research Assistant.",
      "Ms. Adiba has outstanding leadership and team management skills. She was the Joint Secretary of Zakiganj Students' Organization, SUST. Besides, she also gained communication and management skills by working as a volunteer in Volunteer of Bangladesh (VBD).",
    ],
    tabs: {
      'Research Interest': 'Gender and Women Studies, Indigenous rights, Social Justice and Policy Issues, Criminology, Visual Anthropology, Biopolitics, Epidemiology, Public Health.',
      'Academic Information': [
        {
          items: [
            'Bachelor of Social Science: Anthropology – (2016-2020), Shahjalal University of Science and Technology, Sylhet.',
            "Higher Secondary Certificate: Science – (2015), Sylhet Government Women's College, Sylhet.",
            'Secondary School Certificate: Science – (2013), Ichhamoti High School, Sylhet.',
          ],
        },
      ],
      'Courses Taught': [
        {
          items: [
            'History of the Emergence of Bangladesh',
            'Introduction to Sociology and Anthropology',
            'The Art of Living',
            'Research Methodology',
          ],
        },
      ],
      'Areas of Expertise': '',
      'Experience': [
        {
          heading: 'Experience',
          items: [
            "Judge [25/03/2022], Bakeman's 2nd International Language League organized by North South University, Bangladesh.",
            'Intern [11/2020 – 01/2021], Research, Training, Management International Human Resource Development Centre (RTMI-HRDC)',
          ],
        },
        {
          heading: 'Research Experience',
          items: [
            'Research Monitor [06/2019 – 12/2020], USAID Ujjiban SBCC Project, Johns Hopkins University Centre for Communication Programs (JHUCCP).',
            'Research Assistant [05/2019 – 11/2019], "Ordering the Border Haat" Project, Shahjalal University of Science and Technology Research Centre and University Grants Commission.',
            'International fieldwork on "Perception and Reality: A Study on Khasi Women Power of Police Bazar, Shillong, Meghalaya" (March 2018).',
          ],
        },
      ],
      'Teaching and Academic Contributions': '',
      'Publications & Research': [
        {
          heading: 'Research Papers',
          items: [
            "'Negotiating with Beauty Standard(s): A Study on Everyday Presentations of Adolescent Girls of Nurpur, Zakiganj, Sylhet, Bangladesh', for research monograph. (February 2020).",
            "'Role of Extracurricular Activities in Career Opportunities: A Study on Department of Anthropology, SUST, Bangladesh' (July 2019).",
            "'Ecology, Economy and Economic Emancipation of Indigenous Patra community, Sylhet, Bangladesh' (February 2019).",
            "'Predicaments and Adjustments: Observations on Student Life of Married Students in Shahjalal University of Science and Technology, Sylhet, Bangladesh' (July 2018).",
          ],
        },
      ],
      'Seminars/Workshops Participation': [
        {
          heading: 'Workshop',
          items: [
            'Workshop on "Outcome Based Education and the Evaluation System", RTM Al-Kabir Technical University, Sylhet (2022).',
            'Workshop on "Data Analysis using SPSS", Shahjalal University of Science and Technology, Sylhet (2020).',
            'Workshop on "Communication for Development (C4D)", Shahjalal University of Science and Technology, Sylhet (2019).',
            'Training workshop on "Research Methodology and Research Ethics", Johns Hopkins University Center for Communication Programs (2019).',
            'Workshop on "Visual Anthropology: Film, Photography and Visual Media", Shahjalal University of Science and Technology, Sylhet (2018).',
          ],
        },
        {
          heading: 'Conference',
          items: [
            'International Conference on "Critical Engagement in Anthropological landscape in Bangladesh" Organized by Department of Anthropology, Shahjalal University of Science and Technology, Sylhet.',
          ],
        },
      ],
      'Contact': [
        {
          lines: [
            'Adiba Sabiha',
            'Lecturer',
            'Department of Business Administration',
            'RTM Al-Kabir Technical University (RTM-AKTU)',
            'Campus: RTM Point, East Shahi Eidgah, TB Gate Sylhet-3100, Bangladesh',
            'Email: <a href="mailto:adiba@rtm-aktu.ac.bd">adiba@rtm-aktu.ac.bd</a>',
            'Web: <a href="https://www.rtm-aktu.ac.bd" target="_blank" rel="noopener">www.rtm-aktu.ac.bd</a>',
          ],
        },
      ],
    },
  },
};
