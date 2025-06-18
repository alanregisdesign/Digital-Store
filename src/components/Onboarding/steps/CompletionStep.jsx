import React from 'react';

const CompletionStep = () => {
  return (
    <div className="completion-step">
      <div className="step-icon">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22,4 12,14.01 9,11.01"/>
        </svg>
      </div>
      
      <h2>You're all set! 🎉</h2>
      
      <p className="step-description">
        Congratulations! You've completed the onboarding process. You're now ready to 
        explore everything Digital Store has to offer.
      </p>

      <div className="completion-highlights">
        <div className="highlight-item">
          <span className="highlight-icon">✅</span>
          <span>Learned about Digital Store features</span>
        </div>
        
        <div className="highlight-item">
          <span className="highlight-icon">✅</span>
          <span>Connected with our community</span>
        </div>
        
        <div className="highlight-item">
          <span className="highlight-icon">✅</span>
          <span>Ready to start shopping!</span>
        </div>
      </div>

      <div className="next-steps">
        <h3>What's next?</h3>
        <ul>
          <li>🛍️ Browse our product catalog</li>
          <li>📱 Check out different categories</li>
          <li>💫 Discover featured items</li>
          <li>🎯 Track your orders easily</li>
        </ul>
      </div>

      <div className="completion-note">
        <p>
          <strong>Need help?</strong> You can always revisit this guide or contact our support team. 
          Happy shopping! 🛒
        </p>
      </div>
    </div>
  );
};

export default CompletionStep;

