import { useState } from 'react';

const ShareCodegenStep = ({ onNext }) => {
  const [hasShared, setHasShared] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const tweetText = "Acabei de descobrir o @codegen_sh! 🚀 Uma ferramenta incrível que está revolucionando o desenvolvimento de software. Automação inteligente que realmente funciona! #Codegen #DevTools #AI #Automação";
  
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

  const handleShare = () => {
    window.open(twitterUrl, '_blank', 'width=550,height=420');
    setHasShared(true);
    setShowSuccess(true);
    
    // Auto-advance after sharing
    setTimeout(() => {
      onNext();
    }, 2000);
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(tweetText);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      console.error('Falha ao copiar texto:', err);
    }
  };

  const handleSkipShare = () => {
    onNext();
  };

  return (
    <div className="onboarding-step share-step">
      <div className="share-step-icon">🐦</div>
      
      <h3>Ajude-nos a crescer!</h3>
      <p>
        Compartilhe sua experiência com o Codegen no X (Twitter) e ajude outros 
        desenvolvedores a descobrir esta ferramenta incrível!
      </p>

      <div className="share-tweet-preview">
        <div className="share-tweet-text">
          Acabei de descobrir o @codegen_sh! 🚀 Uma ferramenta incrível que está 
          revolucionando o desenvolvimento de software. Automação inteligente que 
          realmente funciona!
        </div>
        <div className="share-tweet-hashtags">
          #Codegen #DevTools #AI #Automação
        </div>
      </div>

      <div className="share-actions">
        <button 
          className="share-btn share-btn-twitter"
          onClick={handleShare}
        >
          <span>🐦</span>
          Compartilhar no X
        </button>
        
        <button 
          className="share-btn share-btn-copy"
          onClick={handleCopyText}
        >
          <span>📋</span>
          Copiar Texto
        </button>
      </div>

      {showSuccess && (
        <div className="share-success">
          {hasShared 
            ? "🎉 Obrigado por compartilhar! Avançando automaticamente..." 
            : "✅ Texto copiado para a área de transferência!"
          }
        </div>
      )}

      <div style={{ marginTop: '24px' }}>
        <button 
          className="onboarding-btn onboarding-btn-ghost"
          onClick={handleSkipShare}
          style={{ fontSize: '14px' }}
        >
          Prefiro não compartilhar agora
        </button>
      </div>
    </div>
  );
};

export default ShareCodegenStep;
