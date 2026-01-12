
import DepartmentLayout from '../components/DepartmentLayout';
const bojana = "/people/bojana.jpg";
const nena_roncevic = "/people/nena_roncevic.jpeg";
const nena_vukelic = "/people/nena_vukelic.jpeg";
const iva = "/people/iva.jpeg";

const Croatia = () => {
  const departmentData = {
    title: "University of Rijeka Department Roadmap",
    language: "Croatian",
    countryCode: "hr",
    countryName: "croatia",
    universityName: "University of Rijeka",
    departmentName: "Department of Education",
    introduction: `The Department of Education at the Faculty of Humanities and Social Sciences, University of Rijeka, has existed since 1953, operating under various names and institutional structures, including the Institute for Industrial Pedagogy, the Department for Industrial Pedagogy, the Institute for Pedagogy, and currently, the Department of Education. The department currently employs seventeen (17) staff members, including fifteen (15) academic personnel, comprising tenured professors, associate and assistant professors, postdoctoral researchers, and PhD students, as well as two (2) administrative staff members. Additionally, the department collaborates with a network of professionals serving as external associates.

The Department of Education offers comprehensive undergraduate, graduate, and postgraduate study programmes in pedagogy, with the graduate and postgraduate ones available in both full-time and part-time formats. It also delivers an advanced master's programme for school principals and plays a key role in the master's programme for initial teacher education. Furthermore, the department provides a range of lifelong learning programmes to support continuous professional development of diverse learners. These programs are designed to equip students with theoretical knowledge and practical skills, preparing them for diverse roles in formal and non-formal educational settings.

The curriculum across all study programmes emphasizes contemporary educational theories, innovative and engaged teaching and learning approaches, diverse research methodologies, and the development of critical thinking skills. The goal is to cultivate socially responsible professionals capable of addressing modern educational challenges in both institutional and non-institutional contexts. Additionally, the department actively promotes cross-institutional, cross-sectoral, and interdisciplinary collaboration, providing students with opportunities to engage in research projects, community-based initiatives, volunteering, and internships. These experiences enhance students' academic, professional, and transversal competencies, equipping them with the expertise needed for impactful contributions to the field of education.`,
    socialLinks: [
      {
        title: "DEPTofEDU web - ENG",
        url: "#"
      },
      {
        title: "DEPTofEDU web - CRO",
        url: "#"
      },
      {
        title: "DEPTofEDU - Facebook Page",
        url: "#"
      }
    ],
    teamMembers: [
      {
        name: "Prof. dr. Bojana Ćulum Ilić",
        avatar: bojana,
        title: "Full Professor",
        position: "Head of PhD Study Programme",
        area: "Department of Education",
        areaLink: "https://portal.uniri.hr/Portfolio/760"
      },
      {
        name: "Prof. dr. Nena Rončević",
        avatar: nena_roncevic,
        title: "Full Professor",
        position: "Head of Chair for Special Pedagogies",
        area: "Department of Education",
        areaLink: "https://portal.uniri.hr/Portfolio/1072"
      },
      {
        name: "Asst. prof. dr. Nena Vukelić",
        avatar: nena_vukelic,
        title: "Assistant Professor",
        position: "Deputy Head of Department & Faculty Board for Quality Assurance",
        area: "Department of Education",
        areaLink: "https://portal.uniri.hr/Portfolio/2424"
      },
      {
        name: "Asst. prof. dr. Iva Buchberger",
        avatar: iva,
        title: "Assistant Professor",
        position: "Head of Department",
        area: "Department of Education",
        areaLink: "https://portal.uniri.hr/Portfolio/2046"
      }
    ],
    roadmapOverview: `The Department of Education at the University of Rijeka is committed to integrating sustainable development goals (SDGs) into its educational programs and practices. Our roadmap outlines strategic initiatives to enhance sustainability awareness, promote innovative teaching methods, and foster collaboration across institutional boundaries. Through targeted measures and continuous assessment, we aim to create lasting impact in educational sustainability.`,
    measures: [
    {
      title: "Implementing a Sustainability-Focused Curriculum Review (Study Programme)",
      objective: "SDG principles and content/topics integrated into study programme of pedagogy (bachelor and master)",
      description: "1) Map existing courses to specific SDGs and identify gaps (collaborative efforts of all teachers at the department) 2) Redesign current or introduce new (elective) courses that explicitly address topics/content related to SDG framework 3) Encourage community-engaged approaches in teaching & learning SDG related content/topics among colleagues at the department",
      indicators: "Number of redesigned and/or introduced courses complementary to the SDG framework, number of redesigned and/or introduced new assignments for student within the existing courses, number of teachers/colleagues who integrated community-engaged approaches",
      resources: "Study programmes elaborates; human resources for the efficient and fast mapping (collaborative efforts of all teachers at the department)",
      reporting: "Integration of SDG related content/topics in courses, integration of community-engaged teaching and learning approaches in courses, departmental meetings",
      responsiblePersons: "Nena Rončević",
      timeFrame: "March 2025 - June 2026"
    },
    {
      title: "Implementing a Sustainability-Focused Curriculum Review (YUFE Minor)",
      objective: "At least one SDG related course from the Department of Pedagogy integrated into YUFE Minor Urban Sustainability",
      description: "Map existing courses to learning outcomes of the YUFE Minor, propose at least one (elective) course from the department of pedagogy to get integrated in the joint study programme",
      indicators: "Number of courses from the study programme of pedagogy complementary to the SDG framework, number of courses integrated into YUFE Minor Urban Sustainability",
      resources: "Study programmes elaborates; human resources for mapping, leader/head of the YUFE Minor Urban Sustainability and vice-dean approval",
      reporting: "Integration of SDG related courses from department of pedagogy the YUFE Minor Urban Sustainability, departmental meetings, meetings with relevant actors",
      responsiblePersons: "Nena Rončević",
      timeFrame: "Feb 2025 - April/May 2025"
    },
    {
      title: "Implementing a Sustainability-Focused Curriculum Review (School Principals)",
      objective: "At least one SDG related course integrated into the advanced master study programme for school principals",
      description: "Map existing courses to specific SDGs, redesign or introduce new courses, encourage community-engaged approaches in teaching & learning SDG related content/topics",
      indicators: "Number of redesigned/introduced courses, new assignments, and teachers who integrated community-engaged approaches",
      resources: "Advanced master study programmes elaborate, human resources for mapping, administrative process support",
      reporting: "Integration of SDG courses, community-engaged approaches, departmental meetings & programme council meetings",
      responsiblePersons: "Nena Rončević",
      timeFrame: "March 2025 - Sept 2026"
    },
    {
      title: "Implementing a Sustainability-Focused Curriculum Review (Initial Teacher Training)",
      objective: "At least one SDG related (elective) course integrated into the master study programme - teaching module (initial teacher training)",
      description: "➔ Map existing courses to specific SDGs and identify gaps (collaborative efforts of all teachers engaged in teaching within the advanced master programme) ➔ Redesign current or introduce new (elective) courses that explicitly address topics/content related to SDG framework ➔ Encourage community-engaged approaches in teaching & learning SDG related content/topics among colleagues engaged in teaching within the advanced master programme (e.g.project-based learning, challenge-based learning, problem-based learning, service-learning, case studies)",
      indicators: "➔ number of redesigned and/or introduced courses complementary to the SDG framework ➔ number of redesigned and/or introduced new assignments for students within the existing courses ➔ number of teachers/colleagues who integrated community-engaged approaches in teaching & learning into their courses",
      resources: "➔ master study programme for the teaching module (initial teacher training) elaborate; ➔ human resources for the efficient and fast mapping (collaborative efforts of all departmental teachers) ➔ leader/head of the master study module for initial teacher training (administrative process)",
      reporting: "➔ integration of SDG related content/topics in courses ➔ integration of community-engaged teaching and learning approaches in courses ➔ departmental meetings & meetings of the council of the the master study programme - teaching module (initial teacher training)",
      responsiblePersons: "Nena Rončević",
      timeFrame: "March 2025 - Sept 2025"
    },
    {
      title: "Integrating Sustainability-Focused Principles and Activities Into Strategic Documents of the Department of Education",
      objective: "Key sustainability-focused principles and activities integrated into strategic plan of the Department of Education",
      description: "→ assess how current departmental activities, teaching, research, and community engagement align with SDGs → identify gaps where SDG principles are underrepresented and prioritize them in the new strategy → core team members assessing current strategic plan (the document is still work in progress version) and creating a proposal of sustainability-focused principles and activities to be integrated into strategic plan of the Department of Education → encourage departmental colleagues to engage into discussion on the proposal → reaching the final decision (evident decision in the meeting minutes) and propose additions to the current version of the strategic plan",
      indicators: "→ proposed additions of sustainability-focused principles and activities integrated into a final version of the strategic plan of the Department of Education",
      resources: "→ draft proposal of sustainability-focused principles and activities drafted by the core team members and circulated among departmental colleagues → departmental meeting and meeting minutes (administrative procedure)",
      reporting: "→ departmental meetings → faculty and university reporting on the strategic goals fulfillment (reporting once per year to faculty and university YUFE coordinators)",
      responsiblePersons: "Nena Rončević & Bojana Ćulum Ilić",
      timeFrame: "March 2025 - July 2025"
    },
    {
      title: "Foster Building Long-term Partnerships with Community Actors",
      objective: "Continue building long-term partnerships with relevant organisations and institutions working in the field of education",
      description: "Assess current collaborators, create database of long-term collaborators, develop community engaged T&L programs, form external advisory body",
      indicators: "Created database of long-term partnerships, number of community actors included, external advisory body established",
      resources: "List of departmental collaborators, human resources for assessment and proposals",
      reporting: "Departmental meetings, meetings with external partners",
      responsiblePersons: "Bojana Ćulum Ilić",
      timeFrame: "March 2025 - March 2026"
    },
    {
      title: "Adopting a Zero-Waste Campus Events Policy",
      objective: "Adopting a Zero-Waste Events Policy in strategic documents and events organised at the departmental level (Department of Education)",
      description: "→ Incorporate Zero-Waste Policy in departmental strategic document and associated action plans → issuance of a departmental decision mandating that all events organized by the department's staff or students must adhere to the zero-waste policy → sharing info on departmental web and social networks → inform students about the Zero-Waste Policy → assuring that all events organised by the Department of Education follow the Zero-Waste Policy",
      indicators: "→ Zero-Waste Policy explicitly integrated in departmental strategic document and associated action plans → formal departmental decision mandating Zero-Waste Policy for all the events organised by the Department of Education → number of events per year adhering to the zero-waste policy",
      resources: "→ departmental meetings - number of votes to get the formal decision on the Zero-Waste Policy → various resources for the events aiming to adhere to the zero- waste policy",
      reporting: "→ reporting at the departmental meetings",
      responsiblePersons: "Nena Vukelić",
      timeFrame: "March 2025 - March 2026"
    },
    {
      title: "Dissertations for the SDGs",
      objective: "SDG related research topics integrated into departmental database of final thesis research topics at all three levels",
      description: "Map existing research topics, redesign or introduce new topics, connect to current research projects, encourage SDG-related and community-engaged research",
      indicators: "Number of SDG-related research topics, contributing teachers, students taking SDG-related thesis",
      resources: "Departmental database of final thesis research topics, departmental decision-making",
      reporting: "Integration of SDG topics in database, departmental and council meetings",
      responsiblePersons: "Nena Vukelić & Bojana Ćulum Ilić",
      timeFrame: "March 2025 - Sept 2025"
    },
    {
      title: "Building SDG-Related Project Culture at the Department of Education",
      objective: "Academics from Department motivated to integrate SDG related topics into their research and developmental projects",
      description: "→ map existing research topics to specific SDGs and identify gaps → identify SDG-aligned research opportunities and regularly provide faculty members from Department with information on possible grants and support to pursue these areas → where possible, connecting SDG related research topic to a current research project conducted at the department → encourage faculty members from the Department to pursue both SDG related science related research projects and developmental projects (e.g. Erasmus+) → public promotion of projects aligned with the SDG framework through website and departmental social networks (e.g. FB Page)",
      indicators: "→ number of research and developmental SDG related projects led by the faculty members from the Department → number of research and developmental SDG related projects receiving national or international/EU funding support",
      resources: "→ list of current research and developmental projects led by the faculty members from the Departments → human resources - departmental colleagues engaged in assessment of their own projects and providing info to responsible person",
      reporting: "→ departmental meetings → reports on research and developmental projects as part of already defined institutional/Faculty reporting policies and practices",
      responsiblePersons: "Nena Rončević & Bojana Ćulum Ilić",
      timeFrame: "March 2025 - March 2026"
    },
    {
      title: "Cross-departmental SDG Knowledge-sharing Platforms",
      objective: "Continuous interdepartmental collaboration by academics engaged in the interdepartmental SDG task force",
      description: "Establish interdepartmental SDG task force, develop collaborative schemes, share best practices",
      indicators: "Established task force, number of contributing teachers, participation in organized activities",
      resources: "Office space for meetings, faculty web and social networks",
      reporting: "Task force meetings, web and social network information sharing",
      responsiblePersons: "Bojana Ćulum Ilić & extended team",
      timeFrame: "March 2025 - March 2026"
    },
    {
      title: "Foster Awareness and Understanding of SDGs",
      objective: "Continuously promote awareness and deepen students' understanding of the SDGs and their connection to education quality",
      description: "Organize training/workshops/seminars, collaborate with international universities, develop educational materials, integrate SDG awareness into student orientation",
      indicators: "At least 1 training/workshop per year, new orientation programme for bachelor students",
      resources: "Human resources, funding, educational materials, online and onsite facilities",
      reporting: "Departmental meetings, students' evaluations, collaborators' evaluations, faculty reporting",
      responsiblePersons: "Bojana Ćulum Ilić & extended team",
      timeFrame: "March 2025 - March 2026"
    },
    {
      title: "Featuring Academics' SDGs Contributions",
      objective: "Continuous recognition and celebration of individual academics' and students' contributions to SDGs",
      description: "Develop visual identity, create templates for storytelling, encourage sharing of SDG practices, maintain social media presence",
      indicators: "Number of contributors, monthly FB posts, FB visitors",
      resources: "Visual identity, templates, faculty web and social networks",
      reporting: "FB Page analytics, departmental meetings",
      responsiblePersons: "Nena Vukelić & Bojana Ćulum Ilić",
      timeFrame: "March 2025 - March 2026"
    },
    {
      title: "Advocacy Initiatives for Improving Study Programmes",
      objective: "The Department of Education acts as an advocacy body, engaging with quality assurance initiatives at the faculty level to integrate more SDG related principles and topics/courses aiming to enhance the quality of study programmes.",
      description: "→ discuss the potential of Department to act as an advocacy actor at the faculty level with the departmental colleagues → appoint couple of departmental members to the advocacy task force to engage with quality assurance initiatives at the faculty level → propose to the quality assurance board at the faculty level severa ways of improving study programmes by integrating more SDG related courses/topics/activities meeting with the quality assurance board as well as with the vice-dean for students and teaching",
      indicators: "→ department recognised as a relevant advocacy actor at the faculty level → quality assurance board as well as vice-dean for students and teaching recognising the task force advocacy efforts and inviting all departments from the Faculty to contribute to improving their study programmes by integrating more SDG related principles and topics/courses",
      resources: "→ departmental meetings → meetings with the Faculty quality assurance board and vice-dean for students and teaching",
      reporting: "→ reporting at the departmental meetings → reporting to the Faculty quality assurance board and vice-dean for students and teaching",
      responsiblePersons: "Nena Vukelić & Nena Rončević",
      timeFrame: "March 2025 - March 2026"
    }
  ],
    pdfLink: "./pdfs/SDG-iLevel_WP6_UNIRi Departamental Roadmap_EN.pdf",
    pdfTranslationLink: "./pdfs/SDG-iLevel_WP6_UNIRi Departamental Roadmap_CRO.pdf",
    pdfTranslationLinkGerman: "./pdfs/SDG-iLevel_WP6_UNIRi Departamental Roadmap_DE.pdf"
  };

  return <DepartmentLayout {...departmentData} />;
};

export default Croatia;
