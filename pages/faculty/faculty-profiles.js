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
  'dilara-ahmed-choudhury': {
    name: 'Dilara Ahmed Choudhury',
    role: 'Assistant Professor',
    department: 'Department of Applied Health and Nutrition',
    photo: '../../images/academics/faculty/faculty-5.jpg',
    address: [
      'RTM Al-Kabir Technical University (RTM-AKTU)',
      'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
    ],
    phone: '01000000000',
    phoneHref: 'tel:+8801000000000',
    email: 'dilara@rtm-aktu.ac.bd',
    bio: [
      "Dilara Ahmed Choudhury is serving RTM Al-Kabir Technical University (RTM-AKTU) as Assistant Professor at Department of Applied Health and Nutrition. Prior to this, she worked with Research, Training and Management International (RTMI) as Deputy Director (Research). Dilara is a fast tracker with rich and diversified exposure of more than 15 years' experience in health and development sector particularly in the field of Maternal & Child health, Sexual & reproductive health, Adolescent health, Family planning, etc.",
      "Dilara is experienced in designing and implementing public health research, monitoring and evaluation systems, and evidence-based health programs focusing on maternal and child health, sexual and reproductive health, family planning, adolescent health, nutrition, gender equality, and humanitarian response. Proven expertise in quantitative and qualitative research methodologies, proposal development, project design, data analysis, report writing, and publication-oriented research. Holds a Master of Public Health (MPH) and a Master of Health Economics, combining academic excellence with extensive field and research experience.",
      "She obtained Master of Health Economics from University of Dhaka and Master of Public Health (Epidemiology) from State University of Bangladesh and obtained first class in all her educational levels. In addition, she has received numerous post-graduate trainings on Epidemiology, Public Health and Research.",
      "Her research interest covers a wide range of public health issues including Maternal & Child health, Sexual & reproductive health, Adolescent health, Family planning, etc as well as health economics, health insurance issues, universal health coverage, health education and environmental and occupational health.",
    ],
    tabs: {
      'Research Interest': 'Research interest covers a wide range of public health issues including Maternal & Child health, Sexual & reproductive health, Adolescent health, Family planning, etc as well as health economics, health insurance issues, universal health coverage, health education and environmental & occupational health.',
      'Academic Information': [
        {
          items: [
            'Postgraduation/Masters: Master of Public Health (DU), Master of Health Economics (SUB)',
            'Graduation/Hons: Alternative Medicine (DU)',
            'Higher Secondary School Certificate (HSC) or equivalent: Science group',
            'Secondary School Certificate (SSC) or equivalent: Science group',
          ],
        },
      ],
      'Courses Taught': [
        {
          items: [
            'Hospital and Clinic Management and QOC',
            'Health Research Methodology',
            'Biostatistics',
            'SBCC',
          ],
        },
      ],
      'Areas of Expertise': '',
      'Experience': [
        {
          heading: 'Deputy Director (Research) — Research, Training and Management International',
          items: [
            'Supervision and coordination of research activity',
            'Prepare project proposal and report writing',
            'Project design and develop plan of action',
            'Carry out routine monitoring and evaluation of project activities',
            'Analyzing both quantitative & qualitative data',
            'Supervision of data coding, editing, entry and cleaning',
            'Keeping and maintaining backups of all documents',
          ],
        },
        {
          heading: 'Research and Evaluation Specialist (Coordinator) — Research, Training and Management International',
          items: [
            'Supervision and coordination of research activity',
            'Prepare project proposal and report writing',
            'Project design and develop plan of action',
            'Carry out routine monitoring and evaluation of project activities',
            'Analyzing both quantitative & qualitative data',
            'Supervision of data coding, editing, entry and cleaning',
            'Keeping and maintaining backups of all documents',
          ],
        },
        {
          heading: 'Research Officer — Research, Training and Management International',
          items: [
            'Conduct and coordinate training.',
            'Registration, documentation, editing and validation of collected field data.',
            'Developing the plan for field data collection.',
            'Monitoring the data collection activity and ensuring quality control.',
            'Assists the senior professional routinely in preparing different types of survey and study proposals.',
            'Assist team leader in report writing.',
            'Development of data collection tools.',
            'Provide administrative and logistics support to the team.',
          ],
        },
        {
          heading: 'Research Associate — Research, Training and Management International',
          items: [
            'Data entry, coding and cleaning',
            'Designing data entry format',
            'Keeping and maintaining data backups',
            'Assist in questionnaire develop',
          ],
        },
      ],
      'Teaching and Academic Contributions': '',
      'Publications & Research': [
        {
          items: [
            'Mid-term Evaluation of "Nirapod-2: Empowering Women on Sexual and Reproductive Health and Rights and Choice of Safe Menstrual Regulation (MR) and Family Planning (FP)" Project (November \'17–February \'18) – Client: Shushilan',
            'Baseline Survey of "Nirapod-2: Empowering Women on Sexual and Reproductive Health and Rights and Choice of Safe Menstrual Regulation (MR) and Family Planning (FP)" project (September \'16–December \'16) – Client: Shushilan',
            'Monitoring and Evaluation of the Pilot Project entitled "Health Insurance/card for the Ready-Made Garments (RMG) workers with Gonoshasthaya Kendra (GK) in Savar" (July 2016–July 2019) – Client: Auchan International',
            'Conducting a Study on the Use of Sanitary Napkins among the Adolescent and Married Women of Reproductive Age (MWRA) (May \'16–August \'16) – Client: Social Marketing Company (SMC)',
            'Conduct Mapping Study and Size Estimation of Key Populations in selected priority districts in Bangladesh (October 2015–January 2016) – Client: Save the Children',
          ],
        },
      ],
      'Seminars/Workshops Participation': [
        {
          items: [
            'Attended workshop on "Advance in Strategic Communication Workshop" organized by Bangladesh Center for Communication Programs (BCCP) from September 11–16, 2021',
            'Attended workshop on "Investment case Analysis to improve the utilization of MNCH service in rural and urban areas" organized by Health Economics Unit, Ministry of Health and Family Welfare. The study was conducted by Institute of Health Economics of Dhaka University with the support from UNICEF (18 August 2015)',
            'Attended Stakeholder Workshop on "National Needs Assessment of RMNH Workforce" organized by RTM International in collaboration with UNFPA (01 September 2012)',
            'Attended in "Investing in Nutrition Now: A Smart Start for Our Children, for Our Future" – Organized by USAID Bangladesh, FANTA-III, fhi360, RTM International (2012)',
          ],
        },
      ],
      'Contact': [
        {
          lines: [
            'Department of Applied Health and Nutrition',
            'RTM Al-Kabir Technical University (RTM-AKTU)',
            'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
            'Email: <a href="mailto:dilara@rtm-aktu.ac.bd">dilara@rtm-aktu.ac.bd</a>',
            'Web: <a href="https://www.rtm-aktu.ac.bd" target="_blank" rel="noopener">www.rtm-aktu.ac.bd</a>',
          ],
        },
      ],
    },
  },
};
