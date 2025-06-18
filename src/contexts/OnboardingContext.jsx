import { createContext, useContext, useState, useEffect } from 'react';

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
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  // Check localStorage on mount
  useEffect(() => {
    const completed = localStorage.getItem('digital-store-onboarding-completed');
    const visited = localStorage.getItem('digital-store-visited');
    
    if (completed === 'true') {
      setHasCompletedOnboarding(true);
    }
    
    if (visited === 'true') {
      setIsFirstVisit(false);
    } else {
      // Mark as visited and show onboarding for first-time users
      localStorage.setItem('digital-store-visited', 'true');
      setIsFirstVisit(true);
      // Auto-open onboarding for first-time visitors after a short delay
      setTimeout(() => {
        if (!completed) {
          setIsOnboardingOpen(true);
        }
      }, 1500);
    }
  }, []);

  const startOnboarding = () => {
    setIsOnboardingOpen(true);
  };

  const closeOnboarding = () => {
    setIsOnboardingOpen(false);
  };

  const completeOnboarding = () => {
    setHasCompletedOnboarding(true);
    setIsOnboardingOpen(false);
    localStorage.setItem('digital-store-onboarding-completed', 'true');
  };

  const resetOnboarding = () => {
    setHasCompletedOnboarding(false);
    localStorage.removeItem('digital-store-onboarding-completed');
    setIsOnboardingOpen(true);
  };

  const value = {
    isOnboardingOpen,
    hasCompletedOnboarding,
    isFirstVisit,
    startOnboarding,
    closeOnboarding,
    completeOnboarding,
    resetOnboarding
  };

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
};

export default OnboardingContext;
