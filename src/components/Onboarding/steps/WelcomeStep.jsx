import React from 'react';

const WelcomeStep = () => {
  return (
    <div className="welcome-step">
      <div className="step-icon">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      </div>
      
      <h2>Welcome to Digital Store! ⚡</h2>
      
      <p className="step-description">
        We're excited to have you here! Digital Store is your one-stop destination for all things digital. 
        Let's take a quick tour to help you get the most out of your experience.
      </p>

      <div className="welcome-features">
        <div className="feature-item">
          <span className="feature-icon">🛍️</span>
          <div className="feature-text">
            <h4>Browse Products</h4>
            <p>Discover amazing digital products and services</p>
          </div>
        </div>
        
        <div className="feature-item">
          <span className="feature-icon">📱</span>
          <div className="feature-text">
            <h4>Easy Shopping</h4>
            <p>Seamless experience across all your devices</p>
          </div>
        </div>
        
        <div className="feature-item">
          <span className="feature-icon">⚡</span>
          <div className="feature-text">
            <h4>Instant Access</h4>
            <p>Get your digital products immediately after purchase</p>
          </div>
        </div>
      </div>

      <div className="welcome-note">
        <p>
          <strong>This tour will only take a minute</strong> and will help you discover 
          some great features and opportunities to connect with our community.
        </p>
      </div>
    </div>
  );
};

export default WelcomeStep;

