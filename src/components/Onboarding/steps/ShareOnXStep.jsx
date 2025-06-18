import React, { useState } from 'react';
import './ShareOnXStep.css';

const ShareOnXStep = () => {
  const [isShared, setIsShared] = useState(false);

  const shareText = "Just discovered @Codegen - an amazing AI-powered development tool that's revolutionizing how we build software! 🚀 #Codegen #AI #Development";
  const shareUrl = "https://codegen.com";

  const handleShare = async () => {
    const fullShareText = `${shareText}\n\n${shareUrl}`;
    
    // Try to use Web Share API first (mobile-friendly)
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check out Codegen!',
          text: shareText,
          url: shareUrl,
        });
        setIsShared(true);
        return;
      } catch (err) {
        // User cancelled or error occurred, fall back to Twitter URL
      }
    }

    // Fallback to Twitter Web Intent
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(fullShareText)}`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');
    setIsShared(true);
  };

  const handleCopyLink = async () => {
    const fullText = `${shareText}\n\n${shareUrl}`;
    
    try {
      await navigator.clipboard.writeText(fullText);
      // You could add a toast notification here
      alert('Copied to clipboard! You can now paste it on X.');
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = fullText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Copied to clipboard! You can now paste it on X.');
    }
  };

  return (
    <div className="share-on-x-step">
      <div className="step-icon">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </div>
      
      <h2>Help us spread the word! 🚀</h2>
      
      <p className="step-description">
        Love what you're seeing? Help others discover Codegen by sharing it on X (Twitter). 
        Your support helps us build better tools for developers everywhere!
      </p>

      <div className="tweet-preview">
        <div className="tweet-content">
          <div className="tweet-header">
            <div className="tweet-avatar">👤</div>
            <div className="tweet-info">
              <span className="tweet-name">You</span>
              <span className="tweet-handle">@yourhandle</span>
            </div>
          </div>
          <div className="tweet-text">
            {shareText}
          </div>
          <div className="tweet-link">
            🔗 {shareUrl}
          </div>
        </div>
      </div>

      <div className="share-actions">
        <button 
          className="btn btn-primary share-button"
          onClick={handleShare}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          Share on X
        </button>
        
        <button 
          className="btn btn-secondary copy-button"
          onClick={handleCopyLink}
        >
          📋 Copy to Clipboard
        </button>
      </div>

      {isShared && (
        <div className="success-message">
          <span className="success-icon">✅</span>
          Thanks for sharing! You're helping build an amazing developer community.
        </div>
      )}

      <div className="skip-note">
        <small>
          Don't want to share right now? No problem! You can always share later.
        </small>
      </div>
    </div>
  );
};

export default ShareOnXStep;

