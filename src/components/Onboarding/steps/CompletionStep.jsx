const CompletionStep = ({ onComplete }) => {
  return (
    <div className="onboarding-step">
      <div className="onboarding-step-icon">🎉</div>
      
      <h3>Tudo Pronto!</h3>
      <p>
        Parabéns! Você concluiu o tour pela Digital Store. 
        Agora você está pronto para aproveitar ao máximo nossa plataforma.
      </p>
      
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        color: 'white',
        padding: '24px', 
        borderRadius: '12px', 
        marginTop: '24px',
        textAlign: 'left'
      }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '18px' }}>
          🚀 Próximos Passos:
        </h4>
        <ul style={{ 
          margin: 0, 
          paddingLeft: '20px', 
          lineHeight: '1.8'
        }}>
          <li>Explore nossa coleção de produtos</li>
          <li>Adicione itens ao seu carrinho</li>
          <li>Configure seu perfil e preferências</li>
          <li>Compartilhe suas descobertas com amigos</li>
        </ul>
      </div>
      
      <div style={{ 
        background: '#ecfdf5', 
        border: '1px solid #a7f3d0',
        padding: '16px', 
        borderRadius: '8px', 
        marginTop: '20px',
        textAlign: 'left'
      }}>
        <p style={{ 
          margin: 0, 
          color: '#065f46', 
          fontSize: '14px',
          fontWeight: '500'
        }}>
          💡 <strong>Dica:</strong> Você pode acessar este tour novamente 
          a qualquer momento clicando no botão "Tour" no cabeçalho da página.
        </p>
      </div>
      
      <div style={{ marginTop: '32px' }}>
        <button 
          className="onboarding-btn onboarding-btn-primary"
          onClick={onComplete}
          style={{ 
            fontSize: '16px',
            padding: '12px 32px'
          }}
        >
          Começar a Explorar! 🛍️
        </button>
      </div>
    </div>
  );
};

export default CompletionStep;
