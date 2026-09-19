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
    photo: '../../images/faculty-members/md-samiul-alim.png',
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
  'abdullah-rajib': {
    name: 'Abdullah Rajib',
    role: 'Assistant Professor',
    department: 'Department of Computer Science and Engineering (CSE)',
    photo: '../../images/faculty-members/abdullah-rajib.png',
    address: [
      'RTM Al-Kabir Technical University (RTM-AKTU)',
      'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
    ],
    phone: '01675937860',
    phoneHref: 'tel:+8801675937860',
    email: 'rajib@rtm-aktu.ac.bd',
    bio: [
      "Abdullah Rajib has been serving as an Assistant Professor in the Department of Computer Science and Engineering at RTM Al-Kabir Technical University (RTM-AKTU) since August 1, 2023. Prior to this appointment, he held the position of Assistant Professor and Head of the Department of Computer Science and Engineering at Sylhet International University (SIU). During his tenure at SIU, he also contributed as the Departmental Coordinator and served as Assistant Controller of Examinations, demonstrating strong leadership and administrative capabilities.",
      "He completed both his B.Sc. and M.Sc. degrees in Applied Physics, Electronics & Communication Engineering (currently recognized as the EEE discipline) from the prestigious University of Dhaka—one of the leading and most renowned institutions in Bangladesh, known for its academic excellence and rich heritage.",
      "Throughout his academic journey, Mr. Abdullah has consistently demonstrated excellence, receiving multiple prestigious scholarships, including the Junior Scholarship, Board Scholarships based on SSC and HSC results, and the Imdad-Sitara Khan Scholarship at the undergraduate level. Notably, he was also awarded a highly competitive scholarship from Sumitomo Corporation, Japan, granted annually to only 20 students of University of Dhaka based on outstanding academic performance.",
      "In addition to his academic and administrative achievements, he has contributed to research, with publications in international journals and conference papers presented in IEEE conference proceedings.",
    ],
    tabs: {
      'Research Interest': 'Embedded System Design and Simulation, Artificial Intelligence, Machine Learning, Biomedical Engineering, VLSI Design, Renewable Energy and Power System Engineering.',
      'Academic Information': [
        {
          items: [
            'M.Sc. in Applied Physics, Electronics & Communication Engineering (Currently EEE department), 2012, University of Dhaka, Dhaka, Bangladesh.',
            'B.Sc. in Applied Physics, Electronics & Communication Engineering (Currently EEE department), 2011, University of Dhaka, Dhaka, Bangladesh.',
            'Higher Secondary Certificate, 2007, Amritalal Dey College, Barisal, Bangladesh.',
            'Secondary School Certificate, 2005, Tarki Bandar Victory Secondary School, Barisal, Bangladesh.',
          ],
        },
      ],
      'Courses Taught': 'Data Structure, Data Communication, Digital Logic Design, Microprocessors and Microcontrollers, Basic Electrical Engineering, Discrete Mathematics, Computer Architecture, Digital System Design, Magnetism and Modern Physics, VLSI Design, Digital Signal Processing, Digital Image Processing and Related Lab Courses.',
      'Areas of Expertise': '',
      'Experience': [
        {
          items: [
            'Assistant Professor, Dept. of Computer Science and Engineering, RTM Al-Kabir Technical University, Sylhet, Bangladesh — 1st August 2023 to date.',
            'Head of the Department (February 28, 2023 – 31 July, 2023), Department of Computer Science and Engineering, Sylhet International University, Sylhet.',
            'Assistant Professor (February 26, 2023 – 31 July, 2023), Department of Computer Science and Engineering, Sylhet International University, Sylhet.',
            'Course Coordinator in CSE Department (28 July, 2022 – 31 July, 2023), Sylhet International University, Sylhet.',
            'Lecturer and Assistant Controller in the Examination Controller Office (February 25, 2022 – 30 October, 2022), Sylhet International University, Sylhet.',
            'Lecturer (November 01, 2014 – February 25, 2023), Department of Computer Science and Engineering, Sylhet International University, Sylhet.',
          ],
        },
      ],
      'Teaching and Academic Contributions': '',
      'Publications & Research': [
        {
          items: [
            'Rubel Chandra Talukder, Rajib Karmakar (Currently Abdullah Rajib), SK Biswas, PK Sarkar, "Design, Implementation and Performance Analysis of Analog Electronic System for Bioelectrocal Impedance Measurement Application," International Journal of Electronic and Electrical Engineering, vol. 5, no. 5, pp. 381-384, 2012 [Special Issue].',
            'MD Abdul Awal Ansary, Md. Umor Faruk Jahangir, Abdullah Rajib, "A Philosophical Survey and Recommendations Regarding ICT Skills of Primary School Teachers in Sylhet District, Bangladesh," SIU Journal, Volume 7, Issue 1, December 2022 [Accepted for Publication].',
          ],
        },
      ],
      'Seminars/Workshops Participation': [
        {
          items: [
            'As a faculty member of the CSE Department, Sylhet International University, under the HEQEP Project, UGC, Bangladesh, participated in several workshops on different topics of HEQEP.',
            'As a participant from the Department of CSE, Sylhet International University, participated in "International Symposium on Quality Assurance in Engineering Education through Accreditation-III" organized by the Board of Accreditation for Engineering and Technical Education (BAETE), Bangladesh.',
          ],
        },
      ],
      'Contact': [
        {
          lines: [
            'RTM Al-Kabir Technical University (RTM-AKTU)',
            'Department of Computer Science and Engineering',
            'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
            'Mobile: <a href="tel:+8801675937860">+8801675937860</a>',
            'Email: <a href="mailto:rajib@rtm-aktu.ac.bd">rajib@rtm-aktu.ac.bd</a>',
          ],
        },
      ],
    },
  },
  'abu-syeed-muhammed-abdullah': {
    name: 'Abu Syeed Muhammed Abdullah',
    role: 'Associate Professor and Head & Exam Controller',
    department: 'Department of Business Administration',
    photo: '../../images/faculty-members/abu-syeed-muhammed-abdullah.png',
    address: [
      'RTM Al-Kabir Technical University (RTM-AKTU)',
      'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
    ],
    phone: '01746461461',
    phoneHref: 'tel:+8801746461461',
    email: 'abdullah@rtm-aktu.ac.bd',
    bio: [
      "Abu Syeed Muhammed Abdullah is an Associate Professor and Head in the Department of Business Administration at RTM Al-Kabir Technical University. He is a senior academic professional with demonstrated commitment to excellence in teaching, research, and academic leadership in Business and Development Studies. Prior to this role, he was an associate professor of the Department of Business Administration at Sylhet International University (SIU). He also worked as the coordinator of BBA program and the Proctor at SIU. Before joining SIU, he worked at Grameen Phone Ltd., a leading telecom company operating in Bangladesh.",
      "He completed his MBA in (i) Finance and Banking & (ii) Management Information System (Dual Major) from Shahjalal University of Science and Technology, Sylhet. He completed BBA in Finance and Management Information System (Dual Major) with Honors award from the same university. Currently he is pursuing his PhD in the area of Finance at Shahjalal University of Science and Technology, Sylhet.",
      "His research interest covers a wide range of area of Finance including Financial Management, Corporate Finance, Financial Modeling, and Derivative Finance. He is particularly interested in research activities related to Machine Learning for Finance, and AI inclusion in Islamic Finance. He has published numerous articles in peer-reviewed national and international journals, and has presented his work at various academic conferences.",
    ],
    tabs: {
      'Research Interest': 'Management Studies, Business Strategy, Organizational Development, Applied Research, Higher Education Pedagogy.',
      'Academic Information': [
        {
          items: [
            'MPhil/PhD, etc.: PhD Continued at Shahjalal University of Science and Technology, Sylhet.',
            'Postgraduation/Masters: MBA in (1) Finance and Banking & (2) MIS (Dual Major) from Shahjalal University of Science and Technology, Sylhet. Result: CGPA 3.95 on 4.00 Grade Scale.',
            "Graduation/Hon's: BBA in (1) Finance & (2) MIS (Dual Major) with Honors Award from Shahjalal University of Science and Technology, Sylhet. Result: CGPA 3.79 on 4.00 Grade Scale.",
            'Higher Secondary School Certificate (HSC) or equivalent: HSC in Science Group from Sylhet M.C. College under Cumilla Board. Result: First Division.',
            'Secondary School Certificate (SSC) or equivalent: SSC in Science Group from Nobin Chandra High School, Kulaura under Cumilla Board. Result: First Division.',
          ],
        },
      ],
      'Courses Taught': [
        {
          lines: [
            'He delivered instructions in a number of courses in undergraduate level. Courses he taught in undergraduate level includes Principles of Finance, Financial Management, Investment Management, Financial Institutions, International Finance, Financial Analysis and Control, Working Capital Management, Advanced Bank and Insurance Management, Bank Fund Management, Operations Research, Introduction to MIS, Business Research, Business Mathematics, Business Statistics-I, Production and Operations Management, Financial Accounting-I, Financial Accounting-II, Management Accounting, Advanced Computer Skills, Principles of Management.',
            'In the graduate level i.e. in MBA program, he delivered lectures in Managerial Finance, Corporate Finance, Portfolio Management, Management Science, Financial Accounting, Advanced Management Accounting, Derivatives, E-commerce and Web Page Design, Management of Technology, Quantitative Analysis for Business Decisions, Capital Budgeting and Investment Analysis, Quantitative Tools in Business, Marketing Principles and Practices, Management Principles and Organizational Behavior.',
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
          heading: 'Professional Activities',
          items: [
            'Associate Professor, RTM Al-Kabir Technical University, from 01/08/2021 to date.',
            'Associate Professor, Sylhet International University, from 24/02/2021 to 31/07/2021.',
            'Assistant Professor, Sylhet International University, from 18/05/2014 to 23/02/2021.',
            'Lecturer, Sylhet International University, from 01/10/2009 to 17/05/2014.',
            'Jr. Lecturer, Sylhet International University, from 20/04/2009 to 30/09/2009.',
            'Officer, Emerging Sales, Grameen Phone Ltd., from 25/04/2006 to 04/02/2008.',
          ],
        },
        {
          heading: 'Administrative Experiences',
          items: [
            'Head, Department of Business Administration, from 21/08/2023 to date.',
            'Controller of Examinations at RTM Al-Kabir Technical University, from 04/06/2023 to date.',
            'Deputy Controller of Examinations at RTM Al-Kabir Technical University, from 27/03/2023 to 03/06/2023.',
            'Proctor at RTM Al-Kabir Technical University, from 01/08/2021 to 03/06/2023.',
          ],
        },
      ],
      'Teaching and Academic Contributions': 'Actively engaged in curriculum development, student mentoring, and innovative teaching methodologies that enhance learning outcomes and academic performance.',
      'Publications & Research': [
        {
          items: [
            '"Measuring Consumers Satisfaction towards the Services of Mobile Phone Operators in Bangladesh", International Journal of Management Sciences, Research Academy of Social Sciences, Volume 1, Issue No. 11, 2013, Pp: 436-444, Online ISSN: 2310-2845.',
            '"A Model Based on Average Investment for Solving Complex Annuity Problems of Sinking Fund", Asia-Pacific Journal of Business, Kangwon National University, South Korea, Volume 4, Issue No. 2, December 2013, Pp: 41-53, ISSN 2233-5900.',
            '"Non-Disclosure Practices of Interest Rate and Compounding Frequency in Sinking Fund Proposals by the Banks Operating in Bangladesh: A Serious Pitfall for Investors", International Journal of Research in Computer Application & Management, Volume 4, Issue No. 01, January 2014, Pp: 44-50, ISSN 2231-1009.',
            '"Detection and Remedies for Industrial Sickness in Small Industrial Units of Bangladesh: A Study on Sick Industrial Units of Industrial Estates in Sylhet Division", Researchers World – Journal of Arts, Science & Commerce, Volume V, Issue 2, April 2014, Pp: 40-50, Online ISSN: 2229-4686.',
            '"Evaluation of Entrepreneurship Development Training Program of Bangladesh Small & Cottage Industries Corporation: A study on 3-Days Long Workshop on Entrepreneurial Development Arranged by BSCIC, Sylhet District", Indian Journal of Commerce & Management Studies, Volume V, Issue 2, May 2014, Pp: 53-61, Online ISSN: 2229-5674.',
          ],
        },
      ],
      'Seminars/Workshops Participation': '',
      'Contact': [
        {
          lines: [
            'Department of Business Administration',
            'RTM Al-Kabir Technical University (RTM-AKTU)',
            'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
            'Contact: <a href="tel:+8801751232222">+8801751232222</a> | <a href="tel:+8801746461461">+8801746461461</a>',
            'Email: <a href="mailto:abdullah@rtm-aktu.ac.bd">abdullah@rtm-aktu.ac.bd</a>',
            'Website: <a href="https://www.rtm-aktu.ac.bd" target="_blank" rel="noopener">www.rtm-aktu.ac.bd</a>',
          ],
        },
      ],
    },
  },
  'fahmid-ahmed-chowdhury': {
    name: 'Fahmid Ahmed Chowdhury',
    role: 'Lecturer',
    department: 'Department of Business Administration',
    photo: '../../images/faculty-members/fahmid-ahmed-chowdhury.png',
    address: [
      'RTM Al-Kabir Technical University (RTM-AKTU)',
      'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
    ],
    phone: '01790022111',
    phoneHref: 'tel:+8801790022111',
    email: 'fahmid@rtm-aktu.ac.bd',
    bio: [
      "Fahmid Ahmed Chowdhury is a faculty member at RTM Al-Kabir Technical University (RTM-AKTU) with excellent track record of teaching and research. He currently serves as a Lecturer in the Department of Business Administration at RTM Al-Kabir Technical University (RTM-AKTU). In addition to his academic role, he is working part-time as an Invigilator at the British Council, where he contributes to maintaining examination standards and ensuring compliance with international assessment protocols. He has also completed an internship at Pubali Bank PLC, where he gained practical knowledge and hands-on experience in banking operations and financial services. He is actively involved in teaching a wide range of undergraduate and graduate courses in business and management disciplines. His professional journey reflects a strong commitment to academic excellence, student development, and practical learning. Alongside his academic responsibilities, he is engaged in business activities, which provide him with valuable real-world insights that enrich his teaching approach.",
      "Fahmid Ahmed Chowdhury completed his Bachelor of Business Administration (BBA) with a major in Human Resource Management and Master of Business Administration (MBA) with a major in Finance and Banking from Leading University, Sylhet. With a blend of academic engagement and practical exposure, he continues to contribute to business education and student skill development.",
      "His research interests lie in the broad areas of Finance, Banking, and Human Resource Management, with a focus on addressing contemporary challenges in business and economic development. He is particularly interested in exploring the integration of financial systems with organizational performance, as well as the role of human capital in achieving sustainable competitive advantage.",
    ],
    tabs: {
      'Research Interest': [
        {
          lines: [
            'His research interests lie at the intersection of human resource management and financial decision-making. He is particularly interested in areas such as:',
          ],
        },
        {
          items: [
            'Human Resource Development and Organizational Behavior',
            'Financial Decision-Making and Investment Analysis',
            'Labor Law and Employee Relations',
            'Banking Performance and Risk Management',
            'Business Research Methods and Data-Driven Decision Making',
            'The Impact of Training and Development on Employee Performance',
          ],
        },
      ],
      'Academic Information': [
        {
          items: [
            'Master of Business Administration (MBA), Major: Finance & Banking, Leading University, 2023',
            'Bachelor of Business Administration (BBA), Major: Human Resource Management, Leading University, 2024',
          ],
        },
      ],
      'Courses Taught': [
        {
          items: [
            'In BBA: Introduction to Business, Principles of Finance, Human Resource Management, Labor Law, Auditing & Taxation, Macroeconomics, Microeconomics, Business Mathematics, Mathematics for Decision Making',
            'In MBA: Corporate Finance, Security Analysis and Portfolio Management, Managerial Economics, Research Methods in Business, Auditing and Taxation',
          ],
        },
      ],
      'Areas of Expertise': '',
      'Experience': [
        {
          items: [
            'Lecturer, Department of Business Administration, RTM Al-Kabir Technical University, Sylhet, from 1st September 2024 to date.',
            'Exams Invigilator at British Council, Bangladesh (Part-time), from 20 October 2023.',
            'Internship at Pubali Bank PLC, Dargagate Branch, Sylhet, from 15 Nov 2022 to 15 Feb 2023.',
          ],
        },
      ],
      'Teaching and Academic Contributions': '',
      'Publications & Research': '',
      'Seminars/Workshops Participation': [
        {
          items: [
            'Attended a workshop on "CV Writing & Job Interview Workshop" hosted by Earthpedia Global and Leading University Business Club, 2024.',
            'Attended a workshop on "Business Idea Competition" hosted by Leading University Business Club, 2022.',
            'Attended a workshop on "Career Grooming & CV Writing" coordinated by IQAC & Leading University Business Club, 2022.',
            'Effective HR Practices in Modern Organizations, Sylhet Chamber of Commerce and Industry, 2023.',
          ],
        },
      ],
      'Contact': [
        {
          lines: [
            'Department of Business Administration',
            'RTM Al-Kabir Technical University (RTM-AKTU)',
            'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
            'Mobile: <a href="tel:+8801790022111">01790022111</a>',
            'Email: <a href="mailto:fahmid@rtm-aktu.ac.bd">fahmid@rtm-aktu.ac.bd</a>',
          ],
        },
      ],
    },
  },
  'jamal-ahmed': {
    name: 'Jamal Ahmed',
    role: 'MPH Program Coordinator',
    department: 'Department of Applied Health and Nutrition',
    photo: '../../images/faculty-members/jamal-ahmed.png',
    address: [
      'RTM Al-Kabir Technical University (RTM-AKTU)',
      'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
    ],
    phone: '01711983427',
    phoneHref: 'tel:+8801711983427',
    email: 'jamal@rtm-aktu.ac.bd',
    bio: [
      "Jamal Ahmed is a senior professional at RTM Al-Kabir Technical University (RTM-AKTU) with demonstrated commitment to excellence in teaching, research, and academic leadership. He is currently acting as the Deputy Registrar and Student Advisor at RTM Al-Kabir Technical University (RTM-AKTU). In addition to his administrative responsibilities, he is actively engaged in academia as a Lecturer and MPH Program Coordinator in the Department of Applied Health and Nutrition, where he contributes to curriculum development, academic coordination, and postgraduate program management.",
      "With over 30 years of extensive professional experience in public health, research, and development sectors, Mr. Ahmed has worked with several renowned national and international organizations, including BRAC, icddr,b, Johns Hopkins University Bangladesh Office, and Shimantik. His professional expertise spans maternal and neonatal health, health systems strengthening, capacity building, project implementation, and stakeholder coordination across multiple levels of governance.",
      "Mr. Ahmed completed his Master of Public Health (MPH) from Atish Dipankar University of Science and Technology. He also holds a Master of Science (MSc) degree from the University of Chittagong and a Bachelor of Science (Honours) degree from MC College, Sylhet.",
      "His research interests include maternal and child health, health systems strengthening, community-based health interventions, health service delivery, and public health program evaluation. He is particularly interested in capacity building of health systems, strengthening community engagement, and improving service delivery through evidence-based interventions and effective coordination among stakeholders.",
    ],
    tabs: {
      'Research Interest': [
        {
          lines: [
            'His research interests include maternal and child health, health systems strengthening, community-based health interventions, health service delivery, and public health program evaluation. He is particularly interested in capacity building of health systems, strengthening community engagement, and improving service delivery through evidence-based interventions and effective coordination among stakeholders.',
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
            'Master of Public Health (MPH) – Atish Dipankar University of Science and Technology',
            'Master of Science (MSc) – University of Chittagong',
            'Bachelor of Science (Honours) – MC College, Sylhet',
          ],
        },
      ],
      'Courses Taught': 'Courses taught include Population and Development, Community Health and Service Development, Environmental and Occupational Health and Safety, Public Health Information, Education and Communication (IEC), and Health Informatics. He is actively involved in curriculum planning, course design, and academic coordination as part of the MPH program. Developed lecture materials, assessment tools, and practical learning approaches to enhance student understanding of public health concepts and systems. Emphasized evidence-based learning, community-oriented approaches, and application of health information systems in public health practice.',
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
          heading: 'Deputy Registrar and Student Advisor — RTM Al-Kabir Technical University (RTM-AKTU)',
          lines: [
            'Current administrative role, held alongside his academic position as Lecturer and MPH Program Coordinator in the Department of Applied Health and Nutrition.',
          ],
        },
        {
          heading: 'Prior Professional Experience',
          lines: [
            'Over 30 years of experience in public health, research, and development, having worked with BRAC, icddr,b, Johns Hopkins University Bangladesh Office, and Shimantik — spanning maternal and neonatal health, health systems strengthening, capacity building, project implementation, and stakeholder coordination across multiple levels of governance.',
          ],
        },
      ],
      'Teaching and Academic Contributions': 'Actively engaged in curriculum development, student mentoring, and innovative teaching methodologies that enhance learning outcomes and academic performance.',
      'Publications & Research': '',
      'Seminars/Workshops Participation': '',
      'Contact': [
        {
          lines: [
            'Department of Applied Health and Nutrition',
            'RTM Al-Kabir Technical University (RTM-AKTU)',
            'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
            'Contact: <a href="tel:+8801711983427">+8801711983427</a>',
            'Email: <a href="mailto:jamal@rtm-aktu.ac.bd">jamal@rtm-aktu.ac.bd</a>',
            'Website: <a href="https://www.rtm-aktu.ac.bd" target="_blank" rel="noopener">www.rtm-aktu.ac.bd</a>',
          ],
        },
      ],
    },
  },
  'jannatul-nayem-novera': {
    name: 'Jannatul Nayem Novera',
    role: 'Lecturer',
    department: 'Department of Electrical and Electronic Engineering (EEE)',
    photo: '../../images/faculty-members/jannatul-nayem-novera.png',
    address: [
      'RTM Al-Kabir Technical University (RTM-AKTU)',
      'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
    ],
    phone: '01756805668',
    phoneHref: 'tel:+8801756805668',
    email: 'jannatul@rtm-aktu.ac.bd',
    bio: [
      "Jannatul Nayem Novera currently serves as a Lecturer in the Department of Electrical and Electronic Engineering at RTM Al-Kabir Technical University (RTM-AKTU), Sylhet, Bangladesh. She is an academic professional at RTM Al-Kabir Technical University (RTM-AKTU) with demonstrated commitment to excellence in teaching and research. She specializes in biomedical engineering, machine learning, and deep learning applications, with a focus on intelligent healthcare systems, bioelectrical impedance analysis, and AI-driven biomedical prediction. She has published research on intracellular fluid modeling, hybrid plasmonic waveguides for nano-scale light confinement, and machine learning–based biomedical optimization, and has received the National Science and Technology (NST) Fellowship and the Bank Asia Higher Studies Scholarship.",
      "She holds an M.Sc. in Electrical and Electronic Engineering from Noakhali Science and Technology University, following her B.Sc. in the same discipline.",
      "Her research interests lie in the fields of biomedical engineering, machine learning, and deep learning. She is particularly interested in developing intelligent healthcare systems, applying data-driven models for biomedical prediction, and integrating advanced signal and image processing techniques into medical diagnostics. Her work also explores nano-scale photonic structures and AI-based approaches to improve accuracy and efficiency in biomedical and engineering applications.",
      "Currently, she is investigating advanced deep learning models for biomedical image enhancement, healthcare prediction systems, and integration of AI and IoT for smart sensing applications. She teaches courses in electronics, digital systems, programming, telecommunication engineering, and experimental laboratories, combining theory with practical, hands-on learning. She also mentors students, supervises research projects, and organizes technical events to promote innovation and skill development within the EEE community.",
    ],
    tabs: {
      'Research Interest': 'Her research interests span the fields of Biomedical engineering and image processing.',
      'Academic Information': [
        {
          items: [
            'Bachelor of Science in Electrical and Electronic Engineering, 2021, Noakhali Science and Technology University, Noakhali.',
            'Higher Secondary School Certificate, Science, 2016, Haziganj Degree College, Comilla Education Board.',
            'Secondary School Certificate, Science, 2014, Haziganj Pilot Girls High School, Comilla Education Board.',
          ],
        },
      ],
      'Courses Taught': 'Electronics-II, Electronics-II Laboratory, Circuit Simulation Laboratory, Basic Mechanical Engineering, Basic Mechanical Engineering Laboratory, Chemistry, Chemistry Laboratory.',
      'Areas of Expertise': '',
      'Experience': [
        {
          items: [
            'Lecturer, Department of Electrical and Electronic Engineering, RTM-AKTU, from 01/02/2025 to till now.',
            'Internship Trainee, on Industrial Technology of Electrical Engineering and Instrumentation, from 09/03/2021 to 30/03/2021.',
          ],
        },
      ],
      'Teaching and Academic Contributions': '',
      'Publications & Research': [
        {
          items: [
            'Mathematical Models Development of Intracellular Fluid with Bioelectrical Impedance Analysis. (ICISET 2024)',
            'A Novel Hybrid Plasmonic Waveguide for Nano-Scale Light Confinement and Long Propagation Range. (ECCE 2025)',
            'Machine Learning-Driven Optimization of Bioelectrical Impedance Analysis for Intracellular Fluid Prediction. (ICERIE 2025)',
            'Adaptation Attention module based Generative Adversarial Network (AAM-GAN) for Underwater Image Enhancement and Object Detection. (MSc. Thesis)',
          ],
        },
      ],
      'Seminars/Workshops Participation': [
        {
          items: [
            'Conducted a workshop on Basic C programming (2023).',
            'Attended a day-long seminar on "python programming" organized by NSTU CSTE Club.',
          ],
        },
      ],
      'Contact': [
        {
          lines: [
            'Department of Electrical and Electronic Engineering',
            'RTM Al-Kabir Technical University (RTM-AKTU)',
            'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
            'Email: <a href="mailto:jannatul@rtm-aktu.ac.bd">jannatul@rtm-aktu.ac.bd</a>',
            'Contact: <a href="tel:+8801756805668">+8801756805668</a>',
          ],
        },
      ],
    },
  },
  'mahmuda-shatu-rethe': {
    name: 'Mahmuda Shatu Rethe',
    role: 'Lecturer',
    department: 'Department of Technology',
    photo: '../../images/faculty-members/mahmuda-shatu-rethe.png',
    address: [
      'RTM Al-Kabir Technical University (RTM-AKTU)',
      'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
    ],
    phone: '01303306903',
    phoneHref: 'tel:+8801303306903',
    email: 'mahmuda@rtm-aktu.ac.bd',
    bio: [
      "Mahmuda Shatu Rethe is currently serving as a Lecturer in the Department of Technology (Fashion Design) at RTM Al-Kabir Technical University (RTM-AKTU). She is an academic professional at RTM Al-Kabir Technical University (RTM-AKTU) with demonstrated commitment to excellence in teaching and research. She has previously worked at Cotton Field BD (Ltd.), Mondol Group, as a Trainee Executive in the R&D Department. She has great communication, organizing, and team-building skills.",
      "Mahmuda Shatu Rethe obtained her Bachelor of Science degree in Fashion Design and Technology from Uttara University.",
      "In addition to her teaching, she is actively engaged in curriculum development, student mentoring, and innovative teaching methodologies that enhance learning outcomes and academic performance.",
      "Her research interests span the fields of draping technique and the history of street fashion.",
    ],
    tabs: {
      'Research Interest': [
        {
          lines: [
            'Her research interests span the fields of draping technique and the history of street fashion.',
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
            'Bachelor of Science in Fashion Design and Technology at Uttara University, Dhaka.',
            'Higher Secondary School Certificate, Science, 2019, Shahit Tajuddin Ahamed GOVT College, Dhaka Education Board.',
            'Secondary School Certificate, Science, 2016, Kapaleswer High School, Dhaka Education Board.',
          ],
        },
      ],
      'Courses Taught': 'Draping-2, Introduction to Fashion and Clothing Related Industry in Bangladesh, Pattern Making and Apparel Construction, Pattern Drafting-2, Pattern Drafting-3, Draping-1, Draping-2 (Evening Gown), Surface Ornamentation, Clothing Material and Store Management.',
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
          items: [
            'Lecturer, Department of Technology (Fashion Design), RTM-AKTU, from 07/10/2024 to till now.',
            'Research & Development (R&D) Department Intern, Mondol Group (Cotton Field BD Ltd.), from 14/04/2024 to 14/07/2024.',
          ],
        },
      ],
      'Teaching and Academic Contributions': 'Actively engaged in curriculum development, student mentoring, and innovative teaching methodologies that enhance learning outcomes and academic performance.',
      'Publications & Research': '',
      'Seminars/Workshops Participation': '',
      'Contact': [
        {
          lines: [
            'Department of Technology (Fashion Design)',
            'RTM Al-Kabir Technical University (RTM-AKTU)',
            'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
            'Email: <a href="mailto:mahmuda@rtm-aktu.ac.bd">mahmuda@rtm-aktu.ac.bd</a>',
            'Contact: <a href="tel:+8801303306903">+8801303306903</a>, <a href="tel:+8801867618402">01867618402</a>',
          ],
        },
      ],
    },
  },
  'md-abdul-awal-ansary': {
    name: 'Md. Abdul Awal Ansary',
    role: 'Associate Professor and Head',
    department: 'Department of Computer Science and Engineering (CSE)',
    photo: '../../images/faculty-members/md-abdul-awal-ansary.png',
    address: [
      'RTM Al-Kabir Technical University (RTM-AKTU)',
      'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
    ],
    phone: '01710445033',
    phoneHref: 'tel:+8801710445033',
    email: 'awalansary@rtm-aktu.ac.bd',
    bio: [
      "Md. Abdul Awal Ansary is currently serving as an Associate Professor and Head of the Department of Computer Science and Engineering (CSE) at RTM Al-Kabir Technical University (RTM-AKTU). He joined the university as an Associate Professor on 15 February 2022 and has been serving as the Head of the Department since 1 March 2022. Prior to this, Mr. Ansary served as an Associate Professor and Head of the Department of Computer Science and Engineering at Sylhet International University (SIU). He joined the Department of CSE at SIU on 2 April 2005.",
      "He has completed his B.Sc. Engineering and M.Sc. degrees in Computer Science and Engineering from Shahjalal University of Science and Technology (SUST). He is currently pursuing his PhD in the Department of Computer Science and Engineering at SUST. His research focuses on Natural Language Processing (NLP), particularly on developing a Neural Machine Translation system between Bangla and English by integrating linguistic knowledge.",
      "Mr. Ansary has published several research articles in reputed journals as well as in the proceedings of IEEE flagship and portfolio conferences. In addition to his academic and research activities, he has participated in numerous training workshops and seminars, particularly under the Higher Education Quality Enhancement Project (HEQEP) and Outcome Based Education (OBE), during his teaching career.",
    ],
    tabs: {
      'Research Interest': 'Management Studies, Business Strategy, Organizational Development, Applied Research, Higher Education Pedagogy.',
      'Academic Information': [
        {
          items: [
            'Ph.D. Research Fellow in Computer Science and Engineering, Shahjalal University of Science and Technology, Sylhet, Bangladesh.',
            'M.Sc. in Computer Science and Engineering, Shahjalal University of Science and Technology, Sylhet, Bangladesh.',
            'B.Sc. Engineering in Computer Science and Engineering, Shahjalal University of Science and Technology, Sylhet, Bangladesh.',
            'Higher Secondary Certificate (HSC) Examination (Science), Dhaka College, Board: Dhaka, Bangladesh.',
            'Secondary School Certificate (SSC) Examination (Science) (Board stand missed by 1 mark), Deen Nath Institution Satkapon, Bahubal, Habiganj, Board: Comilla, Bangladesh.',
          ],
        },
      ],
      'Courses Taught': "Computer Vision and Image Processing with Lab, Computer Interfacing with Lab, Programming in C/C++/Java with Lab, Algorithms with Lab, Data Structure with Lab, Database Systems with Lab, Computer Networking with Lab, Operating Systems with Lab, Computer Graphics with Lab, Software Engineering with Lab, Computer Fundamentals with Lab, and supervised and evaluated students' Project/Thesis work.",
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
          heading: 'Professional Activities',
          items: [
            'Associate Professor, Dept. of Computer Science and Engineering, RTM Al-Kabir Technical University, Sylhet, Bangladesh, 15th February 2022 to date.',
            'Associate Professor, Dept. of Computer Science and Engineering, Sylhet International University, Sylhet, Bangladesh, 23rd February 2021 to 14th February 2022.',
            'Assistant Professor, Dept. of Computer Science and Engineering, Sylhet International University, Sylhet, Bangladesh, 11th February 2009 to 22nd February 2021.',
            'Head, Dept. of Computer Science and Engineering, RTM Al-Kabir Technical University, Sylhet, Bangladesh, 1st March 2022 to date.',
            'Head, Dept. of Computer Science and Engineering, Sylhet International University, Sylhet, Bangladesh, 1st November 2019 to 14th February 2022.',
            'Head, Dept. of Computer Science and Engineering, Sylhet International University, Sylhet, Bangladesh, 28th July 2012 to 11th November 2012.',
            'Coordinator, Dept. of Computer Science and Engineering, Sylhet International University, Sylhet, Bangladesh, 3rd October 2007 to 27th July 2012.',
            'Lecturer, Dept. of Computer Science and Engineering, Sylhet International University, Sylhet, Bangladesh, 2nd April 2005 to 10th February 2009.',
          ],
        },
        {
          heading: 'Administrative Experiences',
          items: [
            'Provost, Female Hostel, Sylhet International University, from 25th May 2010 to 5th August 2020.',
            'Member, Self-Assessment (SA) Committee, CSE Department, Sylhet International University under HEQEP Project, UGC, Bangladesh.',
            'Syndicate Member, 2009–2010, Sylhet International University.',
            'Academic Council Member, 2008–2012, Sylhet International University.',
            'Academic Council Member, 2019 – 15th February 2022, Sylhet International University.',
            'Director, Center for Research, Testing and Consultancy (CRTC), Sylhet International University.',
            'President, CSE Society, Sylhet International University.',
            'Convener, 3-day long regular annual program named "ICT Fest 2009" including inter-university computer-programming contest among the students, seminars, workshops, motion pictures display and software/hardware exhibition, 5th–7th February 2009, Campus of Sylhet International University.',
            'Convener, ICT Awareness Conference and Programming Contest 2008, Campus of Sylhet International University, 16th February 2008.',
            'Member, Cultural Program Management Committee, Sylhet International University, 2007.',
            'Treasurer, ICT Awareness Program and Software Exhibition 2005, Campus of Sylhet International University.',
            'Judge, ICT projects of "Project Fair 2008", Institute of Business & Information Technology (IBIT), Al Hamra, Sylhet, Bangladesh.',
            'Project Director, "SIU Monitoring Drone" (2019) and "Line Follower Robot" (2018), under CRTC, Sylhet International University.',
            'President, Organization Committee, Computer Fair and Exhibition-2001, Bahubal, Habiganj, Bangladesh.',
            'President, Organization Committee, Computer Fair and Exhibition-2002, Bahubal, Habiganj, Bangladesh.',
            'Former President, Bahubal Thana IT Club (BTITC), 2001–2003.',
            'Former member, CSE Society, Department of Computer Science & Engineering, Shahjalal University of Science & Technology, Sylhet, Bangladesh.',
          ],
        },
      ],
      'Teaching and Academic Contributions': 'Actively engaged in curriculum development, student mentoring, and innovative teaching methodologies that enhance learning outcomes and academic performance.',
      'Publications & Research': [
        {
          heading: 'Publications',
          items: [
            'Md. Abdul Awal Ansary, "Data Warehousing with AFT Star Schema", SIU Studies, Vol-1, Issue no-3, July-December 2007, ISSN 1991-3052.',
            'Md. Abdul Awal Ansary, Sushanta Acharjee, "Straight Flavor of Binary Number in Decimal Number System", ARPN Journal of Systems and Software, Vol. 2, No. 11, November 2012, ISSN 2222-9833.',
            'Md. Abdul Awal Ansary, Mohammad Reza Selim, Muhammad Zafar Iqbal, "Bangla Academic Dictionaries (BAD) Corpus with some Applications and Statistical Analysis", Journal of Emerging Trends in Computing and Information Sciences, Vol. 3, No. 11, November 2012, ISSN 2079-8407.',
            'Md. Abdul Awal Ansary, Mohammad Reza Selim, Muhammad Zafar Iqbal, "Overcoming the Language Divide between English and Bengali through EBTran System", Journal of Emerging Trends in Computing and Information Sciences, Vol. 4, No. 1, January 2013, ISSN 2079-8407.',
            'Md. Abdul Awal Ansary, Jiaul Hasan Jony, "N-gram Based Bangla Text (News) Categorization System", SIU Studies, Vol-05, Issue no-11, July-December 2016, ISSN 1991-3052.',
            'Md. Abdul Awal Ansary, Rajarshi Roy Chowdhury, Md. Jakir Mia, "A Survey of Software Development Practices in Sylhet Metropolitan Software Firms, Bangladesh", International Journal of Engineering and Innovative Technology, Volume 3, Issue 7, January 2014, ISSN 2277-3754.',
            'Md. Abdul Awal Ansary, Mir Mehedi Hasan, "An Intelligent Line Following Robot with Obstacle Detection", International Journal of Science and Engineering Investigations, Vol. 5, Issue 53, June 2016, ISSN 2251-8843.',
            'Rajarshi Roy Chowdhury, Md. Abdul Awal Ansary, "A Secured Mutual Authentication Protocol for RFID System", International Journal of Scientific & Technology Research, Volume 3, Issue 5, May 2014, ISSN 2277-8616.',
            'Shahjahan Ahmed, Mohammad Mahmudul Alam Mia, Sushanta Acharjee, Md. Abdul Awal Ansary, "More Efficient Use of Photovoltaic Solar Panel Using Multiple Fixed Directed Mirrors or Aluminum Foils Instead of Solar Trackers in Rural Perspective of Bangladesh", International Journal of Scientific & Technology Research, Volume 3, Issue 4, April 2014, ISSN 2277-8616.',
          ],
        },
        {
          heading: 'Research Projects',
          items: [
            'Transfer Based Approach to "English to Bengali Translation".',
            'Security Management System of a Multinational Company.',
            'Optical Fiber Network for Mymensingh.',
            'Result Processing System.',
            'Banking Transaction System.',
            'Library Management System.',
            'University Administration Automation System.',
            'Computer Interfacing and Instrumentation.',
            'Design of a Digital Clock.',
            'Shopping Mall Management System.',
            'CD Selling & Renting Management System.',
          ],
        },
      ],
      'Seminars/Workshops Participation': [
        {
          items: [
            'Successfully completed a 2-semester (1-year) long software development project as an internship at IDLC Com. Pvt. Ltd., Dhaka, Bangladesh, in 2004.',
            'Participated in a 5-day long workshop on Teaching-Learning, Curriculum and Quality Assurance at GTI, Bangladesh Agricultural University, Mymensingh, Bangladesh, 27–31 March 2016.',
            'Participated in a 5-day long short course on Current Trends in Research Leading to Industrial Applications of Image Processing at Islamic University of Technology, Dhaka, Bangladesh, 21–24 December 2015.',
            'Participated in a 2-day long workshop on Academic Writing at Shahjalal University of Science and Technology, Sylhet, Bangladesh, 22–23 August 2014.',
            'As a member of the Self-Assessment (SA) Committee, CSE Department, Sylhet International University under the HEQEP Project, UGC, Bangladesh, participated in several workshops on different topics of HEQEP.',
          ],
        },
      ],
      'Contact': [
        {
          lines: [
            'Md. Abdul Awal Ansary',
            'Associate Professor and Head',
            'Department of Computer Science and Engineering (CSE)',
            'RTM Al-Kabir Technical University (RTM-AKTU)',
            'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
            'Email: <a href="mailto:awalansary@rtm-aktu.ac.bd">awalansary@rtm-aktu.ac.bd</a>',
            'Contact: <a href="tel:+8801710445033">+8801710445033</a>',
            'Website: <a href="https://www.rtm-aktu.ac.bd" target="_blank" rel="noopener">www.rtm-aktu.ac.bd</a>',
          ],
        },
      ],
    },
  },
  'md-eyakub-ali': {
    name: 'Md. Eyakub Ali',
    role: 'Lecturer',
    department: 'Department of Electrical and Electronic Engineering (EEE)',
    photo: '../../images/faculty-members/md-eyakub-ali.png',
    address: [
      'RTM Al-Kabir Technical University (RTM-AKTU)',
      'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
    ],
    phone: '01705344484',
    phoneHref: 'tel:+8801705344484',
    email: 'eyakub@rtm-aktu.ac.bd',
    bio: [
      "Md. Eyakub Ali currently serves as a Lecturer in the Department of Electrical and Electronic Engineering at RTM Al-Kabir Technical University (RTM-AKTU), Sylhet, Bangladesh. He is an academic professional at RTM Al-Kabir Technical University (RTM-AKTU) with demonstrated commitment to excellence in teaching and research. Prior to his academic career, he worked as a Trainee Executive in Machine Learning at E-Learning and Earning Limited. He teaches programming and engineering courses and is proficient in C, Python, MATLAB, Arduino, and simulation tools such as NI Multisim and LTSpice. His current research explores AI-driven engineering applications and IoT-based systems, including AI-based rainfall prediction models, bioelectrical impedance analysis for health monitoring, and smart sensing devices for engineering applications. Outside academia, he actively contributes to student development and technical communities through leadership and innovation initiatives. He has also demonstrated strong leadership and organizational capabilities, serving as Vice President of the NSTU EEE Association, Treasurer of the RTM-AKTU Robotics Club, and Organizer of EEE Carnival 2025. He is a Member of IEEE and Founder of NSTU Robotics Club.",
      "He holds both M.Sc. (Engg.) and B.Sc. degrees in Electrical and Electronic Engineering from Noakhali Science and Technology University.",
      "His research interests lie in the fields of Machine Learning (ML), Internet of Things (IoT), robotics, and renewable energy systems, particularly solar cell technologies. He is especially interested in developing intelligent data-driven models, designing smart and connected systems, and integrating AI-based solutions into real-world engineering applications. His research focuses on machine learning, biomedical sensing, metamaterials, and rainfall forecasting. He has published in reputable journals, including Science of the Total Environment and Physica Scripta.",
    ],
    tabs: {
      'Research Interest': 'His research interests span the fields of Machine Learning (ML), Internet of Things (IoT), Robotics, and Solar Cells.',
      'Academic Information': [
        {
          items: [
            'Bachelor of Science in Electrical and Electronic Engineering, 2021, Noakhali Science and Technology University, Noakhali.',
            'Higher Secondary School Certificate, Science, 2017, Abdul Kadir Mollah City College, Dhaka Education Board.',
            'Secondary School Certificate, Science, 2015, Homeland Ideal School, Sylhet Education Board.',
          ],
        },
      ],
      'Courses Taught': 'Physics-I, Physics-I Lab, Digital Electronics and Logic Design, Digital Electronics and Logic Design Lab, Electronic Devices and Circuits, Electronic Devices and Circuits Lab, Digital Logic Design, Digital Logic Design Lab.',
      'Areas of Expertise': '',
      'Experience': [
        {
          items: [
            'Lecturer, Department of Electrical and Electronic Engineering, RTM-AKTU, from 01/03/2024 to till now.',
            'Trainee Executive of Machine Learning, E-learning and Earning LTD, from 09/03/2023 to 30/09/2023.',
          ],
        },
      ],
      'Teaching and Academic Contributions': '',
      'Publications & Research': [
        {
          items: [
            'Hole Transport Layer Free Non-Toxic Perovskite Solar Cell Using ZnSe Electron Transport Material. (Accepted: MIET 2022 & Published on Springer: <a href="https://link.springer.com/chapter/10.1007/978-3-031-34622-4_39" target="_blank" rel="noopener">link</a>).',
            'Amphibious Plastic Waste Collector with AI Image Recognition and Plastic Sensing Technique. (Accepted: BRIS, ID: GWT-1029).',
          ],
        },
      ],
      'Seminars/Workshops Participation': [
        {
          items: [
            'Attended a day-long seminar on "PhD Talk" organized by NSTU Science Club.',
            'Conducted a workshop on Basic C programming (2022).',
            'Conducted a workshop on Introduction to Robotics (2022).',
          ],
        },
      ],
      'Contact': [
        {
          lines: [
            'Department of Electrical and Electronic Engineering',
            'RTM Al-Kabir Technical University (RTM-AKTU)',
            'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
            'Email: <a href="mailto:eyakub@rtm-aktu.ac.bd">eyakub@rtm-aktu.ac.bd</a>',
            'Contact: <a href="tel:+8801705344484">+8801705344484</a>',
          ],
        },
      ],
    },
  },
  'md-mizanur-rahman': {
    name: 'Md. Mizanur Rahman',
    role: 'Lecturer',
    department: 'Department of Technology',
    photo: '../../images/faculty-members/md-mizanur-rahman.png',
    address: [
      'RTM Al-Kabir Technical University (RTM-AKTU)',
      'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
    ],
    phone: '01648846942',
    phoneHref: 'tel:+8801648846942',
    email: 'mizanur@rtm-aktu.ac.bd',
    bio: [
      "Md. Mizanur Rahman is currently serving as a Lecturer in the Department of Technology (Fashion Design) at RTM Al-Kabir Technical University (RTM-AKTU). He has demonstrated commitment to excellence in teaching and research in relation to fashion design. He began his professional career as a Trainee Fashion Designer at Sale Point Fashion House, where he gained practical experience in design studio operations and fashion development. He has also served as a Fashion Designer at Sale Point Fashion House and later worked as an Industrial Engineer at Energy Pack Fashion Ltd. Through these roles, he developed strong expertise in fashion design, production processes, and industrial workflow management. Mr. Mizanur possesses excellent communication, organizational, and team-building skills, enabling him to collaborate effectively with design and production teams to achieve organizational goals.",
      "Mr. Mizanur obtained his Bachelor of Science degree in Fashion Design & Technology from Uttara University. He later completed his Master's degree from RTM Al-Kabir Technical University.",
      "His research interests lie in the fields of fashion trend analysis, pattern technology, and textile technology. He is particularly interested in exploring innovative approaches to fashion design, learning emerging fashion trends, and integrating modern textile technologies into contemporary fashion development.",
    ],
    tabs: {
      'Research Interest': [
        {
          lines: [
            'His research interests lie in the fields of fashion trend analysis, pattern technology, and textile technology. He is particularly interested in exploring innovative approaches to fashion design, learning emerging fashion trends, and integrating modern textile technologies into contemporary fashion development.',
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
            'Masters of Education (Med), Running, RTM Al-Kabir Technical University, Sylhet.',
            'Bachelor of Science in Fashion Design & Technology, 2018, Uttara University, Dhaka.',
            'Higher Secondary School Certificate, Science, 2013, Technical School & College Panchgargh, BTEB Board.',
            'Secondary School Certificate, Science, 2011, Textile Vocational Institute Rangpur, BTEB Board.',
          ],
        },
      ],
      'Courses Taught': 'Delivered undergraduate-level instruction in fashion design and apparel technology, integrating theoretical knowledge with practical studio-based learning. Courses taught include Fashion Styling and Promotion, Textile Technology, Quality Control, Product Development, Advanced Pattern Making, Pattern Drafting, Fashion Art, Sewing Technology, Computer-Aided Design (CAD), and Industrial Training. Developed course materials, lesson plans, and assessment strategies to support student learning and skill development. Supervised studio practice, guided students in creative design processes, technical pattern development, and garment construction techniques. Emphasized industry-relevant practices, quality standards, and production processes to prepare students for professional roles in the fashion and textile sector. Provided academic mentoring, evaluated student projects, and supported students during industrial training placements to strengthen their practical and professional competencies.',
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
          items: [
            'Lecturer, Department of Technology (Fashion Design), RTM-AKTU, from 01/07/2024 to till now.',
            'Industrial Engineer of Energy Pack Fashion Ltd., from 15/01/2022 to 30/06/2024.',
            'Trainee Fashion Designer of Sale Point Fashion House, from 01/01/2020 to 30/12/2021.',
          ],
        },
      ],
      'Teaching and Academic Contributions': 'Actively engaged in curriculum development, student mentoring, and innovative teaching methodologies that enhance learning outcomes and academic performance.',
      'Publications & Research': '',
      'Seminars/Workshops Participation': [
        {
          items: [
            'Attended a Fashion Designer on "Fashion Show" organized by Uttara University.',
            'Attended a Designer on "Jewelry Exhibition" organized by Uttara University.',
            'Attended a Designer on "Kids Dress Exhibition" organized by Uttara University.',
            'Conducted a workshop on Introduction to Visual Merchandising (2017).',
          ],
        },
      ],
      'Contact': [
        {
          lines: [
            'Department of Technology (Fashion Design)',
            'RTM Al-Kabir Technical University (RTM-AKTU)',
            'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
            'Email: <a href="mailto:mizanur@rtm-aktu.ac.bd">mizanur@rtm-aktu.ac.bd</a>',
            'Contact: <a href="tel:+8801648846942">+8801648846942</a>',
            'Website: <a href="https://www.rtm-aktu.ac.bd" target="_blank" rel="noopener">www.rtm-aktu.ac.bd</a>',
          ],
        },
      ],
    },
  },
  'md-nazrul-islam': {
    name: 'Md. Nazrul Islam',
    role: 'Adjunct Faculty',
    department: 'Department of Applied Health and Nutrition',
    photo: '../../images/faculty-members/md-nazrul-islam.png',
    address: [
      'RTM Al-Kabir Technical University (RTM-AKTU)',
      'Campus: TB Gate, Tultikor, Sylhet-3100, Bangladesh',
    ],
    phone: '01791000571',
    phoneHref: 'tel:+8801791000571',
    email: 'naameera2008@gmail.com',
    bio: [
      "Md. Nazrul Islam, formerly the Associate Professor and Head of the Department of Applied Health and Nutrition at RTM Al-Kabir Technical University (RTM-AKTU), is now associated with the university as an Adjunct Faculty member. Prior to this, an accomplished Program Director and highly effective at overseeing multi-country program development and implementation funded by various donors like UNFPA, SSCAF, World Bank, Packard Foundation, Hewlett Foundation, Bill and Melinda Gates Foundation, Gillespie Foundation, DFID/UKAID, USAID, European Commission, and Bi-lateral Governments Project. Versatile leader proficient in handling diverse functions on a daily basis. Offering 17 years' experience in program development and management, communication and research for eradicating poverty, health system strengthening and population development for attaining the global population and reproductive health agenda for sustainable development. Excels at multitasking and liaising with various donors, governments and departments. Analytical problem solver and exceptional decision-maker.",
      "He taught Master's in Development Studies at East West University, Dhaka. He also taught PhD students during the academic course works of the PhD program at Institute for Social and Economic Change (ISEC), a world eminent academic and research institute located in Karnataka, India.",
      "Talented, skilled in handling administrative, operational and outreach program functions. Excel at working with Governments to provide technical support to promote health workforce to introduce medical courses like B.Sc. in Nursing Degree, community health workers and paramedics through public and private universities/medical colleges and private training institutions in Bangladesh. Demonstrated leadership skills leveraged to drive teams toward success and sustain organizational missions. Strong managerial skills and programmatic abilities with expertise in directing teams of professionals in high-volume settings. Specialized in revamping and turning around under-performing programs. Proven leader at working with team members and collaborating with high level stakeholders for policy changes. Proficient Program Director with exceptional strengths in strategic planning, market forecasting, and staff development. Over 6 years of experience creating new customer-focused programs that drive business development in private health sector to create job markets and business development for economic growth.",
    ],
    tabs: {
      'Research Interest': "Research interest covers a wide range of public health issues including COVID-19 response, health system and management, South-South Cooperation, social capital, governance and public service delivery, population policy and demography, Public Expenditure Review, Poverty Impact Analysis, Quality of Care (QoC).",
      'Academic Information': [
        {
          items: [
            "Ph.D. in Political Science, completed 09/2004, University of Mysore, India.",
            "Master of Arts in Political Science, completed 08/1996, Bangalore University, Bangalore, Karnataka, India.",
            "Master of Arts in Public Administration, completed 07/1996, University of Dhaka, Dhaka, Bangladesh.",
            "Bachelor of Arts in Public Administration, completed 07/1989, University of Dhaka, Dhaka, Bangladesh.",
          ],
        },
      ],
      'Courses Taught': "Fundamentals of Public Health and Environment, Philosophy and Forms of Development and Governance, International Public Health.",
      'Areas of Expertise': '',
      'Experience': [
        {
          heading: 'Program Director — Partners in Population and Development (PPD), Dhaka, Bangladesh (03/2009 to Current)',
          items: [
            "Developed inter-country and South-South cooperation programs, multi-year strategic planning at national and global levels from ground up, laying out framework and defining roles.",
            "Identified strategic activities, operation and management tasks to keep in line with departmental budget. Identified program and budgeting risks and developed mitigation plans. Addressed and resolved technical, financial and operational concerns by working with team members, directors and partners.",
            "Promoted partnerships, technical cooperation, evidence based knowledge management and capacity building programs to accelerate the progress in achieving Sustainable Development Goals in member countries.",
            "Improved revenues 10% by implementing successful projects and service deliveries activities, innovation to programming and dialogue that penetrated new opportunity for grants.",
            "Constructed 36 Community clinics in 6 Districts of Bangladesh to ensure healthcare to 200,000 rural poor.",
            "Worked for 1,622,298 target population including 64,214 beneficiaries of pregnant women in 6 Upazilas in 2 Districts.",
            "Oversaw financial management of programs and operations monitoring and controlling program income and expenses, ensuring quarterly and annual financial reporting.",
            "Oversaw program design, proposal development, program implementation to ensure high quality, accurate outcomes are achieved.",
            "Provided technical support to country focal persons/government officials for planning, budgeting, implementing and reporting.",
            "Led strategic engagement to identify country needs and opportunities and to lead teams to achieve demonstrable and high quality results.",
            "Mobilized resources through strategic planning, developing concept note, project proposals and budgeting.",
            "Worked with Board Members to turn mandates into real-world policies and advance program objectives. Contributed in preparing speeches/presentations and dialogue for them as ministerial panelists and speakers for global forum.",
            "Met and collaborated with program staffs to uncover issues, identify applicable solutions and offer guidance in identify country needs and opportunities and to lead teams to achieve demonstrable and high quality results.",
            "Engaged in policy review, ensuring policy compliance for internal and external obligation and ensure accountability and transparency in management.",
            "Recruited, interviewed and hired staff members offering exceptional talent and brought great skills to team. Oversaw team of 16 personnel focused on program, finance and administration capacity building and motivation with strong management organogram.",
          ],
        },
        {
          heading: 'Coordinator, Private Sector Health — RTM Research and Training Institute (formerly JSI Bangladesh), Dhaka (03/2006 to 02/2009)',
          items: [
            "Conducted value chain analysis and identify value chain of the private sector, explore ideas, develop interventions and implement interventions through partnership/sub-contracting with Ministries, SMEs, NGOs, public and private universities, private medical colleges, medical institutions to increase economic growth of the poor.",
            "Developed and implemented variety of innovative policies and strategies to promote youth development.",
            "Facilitated technical assistance to the government agencies and institutions for establishing training institutions with polices, designing modules for training of trainers (ToT), develop curricula for training courses including B.Sc. Nursing and short courses for nurses, community health workers, health assistant, community paramedics and health technologists etc.",
            "Achieved to newly established first time in Bangladesh in 2008, 5 BSc in Nursing Colleges associated with Public Medical Colleges with 500 student's capacity and 19 Private Nursing Colleges associated with private medical colleges with 860 student's capacities those who comes from hard to reach and poor families and 90% are female of the total students get admission annually. Several short courses that mainly targeted for thousands of poor female students to become community health workers/paramedics those who later worked at Micro Credit Institutions/NGOs.",
            "Liaison with Ministries, NGOs, Donors, and public & private organizations.",
            "Conferred with representatives of local governments and partners to assess and meet community needs. Educated families and community members about domestic violence, including its impact on children.",
            "Applied need assessment, market research to design up-to-date programs. Conceptualized future program components.",
            "Oversaw expenditures and worked with finance department to manage budgets. Maintained accurate, current and compliant financial records by monitoring and addressing variances.",
            "Oversaw productivity streams for ongoing and special projects.",
            "Established positive working relationships with colleagues, manager and partners through regular communication and effective anticipation of needs.",
            "Prepared monthly, quarterly and annual reports to submits donors and directors.",
            "Assessed personnel performance and implemented incentives and team-building events to boost morale.",
            "Led comprehensive designing training and skill building programs for youth development, poverty elimination and economic growth at sectoral level and national level.",
            "Helped partners with day-to-day work and complex problems by applying motivational and analytical strategies.",
            "Resolved employment-related disputes through proactive communication.",
            "Supervised staff, organize staff meetings to discuss new ideas and update participants on program details and milestones.",
            "Coordinated work between multiple partners, departments gathered and organized all logistics, printed materials, publications, presentations required for program participation.",
          ],
        },
        {
          heading: 'Program Officer — JSI Research and Training Institute, Inc., Dhaka (11/2004 to 02/2006)',
          items: [
            "Designed program implementation and maintenance plan, including ensuring availability of appropriate resources. Evaluated program operations, successes and deficiencies to identify concerns and recommend strategies to enhance processes and elevate results. Developed and recommended policies and procedures for evaluating programs.",
            "Determined staffing plans to achieve program goals and objectives and participated in hiring decisions for new program staff.",
            "Collaborated with senior leadership team to implement special projects, increasing program and organizational capacity. Provided key leadership to project managers, directors and other team members. Turned strategic mandates into actionable program plans.",
            "Coordinated communication among partners, stakeholders and members to foster activities and connections between departments. Oversaw 5 to 6 projects each year from concept through final delivery. Provided ongoing direction and leadership for program operations.",
            "Negotiated with donors to secure resources, enhancing number of programs offerings without exceeding budget. Collaborated with finance department to budget and monitor program operations, ensuring sound fiscal and system management. Reduced costs and improved operational performance without sacrificing quality by developing and implementing diverse approaches.",
            "Developed activities to determine feasibility and sustainability of programs, leading to more effective and efficient service delivery.",
            "Analyzed internal reports to evaluate program effectiveness by using outcomes-based approach. Spearheaded implementation of program rules, frameworks and toolkits to facilitate smooth change management process. Analyzed and assessed program performance data and implemented corrective measures.",
            "Reviewed and processed grant proposals through innovative ideas, technicality of concept and process of the budget mechanism. Conducted research to identify and scrutinize potential grantees.",
            "Supervised 12-15 of professional and administrative personnel. Monitored employee work and developed improvement plans.",
          ],
        },
        {
          heading: 'Adjunct Faculty — East West University-Bangladesh, Dhaka (07/2005 to 12/2005)',
          items: [
            "Developed and kindled professional relationships with students to better communicate and enhance instruction.",
            "Worked closely with Dean of the Department to develop and implement Masters curriculum for improved learning and student performance. Scored exams and graded student performance fairly.",
            "Advised students in academic matters to improve successful course completion. Engaged students with insightful and compelling classroom discussion of topics relevant to coursework to boost student learning and retention.",
            "Identified academic strengths and obstacles and developed instructional techniques to accommodate different learning styles.",
            "Evaluated and selected instructional materials and texts to prepare course materials and lesson plans.",
            "Examined and critiqued course material while including instructor-specific policies.",
            "Displayed professional demeanor and served as role model for students.",
            "Collaborated with faculty members in designing Masters curriculum for departmental courses.",
            "Developed creative and effective teaching methods for course content to capture student's attention.",
            "Taught classes in governance, contribution of development sectors, accountability in healthcare system and public health.",
            "Completed classroom planning by creating and preparing exams, classroom discussions and lectures.",
            "Used registers to keep accurate records of students' attendance and grades.",
            "Designed and delivered class instruction to meet course competencies.",
          ],
        },
      ],
      'Teaching and Academic Contributions': '',
      'Publications & Research': [
        {
          items: [
            "SHARING BEST PRACTICES Addressing RH, Population and Development Challenges; UNFPA and PPD, 2020.",
            "Co-author, ICPD and SDGs through South-South Cooperation beyond COVID-19; UNFPA and PPD, 2020.",
            "Co-author, South-South Cooperation in Catalyzing Achievement of ICPD and SDGs 2030 Agenda, UNFPA and PPD, 2019.",
            "Co-author, Ageing, Learning from the Global South, PPD, 2017.",
            "Co-author, Population Trends and Policy Options in Selected Developing Countries, PPD, 2012.",
            "Co-author, ICPD/15: Bangladesh' Experiences Progress and Challenges, UNFPA Bangladesh, 2009.",
            "Co-author, The State of Health in Bangladesh 2007-Health Workforce in Bangladesh, Who Constitutes the Health care System? Bangladesh Health Workforce, Dhaka, 2008.",
            "Co-author, Sanitation in India: Status and Challenges, Monograph, No. 11, Bangalore: Institute for Social and Economic Change, 2006.",
            "Social Capital in Making Decentralized Governance Effective: A Study in West Bengal. Indian Social Science Review Vol. 7 (1): 133-160, 2005.",
            "Decentralized Governance, Transparency and Accountability: Empirical Evidence from West Bengal. Journal of Grassroots Governance, Vol. II(1): 77-92, 2004.",
            "Social Capital in Making Decentralized Governance Effective: A Study in West Bengal. Working Paper, No. 141. Bangalore: Institute for Social and Economic Change, 2004.",
            "Decentralized Governance, Transparency and Accountability: Empirical Evidence from West Bengal. Working Paper, No. 144. Bangalore: Institute for Social and Economic Change, 2004.",
            "Co-author, Decentralized Governance and People's Participation: Lesson from West Bengal. Working Paper, No. 131. Bangalore: Institute for Social and Economic Change, 2003.",
            "Roots of Development. Economic and Political Weekly. Vol. XXXVIII(12-3), 2003.",
            "Co-author, Decentralized Governance: A Review of the Idea and Issues. Working Paper No. 108. Bangalore: Institute for Social and Economic Change, 2002.",
            "Decentralized Governance: A Review of the Idea and Issues, South Asian Journal of Socio-Political Studies. Vol. 5 No. 1: 45-51, 2004.",
            "Co-author, Restructuring Local Environment Management for Better Health Outcomes: Towards a District Level Pilot in Karnataka, Volume 1 Population-Based Preventive Public Health Services: An Overview, Bangalore: Institute for Social and Economic Change, March 2005.",
            "Co-author, Restructuring Local Environment Management for Better Health Outcomes: Towards a District Level Pilot in Karnataka, Volume 2 Organization and Delivery of Population-Based Preventive Public Health Services in Rural Karnataka, Bangalore: Institute for Social and Economic Change, March 2005.",
            "Co-author, Restructuring Local Environment Management for Better Health Outcomes: Towards a District Level Pilot in Karnataka, Volume 3 Organization and Delivery of Population-Based Preventive Public Health Services in Urban Karnataka, Bangalore: Institute for Social and Economic Change, March 2005.",
            "Co-author, Restructuring Local Environment Management for Better Health Outcomes: Towards a District Level Pilot in Karnataka, Volume 4 Operational Issues, Bangalore: Institute for Social and Economic Change, March 2005.",
          ],
        },
      ],
      'Seminars/Workshops Participation': '',
      'Contact': [
        {
          lines: [
            "Md. Nazrul Islam, PhD",
            "Adjunct Faculty",
            "Department of Applied Health and Nutrition",
            "RTM Al-Kabir Technical University (RTM-AKTU)",
            "Campus: TB Gate, Tultikor, Sylhet-3100, Bangladesh",
            "Email: <a href=\"mailto:naameera2008@gmail.com\">naameera2008@gmail.com</a>",
            "Contact: <a href=\"tel:+8801791000571\">+8801791000571</a>",
            "Website: <a href=\"https://www.rtm-aktu.ac.bd\" target=\"_blank\" rel=\"noopener\">www.rtm-aktu.ac.bd</a>",
          ],
        },
      ],
    },
  },
  'md-ruhul-amin': {
    name: 'Md. Ruhul Amin',
    role: 'Lecturer',
    department: 'Department of Electrical and Electronic Engineering (EEE)',
    photo: '../../images/faculty-members/md-ruhul-amin.png',
    address: [
      'RTM Al-Kabir Technical University (RTM-AKTU)',
      'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
    ],
    phone: '01616102587',
    phoneHref: 'tel:+8801616102587',
    email: 'ruhul@rtm-aktu.ac.bd',
    bio: [
      "Md. Ruhul Amin is a Lecturer in the Department of Electrical and Electronic Engineering at RTM Al-Kabir Technical University (RTM-AKTU), Sylhet, Bangladesh. His academic and professional activities reflect a strong commitment to teaching, research, and innovation in emerging areas of electrical and electronic engineering. Mr. Amin is proficient in simulation and analytical tools such as CST Microwave Studio, ANSYS, MATLAB/Simulink, LTSpice, and OriginPro, along with programming languages including Python, MATLAB, and C. His work integrates with advanced research and innovation in photonics, sensing technologies, and sustainable energy systems through collaborative and interdisciplinary approaches.",
      "He is currently pursuing his M.Sc. in Electrical and Electronic Engineering at Shahjalal University of Science and Technology (SUST), where he previously completed his B.Sc. (Engg.) in the same discipline.",
      "His research interests include photonics, terahertz metamaterials, biosensing devices, wireless power transfer, and energy systems. He is particularly engaged in the design and optimization of multiband terahertz metamaterial absorbers for high-sensitivity biochemical and biomedical sensing applications. He has contributed to several peer-reviewed journals and international conferences.",
      "In addition to research, he is actively involved in interdisciplinary engineering projects, including wireless charging systems for electric vehicles, IoT-based smart energy monitoring, and power electronics applications.",
    ],
    tabs: {
      'Research Interest': [
        {
          items: [
            "THz Sensing",
            "Metamaterials Absorption",
            "Bio-Sensing Device",
            "Photonics",
            "Nonlinear Optics",
            "Microelectronics",
            "Bio Sensor",
          ],
        },
      ],
      'Academic Information': [
        {
          items: [
            "M.Sc. in Electrical and Electronic Engineering, Shahjalal University of Science and Technology (Pursuing).",
            "B.Sc. in Electrical and Electronic Engineering, Shahjalal University of Science and Technology.",
            "Higher Secondary Certificate (H.S.C), 2018, Savar Model College, Savar, Dhaka.",
            "Secondary School Certificate (S.S.C), 2016, Shahorail High School, Singair, Manikganj.",
          ],
        },
      ],
      'Courses Taught': [
        {
          heading: 'Theory',
          items: [
            "Power Electronics",
            "Energy Conversion I",
            "Energy Conversion II",
            "Transmission and Distribution of Electric Power",
            "Renewable Energy",
            "Measurement and Instrumentation",
            "Physics II",
          ],
        },
        {
          heading: 'Laboratory',
          items: [
            "Power Electronics Laboratory",
            "Energy Conversion I Laboratory",
            "Measurement and Instrumentation Laboratory",
            "Engineering Drawing",
          ],
        },
      ],
      'Areas of Expertise': '',
      'Experience': [
        {
          items: [
            "Lecturer, Department of Electrical and Electronic Engineering, RTM-AKTU (Jan. 2025–Present).",
            "Research Assistant, SUST Research Center (Aug. 2024–Present).",
          ],
        },
      ],
      'Teaching and Academic Contributions': '',
      'Publications & Research': [
        {
          heading: 'International Journals',
          items: [
            "Mia, M. M. A., Ahmed, S. S., Amin, M. R., & Ali, M. E. (2025). Highly sensitive Triple-Band Terahertz perfect metamaterial absorber for sensing applications in organic substance. Physica Scripta. <a href=\"https://doi.org/10.1088/1402-4896/adda9c\" target=\"_blank\" rel=\"noopener\">https://doi.org/10.1088/1402-4896/adda9c</a>",
          ],
        },
        {
          heading: 'International Conference',
          items: [
            "Haque, H. R. Shipu, M. E. Ali, J. N. Novera, F. Mayoa, S. S. Ahmed, M. R. Amin, \"A Novel Hybrid Plasmonic Waveguide for Nano-Scale Light Confinement and Long Propagation Range,\" International Conference on Electrical, Computer and Communication Engineering (ECCE 2025), Chattogram, Bangladesh, 13-15 Feb. 2025 (Accepted).",
            "M. M. A. Mia, S. S. Ahmed, M. R. Amin, M. E. Ali, and J. N. Novera, \"Highly Sensitive Multiband Terahertz Meta-Absorber with Concentric Resonators for Enhancing Virological and Biomolecular Sensing,\" Proc. 16th Int. Conf. Comput. Commun. Netw. Technol. (ICCCNT), IIT Indore, India, Jul. 6–11, 2025 (Accepted).",
            "S. H. Sakil, M. A. A. Chy, M. R. Amin, and M. Rasedujjaman, \"Triple-Band I-Shaped Terahertz Metamaterial Perfect Absorber for Cancer Cell Detection,\" International Conference on Quantum Photonics, Artificial Intelligence & Nanotechnology (QPAIN 2025), Rangpur Division, Bangladesh, 23 Jun. 2025 (Accepted).",
            "M. M. A. Mia, S. S. Ahmed, M. R. Amin, M. E. Ali, J. N. Novera, \"Triple-Band Terahertz Metamaterial Ultra-Sensitive Absorber for Multi-Class Cancer Cell Detection,\" International Conference on Quantum Photonics, Artificial Intelligence & Nanotechnology (QPAIN 2025), Rangpur Division, Bangladesh, 24 Jun. 2025 (Accepted).",
          ],
        },
      ],
      'Seminars/Workshops Participation': [
        {
          items: [
            "VLSI Training at ULKASEMI (Nov. 2024 – Dec. 2024).",
            "Industrial Training at TICI on SCADA, DCS, and PLC systems (Aug. 2023 – Sep. 2023).",
            "Multiple technical workshops on robotics and embedded systems at SUST.",
          ],
        },
      ],
      'Contact': [
        {
          lines: [
            "Department of Electrical and Electronic Engineering",
            "RTM Al-Kabir Technical University (RTM-AKTU)",
            "Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh",
            "Email: <a href=\"mailto:ruhul@rtm-aktu.ac.bd\">ruhul@rtm-aktu.ac.bd</a>",
            "Contact: <a href=\"tel:+8801616102587\">+8801616102587</a>",
            "Website: <a href=\"https://www.rtm-aktu.ac.bd\" target=\"_blank\" rel=\"noopener\">www.rtm-aktu.ac.bd</a>",
          ],
        },
      ],
    },
  },
  'mohammad-mahmudul-alam-mia': {
    name: 'Mohammad Mahmudul Alam Mia',
    role: 'Associate Professor and Head',
    department: 'Department of Electrical and Electronic Engineering (EEE)',
    photo: '../../images/faculty-members/mohammad-mahmudul-alam-mia.png',
    address: [
      'RTM Al-Kabir Technical University (RTM-AKTU)',
      'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
    ],
    phone: '01717249414',
    phoneHref: 'tel:+8801717249414',
    email: 'mahmudulalam@rtm-aktu.ac.bd',
    bio: [
      "Mohammad Mahmudul Alam Mia is an Associate Professor and Head of the Department of Electrical and Electronic Engineering (EEE) at RTM Al-Kabir Technical University (RTM-AKTU). In addition, he is also serving as the Proctor and Acting Director of the Center for Research, Training and Management (CRTM) at the university. Prior to joining RTM-AKTU, he worked as an Assistant Professor in the Department of Electronics and Communication Engineering at Sylhet International University (SIU), where he also served as the Assistant Controller of Examinations.",
      "He completed his Bachelor of Science (B.Sc.) in Electronics and Communication Engineering from Khulna University, Bangladesh, and obtained his Master of Science (M.Sc.) in Information and Communications Engineering from the University of Leicester, United Kingdom (UK).",
      "With a strong research background, he has published numerous articles in reputed journals and IEEE flagship conferences. His academic career reflects a blend of teaching excellence, administrative leadership, and active research engagement in advanced communication and photonics technologies.",
    ],
    tabs: {
      'Research Interest': [
        {
          lines: [
            "His research interests focus on Nanophotonics, Nonlinear Optics, Photonic Crystal Fiber, Optical Biosensors, and Optical Fiber Communication. He is particularly interested in developing advanced photonic structures, terahertz metamaterials, and machine learning-assisted optical sensing techniques for biomedical and industrial applications.",
          ],
        },
        {
          heading: 'Academic and Research Interests',
          items: [
            "Management Studies",
            "Business Strategy",
            "Organizational Development",
            "Applied Research",
            "Higher Education Pedagogy",
          ],
        },
      ],
      'Academic Information': [
        {
          items: [
            "Masters: M.Sc. in Information and Communications Engineering, University of Leicester, United Kingdom, 2011.",
            "Graduation: B.Sc. in Electronics and Communication Engineering, Khulna University, 2009.",
            "HSC (Science), Comilla Victoria Govt. College, Comilla, 2003.",
            "SSC (Science), Mudaforgonj A. N. High School, Comilla, 2001.",
          ],
        },
      ],
      'Courses Taught': "Delivered undergraduate-level instruction in Electrical and Electronic Engineering, integrating theoretical concepts with practical and analytical approaches. Courses taught include Electrical Circuits I, Electronics I, Electronic Devices and Circuits, Linear System Analysis, Digital Electronics and Pulse Techniques, Communication Systems, Cellular Communication, Digital Communication, Optical Fiber Communication, Satellite Communication, Communication Engineering, and Digital Signal Processing. Developed course materials, lesson plans, and assessment strategies to enhance student learning. Guided students in analytical problem-solving, system design, and simulation-based learning. Emphasized industry-relevant knowledge, modern communication technologies, and research-oriented education to prepare students for professional and academic careers.",
      'Areas of Expertise': [
        {
          items: [
            "Business Administration",
            "Teaching",
            "Research",
            "Academic Development",
          ],
        },
        {
          heading: 'Professional Engagement',
          lines: [
            "Contributes to academic and professional communities through research initiatives, collaborative projects, and institutional development activities.",
          ],
        },
      ],
      'Experience': [
        {
          heading: 'Professional Activities',
          items: [
            "Associate Professor and Head, RTM Al-Kabir Technical University, 26/02/2022 to till yet.",
            "Assistant Professor, Sylhet International University, 24/02/2021 to 24/02/2022.",
            "Lecturer, Sylhet International University, 01/11/2012 to 23/02/2021.",
          ],
        },
        {
          heading: 'Administrative Experiences',
          items: [
            "Working as Assistant Proctor at RTM Al-Kabir Technical University since 28th February 2022 to till yet.",
            "Worked as Assistant Controller of Examinations at Sylhet International University since 28/05/2014 to 24/02/2022.",
          ],
        },
      ],
      'Teaching and Academic Contributions': "Actively engaged in curriculum development, student mentoring, and innovative teaching methodologies that enhance learning outcomes and academic performance.",
      'Publications & Research': [
        {
          items: [
            "S. K. Biswas, M. Ifaz Ahmad Isti, M. M. Alam Mia, H. Talukder and K. Chakrabarti, \"Numerical Analysis of an Ultra-High Negative Dispersion Compensating Micro-Structured Optical Fiber With Air-holes Arranged in Octagonal Structure,\" 2021 Devices for Integrated Circuit (DevIC), 2021, pp. 84-89. (indexed in IEEE Xplore).",
            "J. Akter, M. N. Uddin, M. Hasan, B. K. Biswas, M. M. A. Mia and S. K. Biswas, \"Analysis of Microstructured Photonic Crystal Fiber: An Improved Design,\" 2020 11th International Conference on Computing, Communication and Networking Technologies (ICCCNT), 2020, pp. 1-4. (indexed in IEEE Xplore).",
            "M. M. A. Mia, D. H. Himel and S. K. Biswas, \"Numerical Study of an Octagonal Photonic Crystal Fiber: An Improved Design,\" 2020 11th International Conference on Computing, Communication and Networking Technologies (ICCCNT), 2020, pp. 1-4. (indexed in IEEE Xplore).",
            "M. J. Hasan, M. F. Wahid, M. S. Alom and M. M. A. Mia, \"A New State of Art Deep Learning Approach for Bangla Handwritten Digit Recognition using SVM Classifier,\" 2020 11th International Conference on Computing, Communication and Networking Technologies (ICCCNT), 2020, pp. 1-6. (indexed in IEEE Xplore).",
            "M. M. A. Mia, M. A. Islam, M. S. Miah, B. Bhowmik, S. M. Mahir and S. K. Biswas, \"Highly Birefringent Dispersion Compensating Index Guiding Square Photonic Crystal Fiber with Large Nonlinearity for Fiber Optic Transmission System,\" 2020 International Conference on Computer, Electrical & Communication Engineering (ICCECE), 2020, pp. 1-5. (indexed in IEEE Xplore).",
            "Shovasis Kumar Biswas, Tasnim Ahmed, S. M. Rakibul Islam, Md. Rubayet Islam, Mohammad Mahmudul Alam Mia, Md. Ferdous Wahid, \"Highly Nonlinear Dispersion Compensating Octagonal Photonic Crystal Fiber: Design and Analysis,\" In 2019 International Conference on Electrical, Computer and Communication Engineering (ECCE), pp. 1-5. IEEE, 2019 (indexed in IEEE Xplore).",
            "S. K. Biswas, S. M. R. Islam, M. R. Islam, M.M. A. Mia, S. Sayem, F. Ahmed, \"Design of an Ultrahigh Birefringence Photonic Crystal Fiber with Large Nonlinearity Using All Circular Air Holes for a Fiber-Optic Transmission System,\" Photonics 5(26), (2018) (Q2 Journal).",
            "S. M. Rakibul Islam, Md. Monirul Islam, Md. Naz Ahbabur Rahman, Mohammad Mahmudul Alam Mia, Md Shahrier Hakim, and S. K. Biswas, \"Design of Hexagonal Photonic Crystal Fiber with Ultra-High Birefringent and Large Negative Dispersion Coefficient for the Application of Broadband Fiber,\" International Journal of Engineering Science Technologies, 2(1), 9-16 (2017) [Cited in Index Copernicus, and Google Scholar].",
            "M. I. Hasan, M. A. Awsaf, M. N. A. Rahman, M. I. H. Abdullah, M. M. A. Mia, & S. K. Biswas, \"Proposal for Ultra-high Birefringent Photonic Crystal Fiber with Ultra-low Confinement Loss, Large Negative Dispersion and Large Nonlinearity,\" Asian Journal of Applied Science and Technology (AJAST), 1(8), 152-156 (2017) [Cited in Researchgate, and Google Scholar].",
            "Md. Iqbal Hossain Abdullah, Md. Ishtiaq Hasan, Md. Nafiz Ahbabur Rahman, Md. Aseer Awsaf, Mohammad Mahmudul Alam Mia, S. K. Biswas, \"Ultra-high Birefringent Photonic Crystal Fiber for Sensing Applications,\" Asia Pacific Journal of Engineering Science and Technology, 3(3), 121-128 (2017) [Cited in Researchgate, and Google Scholar].",
            "Md Rubayet Islam, SR Islam, Md Tawhid Islam Opu, MMA Mia, SK Biswas, \"Ultra high birefringent hexagonal photonic crystal fibers with ultra low confinement loss employing different sizes of elliptical air holes in the core,\" Asia Pacific Journal of Engineering Science and Technology, 3(4), 141-150 (2017) [Cited in Researchgate, and Google Scholar].",
            "S. K. Biswas, M. I. Hasan, M. A. Awsaf, M. N. A. Rahman, M. I. H. Abdullah, M. M. A. Mia, \"Design and Analysis of Hexagonal Photonic Crystal Fiber with Ultra-high Birefringent and Large Negative Dispersion Coefficient for the Application of Sensing and Broadband Dispersion Compensating Fiber,\" Asian Journal of Applied Science and Technology (AJAST), 1(8), 147-151 (2017) [Cited in Researchgate, and Google Scholar].",
            "S.K. Biswas, M. M. A. Mia, R. Islam, S. Sinha, \"Design Of A Low Cost Non Electrical Type Baby Incubator For Developing Country,\" International Journal of Scientific & Engineering Research, vol. 7, no. 11, pp. 1148-1153, 2016 [Cited in Researchgate, and Google Scholar].",
            "M.M.A. Mia, S. K. Biswas, M.C. Urmi, A. Siddique, \"An Algorithm For Training Multilayer Perceptron (MLP) For Image Reconstruction Using Neural Network Without Overfitting,\" International Journal of Scientific & Technology Research, 4(2), 271-275 (2015) (Online ISSN: 2277-8616) [Cited in DOAJ, EBSCO, and Google Scholar].",
            "MMA Mia, R Islam, MF Wahid, SK Biswas, \"Image Reconstruction Using Pixel Wise Support Vector Machine (SVM) Classification,\" International Journal of Scientific & Technology Research, 4(2), 232-235 (2015) (Online ISSN: 2277-8616) [Cited in DOAJ, EBSCO, and Google Scholar].",
            "S. K. Biswas, M. M. A. Mia, \"Image Reconstruction Using Multi Layer Perceptron (MLP) And Support Vector Machine (SVM) Classifier And Study Of Classification Accuracy,\" International Journal of Scientific & Technology Research, 4(2), 226-231 (2015) (Online ISSN: 2277-8616) [Cited in DOAJ, EBSCO, and Google Scholar].",
            "S. Ahmed, M. M. A. Mia, S. Acherjee, M. A. A. Ansary, \"More Efficient Use Of Photovoltaic Solar Panel Using Multiple Fixed Directed Mirrors Or Aluminum Foils Instead Of Solar Trackers In Rural Perspective Of Bangladesh,\" International Journal of Scientific & Technology Research, 3(4), 294-298 (2014) (Online ISSN: 2277-8616) [Cited in DOAJ, EBSCO, and Google Scholar].",
          ],
        },
      ],
      'Seminars/Workshops Participation': '',
      'Contact': [
        {
          lines: [
            "Mohammad Mahmudul Alam Mia",
            "Associate Professor and Head",
            "Department of Electrical and Electronic Engineering (EEE)",
            "RTM Al-Kabir Technical University (RTM-AKTU)",
            "Campus: TB Gate, Tultikor, Sylhet Sadar, Bangladesh",
            "Email: <a href=\"mailto:mahmudulalam@rtm-aktu.ac.bd\">mahmudulalam@rtm-aktu.ac.bd</a>",
            "Alternate Email: <a href=\"mailto:mahmud_ece_ku@yahoo.com\">mahmud_ece_ku@yahoo.com</a>",
            "Contact: <a href=\"tel:+8801717249414\">+8801717249414</a>",
            "Website: <a href=\"https://www.rtm-aktu.ac.bd\" target=\"_blank\" rel=\"noopener\">www.rtm-aktu.ac.bd</a>",
          ],
        },
      ],
    },
  },
  'nujhat-sadia-hafiz': {
    name: 'Nujhat Sadia Hafiz',
    role: 'Senior Lecturer',
    department: 'Department of Technology',
    photo: '../../images/faculty-members/nujhat-sadia-hafiz.png',
    address: [
      'RTM Al-Kabir Technical University (RTM-AKTU)',
      'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
    ],
    phone: '01718151905',
    phoneHref: 'tel:+8801718151905',
    email: 'nujhathafiz@rtm-aktu.ac.bd',
    bio: [
      "Nujhat Sadia Hafiz is a dedicated academic and fashion professional currently serving as a Senior Lecturer in the Department of Technology (Fashion Design) at RTM Al-Kabir Technical University (RTM-AKTU). Before entering academia, Nujhat gained valuable industry experience working as an Assistant Designer (Merchandising) at Aman Knittings Ltd., a sister concern of UNIFILL Group, from 2018 to April 2020. She also contributed as a Designer in the R&D Department at FCI Trade International Ltd., where she enhanced her expertise in fashion design, product development, and textile innovation.",
      "She holds a Bachelor of Science (B.Sc.) in Fashion Design and Technology from BGMEA University of Fashion & Technology (BUFT). To further broaden her academic and artistic perspective, she pursued an Associate Degree in Studio Art and Design at Gateway Community College, New Haven, USA.",
      "Her research interests include product development and fashion trend analysis, pattern technology, and textile and eco-dyeing technology. She focuses on innovative and creative approaches to fashion design, integrating modern and historical textile techniques to promote sustainable and culturally enriched design.",
      "Passionate about the transformative power of design, Nujhat Sadia Hafiz continues to inspire students through her teaching while actively contributing to the field of fashion with creativity, vision, and professional excellence.",
    ],
    tabs: {
      'Research Interest': [
        {
          lines: [
            "Her research interests include product development and fashion trend analysis, pattern technology, and textile and eco-dyeing technology. She focuses on innovative and creative approaches to fashion design, integrating modern and historical textile techniques to promote sustainable and culturally enriched design. Her interests also extend to patchwork, mosaic work, craftsmanship, household design, and jewellery design, reflecting a multidisciplinary approach.",
          ],
        },
        {
          heading: 'Academic and Research Interests',
          items: [
            "Management Studies",
            "Business Strategy",
            "Organizational Development",
            "Applied Research",
            "Higher Education Pedagogy",
          ],
        },
      ],
      'Academic Information': [
        {
          items: [
            "Associate's Degree in Studio Art Graphics Design, Gateway Community College, New Haven, CT 06511, USA.",
            "Bachelor of Science in Fashion Design, BUFT (BGMEA University of Fashion & Technology), Dhaka-1230, Bangladesh, December 2009.",
            "Higher Secondary School Certificate, Science Group, Sylhet Govt. Women College, Sylhet, 2004.",
            "Secondary School Certificate, Science Group, Sylhet Govt. Girls High School, Sylhet, 2001.",
          ],
        },
      ],
      'Courses Taught': "Delivered undergraduate-level instruction in Fashion Design and Apparel Technology, integrating theoretical knowledge with hands-on studio practice. Courses include Fashion Art, Color Concepts, Elements of Design, Design Studio, Sustainable Design, Collection Development, Creative Design Analysis, Surface Ornamentation, Aesthetics of Art, Fashion History, E-Fashion and Product Development, Computer-Aided Design (CAD), and Industrial Dyeing & Printing. Developed course materials, lesson plans, and assessments to support student learning. Guided students in creative design, pattern development, and garment construction, while emphasizing industry standards and production practices. Provided academic mentoring, evaluated projects, and supported industrial training. Incorporated digital tools, including MS Office and Adobe Photoshop, Illustrator, and InDesign, to enhance both creative and technical learning outcomes.",
      'Areas of Expertise': [
        {
          items: [
            "Business Administration",
            "Teaching",
            "Research",
            "Academic Development",
          ],
        },
        {
          heading: 'Professional Engagement',
          lines: [
            "Contributes to academic and professional communities through research initiatives, collaborative projects, and institutional development activities.",
          ],
        },
      ],
      'Experience': [
        {
          items: [
            "Assistant Designer (Merchandising), Aman Knittings Ltd. – a sister concern of UNIFILL Group, 2018–April 2020.",
            "Designer, R&D Department (Women & Kids Outerwear), FCI Trade International Ltd., 2015–2017.",
            "Fashion Design Foundation, online certificate course, AIFD – Amethyst Institute of Fashion Design.",
            "Event and Wedding Design/Planner (self-employed), 2008–2014.",
            "Volunteer Teacher, Autism Management Institute, Sylhet, Bangladesh, 2012–2013.",
            "Sketched and designed original clothing for the Bangladesh Apparel and Textile Exposition (BATEXPO), Dec. 2009.",
          ],
        },
        {
          heading: 'Achievements',
          items: [
            "Participated in the group art exhibition “BIJOY,” organized by Power Pac, Fanun Arts & Mahfuz Canvas, in Dec. 2022 at DIAC, Dubai.",
            "Phi Theta Kappa Honor Society Award (May 2015).",
            "Displayed artwork for the Connecticut Undergraduate College Artwork exhibition, an innovative and creative description of her culture and historical background (Dec. 2011).",
          ],
        },
      ],
      'Teaching and Academic Contributions': "Actively engaged in curriculum development, student mentoring, and innovative teaching methodologies that enhance learning outcomes and academic performance.",
      'Publications & Research': '',
      'Seminars/Workshops Participation': '',
      'Contact': [
        {
          lines: [
            "Department of Technology (Fashion Design)",
            "RTM Al-Kabir Technical University (RTM-AKTU)",
            "Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh",
            "Email: <a href=\"mailto:nujhathafiz@rtm-aktu.ac.bd\">nujhathafiz@rtm-aktu.ac.bd</a>",
            "Contact: <a href=\"tel:+8801718151905\">+8801718151905</a>",
            "Website: <a href=\"https://www.rtm-aktu.ac.bd\" target=\"_blank\" rel=\"noopener\">www.rtm-aktu.ac.bd</a>",
          ],
        },
      ],
    },
  },
  'nusrat-rikza': {
    name: 'Nusrat Rikza, Ph.D',
    role: 'Associate Professor and Head',
    department: 'Department of Education',
    photo: '../../images/faculty-members/nusrat-rikza.png',
    address: [
      'RTM Al-Kabir Technical University (RTM-AKTU)',
      'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
    ],
    phone: '01673635510',
    phoneHref: 'tel:+8801673635510',
    email: 'rikza@rtm-aktu.ac.bd',
    bio: [
      "Dr. Nusrat Rikza is an academic professional at RTM Al-Kabir Technical University (RTM-AKTU) with demonstrated commitment to excellence in teaching, research, and academic leadership. She is currently serving as an Associate Professor and Head of the Department of Education at RTM Al-Kabir Technical University (RTM-AKTU). Prior to this role, she worked as an Assistant Professor and Lecturer in the Department of English at North East University Bangladesh, Sylhet.",
      "With extensive experience in undergraduate and graduate teaching, research supervision, and academic administration, she has also contributed to curriculum development following Outcome-Based Education (OBE) guidelines.",
      "Dr. Rikza completed her PhD in English from Islamic University, Kushtia. She also obtained her Bachelor of Arts (BA) and Master of Arts (MA) degree from the prestigious Shahjalal University of Science & Technology (SUST). Her research and publications mainly focus on postcolonial literature, Marxist criticism, and socio-economic issues reflected in literary texts. With a unique blend of academic leadership, professional experience, and creative innovation, she continues to make meaningful contributions to the advancement of education and academic development.",
    ],
    tabs: {
      'Research Interest': [
        {
          heading: 'Academic and Research Interests',
          items: [
            "Management Studies",
            "Business Strategy",
            "Organizational Development",
            "Applied Research",
            "Higher Education Pedagogy",
          ],
        },
      ],
      'Academic Information': [
        {
          items: [
            "2017 – Present, PhD Student (Thesis Part), Department of English, Islamic University, Khustia, Bangladesh.",
            "2005 - 2006 MA (Masters) in English, Department of English, Shahjalal University of Science and Technology, Sylhet, Bangladesh.",
            "2001 - 2005 BA (Hons.) in English, Department of English, Shahjalal University of Science and Technology, Sylhet, Bangladesh.",
            "2001 Higher Secondary Certificate (HSC), Humanities group, Sylhet Govt. Women's College, Sylhet, Bangladesh.",
            "1999 Secondary School Certificate (SSC), Humanities group, Hazrat Shahporan High School, Sylhet, Bangladesh.",
          ],
        },
      ],
      'Courses Taught': [
        {
          lines: [
            "Dr. Nusrat Rikza has taught a wide range of courses that integrate literary scholarship, critical theory, and advanced English language proficiency. Her teaching emphasizes analytical thinking, rhetorical awareness, and academic communication skills. The courses she has taught include:",
          ],
        },
        {
          items: [
            "Postcolonial Literature – examining colonial and postcolonial narratives, identity, power, and resistance in global literary texts.",
            "Literary Theory and Criticism – introducing key theoretical frameworks and critical approaches used in modern literary studies.",
            "South Asian Literature – studying the cultural, historical, and political contexts shaping literary works from South Asia.",
            "Research Methodology in Literary Studies – guiding students in academic research, scholarly writing, and methodological approaches to literary analysis.",
            "Academic Writing – developing structured argumentation, scholarly style, and effective academic expression in English.",
            "Discourse Analysis and Cultural Studies – analyzing language, ideology, and cultural representation in texts and social contexts.",
            "English Language and Rhetorical Communication – focusing on persuasive writing, rhetorical strategies, and effective communication in academic and professional settings.",
          ],
        },
      ],
      'Areas of Expertise': [
        {
          items: [
            "Business Administration",
            "Teaching",
            "Research",
            "Academic Development",
          ],
        },
        {
          heading: 'Professional Engagement',
          lines: [
            "Contributes to academic and professional communities through research initiatives, collaborative projects, and institutional development activities.",
          ],
        },
      ],
      'Experience': [
        {
          items: [
            "Assistant Professor [13/2022 – continue], Dept. of English, RTM Al-Kabir Technical University.",
            "Assistant Professor [March 2016 – January 2022], Department of English, North East University Bangladesh, Sylhet.",
            "Lecturer [March 2013 – March 2016], Department of English, North East University Bangladesh, Sylhet.",
            "Convener [July 2018 – January 2022], Oppression against Women (Complaint Committee), North East University Bangladesh.",
            "Assistant Proctor [September 2013 – November 2015], North East University Bangladesh.",
            "Advisor [April 2013 – May 2018], NEUB Debating Society, North East University Bangladesh.",
            "Advisor [April 2018 – January 2022], NEUB Photography Club, North East University Bangladesh.",
            "Co-Advisor [January 2016 – January 2022], NEUB English Council, North East University Bangladesh.",
            "Judge, 2019, English Olympiad, SUST.",
          ],
        },
      ],
      'Teaching and Academic Contributions': '',
      'Publications & Research': [
        {
          lines: [
            "PhD Title: Class Struggle and Socio-Political Evils in Anand's Novels: A Marxist Study",
          ],
        },
        {
          items: [
            "Article published in NEUB Journal, North East University Bangladesh, 2017. Title: \"Identity as a means of Social Alienation in Mulk Raj Anand's Untouchable.\" Volume 2, Issue 1; ISSN 2415-1742.",
            "Article published in Rabindra Journal, World Poet Rabindranath Institute of Agricultural Technology, Naogaon, 2016. Title: \"A Marxist Study of Mulk Raj Anand's Coolie.\" Volume 42, Issue 1; ISSN 2477-1714.",
            "Article published in International Journal of Humanities and Social Science Invention (IJHSSI), India, 2016. Title: \"Homicides and Suicide are the effect of the Embryonic Psychology of the Protagonist in Things Fall Apart.\" Volume 5, Issue 1; ISSN: 2219-7714 (print), 2319-7722 (online).",
            "Article published in International Journal of Humanities and Social Science Invention (IJHSSI), India, 2015. Title: \"Dr. Aziz is the Manifestation of E.M. Forster's Prejudice towards the British.\" Volume 4, Issue 9; ISSN: 2219-7714 (print), 2319-7722 (online).",
          ],
        },
      ],
      'Seminars/Workshops Participation': [
        {
          items: [
            "Paper presenter Award in International Interdisciplinary Legal Studies Research Conference, University of Oxford, UK, March 2018.",
            "Paper presenter Award in International Research Conference in NSU \"The River: Flows of Innovation and Exchange in the Global(i)zed English World,\" North South University, Bangladesh, 2016.",
            "Workshop on \"Syllabus and Curriculum: Bloom's Taxonomy.\"",
            "Training Workshop on \"Quality Assurance & Accreditation.\"",
          ],
        },
      ],
      'Contact': [
        {
          lines: [
            "Nusrat Rikza, Ph.D",
            "Associate Professor and Head",
            "Department of Education",
            "RTM Al-Kabir Technical University (RTM-AKTU)",
            "Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh",
            "Email: <a href=\"mailto:rikza@rtm-aktu.ac.bd\">rikza@rtm-aktu.ac.bd</a>",
            "Contact: <a href=\"tel:+8801673635510\">+8801673635510</a>",
            "Website: <a href=\"https://www.rtm-aktu.ac.bd\" target=\"_blank\" rel=\"noopener\">www.rtm-aktu.ac.bd</a>",
          ],
        },
      ],
    },
  },
  'rasa-iffat-helmi': {
    name: 'Rasa Iffat Helmi',
    role: 'Assistant Professor',
    department: 'Department of Computer Science and Engineering (CSE)',
    photo: '../../images/faculty-members/rasa-iffat-helmi.png',
    address: [
      'RTM Al-Kabir Technical University (RTM-AKTU)',
      'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
    ],
    phone: '01537331691',
    phoneHref: 'tel:+8801537331691',
    email: 'rasa@rtm-aktu.ac.bd',
    bio: [
      "Rasa Iffat Helmi serves as an Assistant Professor in the Department of Computer Science & Engineering (CSE) at RTM Al-Kabir Technical University (RTM-AKTU). Prior to her current role, she was a Lecturer in the Department of Computer Science & Engineering at the University of Engineering & Management (UEM); earlier, as a Teaching Assistant at the Institute of Engineering & Management (IEM), Kolkata, India. She also worked as a Research Assistant at Duksung Women's University, Seoul, South Korea. She secured 2nd rank as the coach of Team Dreaders, which received the Best Popular Team award at the ICPC Asia Dhaka Regional Competition 2023, and was honored with the Best New Faculty Member Award in 2020 from the IEM-UEM Group. Her earlier accomplishments include becoming the 1st Runner-Up in the ACM-ICPC International Programming Contest in 2018. In addition, she has actively contributed as a workshop conductor, leading a three-day remote workshop on Omnet++ in April 2025 at Techno India University and a five-day workshop on Graphics Design in 2023 at RTM Al-Kabir Technical University, thereby reinforcing her commitment to academic excellence and professional development.",
      "Rasa holds a Master of Technology in Computer Science and Engineering from the Maulana Abul Kalam Azad University of Technology (MAKAUT), West Bengal, India.",
      "Her research specializes in computer networks, particularly ad hoc networks, wireless communication systems, and VANET. She is the primary author of five SCOPUS-indexed international journal publications. She has taken part in several international conferences, seminars, and training programs organized by BAC, WIPO, NITTR, Springer, CDAC, the Computer Society of India, CodeChef, and other professional bodies. She also served as a reviewer for the UEM Conference in 2019.",
    ],
    tabs: {
      'Research Interest': [
        {
          lines: [
            "Research interests are broad and encompass network measurement, the design of new network architectures and network protocols, the design and implementation of networked applications and systems, and network performance analysis. Application domains of interest range from data communication to ad-hoc network to peer-to-peer systems.",
          ],
        },
      ],
      'Academic Information': [
        {
          items: [
            "Master of Technology: Maulana Abul Kalam Azad University of Technology, West Bengal, India.",
            "Bachelor in Engineering: Metropolitan University, Sylhet, Bangladesh.",
            "Higher Secondary School Certificate (HSC): Sylhet Govt. Women's College, Sylhet, Bangladesh.",
            "Secondary School Certificate (SSC): Blue Bird School & College, Sylhet, Bangladesh.",
          ],
        },
      ],
      'Courses Taught': [
        {
          items: [
            "Advanced Engineering Mathematics",
            "Advanced Operating System",
            "Advanced Computer Architecture",
            "Advanced Algorithms",
            "Computer Graphics & Multimedia",
            "Advanced Database Management System",
            "Advanced Computer Network & Security",
            "Theory of Computation",
            "Soft Computing",
            "Image Processing",
            "Project Management & Entrepreneurship",
            "Compiler Construction",
          ],
        },
      ],
      'Areas of Expertise': '',
      'Experience': [
        {
          items: [
            "Lecturer, RTM Al-Kabir Technical University, August 01, 2022 to Present.",
            "Teaching Assistant, Institute of Engineering & Management, August 01, 2018 to Dec 30, 2021.",
            "Research Assistant, Harvey E. Schmidt (Duksung Women's University), September 01, 2014 to July 31, 2018.",
          ],
        },
      ],
      'Teaching and Academic Contributions': '',
      'Publications & Research': [
        {
          heading: 'Research Areas',
          items: [
            "Vehicular Ad-hoc Network (Parameters of VANET).",
            "Mobile Communication (Wireless Communication).",
          ],
        },
        {
          heading: 'Publications',
          items: [
            "\"Analysis and Improvement of Performance Criteria in Vehicular Communication,\" International Journal of Scientific & Engineering Research, Volume 13, Issue 5, May 2022, Pp: 656-663, ISSN 2229-5518.",
            "\"Performance Analysis and Improvement of Performance Criteria in Mobile Communication,\" International Journal of Scientific & Engineering Research, Volume 6, Issue 1, January 2015, Pp: 156-163, ISSN 2229-5518.",
          ],
        },
      ],
      'Seminars/Workshops Participation': [
        {
          items: [
            "International Conference on Data, Analytics, Visualization: Uses and Abuses – 2020.",
            "International Conference on Networking – IEMCON UENCON 2019.",
            "Workshop on Machine and Deep Learning with Python – 2019.",
            "International Conference on Artificial Intelligence – GLOBAL AI CONGRESS 2019.",
            "International Conference on Emerging Technology in Modelling and Graphics – 2018.",
            "Workshop on Image Processing using MATLAB – IEMGRAPH 2018.",
          ],
        },
      ],
      'Contact': [
        {
          lines: [
            "Rasa Iffat Helmi",
            "Assistant Professor",
            "Department of Computer Science and Engineering (CSE)",
            "RTM Al-Kabir Technical University (RTM-AKTU)",
            "Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh",
            "Email: <a href=\"mailto:rasa@rtm-aktu.ac.bd\">rasa@rtm-aktu.ac.bd</a>",
            "Contact: <a href=\"tel:+8801537331691\">+8801537331691</a>",
            "Website: <a href=\"https://www.rtm-aktu.ac.bd\" target=\"_blank\" rel=\"noopener\">www.rtm-aktu.ac.bd</a>",
          ],
        },
      ],
    },
  },
  'sayed-shifat-ahmed': {
    name: 'Sayed Shifat Ahmed',
    role: 'Lecturer',
    department: 'Department of Electrical and Electronic Engineering (EEE)',
    photo: '../../images/faculty-members/sayed-shifat-ahmed.png',
    address: [
      'RTM Al-Kabir Technical University (RTM-AKTU)',
      'Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh',
    ],
    phone: '01790443944',
    phoneHref: 'tel:+8801790443944',
    email: 'shifat@rtm-aktu.ac.bd',
    bio: [
      "Sayed Shifat Ahmed is an academic professional at RTM Al-Kabir Technical University (RTM-AKTU) with demonstrated commitment to excellence in teaching and research. Currently he holds the position of Lecturer in the Department of Electrical and Electronic Engineering at RTM Al-Kabir Technical University (RTM-AKTU). During his academic journey Mr. Sayed Shifat Ahmed has gained extensive project and research experience with several publications in reputable international conferences and journals. He has a special interest in teaching and conducting research, and also an active member of the IEEE Antennas and Propagation Society (AP-S), IEEE Women in Engineering (WIE) and IEEE Young Professionals.",
      "He completed his M.Sc. in Electrical and Electronic Engineering from Rajshahi University of Engineering and Technology (RUET). Earlier, he earned his Bachelor of Science degree from Pabna University of Science and Technology (PUST) and achieved 1st class 1st position in the department of Electrical, Electronic and Communication Engineering and also nominated as the \"Dean's Award 2024\".",
      "His core area of research is Microwave Technology and Microcontroller-based embedded systems. He has a strong ability to generate a wide range of intriguing ideas to address challenges and is capable of putting his ideas into reality individually or in a team. His research interests also includes biomedical engineering, photonic metamaterial absorbers, microcontroller-based embedded systems, and Internet of Things (IoT) technologies.",
    ],
    tabs: {
      'Research Interest': [
        {
          items: [
            "Antenna design & wave propagation",
            "Biomedical engineering",
            "Wireless communication",
            "Photonics",
            "THz Meta-absorber",
            "Microcontroller & IoT embedded applications",
          ],
        },
      ],
      'Academic Information': [
        {
          items: [
            "Master of Science in Electrical and Electronic Engineering, Ongoing, Rajshahi University of Engineering and Technology, Rajshahi.",
            "Bachelor of Science in Electrical, Electronic and Communication Engineering, 2020, Pabna University of Science and Technology, Pabna (1st class 1st position with Dean's Award).",
            "Higher Secondary School Certificate, Science, 2016, Rajshahi Govt. City College, Rajshahi.",
            "Secondary School Certificate, Science, 2014, Shiroil Govt. High School, Rajshahi.",
          ],
        },
      ],
      'Courses Taught': [
        {
          items: [
            "Physics",
            "Electronics I",
            "Electronics II",
            "Electronic Devices and Circuits",
            "Power Plant Engineering",
            "Control Systems",
            "Continuous Signals and Linear Systems",
            "Telecommunication Engineering",
            "Electromagnetic Fields and Waves",
          ],
        },
      ],
      'Areas of Expertise': '',
      'Experience': [
        {
          items: [
            "Lecturer, Department of EEE, RTM Al-Kabir Technical University, Sylhet, from 1st July 2024 to till now.",
          ],
        },
      ],
      'Teaching and Academic Contributions': '',
      'Publications & Research': [
        {
          heading: 'International Journal',
          ordered: true,
          items: [
            "M. M. A. Mia, S. S. Ahmed, Md. R. Amin, and Md. E. Ali, \"Triple-Band Terahertz Metamaterial Absorber for Label-Free Detection of Industrial Contaminants with Machine Learning Driven Technique,\" Optical and Quantum Electronics. (In review)",
            "M. M. A. Mia, Md. R. Amin, S. S. Ahmed and Md. E. Ali, \"Machine Learning Driven Optimization of a Triple-Band Terahertz Metamaterial Perfect Absorber for Biomedical Applications and Biomarker Detection,\" Advanced Theory and Simulations. (In review)",
            "S.S. Ahmed, L.C. Paul, T. Rani, S. Gupta, M.A. Haque, S. Arefin, J. Rai, A. Hamdan, \"Wideband Compact MIMO Antenna with High Isolation for WiFi-5/6 GHz, WLAN, C-Band, and IoT Applications,\" Nature, Scientific Reports (Accepted)",
            "M. M. A. Mia, S. S. Ahmed, Md. R. Amin, and Md. E. Ali, \"Highly Sensitive Triple-Band Terahertz Perfect Metamaterial Absorber for Sensing Applications in Organic Substance,\" Physica Scripta, May 2025, doi: 10.1088/1402-4896/adda9c.",
            "L.C. Paul, S.S. Ahmed, T. Rani, M.A. Haque, T.K. Roy, M.N. Hossain and M.A. Hossain, \"A Smart Medicine Reminder Kit with Mobile Phone Calls and Some Health Monitoring Features for Senior Citizens,\" Heliyon, vol. 10, no. 4, p. e26308, Feb. 2024, impact factor: 4.00, doi: 10.1016/j.heliyon.2024.e26308.",
          ],
        },
        {
          heading: 'International Conference',
          ordered: true,
          items: [
            "L.C. Paul, S.S. Ahmed, T. Rani, S.A. Shezan, M.A. Haque and A.H Alenezi, \"Miniaturized Triple-Wideband Double-Overlapped e-Shaped Antenna with Parasitic Elements for High-Speed THz Wireless Indoor Communications,\" 13th International Conference on Electrical and Electronics Engineering (ICEEE 2026), Antalya, Turkey. (In review)",
            "S.S. Ahmed, M.M.A. Mia, S.M.T. Ahmed, M.M. Hassan, M.S. Hossain, M.A.H. Rafi, \"Dual-Band Terahertz Metamaterial Absorber with Near-Unity Absorption for Explosive Identification,\" 6th IEEE International Conference on Telecommunications and Photonics (ICTP), BUET, Dhaka, Bangladesh. (Presented)",
            "S.S. Ahmed, T. Rani, L.C. Paul, M.S. Pervez, A.Z. Abedin, A.K. Sarker, \"A Miniaturized Low-SAR Antenna for Breast Tumor Diagnosis,\" 6th IEEE International Conference on Telecommunications and Photonics (ICTP), BUET, Dhaka, Bangladesh. (Presented)",
            "S.M.T. Ahmed, S.S. Ahmed, M. A. Hossain, M. M. Hassan, M.S. Hossain, S. Tabassum, \"A Compact High Gain Dual Band Square Slotted Octagonal Patch Antenna for X, Ku and Upper 5G Bands,\" 6th International Conference on Electrical Information and Communication Technology (EICT), KUET, Khulna-9203, Bangladesh. (Presented)",
            "S.S. Ahmed, S.M.T. Ahmed, M. A. Hossain, M. M. Hassan, M.S. Hossain, S. Tabassum, \"An Efficient Miniaturized Tri-band THz Antenna for Future 6G Systems and Beyond,\" 11th IEEE International Women in Engineering Conference on Electrical and Computer Engineering 2025 (WIECON-ECE), Cox's Bazar, Bangladesh. (Presented)",
            "S.S. Ahmed, I.H. Sayem, M.T.A. Juwel, S. Ferdaus, M.A.H. Siam, S. Rahman, M.R. Amin, \"AgriCall: An IoT-Integrated GSM-Based Irrigation Control System for Sustainable Agriculture,\" 2nd Undergraduate Conference on Intelligent Computing and Systems (UCICS), Varendra University, Rajshahi, Bangladesh. (Presented)",
            "S.S. Ahmed, S.M.T. Ahmed, M. A. Hossain, M. M. Hassan, M.S. Hossain, S. Tabassum, \"A Novel Modified Triangular Shaped Microstrip Patch Antenna for C-band Applications in Wireless and Satellite Communication,\" IEEE International Conference on Signal Processing, Information, Communication and Systems 2025 (SPICSCON), Rajshahi University, Rajshahi, Bangladesh. (Presented)",
            "M.N. Hossain, S.S. Ahmed, M.S. Hossain, T. Shimamura, \"Design and Performance Analysis of Slotted Patch Antenna for Sub-6 GHz 5G Communications,\" IEEE International Conference on Signal Processing, Information, Communication and Systems 2025 (SPICSCON), Rajshahi University, Rajshahi, Bangladesh. (Presented)",
            "M. M. A. Mia, S. S. Ahmed, Md. R. Amin, and Md. E. Ali, \"Highly Sensitive Multiband Terahertz Meta-Absorber with Concentric Resonators for Enhancing Virological and Biomolecular Sensing,\" 16th International IEEE Conference on Computing, Communication and Networking Technologies (ICCCNT), Indore, Madhya Pradesh, India. (Presented)",
            "L.C. Paul, N. Rashid, T. Rani, M.A. Haque, S.S. Ahmed and S. Khatun, \"A Dual-band 10-element Antenna with Good Gain and Efficiency for ISM and Industrial Automation Applications,\" 16th International IEEE Conference on Computing, Communication and Networking Technologies (ICCCNT), Indore, Madhya Pradesh, India. (Presented)",
            "M. M. A. Mia, S. S. Ahmed, M. R. Amin, M. E. Ali and J. N. Novera, \"Triple-Band Terahertz Metamaterial Ultra-Sensitive Absorber for Multi-Class Cancer Cell Detection,\" 2025 International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN), Rangpur, Bangladesh, 2025, pp. 1-6, doi: 10.1109/QPAIN66474.2025.11172193.",
            "M. R. Biswas, T. Rani, L. C. Paul, S. S. Ahmed, M. A. Haque and P. M. Ghosh, \"IoT and Mobile App-Based Real-Time Remote E-Health Care System for Rural Communities in Bangladesh,\" 2025 International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN), Rangpur, Bangladesh, 2025, pp. 1-6, doi: 10.1109/QPAIN66474.2025.11171985.",
            "M. A. Hossain, L. C. Paul, T. Rani, S. S. Ahmed, M. A. Haque and J. K. Rai, \"IoT-Based Smart Waste Management System Using NodeMCU and Cloud Computing: A Case Study at PUST,\" 2025 International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN), Rangpur, Bangladesh, 2025, pp. 1-6, doi: 10.1109/QPAIN66474.2025.11171905.",
            "M. H. Islam, T. Rani, L. C. Paul, S. S. Ahmed, M. A. Haque and M. S. Hosain, \"An IoT-Based Smart Adaptive Highway Management System for Sound Pollution Reduction and Traffic Control,\" 2025 International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN), Rangpur, Bangladesh, 2025, pp. 1-6, doi: 10.1109/QPAIN66474.2025.11172235.",
            "L. C. Paul, S. S. Ahmed, T. Rani, S. Arefin, M.A. Haque, A. Hamdan, \"A Super Wideband Miniaturized THz Antenna with a Slotted Partial Ground Plane for Ultra-High Speed 6G Communication Systems,\" 2025 IEEE International Workshop on Electromagnetics: Applications and Student Innovation Competition (iWEM), Kowloon, Hong Kong. (Presented)",
            "A. Haque, H. R. Shipu, M. E. Ali, J. N. Novera, F. Mayoa, S. S. Ahmed, M. R. Amin, \"A Novel Hybrid Plasmonic Waveguide for Nano-Scale Light Confinement and Long Propagation Range,\" 2025 International Conference on Electrical, Computer and Communication Engineering (ECCE), Chittagong, Bangladesh, 2025, pp. 1-5, doi: 10.1109/ECCE64574.2025.11013926.",
            "N. Rashid, T. Rani, L. C. Paul, S. C. Das, M. A. Haque, S. S. Ahmed, \"Low-profile Wideband 1×2 Array Antenna for IEEE 802.11a/h/j/n/ac/ax WLAN Applications,\" 11th Int'l Conf. on Informatics, Electronics & Vision, London, UK, pp. 1-6, 26-29 Oct. 2023.",
            "M. R. Kabir, S. S. Ahmed, L. C. Paul, T. Rani and M. Karaaslan, \"Development of an Intravenous Fluid Monitoring, Warning, and Reverse Flow Blocking System,\" 2022 IEEE International Women in Engineering (WIE) Conference on Electrical and Computer Engineering (WIECON-ECE), Naya Raipur, India, 2022, pp. 89-94, doi: 10.1109/WIECON-ECE57977.2022.10150612.",
            "L.C. Paul, S. S. Ahmed and K. K. Karmakar, \"A Smart Multi-User Wireless Nurse Calling System and E-notice Board for Health Care Management,\" 3rd Int'l Conf. on Trends in Computational and Cognitive Engineering, Malaysia, pp. 421-431, 21-22 October, Lecture Notes in Networks and Systems, vol. 348, Springer, 2021, doi: 10.1007/978-981-16-7597-3_35.",
            "M.N. Hossain, S.S. Ahmed, M.S. Hossain, T. Shimamura, \"Design of a High-Efficiency Compact Four-Element Slotted MIMO Antenna for X-Band Wireless Communications,\" 12th International Conference on Computing and Artificial Intelligence (ICCAI 2026), Okinawa, Japan. (In review)",
            "M.N. Hossain, M.S. Hossain, S.S. Ahmed, T. Shimamura, \"Isolation-Enhanced Compact Four element MIMO Antenna for 5G NR Millimeter-Wave and D2D Applications,\" 12th International Conference on Computing and Artificial Intelligence (ICCAI 2026), Okinawa, Japan. (In review)",
            "S.S. Ahmed, T. Rani, L.C. Paul, M.R Kabir, A.Z. Abadin, A.K. Sarkar, \"A Miniaturized WBAN-Compatible Parasitic Patch Antenna for Non-Invasive Brain Tumor Localization,\" 2nd International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN), Chittagong, Bangladesh, 2026. (In review)",
            "S.S. Ahmed, L.C. Paul, M.T. Ahmed, A.Z. Abadin, M. A. Hossain, \"A DGS-Based Symmetrical Patch THz Antenna for IoT and Future 6G Applications,\" 2nd International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN), Chittagong, Bangladesh, 2026. (In review)",
            "S.S. Ahmed, M.N. Hossain, M.T. Ahmed, M.M.A. Mia, M.R. Amin, \"A Compact Wideband Slot-Modified Microstrip Antenna for WiFi-6/6E/7 and Emerging 6G WLAN Systems,\" 2nd International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN), Chittagong, Bangladesh, 2026. (In review)",
            "N. Rashid, L.C. Paul, M.R. Kabir, S.S. Ahmed, P.M. Ghosh, \"Compact and Efficient Antenna with Sharp Multi-Notch Loaded Partial Ground Plane for WiFi, WLAN, and Sub-6 GHz 5G NR Bands,\" 2026 IEEE International Symposium on Dynamic Spectrum Access Networks (DySPAN), Washington, DC, USA. (In review)",
            "S.S. Ahmed, A.K. Sarkar, \"Development of a Compact Integrated Antenna System for Early-Stage Breast Tumor Detection Using Microwave Technology,\" 2nd International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN), Chittagong, Bangladesh, 2026. (In review)",
            "S.M.T. Ahmed, S.S. Ahmed, M. M. Hassan, M. A. Hossain, M.S. Hossain, N. Sanjana, \"A Compact Dual Band Octagonal Shaped Patch Antenna for Ku band and 5G Applications,\" IEEE International Conference on Microwave, Antennas, RF and Sensors (MARSCON) 2026. (In review)",
            "M.N. Hossain, S.S. Ahmed, M.S. Hossain, T. Shimamura, \"Performance Analysis of a Four-element Triple-Band MIMO Antenna for 5G mmWave and Ka/Q-Band Satellite Communication,\" 2026 IEEE International Symposium on Dynamic Spectrum Access Networks (DySPAN), Washington, DC, USA. (In review)",
            "M.N. Hossain, S.S. Ahmed, M.S. Hossain, T. Shimamura, \"Performance Analysis of Compact Size Slotted Microstrip Patch Antenna for X-band Applications,\" 2026 IEEE International Symposium on Dynamic Spectrum Access Networks (DySPAN), Washington, DC, USA. (In review)",
          ],
        },
        {
          heading: 'Funding & Projects',
          items: [
            "\"Advancing Clean Energy Cooking Technologies in Bangladesh: Development of a Hybrid Parabolic Solar Cooker for Rural Off-Grid and Coastal Community Applications,\" Under National Academy for Planning and Development (NAPD) for FY 2025-26 (Submitted)",
            "\"Development of an AI-Driven Hybrid for High Resolution Rainfall Forecasting in Bangladesh: Application in Agriculture, Disaster Risk Reduction and Climate Resilience,\" Under National Academy for Planning and Development (NAPD) for FY 2025-26 (Submitted)",
            "\"AgriCall: An IoT and GSM-Driven Smart Irrigation System for Enhancing Water Efficiency and Sustainable Crop Production,\" Under BIAM Foundation Research Center (BFRC) for FY 2025-26 (Submitted)",
          ],
        },
      ],
      'Seminars/Workshops Participation': [
        {
          items: [
            "\"A Miniaturized Low-SAR Antenna for Breast Tumor Diagnosis,\" 6th IEEE International Conference on Telecommunications and Photonics (ICTP), BUET, Dhaka, Bangladesh, 2025.",
            "\"Dual-Band Terahertz Metamaterial Absorber with Near-Unity Absorption for Explosive Identification,\" 6th IEEE International Conference on Telecommunications and Photonics (ICTP), BUET, Dhaka, Bangladesh, 2025.",
            "\"An Efficient Miniaturized Tri-band THz Antenna for Future 6G Systems and Beyond,\" 11th IEEE International Women in Engineering Conference on Electrical and Computer Engineering 2025 (WIECON-ECE), Cox's Bazar, Bangladesh, 2025.",
            "\"A Novel Modified Triangular Shaped Microstrip Patch Antenna for C-band Applications in Wireless and Satellite Communication,\" IEEE International Conference on Signal Processing, Information, Communication and Systems 2025 (SPICSCON), Rajshahi University, Rajshahi, Bangladesh, 2025.",
            "\"Design and Performance Analysis of Slotted Patch Antenna for Sub-6 GHz 5G Communications,\" IEEE International Conference on Signal Processing, Information, Communication and Systems 2025 (SPICSCON), Rajshahi University, Rajshahi, Bangladesh, 2025.",
            "\"Triple-Band Terahertz Metamaterial Ultra-Sensitive Absorber for Multi-Class Cancer Cell Detection,\" IEEE International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN), BAUST, Rangpur, Bangladesh, 2025.",
            "\"A Smart Multi-User Wireless Nurse Calling System and E-notice Board for Health Care Management,\" 3rd Int'l Conf. on Trends in Computational and Cognitive Engineering, Malaysia, 2020.",
            "\"Operation and Maintenance of Kodda 150 MW Dual Fuel Power Plant,\" B-R Powergen Limited, Gazipur, Bangladesh, 2022.",
            "\"Mobile Game Application & Animation Project,\" ICT Ministry of Bangladesh, 2018.",
          ],
        },
      ],
      'Contact': [
        {
          lines: [
            "Sayed Shifat Ahmed",
            "Lecturer",
            "Department of Electrical and Electronic Engineering (EEE)",
            "RTM Al-Kabir Technical University (RTM-AKTU)",
            "Campus: RTM Point, East Shahi Eidgah, TB Gate, Sylhet-3100, Bangladesh",
            "Email: <a href=\"mailto:shifat@rtm-aktu.ac.bd\">shifat@rtm-aktu.ac.bd</a>",
            "Contact: <a href=\"tel:+8801790443944\">+8801790443944</a>",
            "Website: <a href=\"https://www.rtm-aktu.ac.bd\" target=\"_blank\" rel=\"noopener\">www.rtm-aktu.ac.bd</a>",
          ],
        },
      ],
    },
  },
};
