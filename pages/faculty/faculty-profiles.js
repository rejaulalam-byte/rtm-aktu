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
  'ananda-chakraborty': {
    name: 'Ananda Chakraborty',
    role: 'Faculty Member',
    department: 'Department of Computer Science and Engineering (CSE)',
    photo: '../../images/academics/faculty/faculty-2.jpg',
    address: [
      'RTM Al-Kabir Technical University (RTM-AKTU)',
      'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
    ],
    phone: '01762461851',
    phoneHref: 'tel:+8801762461851',
    email: 'ananda@rtm-aktu.ac.bd',
    bio: [
      "Ananda Chakraborty currently serves as the Lecturer of the Department of B.Sc. (Hons.) in Computer Science and Engineering (CSE) at RTM Al-Kabir Technical University (RTM-AKTU). Prior to this role, he worked as a research student at Department of Mathematics, Shahjalal University of Science and Technology (SUST), Sylhet. In addition to his academic and professional achievements, he has been received National Science and Technology (NST) Fellowship for his M.S. research.",
      "Ananda Chakraborty completed his Master of Science (M.S) in Mathematics from the prestigious Shahjalal University of Science and Technology, Sylhet. With a strong combination of academic excellence, research experience, and analytical innovation, he continues to contribute significantly to mathematics education and its applications in computer science.",
      "His research interests focus on pure mathematics, including algebra, algebraic coding theory, and lattice theory, with interdisciplinary applications in computer science and information technology. He is particularly engaged in advancing theoretical frameworks and exploring their applications in cryptography, coding systems, and secure communication.",
    ],
    tabs: {
      'Research Interest': '',
      'Academic Information': '',
      'Courses Taught': '',
      'Areas of Expertise': '',
      'Experience': '',
      'Teaching and Academic Contributions': '',
      'Publications & Research': '',
      'Seminars/Workshops Participation': '',
      'Contact': [
        {
          lines: [
            'Department of Computer Science and Engineering (CSE)',
            'RTM Al-Kabir Technical University (RTM-AKTU)',
            'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
            'Mobile: 01762461851',
            'Email: <a href="mailto:ananda@rtm-aktu.ac.bd">ananda@rtm-aktu.ac.bd</a>',
          ],
        },
      ],
    },
  },
  'jerin-akter': {
    name: 'Jerin Akter',
    role: 'Lecturer',
    department: 'Department of Business Administration',
    photo: '../../images/academics/faculty/faculty-4.jpg',
    address: [
      'RTM Al-Kabir Technical University (RTM-AKTU)',
      'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
    ],
    phone: '01710462074',
    phoneHref: 'tel:+8801710462074',
    email: 'jerin@rtm-aktu.ac.bd',
    bio: [
      "Jerin Akter is serving as a Lecturer in the Department of Business Administration with a specialization in Finance and Accounting. She possesses a strong academic foundation in business education, supported by practical experience in administration, academic coordination, financial record management, and digital communication. Before joining academia, she worked as a School Coordinator at School of Joy under APASEN, UK, where she supervised teachers, coordinated academic activities, organized training workshops, maintained institutional records, and supported the overall development of students. Her role enabled her to gain extensive experience in educational administration, student guidance, and academic planning. She also worked as an SEO Executive at Orbit Technology, where she developed expertise in website content management, online branding, digital communication, and search engine optimization.",
      "Jerin Akter completed her MBA in Accounting from Bangladesh University of Professionals (BUP) achieving an outstanding result. She earned her BBA in Finance and Banking from Sylhet International University with a CGPA of 3.91 out of 4.00.",
      "Her research experience includes conducting an academic study entitled \"Evaluating the Support Services in Educational Sectors on the Viewpoints of Customers and Consumers: A Study on the Coaching Centers of Sylhet City.\" In this research, she collected and analyzed primary data from coaching centers and students in Sylhet city and prepared a comprehensive report with interpretation and recommendations.",
      "In addition to her academic qualifications, she has completed professional training on Neuro-Developmental Disabilities from APASEN, UK, and Speech Therapy training.",
    ],
    tabs: {
      'Research Interest': [
        {
          lines: [
            'Her research interests lie in the fields of Financial Accounting, Financial Management, Business Education, Educational Administration, and Student Counseling & Academic Support. She is particularly interested in exploring effective methods of accounting education, improving financial management practices, and strengthening educational administration in academic institutions. She also focuses on student development, academic support systems, and the role of counseling in enhancing student performance and learning outcomes.',
          ],
        },
        {
          heading: 'Academic and Research Interests',
          items: [
            'Management Studies',
            'Business Strategy',
            'Organizational Development',
            'Applied Research',
            'Higher Education Pedagogy',
          ],
        },
      ],
      'Academic Information': [
        {
          items: [
            'MBA in Accounting – Bangladesh University of Professionals (BUP), outstanding result',
            'BBA in Finance and Banking – Sylhet International University, CGPA 3.91 out of 4.00',
          ],
        },
      ],
      'Courses Taught': [
        {
          lines: [
            'Delivered undergraduate-level instruction in Finance, Accounting, and Business Administration, integrating theoretical knowledge with practical application and case-based learning. Courses taught include Financial Accounting, Cost Accounting, Management Accounting, Intermediate Accounting, Advanced Accounting, Auditing, Taxation, Corporate Accounting, Accounting Information Systems, Financial Statement Analysis, Accounting Theory, International Accounting, Public Sector Accounting, Business Finance, Corporate Finance, Business Mathematics, Economics, Microeconomics, Macroeconomics, Banking and Insurance, Human Resource Management, and Business Communication.',
            'Developed course outlines, lesson plans, lecture materials, assignments, and assessment strategies to support student learning and academic development. Guided students in understanding accounting principles, financial reporting, business decision-making, and analytical problem-solving. Emphasized practical applications through examples, case studies, presentations, and classroom discussions to prepare students for professional roles in business, finance, and accounting.',
            'Provided academic mentoring, evaluated student performance, supervised assignments and presentations, and supported students in developing communication, analytical, and professional skills. Also encouraged students to strengthen their knowledge of modern business practices, financial management, and organizational leadership.',
          ],
        },
      ],
      'Areas of Expertise': [
        {
          items: [
            'Business Administration',
            'Teaching',
            'Research',
            'Academic Development',
          ],
        },
        {
          heading: 'Professional Engagement',
          lines: [
            'Contributes to academic and professional communities through research initiatives, collaborative projects, and institutional development activities.',
          ],
        },
      ],
      'Experience': [
        {
          heading: 'School Coordinator — School of Joy, under APASEN, UK',
          lines: [
            'Supervised teachers, coordinated academic activities, organized training workshops, maintained institutional records, and supported the overall development of students, gaining extensive experience in educational administration, student guidance, and academic planning.',
          ],
        },
        {
          heading: 'SEO Executive — Orbit Technology',
          lines: [
            'Developed expertise in website content management, online branding, digital communication, and search engine optimization.',
          ],
        },
      ],
      'Teaching and Academic Contributions': 'Actively engaged in curriculum development, student mentoring, and innovative teaching methodologies that enhance learning outcomes and academic performance.',
      'Publications & Research': '',
      'Seminars/Workshops Participation': '',
      'Contact': [
        {
          lines: [
            'Department of Business Administration (Major: Finance & Accounting)',
            'RTM Al-Kabir Technical University (RTM-AKTU)',
            'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
            'Email: <a href="mailto:jerin@rtm-aktu.ac.bd">jerin@rtm-aktu.ac.bd</a>',
            'Contact: <a href="tel:+8801710462074">+8801710462074</a>',
            'Website: <a href="https://www.rtm-aktu.ac.bd" target="_blank" rel="noopener">www.rtm-aktu.ac.bd</a>',
          ],
        },
      ],
    },
  },
  'md-samiul-alim': {
    name: 'Md. Samiul Alim',
    role: 'Lecturer',
    department: 'Department of Computer Science and Engineering (CSE)',
    photo: '../../images/academics/faculty/faculty-1.jpg',
    address: [
      'RTM Al-Kabir Technical University (RTM-AKTU)',
      'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
    ],
    phone: '01730298445',
    phoneHref: 'tel:+8801730298445',
    email: 'samiul@rtm-aktu.ac.bd',
    bio: [
      "Md. Samiul Alim is an academic professional at RTM Al-Kabir Technical University (RTM-AKTU) with demonstrated commitment to excellence in teaching and research. He currently serves as a Lecturer in the Department of Computer Science and Engineering at RTM Al-Kabir Technical University (RTM-AKTU) since November 1, 2024. Prior to this, he worked as a Lecturer in the Department of Computer Science and Engineering at Pabna Engineering College under the University of Rajshahi (RU).",
      "He obtained his B.Sc. (Engg.) in Computer Science and Engineering (CSE) from Pabna University of Science and Technology.",
      "His research interests include Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, Medical Image Analysis, Image Processing, and Healthcare Data Analytics. He has published several articles in reputable journals and international conference proceedings, including Systems and Soft Computing.",
    ],
    tabs: {
      'Research Interest': 'His research interests include Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, Medical Image Analysis, Image Processing, and Healthcare Data Analytics. He has published several articles in reputable journals and international conference proceedings, including Systems and Soft Computing.',
      'Academic Information': [
        {
          items: [
            'B.Sc. (Engg.) in Computer Science and Engineering (CSE) – Pabna University of Science and Technology',
          ],
        },
      ],
      'Courses Taught': '',
      'Areas of Expertise': '',
      'Experience': [
        {
          heading: 'Lecturer — Department of Computer Science and Engineering, Pabna Engineering College (under University of Rajshahi)',
          lines: [
            'Prior role held before joining RTM Al-Kabir Technical University (RTM-AKTU) as Lecturer in the Department of Computer Science and Engineering on November 1, 2024.',
          ],
        },
      ],
      'Teaching and Academic Contributions': '',
      'Publications & Research': '',
      'Seminars/Workshops Participation': '',
      'Contact': [
        {
          lines: [
            'Department of Computer Science and Engineering (CSE)',
            'RTM Al-Kabir Technical University (RTM-AKTU)',
            'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
            'Mobile: <a href="tel:+8801730298445">01730298445</a>',
            'Email: <a href="mailto:samiul@rtm-aktu.ac.bd">samiul@rtm-aktu.ac.bd</a>',
          ],
        },
      ],
    },
  },
  'sam-thahmid': {
    name: 'S.A.M. Thahmid',
    role: 'Faculty Member',
    department: 'Department of Education',
    photo: '../../images/academics/faculty/faculty-3.jpg',
    address: [
      'RTM Al-Kabir Technical University (RTM-AKTU)',
      'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
    ],
    phone: '01795011223',
    phoneHref: 'tel:+8801795011223',
    email: 'thahmid@rtm-aktu.ac.bd',
    bio: [
      "S.A.M. Thahmid is a language instructor under BIISD and RTM Al-Kabir Technical University specializing in English language teaching, literature, and academic writing. He designs learner-centered lessons that balance communicative practice with rigorous academic standards, emphasizing critical thinking, academic integrity, and confident English communication in both spoken and written contexts. His teaching practice is grounded in evidence-based curricula, scaffolded activities, and targeted feedback through error analysis, ensuring measurable improvement in student performance.",
      "Tahmid holds a B.A. Honors in English Language and Literature from Metropolitan University, Bangladesh, and is nearing completion of an M.A. in English Language Teaching at the same institution.",
      "His professional journey reflects a commitment to pedagogy, student support, and academic leadership; all directed toward helping learners achieve success in academic and professional English. Alongside his academic role, Sam has contributed to student development and leadership through positions such as Student Advisor and previously Senior Vice President at the MU Speakers' Club of English, where he provided mentoring, counseling, and coordinated extracurricular initiatives. He has also gained experience as a Student Counselor supporting student welfare and growth, and as Head of Documentation at PranBin Education.",
      "Tahmid's research focus on ELT and ELE pedagogy and curriculum development, with a particular emphasis on designing learner-centered curricula, evidence-based teaching methods, and effective assessment practices.",
    ],
    tabs: {
      'Research Interest': [
        {
          lines: [
            "S.A.M. Thahmid's research interests focus on ELT and ELE pedagogy and curriculum development, with a particular emphasis on designing learner-centered curricula, evidence-based teaching methods, and effective assessment practices. He is interested in exploring innovative pedagogical approaches—such as task-based learning, materials development, technology-enhanced instruction, and formative assessment—to improve communicative competence across diverse learner populations.",
          ],
        },
        {
          heading: 'Academic and Research Interests',
          items: [
            'Management Studies',
            'Business Strategy',
            'Organizational Development',
            'Applied Research',
            'Higher Education Pedagogy',
          ],
        },
      ],
      'Academic Information': [
        {
          items: [
            'B.A. Honors in English Language and Literature – Metropolitan University, Bangladesh',
            'M.A. in English Language Teaching (ELT) – Metropolitan University, Bangladesh (in progress)',
          ],
        },
      ],
      'Courses Taught': 'S.A.M. Thahmid has delivered undergraduate-level instruction in English language, literature, and communication, integrating theoretical frameworks with practice-based, seminar and workshop learning. He has designed and taught courses that develop critical reading, analytical writing, and communicative competence, and has created course materials, lesson plans, and assessment strategies aligned with clear learning outcomes. His teaching repertoire includes Language, Media and Communication; Shakespeare; Introduction to English Poetry and Rhetoric; Introduction to English Drama; Greek and Roman Classics in Translation; Continental Literature; American Literature I; and Renaissance Literature, reflecting a broad and interdisciplinary approach to English studies.',
      'Areas of Expertise': [
        {
          items: [
            'Business Administration',
            'Teaching',
            'Research',
            'Academic Development',
          ],
        },
        {
          heading: 'Professional Engagement',
          lines: [
            'Contributes to academic and professional communities through research initiatives, collaborative projects, and institutional development activities.',
          ],
        },
      ],
      'Experience': [
        {
          heading: "Student Advisor / Senior Vice President — MU Speakers' Club of English, Metropolitan University",
          lines: [
            'Provided mentoring, counseling, and coordinated extracurricular initiatives.',
          ],
        },
        {
          heading: 'Student Counselor',
          lines: [
            'Supported student welfare and growth.',
          ],
        },
        {
          heading: 'Head of Documentation — PranBin Education',
        },
      ],
      'Teaching and Academic Contributions': 'Actively engaged in curriculum development, student mentoring, and innovative teaching methodologies that enhance learning outcomes and academic performance.',
      'Publications & Research': '',
      'Seminars/Workshops Participation': '',
      'Contact': [
        {
          lines: [
            'Department of Education',
            'RTM Al-Kabir Technical University (RTM-AKTU)',
            'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
            'Phone: <a href="tel:+8801795011223">+8801795011223</a>',
            'Email: <a href="mailto:thahmid@rtm-aktu.ac.bd">thahmid@rtm-aktu.ac.bd</a>',
          ],
        },
      ],
    },
  },
};
