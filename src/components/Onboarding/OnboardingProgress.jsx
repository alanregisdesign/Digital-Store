const OnboardingProgress = ({ currentStep, totalSteps }) => {
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="onboarding-progress">
      <div className="onboarding-progress-bar">
        <div 
          className="onboarding-progress-fill"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="onboarding-progress-text">
        Passo {currentStep + 1} de {totalSteps}
      </div>
    </div>
  );
};

export default OnboardingProgress;
