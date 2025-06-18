const WelcomeStep = () => {
  return (
    <div className="onboarding-step">
      <div className="onboarding-step-icon">🛍️</div>
      
      <h3>Bem-vindo à Digital Store!</h3>
      <p>
        Estamos muito felizes em tê-lo conosco! A Digital Store é sua nova 
        experiência de compras online, onde você encontra os melhores produtos 
        com a melhor qualidade.
      </p>
      
      <p>
        Vamos fazer um tour rápido para você conhecer nossos principais recursos 
        e descobrir como aproveitar ao máximo sua experiência de compras.
      </p>
      
      <div style={{ 
        background: '#f8fafc', 
        padding: '20px', 
        borderRadius: '8px', 
        marginTop: '24px',
        textAlign: 'left'
      }}>
        <h4 style={{ margin: '0 0 12px 0', color: '#374151' }}>
          O que você vai descobrir:
        </h4>
        <ul style={{ 
          margin: 0, 
          paddingLeft: '20px', 
          color: '#6b7280',
          lineHeight: '1.6'
        }}>
          <li>Como navegar pelos nossos produtos</li>
          <li>Recursos especiais da plataforma</li>
          <li>Como compartilhar suas descobertas</li>
          <li>Dicas para uma melhor experiência</li>
        </ul>
      </div>
    </div>
  );
};

export default WelcomeStep;
