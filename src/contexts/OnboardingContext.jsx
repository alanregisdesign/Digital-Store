import React, { createContext, useContext, useState, useEffect } from 'react';

const OnboardingContext = createContext();

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};

export const OnboardingProvider = ({ children }) => {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Check if user has completed onboarding before
  useEffect(() => {
    const completed = localStorage.getItem('onboarding-completed');
    const shouldShow = !completed && !sessionStorage.getItem('onboarding-dismissed');
    
    setIsCompleted(!!completed);
    
    // Show onboarding for first-time users after a short delay
    if (shouldShow) {
      const timer = setTimeout(() => {
        setIsOnboardingOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const steps = [
    'welcome',
    'share-on-x',
    'completion'
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const skipOnboarding = () => {
    sessionStorage.setItem('onboarding-dismissed', 'true');
    setIsOnboardingOpen(false);
    setCurrentStep(0);
  };

  const completeOnboarding = () => {
    localStorage.setItem('onboarding-completed', 'true');
    setIsCompleted(true);
    setIsOnboardingOpen(false);
    setCurrentStep(0);
  };

  const reopenOnboarding = () => {
    setCurrentStep(0);
    setIsOnboardingOpen(true);
  };

  const closeOnboarding = () => {
    setIsOnboardingOpen(false);
    setCurrentStep(0);
  };

  const value = {
    isOnboardingOpen,
    currentStep,
    steps,
    isCompleted,
    nextStep,
    prevStep,
    skipOnboarding,
    completeOnboarding,
    reopenOnboarding,
    closeOnboarding,
    totalSteps: steps.length
  };

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
};

