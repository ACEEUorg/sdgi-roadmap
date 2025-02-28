import React from 'react';
import PropTypes from 'prop-types';
import TeamMember from './TeamMember';

const TeamSection = ({ members }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Development Team Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {members.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

TeamSection.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      area: PropTypes.string.isRequired,
      areaLink: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TeamSection; 