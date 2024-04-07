import React from 'react';

const ProgressIndicator = ({ currentStep, totalSteps }) => {
    const percentage = ((currentStep / totalSteps) * 100).toFixed(0);
    return (
      <div className="progress-indicator-container">
        <div className="progress-bar" style={{ width: `${percentage}%` }} />
      </div>
    );
  };

  export default ProgressIndicator;