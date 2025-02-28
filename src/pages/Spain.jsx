import React from 'react';
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
    introduction: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.`,
    socialLinks: [
      {
        title: "Department Website",
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
    pdfTranslationLink: "./pdfs/SDG-iLevel_WP6_ UdG Departmental Roadmap.pdf"
  };

  return <DepartmentLayout {...departmentData} />;
};

export default Spain;
