import React from 'react';
import PropTypes from 'prop-types';
import Measure from './Measure';

const MeasuresSection = ({ measures }) => {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-6">Department Measures</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {measures.map((measure, index) => (
          <Measure key={index} {...measure} />
        ))}
      </div>
    </section>
  );
};

MeasuresSection.propTypes = {
  measures: PropTypes.arrayOf(
    PropTypes.shape({
      objective: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      indicators: PropTypes.string.isRequired,
      resources: PropTypes.string.isRequired,
      reporting: PropTypes.string.isRequired,
      responsiblePersons: PropTypes.string.isRequired,
      timeFrame: PropTypes.string.isRequired
    })
  ).isRequired
};

export default MeasuresSection; 