import React from 'react';

const StepContainer = ({ children }) => {
  return (
    <div className="step-container">
      <div className="step-content">
        {children}
      </div>
    </div>
  );
};

export default StepContainer;

