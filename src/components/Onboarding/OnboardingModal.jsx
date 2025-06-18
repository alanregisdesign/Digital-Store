import OnboardingProgress from './OnboardingProgress';

const OnboardingModal = ({
  isOpen,
  onClose,
  children,
  currentStep,
  totalSteps,
  title,
  onNext,
  onPrevious,
  onSkip,
  canGoBack,
  isLastStep
}) => {
  if (!isOpen) return null;

  return (
    <div className="onboarding-overlay">
      <div className="onboarding-modal">
        <div className="onboarding-header">
          <h2>{title}</h2>
          <button 
            className="onboarding-close"
            onClick={onClose}
            aria-label="Fechar onboarding"
          >
            ✕
          </button>
        </div>
        
        <OnboardingProgress 
          currentStep={currentStep} 
          totalSteps={totalSteps} 
        />
        
        <div className="onboarding-content">
          {children}
        </div>
        
        <div className="onboarding-footer">
          <div className="onboarding-actions-left">
            {canGoBack && (
              <button 
                className="onboarding-btn onboarding-btn-secondary"
                onClick={onPrevious}
              >
                Anterior
              </button>
            )}
          </div>
          
          <div className="onboarding-actions-right">
            <button 
              className="onboarding-btn onboarding-btn-ghost"
              onClick={onSkip}
            >
              Pular
            </button>
            <button 
              className="onboarding-btn onboarding-btn-primary"
              onClick={onNext}
            >
              {isLastStep ? 'Finalizar' : 'Próximo'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingModal;
