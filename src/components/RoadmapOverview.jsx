import React from 'react';
import PropTypes from 'prop-types';

const RoadmapOverview = ({ overview }) => {
  return (
    <section className="my-8 p-6 bg-slate-50 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Roadmap Overview</h2>
      <div className="prose max-w-none">
        {overview}
      </div>
    </section>
  );
};

RoadmapOverview.propTypes = {
  overview: PropTypes.string.isRequired
};

export default RoadmapOverview; 