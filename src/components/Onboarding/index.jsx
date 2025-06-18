import { useState } from 'react';
import OnboardingModal from './OnboardingModal';
import WelcomeStep from './steps/WelcomeStep';
import ShareCodegenStep from './steps/ShareCodegenStep';
import ExploreStep from './steps/ExploreStep';
import CompletionStep from './steps/CompletionStep';
import './index.css';

const Onboarding = ({ isOpen, onClose, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      id: 'welcome',
      component: WelcomeStep,
      title: 'Bem-vindo à Digital Store!'
    },
    {
      id: 'share-codegen',
      component: ShareCodegenStep,
      title: 'Compartilhe o Codegen'
    },
    {
      id: 'explore',
      component: ExploreStep,
      title: 'Explore Nossos Recursos'
    },
    {
      id: 'completion',
      component: CompletionStep,
      title: 'Tudo Pronto!'
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    onComplete();
    onClose();
    setCurrentStep(0);
  };

  const handleSkip = () => {
    onClose();
    setCurrentStep(0);
  };

  if (!isOpen) return null;

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <OnboardingModal
      isOpen={isOpen}
      onClose={onClose}
      currentStep={currentStep}
      totalSteps={steps.length}
      title={steps[currentStep].title}
      onNext={handleNext}
      onPrevious={handlePrevious}
      onSkip={handleSkip}
      canGoBack={currentStep > 0}
      isLastStep={currentStep === steps.length - 1}
    >
      <CurrentStepComponent 
        onNext={handleNext}
        onComplete={handleComplete}
        isLastStep={currentStep === steps.length - 1}
      />
    </OnboardingModal>
  );
};

export default Onboarding;
