import React from 'react';
import PropTypes from 'prop-types';
import {
  Target,
  ClipboardList,
  CheckSquare,
  Package,
  FileText,
  Users,
  Clock
} from 'lucide-react';

const Measure = ({
  title,
  objective,
  description,
  indicators,
  resources,
  reporting,
  responsiblePersons,
  timeFrame
}) => {
  return (
    <div className="measure p-6 border border-b-2 border-sky-600 hover:border-yellow-600 rounded-lg bg-slate-50">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <h3 className="text-xl font-bold mb-4">{objective}</h3>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-slate-700 flex items-center gap-2">
            <ClipboardList className="h-5 w-5" />
            Description of Actions
          </h4>
          <p className="mt-1">{description}</p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-700 flex items-center gap-2">
            <Target className="h-5 w-5" />
            Indicators of Success
          </h4>
          <p className="mt-1">{indicators}</p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-700 flex items-center gap-2">
            <Package className="h-5 w-5" />
            Resources Required
          </h4>
          <p className="mt-1">{resources}</p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-700 flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Reporting and Review
          </h4>
          <p className="mt-1">{reporting}</p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-700 flex items-center gap-2">
            <Users className="h-5 w-5" />
            Responsible Person(s)
          </h4>
          <p className="mt-1">{responsiblePersons}</p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-700 flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Time Frame
          </h4>
          <p className="mt-1">{timeFrame}</p>
        </div>
      </div>
    </div>
  );
};

Measure.propTypes = {
  title: PropTypes.string.isRequired,
  objective: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  indicators: PropTypes.string.isRequired,
  resources: PropTypes.string.isRequired,
  reporting: PropTypes.string.isRequired,
  responsiblePersons: PropTypes.string.isRequired,
  timeFrame: PropTypes.string.isRequired
};

export default Measure; 