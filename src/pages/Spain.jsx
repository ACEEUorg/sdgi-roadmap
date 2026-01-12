
import DepartmentLayout from '../components/DepartmentLayout';
const silvia = "/people/silvia.jpg";
const montserrat = "/people/montserrat.jpg";
const jordi = "/people/jordi.jpg";
const jaume = "/people/jaume.jpg";
const jesus = "/people/jesus.jpg";
const ingrid = "/people/ingrid.jpg";
const leslie = "/people/leslie.jpeg";

const Spain = () => {
  const departmentData = {
    title: "Universitat de Girona Sustainability Roadmap",
    language: "Catalan",
    countryCode: "es-ct",
    countryName: "spain",
    universityName: "Universitat de Girona",
    departmentName: "Subject-Specific Education Department, The Faculty of Education and Psychology, Josep Pallach Institute of Education Sciences",
    introduction: `The UdG roadmap contains four measures to help academics to embed the sustainable development goals in their work activities. These measures involve different scales of the university and, for this reason, they will be led by the Faculty of Education and Psychology (FEP), the Subject-Specific Education Department (SSED), and the university as a whole (through the Josep Pallach Institute of Education Sciences (ICE-SAID)). 

The Faculty of Education and Psychology of the University of Girona does research and develop theoretical and practical knowledge related to education, health and care giving for people and communities. The studies at the faculty comprise 6 bachelor's degrees, a doble degree in early child and primary education, and 10 master's degrees (4 own masters and 6 joined masters). The aim of the faculty studies is to promote critical, reflexive and cooperative learning in the fields of Education and Psychology.

The Department of Subject-Specific Education of the University of Girona is comprised of seven areas of knowledge that aim to provide teaching and educational research in seven different fields of knowledge: mathematics, languages, music, the visual arts, physical education and social and experimental sciences. The members of the department take part in two bachelor's degrees (Early Childhood Teacher and Primary School Teacher) and in two master programmes (Master in Secondary Teacher Education and Master in Inclusive Education addressing Diversity). They also participate in the Doctoral Programme in Education.

The Josep Pallach Institute of Education Sciences (ICE) aims to contribute to the lifelong learning of academic staff from all educational levels, technical advice in the field of the educational planning, and pedagogical and research innovation. The institute in its goal for promoting innovation in education supports the creation of networks and working groups. The Teaching Innovation Networks (XID) are created around themes related to the priority lines of training at the University of Girona and in accordance with the interests of the UdG teaching staff. They are made up of members of the teaching and research staff interested in undertaking an advanced training process based on reflection on their own teaching practice.`,
    socialLinks: [
      {
        title: "The Faculty of Education and Psychology",
        url: "https://www.udg.edu/en/fep"
      },
      {
        title: "Department of Subject-Specific Education",
        url: "https://www.udg.edu/en/depde"
      },
      {
        title: "The Joseph Pallach Institute of Education Sciences (ICE)",
        url: "https://www.udg.edu/en/ice"
      }
  
    ],
    teamMembers: [
      {
        name: "Assoc. prof. dr. Sílvia Llach",
        avatar: silvia,
        title: "Vice-Rector for Territory and Social Commitment",
        position: "Leadership Team",
        area: "University Leadership",
        areaLink: "https://www.udg.edu/en/coneix/govern/Consell-de-Direccio/detall?id=104"
      },
      {
        name: "Assoc. prof. dr. Montserrat Vilà",
        avatar: montserrat,
        title: "Dean",
        position: "Faculty Leadership",
        area: "Faculty of Education and Psychology",
        areaLink: "https://www.udg.edu/ca/directori/pagina-personal?IDP=57435"
      },
      {
        name: "Assoc. prof. dr. Jordi Cicres",
        avatar: jordi,
        title: "Head",
        position: "Department Leadership",
        area: "Subject-Specific Education Department",
        areaLink: "https://www.udg.edu/ca/directori/pagina-personal?ID=2001570"
      },
      {
        name: "Assoc. prof. dr. Jaume Ametller",
        avatar: jaume,
        title: "Director",
        position: "Institute Leadership",
        area: "Josep Pallach Institute of Education Sciences",
        areaLink: "https://www.udg.edu/ca/directori/pagina-personal?ID=2003161"
      },
      {
        name: "Assoc. prof. dr. Jesús Granados Sánchez",
        avatar: jesus,
        title: "Master Director",
        position: "Department Member",
        area: "Subject-Specific Education Department",
        areaLink: "https://www.udg.edu/ca/directori/pagina-personal?ID=123713"
      },
      {
        name: "Assoc. prof. dr. Ingrid Mulà",
        avatar: ingrid,
        title: "Associate Professor",
        position: "Department Member",
        area: "Subject-Specific Education Department",
        areaLink: "https://www.udg.edu/ca/directori/pagina-personal?ID=2002125"
      },
      {
        name: "Assoc. prof. dr. Leslie Collazo",
        avatar: leslie,
        title: "Associate Professor",
        position: "Department Member",
        area: "Subject-Specific Education Department",
        areaLink: "https://www.udg.edu/ca/directori/pagina-personal?IDP=149562"
      }
    ],
    roadmapOverview: `The roadmap contains 4 measures to help academics to embed the sustainable development goals in their work activities. These measures involve different scales of the university and, for this reason, they will be led by the Subject-Specific Education Department (SSED), the Faculty of Education and Psychology (FEP) and the university as a whole (through the Josep Pallach Institute of Education Sciences (ICE-SAID)).`,
    "measures": [
      {
        "title": "Dissertations for the SDGs",
        "objective": "To include the contribution made to the SDG in each dissertation, at degree and master levels",
        "description": "Inclusion of the SDGs in the core elements of dissertation contents, with examples of how to justify contributions to specific SDG targets",
        "indicators": "The increased number of dissertations that include the SDGs",
        "resources": "Create a new section in dissertation guidelines with SDG inclusion guidance and update assessment rubrics",
        "reporting": "Publication of main SDG contributions annually on master and degree websites",
        "responsiblePersons": "Dr. Jesús Granados Sánchez, Faculty of Education and Psychology (FEP)",
        "timeFrame": "March 2025 - June 2025 (pilot at Master in Secondary Teacher Education)"
      },
      {
        "title": "Best SDG-Related Dissertation Award",
        "objective": "To create an annual award for the best contribution made to the SDGs in a final master or degree dissertation",
        "description": "Develop award criteria, create a selection commission, and recognize top SDG-related dissertations",
        "indicators": "Increased number of SDG-focused dissertations, quality of contributions, and participation rate",
        "resources": "Time for professors to evaluate nominations, updated assessment rubrics, and the award prize",
        "reporting": "Publication of award winners and their contributions on master and degree websites",
        "responsiblePersons": "Dr. Jesús Granados Sánchez and coordinators from FEP and Subject-Specific Education Department",
        "timeFrame": "March 2025 - June 2025 (pilot at Master in Secondary Teacher Education)"
      },
      {
        "title": "Training Course on ESD and SDGs",
        "objective": "Increase the number of academic staff trained in education for sustainability and SDG contributions",
        "description": "Design a training course using SDG-iLevel project materials, to be included in ICE-SAID training offerings",
        "indicators": "Course creation, number of course offerings, and percentage of academic staff completing the course",
        "resources": "Working hours from Innovation Teaching Network coordinators, administrative support",
        "reporting": "Annual evaluation of training program effectiveness",
        "responsiblePersons": "Dr. Leslie Collazo, Dr. Jesús Granados Sánchez, with GRECA research group and Green Plan commission involvement",
        "timeFrame": "March 2025 - March 2026"
      },
      {
        "title": "SDG Contributions in Faculty Newsletter",
        "objective": "Highlight SDG contributions from academic, administrative staff, and alumni",
        "description": "Create a monthly newsletter section featuring good practices related to SDGs across teaching, research, management, and community engagement",
        "indicators": "Creation of newsletter section, inclusion of at least 10 good practices per academic year",
        "resources": "Administrative work for news editing, description of SDG good practice requirements",
        "reporting": "Evaluate implementation effectiveness and community impact",
        "responsiblePersons": "Greening Commission of the Faculty, GRECA research group members",
        "timeFrame": "June 2025 - March 2026"
      }
    ],
    pdfLink: "./pdfs/SDG-iLevel_WP6_UdG Departmental Roadmap_EN.pdf",
    pdfTranslationLink: "./pdfs/SDG-iLevel_WP6_UdG_Ruta_Departamental_CT.pdf",
    pdfTranslationLinkGerman: "./pdfs/SDG-iLevel_WP6_UdG Departmental Roadmap_DE.pdf"
  };

  return <DepartmentLayout {...departmentData} />;
};

export default Spain;
