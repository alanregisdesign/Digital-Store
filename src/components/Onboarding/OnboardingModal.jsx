import React from 'react';
import { useOnboarding } from '../../contexts/OnboardingContext';
import StepContainer from './StepContainer';
import WelcomeStep from './steps/WelcomeStep';
import ShareOnXStep from './steps/ShareOnXStep';
import CompletionStep from './steps/CompletionStep';
import './OnboardingModal.css';

const OnboardingModal = () => {
  const { 
    isOnboardingOpen, 
    currentStep, 
    steps, 
    nextStep, 
    prevStep, 
    skipOnboarding, 
    completeOnboarding,
    closeOnboarding,
    totalSteps 
  } = useOnboarding();

  if (!isOnboardingOpen) return null;

  const renderStep = () => {
    switch (steps[currentStep]) {
      case 'welcome':
        return <WelcomeStep />;
      case 'share-on-x':
        return <ShareOnXStep />;
      case 'completion':
        return <CompletionStep />;
      default:
        return <WelcomeStep />;
    }
  };

  const handleNext = () => {
    if (currentStep === totalSteps - 1) {
      completeOnboarding();
    } else {
      nextStep();
    }
  };

  const handleClose = () => {
    if (currentStep === totalSteps - 1) {
      completeOnboarding();
    } else {
      closeOnboarding();
    }
  };

  return (
    <div className="onboarding-overlay">
      <div className="onboarding-modal">
        <div className="onboarding-header">
          <div className="step-indicator">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`step-dot ${index <= currentStep ? 'active' : ''}`}
              />
            ))}
          </div>
          <button 
            className="close-button"
            onClick={handleClose}
            aria-label="Close onboarding"
          >
            ×
          </button>
        </div>

        <StepContainer>
          {renderStep()}
        </StepContainer>

        <div className="onboarding-footer">
          <div className="step-counter">
            {currentStep + 1} of {totalSteps}
          </div>
          
          <div className="navigation-buttons">
            {currentStep > 0 && (
              <button 
                className="btn btn-secondary"
                onClick={prevStep}
              >
                Previous
              </button>
            )}
            
            {currentStep < totalSteps - 1 && (
              <button 
                className="btn btn-ghost"
                onClick={skipOnboarding}
              >
                Skip
              </button>
            )}
            
            <button 
              className="btn btn-primary"
              onClick={handleNext}
            >
              {currentStep === totalSteps - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingModal;

