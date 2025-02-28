import React from 'react';
import { Languages } from 'lucide-react';
import PropTypes from 'prop-types';
import TeamSection from './TeamSection';
import RoadmapOverview from './RoadmapOverview';
import MeasuresSection from './MeasuresSection';
import DepartmentIntroduction from './DepartmentIntroduction';
import ReactCountryFlag from 'react-country-flag';

const DepartmentLayout = ({
  title,
  language,
  countryCode,
  countryName,
  universityName,
  departmentName,
  teamMembers,
  roadmapOverview,
  measures,
  pdfLink,
  pdfTranslationLink,
  introduction,
  socialLinks
}) => {
  return (
    <div className="department-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div>
          <h2 className="text-xl text-slate-600 mb-2 text-center lg:text-left">{universityName}</h2>
          <h3 className="text-2xl font-semibold mb-2 text-center lg:text-left">{departmentName}</h3>
          <div className="lg:flex lg:items-center lg:justify-between">
            <h1 className="text-3xl font-bold text-center lg:text-left">{title}</h1>
            <div className="mt-4 lg:mt-0 lg:ml-4 flex flex-col lg:-translate-y-4">
              <p className="text-sm text-slate-600 mb-2 text-center">Download Roadmap</p>
              <div className="flex gap-2 justify-center w-full">
                <a
                  href={pdfLink}
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ReactCountryFlag countryCode="GB" svg />
                  <span className="font-medium">English</span>
                </a>
                <a
                  href={pdfTranslationLink}
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ReactCountryFlag countryCode={countryCode} svg />
                  <span className="font-medium">{language}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DepartmentIntroduction
        introduction={introduction}
        socialLinks={socialLinks}
        country={countryName}
      />

      <TeamSection members={teamMembers} />

      <RoadmapOverview overview={roadmapOverview} />

      <MeasuresSection measures={measures} />
    </div>
  );
};

DepartmentLayout.propTypes = {
  title: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  universityName: PropTypes.string.isRequired,
  departmentName: PropTypes.string.isRequired,
  teamMembers: PropTypes.arrayOf(PropTypes.object).isRequired,
  roadmapOverview: PropTypes.string.isRequired,
  measures: PropTypes.arrayOf(PropTypes.object).isRequired,
  pdfLink: PropTypes.string.isRequired,
  pdfTranslationLink: PropTypes.string.isRequired,
  introduction: PropTypes.string.isRequired,
  socialLinks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }))
};

export default DepartmentLayout; 
